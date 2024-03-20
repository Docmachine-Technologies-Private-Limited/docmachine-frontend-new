import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from '../../../Transaction/Export/new-export-bill-lodgement/export-bill-lodgemet-data';
import * as xlsx from 'xlsx';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-sbirmmatch-off',
  templateUrl: './sbirmmatch-off.component.html',
  styleUrls: ['./sbirmmatch-off.component.scss', '../commoncss/common.component.scss']
})
export class SBIRMMatchOffComponent implements OnInit {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();
  TOTAL_SUM_FIREX: any = 0;
  TOTAL_SUM_FIREX_COMMISION: any = 0
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: [],
    AMOUNT: []
  }
  TOTAL_PIPO_AMOUNT: any = 0;
  SB_NO: any = '';
  FILETR_AMOUNT: any = [];
  SELECT_BUYER_DETAILS: any = '';
  LETTER_HEAD_URL: any = '';
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  INVOICE_LIST: any = {
    sno: '1',
    invoiceno: '',
    amount: '',
    currency: ''
  };
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  cicreate: any = [];
  GroupLabel: any = [];
  CI_INFO_SUM: any = {
    CI_SUM: 0,
    TOTAL_CI: 0,
    PIPO_AMOUNT: 0,
    REMAINING_AMOUNT: 0
  }

  FORM_VALUE: any = null;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public exportbilllodgementdata: ExportBillLodgementData,
    public userService: UserService) { }

  ngOnInit(): void {
    this.exportbilllodgementdata.clear();
    console.log(this.exportbilllodgementdata, "exportbilllodgementdata")
    this.response(null);
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  setSelectedBankDetails(bank: any) {
    this.BankId = bank?.BankUniqueId;
    console.log(bank, "setSelectedBankDetails")
  }


  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.validator.buildForm({
        Bank: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          rules: {
            required: true,
          }
        },
        CIType: {
          type: "yesnocheckbox",
          value: '',
          label: "Do you want Single or Multiple CI?",
          rules: {
            required: true,
          },
          YesNo: '',
          text1: 'Single',
          text2: 'Multiple'
        },
        SHIPPING_BILL: {
          type: "PopupOpen",
          value: '',
          label: "Select Shipping Bill",
          rules: {
            required: true,
          },
          class: "PopupOpen",
          bindLabel: "value",
          item: [{ value: 'Shipping bill' }],
          id: "SHIPING_BILL_POPUP",
        },
      }, 'EXPORT_BILL_OF_EXCHANGE');
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  CI_INDEX: any = -1
  SelectIRM(index: any) {
    this.CI_INDEX = index;
  }

  YesNoCheckBox(value: any) {
    console.log("YesNoCheckBoxEvent", value)
  }


  exportToExcel(data) {
    console.log(data, "jhghjgjgjgjh")
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new ForexAdviceFormat(data).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, `ExportLodgement_${new Date().getTime()}.xlsx`);
  }

  download(SummaryDetails: any) {
    let dataTable: any = []
    const doc1: any = new jsPDF('l', 'mm', 'a3')
    let text = "Bill Lodgement details";
    var pageWidth: any = doc1.internal.pageSize.width || doc1.internal.pageSize.getWidth();
    doc1.text(text, pageWidth / 2, 20, { align: 'center' });
    let blcopyRef: any = [];
    for (let i = 0; i < SummaryDetails?.blcopyRef?.length; i++) {
      blcopyRef.push(SummaryDetails?.blcopyRef[i]?.blcopyrefNumber)
    }
    for (let i = 0; i < SummaryDetails?.commercialdetails?.length; i++) {
      let element = SummaryDetails?.commercialdetails[i];
      for (let j = 0; j < element?.MatchOffData?.length; j++) {
        let element2 = element?.MatchOffData[j];
        dataTable.push([
          SummaryDetails?.sbdate,
          SummaryDetails?.sbno,
          SummaryDetails?.fobValue,
          SummaryDetails?.balanceAvai,
          element?.commercialNumber,
          element?.commercialDate,
          element?.amount,
          element2?.billNo,
          element2?.amount,
          element2?.InputValue,
          element2?.BalanceAvail,
          blcopyRef?.join(",")
        ]);
      }
    }
    console.log(dataTable)
    autoTable(doc1, {
      margin: { top: 30, left: 10, bottom: 30 },
      head: [['Sb Dt.', 'Sb No.', 'Sb Amt', 'BalAvai', 'CI Date', 'CI No.', 'CI Amt', 'FIRX No.', 'FIRX Amt', 'FIRX Amt Used', 'FIRX BalAvai', 'BlAdvice Ref No.']],
      body: dataTable,
    })
    doc1.save(`ExportLodgement_${new Date().getTime()}.pdf`);
  }

  downloadAll(SummaryDetails: any) {
    let dataTable: any = []
    const doc1: any = new jsPDF('l', 'mm', 'a3')
    let text = "Bill Lodgement details";
    var pageWidth: any = doc1.internal.pageSize.width || doc1.internal.pageSize.getWidth();
    doc1.text(text, pageWidth / 2, 20, { align: 'center' });
    let blcopyRef: any = [];
    console.log(SummaryDetails,"SummaryDetails")
    for (let index = 0; index < SummaryDetails.length; index++) {
      const elementSummaryDetails:any = SummaryDetails[index];
      for (let i = 0; i < elementSummaryDetails?.blcopyRef?.length; i++) {
        blcopyRef.push(elementSummaryDetails?.blcopyRef[i]?.blcopyrefNumber)
      }
      for (let i = 0; i < elementSummaryDetails?.commercialdetails?.length; i++) {
        let element = elementSummaryDetails?.commercialdetails[i];
        for (let j = 0; j < element?.MatchOffData?.length; j++) {
          let element2 = element?.MatchOffData[j];
          dataTable.push([
            elementSummaryDetails?.sbdate,
            elementSummaryDetails?.sbno,
            elementSummaryDetails?.fobValue,
            elementSummaryDetails?.balanceAvai,
            element?.commercialNumber,
            element?.commercialDate,
            element?.amount,
            element2?.billNo,
            element2?.amount,
            element2?.InputValue,
            element2?.BalanceAvail,
            blcopyRef?.join(",")
          ]);
        }
      }
    }
    autoTable(doc1, {
      margin: { top: 30, left: 10, bottom: 30 },
      head: [['Sb Dt.', 'Sb No.', 'Sb Amt', 'BalAvai', 'CI Date', 'CI No.', 'CI Amt', 'FIRX No.', 'FIRX Amt', 'FIRX Amt Used', 'FIRX BalAvai', 'BlAdvice Ref No.']],
      body: dataTable,
    })
    doc1.save(`ExportLodgement_${new Date().getTime()}.pdf`);
    console.log(dataTable)
  }
}

class ForexAdviceFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        date: element['date'],
        sbno: element['sbno'] != 'NF' ? element['sbno']?.join(",") : "",
        SBAmount: element['sbno'] != 'NF' ? element['sbno']?.join(",") : "",
        buyerName: this.getBuyerName(element['buyerName']),
        BankName: element['BankName']?.value,
        currency: element['currency'],
        amount: element['amount'],
        billNo: element['billNo'],
        From: element['origin'],
        Branch: element['location'],
        Description: element['commodity'],
        CommissionBankCharges: element['commision'],
        PaymentType: element['PaymentType'],
        BalanceAvail: element['BalanceAvail'] != undefined ? element['BalanceAvail'] : element['amount'],
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

  getBuyerName(buyerName: any) {
    let temp: any = [];
    buyerName.forEach(element => {
      temp.push(element);
    });
    return temp.join(',')
  }

  ARRAY_TO_STRING(array, key) {
    return array[key]?.join(',')
  }

}
