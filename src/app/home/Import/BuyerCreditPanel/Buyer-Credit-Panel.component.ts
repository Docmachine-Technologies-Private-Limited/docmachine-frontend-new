import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'
declare var kendo: any;

import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, NgForm, Validators
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentService } from "../../../service/document.service";
import { PipoDataService } from "../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../service/window-information.service';
import { PDFDocument, rgb } from 'pdf-lib';
import { AprrovalPendingRejectTransactionsService } from '../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../merge-pdf-list.service';

@Component({
  selector: 'app-Buyer-Credit-Panel',
  templateUrl: './Buyer-Credit-Panel.component.html',
  styleUrls: ['./Buyer-Credit-Panel.component.scss'],

})
export class BuyerCreditPanelComponent implements OnInit {
  LocationData: any = []
  bankDetail: any = []
  commodity: any = []
  buyer: string;
  bank: string;
  benneName: string;
  selectedBankName: any = [];
  selectedBenneId: string;
  selectedBenneName: any;
  uploading: boolean = false;
  authToken: any;

  CurrencyData: any = []

  public type: string = "directive";
  public res;
  public size;
  public uploadUrl: any = '';
  public uploadUrl_Original: any = '';

  public message = "";
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  // ----------------------------------

  opinionReport: boolean = false;
  document: any;
  file: any;
  api_base: any;
  headers: any;

  isUploaded: boolean = false;

  public config: DropzoneConfigInterface;

  pipoForm: any = FormGroup;
  RequestforBCQuote: any = FormGroup;

  submitted = false;
  selectedItems: any = [];
  selectedBenne: any = [];
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
  PIPO_LIST: any = {
    PIPO_NAME_LIST: [],
    data: [],
    original_data: [],
    SINGLE_BOE_INFO: [],
    Multiple_PIPO_INFO: [],
    Multiple_BOE_INFO: [],
    TransactionRef: []
  };
  SHIPPING_BILL_LIST: any = [{ value: 'Select BOE' }];
  ALL_DROPDOWN_VALUE_LIST: any = {
    BOE_PIPO: [],
    Beneficiary: [],
    Bank: [],
    DROPDOWN_BOE: []
  }
  PARTY_NAME_LIST: any = [];
  COMPANY_DETAILS: any = [];

  DUMP: any = {
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
  BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA: any = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public wininfo: WindowInformationService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) {
    this.loadFromLocalStorage();
    this.api_base = userService.api_base;
    this.getDropdownData()

    this.RequestforBCQuote = new FormGroup({
      benneName: new FormControl('', Validators.required),
      ApplicantName: new FormControl('', Validators.required),
      LCIssuingBank: new FormControl('', Validators.required),
      SupplierName: new FormControl("", Validators.required),
      SupplierBankNameSWIFTCode: new FormControl("", Validators.required),
      Currency: new FormControl("", Validators.required),
      LCNoBOENo: new FormControl('', Validators.required),
      LCBOEAmount: new FormControl('', Validators.required),
      Commodity: new FormControl("", Validators.required),
      LatestdateofShipment: new FormControl("", Validators.required),
      OriginOfGoods: new FormControl("", Validators.required),
      PortofLoading: new FormControl('', Validators.required),
      PortofDischarge: new FormControl('', Validators.required),
      NumberofShipment: new FormControl("", Validators.required),
      ConfirmationChargesborne: new FormControl("", Validators.required),
      DiscountingChargesborne: new FormControl("", Validators.required),
      Tenor: new FormControl("", Validators.required),
    });
  }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content_top_common')
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`
    };
    this.getbuyer_beneficiary_credit();
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
      this.userService.getTeambyId(res?.result?.companyId).subscribe((COMPANY_DETAILS_RES: any) => {
        this.COMPANY_DETAILS = COMPANY_DETAILS_RES?.data[0];
        this.DUMP['ApplicantName'] = this.COMPANY_DETAILS?.teamName
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
    this.pipoForm = this.formBuilder.group({
      bank: new FormControl('', Validators.required),
      benneName: new FormControl('', Validators.required),
      sumTotalAmount: new FormControl("", Validators.required),
      totalremittanceAmount: new FormControl("", Validators.required),
      selectedremittanceAmount: new FormControl("", Validators.required),
      BOETerm: new FormArray([this.initItems()]),
    });

  }

  initItems() {
    return this.formBuilder.group({
      BOE_Number: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      remittanceAmount: ['', Validators.required],
    });
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
  //hiding info box
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  OTHER_BANK_VISIBLE: boolean = false;

  getDropdownData() {
    this.userService.getTeam()
      .subscribe(
        data => {
          this.commodity = data['data'][0]['commodity']
          this.LocationData = data['data'][0]['location']
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            this.bankDetail.push({ value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId, org: data['data'][0]['bankDetails'][index] })
          }
        },
        error => {
          console.log("error")
        });

    this.userService.getBene(1).subscribe((res: any) => {
      console.log('benneDetail', res.data);
      this.benneDetail = res.data
    },
      (err) => console.log("Error", err)
    );
  }
  ORM_BY_PARTY_NAME: any = [];
  changepipo(value) {
    this.selectedBenne = this.benneDetail.filter((item) => item?.benneName?.includes(value?.benneName))[0];
    this.documentService.getBoedatabyPartName(value?.benneName).subscribe((res: any) => {
      this.PIPO_LIST = {
        PIPO_NAME_LIST: [],
        data: [],
        original_data: []
      };
      console.log('Data fetched successfully', res, this.RequestforBCQuote, this.DUMP);
      this.pipoData = res.data;
      for (let index = 0; index < res?.data.length; index++) {
        res.data[index]['isExpand'] = false;
        res.data[index]['CI_EXPAND'] = false;
        if (res?.data[index]?.balanceAmount == '-1') {
          res.data[index]['balanceAmount'] = res?.data[index]?.invoiceAmount
        }
        if (res?.data[index]?.balanceAmount != '0') {
          this.PIPO_LIST['data'].push(res?.data[index]);
          this.PIPO_LIST['original_data'].push(res?.data[index])
        }
        if (res?.data[index]?.pi_poNo != '' && !this.PIPO_LIST['PIPO_NAME_LIST'].includes(res?.data[index]?.pi_poNo)) {
          this.PIPO_LIST['PIPO_NAME_LIST'].push({ value: res?.data[index]?.pi_poNo, id: res?.data[index]?._id })
        }
      }
      console.log('importpipolist', this.pipoData);
      this.documentService.getbyPartyName(value?.benneName).subscribe((res: any) => {
        console.log(res, 'getbyPartyName');
        this.ORM_BY_PARTY_NAME = res?.data;
        res?.data.forEach(element => {
          if (element?.partyName) {
            this.PARTY_NAME_LIST.push(element?.partyName)
          }
        });
      });
      console.log(this.PIPO_LIST, 'sdfsdfdsfsdffsfsdfdsfsdfsdf')
    },
      (err) => console.log(err)
    );
    this.selectedBenne['BeneBankName_BeneBankSwiftCode'] = this.selectedBenne?.beneBankName + ' & ' + this.selectedBenne?.beneBankSwiftCode;
    this.DUMP['SupplierName'] = this.selectedBenne?.benneName
    this.DUMP['SupplierBankNameSWIFTCode'] = this.selectedBenne?.BeneBankName_BeneBankSwiftCode
    console.log('this.selectedBenneName', this.selectedBenne);
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
  MAIN_DATA: any = [0];

  userExists(id) {
    return this.MAIN_DATA.some(function (el) {
      return el._id === id;
    });
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

  showhideSummaryPage(value) {
    console.log('this.pipoForm.controls;', this.pipoForm.controls);
    this.showSummaryPage = value;
  }
  OUR_SHA_BEN: any = '';
  ORIGINAL_PDF: any = '';
  Remittance_Amount: any = 0;
  timeout: any = ''
  BANK_DETAILS: any = [];
  bankformat: any = ''

  onSelectBank(value) {
    this.selectedBankName = value?.id;
    this.BANK_DETAILS = this.bankDetail.filter((item) => item?.id.includes(value?.id))[0]?.org;
    console.log(this.BANK_DETAILS, 'this.BANK_DETAILS')
    this.bankformat = ''
    this.bankformat = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.selectedBankName) != -1);
    console.log(this.BANK_DETAILS, this.bankformat, 'this.newBankArray')
    if (this.bankformat.length != 0 && this.bankformat[0]?.urlpdf != '') {
      this.OTHER_BANK_VISIBLE = false;
      this.fillForm();
    } else {
      this.OTHER_BANK_VISIBLE = true;
    }
  }

  async fillForm() {
    this.bankformat = ''
    this.bankformat = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.selectedBankName) != -1);
    console.log(this.BANK_DETAILS, this.bankformat, 'this.newBankArray')
    if (this.bankformat.length != 0 && this.bankformat[0]?.urlpdf != '') {
      const formUrl = './../../assets/Import_direct_Payment.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form = pdfDoc.getForm()
      const pages = pdfDoc.getPages()
      const firstpage = pages[0]
      var INVOICE_NO: any = {
        INVOICE_NO: [],
        BEO_NO: [],
        AWBNo: []
      };
      for (let index = 0; index < this.ITEM_FILL_PDF.length; index++) {
        INVOICE_NO['INVOICE_NO'].push(this.ITEM_FILL_PDF[index][0]?.invoiceNumber);
        INVOICE_NO['BEO_NO'].push(this.ITEM_FILL_PDF[index][0]?.boeNumber);
        INVOICE_NO['AWBNo'].push(this.ITEM_FILL_PDF[index][0]?.AWBNo);
      }
      console.log(this.selectedBenne, this.ITEM_FILL_PDF, INVOICE_NO, 'fillForm')
      const textField = form.createTextField('best.text')
      let result = this.selectedBenne?.benneName.concat(" ", this.selectedBenne?.beneAdrs);
      textField.setText(result)
      textField.addToPage(firstpage, {
        x: 392, y: 575, width: 127,
        height: 28, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text1Field = form.createTextField('best.text1')
      text1Field.setText(this.Remittance_Amount.toString())
      text1Field.addToPage(firstpage, {
        x: 392, y: 563, width: 127,
        height: 12, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text2Field = form.createTextField('best.text2')
      text2Field.setText(INVOICE_NO['INVOICE_NO'].toString())
      text2Field.addToPage(firstpage, {
        x: 392, y: 545, width: 127,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })
      const text3Field = form.createTextField('best.text3')
      text3Field.setText(INVOICE_NO['AWBNo'].toString())
      text3Field.addToPage(firstpage, {
        x: 392, y: 528, width: 127,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text4Field = form.createTextField('best.text4')
      text4Field.setText(INVOICE_NO['BEO_NO'].toString())
      text4Field.addToPage(firstpage, {
        x: 392, y: 510, width: 127,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      let result1 = this.selectedBenne?.beneBankName.concat(" ", this.selectedBenne?.beneBankAdress);
      const text4Field1 = form.createTextField('best.text41')
      text4Field1.setText(result1)
      text4Field1.addToPage(firstpage, {
        x: 392, y: 483, width: 127,
        height: 25, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text5Field = form.createTextField('best.text5')
      text5Field.setText(this.selectedBenne?.beneAccNo)
      text5Field.addToPage(firstpage, {
        x: 392, y: 460, width: 127,
        height: 18, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })
      let result2 = this.selectedBenne?.interBankName.concat(" ", this.selectedBenne?.interBankSwiftCode);
      const text6Field = form.createTextField('best.text6')
      text6Field.setText(result2)
      text6Field.addToPage(firstpage, {
        x: 392, y: 440, width: 127,
        height: 18, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text7Field = form.createTextField('best.text7')
      text7Field.setText(this.selectedBenne?.iban)
      text7Field.addToPage(firstpage, {
        x: 392, y: 420, width: 127,
        height: 18, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text8Field = form.createTextField('best.text8')
      text8Field.setText(this.selectedBankName)
      text8Field.addToPage(firstpage, {
        x: 181, y: 355, width: 67,
        height: 14, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const pdfBytes = await pdfDoc.save()
      console.log(pdfDoc, "pdf")
      console.log(pdfBytes, "pdfBytes")
      // this.getPdfFile(pdfBytes);
      console.log(form, "form")
      var base64String = this._arrayBufferToBase64(pdfBytes)
      const x = 'data:application/pdf;base64,' + base64String;
      const url = window.URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
      console.log(url, 'dsjkfhsdkjfsdhfksfhsd')
      this.formerge = x
      this.remittanceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(x);
      const mergedPdf = await PDFDocument.create();
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
      const mergedPdfFile = await mergedPdf.save();
      const mergedPdfload = await PDFDocument.load(mergedPdfFile);
      await this.disabledTextbox(pdfDoc)
      const mergedPdfFileload = await mergedPdfload.save();
      var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
      const x1 = 'data:application/pdf;base64,' + base64String1;
      console.log("line no. 1735", this.remittanceUrl)
      this.PREVIWES_URL = this.sanitizer.bypassSecurityTrustResourceUrl(x1);
      console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
      this.ORIGINAL_PDF = pdfBytes;
    }
  }
  OUR_SHA_BEN_FUNC(data: any) {
    this.OUR_SHA_BEN = data;
    this.fillForm();
  }

  async getPdfFile(item: any) {
    let array = new Uint8Array(item);
    let blob = new Blob([array], { type: 'application/pdf' });
    var urlCreator = window.URL || window.webkitURL;
    let url = urlCreator.createObjectURL(blob);
    let fileName: string = new Date().toLocaleDateString();
    try {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.target = '_blank';
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evt);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
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

  get RequestforBCQuoteform() {
    return this.RequestforBCQuote.value;
  }
  get RequestforBCQuoteformControls() {
    return this.RequestforBCQuote.controls;
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
    //document.getElementById("uploadError").style.display = "none";
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

  getItems(form) {
    return form.get('BOETerm').controls;
  }

  addItems(index, id) {
    const control = this.pipoForm.controls.BOETerm as FormArray;
    control.push(this.initItems());
    this.temp1[index]
  }

  removeItems(i) {
    this.selectedItems = this.selectedItems.filter((items, index) => {
      return index != i
    });
    console.log('this.selectedItems', this.selectedItems);
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    let control = this.pipoForm.controls.BOETerm as FormArray;
    control.removeAt(i);
  }
  PDF_LIST: any = [];

  SlideToggle(event, i) {
    $(".accordion-item").find(".accordion-contant").css('display', 'none')
    $(event?.target?.parentElement).parent(".accordion-item").find(".accordion-contant").slideToggle();
    this.PDF_LIST[i] = [];
    for (let index = 0; index < this.temp1[i].length; index++) {
      if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
        this.userService.mergePdf(this.temp1[i][index]?.pdf).subscribe((res: any) => {
          res.arrayBuffer().then((data: any) => {
            var base64String1 = this._arrayBufferToBase64(data)
            const x1 = 'data:application/pdf;base64,' + base64String1;
            this.PDF_LIST[i].push({
              pdf: x1,
              name: this.temp1[i][index]['name']
            })
            console.log('downloadEachFile', data, this.PDF_LIST);
          });
        });
      }
    }
  }
  MERGE_PDF: any = [];
  ALL_DOCUMENTS: any = [];

  async PREVIEWS_URL(modal: any, id) {
    this.ALL_DOCUMENTS = [];
    this.PREVIEWS_URL_LIST = [];
    this.MERGE_PDF = [];
    console.log(this.BANK_DETAILS, this.bankformat, 'this.newBankArray')
    if (this.bankformat.length != 0 && this.bankformat[0]?.urlpdf != '') {
      this.PREVIEWS_URL_LIST[0] = {
        name: 'Bank Format',
        pdf: this.ORIGINAL_PDF
      };
      this.ALL_DOCUMENTS.push(this.formerge);
      if (this.uploadUrl != undefined && this.uploadUrl != '' && this.uploadUrl != null) {
        this.PREVIEWS_URL_LIST[1] = {
          name: 'Oponin',
          pdf: this.uploadUrl_Original
        };
        this.ALL_DOCUMENTS.push(this.uploadUrl_Original);
      }
      console.log('pipoForm', this.pipoForm)
      for (let i = 0; i < this.ITEM_FILL_PDF.length; i++) {
        this.ALL_DOCUMENTS.push(this.ITEM_FILL_PDF[i]?.doc)
        if (this.ITEM_FILL_PDF[i]?.pipo) {
          this.ITEM_FILL_PDF[i]?.pipo?.forEach(element => {
            this.ALL_DOCUMENTS.push(element?.doc)
            this.ALL_DOCUMENTS.push(element?.commercial)
          });
          if ((i + 1) == this.ITEM_FILL_PDF.length) {
            var fitertemp: any = await this.ALL_DOCUMENTS.filter(n => n)
            await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
              this.PREVIEWS_URL_LIST = [];
              this.PREVIEWS_URL_LIST.push(merge?.pdfurl);
              console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PreviewSlideToggle')
            });
          }
        }
      }

      await this.mergerpdf.mergePdf(this.ALL_DOCUMENTS).then((merge: any) => {
        this.MERGE_PDF.push(merge)
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
    } else {
      this.PREVIEWS_URL_LIST.push(this.ORIGINAL_PDF)
      this.ALL_DOCUMENTS.push(this.ORIGINAL_PDF)
      if (this.uploadUrl != undefined && this.uploadUrl != '' && this.uploadUrl != null) {
        this.PREVIEWS_URL_LIST.push(this.uploadUrl_Original)
        this.ALL_DOCUMENTS.push(this.uploadUrl_Original)
      }
      console.log('pipoForm', this.pipoForm)
      $(document).ready(() => {
        kendo.pdf.defineFont({
          "DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
          "DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
          "DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
          "DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
          "WebComponentsIcons": "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
        });
        kendo.drawing.drawDOM($("#first"), {
          paperSize: "A4",
          margin: "0cm",
          scale: 0.7,
          forcePageBreak: ".page-break"
        }).then(function (group) {
          return kendo.drawing.exportPDF(group, {
            paperSize: "A4",
            margin: "0cm",
            scale: 0.7,
            forcePageBreak: ".page-break"
          });
        }).done(async (data) => {
          console.log('exportPDF', data)
          await this.userService?.UploadS3Buket({
            fileName: this.guid() + '.pdf', buffer: data,
            type: 'application/pdf'
          }).subscribe(async (pdfresponse: any) => {
            console.log(pdfresponse, 'response')
            this.ALL_DOCUMENTS.push(pdfresponse?.url)
            for (let i = 0; i < this.ITEM_FILL_PDF.length; i++) {
              this.ALL_DOCUMENTS.push(this.ITEM_FILL_PDF[i]?.doc)
              if (this.ITEM_FILL_PDF[i]?.pipo) {
                this.ITEM_FILL_PDF[i]?.pipo?.forEach(element => {
                  this.ALL_DOCUMENTS.push(element?.doc)
                  this.ALL_DOCUMENTS.push(element?.commercial)
                });
                if ((i + 1) == this.ITEM_FILL_PDF.length) {
                  var fitertemp: any = await this.ALL_DOCUMENTS.filter(n => n)
                  await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
                    this.PREVIEWS_URL_LIST = [];
                    this.PREVIEWS_URL_LIST.push(merge?.pdfurl);
                    console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PreviewSlideToggle')
                  });
                }
              }
            }
          })
        });
      });
      await this.mergerpdf.mergePdf(this.ALL_DOCUMENTS).then((merge: any) => {
        this.MERGE_PDF.push(merge)
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

  }
  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var approval_data: any = {
        id: UniqueId+'_'+this.randomId(10),
        tableName: 'Buyer-Credit',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: this.ALL_DOCUMENTS,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      console.log(approval_data, 'approval_data')
      if (Status == '' || Status == null || Status == 'Rejected') {
        this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
          var pipo_id: any = [];
          var pipo_name: any = [];
          for (let index = 0; index < this.ITEM_FILL_PDF.length; index++) {
            pipo_id.push(this.ITEM_FILL_PDF[index]?.pipo[0]?._id)
            pipo_name.push(this.ITEM_FILL_PDF[index]?.pipo[0]?.pi_poNo)
          }
          this.pipoForm.value.buercredit=this.DUMP;
          this.pipoForm.value.bank = this.pipoForm.controls?.bank
          this.pipoForm.value.benneName = this.pipoForm.controls?.benneName
          
          var data: any = {
            data: {
              formdata: this.pipoForm.value,
              documents: this.ALL_DOCUMENTS,
              pipo_1: [this.ITEM_FILL_PDF, this.selectedItems],
              Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() }
            },
            TypeTransaction: 'Buyer-Credit',
            fileType: 'Import',
            UserDetails: approval_data?.id,
            pipo: pipo_id,
          }
          this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
            console.log('Buyer-Credit', res1);
            let updatedData = {
              "TransactionRef": [
                res1._id,
              ]
            }
            this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
              console.log('king123');
              console.log(data);
              for (let index = 0; index < this.MAIN_DATA.length; index++) {
                const element = this.MAIN_DATA[index];
                let REAMAING_AMOUNT: any = parseFloat(element?.balanceAmount) - parseFloat(this.pipoForm?.controls?.BOETerm?.value[index]?.remittanceAmount);
                this.documentService.updateBoe({ balanceAmount: REAMAING_AMOUNT, moredata: [element] }, element?._id).subscribe((updateBoeres: any) => {
                  console.log(updateBoeres, 'updateBoeres');
                  if ((index + 1) == this.MAIN_DATA.length) {
                    var updateapproval_data: any = {
                      RejectData: {
                        tableName: 'boerecords',
                        id:approval_data?.id,
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
                })
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
          })
        });
      }
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  ParseFloat(num1, num2) {
    var val: any = parseFloat(num2) != undefined ? parseFloat(num1) - parseFloat(num2) : 0
    return !isNaN(val) ? parseFloat(val).toFixed(2) : num1;
  }
  FILTER_PIPO_DATA: any = [];
  filterData(value: any) {
    this.PIPO_LIST['data'] = this.PIPO_LIST['original_data'].filter((item: any) => item?.partyName?.indexOf(value) != -1);
    this.FILTER_PIPO_DATA = this.PIPO_LIST['data'][0];
    console.log(value, this.PIPO_LIST['data'], 'ddsgfjsgdjfhgfds')
    // for (let index = 0; index < this.FILTER_PIPO_DATA?.boeRef.length; index++) {
    //   this.ADVANCE_REMMITANCE[this.FILTER_PIPO_DATA?.boeRef[index]?.boeNumber] = [];
    // }
  }
  BOE_DETAILS: any = [];

  choosenItems(event, id, i, item: any) {
    if (event.target.checked == true) {
      this.ITEM_FILL_PDF[i] = (item);
      setTimeout(() => { this.OTHER_BANK_VISIBLE = true }, 500)
    } else {
      event.target.checked = false;
      this.ITEM_FILL_PDF.splice(i, 1)
      setTimeout(() => { this.OTHER_BANK_VISIBLE = true }, 500)
    }
    this.temp1[i] = [];
    this.MAIN_DATA = [];
    this.pipoForm.controls.BOETerm.controls = []
    this.ITEM_FILL_PDF.forEach((element, index) => {
      this.MAIN_DATA.push(element);
      this.addItems(index, 0);
    });
    for (let index = 0; index < this.MAIN_DATA.length; index++) {
      this.temp1[i].push({
        pdf: (this.MAIN_DATA[index]['doc']),
        name: 'BOE',
      });
      for (let j = 0; j < this.MAIN_DATA[index]?.pipo?.length; j++) {
        var item: any = this.MAIN_DATA[index]?.pipo[j];
        this.temp1[i].push({
          pdf: item?.airwayBlcopy,
          name: 'airwayBlcopy',
        });
        this.temp1[i].push({
          pdf: item?.commercial,
          name: 'commercial',
        });
      }
    }
    this.BOE_DETAILS = [];
    var tempboenumber: any = [];
    var tempboeamount: any = [];
    var tempboecurrency: any = [];
    var tempboeorigin: any = [];
    var tempboedischargePort: any = [];

    this.MAIN_DATA.forEach(element => {
      tempboenumber.push(element?.boeNumber)
      tempboeamount.push(element?.balanceAmount)
      tempboecurrency.push(element?.currency)
      tempboeorigin.push(element?.origin)
      tempboedischargePort.push(element?.dischargePort)
    });
    this.BOE_DETAILS = {
      BOE_NUMBER: tempboenumber.join(','),
      BOE_AMOUNT: tempboeamount.join(','),
      CURRENCY: tempboecurrency.join(','),
      ORIGIN: tempboeorigin.join(','),
      DISCHARGE_PORT: tempboedischargePort.join(',')
    }
    this.DUMP['LCNoBOENo'] = this.BOE_DETAILS?.BOE_NUMBER
    this.DUMP['LCBOEAmount'] = this.BOE_DETAILS?.BOE_AMOUNT
    this.DUMP['OriginOfGoods'] = this.BOE_DETAILS?.ORIGIN
    this.DUMP['Currency'] = this.BOE_DETAILS?.CURRENCY
    this.DUMP['PortofDischarge'] = this.BOE_DETAILS?.DISCHARGE_PORT
    console.log(this.MAIN_DATA, item, this.ITEM_FILL_PDF, 'selectedItemsselectedItems')
    this.sumTotalAmount = this.ITEM_FILL_PDF.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.invoiceAmount), 0);
    this.showOpinionReport = 0;
    this.fillForm();
  }
  AmountValidation(event: any, amount: any) {
    var targervalue: any = $(event?.target).val()
    if (targervalue > parseInt(amount)) {
      event.preventDefault();
      $(event?.target).val(amount);
      this.toastr.warning(`Your amount limit only : ` + amount + `,don't type extra amount...`)
    }
  }
  ADVANCE_REMMITANCE_CHECKBOX: any = [];
  ADVANCE_REMMITANCE: any = [];
  REAMAING_AMOUNT: any = {
    PIPO_SUM: 0,
    ADVANCE_SUM: 0
  };
  SelectAdvanceRemmitance($event: any, i, value, boeitem) {
    console.log(value, boeitem, 'SelectAdvanceRemmitance')
    if (value?.amount > boeitem?.invoiceAmount) {
      $($event.target).prop('checked', false);
      this.toastr.warning(`You have not engouh boe amount: ${boeitem?.invoiceAmount}`)
      return;
    } else {
      if (this.ADVANCE_REMMITANCE_CHECKBOX[i] == undefined || this.ADVANCE_REMMITANCE_CHECKBOX[i] == '') {
        this.ADVANCE_REMMITANCE[boeitem?.boeNumber].push(value)
        this.ADVANCE_REMMITANCE_CHECKBOX[i] = true;
      } else {
        $($event.target).prop('checked', false);
        this.ADVANCE_REMMITANCE_CHECKBOX[i] = '';
        this.ADVANCE_REMMITANCE[boeitem?.boeNumber].splice(i, 1);
      }
      var sumAdvanceAmount = this.ADVANCE_REMMITANCE[boeitem?.boeNumber].reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
      this.REAMAING_AMOUNT['ADVANCE_SUM'] = sumAdvanceAmount;
      this.REAMAING_AMOUNT['PIPO_SUM'] = parseFloat(this.FILTER_PIPO_DATA?.amount) - parseFloat(sumAdvanceAmount);
    }
  }
  PIPO_SELECTED_DATA_INDEX: any = [];

  PIPO_SELECTED_INDEX(index: any, data: any) {
    console.log(index, data, 'PIPO_SELECTED_INDEX')
    this.PIPO_SELECTED_DATA_INDEX = { index: index, data: data }
    this.ORM_SELECTION_DATA_LIST[index] = { ORM_NUMBER: [], Amount_Sum: [] };
    this.ORM_SELECTION_DATA[index] = [];
    this.TOTAL_SELECTED_REMMITANCE_AMOUNT[index] = 0;
  }
  ORM_SELECTION_DATA: any = [];
  ORM_SELECTION_DATA_LIST: any = [];
  TOTAL_SELECTED_REMMITANCE_AMOUNT: any = []
  ORM_SELECTION(event: any, index: any, data: any) {
    if (event.target.checked) {
      this.ORM_SELECTION_DATA[this.PIPO_SELECTED_DATA_INDEX.index][index] = (data)
    } else {
      this.ORM_SELECTION_DATA[this.PIPO_SELECTED_DATA_INDEX.index].splice(index, 1);
      event.target.checked = false;
    }
    var totalSum: any = this.ORM_SELECTION_DATA[this.PIPO_SELECTED_DATA_INDEX.index].reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    if (parseFloat(this.PIPO_SELECTED_DATA_INDEX?.data?.balanceAmount) < totalSum) {
      this.ORM_SELECTION_DATA[this.PIPO_SELECTED_DATA_INDEX.index].pop();
      $(event.target).prop('checked', false);
      this.toastr.warning(`You have not engouh boe amount: ${totalSum}`)
    }
    let temp: any = [];
    this.ORM_SELECTION_DATA[this.PIPO_SELECTED_DATA_INDEX.index].forEach(element => {
      temp.push(element);
    });
    this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index] = { ORM_NUMBER: [], Amount_Sum: [] };
    for (let j = 0; j < temp.length; j++) {
      const element = temp[j];
      this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index].ORM_NUMBER[j] = element?.billNo;
      this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index].Amount_Sum[j] = element?.amount;
    }
    this.MAIN_DATA.forEach(element => {
      if (element?.boeNumber == this.PIPO_SELECTED_DATA_INDEX?.data?.boeNumber) {
        element['TOTAL_REMMITANCE_AMOUNT'] = this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index].Amount_Sum.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems), 0);
      }
    });
    this.PIPO_LIST.data[this.PIPO_SELECTED_DATA_INDEX.index]['AdviceRefNo'] = this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index].ORM_NUMBER.toString();
    this.PIPO_LIST.data[this.PIPO_SELECTED_DATA_INDEX.index]['AdviceRefAmount'] = this.ORM_SELECTION_DATA_LIST[this.PIPO_SELECTED_DATA_INDEX.index].Amount_Sum.toString();
    this.PIPO_LIST.data[this.PIPO_SELECTED_DATA_INDEX.index]['AdviceRefData'] = temp;
    console.log(data, index, totalSum, temp, this.PIPO_LIST.data, this.TOTAL_SELECTED_REMMITANCE_AMOUNT, 'ORM_SELECTION');
  }

  RemittanceAmount(event, index, value) {
    clearTimeout(this.timeout);
    this.OTHER_BANK_VISIBLE = false;
    this.timeout = setTimeout(() => {
      this.Remittance_Amount = this.pipoForm?.value?.BOETerm.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.remittanceAmount), 0);
      console.log(this.pipoForm, 'pipoFormpipoFormpipoForm')
      this.MAIN_DATA.forEach(element => {
        if (element?.boeNumber == value) {
          element['Remittance_Amount'] = this.pipoForm?.value?.BOETerm[index]?.remittanceAmount
        }
      });
      this.OTHER_BANK_VISIBLE = true;
      this.InputKeyPress(index);
      this.fillForm()
    }, 500)
  }
  CloseAllExpand(event: any, data: any, index: any) {
    $('.table-type').removeClass('table-active')
    $('.table-tr-1').removeClass('Table-Show')
    $('.table-tr-1').addClass('Table-Hide')
  }
  REMIITANCE_SUM:any='0'
  REMIITANCE_AMOUNT:any=[];
  
  InputKeyPress(index: any) {
      this.REMIITANCE_SUM = this.pipoForm?.controls?.BOETerm?.value.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.remittanceAmount), 0);
      this.REMIITANCE_AMOUNT[index]= this.pipoForm?.controls?.BOETerm?.value[index]?.remittanceAmount;
      this.timeout = setTimeout(() => {
      if (this.REMIITANCE_SUM>this.MAIN_DATA[index]?.balanceAmount) {
        this.toastr.error('You added more than amount your boe amount....');
        this.REMIITANCE_SUM=this.MAIN_DATA[index]?.balanceAmount;
        this.REMIITANCE_AMOUNT[index]=this.MAIN_DATA[index]?.balanceAmount
      }
    },500)
    console.log(this.pipoForm.controls.BOETerm,this.MAIN_DATA, 'this.pipoForm.controls.pipoTerm')
  }
  RequestforBCQuoteSubmitbtn: boolean = false;
  RequestforBCQuoteSubmit(value: any) {
    console.log(value, $("#FromClientRequest"), 'RequestforBCQuote')
    this.FORM_CHECK_VALUE(value).then(async (res: any) => {
      console.log(value, res, 'RequestforBCQuote')
      if (res == true) {
        this.toastr.error('Please check some input filed is empty...');
        return;
      } else {
        this.ALL_DOCUMENTS = [];
        var pipo_id: any = [];
        var pipo_name: any = [];
        for (let i = 0; i < this.ITEM_FILL_PDF.length; i++) {
          this.ALL_DOCUMENTS.push(this.ITEM_FILL_PDF[i]?.doc)
          pipo_id.push(this.ITEM_FILL_PDF[i]?.pipo[0]?._id)
          pipo_name.push(this.ITEM_FILL_PDF[i]?.pipo[0]?.pi_poNo)

          if (this.ITEM_FILL_PDF[i]?.pipo) {
            this.ITEM_FILL_PDF[i]?.pipo?.forEach(element => {
              this.ALL_DOCUMENTS.push(element?.doc)
              this.ALL_DOCUMENTS.push(element?.commercial)
              this.ALL_DOCUMENTS.push(element?.airwayBlcopy);
            });
          }
        }
        value['documents'] = this.ALL_DOCUMENTS;
        value['pipo'] = pipo_id;
        value['extradata'] = this.MAIN_DATA

        var filterdoc = this.ALL_DOCUMENTS.filter(n => n)
        this.documentService.buyer_beneficiary_creditadd(value).subscribe((buyer_beneficiary_creditaddres: any) => {
          console.log(buyer_beneficiary_creditaddres, 'buyer_beneficiary_creditaddres')
          this.toastr.success('buyer_beneficiary_credit added successfully....')
          this.documentService.SendMaildocuments({ subject: 'Buyer credit details added...', documentsList: filterdoc,data: value}).subscribe((docres: any) => {
            this.toastr.success('Mail Sended Successfully....')
            this.router.navigate(['/home/dashboardTask'])
          })
          this.getbuyer_beneficiary_credit();
        })
      }
    })
  }
  BUYER_BENEFICIARY_CREDIT_DATA: any = []
  getbuyer_beneficiary_credit() {
    this.documentService.buyer_beneficiary_creditget().subscribe((res: any) => {
      this.BUYER_BENEFICIARY_CREDIT_DATA = res?.data;
      this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA = [];
      res?.data.forEach(element => {
        if (element?.AcceptReject == 'Accept') {
          this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA.push(element)
        }
      });
      console.log(res, this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA, 'buyer_beneficiary_creditaddres')
    })
  }
  async FORM_CHECK_VALUE(value: any) {
    let tempbol: boolean = false;
    for (const key in value) {
      console.log(value)
      if (value[key] == '' || value[key] == null || value[key] == undefined) {
        tempbol = true;
        break;
      }
    }
    return await tempbol;
  }
  AcceptReject(id: any, data: any) {
    this.AprrovalPendingRejectService.CustomConfirmDialogModel.YesNoDialogModel(`Are you sure you want to ${data?.AcceptReject} this item?`, '', (resmodel) => {
      if (resmodel?.value == 'Yes') {
        this.documentService.buyer_beneficiary_credit_update({ id: id, data: data }).subscribe((res: any) => {
          this.toastr.success('Successfully updated....');
          this.getbuyer_beneficiary_credit()
        })
      }
    })
  }
  SLECTED_BC_QUOTE_TEMP:any=[];
  SLECTED_BC_QUOTE:any=[];
  BC_QUOTE_SLECTED(event:any,index:any,data:any){
    if (event.target.checked) {
      this.SLECTED_BC_QUOTE_TEMP[index] = (data)
    } else {
      this.SLECTED_BC_QUOTE_TEMP.splice(index, 1);
      event.target.checked = false;
    }
    this.SLECTED_BC_QUOTE=[];
    this.SLECTED_BC_QUOTE_TEMP.forEach(element => {
      this.SLECTED_BC_QUOTE.push(element)
    });
  }
  PDF_VIEW_URL: any = ''
  VIEW_DOCUMENTS(index: any, data: any) {
    this.PDF_VIEW_URL = ''
    setTimeout(() => { this.PDF_VIEW_URL = data?.document }, 100)
  }
  // AcceptReject(id: any, data: any) {
  //   this.AprrovalPendingRejectService.CustomConfirmDialogModel.YesNoDialogModel(`Are you sure you want to ${data?.AcceptReject} this item?`, '', (resmodel) => {
  //     if (resmodel?.value == 'Yes') {
  //       this.documentService.buyer_beneficiary_credit_update({ id: id, data: data }).subscribe((res: any) => {
  //         this.toastr.success('Successfully updated....');
  //         this.getbuyer_beneficiary_credit()
  //       })
  //     }
  //   })
  // }
  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };
}

