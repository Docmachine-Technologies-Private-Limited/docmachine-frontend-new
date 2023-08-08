import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'
import A2_JOSN from '../../../../../assets/JSON/A2.json';
import {
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';

import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentService } from "../../../../service/document.service";
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';

@Component({
  selector: 'add-advance-outward-remittance-a2',
  templateUrl: './add-advance-outward-remittance-a2.component.html',
  styleUrls: ['./add-advance-outward-remittance-a2.component.scss'],
  providers: [{ provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } }]
})
export class AddAdvanceOutwardRemittanceA2Component implements OnInit {
  LocationData: any = []
  bankDetail: any = []
  commodity: any = []
  buyer: string;
  bank: string;
  benneName: string;
  selectedBankName: string;
  selectedBenneId: string;
  selectedBenneName: string;
  uploading: boolean = false;
  authToken: any;

  CurrencyData: any = ['INR', 'USD', 'EUR', 'GBP', 'CHF', 'AUD', 'CAD', 'AED', 'SGD', 'SAR', 'JPY']
  SHIPPING_BILL_LIST: any = [{ value: 'Select BOE' }];

  public type: string = "directive";
  public res:any;
  public size:any;
  public uploadUrl: any = '';
  public uploadUrl_Original: any = '';

  public message = "";
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;

  opinionReport: boolean = false;
  document: any;
  file: any;
  api_base: any;
  headers: any;

  isUploaded: boolean = false;

  public config: DropzoneConfigInterface;

  pipoForm: any = FormGroup;
  submitted = false;
  selectedItems: any = [];
  selectedBenne: any = [];
  LIST_PIPO: any = [];
  sumTotalAmount = 0;
  showOpinionReport = 0;
  showSummaryPage = 0;
  isCheckedYes: boolean = false;
  isCheckedNo: boolean = false;
  charge: any;
  formerge: string | ArrayBuffer | Uint8Array;
  remittanceUrl: any;
  newTask: any = [];
  PREVIWES_URL: any = '';
  PREVIEWS_URL_LIST: any = [];
  A2_JSON_DATA: any = [];
  CA_CERTIFICATE_FORM: any = {
    benneName: "",
    ApplicantName: "",
    LCIssuingBank: "",
    SupplierName: "",
    SupplierBankNameSWIFTCode: "",
    Currency: "",
    LCNoBOENo: "",
    LCBOEAmount: "",
    Commodity: "",
    LatestdateofShipment: "",
    OriginOfGoods: "",
    PortofLoading: "",
    PortofDischarge: "",
    NumberofShipment: "",
    ConfirmationChargesborne: "",
    DiscountingChargesborne: "",
  }
  PARTY_NAME_LIST: any = [];
  COMPANY_DETAILS: any = [];
  ALL_DROPDOWN_VALUE_LIST: any = {
    BOE_PIPO: [],
    Beneficiary: [],
    Bank: [],
    DROPDOWN_BOE: []
  }
  PIPO_LIST: any = {
    PIPO_NAME_LIST: [],
    data: [],
    original_data: [],
    SINGLE_BOE_INFO: [],
    Multiple_PIPO_INFO: [],
    Multiple_BOE_INFO: [],
    TransactionRef: []
  };
  BOE_DETAILS: any = [];
  PURPOSE_CODE_FILTER_DATA: any = [];
  PURPOSE_CODE_LIST_DATA: any = [];
  CURRENCY_LIST:any=[];

  toppings: any = this.formBuilder.group({
    FormA2CumApplication: new FormControl({ value: false, disabled: true }),
    "_CA": new FormControl({ value: false, disabled: true }),
    "_CB": new FormControl({ value: false, disabled: true }),
    Invoice_Debit_Note: new FormControl({ value: false, disabled: true }),
    EXTRA_DOC_1: new FormControl({ value: false, disabled: true }),
    EXTRA_DOC_2: new FormControl({ value: false, disabled: true }),
    EXTRA_DOC_3: new FormControl({ value: false, disabled: true }),
  });
  UrlList: any = '';
  
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public mergerpdf: MergePdfService,
    public wininfo: WindowInformationService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) {
    this.loadFromLocalStorage();
    this.api_base = this.userService?.api_base;
    this.pipoForm = this.formBuilder.group({
      bank: new FormControl('', Validators.required),
      benneName: new FormControl('', Validators.required),
      RemittanceTotalAmount: new FormControl("", Validators.required),
      pipoTerm: new FormArray([this.initItems()]),
      Total_PI_Amount: new FormControl('', Validators.required),
      CustomerID: new FormControl('', Validators.required),
      PANNo: new FormControl('', Validators.required),
      BRANCH_NAME: new FormControl('', Validators.required)
    });
    this.FormData=this.pipoForm?.value;
  }

  async ngOnInit() {
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`
    };
    this.CURRENCY_LIST=this.documentService.getCurrencyList();
    console.log(this.CURRENCY_LIST,'CURRENCY_LIST')
    this.A2_JSON_DATA = A2_JOSN;
    this.A2_JSON_DATA.forEach(element => {
      for (const key in element) {
        if (key != 'SL_No') {
          element[key] = this.text_array(element[key])
        }
      }
    });
    this.PURPOSE_CODE_LIST_DATA = [];
    var temp_purcode: any = [];
    this.A2_JSON_DATA.forEach(element => {
      if (!temp_purcode.includes(element?.RBI_Purpose_Code[0])) {
        temp_purcode.push(element?.RBI_Purpose_Code[0])
      }
      for (const key in element) {
        element['isExpand'] = false;
      }
    });
    temp_purcode.forEach(element => {
      this.PURPOSE_CODE_LIST_DATA.push({ value: element })
    });
    this.PURPOSE_CODE_FILTER_DATA = this.A2_JSON_DATA;
    console.log(this.A2_JSON_DATA, this.PURPOSE_CODE_FILTER_DATA, this.PURPOSE_CODE_LIST_DATA, 'A2_JOSN')

    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
    });
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
      this.userService.getTeambyId(res?.result?.companyId).subscribe((COMPANY_DETAILS_RES: any) => {
        this.COMPANY_DETAILS = COMPANY_DETAILS_RES?.data[0];
        this.CA_CERTIFICATE_FORM['ApplicantName'] = this.COMPANY_DETAILS?.teamName
        console.log(COMPANY_DETAILS_RES, 'COMPANY_DETAILS_RES')
      })
    });
    this.config = {
      url: `${this.api_base}/member/uploadImage`,
      method: `POST`,
      maxFiles: 5,
      maxFilesize: 5,
      addRemoveLinks: true,
      headers: this.headers,
      timeout: 820000,
      // autoProcessQueue: false,
      dictDefaultMessage: "Drag a document here",
      acceptedFiles:
        "image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx",
      previewTemplate:
        '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
    };

    // buyerName commodity doc
    this.getDropdownData()
   
  }

  initItems() {
    return this.formBuilder.group({
      pi_poNo: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      payableAmount: ['', Validators.required],
      remittanceAmount: ['', Validators.required],
    });
  }

  //hiding info box
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  ORIGNAL_BANK_DETAILS: any = [];
  BANK_LIST_DROPDOWN: any = [];
  ForwardContractDATA: any = [];
  HS_CODE_DATA: any = [];
  FILTER_HS_CODE_DATA: any = [];
  ToChargesAccountdata: any = [];
  ToCreditAccountdata: any = [];
  COMPANY_INFO: any = [];
  getDropdownData() {
    this.userService.getTeam()
      .subscribe(
        data => {
          this.COMPANY_INFO = data['data'];
          this.commodity = data['data'][0]['commodity']
          this.LocationData = data['data'][0]['location']
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
            this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
            this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
          }
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            if (this.BANK_LIST_DROPDOWN.filter((item: any) => item?.value?.includes(data['data'][0]['bankDetails'][index]?.bank))?.length == 0) {
              this.BANK_LIST_DROPDOWN.push({
                value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId,
              })
            }
          }
        },
        error => {
          console.log("error")
        });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        console.log('benneDetail', res.data);
        this.benneDetail = res.data
      },
      (err) => console.log("Error", err)
    );
    this.documentService.ForwardContractget().subscribe((res: any) => {
      this.ForwardContractDATA = res?.data;
      console.log(res, 'daasdasdasdasdasdadsd')
    });
    this.HS_CODE_DATA = this.documentService.getHSCODE();
    this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
  }

  changepipo(id) {
    let temp = [];
    this.pipoData = [];
    temp = this.benneDetail.filter(items => items?._id.includes(id?._id));
    this.selectedBenne = temp.pop();
    this.CA_CERTIFICATE_FORM['SupplierName'] = id?.benneName
    console.log('this.selectedBenneName', this.selectedBenne);
    this.pipoDataService.getPipoListByCustomer('import', this.selectedBenne?.benneName).then((data: any) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data: any) => {
        data.forEach(element => {
          element['balanceAmount'] = element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['amount']
        });
        console.log(data, 'data2222..................')
        for (let index = 0; index < data.length; index++) {
          if (data[index]?.balanceAmount != '0' && data[index]?.balanceAmount != 0) {
            this.LIST_PIPO[data[index]['_id']] = data[index];
            this.pipoData.push(data[index]);
          }
        }
        console.log('importpipolist', this.pipoData, this.LIST_PIPO);
      });
    });;
  }
  DATA: any = [];
  slicedData(data: any[], id: any, value: any) {
    if (value != '') {
      var indexof = data.map(e => e?._id).indexOf(value);
      if (indexof == -1) {
        this.DATA[id] = data
      } else {
        delete data[indexof]
        var temp: any = data;
        for (let index = 0; index < temp.length; index++) {
          this.DATA[id].push(temp[index]);
        }
      }
    } else {
      this.DATA[id] = data
    }
  }
  ITEM_FILL_PDF: any = [];
  temp1: any = [];

  choosenItems(id, i) {
    let temp: any = [];
    let temp2: any = [];
    temp = this.pipoData.filter(items => {
      return items._id == id
    });
    temp2 = this.pipoData.filter(items => {
      return items._id == id
    });
    this.temp1[i] = [];
    this.ITEM_FILL_PDF[i] = temp;
    temp = temp.map((items) => {
      return {
        pipo_id: items._id,
        pipo_no: items.pi_poNo,
        doc: items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc) : items.doc,
        amount: items.amount,
        currency: items.currency,
        buyerName: items.buyerName,
        date: items.date,
        balanceAmount: items?.balanceAmount ?? "",
      };
    });
    this.selectedItems[i] = temp.pop();
    temp2[0] = temp2.pop();
    for (let index = 0; index < temp2.length; index++) {
      this.temp1[i].push({
        pdf: (temp2[index]['doc']),
        name: 'PIPO'
      });
    }
    this.BOE_DETAILS = [];
    this.BOE_DETAILS = [];
    var tempboenumber: any = [];
    var tempboeamount: any = [];
    var tempboecurrency: any = [];
    var tempboeorigin: any = [];
    var tempboedischargePort: any = [];
    this.EXTRA_DOCUMENTS['INVOICE_DOCUMENTS'] = []
    this.EXTRA_DOCUMENTS['DEBIT_NOTES_DOCUMENTS'] = [];

    temp2.forEach(element => {
      tempboenumber.push(element?.boeNumber)
      tempboeamount.push(element?.balanceAmount)
      tempboecurrency.push(element?.currency)
      tempboeorigin.push(element?.origin)
      tempboedischargePort.push(element?.dischargePort)
      this.EXTRA_DOCUMENTS['INVOICE_DOCUMENTS'].push(element?.doc);
      this.EXTRA_DOCUMENTS['DEBIT_NOTES_DOCUMENTS'].push(element?.debitNoteRef[element?.debitNoteRef?.length - 1]?.doc)
    });
    this.BOE_DETAILS = {
      BOE_NUMBER: tempboenumber.join(','),
      BOE_AMOUNT: tempboeamount.join(','),
      CURRENCY: tempboecurrency.join(','),
      ORIGIN: tempboeorigin.join(','),
      DISCHARGE_PORT: tempboedischargePort.join(',')
    }
    this.CA_CERTIFICATE_FORM['LCNoBOENo'] = this.BOE_DETAILS?.BOE_NUMBER
    this.CA_CERTIFICATE_FORM['LCBOEAmount'] = this.BOE_DETAILS?.BOE_AMOUNT
    this.CA_CERTIFICATE_FORM['OriginOfGoods'] = this.BOE_DETAILS?.ORIGIN
    this.CA_CERTIFICATE_FORM['Currency'] = this.BOE_DETAILS?.CURRENCY
    this.CA_CERTIFICATE_FORM['PortofDischarge'] = this.BOE_DETAILS?.DISCHARGE_PORT

    console.log(this.temp1, temp2, this.EXTRA_DOCUMENTS, 'selectedItemsselectedItems')
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.balanceAmount), 0);
    this.showOpinionReport = 0;
    this.OTHER_BANK_VISIBLE = false;

    if (temp2.length != 0) {
      this.toppings.controls.Invoice_Debit_Note.setValue(true);
    } else {
      this.toppings.controls.Invoice_Debit_Note.setValue(false);
    }

    setTimeout(() => { this.OTHER_BANK_VISIBLE = true; }, 150)
  }

  showhideOpinionReport(value) {
    this.showOpinionReport = value;
    if (value == 1) {
      this.isCheckedYes = true;
      this.isCheckedNo = false;
    }
    else {
      this.isCheckedYes = false;
      this.isCheckedNo = true;
    }

  }

  BANK_DETAILS: any = [];
  OTHER_BANK_VISIBLE: boolean = false
  onSelectBank(value) {
    this.selectedBankName = value?.id;
    this.BANK_DETAILS = this.bankDetail.filter((item) => item?.id.includes(value?.id))[0]?.org;
    console.log(this.BANK_DETAILS,value, 'this.BANK_DETAILS')
    this.bankformat = ''
    this.bankformat = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.selectedBankName) != -1);
    console.log(this.BANK_DETAILS, this.bankformat, 'this.newBankArray')
    if (this.bankformat.length != 0 && this.bankformat[0]?.urlpdf != '') {
      this.OTHER_BANK_VISIBLE = false;
    } else {
      this.OTHER_BANK_VISIBLE = true;
    }
    if (value) {
      this.toppings.controls.FormA2CumApplication.setValue(true);
    } else {
      this.toppings.controls.FormA2CumApplication.setValue(false);
    }
  }
  OUR_SHA_BEN: any = '';
  ORIGINAL_PDF: any = '';
  bankformat: any = ''

  OUR_SHA_BEN_FUNC(data: any) {
    this.OUR_SHA_BEN = data;
  }

  async disabledTextbox(pdfDoc: any) {
    pdfDoc.getForm()
      .getFields()
      .forEach((field) => {
        field.enableReadOnly();
        console.log(field,)
      });
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

  get form() {
    return this.pipoForm.controls;
  }

  getData(data, id): any {
    return data[id];
  }
  onSubmit(e): void {
    this.submitted = true;
    console.log("this.pipoForm.invalid", this.pipoForm.invalid)
    console.log("this.pipoForm.invalid", this.pipoForm)
    console.log('this.pipoForm.value', this.pipoForm.value);
    if (this.pipoForm.invalid) {
      return;
    }
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }

  public onUploadInit(args: any): void {
    console.log("onUploadInit:", args);
  }
  
  public onUploadSuccess(args: any): void {
    console.log("------ onUploadSuccess called")
    console.log('args', args);
    this.uploading = true;
    this.isUploaded = true;
    this.uploadUrl_Original = args[1].data;
    this.userService.mergePdf(args[1].data).subscribe((res: any) => {
      res.arrayBuffer().then((data: any) => {
        this.uploadUrl = data;
      });
    });

    console.log("this.uploadUrl", this.uploadUrl);
  }

  submit(e) {
    this.uploading = true;
    console.log(e[0].size);
    this.size = this.formatBytes(e[0].size);
    this.runProgressBar(e[0].size);
  }


  public formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + " Bytes";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(3) + " KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(3) + " MB";
    } else {
      return (bytes / 1073741824).toFixed(3) + " GB";
    }
  }


  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }

  runProgressBar(value) {
    console.log(value / 1500);
    timer(0, value / 2500)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });

  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }
  REMIITANCE_SUM: any = 0;
  REMIITANCE_AMOUNT: any = [];

  InputKeyPress(index: any) {
    this.OTHER_BANK_VISIBLE = false;
    setTimeout(() => {
      this.OTHER_BANK_VISIBLE = true;
      this.REMIITANCE_SUM = this.pipoForm?.controls?.pipoTerm?.value.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.remittanceAmount), 0);
      this.REMIITANCE_AMOUNT[index] = this.pipoForm?.controls?.pipoTerm?.value[index]?.remittanceAmount;

      if (this.REMIITANCE_SUM > this.selectedItems[index]?.balanceAmount) {
        this.toastr.error('You added more than amount your pipo amount....');
        this.REMIITANCE_SUM = this.selectedItems[index]?.balanceAmount;
        this.REMIITANCE_AMOUNT[index] = this.selectedItems[index]?.balanceAmount
      }
    }, 500)
    console.log(this.pipoForm.controls, this.selectedItems, 'this.pipoForm.controls')
  }

  getItems(form) {
    return form.get('pipoTerm').controls;
  }

  addItems(index, id) {
    const control = this.pipoForm.controls.pipoTerm as FormArray;
    control.push(this.initItems());
    this.temp1[index]
  }

  removeItems(i) {
    this.selectedItems = this.selectedItems.filter((items, index) => {
      return index != i
    });
    console.log('this.selectedItems', this.selectedItems);
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    let control = this.pipoForm.controls.pipoTerm as FormArray;
    control.removeAt(i);
  }
  PDF_LIST: any = [];

  SlideToggle(event, i) {
    $(".accordion-item").find(".accordion-contant").css('display', 'none')
    $(event?.target?.parentElement).parent(".accordion-item").find(".accordion-contant").slideToggle();
    if (this.PDF_LIST[i] == undefined) {
      this.PDF_LIST[i] = [];
      for (let index = 0; index < this.temp1[i].length; index++) {
        if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
          this.PDF_LIST[i].push({
            pdf: this.temp1[i][index]?.pdf,
            name: this.temp1[i][index]['name']
          });
        }
      }
    }
  }
  PREVIEWS_URL_STRING: any = '';
  async PREVIEWS_URL(model, id) {
    this.PREVIEWS_URL_LIST = [];
    this.bankformat = ''
    this.bankformat = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.selectedBankName) != -1);
    console.log(this.BANK_DETAILS, this.bankformat, 'this.newBankArray')
    this.PromiseReturn().then(async (data: any) => {
      this.getS3Url().then(async (element: any) => {
        await element?.forEach(urlelement => {
          data.push(urlelement);
        });
        this.EXTRA_DOCUMENTS['CA_DOCUMENTS'].forEach(element => {
          data.push(element)
        });
        this.EXTRA_DOCUMENTS['CB_DOCUMENTS'].forEach(element => {
          data.push(element)
        });
        this.EXTRA_DOCUMENTS['DEBIT_NOTES_DOCUMENTS'].forEach(element => {
          data.push(element)
        });
        var fitertemp: any = await data.filter(n => n)
        await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
          this.PREVIEWS_URL_LIST = [];
          console.log(merge?.pdfurl, 'mergepdfresponse?.pdfurl')
          this.PREVIEWS_URL_LIST.push(merge?.pdfurl);
          this.PREVIEWS_URL_STRING = '';
          setTimeout(() => {
            this.PREVIEWS_URL_STRING = merge?.pdfurl;
          }, 200);
          model.style.display = 'block';
          console.log(this.pipoForm, merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PREVIEWS_URL')
        });
      });
    })
    this.documentService.getDownloadStatus({ id: id, deleteflag: '-1' }).subscribe((res: any) => {
      console.log(res, 'dsdsdsdsdsdsds');
      this.GetDownloadStatus = res[0];
      if (res.length == 0) {
        this.documentService.getDownloadStatus({ id: id, deleteflag: '1' }).subscribe((res: any) => {
          console.log(res, 'dsdsdsdsdsdsds');
          this.GetDownloadStatus = res[0];
          if (res.length == 0) {
            this.documentService.getDownloadStatus({ id: id, deleteflag: '2' }).subscribe((res: any) => {
              console.log(res, 'dsdsdsdsdsdsds');
              this.GetDownloadStatus = res[0];
            })
          }
        })
      }
    })
  }
  
  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.UrlList?.BankUrl,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse: any) => {
        temp.push(pdfresponse?.url)
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.UrlList?.LetterHeadUrl,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse1: any) => {
          temp.push(pdfresponse1?.url);
          reslove(temp);
        });
      });
    })
  }
  
  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }
  
  PromiseReturn() {
    var temp: any = [];
    temp[0] = this.formerge;
    temp[1] = this.uploadUrl;
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.selectedItems.length; i++) {
        for (let index = 0; index < this.temp1[i].length; index++) {
          if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != null && this.temp1[i][index]?.pdf != undefined) {
            temp.push(this.temp1[i][index]?.pdf);
          }
        }
      }
      await resolve(temp.filter(n => n));
    })
  }
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var temp_doc: any = [];
      if (this.PREVIWES_URL?.changingThisBreaksApplicationSecurity == null) {
        temp_doc[0] = this.PREVIEWS_URL_STRING;
      } else {
        temp_doc[0] = this.PREVIWES_URL?.changingThisBreaksApplicationSecurity;
      }
      temp_doc[1] = this.uploadUrl_Original;
      for (let i = 0; i < this.selectedItems.length; i++) {
        for (let index = 0; index < this.temp1[i].length; index++) {
          if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
            temp_doc.push(this.temp1[i][index]?.pdf)
          }
        }
      }
      this.EXTRA_DOCUMENTS['CA_DOCUMENTS'].forEach(element => {
        temp_doc.push(element)
      });
      this.EXTRA_DOCUMENTS['CB_DOCUMENTS'].forEach(element => {
        temp_doc.push(element)
      });
      this.EXTRA_DOCUMENTS['DEBIT_NOTES_DOCUMENTS'].forEach(element => {
        temp_doc.push(element)
      });
      this.pipoForm.value.bank = this.pipoForm.controls?.bank
      this.pipoForm.value.benneName = this.pipoForm.controls?.benneName
      
      var approval_data: any = {
        id: UniqueId+'_'+this.randomId(10),
        tableName: 'Advance-Remittance-A2',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: temp_doc,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id || res == undefined) {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
            var pipo_id: any = [];
            var pipo_name: any = [];
            for (let index = 0; index < this.selectedItems.length; index++) {
              pipo_id.push(this.selectedItems[index]?.pipo_id)
              pipo_name.push(this.selectedItems[index]?.pipo_no)
            }
            var data: any = {
              data: {
                formdata: this.pipoForm.value,
                documents: temp_doc,
                pipo_1: this.selectedItems,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
                extra_data: this.EXTRA_DOCUMENTS,
                ALL_DATA_HSCODE_FORWARD:this.ALL_DATA_HSCODE_FORWARD
              },
              TypeTransaction: 'Advance-Remittance-A2',
              fileType: 'Import',
              UserDetails: approval_data?.id,
              pipo: pipo_id,
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data, this.selectedItems);

                for (let index = 0; index < this.selectedItems.length; index++) {
                  const element = this.selectedItems[index];
                  const sum = parseFloat(element?.balanceAmount) - parseFloat(this.pipoForm?.controls?.pipoTerm?.value[index]?.remittanceAmount);
                  this.userService.updatePipo({ balanceAmount: sum }, element?.pipo_id).subscribe((data) => {
                    console.log('king123');
                    console.log(data);
                    if ((index + 1) == this.selectedItems.length) {
                      var updateapproval_data: any = {
                        RejectData: {
                          tableName: 'pi_po',
                          id: approval_data?.id,
                          TransactionId: res1._id,
                          data:this.pipoForm.value,
                          pipo_id:pipo_id,
                          pipo_name:pipo_name
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id,updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                      });
                    }
                  }, (error) => {
                    console.log('error');
                  }
                  );
                }
              }, (error) => {
                console.log('error');
              }
              );
              this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '-1' }).subscribe((res: any) => {
                console.log(res, 'dsdsdsdsdsdsds');
                this.GetDownloadStatus = res[0];
                if (res.length == 0) {
                  this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '2' }).subscribe((res: any) => {
                    console.log(res, 'dsdsdsdsdsdsds');
                    this.GetDownloadStatus = res[0];
                  })
                }
              })
            });

          });
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${Status} panel`)
        }
      });
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  getStatusCheckerMaker(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
  text_array(text: any) {
    let split_text: any = text.split('\n')
    return split_text;
  }
  RequestforBCQuoteSubmitbtn: boolean = false;
  RequestforCASubmit(value: any) {
    console.log(value, $("#FromClientRequest"), 'RequestforBCQuote')
    this.FORM_CHECK_VALUE(value).then(async (res: any) => {
      console.log(value, res, 'RequestforBCQuote')
      if (res == true) {
        this.toastr.error('Please check some input filed is empty...');
        return;
      } else {
        var temp_doc: any = [];
        if (this.PREVIWES_URL?.changingThisBreaksApplicationSecurity == null) {
          temp_doc[0] = this.PREVIEWS_URL_STRING;
        } else {
          temp_doc[0] = this.PREVIWES_URL?.changingThisBreaksApplicationSecurity;
        }
        temp_doc[1] = this.uploadUrl_Original;
        for (let i = 0; i < this.selectedItems.length; i++) {
          for (let index = 0; index < this.temp1[i].length; index++) {
            if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
              temp_doc.push(this.temp1[i][index]?.pdf)
            }
          }
        }
        var pipo_id: any = [];
        var pipo_name: any = [];
        for (let index = 0; index < this.selectedItems.length; index++) {
          pipo_id.push(this.selectedItems[index]?.pipo_id)
          pipo_name.push(this.selectedItems[index]?.pipo_no)
        }
        value['documents'] = temp_doc;
        value['pipo'] = pipo_id;
        value['extradata'] = this.pipoForm.value
        var filterdoc = temp_doc.filter(n => n)
        value['RequestType'] = this.REQUEST_TYPE
        this.documentService.CA_Certificate_add(value).subscribe((buyer_beneficiary_creditaddres: any) => {
          console.log(buyer_beneficiary_creditaddres, 'buyer_beneficiary_creditaddres')
          this.toastr.success('buyer_beneficiary_credit added successfully....')
          this.documentService.SendMaildocuments({ subject: 'Buyer credit details added...', documentsList: filterdoc, data: value }).subscribe((docres: any) => {
            this.toastr.success('Mail Sended Successfully....')
            this.router.navigate(['/home/dashboardTask'])
          })
          this.get_by_REQUEST_TYPE_CA(this.REQUEST_TYPE);
        })
      }
    })
  }
  async FORM_CHECK_VALUE(value: any) {
    let tempbol: boolean = false;
    for (const key in value) {
      console.log(value)
      if (value[key] == '' || value[key] == null || value[key] == undefined || value[key] == false) {
        tempbol = true;
        break;
      }
    }
    return await tempbol;
  }
  
  showhideSummaryPage(value) {
    var temp: any = {
      FormA2CumApplication: this.toppings?.value?.FormA2CumApplication,
      "_CA": this.toppings?.value?._CA,
      "_CB": this.toppings?.value?._CB,
      Invoice_Debit_Note: this.toppings?.value?.Invoice_Debit_Note,
    }
    console.log('this.pipoForm.controls;',temp,this.toppings, this.pipoForm.controls);
    
    this.FORM_CHECK_VALUE_2(temp).then(async (res: any) => {
      console.log(temp, res, 'RequestforBCQuote')
      if (res == false) {
        this.showSummaryPage = value;
      }else{
        this.toastr.error('Please select all nessacary documents...');
      }
    });  
  }
  
  async FORM_CHECK_VALUE_2(value: any) {
    console.log(value)
    let tempbol: boolean = false;
    for (const key in value) {
      if (value[key] == false) {
        tempbol = true;
        break;
      }
    }
    return await tempbol;
  }
  
  CA_CERTIFICATE_DATA: any = []
  get_by_REQUEST_TYPE_CA(REQUEST_TYPE: any) {
    this.documentService.CA_Certificate_RequestType_get(REQUEST_TYPE).subscribe((res: any) => {
      this.CA_CERTIFICATE_DATA = res?.data;
      console.log(res, this.CA_CERTIFICATE_DATA, 'get_CA')
    })
  }
  PDF_VIEW_URL: any = ''
  VIEW_DOCUMENTS(index: any, data: any) {
    this.PDF_VIEW_URL = ''
    setTimeout(() => { this.PDF_VIEW_URL = data?.document }, 100)
  }
  SELECTED_VALUE: any = [];
  DUMP_FUNCTION(condition1, condition2, popupshow) {
    console.log(condition1, this.pipoForm, 'DUMP_FUNCTION')
    if (condition2.includes(condition1)) {
      this.SELECTED_VALUE = condition1;
      popupshow.style.display = 'flex';
    } else {
      popupshow.style.display = 'none'
    }
  }
  REQUEST_TYPE: any = ''

  onTabChanged(event: any) {
    const id = event.tab.content.viewContainerRef.element.nativeElement.id;
    this.REQUEST_TYPE = id;
    if (id != '') {
      this.get_by_REQUEST_TYPE_CA(this.REQUEST_TYPE);
    }
    console.log(event, id, this.REQUEST_TYPE, 'sdfsdfdsfdfdsfsdfd')
  }
  CA_CB_POPUP(event: any) {
    const id = event;
    if (id != '') {
      this.get_by_REQUEST_TYPE_CA(id);
    }
    console.log(event, id, 'sdfsdfdsfdfdsfsdfd')
  }
  CA_SELECTION_DATA: any = [];
  CA_SELECTION_INDEX: any = [];
  CA_DUMP_SLEECTION: any = [];
  EXTRA_DOCUMENTS: any = {
    CA_DOCUMENTS: [],
    CB_DOCUMENTS: [],
    INVOICE_DOCUMENTS: [],
    DEBIT_NOTES_DOCUMENTS: [],
    PURPOSE_CODE_DATA: []
  };
  CA_SELECTION(event: any, index: any) {
    console.log(event, 'CA_SELECTION')
    if (event?.target?.checked) {
      this.CA_DUMP_SLEECTION[index] = this.CA_CERTIFICATE_DATA[index];
      this.CA_SELECTION_INDEX[index] = true;
    } else {
      this.CA_DUMP_SLEECTION[index] = '';
      this.CA_SELECTION_INDEX[index] = false;
    }
    this.CA_SELECTION_DATA = [];
    this.EXTRA_DOCUMENTS['CA_DOCUMENTS'] = [];
    this.CA_DUMP_SLEECTION.forEach(element => {
      this.CA_SELECTION_DATA.push(element)
      this.EXTRA_DOCUMENTS['CA_DOCUMENTS'].push(element?.document);
    });
    if (this.CA_SELECTION_DATA.length != 0) {
      this.toppings.controls._CA.setValue(true);
    } else {
      this.toppings.controls._CA.setValue(false);
    }
  }

  CB_SELECTION_DATA: any = [];
  CB_SELECTION_INDEX: any = [];
  CB_DUMP_SLEECTION: any = [];

  CB_SELECTION(event: any, index: any) {
    console.log(event, 'CB_SELECTION')
    if (event?.target?.checked) {
      this.CB_DUMP_SLEECTION[index] = this.CA_CERTIFICATE_DATA[index];
      this.CB_SELECTION_INDEX[index] = true;
    } else {
      this.CB_DUMP_SLEECTION[index] = ''
      this.CB_SELECTION_INDEX[index] = false;
    }
    this.CB_SELECTION_DATA = [];
    this.EXTRA_DOCUMENTS['CB_DOCUMENTS'] = [];
    this.CB_DUMP_SLEECTION.forEach(element => {
      this.EXTRA_DOCUMENTS['CB_DOCUMENTS'].push(element?.document);
      this.CB_SELECTION_DATA.push(element)
    });
    if (this.CB_SELECTION_DATA.length != 0) {
      this.toppings.controls._CB.setValue(true);
    } else {
      this.toppings.controls._CB.setValue(false);
    }
  }

  filterData(data: any) {
    this.PURPOSE_CODE_FILTER_DATA = this.A2_JSON_DATA.filter((item: any) => item?.RBI_Purpose_Code.includes(data));
    console.log(data, this.PURPOSE_CODE_FILTER_DATA, 'asdhasdkasdsads')
    if (this.PURPOSE_CODE_FILTER_DATA.length == 0 || data == '') {
      this.PURPOSE_CODE_FILTER_DATA = this.A2_JSON_DATA;
    }
  }
  SELECTED_PURPOSE_CODE_DATA: any = [];
  SELECTED_PURPOSE_CODE_INDEX: any = [];
  SELECTED_PURPOSE_CODE_DUMP_SLEECTION: any = [];
  SELECT_PURPOSE_CODE(event: any, index: any) {
    console.log(event, 'SELECT_PURPOSE_CODE')
    if (event?.target?.checked) {
      this.SELECTED_PURPOSE_CODE_DUMP_SLEECTION[index] = this.PURPOSE_CODE_FILTER_DATA[index];
      this.SELECTED_PURPOSE_CODE_INDEX[index] = true;
    } else {
      this.SELECTED_PURPOSE_CODE_DUMP_SLEECTION[index] = ''
      this.SELECTED_PURPOSE_CODE_INDEX[index] = false;
    }
    this.SELECTED_PURPOSE_CODE_DATA = [];
    this.EXTRA_DOCUMENTS['PURPOSE_CODE_DATA'] = [];
    this.SELECTED_PURPOSE_CODE_DUMP_SLEECTION.forEach(element => {
      this.EXTRA_DOCUMENTS['PURPOSE_CODE_DATA'].push(element);
      this.SELECTED_PURPOSE_CODE_DATA.push(element)
    });
  }
  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };
  
  filtertimeout: any = ''
  filterHSCode(value: any) {
    clearTimeout(this.filtertimeout);
    this.filtertimeout = setTimeout(() => {
      this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA.filter((item: any) => item?.hscode?.indexOf(value) != -1 || item?.description?.toLowerCase()?.indexOf(value?.toLowerCase()) != -1);
      if (this.FILTER_HS_CODE_DATA.length == 0) {
        this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
      }
    }, 200);
  }
  ToCreditAccount_Selected: any = ''
  ToChargesAccount_Selected: any = ''

  ToCreditAccount(value: any) {
    console.log(value, 'asfaffsdfsdfsdf')
    this.ToCreditAccount_Selected = value
  }

  ToChargesAccount(value: any) {
    console.log(value, 'asfaffsdfsdfsdf')
    this.ToChargesAccount_Selected = value
  }

  ToForwardContract_Selected: any = []
  ToHSCode_Selected: any = [];
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
    } else {
      this.ToForwardContract_Selected[0] = '';
    }
  }

  ToHSCode(event: any, value: any, index: any) {
    console.log(event, 'adasdasdsad')
    if (event?.target?.checked == true) {
      this.ToHSCode_Selected[index] = value;
    } else {
      this.ToHSCode_Selected[index] = '';
    }
  }
  ALL_DATA_HSCODE_FORWARD: any = {};
  DoneButton() {
    let temp2: any = [];
    this.ToHSCode_Selected.forEach(element => {
      temp2.push(element?.hscode);
    });
    this.ALL_DATA_HSCODE_FORWARD = {
      HS_CODE: temp2?.join(','),
      FORWARD_CONTRACT: this.ToForwardContract_Selected
    };
  }
  FormData:any=[]
  fillForm(){
    this.FormData=this.pipoForm?.value
  }
}

