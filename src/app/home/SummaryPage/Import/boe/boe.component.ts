import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DocumentService } from "../../../../service/document.service";
import * as xlsx from 'xlsx';
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from "../../../shared-Data-Servies/shared-data.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { UserService } from './../../../../service/user.service';
import * as data1 from '../../../../currency.json';
import { MatDialog } from '@angular/material/dialog';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import JSZip from 'jszip/dist/jszip';
import * as FileSaver from 'file-saver';
import { MergePdfListService } from '../../../merge-pdf-list.service';
import { PDFDocument } from 'pdf-lib';
import moment from 'moment';

@Component({
  selector: 'import-boe-summary',
  templateUrl: './boe.component.html',
  styleUrls: ['./boe.component.scss']
})
export class ImportBOEComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public showInvoice;
  public selectedRow;
  docu: any;
  public viewData: any;
  public item: any;
  public closeResult: string;
  public lastIndex;
  public item1: any = [];
  public tableWidth;
  public greaterAmount = 0;
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  filtervisible: boolean = false;
  USER_DATA: any = [];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    BOE_NUMBER: [],
    Buyer_Name: [],
    AD_CODE: [],
    AD_BILL_NO: [],
    IEC_CODE: [],
    IEC_NAME: [],
    ORIGIN: [],
    DISCHARGE_PORT: [],
    Currency: [],
    DATE: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Pipo No.",
      "DATE",
      "CI NUMBER",
      "BOE NUMBER",
      "Beneficiary Name",
      "CURRENCY",
      "BOE AMOUNT",
      "AVAILABLE BALANCE",
      "Action"],
    items: [],
    Expansion_header: [
      "AD CODE",
      "AD BILL NO",
      "IEC CODE",
      "IEC NAME",
      "ORIGIN",
      "DISCHARGE PORT"
    ],
    Expansion_Items: [],
    Objectkeys: [],
    ExpansionKeys: [],
    TableHeaderClass: [
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-1"
    ],
    eventId: 2
  }
  SHIPPING_BILL_EDIT_FORM_DATA: any = {
    boeDate: "",
    commercialNumber: "",
    boeNumber: "",
    benneName: "",
    currency: "",
    invoiceAmount: "",
    balanceAmount: "",
    adCode: "",
    adBillNo: "",
    iecCode: "",
    iecName: "",
    origin: "",
    dischargePort: ""
  }

  constructor(
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private sharedData: SharedDataService,
    private userService: UserService,
    public wininfo: WindowInformationService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,

  ) { }


  async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    this.item1 = [];
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.documentService.getBoe(1).subscribe(
      (res: any) => {
        for (let value of res.data) {
          if (value['file'] == 'import') {
            this.item1.push(value);
            value?.benneName.forEach(element => {
              if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
                this.ALL_FILTER_DATA['Buyer_Name'].push(element);
              }
            });
            if (this.ALL_FILTER_DATA['BOE_NUMBER'].includes(value?.boeNumber) == false) {
              this.ALL_FILTER_DATA['BOE_NUMBER'].push(value?.boeNumber);
            }
            if (this.ALL_FILTER_DATA['AD_CODE'].includes(value?.adCode) == false) {
              this.ALL_FILTER_DATA['AD_CODE'].push(value?.adCode);
            }
            if (this.ALL_FILTER_DATA['AD_BILL_NO'].includes(value?.adBillNo) == false) {
              this.ALL_FILTER_DATA['AD_BILL_NO'].push(value?.adBillNo);
            }
            if (this.ALL_FILTER_DATA['IEC_CODE'].includes(value?.iecCode) == false) {
              this.ALL_FILTER_DATA['IEC_CODE'].push(value?.iecCode);
            }
            if (this.ALL_FILTER_DATA['IEC_NAME'].includes(value?.iecName) == false) {
              this.ALL_FILTER_DATA['IEC_NAME'].push(value?.iecName);
            }
            if (this.ALL_FILTER_DATA['ORIGIN'].includes(value?.origin) == false) {
              this.ALL_FILTER_DATA['ORIGIN'].push(value?.origin);
            }
            if (this.ALL_FILTER_DATA['DISCHARGE_PORT'].includes(value?.dischargePort) == false) {
              this.ALL_FILTER_DATA['DISCHARGE_PORT'].push(value?.dischargePort);
            }
            if (this.ALL_FILTER_DATA['DATE'].includes(value?.boeDate) == false) {
              this.ALL_FILTER_DATA['DATE'].push(value?.boeDate);
            }
          }
        }
        this.item1.forEach(element => {
          if (element?.balanceAmount == '-1') {
            element['balanceAmount'] = element?.invoiceAmount
          }
        });
        this.FILTER_VALUE_LIST = this.item1;
        this.BILL_OF_ENTRY_Table(this.FILTER_VALUE_LIST);
        console.log(res, 'yuyuyuyuyuyuyuuy')
      },
      (err) => console.log(err)
    );

  }

  openBoe(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item1.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length == 0) {
      this.FILTER_VALUE_LIST = this.item1;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item1;
  }
  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new BillofEntryFormat(this.FILTER_VALUE_LIST).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'BOE.xlsx');
  }

  uploadNew() {
    this.sharedData.changeretunurl('home/boe')
    this.router.navigate(['home/upload', { file: 'import', document: 'boe' }]);
  }

  getInvoices(selectedRowValues, i) {
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    console.log(selectedRowValues.doc);
    this.lastIndex = i;

    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: "advance" }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  hide() {
    this.showInvoice = false;
  }

  viewpdf(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.FILTER_VALUE_LIST[a?.index]['doc']);
    }, 200);
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateBoe(data, data._id).subscribe((data) => {
      console.log("king123");
      console.log(data);
      this.toastr.success('Bill Of Entry row is updated')
    }, (error) => {
      console.log("error");
    }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateBoe(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Bill Of Entry data updated');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  SELECTED_SHIPPING_VALUE: any = '';
  toEdit(data: any) {
    this.SELECTED_SHIPPING_VALUE = '';
    this.SELECTED_SHIPPING_VALUE = this.FILTER_VALUE_LIST[data?.index];
    this.SHIPPING_BILL_EDIT_FORM_DATA = {
      boeDate: this.SELECTED_SHIPPING_VALUE['boeDate'],
      commercialNumber: this.SELECTED_SHIPPING_VALUE['commercialNumber'],
      boeNumber: this.SELECTED_SHIPPING_VALUE['boeNumber'],
      benneName: this.SELECTED_SHIPPING_VALUE['benneName'],
      currency: this.SELECTED_SHIPPING_VALUE['currency'],
      invoiceAmount: this.SELECTED_SHIPPING_VALUE['invoiceAmount'],
      balanceAmount: this.SELECTED_SHIPPING_VALUE['balanceAmount'] != '-1' ? this.SELECTED_SHIPPING_VALUE['balanceAmount'] : this.SELECTED_SHIPPING_VALUE['invoiceAmount'],
      adCode: this.SELECTED_SHIPPING_VALUE['adCode'],
      adBillNo: this.SELECTED_SHIPPING_VALUE['adBillNo'],
      iecCode: this.SELECTED_SHIPPING_VALUE['iecCode'],
      iecName: this.SELECTED_SHIPPING_VALUE['iecName'],
      origin: this.SELECTED_SHIPPING_VALUE['origin'],
      dischargePort: this.SELECTED_SHIPPING_VALUE['dischargePort']
    }
    // this.optionsVisibility[index] = true;
    this.toastr.warning('Bill Of Entry Row Is In Edit Mode');
  }

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.FILTER_VALUE_LIST[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.FILTER_VALUE_LIST[data?.index]?._id, this.FILTER_VALUE_LIST[data?.index])
      }
    });
  }

  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }

  deleteByRoleType(RoleCheckbox: string, id: any, index: any) {
    if (RoleCheckbox == '') {
      this.documentService.deleteById({ id: id, tableName: 'boerecords' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'boerecords',
        deleteflag: '-1',
        userdetails: this.USER_DATA['result'],
        status: 'pending',
        dummydata: this.item1[index],
        Types: 'deletion',
        TypeOfPage: 'summary',
        FileType: this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox, id, index, approval_data, () => {
        this.ngOnInit();
      });
    }
  }
  SHIPPING_BILL_ALL_RELATED_DOCUMENTS: any = [];
  SHIPPING_BILL: any = [];
  SbSearch(value: any) {
    this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS = [];
    var doclist: any = this.item1.filter((item: any) => item?.boeNumber == value);
    this.FILTER_VALUE_LIST = doclist;
    if (doclist.length == 0) {
      this.resetFilter();
    }
    this.SHIPPING_BILL = value;
    doclist.forEach(element => {
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.doc, name: 'BOE', status: false })
      // this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.blCopyDoc, name: 'Bl Copy', status: false })
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.CI_DETAILS?.commercialDoc, name: 'Commercial', status: false })
    });
    this.BILL_OF_ENTRY_Table(this.FILTER_VALUE_LIST);
  }

  tickdoc(event: any, index: any) {
    if (event?.target.checked) {
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS[index]['status'] = true
    } else {
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS[index]['status'] = false
    }
    console.log(this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS, 'this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS')
  }

  async download(doclist: any, type: any) {
    var temp: any = [];
    var temp_name: any = [];
    await doclist.forEach(async (element) => {
      if (element?.doc != undefined && element?.status == true) {
        await temp.push(element?.doc)
        await temp_name.push(element?.name)
      }
    });
    if (temp.length != 0) {
      var fitertemp: any = temp.filter(n => n)
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then((merge: any) => {
        console.log(merge, 'mergeAllPDFs')
        if (type == 'merge') {
          this.downloadAsSingleFile('MergePdf_' + new Date().toUTCString(), merge?.actulapdfbase64);
        } else if (type == 'zip') {
          this.downloadZip('All_Documents_' + new Date().toUTCString(), merge?.actulapdfbase64, temp_name);
        }
      });
    } else {
      this.toastr.error('Please select documents checkbox...')
    }
  }

  downloadZip(name_zip, pdfByteArrays: any, namelist: any) {
    var zip: any = new JSZip();
    var pdf = zip.folder("pdfs") as any;
    pdfByteArrays.forEach((value, i) => {
      pdf.file(namelist[i] + '.pdf', value?.data, { base64: true });
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, name_zip + ".zip");
    });
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
  toArrayBuffer(buffer) {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return arrayBuffer;
  }

  BILL_OF_ENTRY_Table(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['pipo']),
          date: moment(element['boeDate']).format('DD-MM-YYYY'),
          CINUMBER: element['commercialNumber'],
          BOENUMBER: element['boeNumber'],
          buyerName: element['benneName'],
          Currency: element['currency'],
          BOEAMOUNT: element['invoiceAmount'],
          balanceAvai: element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount'],
          isExpand: false,
          disabled: element['deleteflag'] != '-1' ? false : true,
          RoleType: this.USER_DATA?.result?.RoleCheckbox,
          ITEMS_STATUS: this.documentService.getDateStatus(element?.createdAt) == true ? 'New' : 'Old',
          Expansion_Items: [{
            adCode: element['adCode'],
            adBillNo: element['adBillNo'],
            IECCODE: element['iecCode'],
            IECNAME: element['iecName'],
            ORIGIN: element['origin'],
            DISCHARGEPORT: element['dischargePort']
          }]
        })
      });
      if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
        this.FILTER_VALUE_LIST_NEW['ExpansionKeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0]['Expansion_Items'][0]);
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'ITEMS_STATUS')
      }
    });
  }
  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  async removeEmpty(data: any) {
    await data.forEach(element => {
      for (const key in element) {
        if (element[key] == '' || element[key] == null || element[key] == undefined) {
          element[key] = 'NF'
        }
      }
    });
    return await new Promise(async (resolve, reject) => { await resolve(data) });
  }
  SB_NO: any = ''
  getSbNo(data: any) {
    this.SB_NO = data?.item?.sbno
  }
}

class BillofEntryFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        date: element['boeDate'],
        "CI NUMBER": element['commercialNumber'],
        "BOE NUMBER": element['boeNumber'],
        buyerName: element['benneName'],
        Currency: element['currency'],
        "BOE AMOUNT": element['invoiceAmount'],
        balanceAvai: element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount'],
        adCode: element['adCode'],
        adBillNo: element['adBillNo'],
        IECCODE: element['iecCode'],
        IECNAME: element['iecName'],
        ORIGIN: element['origin'],
        "DISCHARGE PORT": element['dischargePort']
      })
    });
    return temp;
  }
  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  ARRAY_TO_STRING(array, key) {
    return array[key]?.join(',')
  }

}
