import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as data from './../../inward.json';
import $ from 'jquery'
import { PDFDocument } from 'pdf-lib';
import { saveAs as importedSaveAs } from 'file-saver';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import * as XLSX from 'xlsx';

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
import { ShippingbillDataService } from '../../service/homeservices/shippingbill.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MergePdfListService } from '../merge-pdf-list.service';
import { MergePdfService } from '../../service/MergePdf/merge-pdf.service';

@Component({
  selector: 'app-Direct-Dispatch',
  templateUrl: './New-Direct-Dispatch.component.html',
  styleUrls: ['./New-Direct-Dispatch.component.scss'],

})
export class NewDirectDispatchComponent implements OnInit {
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
  // ----------------------------------
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
  public itemArray:any = [];
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
  public itemArray1:any = [];
  public irBuyerName:any = [];
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
  item4:any = [];
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
  selectedPdfs:any = [];
  advanceArray:any = [];
  currentSbForAdvance: any;
  buyerName:any = [];
  id: any;
  private genDoc: any;
  airwayBlCopy: any;

  advanceForm = new FormGroup({
    advance: new FormArray([this.initCourse()], Validators.required),
  });
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
  public ExportBillLodgement_Form: FormGroup;
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
    public mergerpdf: MergePdfService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public pdfmerge: MergePdfListService,
    public wininfo: WindowInformationService) {
    this.api_base = appconfig.apiUrl;
    this.getDropdownData();
  }

  ngOnInit(): void {
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
    });
    this.userService.getUserDetail().then((status:any) => {
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
  BOOLEAN: boolean = false;
  MERGE_ALL_PDF: any = [];
  async SlideToggle(event: any) {
    var temp: any = [];
    const id = event.tab.content.viewContainerRef.element.nativeElement.id;
    this.PDF_LIST = [];
    for (let index = 0; index < this.temp[id].length; index++) {
      if (this.temp[id][index]?.pdf != undefined && this.temp[id][index]?.pdf != null) {
        temp.push(this.temp[id][index]?.pdf)
        this.userService.mergePdf(this.temp[id][index]?.pdf).subscribe((res: any) => {
          console.log('downloadEachFile', res);
          res.arrayBuffer().then((data: any) => {
            var base64String = this._arrayBufferToBase64(data);
            const x = 'data:application/pdf;base64,' + base64String;
            this.PDF_LIST.push({
              pdf: x,
              name: this.temp[id][index]['name']
            })
            console.log('downloadEachFile', data);
          });
        });
      }
      if ((index + 1) == this.temp[id].length) {
        await this.pdfmerge.mergeAllPDF(temp).then((data: any) => {
          console.log('mergeAllPDFmergeAllPDFmergeAllPDF', temp, data);
          this.MERGE_ALL_PDF[0] = data.toString();
        })
      }
    }
  }
  getDropdownData() {
    this.userService.getTeam()
      .subscribe(
        data => {
          this.commodity = data['data'][0]['commodity']
          this.LocationData = data['data'][0]['location']
          var temp:any=[]
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            temp.push(data['data'][0]['bankDetails'][index]?.bank)
          }
          var unique: any = temp.filter((value, index, array) => array.indexOf(value) === index);
          for (let index = 0; index < unique.length; index++) {
            this.bankDetail.push({
              bank: unique[index]
            })
          }
        }, error => {
          console.log("error")
        });

    this.userService.getBene(1).subscribe((res: any) => {
      this.benneDetail = res.data
    }, (err) => console.log("Error", err));
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

  getBill_Lodgments() {
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

    this.documentService.getIrAdvice(1).subscribe(
      (res: any) => {
        console.log(res), (this.item9 = res.data);
        console.log('line no. 324 data', this.item9);
        this.mergeIr();
        this.mergeIr2();
        this.item9.forEach((element, i) => {
          this.irBuyerName[i] = element.partyName;
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
          this.item1.forEach((element, i) => {
            this.buyerName[i] = element.buyerName;
          });
          for (let index = 0; index < data.length; index++) {
            this.item1[index]['balanceAvai'] = data[index]?.balanceAvai != null && data[index]?.balanceAvai != undefined ? data[index]?.balanceAvai : '0';
          }
          console.log('buyerName', this.buyerName);
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
        let gene:any = [];

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
        let gene:any = [];
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
        let gene:any = [];
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
  searchData1(a) {
    console.log('hello', a);
    console.log(a.length);
    if (a.length > 0) {
      let arr:any = [];
      for (let value of this.item1) {
        console.log('value of buyername****', value);
        console.log('value of buyername', value.buyerName);
        if (value.buyerName.includes(a) || value.sbno.includes(a)) {
          console.log('shaile***************', value.buyerName);
          arr.push(value);
        }
      }
      this.itemArray = arr;
      this.filterToggle = true;
      // console.log("shaile***************", this.itemArray)
    } else {
      this.filterToggle = false;
      console.log('else');
    }

    // console.log("shailendra buyerName", a.buyerName)
  }

  fireEvent() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    console.log(wb);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    console.log(wb);
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  changeCheckbox1(a, data) {
    // let value = a + " - " +
    if (data.blCopyDoc) {
      if (data.commercialDoc) {
        if (data.packingDoc) {
          let j = this.sbArray.indexOf(a);
          if (j == -1) {
            this.sbArray.push(a);
            this.ACCORDING_LIST['SB_' + a] = []
          } else {
            this.sbArray.splice(j, 1);
            this.ACCORDING_LIST['SB_' + a] = []
          }
          console.log('Shailendra//////////--', this.sbArray);
        } else {
          console.log("You Don't have packingDoc Document");
        }
      } else {
        console.log("You Don't have Commercial Invoice");
      }
    } else {
      console.log("You Don't have BLCopy Document");
    }
    // randomArray = []
    // for(value of this.pipoArray){
    //   for(value1 of ){
    //     if(value.pi_poNo == value1){
    //       randomArray.push(value)
    //     }
    //   }
    // }
    // console.log("ALL Data",)
  }


  changeCheckbox3(value) {
    let j = this.lcArray.indexOf(value);
    if (j == -1) {
      this.lcArray.push(value);
    } else {
      this.lcArray.splice(j, 1);
    }

    console.log(this.lcArray);
  }

  initCourse() {
    return this.formBuilder.group({
      value: new FormArray([this.initCourse1()], Validators.required),
    });
  }

  initCourse1() {
    return this.formBuilder.group({
      valueInternal: ['', Validators.required],
      sb: ['', Validators.required],
    });
  }


  async generateDoc1(form: any) {
    console.log(form, 'generateDoc1generateDoc1');
    if (this.Lodgement['AgainstAdvanceReceipt']?.Hide == 'no') {
      this.generate = true;
      this.isGenerate = true;
      let generateDoc2: any = [];
      let pipoValue;
      let value;
      let buyerValue;
      for (let item of this.itemArray) {
        for (let sb of this.sbArray) {
          if (item.sbno === sb) {
            pipoValue = item;
            value = item.pipo;
            buyerValue = item.buyerName;
            this.dateArray.push(item.sbdate);
            this.sbDataArray.push(item);
            console.log('value', value);
            generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
          }
        }
      }

      console.log(pipoValue, 'pipovalue*****************************');
      for (value of this.item) {
        for (let value1 of pipoValue.pipo) {
          if (value.pi_poNo == value1.pi_poNo) {
            this.randomArray.push(value);
          }
        }
      }
      console.log('random Array', this.randomArray);
      console.log('random Array', this.randomArray[0].creditNote);

      this.sb = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['sb']
      );

      this.creditNote = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['creditNote']
      );
      console.log('////*********************Credit Note', this.creditNote);

      this.debitNote = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['debitNote']
      );
      console.log('////*********************debit Note', this.debitNote);

      this.advanceOutward = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['advanceOutward']
      );
      console.log('////*********************advanceOutward', this.advanceOutward);

      this.ebrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['EBRC']
      );
      console.log('////*********************Ebrc', this.ebrc);

      this.blcopyref = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['blcopyref']
      );

      this.irAdvice = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['irAdvice']
      );

      this.lcCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['lcCopy']
      );
      console.log('****************Lc Copy', this.lcCopy);

      this.swiftCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['swiftCopy']
      );

      this.tryPartyAgreement = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['tryPartyAgreement']
      );

      this.opinionReport = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['opinionReport']
      );

      this.airwayBlCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['airwayBlcopy']
      );

      this.billOfExchange = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['billOfExchange']
      );

      this.commercial = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['commercial']
      );

      this.destruction = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['destruction']
      );

      this.packingList = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.randomArray[0]['packingList']
      );

      console.log('Random Array', this.randomArray);
      console.log('Airway Docs****************--------------------------------', this.airwayBlCopy);

      let mainArr:any = [];
      let invoicearray:any = [];
      console.log('line no.796 question5 data', this.Question5);
      this.sbDataArray.forEach((value, index) => {
        for (let a of value.pipo) {
          this.arrayPipo.push(a);
        }
      });
      if (this.Question6 == 'yes') {
        let adArr:any = [];
        console.log('Shipping Map For', this.shippingMap);
        this.shippingMap.forEach((value) => {
          console.log('Shipping Map For loop', value);
          adArr = adArr.concat(value);
        });
        console.log('advArr', adArr);
        console.log('sbDataArray', this.sbDataArray);

        forkJoin(
          this.sbDataArray.map((value) => {
            let piponumbers:any = [];
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
              const newVal:any = { ...this.sbDataArray[i] };
              newVal['pipoValue'] = item;
              mainArr.push(newVal);
              console.log('fggfgfgf', mainArr);
            }
          });
          console.log(this.advanceForm.value);

          mainArr.forEach((value1, index) => {
            console.log('shshsh');
            console.log(this.advanceForm.value.advance);
            for (let a of adArr) {
              if (a.sb == value1.sbno) {
                const newVal:any = { ...value1 };
                newVal['advance'] = a.valueInternal;
                newVal['irAdviceId'] = a.irDataItem._id;
                invoicearray.push(newVal);
              }
            }
            console.log('aajsjss');
          });
          let amountArr:any = [];
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
      this.fillForm(pipoValue);
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
      if (this.advanceArray.length != 0) {
        this.generate = true;
        this.isGenerate = true;
        let generateDoc2: any = [];
        let pipoValue;
        let value;
        let buyerValue;
        for (let item of this.itemArray) {
          for (let sb of this.sbArray) {
            if (item.sbno === sb) {
              pipoValue = item;
              value = item.pipo;
              buyerValue = item.buyerName;
              this.dateArray.push(item.sbdate);
              this.sbDataArray.push(item);
              console.log('value', value);
              generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
            }
          }
        }

        console.log(pipoValue, 'pipovalue*****************************');
        for (value of this.item) {
          for (let value1 of pipoValue.pipo) {
            if (value.pi_poNo == value1.pi_poNo) {
              this.randomArray.push(value);
            }
          }
        }
        console.log('random Array', this.randomArray);
        console.log('random Array', this.randomArray[0].creditNote);

        this.sb = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['sb']
        );

        this.creditNote = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['creditNote']
        );
        console.log('////*********************Credit Note', this.creditNote);

        this.debitNote = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['debitNote']
        );
        console.log('////*********************debit Note', this.debitNote);

        this.advanceOutward = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['advanceOutward']
        );
        console.log('////*********************advanceOutward', this.advanceOutward);

        this.ebrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['EBRC']
        );
        console.log('////*********************Ebrc', this.ebrc);

        this.blcopyref = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['blcopyref']
        );

        this.irAdvice = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['irAdvice']
        );

        this.lcCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['lcCopy']
        );
        console.log('****************Lc Copy', this.lcCopy);

        this.swiftCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['swiftCopy']
        );

        this.tryPartyAgreement = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['tryPartyAgreement']
        );

        this.opinionReport = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['opinionReport']
        );

        this.airwayBlCopy = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['airwayBlcopy']
        );

        this.billOfExchange = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['billOfExchange']
        );

        this.commercial = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['commercial']
        );

        this.destruction = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['destruction']
        );

        this.packingList = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.randomArray[0]['packingList']
        );

        console.log('Random Array', this.randomArray);
        console.log('Airway Docs****************--------------------------------', this.airwayBlCopy);

        let mainArr:any = [];
        let invoicearray:any = [];
        console.log('line no.796 question5 data', this.Question5);
        this.sbDataArray.forEach((value, index) => {
          for (let a of value.pipo) {
            this.arrayPipo.push(a);
          }
        });
        if (this.Question6 == 'yes') {
          let adArr:any = [];
          console.log('Shipping Map For', this.shippingMap);
          this.shippingMap.forEach((value) => {
            console.log('Shipping Map For loop', value);
            adArr = adArr.concat(value);
          });
          console.log('advArr', adArr);
          console.log('sbDataArray', this.sbDataArray);

          forkJoin(
            this.sbDataArray.map((value) => {
              let piponumbers:any = [];
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
                const newVal:any = { ...this.sbDataArray[i] };
                newVal['pipoValue'] = item;
                mainArr.push(newVal);
                console.log('fggfgfgf', mainArr);
              }
            });
            console.log(this.advanceForm.value);

            mainArr.forEach((value1, index) => {
              console.log('shshsh');
              console.log(this.advanceForm.value.advance);
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
            let amountArr:any = [];
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
        this.fillForm(pipoValue);
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

  async fillForm(a) {
    console.log('Shailendra *************', a.buyerName);

    this.buyer1 = a.buyerName;
    this.completewords3 = this.buyer1;;
    this.devideContent3 = this.completewords3.length;

    for (let i = 0; i < this.completewords3.length; i++) {
      if (i < 6) {
        this.buyer2.push(this.completewords3[i]);
      } else if (i > 5 && i <= 11) {
        this.buyer3.push(this.completewords3[i]);
      }
    }

    this.buyName1 = this.buyer2.join(' ');
    this.buyName2 = this.buyer3.join(' ');

    console.log('Shailendra *************', this.buyName1);
    console.log('Shailendra *************', this.buyName2);

    const formUrl = './../../assets/billUnder.pdf';

    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();
    const pages = pdfDoc.getPages();
    const firstpage = pages[0];

    const text1 = form.createTextField('favorite0');
    text1.setText('');
    text1.addToPage(firstpage, {
      x: 156,
      y: 752,
      width: 250,
      height: 12,
      borderWidth: 0,
      //backgroundColor: rgb(255, 255, 255)
    });

    const text2 = form.createTextField('favorite1');
    text2.setText('');
    text2.addToPage(firstpage, {
      x: 482,
      y: 752,
      width: 20,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const textf3 = form.createTextField('favorite2');
    textf3.setText('');
    textf3.addToPage(firstpage, {
      x: 510,
      y: 752,
      width: 20,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text4 = form.createTextField('favorite3');
    text4.setText('');
    text4.addToPage(firstpage, {
      x: 539,
      y: 752,
      width: 15,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text5 = form.createTextField('favorite4');
    text5.setText('');
    text5.addToPage(firstpage, {
      x: 570,
      y: 752,
      width: 12,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //exporter

    const text6 = form.createTextField('favorite5');
    text6.setText(this.team1);
    text6.addToPage(firstpage, {
      x: 18,
      y: 684,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text7 = form.createTextField('favorite6');
    // if(this.team2.length > 0){
    text7.setText(this.team2);
    text7.addToPage(firstpage, {
      x: 18,
      y: 665,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });
    // }
    // else{
    //   text7.setText(this.item5.adress)
    //   text7.addToPage(firstpage, {

    //     x: 18,
    //     y: 665,
    //     width: 295,
    //     height: 14,
    //     borderWidth: 0,
    //     // backgroundColor: rgb(255, 255, 255)
    //   })
    // }

    const text8 = form.createTextField('favorite7');
    // if(this.team2.length > 0 && this.team3.length == 0){
    text8.setText(this.address1);
    text8.addToPage(firstpage, {
      x: 18,
      y: 646,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });
    // }
    // else{
    //   text8.setText(this.team3)
    //   text8.addToPage(firstpage, {
    //     x: 18,
    //     y: 646,
    //     width: 295,
    //     height: 14,
    //     borderWidth: 0,
    //     // backgroundColor: rgb(255, 255, 255)

    //   })
    // }

    const text9 = form.createTextField('favorite8');
    //  if(this.team2.length > 0 && this.team3.length > 0){
    text9.setText(this.address2);
    text9.addToPage(firstpage, {
      x: 18,
      y: 628,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });
    // }

    const text10 = form.createTextField('favorite9');
    text10.setText(this.address3);
    text10.addToPage(firstpage, {
      x: 18,
      y: 612,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text11 = form.createTextField('favorite10');
    text11.setText('');
    text11.addToPage(firstpage, {
      x: 18,
      y: 594,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //buyer

    const text12 = form.createTextField('favorite11');
    text12.setText(this.buyName1);
    text12.addToPage(firstpage, {
      x: 320,
      y: 684,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text13 = form.createTextField('favorite12');
    text13.setText(this.buyName2);
    text13.addToPage(firstpage, {
      x: 320,
      y: 665,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text14 = form.createTextField('favorite13');
    text14.setText(this.buyerAds1);
    text14.addToPage(firstpage, {
      x: 320,
      y: 646,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text15 = form.createTextField('favorite14');
    text15.setText(this.buyerAds2);
    text15.addToPage(firstpage, {
      x: 320,
      y: 628,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text16 = form.createTextField('favorite15');
    text16.setText(this.buyerAds3);
    text16.addToPage(firstpage, {
      x: 320,
      y: 612,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text17 = form.createTextField('favorite16');
    text17.setText('');
    text17.addToPage(firstpage, {
      x: 320,
      y: 594,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //checkbox

    const checkbox1 = form.createCheckBox('check1');
    checkbox1.addToPage(firstpage, {
      x: 150,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const checkbox2 = form.createCheckBox('check2');
    checkbox2.addToPage(firstpage, {
      x: 369,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const checkbox3 = form.createCheckBox('check3');
    checkbox3.addToPage(firstpage, {
      x: 570,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //draw bank details

    const text18 = form.createTextField('favorite17');
    text18.setText('');
    text18.addToPage(firstpage, {
      x: 219,
      y: 553,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text19 = form.createTextField('favorite18');
    text19.setText('');
    text19.addToPage(firstpage, {
      x: 219,
      y: 538,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text20 = form.createTextField('favorite19');
    text20.setText('');
    text20.addToPage(firstpage, {
      x: 219,
      y: 521,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text21 = form.createTextField('favorite20');
    text21.setText('');
    text21.addToPage(firstpage, {
      x: 219,
      y: 506,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text22 = form.createTextField('favorite21');
    text22.setText('');
    text22.addToPage(firstpage, {
      x: 219,
      y: 491,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text23 = form.createTextField('favorite22');
    text23.setText('');
    text23.addToPage(firstpage, {
      x: 219,
      y: 478,
      width: 360,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //checkbox

    const checkbox4 = form.createCheckBox('check4');
    checkbox4.addToPage(firstpage, {
      x: 245,
      y: 456,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const checkbox5 = form.createCheckBox('check5');
    checkbox5.addToPage(firstpage, {
      x: 453,
      y: 463,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //text

    const text24 = form.createTextField('favorite23');
    text24.setText('');
    text24.addToPage(firstpage, {
      x: 219,
      y: 412,
      width: 360,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text25 = form.createTextField('favorite24');
    text25.setText('');
    text25.addToPage(firstpage, {
      x: 219,
      y: 390,
      width: 360,
      height: 16,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //checkbox

    const checkbox6 = form.createCheckBox('check6');
    checkbox6.addToPage(firstpage, {
      x: 389,
      y: 375,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const checkbox7 = form.createCheckBox('check7');
    checkbox7.addToPage(firstpage, {
      x: 550,
      y: 375,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    // firx
    var tp: any = {
      firxNumber: [],
      firxDate: [],
      firxCurrency: [],
      firxAmount: [],
      firxCommision: [],
      firxRecAmo: []
    };
    for (let index = 0; index < this.advanceArray.length; index++) {
      const element:any = this.advanceArray[index];
      tp['firxNumber'].push(element?.irDataItem?.billNo)
      tp['firxDate'].push(element?.irDataItem?.date)
      tp['firxCurrency'].push(element?.irDataItem?.currency)
      tp['firxAmount'].push(element?.irDataItem?.amount)
      tp['firxCommision'].push(element?.irDataItem?.convertedAmount)
      tp['firxRecAmo'].push(0)
    }
    const text26 = form.createTextField('favorite25');
    text26.setText(tp?.firxNumber.toString());
    text26.addToPage(firstpage, {
      x: 128,
      y: 348,
      width: 187,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text27 = form.createTextField('favorite26');
    text27.setText(tp?.firxCurrency.toString());
    text27.addToPage(firstpage, {
      x: 128,
      y: 324,
      width: 187,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text28 = form.createTextField('favorite27');
    text28.setText(tp?.firxDate.toString());
    text28.addToPage(firstpage, {
      x: 421,
      y: 348,
      width: 160,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const SumfirxAmount:any = tp?.firxAmount.reduce((partialSum, a) => partialSum + a, 0);
    const text29 = form.createTextField('favorite28');
    text29.setText(SumfirxAmount.toString());
    text29.addToPage(firstpage, {
      x: 421,
      y: 324,
      width: 160,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //bill details
 // firx
 var tp_bill: any = {
  SbNumber: [],
  SbDate: [],
  SbCurrency: [],
  SbAmount: []
};
  for (let index = 0; index < this.itemArray.length; index++) {
    const element =this.itemArray[index];
    tp_bill['SbNumber'].push(element?.sbno)
    tp_bill['SbDate'].push(element?.sbdate)
    tp_bill['SbCurrency'].push(element?.fobCurrency)
    tp_bill['SbAmount'].push(element?.fobValue)
  }
    const text30 = form.createTextField('favorite29');
    text30.setText(tp_bill?.SbCurrency.toString());
    text30.addToPage(firstpage, {
      x: 128,
      y: 287,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text31 = form.createTextField('favorite30');
    text31.setText(tp_bill?.SbAmount.toString());
    text31.addToPage(firstpage, {
      x: 128,
      y: 266,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text32 = form.createTextField('favorite31');
    text32.setText(this.ConvertNumberToWords(tp_bill?.SbAmount.toString()));
    text32.addToPage(firstpage, {
      x: 388,
      y: 287,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text33 = form.createTextField('favorite32');
    text33.setText('');
    text33.addToPage(firstpage, {
      x: 388,
      y: 266,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //checkbox

    const checkbox8 = form.createCheckBox('check8');
    checkbox8.addToPage(firstpage, {
      x: 141,
      y: 251,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const checkbox9 = form.createCheckBox('check9');
    checkbox9.addToPage(firstpage, {
      x: 288,
      y: 251,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text01 = form.createTextField('favorite01');
    text01.setText('');
    text01.addToPage(firstpage, {
      x: 393,
      y: 253,
      width: 30,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text02 = form.createTextField('favorite02');
    text02.setText('');
    text02.addToPage(firstpage, {
      x: 453,
      y: 242,
      width: 60,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    // description of goods

    const text34 = form.createTextField('favorite33');
    text34.setText('');
    text34.addToPage(firstpage, {
      x: 128,
      y: 211,
      width: 250,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text35 = form.createTextField('favorite34');
    text35.setText('');
    text35.addToPage(firstpage, {
      x: 128,
      y: 190,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text36 = form.createTextField('favorite35');
    text36.setText('');
    text36.addToPage(firstpage, {
      x: 448,
      y: 211,
      width: 132,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text37 = form.createTextField('favorite36');
    text37.setText('');
    text37.addToPage(firstpage, {
      x: 388,
      y: 190,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text38 = form.createTextField('favorite37');
    text38.setText('');
    text38.addToPage(firstpage, {
      x: 275,
      y: 170,
      width: 300,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text39 = form.createTextField('favorite38');
    text39.setText(tp_bill?.SbNumber.toString());
    text39.addToPage(firstpage, {
      x: 275,
      y: 146,
      width: 300,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text40 = form.createTextField('favorite39');
    text40.setText('');
    text40.addToPage(firstpage, {
      x: 128,
      y: 126,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text41 = form.createTextField('favorite40');
    text41.setText(
      `${this.myArr[0]}  to  ${this.myArr[this.myArr.length - 1]}`
    );
    // console.log(this.myArr[0])
    // console.log(this.myArr[this.myArr.length - 1])
    text41.addToPage(firstpage, {
      x: 388,
      y: 126,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    // const texta41 = form.createTextField('favorite404')
    // texta41.setText(`${this.myArr.length}`)
    // // console.log(this.myArr[0])
    // // console.log(this.myArr[this.myArr.length - 1])
    // texta41.addToPage(firstpage, {
    //   x: 266,
    //   y: 106,
    //   width: 188,
    //   height: 18,
    //   borderWidth: 0,
    //   // backgroundColor: rgb(255, 255, 255)
    // })

    //table1
    const text421 = form.createTextField('favorite411');
    text421.setText(`${this.myArr.length}`);
    text421.addToPage(firstpage, {
      x: 228,
      y: 108,
      width: 10,
      height: 16,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text42 = form.createTextField('favorite41');
    text42.setText('');
    text42.addToPage(firstpage, {
      x: 97,
      y: 62,
      width: 45,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text43 = form.createTextField('favorite42');
    text43.setText('');
    text43.addToPage(firstpage, {
      x: 148,
      y: 62,
      width: 50,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text44 = form.createTextField('favorite43');
    text44.setText('');
    text44.addToPage(firstpage, {
      x: 206,
      y: 62,
      width: 65,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text45 = form.createTextField('favorite44');
    text45.setText('');
    text45.addToPage(firstpage, {
      x: 276,
      y: 62,
      width: 41,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text46 = form.createTextField('favorite45');
    text46.setText('');
    text46.addToPage(firstpage, {
      x: 320,
      y: 62,
      width: 45,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text47 = form.createTextField('favorite46');
    text47.setText('');
    text47.addToPage(firstpage, {
      x: 370,
      y: 62,
      width: 33,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text48 = form.createTextField('favorite47');
    text48.setText('');
    text48.addToPage(firstpage, {
      x: 408,
      y: 62,
      width: 80,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text49 = form.createTextField('favorite48');
    text49.setText('');
    text49.addToPage(firstpage, {
      x: 492,
      y: 62,
      width: 50,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text50 = form.createTextField('favorite49');
    text50.setText('');
    text50.addToPage(firstpage, {
      x: 547,
      y: 62,
      width: 33,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text51 = form.createTextField('favorite50');
    text51.setText('');
    text51.addToPage(firstpage, {
      x: 97,
      y: 51,
      width: 45,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text52 = form.createTextField('favorite51');
    text52.setText('');
    text52.addToPage(firstpage, {
      x: 148,
      y: 51,
      width: 50,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text53 = form.createTextField('favorite52');
    text53.setText('');
    text53.addToPage(firstpage, {
      x: 206,
      y: 51,
      width: 65,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text54 = form.createTextField('favorite53');
    text54.setText('');
    text54.addToPage(firstpage, {
      x: 276,
      y: 51,
      width: 41,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text55 = form.createTextField('favorite54');
    text55.setText('');
    text55.addToPage(firstpage, {
      x: 320,
      y: 51,
      width: 45,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text56 = form.createTextField('favorite55');
    text56.setText('');
    text56.addToPage(firstpage, {
      x: 370,
      y: 51,
      width: 33,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text57 = form.createTextField('favorite56');
    text57.setText('');
    text57.addToPage(firstpage, {
      x: 408,
      y: 51,
      width: 80,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text58 = form.createTextField('favorite57');
    text58.setText('');
    text58.addToPage(firstpage, {
      x: 492,
      y: 51,
      width: 50,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text59 = form.createTextField('favorite58');
    text59.setText('');
    text59.addToPage(firstpage, {
      x: 547,
      y: 51,
      width: 33,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    //table2

    const text60 = form.createTextField('favorite59');
    text60.setText(this.charge[0]);
    text60.addToPage(firstpage, {
      x: 135,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text61 = form.createTextField('favorite60');
    text61.setText(this.charge[1]);
    text61.addToPage(firstpage, {
      x: 167,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text62 = form.createTextField('favorite61');
    text62.setText(this.charge[2]);
    text62.addToPage(firstpage, {
      x: 201,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text63 = form.createTextField('favorite62');
    text63.setText(this.charge[3]);
    text63.addToPage(firstpage, {
      x: 235,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text64 = form.createTextField('favorite63');
    text64.setText(this.charge[4]);
    text64.addToPage(firstpage, {
      x: 266,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text65 = form.createTextField('favorite64');
    text65.setText(this.charge[5]);
    text65.addToPage(firstpage, {
      x: 300,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text66 = form.createTextField('favorite65');
    text66.setText(this.charge[6]);
    text66.addToPage(firstpage, {
      x: 331,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text67 = form.createTextField('favorite66');
    text67.setText(this.charge[7]);
    text67.addToPage(firstpage, {
      x: 363,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text68 = form.createTextField('favorite67');
    text68.setText(this.charge[8]);
    text68.addToPage(firstpage, {
      x: 397,
      y: 10,
      width: 34,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text69 = form.createTextField('favorite68');
    text69.setText(this.charge[9]);
    text69.addToPage(firstpage, {
      x: 434,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text70 = form.createTextField('favorite69');
    text70.setText(this.charge[10]);
    text70.addToPage(firstpage, {
      x: 469,
      y: 10,
      width: 27,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text71 = form.createTextField('favorite70');
    text71.setText(this.charge[11]);
    text71.addToPage(firstpage, {
      x: 501,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text72 = form.createTextField('favorite71');
    text72.setText(this.charge[12]);
    text72.addToPage(firstpage, {
      x: 534,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const text73 = form.createTextField('favorite72');
    text73.setText(this.charge[13]);
    text73.addToPage(firstpage, {
      x: 565,
      y: 10,
      width: 15,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    });

    const pdfBytes = await pdfDoc.save();
    console.log(pdfBytes, 'pdf');
    console.log(pdfBytes, 'pdf');
    var base64String = this._arrayBufferToBase64(pdfBytes);
    const x = 'data:application/pdf;base64,' + base64String;
    this.formerge = x;
    this.value = this.sanitizer.bypassSecurityTrustResourceUrl(x);
    this.newTask[0].generateDoc1 = x;
  }
    ConvertNumberToWords(number:any) {
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
          var n_array:any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
          var received_n_array = new Array();
          for (var i = 0; i <n_length; i++) {
              received_n_array[i] = number.substr(i, 1);
          }
          for (var i =9 - n_length,j =0; i < 9; i++ , j++) {
              n_array[i] = received_n_array[j];
          }
          for (var i =0,j =1; i < 9; i++ , j++) {
              if (i == 0 || i == 2 || i == 4 || i == 7) {
                  if (n_array[i] == 1) {
                      n_array[j] = 10 + parseInt(n_array[j]);
                      n_array[i] = 0;
                  }
              }
          }
         var value:any ="";
          for (var i =0; i < 9; i++) {
              if (i == 0 || i == 2 || i == 4 || i == 7) {
                  value =n_array[i] * 10;
              } else {
                  value =n_array[i];
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

  doneDox(genDoc:any) {
    this.doneToDox();
    console.log('genDoc', genDoc);
    console.log(this.newTask);
    console.log(this.invoiceArr);
    if (this.documentService.draft) {
      this.documentService
        .updateExportTask(
          {
            task: this.newTask,
            completed: 'yes',
            fileType: 'BL',
          },
          this.documentService.task._id
        )
        .subscribe(
          (data) => {
            console.log('king123');
            console.log(data);
            this.documentService.draft = false;
            this.documentService.task.id = '';
            this.isDoneAll = true;
            this.userService
              .updateManyPipo(this.arrayPipo, 'billUnder', genDoc)
              .subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  if (this.Question5 == 'yes') {
                    this.userService
                      .updateManyPipo(
                        this.arrayPipo,
                        'invoiceReduction',
                        this.invoiceArr
                      )
                      .subscribe(
                        (data1) => {
                          console.log('king123');
                          console.log(data1);
                          this.toastr.success(
                            'Task saved as completed successfully!'
                          );
                          if (this.redirectid) {
                            // this.router.navigate([
                            //   'home/pipo-export',
                            //   {
                            //     id: this.redirectid,
                            //     page: this.redirectpage,
                            //     index: this.redirectindex,
                            //   },
                            // ]);
                          } else {
                            window.location.reload();
                          }
                          //this.router.navigate(["/home/advance-outward-remittance"]);
                        },
                        (error) => {
                          // this.toastr.error('Invalid inputs, please check!');
                          console.log('error');
                        }
                      );
                  } else {
                    this.toastr.success(
                      'Task saved as completed successfully!'
                    );
                    // this.router.navigate(["/home/dashboardTask"]);
                  }

                  // this.toastr.success('Task saved as completed successfully!');
                  // this.router.navigate(["/home/dashboardTask"]);
                  //this.router.navigate(["/home/advance-outward-remittance"]);
                },
                (error) => {
                  // this.toastr.error('Invalid inputs, please check!');
                  console.log('error');
                }
              );
            //this.router.navigate(["/home/dashboardTask"]);
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log('error');
          }
        );
    } else {
      this.documentService
        .addExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'BL',
        })
        .subscribe(
          (res) => {
            this.isDoneAll = true;
            //this.toastr.success('Task saved successfully!');
            console.log('Transaction Saved');
            this.userService
              .updateManyPipo(this.arrayPipo, 'billUnder', genDoc)
              .subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  if (this.Question5 == 'yes') {
                    this.userService
                      .updateManyPipo(
                        this.arrayPipo,
                        'invoiceReduction',
                        this.invoiceArr
                      )
                      .subscribe(
                        (data1) => {
                          console.log('king123');
                          console.log(data1);
                          this.toastr.success(
                            'Task saved as completed successfully!'
                          );
                          if (this.redirectid) {
                            // this.router.navigate([
                            //   'home/pipo-export',
                            //   {
                            //     id: this.redirectid,
                            //     page: this.redirectpage,
                            //     index: this.redirectindex,
                            //   },
                            // ]);
                          } else {
                            // window.location.reload();
                          }
                          //this.router.navigate(["/home/advance-outward-remittance"]);
                        },
                        (error) => {
                          // this.toastr.error('Invalid inputs, please check!');
                          console.log('error');
                        }
                      );
                  } else {
                    this.toastr.success(
                      'Task saved as completed successfully!'
                    );
                    // this.router.navigate(["/home/dashboardTask"]);
                  }
                  //this.router.navigate(["/home/advance-outward-remittance"]);
                },
                (error) => {
                  // this.toastr.error('Invalid inputs, please check!');
                  console.log('error');
                }
              );
            //this.router.navigate(["/home/dashboardTask"]);
          },
          (err) => {
            this.toastr.error('Error!');
            console.log('Error saving the transaction');
          }
        );
    }
  }

  change(e) {
    console.log(e.target.value);
    this.advanceRef = e.target.value;
  }

  change1(e) {
    console.log(e.target.value);
    this.LcNumber = e.target.value;
  }

  setradio(a) {
    console.log(a, 'setradio');
    this.bankToggle = a;
    this.bankValue = a;
    this.newBankArray = [];
    this.bankArray.forEach((value, index) => {
      console.log('shshsh');
      if (value.bank.indexOf(a) != -1) {
        this.newBankArray.push(value);
      }
    });
  }

  creditTo(a) {
    var n = a.accNumber;
    this.credit = n.split('');
    console.log(this.credit);
  }

  chargesTo(a) {
    var n = a.accNumber;
    this.charge = n.split('');
    console.log(this.charge);
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

  refSbNo: number;

  open2(content2, sbno) {
    this.currentSbForAdvance = sbno;
    this.refSbNo = sbno;
  }

  PDF_LIST: any = [];
  ACCORDING_LIST: any = [];
  temp: any = [];

  addTofilter1(event, id, data) {
    this.temp[id] = [];
    if (data.blCopyDoc) {
      if (data.commercialDoc) {
        if (data.packingDoc) {
          let removeArray:any = [];
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
                }]
              }
            }
          } else {
            if (this.itemArray.length) {
              this.itemArray.forEach((element:any) => {
                if (element._id != id) {
                  removeArray.push(element);
                }
              });
              this.itemArray = removeArray;
            }
          }
          this.ExportBillLodgement_Form.controls['documents'].setValue(this.temp);

          console.log('test2', id, this.itemArray, this.temp, this.PDF_LIST);
        } else {
          this.toastr.error(
            "You Don't Have Any Packing List Documnet Linkend with this Shipping Bill"
          );
        }
      } else {
        this.toastr.error(
          "You Don't Have Any Commercial Invoice Linkend with this Shipping Bill"
        );
      }
    } else {
      this.toastr.error(
        "You Don't Have Any AirWay / BLCopy Documnet Linkend with this Shipping Bill"
      );
    }
  }

  shippingMap: Map<number, any[]> = new Map<number, any[]>();
  SHIPPING_MAP: any = [];
  Advance_Amount_Sum: any = [];
  PROCEED_BTN_DISABLED: boolean = false;
  filterSum: any = [];
  balanceAvai: any = '';
  async addToSbArray(irDataItem: any, e) {
    this.balanceAvai = this.itemArray.reduce(function (a, b) { return a + parseFloat(b?.balanceAvai) }, 0)
    if (this.filterSum.toString() != this.balanceAvai.toString()) {
      if (e.target.checked) {
        console.log('Checked');
        let advance = this.advanceArray.some(
          (item:any) => item.valueInternal === irDataItem.billNo
        );
        if (!advance) {
          console.log('Adding');
          irDataItem.Used_Balance = irDataItem?.BalanceAvail;
          let details:any = {
            valueInternal: irDataItem.billNo,
            irDataItem: irDataItem,
            sb: this.currentSbForAdvance,
          };
          this.Advance_Amount_Sum.push(details)
          this.filterSum = this.Advance_Amount_Sum.reduce(function (a, b) { return a + b?.irDataItem?.BalanceAvail }, 0);
          if (this.filterSum > this.balanceAvai) {
            this.Advance_Amount_Sum.pop();
            var sum = this.Advance_Amount_Sum.reduce(function (a, b) { return a + b?.irDataItem?.BalanceAvail }, 0);
            let temp:any = details;
            var last_amount = parseFloat(this.TO_FIXED(this.balanceAvai - sum, 2));
            temp.irDataItem.BalanceAvail = parseFloat(this.TO_FIXED(details?.irDataItem?.BalanceAvail - last_amount, 2));
            this.advanceArray.push(temp)
            this.ACCORDING_LIST['SB_' + this.currentSbForAdvance].push(temp.irDataItem)
            this.filterSum = parseFloat(this.TO_FIXED(sum + last_amount, 2));
            irDataItem.Used_Balance = last_amount;
            this.ExportBillLodgement_Form.controls['Carry_Amount'].setValue(temp);
            console.log(details.irDataItem.BalanceAvail, sum, this.filterSum, last_amount, 'asdfasfadfsa')
          } else {
            this.PROCEED_BTN_DISABLED = true;
            this.advanceArray.push(details);
            this.ACCORDING_LIST['SB_' + this.currentSbForAdvance].push(irDataItem)
          }
          this.ExportBillLodgement_Form.controls['Total_SB_Amount'].setValue(this.TO_FIXED(this.balanceAvai, 2));
          this.ExportBillLodgement_Form.controls['Total_FIRX_Amount'].setValue(this.TO_FIXED(this.filterSum, 2));
          this.ExportBillLodgement_Form.controls['Total_Reaming_Amount'].setValue(this.TO_FIXED(this.balanceAvai - this.filterSum, 2));
        }
      } else {
        console.log('removing, uncheked');
        this.advanceArray = this.advanceArray.filter((item:any) => item.valueInternal !== irDataItem.billNo);
        this.Advance_Amount_Sum = this.Advance_Amount_Sum.filter((item) => item.valueInternal !== irDataItem.billNo);
      }
      this.SHIPPING_MAP[this.currentSbForAdvance] = this.advanceArray;
      this.shippingMap.set(this.refSbNo, JSON.parse(JSON.stringify(this.advanceArray)));
      this.ExportBillLodgement_Form.controls['Advance_reference_Number'].setValue(this.advanceArray);
      this.ExportBillLodgement_Form.controls['Shipping_bill_list'].setValue(this.itemArray);

    } else {
      e.target.checked = false;
      this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('FIRX Amount', "You've exceeded the maximum transaction amount set by your Sb amount..")
    }
    console.log(this.advanceArray, this.balanceAvai, this.filterSum, this.Advance_Amount_Sum, this.shippingMap, this.ACCORDING_LIST, 'Deva Hello0*************************');
  }

  clearData() {
    this.advanceArray = [];
    console.log('Shippoinhg', this.shippingMap);
  }

  goBack() {
    this.isGenerate = false;
    window.location.reload();
  }
  TO_FIXED(amount: any, fixed_position: any) {
    return (amount).toFixed(fixed_position);
  }
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.billLodge.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    if (this.Question5 == 'yes') {
      XLSX.writeFile(wb, 'Invoice Reduction.XLSX');
    } else if (this.Question5 == 'no') {
      XLSX.writeFile(wb, 'Shipping Details.XLSX');
    }
  }


  currentDownloadPdf:any=[];
  openToPdf(content3, pipo) {
    this.generateChecked = true;
    this.currentDownloadPdf = pipo;
    this.selectedPdfs = [];
    this.selectedPdfs2 = [];

    console.log('selectedPdfs in line no 2958', this.selectedPdfs);
    console.log('selectedPdfs in line no 2959', this.selectedPdfs2);

    if (this.currentDownloadPdf.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.currentDownloadPdf.changingThisBreaksApplicationSecurity
      );
    }
    if (this.creditNote.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.creditNote.changingThisBreaksApplicationSecurity
      );
    }
    if (this.debitNote.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.debitNote.changingThisBreaksApplicationSecurity
      );
    }
    if (this.ebrc.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(this.ebrc.changingThisBreaksApplicationSecurity);
    }
    if (this.blcopyref.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.blcopyref.changingThisBreaksApplicationSecurity
      );
    }
    if (this.irAdvice.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.irAdvice.changingThisBreaksApplicationSecurity
      );
    }
    if (this.swiftCopy.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.swiftCopy.changingThisBreaksApplicationSecurity
      );
    }
    if (this.tryPartyAgreement.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.tryPartyAgreement.changingThisBreaksApplicationSecurity
      );
    }
    if (this.airwayBlCopy.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.airwayBlCopy.changingThisBreaksApplicationSecurity
      );
    }
    if (this.billOfExchange.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.billOfExchange.changingThisBreaksApplicationSecurity
      );
    }
    if (this.destruction.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.destruction.changingThisBreaksApplicationSecurity
      );
    }
    if (this.commercial.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.commercial.changingThisBreaksApplicationSecurity
      );
    }
    if (this.packingList.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(
        this.packingList.changingThisBreaksApplicationSecurity
      );
    }
    if (this.lcCopy.changingThisBreaksApplicationSecurity) {
      this.selectedPdfs.push(this.lcCopy.changingThisBreaksApplicationSecurity);
    }

    console.log('selectedPDFs', this.selectedPdfs);

    this.modalService
      .open(content3, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  addPdfToSelectedPdf(value:any, e:any) {
    if (e.target.checked) {
      if (this.selectedPdfs.includes(value.changingThisBreaksApplicationSecurity) === false) {
        this.selectedPdfs.push(value.changingThisBreaksApplicationSecurity);
      }
    } else if (!e.target.checked) {
      this.selectedPdfs = this.selectedPdfs.filter((item) => item !== value.changingThisBreaksApplicationSecurity);
    }
    console.log(this.selectedPdfs);
  }

  addPdfToSelectedPdf2(value, e) {
    if (e.target.checked) {
      this.generateChecked = true;
    } else {
      this.generateChecked = false;
    }
  }

  downloadAsSingleFile = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    //const byteCharacters = atob(data_pdf);
    if (this.generateChecked == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf; //this.value

      const mergedPdf = await PDFDocument.create();
      const pdfA = await PDFDocument.load(this.formerge);
      const pdfB = await PDFDocument.load(merge);
      const copiedPagesA = await mergedPdf.copyPages(
        pdfA,
        pdfA.getPageIndices()
      );
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));

      const copiedPagesB = await mergedPdf.copyPages(
        pdfB,
        pdfB.getPageIndices()
      );
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);
      console.log('merge doc', base64String);
      var genDoc:any = 'data:application/pdf;base64,' + base64String;
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
        // console.log("bytenumbers", byteNumbers[i])
      }

      this.doneDox(genDoc);
      const byteArray = new Uint8Array(byteNumbers);
      importedSaveAs(
        new Blob([byteArray], { type: 'application/pdf' }),
        'BankAttachment'
      );
    } else {
      const byteCharacters1 = atob(data_pdf);
      const byteNumbers1 = new Array(byteCharacters1.length);
      for (let i = 0; i < byteCharacters1.length; i++) {
        byteNumbers1[i] = byteCharacters1.charCodeAt(i);
        // console.log("bytenumbers", byteNumbers[i])
      }

      this.doneDox(genDoc);
      const byteArray1 = new Uint8Array(byteNumbers1);
      importedSaveAs(
        new Blob([byteArray1], { type: 'application/pdf' }),
        'BankAttachment'
      );
    }
  };

  sendMail = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    console.log('5417****', pdfDataUri);
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    const byteCharacters = atob(data_pdf);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers)
    console.log('**user id', this.id);
    console.log('99999999999999999999999', data_pdf);

    if (this.generateChecked == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf; //this.value

      const mergedPdf = await PDFDocument.create();
      console.log('xx');
      const pdfA = await PDFDocument.load(this.formerge);
      console.log('a');
      const pdfB = await PDFDocument.load(merge);
      console.log('b');
      const copiedPagesA = await mergedPdf.copyPages(
        pdfA,
        pdfA.getPageIndices()
      );
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));

      const copiedPagesB = await mergedPdf.copyPages(
        pdfB,
        pdfB.getPageIndices()
      );
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);
      var genDoc = 'data:application/pdf;base64,' + base64String;
      this.doneDox(genDoc);

      this.userService.documentSend(this.id, base64String).subscribe(
        (data) => {
          console.log('king123');
          console.log(data);
        },
        (error) => {
          console.log('error');
        }
      );
    } else {
      this.userService.documentSend(this.id, data_pdf).subscribe(
        (data) => {
          console.log('king123');
          console.log(data);
        },
        (error) => { console.log('error'); }
      );
    }
  };

  mergeAllPDFs = async (type: String) => {
    let urls:any = this.selectedPdfs;
    const numDocs = urls.length;
    const pdfDoc = await PDFDocument.create();
    var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
      if (currentpage < docLength) {
        console.log('Inside Page', currentpage, 'total pages', docLength);
        const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
        pdfDoc.addPage(donorPage);
        await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
      }
    };
    var appendEachFile = async (bytes) => {
      const donorPdfDoc = await PDFDocument.load(bytes);
      const docLength = donorPdfDoc.getPageCount();
      console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
      await appendEachPage(donorPdfDoc, 0, docLength);
    };
    var appendAllFiles = async (pdflist, currentfile) => {
      if (currentfile < numDocs) {
        await appendEachFile(pdflist[currentfile]);
        console.log('Inside file', currentfile);
        await appendAllFiles(pdflist, currentfile + 1);
      } else {
        if (type == 'download') {
          this.downloadAsSingleFile(pdfDoc);
        } else {
          this.sendMail(pdfDoc);
        }
      }
    };

    // download single file;
    let downloadEachFile = (filename) => {
      return new Promise((resolve, reject) => {
        this.userService.mergePdf(filename).subscribe(
          (res: any) => {
            console.log('res', res);
            resolve(res.arrayBuffer());
          },
          (err) => reject('Failed to fetch the pdf')
        );
      });
    };
    // download all the pdfs
    let downloadAllFiles = () => {
      var promises:any = [];
      for (var i = 0; i < numDocs; i++) {
        let filename:any = urls[i].substring(urls[i].lastIndexOf('/') + 1);
        promises.push(downloadEachFile(filename));
      }
      Promise.all(promises).then(
        (pdfList) => {
          appendAllFiles(pdfList, 0);
          console.log('pdfList2', pdfList);
        },
        (error) => {
          // write code to send error to user
          // res.send({"error": "failed to fetch the document try again later/ contact administrator"})''
        }
      );
    };
    downloadAllFiles();
  };

  downloadFile2 = (blob, fileName) => {
    const link = document.createElement('a');
    // create a blobURI pointing to our Blob
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
    // in case the Blob uses a lot of memory
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  };

  // downloadFile(new Blob(['random data']), "myfile.txt");

  downloadAll = async (type: String) => {
    var proceedtoDownloadPdf = async (download, sbno) => {
      console.log('line 3377', download);
      let urls = download;
      const numDocs = urls.length;
      const pdfDoc = await PDFDocument.create();

      var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
        console.log('line 3383', currentpage);
        if (currentpage < docLength) {
          console.log('Inside Page', currentpage, 'total pages', docLength);
          const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [
            currentpage,
          ]);
          pdfDoc.addPage(donorPage);
          await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
        }
      };
      var appendEachFile = async (bytes) => {
        const donorPdfDoc = await PDFDocument.load(bytes);
        const docLength = donorPdfDoc.getPageCount();
        console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
        await appendEachPage(donorPdfDoc, 0, docLength);
      };
      var appendAllFiles = async (pdflist, currentfile) => {
        if (currentfile < numDocs) {
          await appendEachFile(pdflist[currentfile]);
          console.log('Inside file', currentfile);
          await appendAllFiles(pdflist, currentfile + 1);
        } else {
          if (type == 'download') {
            console.log(pdfDoc);
            await this.BulkDOwnload(pdfDoc, sbno);
          }
        }
      };

      // download single file;
      let downloadEachFile = (filename) => {
        return new Promise((resolve, reject) => {
          this.userService.mergePdf(filename).subscribe(
            (res: any) => {
              console.log('res', res);
              resolve(res.arrayBuffer());
            },
            (err) => reject('Failed to fetch the pdf')
          );
        });
      };
      // download all the pdfs
      let downloadAllFiles = () => {
        var promises:any = [];
        for (var i = 0; i < numDocs; i++) {
          let filename = urls[i].substring(urls[i].lastIndexOf('/') + 1);
          promises.push(downloadEachFile(filename));
        }
        Promise.all(promises).then(
          (pdfList) => {
            appendAllFiles(pdfList, 0);
            console.log('pdfList2', pdfList);
          },
          (error) => {
            // write code to send error to user
            // res.send({"error": "failed to fetch the document try again later/ contact administrator"})''
          }
        );
      };
      downloadAllFiles();
    };

    var bulkDownloadSingle = async (mainDoc1, index) => {
      if (mainDoc1[index]) {
        let sb:any = mainDoc1[index];
        var downloadALL:any = [];
        downloadALL.push(sb.changingThisBreaksApplicationSecurity);
        if (this.creditNote.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.creditNote.changingThisBreaksApplicationSecurity
          );
        }
        if (this.debitNote.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.debitNote.changingThisBreaksApplicationSecurity
          );
        }
        if (this.ebrc.changingThisBreaksApplicationSecurity) {
          downloadALL.push(this.ebrc.changingThisBreaksApplicationSecurity);
        }
        if (this.blcopyref.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.blcopyref.changingThisBreaksApplicationSecurity
          );
        }
        if (this.irAdvice.changingThisBreaksApplicationSecurity) {
          downloadALL.push(this.irAdvice.changingThisBreaksApplicationSecurity);
        }
        if (this.swiftCopy.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.swiftCopy.changingThisBreaksApplicationSecurity
          );
        }
        if (this.tryPartyAgreement.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.tryPartyAgreement.changingThisBreaksApplicationSecurity
          );
        }
        if (this.airwayBlCopy.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.airwayBlCopy.changingThisBreaksApplicationSecurity
          );
        }
        if (this.billOfExchange.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.billOfExchange.changingThisBreaksApplicationSecurity
          );
        }
        if (this.destruction.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.destruction.changingThisBreaksApplicationSecurity
          );
        }
        if (this.commercial.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.commercial.changingThisBreaksApplicationSecurity
          );
        }
        if (this.packingList.changingThisBreaksApplicationSecurity) {
          downloadALL.push(
            this.packingList.changingThisBreaksApplicationSecurity
          );
        }
        if (this.lcCopy.changingThisBreaksApplicationSecurity) {
          downloadALL.push(this.lcCopy.changingThisBreaksApplicationSecurity);
        }

        for (let lc of this.mainDoc4) {
          downloadALL.push(lc.changingThisBreaksApplicationSecurity);
        }

        for (let tri of this.mainDoc3) {
          downloadALL.push(tri.changingThisBreaksApplicationSecurity);
        }
        console.log('line 3448', downloadALL);

        await proceedtoDownloadPdf(downloadALL, this.sbArray[index]);
        await bulkDownloadSingle(mainDoc1, index + 1);
      }
    };

    await bulkDownloadSingle(this.mainDoc1, 0);
  };

  BulkDOwnload = async (pdfDoc: any, sbno: string) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    var merge = 'data:application/pdf;base64,' + data_pdf; //this.value

    const mergedPdf = await PDFDocument.create();
    const pdfA = await PDFDocument.load(this.formerge);
    const pdfB = await PDFDocument.load(merge);
    const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
    copiedPagesA.forEach((page) => mergedPdf.addPage(page));

    const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
    copiedPagesB.forEach((page) => mergedPdf.addPage(page));
    const mergedPdfFile = await mergedPdf.save();
    var base64String = this._arrayBufferToBase64(mergedPdfFile);
    console.log('mergeDoc', base64String);
    var genDoc = 'data:application/pdf;base64,' + base64String;
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
      // console.log("bytenumbers", byteNumbers[i])
    }
    this.doneDox(genDoc);
    let filenameforDoc = sbno && sbno.length ? sbno : 'BankAttachment';
    const byteArray = new Uint8Array(byteNumbers);
    importedSaveAs(
      new Blob([byteArray], { type: 'application/pdf' }),
      filenameforDoc
    );
  };

  public mergeIr() {
    let filterSBdata:any = [];
    let completedsb:any = [];
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

  public mergeIr2() {
    let filterIrdata:any = [];
    if (this.item1 && this.item1.length) {
      for (let irData of this.item9) {
        // item9 have forex details
        console.log('Line no. 3700', irData);
        // if(irData.sbNo.length){
        for (let sbNum of this.item1) {
          console.log('line 3701', sbNum);
          for (let i = 0; i <= irData.sbNo.length; i++) {
            console.log('a');
            if (sbNum.sbno == irData.sbNo[i]) {
              const newVal = { ...irData }
              console.log('Line no. 3706', newVal);
              let sbBalance = sbNum.fobValue;
              let irAmount = parseFloat(irData.amount);
              let availableBalance = irAmount - sbBalance;
              if (availableBalance <= 0) {
                newVal['BalanceAvail'] = 0;
              } else {
                newVal['BalanceAvail'] = availableBalance.toFixed(2);
              }

              if (newVal.BalanceAvail > 0) {
                console.log("BalanceAvailable", newVal.BalanceAvail)
                filterIrdata.push(newVal);
              }
              console.log('Line no. 3723', filterIrdata);
            }
          }
        }
      }
      for (let irData of this.item9) {
        if (irData.sbNo.length == 0) {
          const newVal = { ...irData };
          let availableBal = irData.amount;
          newVal['BalanceAvail'] = availableBal;
          filterIrdata.push(newVal);
          console.log('235', filterIrdata);
        }
      }
    } else {
      for (let ir of this.item9) {
        const newVal = { ...ir };
        let availableBal = ir.amount;
        newVal['BalanceAvail'] = availableBal;
        filterIrdata.push(newVal);
      }
    }
    this.item13 = filterIrdata
    console.log("filterForex", filterIrdata, this.item13)

  }

  doneToDox() {
    console.log('All Details', this.invoiceArr);

    let iradvice = {};
    function checkIfSbExist(list, checker) {
      for (let i in list) {
        if (list[i] == checker) {
          return true;
        }
      }
      return false;
    }

    for (let i in this.invoiceArr) {
      console.log('2758', this.invoiceArr[i].advance);
      if (iradvice[this.invoiceArr[i].advance] == undefined) {
        iradvice[this.invoiceArr[i].advance] = {
          sbNo: [this.invoiceArr[i]._id],
          billNo: this.invoiceArr[i].irAdviceId,
        };
      } else {
        if (
          !checkIfSbExist(
            iradvice[this.invoiceArr[i].advance].sbNo,
            this.invoiceArr[i]._id
          )
        ) {
          iradvice[this.invoiceArr[i].advance].sbNo.push(
            this.invoiceArr[i]._id
          );
        }
      }
    }

    console.log('My details', iradvice);

    if (this.Question6 == 'yes') {
      for (let ir in iradvice) {
        this.documentService
          .updateByIr(iradvice[ir], iradvice[ir].billNo)
          .subscribe((data) => {
            console.log('my ir', ir);
            console.log('IrAdvice and sb connected successfully');
            console.log('2759', iradvice);
            console.log('line no. 2760', data);
          });
      }
    }
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
  Text_Changer(text:any){
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
    this.PREVIEWS_URL_LIST = [];
    var tep:any=[];
    for (let i = 0; i < this.itemArray.length; i++) {
      var element = this.itemArray[i]?._id;
      tep[this.itemArray[i]?.sbno] = []
      tep[this.itemArray[i]?.sbno].push(this.formerge);
      for (let index = 0; index < this.temp[element].length; index++) {
        tep[this.itemArray[i]?.sbno].push(this.temp[element][index]?.pdf)
      }
    }
    for (let i = 0; i < this.itemArray.length; i++) {
      this.PREVIEWS_URL_LIST[this.itemArray[i]?.sbno] = []
      await this.mergerpdf.mergePdf(tep[this.itemArray[i]?.sbno]).then((merge: any) => {
        this.PREVIEWS_URL_LIST[this.itemArray[i]?.sbno].push(merge)
      })
    }
  }
  SendApproval(Status: string, UniqueId: any, model: any) {
    if (UniqueId != null) {
      var temp_doc: any = [];
      temp_doc[0] = this.value?.changingThisBreaksApplicationSecurity;
      for (let i = 0; i < this.itemArray.length; i++) {
        var element = this.itemArray[i]?._id;
        for (let index = 0; index < this.temp[element].length; index++) {
          if (this.temp[element][index]?.pdf != '' && this.temp[element][index]?.pdf != undefined) {
            temp_doc.push(this.temp[element][index]?.pdf)
          }
        }
      }
      var approval_data: any = {
        id: 'Export-Direct-Dispatch' + UniqueId,
        tableName: 'Export-Direct-Dispatch',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: temp_doc,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      var tp: any = {
        firxNumber: [],
        firxDate: [],
        firxCurrency: [],
        firxAmount: [],
        firxCommision: [],
        firxRecAmo: []
      };
      for (let index = 0; index < this.advanceArray.length; index++) {
        const element:any = this.advanceArray[index];
        tp['firxNumber'].push(element?.irDataItem?.billNo)
        tp['firxDate'].push(element?.irDataItem?.date)
        tp['firxCurrency'].push(element?.irDataItem?.currency)
        tp['firxAmount'].push(element?.irDataItem?.amount)
        tp['firxCommision'].push(element?.irDataItem?.convertedAmount)
        tp['firxRecAmo'].push(0)
      }
      this.getStatusCheckerMaker('Export-Direct-Dispatch' + UniqueId).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != 'Export-Direct-Dispatch' + UniqueId) {
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
              this.ExportBillLodgement_Form.controls['SbRef'].setValue(UniqueId);
              this.ExportBillLodgement_Form.controls['documents'].setValue(temp_doc);
              if (this.Lodgement['AgainstAdvanceReceipt']?.Hide!='no') {
                var data:any={
                  data:this.ExportBillLodgement_Form.value,
                  TypeTransaction:'Export-Direct-Dispatch',
                  fileType:'Export',
                  UserDetails:approval_data?.id
                }
                this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                  for (let index = 0; index < this.ExportBillLodgement_Form.value?.Advance_reference_Number?.length; index++) {
                    const element = this.ExportBillLodgement_Form.value?.Advance_reference_Number[index]?.irDataItem;
                    this.documentService.Update_Amount_by_Table({
                      tableName: 'iradvices',
                      id: element._id,
                      query: {
                        sbno: [this.ExportBillLodgement_Form.value?.Advance_reference_Number[index]?.sb]
                      }
                    }).subscribe((list: any) => {
  
                    })
                  }
                  this.documentService.Update_Amount_by_Table({
                    tableName: 'iradvices',
                    id: this.ExportBillLodgement_Form.value?.Carry_Amount.irDataItem?._id,
                    query: {
                      BalanceAvail: this.ExportBillLodgement_Form.value?.Carry_Amount.irDataItem?.BalanceAvail,
                      sbno: [this.ExportBillLodgement_Form.value?.Carry_Amount?.sb]
                    }
                  }).subscribe((r1: any) => {
                    var query: any = {
                      firxNumber: tp?.firxNumber.toString(),
                      firxDate: tp?.firxDate.toString(),
                      firxCurrency: tp?.firxCurrency.toString(),
                      firxAmount: tp?.firxAmount.toString(),
                      firxCommision: tp?.firxCommision.toString(),
                      firxRecAmo: '0'
                    }
                    if (this.ExportBillLodgement_Form.value?.Total_Reaming_Amount != 0) {
                      query = {
                        firxNumber: tp?.firxNumber.toString(),
                        firxDate: tp?.firxDate.toString(),
                        firxCurrency: tp?.firxCurrency.toString(),
                        firxAmount: tp?.firxAmount.toString(),
                        firxCommision: tp?.firxCommision.toString(),
                        firxRecAmo: '0',
                        fobValue: this.ExportBillLodgement_Form.value?.Total_Reaming_Amount
                      }
                    }
                    this.documentService.Update_Amount_by_Table({
                      tableName: 'masterrecord',
                      id: UniqueId,
                      query: query
                    }).subscribe((r2: any) => {
                      console.log(r2, 'masterrecord')
                      // model.style.display = 'none';
                      // this.router.navigate(['/home/dashboardTask'])
                    })
                  });
                  console.log('addExportBillLodgment', res1);
                })
              }
            });
          }
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${res?.status} panel`)
        }
      });
    }
    console.log('Export-Direct-Dispatch' + UniqueId, UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  getStatusCheckerMaker(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
}

