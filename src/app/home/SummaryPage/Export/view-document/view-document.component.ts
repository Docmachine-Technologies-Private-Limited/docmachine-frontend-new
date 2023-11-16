import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../service/document.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as xlsx from 'xlsx';
import * as data1 from '../../../../currency.json';
import JSZip from 'jszip/dist/jszip';
import * as FileSaver from 'file-saver';
import { PDFDocument } from 'pdf-lib';

import {
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from '../../../shared-Data-Servies/shared-data.service';
import { ShippingbillDataService } from "../../../../service/homeservices/shippingbill.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { UserService } from '../../../../service/user.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MergePdfListService } from '../../../merge-pdf-list.service';
import moment from 'moment';
import { TableServiceController } from '../../../../service/v1/TableServiceController';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss'],
})
export class ViewDocumentComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  @ViewChild('table', { static: false }) table: ElementRef;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public item1: any = [];
  public item2: any = [];
  public item3: any = [];
  public item4: any = [];
  public viewData: any = '';
  public closeResult: string;
  public user;
  public selectedRow;
  public showInvoice;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = '';
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  res;
  filtervisible: boolean = false

  piPoForm = new FormGroup({
    pi_poNo: new FormControl(''),
    benneName: new FormControl(''),
    currency: new FormControl(''),
    amount: new FormControl(''),
    incoterm: new FormControl(''),
    lastDayShipment: new FormControl(''),
    paymentTerm: new FormControl(''),
    pcRefNo: new FormControl(''),
  });
  url: any;
  file: any;
  doc: string;
  pipo: boolean;
  boe: boolean;
  sb: boolean;
  docu: any;
  USER_DATA: any = [];
  PENDING_DATA: any = [];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    Buyer_Name: [],
    Company_Name: [],
    Origin: [],
    Destination: [],
    Currency: [],
    DATE: [],
    NO: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [],
    items: [],
    Expansion_header: [],
    Expansion_Items: [],
    Objectkeys: [],
    ExpansionKeys: [],
    TableHeaderClass: [],
    eventId: 2,
    Expansion_header2: [],
    Expansion_Items2: [],
    ExpansionKeys2: [],
    PageSize: 0
  };
  SHIPPING_BILL_EDIT_FORM_DATA: any = {
    sbdate: '',
    sbno: '',
    adCode: '',
    adBillNo: '',
    buyerName: '',
    consigneeName: '',
    exporterLocationCode: '',
    countryOfFinaldestination: '',
    fobCurrency: '',
    fobValue: ''
  }
  FILTER_FORM: any = ''

  constructor(
    public documentService: DocumentService,
    public shippingBillService: ShippingbillDataService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private sharedData: SharedDataService,
    public wininfo: WindowInformationService,
    private userService: UserService,
    public dialog: MatDialog,
    public pdfmerge: MergePdfListService,
    public filteranytablepagination: TableServiceController,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
  }

  async ngOnInit() {
    this.USER_DATA = await this.userService.getUserDetail();
    this.FILTER_FORM_VALUE = [];
    this.filteranytablepagination.SHOW_TABLE_TBODY = false;
    await this.filteranytablepagination.LoadTableExport({}, { skip: 0, limit: 10 }, 'masterrecord', this.FILTER_VALUE_LIST_NEW)?.masterrecord().then((res) => {
      this.FILTER_VALUE_LIST_NEW = res;
      for (let value of this.filteranytablepagination?.TABLE_CONTROLLER_DATA) {
        if (this.ALL_FILTER_DATA['Buyer_Name'].filter((item: any) => item?.value == value?.buyerName)?.length == 0) {
          this.ALL_FILTER_DATA['Buyer_Name'].push({ value: value?.buyerName });
        }
        if (this.ALL_FILTER_DATA['NO'].filter((item: any) => item?.value == value?.pi_poNo)?.length == 0) {
          this.ALL_FILTER_DATA['NO'].push({ value: value?.pi_poNo });
        }
        if (this.ALL_FILTER_DATA['DATE'].filter((item: any) => item?.value == value?.date)?.length == 0) {
          this.ALL_FILTER_DATA['DATE'].push({ value: value?.date });
        }
      }
      console.log(this.filteranytablepagination.UploadServiceValidatorService.BUYER_DETAILS, this.FILTER_VALUE_LIST_NEW, "BUYER_DETAILS")
      this.FILTER_FORM = {
        buyerName: {
          type: "ArrayList",
          value: "",
          label: "Select buyerName",
          rules: {
            required: false,
          },
          item: this.filteranytablepagination.UploadServiceValidatorService.BUYER_DETAILS,
          bindLabel: "value"
        },
        todate: {
          type: "date",
          value: "",
          label: "Select Start Date",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['DATE'],
          bindLabel: "value"
        },
        fromdate: {
          type: "date",
          value: "",
          label: "Select End Date",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['DATE'],
          bindLabel: "value"
        },
        NO: {
          type: "ArrayList",
          value: "",
          label: "Select Pipo No",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['NO'],
          bindLabel: "value"
        },
      }
    })
    console.log("this.USER_DATA", this.USER_DATA, this.FILTER_VALUE_LIST_NEW);
    this.showInvoice = false;
  }

  FILTER_FORM_VALUE: any = []
  async onSubmit(value: any) {
    let form_value: any = {
      buyerName: value?.value?.buyerName,
      pi_poNo: value?.value?.NO,
    };

    if (value?.value?.todate != '' && value?.value?.todate != undefined) {
      form_value = {
        buyerName: value?.value?.buyerName,
        pi_poNo: value?.value?.NO,
        sbdate: { $gte: value?.value?.todate }
      };
      if ((value?.value?.todate != '' && value?.value?.todate != undefined) && (value?.value?.fromdate != '' && value?.value?.fromdate != undefined)) {
        form_value = {
          buyerName: value?.value?.buyerName,
          pi_poNo: value?.value?.NO,
          sbdate: { $gte: value?.value?.todate, $lt: value?.value?.fromdate }
        };
      }
    } else if (value?.value?.todate != '' && value?.value?.todate != undefined) {
      form_value = {
        buyerName: value?.value?.buyerName,
        pi_poNo: value?.value?.NO,
        sbdate: { $lt: value?.value?.fromdate }
      };
      if ((value?.value?.todate != '' && value?.value?.todate != undefined) && (value?.value?.fromdate != '' && value?.value?.fromdate != undefined)) {
        form_value = {
          buyerName: value?.value?.buyerName,
          pi_poNo: value?.value?.NO,
          sbdate: { $gte: value?.value?.todate, $lt: value?.value?.fromdate }
        };
      }
    }

    const removeEmptyValues = (object) => {
      let newobject: any = {}
      for (const key in object) {
        console.log(typeof object[key], "object[key]")
        if (object[key] != '' && object[key] != null && object[key] != undefined) {
          newobject[key] = object[key];
        }
      }
      return newobject;
    };
    if (Object.keys(removeEmptyValues(form_value))?.length != 0) {
      this.FILTER_FORM_VALUE = removeEmptyValues(form_value)
      await this.filteranytablepagination.LoadTableExport(this.FILTER_FORM_VALUE, { skip: 0, limit: 10 }, 'masterrecord', this.FILTER_VALUE_LIST_NEW)?.masterrecord().then((res) => {
        this.FILTER_VALUE_LIST_NEW = res;
      });
    } else {
      this.toastr.error("Please fill field...")
    }
  }

  reset() {
    this.ngOnInit()
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new ShippingBillFormat(this.filteranytablepagination?.TABLE_CONTROLLER_DATA).getShippingBill());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'ShippingBill.xlsx');
  }

  hide() {
    this.sb = true;
    this.showInvoice = false;
  }
  newShipping() {
    this.sharedData.changeretunurl('home/view-document/sb');
    this.router.navigate(['/home/upload/Export/Shippingbill']);
  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: 'advance' }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log('ALL TRANSACTIONS', this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  getInvoices(selectedRowValues, i) {
    console.log('SELECTED', selectedRowValues);
    console.log('INDEX', i);
    console.log(selectedRowValues.doc);
    this.lastIndex = i;
    //this.docu = selectedRowValues.doc;
    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = '30%'),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  getInvoicesNew(data: any, panel: any) {
    if (data != null) {
      this.lastIndex = data?.index;
      this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]['doc']);
      panel?.displayShow;
      return (
        (this.selectedRow = this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]),
        (this.showInvoice = true),
        (this.tableWidth = '30%'),
        (this.greaterAmount = parseInt(this.selectedRow.amount))
      );
    }
    return null;
  }

  getTransactionsNew(data: any) {
    if (data != null) {
      this.documentService.getTask({ pi_poNo: this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]['pipo'][0]?.pi_poNo, file: 'advance' }).subscribe((res: any) => {
        this.allTransactions = res.task;
        console.log('ALL TRANSACTIONS', this.allTransactions);
      }, (err) => console.log(err));
    }
  }

  onExport() {
    this.export = !this.export;
  }

  onImport() {
    this.import = !this.import;
  }
  exBill() {
    this.Ax1 = !this.Ax1;
  }
  withBill() {
    this.Ax2 = !this.Ax2;
  }

  onNewTrans() {
    this.step1 = !this.step1;
  }

  toggleStep1() {
    this.step1 = false;
    this.showPdf = false;
  }

  viewTask(data) {
    console.log(data);
    if (!data.completed) {
      this.documentService.task = data;
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
      } else {
        console.log(this.selectedDoc);
        this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);
      }
    } else {
      this.router.navigateByUrl(`/home/completed-task/${data._id}`);
    }
  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    if (parseInt(this.selectedRow.amount) < 200000) {
      this.documentService.pdfData = this.selectedRow;
      this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
    } else {
      console.log(this.selectedDoc);

      this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);
    }
  }


  openLetterOfCredit(content) {
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

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  viewCN(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.filteranytablepagination?.TABLE_CONTROLLER_DATA[a?.index]['doc']);
    }, 200);
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateMaster(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        console.log(data);
        this.toastr.success('Shipping Bill row is updated');
        this.SELECTED_SHIPPING_VALUE = '';
      },
      (error) => {
        console.log('error');
      }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateMaster(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Shipping Bill data updated');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  SELECTED_SHIPPING_VALUE: any = '';
  toEdit(data: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "item": JSON.stringify(this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index])
      }
    };
    this.router.navigate([`/home/Summary/Export/Edit/Shippingbill`], navigationExtras);
    this.toastr.warning('Shipping Bill Row Is In Edit Mode');
  }

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]?._id, this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index])
      }
    });
  }

  deleteByRoleType(RoleCheckbox: string, id: any, index: any) {
    if (RoleCheckbox == '') {
      this.documentService.deleteById({ id: id, tableName: 'masterrecord' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'masterrecord',
        deleteflag: '-1',
        userdetails: this.USER_DATA['result'],
        status: 'pending',
        dummydata: index,
        Types: 'deletion',
        TypeOfPage: 'summary',
        FileType: this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox, id, index, approval_data, () => {
        this.ngOnInit();
      });
    }
  }

  transform(input: Array<any>): string {
    return input.join(',');
  }

  FIRX_AMOUNT(amountarray: any): any {
    return parseFloat(amountarray?.split(',')?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
  }

  ARRAY_TO_STRING(array, key) {
    return array[key]?.join(',')
  }

  SHIPPING_BILL_ALL_RELATED_DOCUMENTS: any = [];
  SHIPPING_BILL: any = [];
  async SbSearch(value: any) {
    this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS = [];
    var doclist: any = this.filteranytablepagination?.TABLE_CONTROLLER_DATA?.filter((item: any) => item?.sbno?.includes(value));
    this.FILTER_VALUE_LIST = doclist;
    if (doclist.length == 0) {
      this.ngOnInit();
    }
    this.SHIPPING_BILL = value;
    doclist.forEach(element => {
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.doc, name: 'Shipping Bill', status: false })
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.blCopyDoc, name: 'Bl Copy', status: false })
      this.SHIPPING_BILL_ALL_RELATED_DOCUMENTS.push({ doc: element?.commercialDoc, name: 'Commercial', status: false })
    });
    await this.filteranytablepagination.LoadTableExport({ sbno: value }, { skip: 0, limit: 10 }, 'masterrecord', this.FILTER_VALUE_LIST_NEW)?.masterrecord().then((res) => {
      this.FILTER_VALUE_LIST_NEW = res;
    });
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

class ShippingBillFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  getShippingBill() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        sbdate: element['sbdate'],
        sbno: element['sbno'],
        buyerName: element['buyerName'],
        fobCurrency: element['fobCurrency'],
        fobValue: element['fobValue'],
        balanceAvai: element['balanceAvai'] != '-1' ? element['balanceAvai'] : element['fobValue'],
        exporterLocationCode: element['exporterLocationCode'],
        countryOfFinaldestination: element['countryOfFinaldestination'],
        firxNumber: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxNumber'),
        firxDate: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxDate'),
        firxCurrency: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxCurrency'),
        firxAmount: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxAmount'),
        firxCommision: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxCommision'),
        FIRX_TOTAL_AMOUNT: element['FIRX_TOTAL_AMOUNT']
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