import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from '../../../service/document.service';
import { UserService } from '../../../service/user.service';
import { WindowInformationService } from '../../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip/dist/jszip';
import * as FileSaver from 'file-saver';
import { MergePdfListService } from '../../merge-pdf-list.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-approval-panel',
  templateUrl: './approval-panel.component.html',
  styleUrls: ['./approval-panel.component.scss']
})
export class ApprovalPanelComponent implements OnInit {
  DATA_CREATE: any = [];
  APPROVED_DATA: any = [];
  USER_DETAILS: any = [];

  constructor(public wininfo: WindowInformationService, public documentService: DocumentService,
    public dialog: MatDialog,
    public pdfmerge: MergePdfListService,
    private toastr: ToastrService,
    public userserivce: UserService) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270, '.content_top_common');
    this.userserivce.getUserDetail().then((status: any) => {
      this.USER_DETAILS = status['result'];
      console.log(this.USER_DETAILS, this.USER_DETAILS?.sideMenu, 'USER_DETAILS');
      this.documentService.getApprovedStatus(this.USER_DETAILS?.sideMenu).subscribe((status) => {
        this.DATA_CREATE = status;
        console.log(status, 'statusstatusstatusstatusstatus');
      })
    });
  }

  Approved(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.documentService.DeleteStatus(data).subscribe((status) => {
          console.log(status, 'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
          this.ngOnInit();
        })
      }
    });
  }
  Reject(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.documentService.DeleteStatus(data).subscribe((status) => {
          console.log(status, 'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
          this.ngOnInit();
        })
      }
    });
  }
  detailsViewdata: any = [];
  detailsView(id: any, dump: any) {
    this.detailsViewdata = this.DATA_CREATE[id];
    console.log(this.detailsViewdata, 'detailsViewdata')
  }
  mergeAllPDFs = async (type: String, doc: any, tableName: any, emaildata: any) => {
    if (type == 'download') {
      var fitertemp: any = doc.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        this.downloadAsSingleFile('MergePdf_' + new Date().toUTCString(), merge?.actulapdfbase64);
      });
    } else if (type == 'zip') {
      var fitertemp: any = doc.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        this.downloadZip('MergePdf_' + new Date().toUTCString(), merge?.actulapdfbase64);
      });
    } else {
      var fitertemp: any = doc.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        this.sendMail2(merge?.pdfurl, tableName, emaildata);
      });
    }
  }
  downloadAsSingleFile = async (filename, pdfDoc: any) => {
    this.blobToSaveAs(filename, pdfDoc)
  };

  blobToSaveAs(fileName: any, arraybuffer: any) {
    try {
      const downloadLink = document.createElement("a");
      this.mergePdfs(arraybuffer).then((res: any) => {
        downloadLink.href = res?.merge;
        downloadLink.download = fileName;
        downloadLink.click();
      })
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  mergePdfs(pdfsToMerges) {
    return new Promise(async (resolve, reject) => {
      const mergedPdf = await PDFDocument.create();
      const actions = pdfsToMerges.map(async pdfBuffer => {
        const pdf = await PDFDocument.load(this.toArrayBuffer(pdfBuffer?.data));
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      });
      await Promise.all(actions);
      const pdfDataUri = await mergedPdf.saveAsBase64({ dataUri: true });
      var data_pdf = await pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
      var merge = 'data:application/pdf;base64,' + data_pdf;
      await resolve({ merge: merge, pdfDataUri: pdfDataUri, data_pdf: data_pdf })
    })
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return Buffer.from(binary).toString('base64');
  }
  toArrayBuffer(buffer) {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return arrayBuffer;
  }
  sendMail2 = async (pdfDoc: any, tableName, Maildata) => {
    if (tableName === 'Inward-Remitance-Dispoal-Realization') {
      this.SendMailTextWithPDF(pdfDoc, Maildata)
    } else {
      this.userserivce.documentSendMail(this.USER_DETAILS?.emailId, pdfDoc).subscribe((data) => {
        console.log(data);
        this.toastr.success('Message sent your email id successfully!');
      },
        (error) => {
          console.log('error');
        }
      );
    }
  };
  SendMailTextWithPDF(Mergepdf: any, Maildata: any) {
    let val = {
      number: Maildata['Number'].toString(),
      amount: Maildata['Amount'].toString(),
      pdf: Mergepdf
    }
    console.log(val, 'sendMail')
    this.documentService.SendMail_TextPdf({ task: val }).subscribe((res2) => {
      this.toastr.success('Message sent your email id successfully!');
    },
      (err) => console.log("ERROR")
    );
  }
  downloadZip(name_zip, pdfByteArrays: any) {
    var zip: any = new JSZip();
    var pdf = zip.folder("pdfs") as any;
    pdfByteArrays.forEach((value, i) => {
      pdf.file(i + '.pdf', value?.data, { base64: true });
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, name_zip + ".zip");
    });

  }
}
