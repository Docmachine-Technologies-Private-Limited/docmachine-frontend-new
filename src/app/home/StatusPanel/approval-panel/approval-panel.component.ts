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
        this.downloadAsSingleFile('MergePdf_' + new Date().toUTCString(), merge?.pdfurl);
      });
    }else if(type=='zip'){
      var fitertemp: any = doc.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        this.downloadZip('MergePdf_' + new Date().toUTCString(), merge?.actulapdfbase64);
      });
    }else{
      var fitertemp: any = doc.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        this.sendMail2(merge?.pdf_data, tableName, emaildata);
      });
    }
  }
  downloadAsSingleFile = async (filename, pdfDoc: any) => {
    this.blobToSaveAs(filename, pdfDoc)
  };

  blobToSaveAs(fileName: string, exportText: any) {
    try {
      const linkSource = exportText;
      const downloadLink = document.createElement("a");
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  sendMail2 = async (pdfDoc: any, tableName, Maildata) => {
    if (tableName=== 'Inward-Remitance-Dispoal-Realization') {
      this.SendMailTextWithPDF(pdfDoc?.pdfDataUri,Maildata)
    } else {
      this.userserivce.documentSend(this.USER_DETAILS?.emailId, pdfDoc.data_pdf).subscribe((data) => {
        console.log(data);
        this.toastr.success('Message sent your email id successfully!');
      },
        (error) => {
          console.log('error');
        }
      );
    }
  };
  SendMailTextWithPDF(Mergepdf:any,Maildata: any) {
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
