import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { OutletContext, Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as data from '../../inward.json';
import $ from 'jquery'
import { PDFDocument } from 'pdf-lib';
import { saveAs as importedSaveAs } from 'file-saver';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import * as XLSX from 'xlsx';
import * as CURRENCY_JSON from '../../currency.json';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
declare var kendo:any;

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
import { DocumentService } from "../../service/document.service";
import { PipoDataService } from "../../service/homeservices/pipo.service";
import { AppConfig } from '../../app.config';
import { WindowInformationService } from '../../service/window-information.service';
import { ShippingbillDataService } from 'src/app/service/homeservices/shippingbill.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MergePdfListService } from '../merge-pdf-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Direct-Dispatch',
  templateUrl: './Packing-Credit-Request.component.html',
  styleUrls: ['./Packing-Credit-Request.component.scss'],
})
export class PackingCreditRequestComponent implements OnInit {
  LocationData: any = []
  bankDetail: any = []
  commodity: any = []
  buyer: string;
  bank: string;
  benneName: string;
  uploading: boolean = false;
  authToken: string;
  @ViewChild('pdfTable') pdfTable: ElementRef;

  CurrencyData: any = ['INR', 'USD', 'EUR', 'GBP', 'CHF', 'AUD', 'CAD', 'AED', 'SGD', 'SAR', 'JPY']
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  // ----------------------------------
  pipoArray: any = [];

  document: any;
  file: any;
  arrayData: any = [];
  commodityData: any = [];
  other: boolean;
  pipoArr: any = [];
  pubUrl: any;
  pipoOut: string;
  beneOut: string;
  api_base: any;
  mainBene: any;
  location: any;
  isDisabled: boolean;
  origin: any = [];
  item5: any;
  headers: any;

  isUploaded: boolean = false;

  public config: DropzoneConfigInterface;

  pipoForm: any = FormGroup;
  submitted = false;
  selectedItems: any = [];
  LIST_PIPO: any = [];
  sumTotalAmount = 0;
  showOpinionReport = 0;
  @ViewChild('table1') table: ElementRef;
  @ViewChild('billLodge', { static: false }) billLodge: ElementRef;
  closeResult: string;
  public item1: any = [];
  public itemArray = [];
  public item2;
  public user;
  public itemArray1 = [];
  public irBuyerName = [];
  lodgement1: any;
  lodgement2: any;
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  myRadio: any;
  myRadio1: any;
  myRadio2: any;
  myRadio3: any;
  myRadio4: any;
  myRadio5: any;
  myRadio6: any;
  purposeSelect = false;
  selectPurpose = false;
  public selectedPurpose: any = [];
  url: any;
  purposeCode: any;
  detail: any;
  jsondata: any;
  purposeRows: any[];
  dataJson: any;
  pgNumber = 0;
  pcNumber = 0;
  selectedPipo: boolean = false;
  selectedRowSb: boolean = false;
  item3: any;
  selectedSb: boolean;
  proceed: boolean = true;
  c: any;
  sbArray: any = [];
  tryArray: any = [];
  lcArray: any = [];
  bankReference: any;
  generate0: boolean = false;
  generate3: boolean = false;
  generate1: boolean = false;
  generate2: boolean = false;
  generate4: boolean = false;
  generate5: boolean = false;
  generate6: boolean = false;
  data4: any;
  data5: any;
  data6: any;
  data7: any = [];
  done: boolean;
  doc: any = [];
  randomArray: any = [];
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
  generate: boolean;
  generatePurpose: any = [];
  sbPurpose: any = [];
  sbPurpose1: any = [];
  importPurpose: any = [];
  noImportPurpose: any = [];
  donePurpose: any = [];
  doneSbPurpose: any = [];
  doneImportPurpose: any = [];
  mainDoc: any = [];
  mainDoc1: any = [];
  mainDoc2: any;
  mainDoc3: any;
  mainDoc4: any;
  mainDoc5: any;
  doc1: boolean;
  data8: any;
  data9: any = [];
  dataImport: any;
  dataImport2: any;
  sbPurposeDone1: any = [];
  item4 = [];
  item12: any;
  item13: any = [];
  bankRef: any;
  newTask: any = [];
  Task: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  isGenerate: boolean = false;
  isProceed: boolean = false;
  advanceRef: any = '';
  billOfCredit: any;
  lc: any;
  withDiscount: any;
  scrutiny: any;
  arr: any = [];
  LcNumber: any = '';
  isDoneAll: boolean;
  bankArray: any = [];
  bankToggle: string = '';
  bankValue: any;
  allBank: any = [];
  newBankArray: any = { Credit: '', Debit: [] };
  credit: any;
  charge: any;
  value: any;
  bgColor: boolean;
  newDone: boolean;
  arrayPipo: any = [];
  myArr: any = [];
  str: string;
  dateArray: any = [];
  buyerAds: any;
  buyerAddress2: any;
  buyerAddress3: any;
  buyerAddress4: any;
  teamName1: any = '';
  teamName2: any = [];
  teamName3: any = [];
  teamName4: any = [];
  completewords: any = '';
  devideContent: any = '';
  address1: any = '';
  address2: any = '';
  address3: any = '';
  team1: any = '';
  team2: any = '';
  team3: any = '';
  completewords2: any = '';
  devideContent2: any = '';
  addressLine1: any = '';
  addressLine2: any = [];
  addressLine3: any = [];
  addressLine4: any = [];
  completewords3: any = '';
  devideContent3: any = '';
  item6: any = [];
  item7: any = [];
  item: any = [];
  item8: any = [];
  item9: any = [];
  item10: any = [];
  item11: any = [];
  public buyerDetail: any = [];
  advanceArray = [];
  buyerName: any = [];
  id: any;
  SHIPPING_BILL: any = '';
  SHIPPING_BILL_LIST: any = [{
    value: 'PIPO NUMBER'
  }];
  ThirdPartydata: any = [];
  Letter_Of_Credit: any = [];
  changevalue: any = '';
  SHIPPING_BILL_DATA: any = [];
  PREVIEWS_URL_LIST: any = [];
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];
  CURRENT_DATE: any = new Date().toLocaleDateString();
  CURRENCY_LIST: any = [];
  SELECTED_CURRENCY: any = '';
  public Transaction_form: FormGroup;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    public appconfig: AppConfig,
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    private route: ActivatedRoute,
    public shippingBillService: ShippingbillDataService,
    private modalService: NgbModal,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public pdfmerge: MergePdfListService,
    public wininfo: WindowInformationService) {
    this.api_base = appconfig.apiUrl;
    this.getDropdownData();
  }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(230, '.content_top_common')
    this.file = this.route.snapshot.paramMap.get('doc_type');
    for (let index = 0; index < CURRENCY_JSON['default']?.length; index++) {
      this.CURRENCY_LIST.push({
        type: CURRENCY_JSON['default'][index]['value']
      })
    }
    this.Transaction_form = this.formBuilder.group({
      bank_name:  new FormControl('', [Validators.required]),
      Running_PC: new FormControl('', [Validators.required]),
      EPC_PCFC: new FormControl('', [Validators.required]),
      PIPO_LIST: new FormArray([this.initItems()]),
      Incoterm_FOB_CIF: new FormControl('', [Validators.required]),
      Forward_Contract: new FormControl('', [Validators.required]),
      BuyerName:new FormControl([], [Validators.required]),
      Due_Date: new FormControl('', [Validators.required]),
      GSTNO: new FormControl('', [Validators.required]),
      Loan_requested_date: new FormControl('', [Validators.required]),
      Type_of_service: new FormControl('', [Validators.required]),
      Last_date_of_service: new FormControl('', [Validators.required]),
      Credit_Debit_Account:new FormControl([], [Validators.required]),
    });
    this.userService.getUserDetail().then((status) => {
      this.USER_DATA = status['result'];
      console.log(this.USER_DATA, this.USER_DATA?.sideMenu, 'USER_DETAILS');
    });
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`
    };
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
    this.getBill_Lodgments();
  }
  initItems() {
    return this.formBuilder.group({
      pi_poNo: ['', Validators.required],
      currency: ['', Validators.required],
      PIPO_Amount: ['', Validators.required],
      PCFC_Amount: ['', Validators.required],
    });
  }
  addItems() {
    const control = this.pipoForm.controls.PIPO_LIST as FormArray;
    control.push(this.initItems());
  }

  BOOLEAN: boolean = false;
  MERGE_ALL_PDF: any = [];
  ORIGNAL_BANK: any = [];
  getDropdownData() {
    this.userService.getTeam()
      .subscribe(
        data => {
          this.commodity = data['data'][0]['commodity']
          this.LocationData = data['data'][0]['location']
          var temp: any = []
          this.ORIGNAL_BANK = data['data'][0]['bankDetails'];
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            temp.push(data['data'][0]['bankDetails'][index]?.bank)
          }
          var unique: any = new Set(temp);
          console.log(unique, 'yyuuyyuyuuyyuyuyuyuy')
          unique.forEach((item) => {
            this.bankDetail.push({ bank: item });
          });
          console.log(this.bankDetail, this.ORIGNAL_BANK, data['data'][0]['bankDetails'], 'bankDetail')
        }, error => {
          console.log("error")
        });

    this.userService.getBene(1).subscribe((res: any) => {
      this.benneDetail = res.data
    }, (err) => console.log("Error", err));
  }

  PIPO_LIST_DATA: any = [];
  getBill_Lodgments() {
    console.log(data['default']);
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose);
    this.dataJson = this.jsondata;

    //PI/PO API
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('Data fetched successfully', res);
        (this.item = res.data);
        for (let index = 0; index < this.item.length; index++) {
          if (this.item[index]?.file == 'export') {
            this.PIPO_LIST_DATA.push(this.item[index])
          }
        }
        console.log(this.PIPO_LIST_DATA, res.data, 'pipo')
      },
      (err) => console.log(err)
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log('Benne Detail4', this.buyerDetail);
      },
      (err) => console.log('Error', err)
    );

    // used details
    this.userService.getUserDetail().then((res: any) => {
      console.log('********USer Details', res);

      this.id = res.result.emailId;
      console.log('***********userId', this.id);
    });
    this.item1 = [];
    this.shippingBillService.getShippingBillList().then((res: any) => {
      this.shippingBillService.shippingbills$.subscribe((data: any) => {
        console.log('getShippingBillList', data)
        this.documentService.getMaster(1).subscribe((res: any) => {
          console.log(res);
          for (let index = 0; index < res?.data.length; index++) {
            const element = res?.data[index];
            if (element?.file == 'export') {
              this.item1.push(element);
            }
          }
          console.log('getMaster Data', this.item1);
          var tempfilter: any = [];
          this.item1.forEach((element, i) => {
            tempfilter.push(element.buyerName[0])
          });
          var t: any = new Set(tempfilter);
          t.forEach((item) => {
            this.buyerName.push({ value: item });
          });
          console.log('tempfilter', tempfilter);
          console.log('buyerName', new Set(tempfilter), this.buyerName);

          for (let index = 0; index < data.length; index++) {
            this.item1[index]['balanceAvai'] = data[index]?.balanceAvai != null && data[index]?.balanceAvai != undefined ? data[index]?.balanceAvai : '0';
          }
        },
          (err) => console.log(err)
        );

      });
    });

    this.userService.getTeam().subscribe(
      (data) => {
        console.log('king123');
        console.log(data['data'][0]);
        this.item5 = data['data'][0];
        console.log('this is exporter addres', this.item5);
        this.arr = this.item5.gst.split('');
        console.log(this.arr);

        this.teamName1 = this.item5.teamName;
        this.addressLine1 = this.item5.adress;

        this.completewords = this.teamName1.split(' ');
        this.devideContent = this.completewords.length;

        for (let i = 0; i < this.completewords.length; i++) {
          if (i < 6) {
            this.teamName2.push(this.completewords[i]);
          } else if (i > 5 && i <= 11) {
            this.teamName3.push(this.completewords[i]);
          }
        }

        this.team1 = this.teamName2.join(' ');
        this.team2 = this.teamName3.join(' ');

        console.log('*************************Shailendra', this.team1);
        console.log('*************************ShailendraAddress', this.team2);

        this.completewords2 = this.addressLine1.split(' ');
        this.devideContent2 = this.completewords2.length;

        for (let i = 0; i < this.completewords2.length; i++) {
          if (i < 6) {
            this.addressLine2.push(this.completewords2[i]);
          } else if (i > 5 && i <= 11) {
            this.addressLine3.push(this.completewords2[i]);
          } else if (i > 11) {
            this.addressLine4.push(this.completewords2[i]);
          }
        }

        this.address1 = this.addressLine2.join(' ');
        this.address2 = this.addressLine3.join(' ');
        this.address3 = this.addressLine4.join(' ');

        this.bankArray = this.item5.bankDetails;
        for (let value of this.bankArray) {
          this.allBank.push(value.bank);
        }
        console.log(this.allBank);
        this.bank = this.allBank.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) == index;
        });
        console.log(this.bank, 'bank.....................');
      },
      (error) => {
        console.log('error');
      }
    );
    this.Letter_Of_Credit = [];
    this.documentService.getLetterLCfile("export").subscribe(
      (res: any) => {
        console.log('Res', res);
        for (let value of res.data) {
          if (value['file'] == 'export') {
            this.Letter_Of_Credit.push(value);
          }
        }
      },
      (err) => console.log(err)
    );
    console.log('this is me');
    console.log('main array*********', this.sbArray);
  }

  ConvertNumberToWords(number: any) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    number = number.toString();
    var atemp = number.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
      var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      var value: any = "";
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + " ";
        }
        if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Crores ";
        }
        if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Lakhs ";
        }
        if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Thousand ";
        }
        if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
          words_string += "Hundred and ";
        } else if (i == 6 && value != 0) {
          words_string += "Hundred ";
        }
      }
      words_string = words_string.split("  ").join(" ");
    }
    return words_string;
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
  FILTER_BANK: any = [];
  setradio(key, a) {
    this.bankToggle = a;
    this.bankValue = a;
    this.newBankArray[key] = [];
    this.bankArray.forEach((value, index) => {
      if (value.bank?.toLowerCase().indexOf(a?.toLowerCase()) != -1) {
        this.newBankArray[key].push(value);
      }
    });
    console.log(a, this.newBankArray, 'this.newBankArray')
  }

  shippingMap: Map<number, any[]> = new Map<number, any[]>();
  SHIPPING_MAP: any = [];
  Advance_Amount_Sum: any = {
    AmountSum: 0,
    PIPO_NO: [],
    buyerName: [],
    Date:[],
    Last_date_of_service:''
  };
  PROCEED_BTN_DISABLED: boolean = false;
  filterBuyer: any = [];
  balanceAvai: any = '';
  SET_CREDIT_DEBIT_LIST: any = {
   Credit:[]
  };

  setBank(event:any,key: any,index, bank: any) {
    var len:any=this.SET_CREDIT_DEBIT_LIST[key].filter((item)=>item?.bank==bank?.bank)
    if (len?.length==0) {
      event.source.checked=true;
      this.SET_CREDIT_DEBIT_LIST[key][index]=(bank);
    } else {
      event.source.checked=false;
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Account Selection',
      `You select other account number <br> becasue you already selected..`)
    }
    console.log('SET_CREDIT_DEBIT_LIST',event,this.SET_CREDIT_DEBIT_LIST)
  }
  setBuyer(key: any, bank: any) {
    console.log('SET_CREDIT_DEBIT_LIST', this.SET_CREDIT_DEBIT_LIST)
  }
  filterBuyerName(a){
    this.item1.forEach((value, index) => {
      if (value.buyerName[0]?.toLowerCase().indexOf(a?.toLowerCase()) != -1) {
        this.filterBuyer.push(value);
      }
    });
  }
  setCurrency(value) {
    this.SELECTED_CURRENCY = value;
  }
  async addToSbArray(data: any, e) {
    console.log(data, 'addToSbArray');
    if (this.advanceArray.length==0 || this.advanceArray[0]?.currency==data?.currency) {
      if (e.target.checked) {
        this.advanceArray.push(data);
      } else {
        e.target.checked=false;
        this.advanceArray = this.advanceArray.filter((item) => item._id !== data._id);
      }
      var sum = this.advanceArray.reduce(function (a, b) { return a + b?.amount }, 0);
      this.Advance_Amount_Sum = {
        AmountSum: sum,
        PIPO_NO: [],
        buyerName: [],
        Date:[]
      }
      for (let index = 0; index < this.advanceArray.length; index++) {
        this.Advance_Amount_Sum['PIPO_NO'].push(this.advanceArray[index]?.pi_poNo);
        this.Advance_Amount_Sum['buyerName'].push(this.advanceArray[index]?.buyerName);
        this.Advance_Amount_Sum['Date'].push(this.advanceArray[index]?.date);
      }
    }else{
      e.target.checked=false;
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Currency Waring',
      `You select same currency..`)
    }
    
  }
  async addToSbArray_2(key,value) {
    this.Advance_Amount_Sum[key]=value;
    console.log(this.Advance_Amount_Sum,'addToSbArray222222');
  }
  clearData() {
    this.advanceArray = [];
    console.log('Shippoinhg', this.shippingMap);
  }
  
  TO_FIXED(amount: any, fixed_position: any) {
    return (amount).toFixed(fixed_position);
  }
  

  Lodgement: any = {
    'Running_PC': {
      Show: '',
      Hide: ''
    },
    'EPC_PCFC': {
      Show: '',
      Hide: ''
    },
    "Incoterm_FOB_CIF":{
      Show: '',
      Hide: ''
    },
    Forward_Contract:{
      Show: '',
      Hide: ''
    }
  }
  ClassRetrun(mainkey, key, class1, class2, condition) {
    if (this.Lodgement[mainkey][key] === condition) {
      return class1;
    }
    else {
      return class2;
    }
  }
  Text_Changer(text: any) {
    return text;
  }
  limitAmount(event:any,limitAmount:any,value:any){
  console.log(limitAmount,value)
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || parseInt(event.target.value)>=parseInt(limitAmount)) {
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Amount limitaion',
      `You have not much engouh amount`)
      event.target.value=value.substr(0, value.length - 1)
      return false;
    }
    return true;
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.target.value>=100) {
      return false;
    }
    return true;

  }
  Changebutton(mainkey, Showkey, hidekey, value) {
    this.Lodgement[mainkey][Showkey] = value
    this.Lodgement[mainkey][hidekey] = '';
    console.log(this.Lodgement, 'Lodgement')
  }
  DUMP_FUNCTION(condition1, condition2, popupshow) {
    console.log(condition1, 'DUMP_FUNCTION')
    if (condition1 === condition2) {
      popupshow.style.display = 'flex'
    } else {
      popupshow.style.display = 'none'
    }
  }
  OBJECT_LENGTH(data: any) {
    return data != undefined ? data.length : 0;
  }
  PREVIEWS_URL(className:any) {
    this.PREVIEWS_URL_LIST=[];
    $(document).ready(()=> {
          kendo.drawing.drawDOM($("#first")).then(function(group) {
              return kendo.drawing.exportPDF(group, {
                  paperSize: "auto",
                  margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
              });
          }).done((data)=> {
              this.PREVIEWS_URL_LIST.push(data);
              console.log('hhjjhhjjh',data)
          });
      });    
      this.Transaction_form.value.Running_PC=this.Lodgement['Running_PC'];
      this.Transaction_form.value.EPC_PCFC=this.Lodgement['EPC_PCFC']
      this.Transaction_form.value.PIPO_LIST=this.advanceArray
      this.Transaction_form.value.Incoterm_FOB_CIF=this.Lodgement['Incoterm_FOB_CIF']
      this.Transaction_form.value.Forward_Contract=this.Lodgement['Forward_Contract']
      this.Transaction_form.value.BuyerName=this.Advance_Amount_Sum['buyerName']
      this.Transaction_form.value.Due_Date=this.getTimeDifferenceContract(180)
      this.Transaction_form.value.GSTNO=this.Lodgement['Running_PC']
      this.Transaction_form.value.Loan_requested_date=this.CURRENT_DATE
      this.Transaction_form.value.Type_of_service=''
      this.Transaction_form.value.Last_date_of_service=this.CURRENT_DATE
      this.Transaction_form.value.Credit_Debit_Account=this.SET_CREDIT_DEBIT_LIST['Credit']

      console.log(this.Transaction_form,'Transaction_form')
  }
  toArrayBuffer(myBuf) {
    var myBuffer = new ArrayBuffer(myBuf.length);
    var res = new Uint8Array(myBuffer);
    for (var i = 0; i < myBuf.length; ++i) {
       res[i] = myBuf[i];
    }
    return myBuffer;
 }
  SendApproval(Status: string, UniqueId: any, model: any) {
    if (UniqueId != null) {
      var approval_data: any = {
        id: 'Packing-Credit-Request' + UniqueId,
        tableName: 'Packing-Credit-Request',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: this.PREVIEWS_URL_LIST,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      this.getStatusCheckerMaker('Packing-Credit-Request' + UniqueId).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != 'Packing-Credit-Request' + UniqueId) {
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
             var data:any={
               data:this.Transaction_form.value,
               TypeTransaction:'Packing-Credit-Request',
               fileType:'Export'
             }
             this.documentService.addExportBillLodgment(data).subscribe((res1: any) => { 
                  console.log('addExportBillLodgment', res1);
                  this.ngOnInit();
                  this.router.navigate(['/home/dashboardTask'])
              })
            });
          }
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${res?.status} panel`)
        }
      });
    }
    console.log('Packing-Credit-Request' + UniqueId, UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  getStatusCheckerMaker(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
  PERCENTAGE_AMOUNT(partialValue: any, totalValue: any): any {
    return (parseFloat(totalValue) - ((parseFloat(totalValue) / 100) * partialValue)).toFixed(2);
  }
  getTimeDifferenceContract(tenureTime:any) {
    var someDate = new Date();
    var numberOfDaysToAdd = tenureTime;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    return new Date(result).toDateString();
}
bufferToBase64(buf) {
  var binstr = Array.prototype.map.call(buf, function (ch) {
      return String.fromCharCode(ch);
  }).join('');
  return btoa(binstr);
}
}

