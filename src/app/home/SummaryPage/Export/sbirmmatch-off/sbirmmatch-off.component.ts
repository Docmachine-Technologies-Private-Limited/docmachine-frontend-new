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
  
 
}
