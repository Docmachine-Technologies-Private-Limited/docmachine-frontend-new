import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../inward.json';
import $ from 'jquery'
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import {
  FormArray,
  FormBuilder,
  FormGroup, Validators
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentService } from "../../../../service/document.service";
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { ShippingbillDataService } from '../../../../service/homeservices/shippingbill.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';
import { MergePdfService } from '../../../../service/MergePdf/merge-pdf.service';
import { StorageEncryptionDecryptionService } from '../../../../Storage/storage-encryption-decryption.service';
import { BehaviorSubjectListService } from '../../../CommanSubjectApi/BehaviorSubjectListService/BehaviorSubjectList.service';

@Component({
  selector: 'app-Direct-Dispatch',
  templateUrl: './New-Direct-Dispatch.component.html',
  styleUrls: ['./New-Direct-Dispatch.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class NewDirectDispatchComponent implements OnInit {
  @ViewChild('dataToExport', { static: false }) public dataToExport: ElementRef;
  LocationData: any = []
  bankDetail: any = []
  commodity: any = []
  buyer: string;
  bank: string;
  benneName: string;
  uploading: boolean = false;
  authToken: string;

  CurrencyData: any = ['INR', 'USD', 'EUR', 'GBP', 'CHF', 'AUD', 'CAD', 'AED', 'SGD', 'SAR', 'JPY']

  public type: string = "directive";
  public res;
  public size;
  public uploadUrl: any = '';
  public message = "";
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  pipourl1: any;
  tryPartyAgreement: any = [];
  creditNote: any = [];
  swiftCopy: any = [];
  EBRC: any = [];
  blCopyref: any = [];
  blCopy: any = [];
  commercial: any = [];
  billOfExchange: any = [];
  destruction: any = [];
  debitNote: any = [];
  packingList: any = [];
  otherDoc: any = [];
  insuranceCopy: any = [];
  lcCopy: any = [];
  agreement: any = [];
  opinionReport: any = [];
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
  public itemArray: any = [];
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public select = false;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = '';
  public Question1 = '';
  public Question2 = '';
  public Question3 = '';
  public Question4 = '';
  public Question5 = '';
  public Question6 = '';
  public Question7 = '';
  public Question8 = '';
  public Question9 = '';
  public Question10 = '';
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  public generateIndex;
  public itemArray1: any = [];
  public irBuyerName: any = [];
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
  item4: any = [];
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
  newBankArray: any = [];
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
  buyer1: any = '';
  buyer2: any = [];
  buyer3: any = [];
  buyName1: any = ' ';
  buyName2: any = ' ';
  completewords4: any = '';
  devideContent4: any = '';
  buyerAdd2: any = [];
  buyerAdd3: any = [];
  buyerAdd4: any = [];
  buyerAds1: any = ' ';
  buyerAds2: any = ' ';
  buyerAds3: any = ' ';
  amArr: any = [];
  pipo = false;
  ship = false;
  nameSearch: string = '';
  nameSearch1: string = '';
  nameSearch2: string = '';
  nameSearch3: string = '';
  nameSearch4: string = '';
  item6: any = [];
  item7: any = [];
  item: any = [];
  item8: any = [];
  item9: any = [];
  item10: any = [];
  item11: any = [];
  public buyerDetail: any = [];
  startDate: any = '';
  endDate: any = '';
  model = { option: 'Bank options' };
  model1 = { option: 'Bank options' };
  sb: any;
  advanceOutward: any;
  ebrc: any;
  blcopyref: any;
  irAdvice: any;
  selectedPdfs: any = [];
  advanceArray: any = [];
  currentSbForAdvance: any;
  buyerName: any = [];
  id: any;
  private genDoc: any;
  airwayBlCopy: any;
  sbDataArray: any[] = [];
  invoiceArr: any[];
  filterToggle = false;
  BytePdfDoc: any;
  formerge: string;
  selectedPdfs2: any[];
  generateChecked: boolean = true;
  forexSbDetail: any;
  SHIPPING_BILL: any = '';
  SHIPPING_BILL_LIST: any = [{
    value: 'Shipping bill'
  }];
  ThirdPartydata: any = [];
  Letter_Of_Credit: any = [];
  changevalue: any = '';
  SHIPPING_BILL_DATA: any = [];
  PREVIEWS_URL_LIST: any = [];
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];
  PIPO_LIST: any = [];
  FILTER_DATA: any = {
    COMMERCIAL: [],
    FILTER_COMMERCIAL: [],
    PIPO: []
  };
  UrlList: any = '';
  public ExportBillLodgement_Form: FormGroup;
  CUSTOMER_DETAILS: any = [];
  BUYER_DETAILS: any = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    private route: ActivatedRoute,
    public shippingBillService: ShippingbillDataService,
    private modalService: NgbModal,
    public mergerpdf: MergePdfService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public pdfmerge: MergePdfListService,
    public sessionstorage: StorageEncryptionDecryptionService,
    public wininfo: WindowInformationService,
    public behaviorsubjectlist: BehaviorSubjectListService) {
    this.api_base = userService.api_base;
    this.getDropdownData();
  }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(230, '.content_top_common')
    this.file = this.route.snapshot.paramMap.get('doc_type');
    this.ExportBillLodgement_Form = this.formBuilder.group({
      bank_name: ['', [Validators.required]],
      Shipping_bill_list: [[], [Validators.required]],
      Advance_reference_Number: [[], [Validators.required]],
      Under_LC: ['', [Validators.required]],
      With_Scrutiny: ['', [Validators.required]],
      With_Discount: ['', [Validators.required]],
      Is_Buyer_remitter_different: ['', [Validators.required]],
      Is_Invoice_reduction: ['', [Validators.required]],
      Charges_to_Bank: ['', [Validators.required]],
      Total_SB_Amount: ['', [Validators.required]],
      Total_FIRX_Amount: ['', [Validators.required]],
      Total_Reaming_Amount: ['', [Validators.required]],
      documents: [[], [Validators.required]],
      deleteflag: ['0', [Validators.required]],
      SbRef: ['', [Validators.required]],
      Carry_Amount: [[], [Validators.required]],
      Url_Redirect: [{}, [Validators.required]],
      extradata: [[], [Validators.required]]
    });
    this.userService.getUserDetail().then((status: any) => {
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

  HS_CODE_DATA: any = [];
  FILTER_HS_CODE_DATA: any = [];
  ToChargesAccountdata: any = [];
  ToCreditAccountdata: any = [];
  COMPANY_INFO: any = [];
  BANK_LIST_DROPDOWN: any = [];

  getDropdownData() {
    this.userService.getTeam().subscribe(data => {
      this.CUSTOMER_DETAILS = data['data'][0]
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
      console.log(data, 'adasdasdsdasdadsd')
    }, error => {
      console.log("error")
    });
    this.userService.getBuyer(1).subscribe((res: any) => {
      this.BUYER_DETAILS = res.data;
      console.log(this.BUYER_DETAILS, 'BUYER_DETAILS')
    }, (err) => console.log("Error", err));
    this.HS_CODE_DATA = this.documentService.getHSCODE();
    this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
  }

  changepipo(value) {
    this.pipoDataService.getPipoListByCustomer('import', value).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        this.pipoData = data;
        for (let index = 0; index < data.length; index++) {
          this.LIST_PIPO[data[index]['_id']] = data[index];
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

  choosenItems(id, i) {
    let temp: any = [];
    temp = this.pipoData.filter(items => {
      console.log('items._id ', items._id);
      console.log('id ', id);
      console.log('items._id == id', items._id == id);
      return items._id == id
    });

    temp = temp.map((items) => {
      return {
        pipo_id: items._id,
        pipo_no: items.pi_poNo,
        doc: items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc) : items.doc,
        amount: items.amount,
        currency: items.currency,
      };
    });
    this.selectedItems[i] = temp.pop();
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    this.showOpinionReport = 0;
  }

  showhideOpinionReport(value) {
    this.showOpinionReport = value;
  }

  get form() {
    return this.pipoForm.controls;
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
    this.uploadUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      args[1].data
    );

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

  getItems(form) {
    return form.get('itemsTerm').controls;
  }

  removeItems(i) {
    this.selectedItems = this.selectedItems.filter((items, index) => {
      return index != i
    });
    console.log('this.selectedItems', this.selectedItems);
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    let control = this.pipoForm.controls.itemsTerm as FormArray;
    control.removeAt(i);
  }

  async getBill_Lodgments() {
    this.redirectid = this.route.snapshot.paramMap.get('pipo');
    this.redirectindex = this.route.snapshot.paramMap.get('index');
    this.redirectpage = this.route.snapshot.paramMap.get('page');
    console.log('pipoId', this.redirectid);

    console.log(data['default']);
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose);
    this.dataJson = this.jsondata;

    //PI/PO API
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('Data fetched successfully', res);
        for (let index = 0; index < res?.data.length; index++) {
          if (res?.data[index]?.file == '') {

          }
          this.PIPO_LIST.push(res?.data[index])

        }
        (this.item = res.data), console.log('pipo', this.item);
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

    this.documentService.getIrAdvice(1).subscribe((res: any) => {
        console.log(res), (this.item9 = res.data);
        console.log('line no. 324 data', this.item9);
        this.mergeIr();
        this.mergeIr2();
        this.item9.forEach((element, i) => {
          this.irBuyerName.push({ value: element.partyName, id: element._id });
          element['BalanceAvail']=element['BalanceAvail']!=undefined?element['BalanceAvail']:element['amount']
        });
        this.irBuyerName = this.irBuyerName.filter(
          (value, index) => this.irBuyerName.indexOf(value) === index
        );
        console.log('line no. 329 data', this.irBuyerName);
      },
      (err) => console.log(err)
    );

    this.documentService.getLetterLC().subscribe(
      (res: any) => {
        console.log(res), (this.item8 = res.data);
        console.log('LC Data', this.item8);
      },
      (err) => console.log(err)
    );

    this.route.params.subscribe((params) => {
      this.file = this.route.snapshot.params['file'];
      this.showInvoice = false;
      console.log('hello');
    });
    this.item1 = [];
    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        this.item2 = res["data"];
        this.buyerName[0] = { value: 'Select Buyer Name', id: '' };
        res["data"].forEach((element, i) => {
          this.buyerName.push({ value: element.buyerName, id: element?._id });
        })
        console.log('buyerName', this.buyerName);
      },
      (err) => console.log("Error", err)
    );

    await this.pipoDataService.getPipoList('export').then(async (res: any) => {
      this.FILTER_DATA.PIPO = res?.pipolist;
      this.pipoDataService.pipolistModel$.subscribe((data: any) => {
        console.log(data, 'data2222..................')
        data?.forEach(element => {
          element?.commercialRef?.forEach(commercialelement => {
            var temp: any = commercialelement;
            temp['debitNoteRef'] = element?.debitNoteRef;
            temp['TryPartyAgreement'] = element?.tryPartyAgreementRef;
            temp['SB_Amout_Realized'] = this.ParseFloat(commercialelement.amount, element?.debitNoteRef[0]?.totalDebitAmount)
            temp['IRADVICE_INFO'] = [];
            temp['IRADVICE_SUM'] = 0;
            temp['debitAmount'] = 0;
            this.FILTER_DATA.COMMERCIAL.push(temp)
          });
        });
      });

      console.log(this.FILTER_DATA, res, 'getPipoList')
    })
    console.log(this.sessionstorage.get('MT102'))
    this.documentService.MT102_SUBJECT = this.sessionstorage.get('MT102') != '' ? JSON.parse(this.sessionstorage.get('MT102')) : '';
    console.log(this.documentService.MT102_SUBJECT, 'MT102_SUBJECT')
    this.shippingBillService.getShippingBillList().then((res: any) => {
      this.shippingBillService.shippingbills$.subscribe((data: any) => {
        console.log('getShippingBillList', data)
        this.documentService.getMaster(1).subscribe((res: any) => {
          console.log(res);
          for (let index = 0; index < res?.data.length; index++) {
            const element = res?.data[index];
            if (element?.file == 'export' && element['balanceAvai']!='0') {
              this.item1.push(element);
            }
          }
          console.log('getMaster Data', this.item1);
          this.item1.forEach((element, i) => {
            element['balanceAvai'] = element['balanceAvai'] != '-1' ? element['balanceAvai'] : element?.fobValue
          });
        },
          (err) => console.log(err)
        );
      });
    });

    this.documentService.getThird().subscribe(
      (res: any) => {
        console.log('HEre Response Third', res);
        this.item12 = res.data;
        console.log('Try Party', this.item12);
        var temp: any = [];
        for (let value of this.item12) {
          if (value['file'] == 'export') {
            temp.push(value?.triPartyAgreementNumber);
            this.item4.push(value);
            console.log('awwww', this.item4);
          }
        }
        for (let index = 0; index < temp.length; index++) {
          if (!this.ThirdPartydata.includes(temp[index])) {
            this.ThirdPartydata.push({
              try_part_agreement: temp[index]
            });
          }
        }
      },
      (err) => console.log(err)
    );

    // // credit note Api
    this.documentService.getCredit().subscribe(
      (res: any) => {
        console.log('HEre Responsesssssssss', res);
        this.item10 = res.data;
        console.log('credit data', this.item10);
        for (let value of this.item10) {
          if (value['file'] == 'export') {
            this.item11.push(value);
            console.log('awwww', this.item11);
          }
        }
      },
      (err) => console.log(err)
    );

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
    if (this.documentService.draft) {
      this.generate = true;
      this.isGenerate = true;
      console.log(this.documentService.task);
      console.log(this.documentService.task.task[0]);
      if (this.documentService.task.task[0].ir == 'yes') {
        console.log('this is ir');
        this.Question5 == this.documentService.task.task[0].ir;
      } else if (this.documentService.task.task[0].ir == 'no') {
        this.Question5 == this.documentService.task.task[0].ir;
      }
      if (this.documentService.task.task[0].sbUrls) {
        console.log('this is sb');
        let k = 0;
        let gene: any = [];

        for (let value of this.documentService.task.task[0].sbUrls) {
          let r = value.changingThisBreaksApplicationSecurity;
          gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(r));
          k++;
        }
        this.mainDoc1 = gene;
        this.sbArray = this.documentService.task.task[0].sbNumbers;
      }
      if (this.documentService.task.task[0].tryUrls) {
        let h = 0;
        let gene: any = [];
        for (let value of this.documentService.task.task[0].tryUrls) {
          gene.push(
            this.sanitizer.bypassSecurityTrustResourceUrl(
              value.changingThisBreaksApplicationSecurity
            )
          );
          h++;
        }
        this.mainDoc3 = gene;
        this.tryArray =
          this.documentService.task.task[0].triPartyAgreementNumber;
      }
      if (this.documentService.task.task[0].lcUrls) {
        let h = 0;
        let gene: any = [];
        for (let value of this.documentService.task.task[0].lcUrls) {
          gene.push(
            this.sanitizer.bypassSecurityTrustResourceUrl(
              value.changingThisBreaksApplicationSecurity
            )
          );
          h++;
        }
        this.mainDoc4 = gene;
        this.lcArray = this.documentService.task.task[0].letterOfCreditNumber;
      }
    } else {
      // this.Question5 = ''
      console.log('line no.505 question5 data', this.Question5);
    }
  }

  async generateDoc1(form: any) {
    console.log(form, 'generateDoc1generateDoc1');
    if (this.Lodgement['AgainstAdvanceReceipt']?.Hide == 'no') {
      this.generate = true;
      this.isGenerate = true;
      let generateDoc2: any = [];
      let pipoValue: any = [];
      let value: any = [];
      let buyerValue: any = [];
      for (let item of this.itemArray) {
        for (let sb of this.sbArray) {
          if (item?.sbno === sb) {
            pipoValue = item;
            value = item?.pipo;
            buyerValue = item?.buyerName;
            this.dateArray.push(item?.sbdate);
            this.sbDataArray.push(item);
            console.log('value', value);
            generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
          }
        }
      }

      console.log(pipoValue, 'pipovalue*****************************');
      for (value of this.item) {
        for (let value1 of pipoValue?.pipo) {
          if (value?.pi_poNo == value1?.pi_poNo) {
            this.randomArray.push(value);
          }
        }
      }
      console.log('random Array', this.randomArray);
      console.log('random Array', this.randomArray[0]?.creditNote);

      this.sb = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.sb
      );

      this.creditNote = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.creditNote
      );
      console.log('////*********************Credit Note', this.creditNote);

      this.debitNote = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.debitNote
      );
      console.log('////*********************debit Note', this.debitNote);

      this.advanceOutward = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.advanceOutward
      );
      console.log('////*********************advanceOutward', this.advanceOutward);

      this.ebrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.EBRC
      );
      console.log('////*********************Ebrc', this.ebrc);

      this.blcopyref = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.blcopyref
      );

      this.irAdvice = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.irAdvice
      );

      this.lcCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.lcCopy
      );
      console.log('****************Lc Copy', this.lcCopy);

      this.swiftCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.swiftCopy
      );

      this.tryPartyAgreement = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.tryPartyAgreement
      );

      this.opinionReport = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.opinionReport
      );

      this.airwayBlCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.airwayBlcopy
      );

      this.billOfExchange = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.billOfExchange
      );

      this.commercial = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.commercial
      );

      this.destruction = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.destruction
      );

      this.packingList = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]?.packingList
      );

      console.log('Random Array', this.randomArray);
      console.log('Airway Docs****************--------------------------------', this.airwayBlCopy);

      let mainArr: any = [];
      let invoicearray: any = [];
      console.log('line no.796 question5 data', this.Question5);
      this.sbDataArray.forEach((value, index) => {
        for (let a of value.pipo) {
          this.arrayPipo.push(a);
        }
      });
      if (this.Question6 == 'yes') {
        let adArr: any = [];
        console.log('Shipping Map For', this.shippingMap);
        this.shippingMap.forEach((value) => {
          console.log('Shipping Map For loop', value);
          adArr = adArr.concat(value);
        });
        console.log('advArr', adArr);
        console.log('sbDataArray', this.sbDataArray);

        forkJoin(
          this.sbDataArray.map((value) => {
            let piponumbers: any = [];
            for (let i in value.pipo) {
              piponumbers.push(value.pipo[i].pi_poNo);
            }
            return this.userService.getManyPipo(piponumbers);
          })
        ).subscribe((resp: any[]) => {
          console.log('Fork join resp', resp);
          resp.forEach((data, i) => {
            for (let item of data['data']) {
              console.log(item);
              const newVal: any = { ...this.sbDataArray[i] };
              newVal['pipoValue'] = item;
              mainArr.push(newVal);
              console.log('fggfgfgf', mainArr);
            }
          });
          mainArr.forEach((value1, index) => {
            console.log('shshsh');
            for (let a of adArr) {
              if (a.sb == value1.sbno) {
                const newVal: any = { ...value1 };
                newVal['advance'] = a.valueInternal;
                newVal['irAdviceId'] = a.irDataItem._id;
                invoicearray.push(newVal);
              }
            }
            console.log('aajsjss');
          });
          let amountArr: any = [];
          for (let item of invoicearray) {
            amountArr.push(item.pipoValue.amount);
          }
          console.log(amountArr);
          this.amArr = amountArr;
          console.log('t', invoicearray);
          this.invoiceArr = invoicearray;

          console.log('hello line 884', this.invoiceArr);
          console.log('line no.866 question5 data', this.Question5);
        });
      }

      console.log('Rajuuuuu', pipoValue);
      //this.arrayPipo = value
      this.mainDoc1 = generateDoc2;
      console.log(this.mainDoc1);
      console.log('950', generateDoc2);
      let generateDoc3: any = [];
      if (this.Question2 == 'yes') {
        for (let item of this.item4) {
          for (let sb of this.tryArray) {
            if (item.triPartyAgreementNumber === sb) {
              generateDoc3.push(
                this.sanitizer.bypassSecurityTrustResourceUrl(item.doc)
              );
            }
          }
        }
      }

      let generateDoc4: any = [];
      if (this.Question7 == 'yes') {
        for (let item of this.item8) {
          for (let sb of this.lcArray) {
            if (item.letterOfCreditNumber === sb) {
              generateDoc4.push(
                this.sanitizer.bypassSecurityTrustResourceUrl(item.doc)
              );
            }
          }
        }
      }
      console.log(buyerValue);
      const data: any = await this.userService.getBuyerByName(buyerValue);
      console.log('shshhss', data.data);
      this.buyerAds = data.data.buyerAdrs;

      this.completewords4 = this.buyerAds.split(' ');
      this.devideContent4 = this.completewords4.length;

      for (let i = 0; i < this.completewords4.length; i++) {
        if (i < 6) {
          this.buyerAdd2.push(this.completewords4[i]);
        } else if (i > 5 && i <= 11) {
          this.buyerAdd3.push(this.completewords4[i]);
        } else if (i > 11) {
          this.buyerAdd4.push(this.completewords4[i]);
        }
      }

      this.buyerAds1 = this.buyerAdd2.join(' ');
      this.buyerAds2 = this.buyerAdd3.join(' ');
      this.buyerAds3 = this.buyerAdd4.join(' ');

      console.log('Shailendra Buyer Address*************', this.buyerAds1);
      console.log('Shailendra Buyer Address*************', this.buyerAds2);

      console.log('89999999999999999999999999999', this.buyerAds);
      this.mainDoc3 = generateDoc3;
      this.mainDoc4 = generateDoc4;
      this.newTask[0] = {
        sbNumbers: this.sbArray,
        sbUrls: this.mainDoc1,
        triPartyAgreementNumber: this.tryArray,
        tryUrls: this.mainDoc3,
        purposeCode: '',
        isLc: this.lc,
        letterOfCreditNumber: this.lcArray,
        lcUrls: this.mainDoc4,
        withScrutiny: this.scrutiny,
        withDiscount: this.withDiscount,
        bankRef: '',
        advanceRef: this.advanceRef,
        ir: this.Question5,
      };
      for (let value of this.dateArray) {
        this.getProper(value);
      }
      this.myArr.sort(function (a, b) {
        a = a.split('-').reverse().join('');
        b = b.split('-').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
      });
      console.log('Datesss', this.myArr);
      console.log(this.myArr[0]);
      console.log(this.myArr[this.myArr.length - 1]);

      console.log(this.generate1);
      console.log(this.c);
      this.newTask[0] = {
        sbNumbers: this.sbArray,
        sbUrls: this.mainDoc1,
        triPartyAgreementNumber: this.tryArray,
        tryUrls: this.mainDoc3,
        purposeCode: '',
        isLc: this.lc,
        letterOfCreditNumber: this.lcArray,
        lcUrls: this.mainDoc4,
        withScrutiny: this.scrutiny,
        withDiscount: this.withDiscount,
        bankRef: '',
        advanceRef: this.advanceRef,
        ir: this.Question5,
      };
    } else {
      if (Object.keys(this.advanceArray).length != 0) {
        this.generate = true;
        this.isGenerate = true;
        let generateDoc2: any = [];
        let pipoValue: any = [];
        let value: any = [];
        let buyerValue: any = [];
        for (let item of this.itemArray) {
          for (let sb of this.sbArray) {
            if (item.sbno === sb) {
              pipoValue = item;
              value = item?.pipo;
              buyerValue = item?.buyerName;
              this.dateArray.push(item?.sbdate);
              this.sbDataArray.push(item);
              console.log('value', value);
              generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
            }
          }
        }

        console.log(pipoValue, 'pipovalue*****************************');
        for (value of this.item) {
          for (let value1 of pipoValue?.pipo) {
            if (value?.pi_poNo == value1?.pi_poNo) {
              this.randomArray.push(value);
            }
          }
        }
        console.log('random Array', this.randomArray);
        console.log('random Array', this.randomArray[0]?.creditNote);

        this.sb = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.sb
        );

        this.creditNote = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.creditNote
        );
        console.log('////*********************Credit Note', this.creditNote);

        this.debitNote = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.debitNote
        );
        console.log('////*********************debit Note', this.debitNote);

        this.advanceOutward = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.advanceOutward
        );
        console.log('////*********************advanceOutward', this.advanceOutward);

        this.ebrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.EBRC
        );
        console.log('////*********************Ebrc', this.ebrc);

        this.blcopyref = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.blcopyref
        );

        this.irAdvice = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.irAdvice
        );

        this.lcCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.lcCopy
        );
        console.log('****************Lc Copy', this.lcCopy);

        this.swiftCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.swiftCopy
        );

        this.tryPartyAgreement = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.tryPartyAgreement
        );

        this.opinionReport = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.opinionReport
        );

        this.airwayBlCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.airwayBlcopy
        );

        this.billOfExchange = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.billOfExchange
        );

        this.commercial = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.commercial
        );

        this.destruction = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.destruction
        );

        this.packingList = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]?.packingList
        );

        console.log('Random Array', this.randomArray);
        console.log('Airway Docs****************--------------------------------', this.airwayBlCopy);

        let mainArr: any = [];
        let invoicearray: any = [];
        console.log('line no.796 question5 data', this.Question5);
        this.sbDataArray.forEach((value, index) => {
          for (let a of value.pipo) {
            this.arrayPipo.push(a);
          }
        });
        if (this.Question6 == 'yes') {
          let adArr: any = [];
          console.log('Shipping Map For', this.shippingMap);
          this.shippingMap.forEach((value) => {
            console.log('Shipping Map For loop', value);
            adArr = adArr.concat(value);
          });
          console.log('advArr', adArr);
          console.log('sbDataArray', this.sbDataArray);

          forkJoin(
            this.sbDataArray.map((value) => {
              let piponumbers: any = [];
              for (let i in value.pipo) {
                piponumbers.push(value.pipo[i].pi_poNo);
              }
              return this.userService.getManyPipo(piponumbers);
            })
          ).subscribe((resp: any[]) => {
            console.log('Fork join resp', resp);
            resp.forEach((data, i) => {
              for (let item of data['data']) {
                console.log(item);
                const newVal: any = { ...this.sbDataArray[i] };
                newVal['pipoValue'] = item;
                mainArr.push(newVal);
                console.log('fggfgfgf', mainArr);
              }
            });
            mainArr.forEach((value1, index) => {
              console.log('shshsh');
              for (let a of adArr) {
                if (a.sb == value1.sbno) {
                  const newVal = { ...value1 };
                  newVal['advance'] = a.valueInternal;
                  newVal['irAdviceId'] = a.irDataItem._id;
                  invoicearray.push(newVal);
                }
              }
              console.log('aajsjss');
            });
            let amountArr: any = [];
            for (let item of invoicearray) {
              amountArr.push(item.pipoValue.amount);
            }
            console.log(amountArr);
            this.amArr = amountArr;
            console.log('t', invoicearray);
            this.invoiceArr = invoicearray;

            console.log('hello line 884', this.invoiceArr);
            console.log('line no.866 question5 data', this.Question5);
          });
        }

        console.log('Rajuuuuu', pipoValue);
        //this.arrayPipo = value
        this.mainDoc1 = generateDoc2;
        console.log(this.mainDoc1);
        console.log('950', generateDoc2);
        let generateDoc3: any = [];
        if (this.Question2 == 'yes') {
          for (let item of this.item4) {
            for (let sb of this.tryArray) {
              if (item.triPartyAgreementNumber === sb) {
                generateDoc3.push(
                  this.sanitizer.bypassSecurityTrustResourceUrl(item.doc)
                );
              }
            }
          }
        }

        let generateDoc4: any = [];
        if (this.Question7 == 'yes') {
          for (let item of this.item8) {
            for (let sb of this.lcArray) {
              if (item.letterOfCreditNumber === sb) {
                generateDoc4.push(
                  this.sanitizer.bypassSecurityTrustResourceUrl(item.doc)
                );
              }
            }
          }
        }
        console.log(buyerValue);
        const data: any = await this.userService.getBuyerByName(buyerValue);
        console.log('shshhss', data.data);
        this.buyerAds = data.data.buyerAdrs;

        this.completewords4 = this.buyerAds.split(' ');
        this.devideContent4 = this.completewords4.length;

        for (let i = 0; i < this.completewords4.length; i++) {
          if (i < 6) {
            this.buyerAdd2.push(this.completewords4[i]);
          } else if (i > 5 && i <= 11) {
            this.buyerAdd3.push(this.completewords4[i]);
          } else if (i > 11) {
            this.buyerAdd4.push(this.completewords4[i]);
          }
        }

        this.buyerAds1 = this.buyerAdd2.join(' ');
        this.buyerAds2 = this.buyerAdd3.join(' ');
        this.buyerAds3 = this.buyerAdd4.join(' ');

        console.log('Shailendra Buyer Address*************', this.buyerAds1);
        console.log('Shailendra Buyer Address*************', this.buyerAds2);

        console.log('89999999999999999999999999999', this.buyerAds);
        this.mainDoc3 = generateDoc3;
        this.mainDoc4 = generateDoc4;
        this.newTask[0] = {
          sbNumbers: this.sbArray,
          sbUrls: this.mainDoc1,
          triPartyAgreementNumber: this.tryArray,
          tryUrls: this.mainDoc3,
          purposeCode: '',
          isLc: this.lc,
          letterOfCreditNumber: this.lcArray,
          lcUrls: this.mainDoc4,
          withScrutiny: this.scrutiny,
          withDiscount: this.withDiscount,
          bankRef: '',
          advanceRef: this.advanceRef,
          ir: this.Question5,
        };
        for (let value of this.dateArray) {
          this.getProper(value);
        }
        this.myArr.sort(function (a, b) {
          a = a.split('-').reverse().join('');
          b = b.split('-').reverse().join('');
          return a > b ? 1 : a < b ? -1 : 0;

          // return a.localeCompare(b);         // <-- alternative
        });
        console.log('Datesss', this.myArr);
        console.log(this.myArr[0]);
        console.log(this.myArr[this.myArr.length - 1]);

        console.log(this.generate1);
        console.log(this.c);
        this.newTask[0] = {
          sbNumbers: this.sbArray,
          sbUrls: this.mainDoc1,
          triPartyAgreementNumber: this.tryArray,
          tryUrls: this.mainDoc3,
          purposeCode: '',
          isLc: this.lc,
          letterOfCreditNumber: this.lcArray,
          lcUrls: this.mainDoc4,
          withScrutiny: this.scrutiny,
          withDiscount: this.withDiscount,
          bankRef: '',
          advanceRef: this.advanceRef,
          ir: this.Question5,
        };
      } else {
        this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX Amount',
          `Please select a firx amount ${this.itemArray.length == 0 ? '& also select Sb no.' : ''}...`)
      }
    }
  }

  getProper(a) {
    const myArray = a.split('-');
    myArray.forEach((value, index) => {
      if (index == 0) {
        this.str = value + '.';
      } else if (index == 1) {
        if (value.toUpperCase() == 'JAN') {
          this.str = this.str + '01.';
        } else if (value.toUpperCase() == 'FEB') {
          this.str = this.str + '02.';
        } else if (value.toUpperCase() == 'MAR') {
          this.str = this.str + '03.';
        } else if (value.toUpperCase() == 'APR') {
          this.str = this.str + '04.';
        } else if (value.toUpperCase() == 'MAY') {
          this.str = this.str + '05.';
        } else if (value.toUpperCase() == 'JUN') {
          this.str = this.str + '06.';
        } else if (value.toUpperCase() == 'JUL') {
          this.str = this.str + '07.';
        } else if (value.toUpperCase() == 'AUG') {
          this.str = this.str + '08.';
        } else if (value.toUpperCase() == 'SEP') {
          this.str = this.str + '09.';
        } else if (value.toUpperCase() == 'OCT') {
          this.str = this.str + '10.';
        } else if (value.toUpperCase() == 'NOV') {
          this.str = this.str + '11.';
        } else if (value.toUpperCase() == 'DEC') {
          this.str = this.str + '12.';
        }
      } else if (index == 2) {
        this.str = this.str + '20' + value;
      }
    });
    this.myArr.push(this.str);
    this.str = '';
    console.log(this.str);
  }
  bankformat: any = ''

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

  change(e) {
    console.log(e.target.value);
    this.advanceRef = e.target.value;
  }

  change1(e) {
    console.log(e.target.value);
    this.LcNumber = e.target.value;
  }

  setradio(a: any) {
    console.log(a, 'setradio');
    this.bankToggle = a;
    this.bankValue = a;
    this.newBankArray = [];
    console.log(this.bankArray, 'this.bankArray')
    this.bankArray.forEach((value, index) => {
      if (value?.BankUniqueId?.includes(a) == true) {
        this.newBankArray.push(value)
      }
    });
  }

  creditTo(a) {
    var n = a.accNumber;
    this.credit = n.split('');
    console.log(this.credit);
  }

  CHARGE_TO_DATA: any = [];
  chargesTo(a) {
    var n = a.accNumber;
    this.CHARGE_TO_DATA[0] = a;
    this.charge = n.split('');
    if (this.Lodgement['AgainstAdvanceReceipt']?.Hide == 'no') {
      this.generateDoc1(this.ExportBillLodgement_Form);
      this.SlideToggle(null, this.itemArray[0]?._id)
    } else {
      if (Object.keys(this.advanceArray).length != 0) {
        this.generateDoc1(this.ExportBillLodgement_Form)
        this.SlideToggle(null, this.itemArray[0]?._id)
      } else {
        this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX Amount',
          `Please select a firx amount ${this.itemArray.length == 0 ? '& also select Sb no.' : ''}...`)
      }
    }

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

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open1(content1) {
    this.modalService
      .open(content1, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  shippingMap: Map<number, any[]> = new Map<number, any[]>();
  SHIPPING_MAP: any = [];
  Advance_Amount_Sum: any = [];
  PROCEED_BTN_DISABLED: boolean = false;
  filterSum: any = [];
  balanceAvai: any = '';
  SELECTED_FIRX_INDEX: any = [];
  refSbNo: number;
  PDF_LIST: any = [];
  ACCORDING_LIST: any = [];
  temp: any = [];
  CHECKEBOX_SELECTION: any = { SHIPPING_BILL: [], INWARD_REMMITANCE: [] };
  OK_BUTTON_CONDITION: any = '';
  async addToSbArray(irDataItem: any, e, i) {
    let index: any = this.item13.findIndex(x => x.billNo === irDataItem?.billNo);
    this.balanceAvai = this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]?.SB_Amout_Realized
    if (this.item13[index]['isEnabled'] == false || !this.item13[index]?.sbno?.includes(this.SELECTED_SHIPPING_BILL?.data?.sbNo)) {
      if (parseFloat(this.balanceAvai) > parseFloat(this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]['IRADVICE_SUM'])) {
        if (e.target.checked) {
          let advance = this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo]?.some((item: any) => item.valueInternal === irDataItem.billNo);
          if (!advance) {
            irDataItem.Used_Balance = irDataItem?.BalanceAvail;
            let details: any = {
              valueInternal: irDataItem.billNo,
              irDataItem: irDataItem,
              sb: this.currentSbForAdvance,
            };
            this.item13[index]['isEnabled'] = true;
            this.OK_BUTTON_CONDITION = true;
            this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].push(details)
            this.filterSum = this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.BalanceAvail) }, 0);
            if (this.filterSum > this.balanceAvai) {
              this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].pop();
              var sum: any = sum = this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].reduce(function (a, b) { return parseFloat(a) + (parseFloat(b?.irDataItem?.BalanceAvail)+parseFloat(b?.irDataItem?.commision)) }, 0);
              let temp: any = details;
              var last_amount: any = this.TO_FIXED(parseFloat(this.balanceAvai) - parseFloat(sum), 2);
              temp.irDataItem.BalanceAvail = this.TO_FIXED(parseFloat(details?.irDataItem?.BalanceAvail) - parseFloat(last_amount), 2);

              this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].push(temp)
              this.ACCORDING_LIST['SB_' + this.currentSbForAdvance].push(temp.irDataItem)
              this.filterSum = this.TO_FIXED(parseInt(sum) + parseInt(last_amount), 2);
              irDataItem.Used_Balance = last_amount;
              this.ExportBillLodgement_Form.controls['Carry_Amount'].setValue(temp);
            } else {
              this.PROCEED_BTN_DISABLED = true;
              this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].push(details);
              this.ACCORDING_LIST['SB_' + this.currentSbForAdvance].push(irDataItem)
            }
            this.ExportBillLodgement_Form.controls['Total_SB_Amount'].setValue(this.TO_FIXED(this.balanceAvai, 2));
            this.ExportBillLodgement_Form.controls['Total_FIRX_Amount'].setValue(this.TO_FIXED(this.filterSum, 2));
            this.ExportBillLodgement_Form.controls['Total_Reaming_Amount'].setValue(this.TO_FIXED(this.balanceAvai - this.filterSum, 2));
          }
        } else {
          this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo] = this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].filter((item: any) => item.valueInternal !== irDataItem.billNo);
          this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo] = this.Advance_Amount_Sum['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo].filter((item) => item.valueInternal !== irDataItem.billNo);
          this.SELECTED_FIRX_INDEX['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][i] = false;
          this.item13[i]['isEnabled'] = false;
          this.OK_BUTTON_CONDITION = '';
        }
        this.SHIPPING_MAP[this.currentSbForAdvance] = this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo];
        this.shippingMap.set(this.refSbNo, JSON.parse(JSON.stringify(this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo])));
        this.ExportBillLodgement_Form.controls['Advance_reference_Number'].setValue(this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo]);
        this.ExportBillLodgement_Form.controls['Shipping_bill_list'].setValue(this.itemArray);
      } else {
        e.target.checked = false;
        this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX Amount', "You've exceeded the maximum transaction amount set by your Sb amount..")
      }
    } else {
      e.target.checked = true;
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX Error', "You already selected this firx no. </br>Please select other firx no.")
    }
    this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]['IRADVICE_INFO'] = this.advanceArray['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo];
    let IRADVICE_SUM: any = this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]['IRADVICE_INFO'].reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.Used_Balance)}, 0);
    let COMMISION_SUM: any = this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]['IRADVICE_INFO'].reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.commision) }, 0);
    this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + this.SELECTED_SHIPPING_BILL?.data?.sbNo][this.SELECTED_SHIPPING_BILL?.index]['IRADVICE_SUM'] = ((parseFloat(IRADVICE_SUM)-parseInt(COMMISION_SUM))).toFixed(3);

    console.log(this.advanceArray, this.balanceAvai, this.filterSum, this.Advance_Amount_Sum, this.shippingMap, this.ACCORDING_LIST,
      this.FILTER_DATA.FILTER_COMMERCIAL, this.SELECTED_FIRX_INDEX, this.item13, 'Deva Hello0*************************');
  }

  changeCheckbox1(event, a, data) {
    if (data.blCopyDoc) {
      if (data.commercialDoc) {
        let j = this.sbArray.indexOf(a);
        if (j == -1) {
          this.sbArray.push(a);
        } else {
          this.sbArray.splice(j, 1);
          $(event.target).prop('checked', false)
        }
        this.currentSbForAdvance = a;
        this.ACCORDING_LIST['SB_' + a] = [];
        this.advanceArray['SB_' + a] = [];
        this.Advance_Amount_Sum['SB_' + a] = []
        this.refSbNo = a;
        this.FILTER_DATA.FILTER_COMMERCIAL['SB_' + a] = this.FILTER_DATA?.COMMERCIAL?.filter((item: any) => item?.sbNo === a);
        this.SELECTED_FIRX_INDEX['SB_' + a] = [];
        console.log('changeCheckbox1', data, this.FILTER_DATA, this.sbArray, this.ACCORDING_LIST);
      } else {
        console.log("You Don't have Commercial Invoice");
      }
    } else {
      console.log("You Don't have BLCopy Document");
    }
  }

  addTofilter1(event, id, data, i) {
    this.temp[id] = [];
    if (data.blCopyDoc) {
      if (data.commercialDoc) {
        let removeArray: any = [];
        if (event.target.checked) {
          for (let element of this.item1) {
            if (element._id == id) {
              console.log(element, 'elelelele')
              this.itemArray.push(element);
              this.temp[id] = [{
                pdf: (element['doc']),
                name: 'Shipping Bill'
              }, {
                pdf: (element['blCopyDoc']),
                name: 'blCopyDoc'
              }, {
                pdf: (element['commercialDoc']),
                name: 'commercialDoc'
              }, {
                pdf: (element['packingDoc']),
                name: 'packingDoc'
              }, {
                pdf: (element['DebitNote']),
                name: 'debitNotedoc'
              }, {
                pdf: this.documentService.MT102_SUBJECT?.file,
                name: 'MT103'
              }]
            }
          }
          this.CHECKEBOX_SELECTION.SHIPPING_BILL[i] = true;
        } else {
          $(event.target).prop('checked', false);
          this.CHECKEBOX_SELECTION.SHIPPING_BILL[i] = false;
          if (this.itemArray.length) {
            this.itemArray.forEach((element: any) => {
              if (element._id != id) {
                removeArray.push(element);
              }
            });
            this.itemArray = removeArray;
          }
          this.ExportBillLodgement_Form.controls['documents'].setValue(this.temp);
          console.log('test2', id, this.documentService.MT102_SUBJECT, this.itemArray, this.temp, this.PDF_LIST);
        }
      } else {
        this.toastr.error(
          "You Don't Have Any Commercial Invoice Linkend with this Shipping Bill"
        );
        $(event.target).prop('checked', false);
      }
    } else {
      this.toastr.error(
        "You Don't Have Any AirWay / BLCopy Documnet Linkend with this Shipping Bill"
      );
      $(event.target).prop('checked', false);
    }
  }

  clearData() {
    this.advanceArray = [];
    console.log('Shippoinhg', this.shippingMap);
  }

  goBack() {
    this.isGenerate = false;
    window.location.reload();
  }
  TO_FIXED(amount: any, fixed_position: any): any {
    return !isNaN(amount) ? parseFloat(amount).toFixed(fixed_position) : 0;
  }

  public mergeIr() {
    let filterSBdata: any = [];
    let completedsb: any = [];
    let sbindex = 0;
    for (let sbNum of this.item1) {
      let totalForex = 0;
      // item1 have pipo details
      let currentpipo = this.item1[sbindex];
      console.log('Line no. 3658', currentpipo);
      console.log('Line no. 3659', sbNum);
      for (let irData of this.item9) {
        console.log('line 3661', irData);
        for (let i = 0; i <= irData.sbNo.length; i++) {
          console.log('a');
          if (sbNum.sbno == irData.sbNo[i]) {
            let irAmount = parseFloat(irData.amount);
            totalForex = totalForex + irAmount;
            console.log('145', totalForex);
          } else {
            filterSBdata.push(this.item1);
          }
        }
      }

      const newVal = { ...sbNum };
      let sbAmount = newVal.fobValue;

      newVal['balanceAvai'] = (sbAmount - totalForex).toFixed(2);
      console.log('hello sj', newVal);

      filterSBdata.push(newVal);

      if (completedsb.indexOf(sbindex) == -1) {
        completedsb.push(sbindex);
      }
      sbindex = sbindex + 1;
    }
    for (let i = completedsb.length - 1; i >= 0; i--) {
      this.item1.splice(completedsb[i], 1);
    }
    for (let sb of filterSBdata) {
      console.log('data of pipo', sb);
      if (sb.balanceAvai > 0) {
        this.item1.push(sb);
      }
    }
  }

  TOTAL_FIRX_AMOUNT: any = 0;
  public mergeIr2() {
    // let filterIrdata: any = [];
    // if (this.item1 && this.item1.length) {
    //   for (let irData of this.item9) {
    //     console.log('Line no. 3700', irData);
    //     for (let sbNum of this.item1) {
    //       console.log('line 3701', sbNum);
    //       for (let i = 0; i <= irData.sbNo.length; i++) {
    //         console.log('a');
    //         if (sbNum.sbno == irData.sbNo[i]) {
    //           const newVal = { ...irData }
    //           console.log('Line no. 3706', newVal);
    //           let sbBalance = sbNum.fobValue;
    //           let irAmount = parseFloat(irData.amount);
    //           let availableBalance = irAmount - sbBalance;
    //           if (availableBalance <= 0) {
    //             newVal['BalanceAvail'] = 0;
    //           } else {
    //             newVal['BalanceAvail'] = availableBalance.toFixed(2);
    //           }

    //           if (newVal.BalanceAvail > 0) {
    //             console.log("BalanceAvailable", newVal.BalanceAvail)
    //             filterIrdata.push(newVal);
    //           }
    //           console.log('Line no. 3723', filterIrdata);
    //         }
    //       }
    //     }
    //   }
    //   for (let irData of this.item9) {
    //     if (irData.sbNo.length == 0) {
    //       const newVal = { ...irData };
    //       let availableBal = irData.amount;
    //       newVal['BalanceAvail'] = availableBal;
    //       filterIrdata.push(newVal);
    //       console.log('235', filterIrdata);
    //     }
    //   }
    // } else {
    //   for (let ir of this.item9) {
    //     const newVal = { ...ir };
    //     let availableBal = ir.amount;
    //     newVal['BalanceAvail'] = availableBal;
    //     filterIrdata.push(newVal);
    //   }
    // }
    this.item13 = this.item9.filter((item: any) => parseInt(item?.BalanceAvail) != 0);
    this.item13?.forEach(element => {
      element['isEnabled'] = false;
    });
    console.log("filterForex", this.item13)
  }

  ShowPopup(callback: any) {

  }
  Lodgement: any = {
    'AgainstAdvanceReceipt': {
      Show: '',
      Hide: ''
    },
    'UnderLC': {
      Show: '',
      Hide: ''
    },
    'BuyerRemitterDifferent': {
      Show: '',
      Hide: ''
    },
    'InvoiceReduction': {
      Show: '',
      Hide: ''
    },
    'WithDiscount': {
      Show: '',
      Hide: ''
    },
    'WithScrutiny': {
      Show: '',
      Hide: ''
    },
    'DirectDispatch': {
      Show: '',
      Hide: ''
    },
    'ThirdPartyRemittance': {
      Show: '',
      Hide: ''
    },
    Sight:{
      Show: '',
      Hide: ''
    },
    Usance:{
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
  async PREVIEWS_URL() {
    this.PreviewSlideToggle(this.itemArray[0]?.sbno)
  }
  temp_doc: any = [];
  tp: any = {
    firxNumber: [],
    firxDate: [],
    firxCurrency: [],
    firxAmount: [],
    firxCommision: [],
    firxRecAmo: [],
    FirxUsed_Balance: [],
    id: [],
  };
  BOOLEAN: boolean = false;
  MERGE_ALL_PDF: any = [];
  SB_NO_FILTER: any = ''
  RESET: boolean = false;
  async SlideToggle(event: any, sbid: any) {
    var temp: any = [];
    const id = event != null ? event.tab.content.viewContainerRef.element.nativeElement.id : sbid;
    this.PDF_LIST = [];
    var sbfilter = this.itemArray.filter((item: any) => item?._id == id);
    this.SB_NO_FILTER = sbfilter[0]?.sbno;
    var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.bankValue) != -1);
    console.log(this.newBankArray, bankformat, id, 'this.newBankArray')
    if (bankformat.length != 0 && bankformat[0]?.urlpdf != '') {
      for (let index = 0; index < this.temp[id].length; index++) {
        if (this.temp[id][index]?.pdf != undefined && this.temp[id][index]?.pdf != null) {
          temp.push(this.temp[id][index]?.pdf)
          this.PDF_LIST.push({
            pdf: this.temp[id][index]?.pdf,
            name: this.temp[id][index]['name']
          })
        }
        if ((index + 1) == this.temp[id].length) {
          var fitertemp: any = temp.filter(n => n)
          await this.pdfmerge._multiple_merge_pdf(fitertemp).then((data: any) => {
            console.log('mergeAllPDFmergeAllPDFmergeAllPDF', temp, data);
            this.MERGE_ALL_PDF[0] = data.toString();
          })
        }
      }
    } else {
      for (let index = 0; index < this.temp[id].length; index++) {
        if (this.temp[id][index]?.pdf != undefined && this.temp[id][index]?.pdf != null) {
          temp.push(this.temp[id][index]?.pdf)
          this.PDF_LIST.push({
            pdf: this.temp[id][index]?.pdf,
            name: this.temp[id][index]['name']
          })
        }
        if ((index + 1) == this.temp[id].length) {
          var fitertemp: any = temp.filter(n => n)
          await this.pdfmerge.mergeAllPDF(fitertemp).then((data: any) => {
            console.log('mergeAllPDFmergeAllPDFmergeAllPDF', temp, data);
            this.MERGE_ALL_PDF[0] = data.toString();
          })
        }
      }
    }
  }
  temp_pdf_lits: any = [];

  async PreviewSlideToggle(event: any) {
    this.temp_pdf_lits = [];
    const id: any = event?.tab?.content?.viewContainerRef?.element?.nativeElement?.id != undefined ? event.tab.content.viewContainerRef.element.nativeElement.id : event;
    var tempfilter: any = this.itemArray.filter((item: any) => item?.sbno == id);
    var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.bankValue) != -1);
    this.PREVIEWS_URL_LIST = [];
    var tep: any = [];
    tep[tempfilter[0]?._id] = []
    for (let index = 0; index < this.temp[tempfilter[0]?._id].length; index++) {
      tep[tempfilter[0]?._id].push(this.temp[tempfilter[0]?._id][index]?.pdf);
      if (this.temp[tempfilter[0]?._id][index]?.pdf != undefined) {
        this.temp_pdf_lits.push(this.temp[tempfilter[0]?._id][index]?.pdf)
      }
      if ((index + 1) == this.temp[tempfilter[0]?._id].length) {
        this.getS3Url().then(async (element: any) => {
          await element?.forEach(urlelement => {
            this.temp_pdf_lits.push(urlelement);
          });
          var fitertemp: any = await this.temp_pdf_lits.filter(n => n)
          await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
            this.PREVIEWS_URL_LIST.push(merge?.pdfurl);
            console.log(this.tp, this.temp_doc, merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PreviewSlideToggle')
          });
        });
      }
    }
    for (let index = 0; index < this.advanceArray['SB_' + id].length; index++) {
      const element: any = this.advanceArray['SB_' + id][index];
      this.tp['firxNumber'].push(element?.irDataItem?.billNo)
      this.tp['firxDate'].push(element?.irDataItem?.recievedDate)
      this.tp['firxCurrency'].push(element?.irDataItem?.currency)
      this.tp['firxAmount'].push(element?.irDataItem?.amount)
      if (element?.irDataItem?.CommissionUsed == false) {
        this.tp['firxCommision'].push(element?.irDataItem?.commision)
      } else {
        this.tp['firxCommision'].push(0);
      }
      this.tp['FirxUsed_Balance'].push(element?.irDataItem?.Used_Balance)
      this.tp['firxRecAmo'].push(0);
      this.tp['id'].push(element?.irDataItem?._id)
    }
    this.temp_doc = [];
    this.temp_doc[0] = { pdf: this.value?.changingThisBreaksApplicationSecurity, name: bankformat[0]?.value };
    this.temp_doc[1] = { pdf: data, name: bankformat[0]?.value };
    for (let index = 0; index < this.temp[tempfilter[0]?._id].length; index++) {
      if (this.temp[tempfilter[0]?._id][index]?.pdf != '' && this.temp[tempfilter[0]?._id][index]?.pdf != undefined) {
        this.temp_doc.push({ pdf: this.temp[tempfilter[0]?._id][index]?.pdf, name: this.temp[tempfilter[0]?._id][index]?.name })
      }
    }
  }

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.UrlList?.BankUrl,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse: any) => {
        temp[0] = pdfresponse?.url
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.UrlList?.LetterHeadUrl,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse1: any) => {
          temp[1] = pdfresponse1?.url;
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
  async SendApproval(Status: string, UniqueId: any, event: any) {
    var UpdatedUrl: any = []
    for (let index = 0; index < this.temp_pdf_lits.length; index++) {
      UpdatedUrl.push(this.temp_pdf_lits[index]);
      if ((index + 1) == this.temp_pdf_lits.length) {
        if (UniqueId != null) {
          var approval_data: any = {};
          delete this.USER_DATA?.members_list
          delete this.USER_DATA?.LoginToken
          if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
            approval_data = {
              id: 'IRDR' + '_' + this.randomId(5),
              tableName: 'Inward-Remitance-Dispoal-Realization',
              deleteflag: '-1',
              userdetails: this.USER_DATA,
              status: 'pending',
              documents: UpdatedUrl?.reverse(),
              Types: 'downloadPDF',
              TypeOfPage: 'Transaction',
              FileType: this.USER_DATA?.sideMenu
            }
          } else {
            approval_data = {
              id: 'EDD' + '_' + this.randomId(5),
              tableName: 'Export-Direct-Dispatch',
              deleteflag: '-1',
              userdetails: this.USER_DATA,
              status: 'pending',
              documents: UpdatedUrl?.reverse(),
              Types: 'downloadPDF',
              TypeOfPage: 'Transaction',
              FileType: this.USER_DATA?.sideMenu
            }
          }
          var pipo: any = this.itemArray.filter((item: any) => item?._id.indexOf(UniqueId) != -1)[0]?.pipo;
          var pipo_id: any = [];
          var pipo_name: any = [];
          (pipo != 'NF' ? pipo : []).forEach(element => {
            pipo_id.push(element?._id)
            pipo_name.push(element?.pi_poNo)
          });
          this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
            console.log(approval_data, res, 'approval_data')
            if (res?.id != approval_data?.id) {
              if (Status == '' || Status == null || Status == 'Rejected') {
                this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
                  this.ExportBillLodgement_Form.controls['SbRef'].setValue(UniqueId);
                  this.ExportBillLodgement_Form.controls['documents'].setValue(UpdatedUrl?.reverse());
                  this.ExportBillLodgement_Form.controls['Url_Redirect'].setValue({ file: 'export', document: 'blCopyref', SbRef: UniqueId })
                  this.ExportBillLodgement_Form.controls['extradata'].setValue(this.FILTER_DATA)
                  if (this.Lodgement['AgainstAdvanceReceipt']?.Hide != 'no') {
                    var data: any = {
                      data: this.ExportBillLodgement_Form.value,
                      TypeTransaction: 'Export-Direct-Dispatch',
                      fileType: 'Export',
                      UserDetails: approval_data?.id,
                      pipo: pipo_id
                    }
                    this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                      let updatedData = {
                        "TransactionRef": [
                          res1._id,
                        ]
                      }
                      if (this.documentService.MT102_SUBJECT?.file == '' || this.documentService.MT102_SUBJECT?.file == undefined) {
                        this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                          console.log(data);
                          for (let index = 0; index < this.ExportBillLodgement_Form.value?.Advance_reference_Number?.length; index++) {
                            const element = this.ExportBillLodgement_Form.value?.Advance_reference_Number[index]?.irDataItem;
                            this.documentService.Update_Amount_by_Table({
                              tableName: 'iradvices',
                              id: element._id,
                              query: {
                                sbno: [this.ExportBillLodgement_Form.value?.Advance_reference_Number[index]?.sb],
                                BalanceAvail: parseInt(element?.BalanceAvail) - parseInt(this.tp?.FirxUsed_Balance[index]),
                                CommissionUsed: true
                              }
                            }).subscribe((list: any) => {

                            })
                          }
                          this.documentService.Update_Amount_by_Table({
                            tableName: 'iradvices',
                            id: this.ExportBillLodgement_Form.value?.Carry_Amount.irDataItem?._id,
                            query: {
                              BalanceAvail: this.ExportBillLodgement_Form.value?.Carry_Amount.irDataItem?.BalanceAvail,
                              sbno: [this.ExportBillLodgement_Form.value?.Carry_Amount?.sb],
                              CommissionUsed: true
                            }
                          }).subscribe((r1: any) => {
                            let sbAmount: any = this.itemArray.filter((item: any) => item?._id.includes(UniqueId));
                            var query: any = {
                              firxNumber: this.tp?.firxNumber.join(','),
                              firxDate: this.tp?.firxDate.join(','),
                              firxCurrency: this.tp?.firxCurrency.join(','),
                              firxAmount: this.tp?.firxAmount.join(','),
                              firxCommision: this.tp?.firxCommision.join(','),
                              firxRecAmo: '0',
                              FirxUsed_Balance:this.tp?.FirxUsed_Balance.join(',')
                            }
                            if (this.ExportBillLodgement_Form.value?.Total_Reaming_Amount != 0) {
                              query = {
                                firxNumber: this.tp?.firxNumber.join(','),
                                firxDate: this.tp?.firxDate.join(','),
                                firxCurrency: this.tp?.firxCurrency.join(','),
                                firxAmount: this.tp?.firxAmount.join(','),
                                firxCommision: this.tp?.firxCommision.join(','),
                                firxRecAmo: '0',
                                FirxUsed_Balance:this.tp?.FirxUsed_Balance.join(',')
                              }
                            }
                            this.documentService.Update_Amount_by_TableSB({
                              tableName: 'masterrecord',
                              id: UniqueId,
                              query: query
                            }).subscribe((r2: any) => {
                              let sumfixAmount: any = parseInt(this.FIRX_AMOUNT(this.tp?.FirxUsed_Balance))
                              this.documentService.Update_Amount_by_Table({
                                tableName: 'masterrecord',
                                id: UniqueId,
                                query: { balanceAvai: parseFloat(sbAmount[0]?.balanceAvai) - sumfixAmount }
                              }).subscribe((r3: any) => {
                                console.log(r3, 'masterrecord')
                                this.toastr.success('Successfully added Transaction of SB No. :' + sbAmount[0]?.sbno);
                                var updateapproval_data: any = {
                                  RejectData: {
                                    tableName: 'masterrecord',
                                    id: approval_data?.id,
                                    TransactionId: res1._id,
                                    data: {
                                      SbRef: UniqueId,
                                      Total_FIRX_Amount: sumfixAmount
                                    },
                                    pipo_id: pipo_id,
                                    pipo_name: pipo_name
                                  }
                                }
                                this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => { this.router.navigate(['/home/dashboardTask']) });
                              });
                              // model.style.display = 'none';
                              // this.router.navigate(['/home/dashboardTask'])
                            })
                          });
                        }, (error) => {
                          console.log('error');
                        }
                        );
                      }

                      console.log('addExportBillLodgment', res1);
                    })
                  } else {
                    if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
                      var changevalue: any = this.documentService.MT102_SUBJECT;
                      changevalue['pipo'] = pipo_id;
                      changevalue['SbRef'] = this.itemArray;
                      changevalue['Url_Redirect'] = { file: 'export', document: 'blCopyref', SbRef: UniqueId, pipo: pipo_name.toString() };
                      var data: any = {
                        data: changevalue,
                        TypeTransaction: 'Inward-Remitance-Dispoal-Realization',
                        fileType: 'Export',
                        UserDetails: approval_data?.id,
                        pipo: pipo_id
                      }
                      this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask']);
                        this.sessionstorage.remove('MT102')
                        console.log('addExportBillLodgment', res1);
                      })
                    } else {
                      if (this.Lodgement['AgainstAdvanceReceipt']?.Hide == 'no') {
                        var data: any = {
                          data: this.ExportBillLodgement_Form.value,
                          TypeTransaction: 'Export-Direct-Dispatch',
                          fileType: 'Export',
                          UserDetails: approval_data?.id,
                          pipo: pipo_id
                        }
                        this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                          let updatedData = {
                            "TransactionRef": [
                              res1._id,
                            ]
                          }
                          this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                            console.log('king123');
                            console.log(data);
                            let sumfixAmount: any = parseInt(this.FIRX_AMOUNT(this.tp?.FirxUsed_Balance)) + parseInt(this.FIRX_AMOUNT(this.tp?.firxCommision))
                            var updateapproval_data: any = {
                              RejectData: {
                                tableName: 'masterrecord',
                                id: approval_data?.id,
                                TransactionId: res1._id,
                                data: {
                                  SbRef: UniqueId,
                                  Total_FIRX_Amount: sumfixAmount
                                },
                                pipo_id: pipo_id,
                                pipo_name: pipo_name
                              }
                            }
                            this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                              this.router.navigate(['/home/dashboardTask'])
                            });
                          }, (error) => {
                            console.log('error');
                          }
                          );
                          console.log('addExportBillLodgment', res1);
                        })
                      }
                    }
                  }
                });
              }
            } else {
              this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
                `You already send for approval <br>&<br>also check ${res?.status} panel`)
            }
          });
        }
        console.log('Export-Direct-Dispatch' + UniqueId, UniqueId, pipo, approval_data, 'uiiiiiiiiiiiiii')
      }
    }
  }
  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };
  FIRX_AMOUNT(amountarray: any): any {
    return parseFloat(amountarray?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
  }
  getStatusCheckerMaker(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
  HIDE_SHOW: any = {
    PANEL_1: true,
    PANEL_2: false
  };
  HIDE_SHOW_POPUP(key) {
    if (this.sbArray.length == 0) {
      this.toastr.warning('Please select at least one shipping bill...');
      return;
    } else {
      for (const key in this.HIDE_SHOW) {
        this.HIDE_SHOW[key] = false;
      }

      this.HIDE_SHOW[key] = true;
    }
  }
  SELECT_BUYER_DETAILS: any = [];
  filterBuyerName($event) {
    if ($event != 'Select Buyer Name') {
      this.nameSearch4 = $event;
      var temp_filter: any = this.item13.filter((item: any) => item?.buyerName.includes($event));
      this.SELECT_BUYER_DETAILS = this.BUYER_DETAILS.filter((item: any) => item?.buyerName.includes($event))[0];
      this.TOTAL_FIRX_AMOUNT = parseFloat(temp_filter.reduce((a, b) => parseFloat(a) + parseFloat(b?.BalanceAvail), 0)).toFixed(3);
    } else {
      this.nameSearch4 = ''
    }
    this.CHECKEBOX_SELECTION.SHIPPING_BILL = []
  }
  ParseFloat(num1, num2) {
    var val: any = parseFloat(num2) != undefined ? parseFloat(num1) - parseFloat(num2) : 0
    return !isNaN(val) ? parseFloat(val).toFixed(2) : num1;
  }
  SELECTED_SHIPPING_BILL: any = [];
  _SHIPPING_BILL(i, data: any, amount: any, model: any) {
    if (this.percentCalculation(data?.amount, 25) > parseFloat(amount)) {
      console.log(data, '_SHIPPING_BILL')
      this.SELECTED_SHIPPING_BILL = { index: i, data: data };
    } else {
      model.style.display = 'none'
      this.toastr.error('Max permissible discount amount exceeded,Please select write off module.')
    }
  }
  percentCalculation(a, b) {
    var c: any = (parseFloat(a) * parseFloat(b)) / 100;
    return parseFloat(c);
  }
  SELECTED_VIEW_FIRX: any = [];
  _VIEW_FIRX(i, data: any) {
    console.log(data, '_VIEW_FIRX')
    this.SELECTED_VIEW_FIRX = { index: i, data: data };
  }
  SELECTED_DEBIT_AMOUNT: any = [];
  _VIEW_DEBIT_AMOUNT(i, data: any, SbItem: any) {
    this.SELECTED_DEBIT_AMOUNT = { index: i, data: data, SbItem: SbItem };
    console.log(data, SbItem, '_VIEW_DEBIT_AMOUNT')
  }
  _DEBIT_AMOUNT(i, data: any, event: any) {
    $('.debitAmount').prop('checked', false);
    $(event.target).prop('checked', true);
    this.FILTER_DATA.FILTER_COMMERCIAL["SB_" + this.SELECTED_DEBIT_AMOUNT?.SbItem][this.SELECTED_DEBIT_AMOUNT?.index]['debitAmount'] = data?.totalDebitAmount;
    console.log(data, this.FILTER_DATA?.FILTER_COMMERCIAL["SB_" + this.SELECTED_DEBIT_AMOUNT?.SbItem], event, '_DEBIT_AMOUNT')
  }
  FIRX_CHECK(value: any) {
    console.log(value, 'FIRX_CHECK')
    if (this.OK_BUTTON_CONDITION == '' && this.Lodgement['AgainstAdvanceReceipt']['Show'] == 'yes') {
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX No. not Selected', `Please select firx no.`)
    } else {
      value.style.display = 'none';
    }
  }
  ObjectLength(data) {
    return Object.keys(data)?.length;
  }

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
}

