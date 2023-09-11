import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { DocumentService } from '../../../../service/document.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from 'ngx-dropzone-wrapper';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as xlsx from 'xlsx';
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import moment from 'moment';

@Component({
  selector: 'app-pipo-documents',
  templateUrl: './pipo-documents.component.html',
  styleUrls: [

    './pipo-documents.component.scss',
  ],
})
export class PipoDocumentsComponent implements OnInit {
  @ViewChild('piposummery', { static: false }) piposummery: ElementRef;
  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;

  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public type: string = 'directive';
  public item1: any = [];
  public item: any = [];
  public item2: any;
  public item3: any = [];
  public item4: any = [];
  public item5: any = [];
  mergedBOE: any = [];

  public user: any;
  public selectedRow: any;
  public showInvoice: any = false;
  public tableWidth: any;
  public export: any = false;
  public import: any = false;
  public lastIndex: any;
  public showPdf: any = false;
  public greaterAmount: any = 0;
  public selectedDoc: any = '';
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  public Ax1: boolean;
  public Ax2: boolean;
  public step1: any;
  public url: any;
  public file: any;
  public doc: string;
  public pipo: boolean;
  public boe: boolean;
  public sb: boolean;
  public docu: any;
  public pipoNo: any;
  public toggle: boolean = false;

  public config: DropzoneConfigInterface;
  public config1: DropzoneConfigInterface;

  authToken: any;
  headers: any;

  piPoForm = new FormGroup({
    pi_poNo: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    benneName: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    incoterm: new FormControl('', Validators.required),
    lastDayShipment: new FormControl('', Validators.required),
    paymentTerm: new FormArray([this.initCourse()], Validators.required),
    pcRefNo: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
  });
  public pipoData: any;
  public payTerm: any;
  public benneDetail: any;
  public documentType: any;
  public beneValue: any;
  public z: any;
  public i: any;
  public pipourl1: any;
  public file1: any;
  public id: any;
  public pipo_id: any;
  public pipourl11: any;
  public piPoUrl: any;
  public toggle1: boolean;
  public toggle3: boolean;
  public toggle2: boolean;
  public upfile: any;
  public docTog: boolean;
  public pipoDoc: any = 'a';
  public viewData: any;
  public closeResult: string;
  public buttonToggle: any = false;
  public letterToggle: boolean;
  public uploadIsurance: boolean;
  public lcNumber: any;
  public lcAmount: any;
  public lcCurrency: any;
  public buttonToggle1: any;
  public api_base: any;
  USER_DATA: any = [];
  PENDING_DATA: any = [];
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  buyer1: string = '';
  buyer: boolean = false;

  benneDetailArray: any;
  locationArray: any;
  commodityArray: any;
  location: string = '';
  commodity: string = '';
  page: number = 0
  limit: number = 10

  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "DATE",
      "INVOICE No.",
      "INVOICE DATE",
      "Beneficiary NAMES",
      "CURRENCY",
      "Amount",
      "BRANCH",
      "COMMODITY",
      "Available BALANCE",
      "Action"],
    items: [],
    Expansion_header: [
      "BOE NO",
      "BOE DATE",
      "REGION",
      "FOB VALUE",
      "PORT CODE",
      "BOE Balance Amount",
      "Freight Charges"
    ],
    Expansion_header2: [
      "TT DATE",
      "TT USD",
      "Payment Date",
      "Amount",
      "Currency",
      "CCY Rate",
      "INR Amount",
      "ORM REF NUMBER/ID",
      "TOTAL DEDUCTIONS/DAMGES/USD",
      "FINAL AMOUNT - USD",
      "DEBIT NOTE STATUS",
      "STATUS OF BOE SUBMISSION IN BANK"
    ],
    Expansion_Items: [],
    Expansion_Items2: [],
    Objectkeys: [],
    ExpansionKeys: [],
    ExpansionKeys2: [],
    TableHeaderClass: [
      "col-td-th-0",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-1"
    ],
    eventId: 1
  }

  EDIT_FORM_DATA: any = {
    date: "",
    sbno: "",
    buyerName: "",
    BankName: "",
    currency: "",
    amount: "",
    billNo: "",
    BalanceAvail: "",
  }

  constructor(
    @Inject(PLATFORM_ID) public platformId,
    private formBuilder: FormBuilder,
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private pipoDataService: PipoDataService,
    public wininfo: WindowInformationService,
    public dialog: MatDialog,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) {
    this.api_base = userService.api_base;
    console.log(this.api_base);
    this.loadFromLocalStorage();
    console.log(this.authToken);
    this.headers = {
      Authorization: this.authToken,
    };
    this.getDropDownItems()

    if (isPlatformBrowser(this.platformId)) {
      console.log('asdkhsajvdsug');

      this.config1 = {
        url: `${this.api_base}/member/uploadImage`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pipo_id = this.route.snapshot.params['pipo_id'];
    console.log(this.id, this.pipo_id);
    this.item1 = [];
    this.item = [];
    this.item2;
    this.item3 = [];
    this.item4 = [];
    this.item5 = [];
    this.userService.getUserDetail().then((user: any) => {
      this.USER_DATA = user;
      console.log("this.USER_DATA", this.USER_DATA)
    });
    this.documentService.getBoe(1).subscribe((res: any) => {
      console.log(res), (this.item4 = res.data);
      console.log('data', this.item4);
    },
      (err) => console.log(err)
    );

    if (this.id) {
      this.documentService.getPipo().subscribe((res: any) => {
        console.log('Data fetched successfully', res);
        this.item = res.data;
        console.log(this.item);
        this.item1 = [];
        this.pipoDataService.setPipoData(res.data, 'import');
        this.pipoDataService.pipo$.subscribe((data) => {
          for (let value of data) {
            this.item1.push(value);
            this.mergeBoe();
          }
        });
      },
        (err) => console.log(err)
      );

      this.documentService.getPipoByPipoNo(this.pipo_id).subscribe(
        (data) => {
          let index = this.route.snapshot.params['index'];
          console.log('king123');
          console.log(data);
          console.log(data['data'][0]);
          this.getInvoices(data['data'][0], index);
        },
        (error) => {
          console.log('error');
        }
      );
    } else {
      this.documentService.getPipo().subscribe((res: any) => {
        console.log('Data fetched successfully', res);
        this.item = res.data;
        console.log(this.item);
        this.pipoDataService.setPipoData(res.data, 'import');
        this.pipoDataService.pipo$.subscribe((data) => {
          this.item1 = [];
          for (let value of data) {
            this.item1.push(value);
            this.mergeBoe();
          }
          this.PIPOTable(this.item1);
        });
      },
        (err) => console.log(err)
      );

      this.userService.getBene(1).subscribe((res: any) => {
        (this.benneDetail = res.data),
          console.log('Benne Detail', this.benneDetail);
      },
        (err) => console.log('Error', err)
      );
    }
  }

  mergeBoe() {
    let filterboedata: any = [];
    if (this.item4 && this.item4.length) {
      for (let pipo of this.item1) {
        for (let boedata of this.item4) {
          for (let i = 0; i <= boedata.pipo.length; i++) {
            if (pipo._id == boedata.pipo[i]) {
              const newVal = { ...pipo };
              console.log('Line no. 263', newVal);
              newVal['boeNumber'] = boedata.boeNumber;
              newVal['boeDate'] = boedata.boeDate;
              newVal['region'] = boedata.origin;
              newVal['invoiceAmount'] = boedata.invoiceAmount;
              newVal['dischargePort'] = boedata.dischargePort;
              newVal['freightAmount'] = boedata.freightAmount;
              filterboedata.push(newVal);
            }
          }
        }
      }
      for (let pipo of this.item1) {
        if (!pipo.boe) {
          let newVal = { ...pipo }
          filterboedata.push(newVal)
        }
      }
    } else {
      console.log("Your are on Else part")
      for (let pipo of this.item1) {
        let newVal = { ...pipo };
        filterboedata.push(newVal);
      }
    }
    this.item3 = filterboedata;
    console.log('aaa', this.item3);
  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }
  filter() {
    this.getPipoData()
    this.filtervisible = !this.filtervisible

  }
  resetFilter() {
    this.commodity = ''
    this.location = ''
    this.buyer1 = ''
    this.getPipoData()
    this.filtervisible = !this.filtervisible
  }
  getPipoData() {
    console.log("-->", this.page, this.limit)
    this.documentService.getPipos(this.page, this.limit, this.commodity, this.location, this.buyer1, 'export').subscribe((res: any) => {
      this.item3 = res.docs
      console.log("res", this.item3)
    })
  }
  getDropDownItems() {
    this.userService.getTeam().subscribe(
      (data) => {
        this.locationArray = data['data'][0]['location'];
        this.commodityArray = data['data'][0]['commodity'];
      },
      (error) => {
        console.log('error');
      }
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        this.benneDetailArray = res.data
      },
      (err) => console.log('Error', err)
    );
  }

  lcFun(a) {
    this.lcNumber = a;
  }

  amountFun(a) {
    this.lcAmount = a;
  }

  currencyFun(a) {
    this.lcCurrency = a;
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: 'advance' }).subscribe((res: any) => {
      this.allTransactions = res.task;
      console.log('ALL TRANSACTIONS', this.allTransactions);
    },
      (err) => console.log(err)
    );
  }

  toggleClick(a) {
    this.toggle = true;
    this.toggle2 = true;
    console.log(a);

    if (a == 'PI') {
      if (this.pipoData.doc) {
        this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.pipoData.doc
        );
      } else {
        this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.pipourl11
        );
      }
    }
    if (a == 'PO') {
      if (this.pipoData.doc1) {
        this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.pipoData.doc1
        );
      } else {
        this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.pipourl11
        );
      }
    }
  }

  toggleClick2(a) {
    this.upfile = a;
    this.toggle = true;
    this.toggle1 = true;
    this.toggle3 = false;
  }

  initCourse() {
    return this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(11)]],
      type: ['', [Validators.required]],
      amount: ['', Validators.required],
    });
  }

  getCourses(form) {
    return form.get('paymentTerm').controls;
  }

  clickBene(value) {
    this.beneValue = value;
  }

  getInvoices(selectedRowValues, i) {
    console.log(selectedRowValues.pi_poNo);
    this.showInvoice = true;
    this.router.navigate([
      'home/pipo-doc',
      {
        id: selectedRowValues.pi_poNo,
        page: 'details',
        index: i,
        pipo_id: selectedRowValues._id
      },
    ]);
    console.log('SELECTED', selectedRowValues);
    console.log('INDEX', i);
    console.log(selectedRowValues.doc);
    this.pipoData = selectedRowValues;
    this.payTerm = this.pipoData.paymentTerm;
    console.log(this.pipoData, 'payment check');
    console.log(this.pipoData.paymentTerm);
    this.documentType = this.pipoData.document;
    this.lastIndex = i;
    this.pipoNo = selectedRowValues.pi_poNo;
    this.beneValue = this.pipoData.benneName;
    this.docTog = false;
    this.buttonToggle = false;
    this.buttonToggle1 = false;
    this.buyer = false;
    this.letterToggle = false;
    this.uploadIsurance = false;
    if (this.pipoData.document == 'PO') {
      this.pipourl1 = selectedRowValues.doc1;
    } else if (this.pipoData.document == 'PI') {
      this.pipourl1 = selectedRowValues.doc;
    }

    this.file1 = selectedRowValues.file;
    this.id = selectedRowValues._id;

    //this.docu = selectedRowValues.doc;
    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );

    this.z = this.payTerm.length;
    console.log(this.z);
    if (this.payTerm.length > 1) {
      console.log('1');
      this.i = 1;
      for (let j = 1; j < this.payTerm.length; j++) {
        this.onAddCourse(1);
      }
    }
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = '30%'),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  getInvoicesNew(data: any, panel: any) {
    if (data != null && data != undefined) {
      console.log(this.item3[data?.index].pi_poNo);
      this.showInvoice = true;
      this.router.navigate([
        'home/pipo-doc',
        {
          id: this.item3[data?.index].pi_poNo,
          page: 'details',
          index: data?.index,
          pipo_id: this.item3[data?.index]._id
        },
      ]);
      console.log('SELECTED', this.item3[data?.index]);
      console.log('INDEX', data?.index);
      console.log(this.item3[data?.index].doc);
      this.pipoData = this.item3[data?.index];
      this.payTerm = this.pipoData.paymentTerm;
      console.log(this.pipoData, 'payment check');
      console.log(this.pipoData.paymentTerm);
      this.documentType = this.pipoData.document;
      this.lastIndex = data?.index;
      this.pipoNo = this.item3[data?.index].pi_poNo;
      this.beneValue = this.pipoData.benneName;
      this.docTog = false;
      this.buttonToggle = false;
      this.buttonToggle1 = false;
      this.buyer = false;
      this.letterToggle = false;
      this.uploadIsurance = false;
      if (this.pipoData.document == 'PO') {
        this.pipourl1 = this.item3[data?.index].doc1;
      } else if (this.pipoData.document == 'PI') {
        this.pipourl1 = this.item3[data?.index].doc;
      }

      this.file1 = this.item3[data?.index].file;
      this.id = this.item3[data?.index]._id;

      //this.docu = this.item3[data?.index].doc;
      this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.item3[data?.index].doc
      );

      this.z = this.payTerm.length;
      console.log(this.z);
      if (this.payTerm.length > 1) {
        console.log('1');
        this.i = 1;
        for (let j = 1; j < this.payTerm.length; j++) {
          this.onAddCourse(1);
        }
      }
      panel?.displayShow
      return (
        (this.selectedRow = this.item3[data?.index]),
        (this.showInvoice = true),
        (this.tableWidth = '30%'),
        (this.greaterAmount = parseInt(this.selectedRow.amount))
      );
    }
    return null;
  }

  pipoClick() {
    console.log('upload');
    this.router.navigate(['home/upload', { file: 'import', document: 'pipo' }]);
  }

  pipoClickCredit() {
    this.router.navigate([
      'home/upload',
      { file: 'import', document: 'creditNote' },
    ]);
  }

  pipoClickDebit() {
    this.router.navigate([
      'home/upload',
      { file: 'import', document: 'debitNote' },
    ]);
  }

  pipoClickInsurance() {
    this.router.navigate([
      'home/upload',
      { file: 'import', document: 'insuranceCopy' },
    ]);
  }

  pipoClickTri() {
    this.router.navigate([
      'home/upload',
      { file: 'import', document: 'tryPartyAgreement' },
    ]);
  }

  hide3() {
    this.showInvoice = false;
    // this.router.navigate(['/home/pipo-export']);
  }

  selectDoc(a) {
    if (a != 'Shipping Bill' && a != 'Bill of Entry') {
      this.docTog = true;
      this.pipoDoc = a;
      this.upfile = 'a';
    } else if (a == 'Shipping Bill') {
      this.router.navigate(['home/upload', { file: 'import', document: 'sb' }]);
    } else if (a == 'Bill of Entry') {
      this.router.navigate([
        'home/upload',
        {
          file: 'import',
          document: 'boe',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
        },
      ]);
    }
    else if (a == 'Bill of Entry') {
      this.router.navigate(['home/upload', { file: 'import', document: 'boe', pipo: this.pipoData.pi_poNo, pipo_id: this.pipoData._id, bene: this.pipoData.benneName }]);
    }

  }

  toggleStep1() {
    this.step1 = false;
    this.showPdf = false;
  }

  openDoc(a) {
    console.log(a);
    if (a == 'Advance Payment') {
      this.router.navigate([
        'home/advance-outward-remittance',
        {
          file: this.pipoData.pi_poNo,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
        },
      ]);
    } else if (a == 'Direct Import') {
      console.log('hello');
      this.router.navigate([
        'home/direct-import-payment',
        {
          file: this.pipoData.pi_poNo,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
        },
      ]);
    } else if (a == 'Collection Bill') {
      this.buttonToggle = !this.buttonToggle;
    } else if (a == 'Letter of Credit') {
      if (this.pipoData.lcIssuance && this.pipoData.lcIssuance1) {
        this.buttonToggle1 = !this.buttonToggle1;
        console.log('dhhh');
        // this.router.navigate(['home/bill-under-collection', {
        //   file: "nonlcUsance", pipo: this.pipoData.pi_poNo, bene: this.pipoData.benneName, amount: this.pipoData.amount
        // }]);
      } else if (this.pipoData.lcIssuance) {
        this.buttonToggle1 = !this.buttonToggle1;
        console.log('2232');
      } else if (this.pipoData.lcIssuance1 && !this.pipoData.lcIssuance) {
        this.uploadIsurance = !this.uploadIsurance;
        this.letterToggle = false;
      } else {
        this.letterToggle = !this.letterToggle;
        this.uploadIsurance = false;
      }
    }
  }

  changeCheckbox() {
    this.buyer = !this.buyer;
  }

  openSubDoc(a) {
    console.log(a);
    if (a == 'usance') {
      console.log(a);
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'nonlcUsance',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
        },
      ]);
    } else if (a == 'sight') {
      console.log(a);
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'nonlcSight',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
        },
      ]);
    }
  }

  openSubDoc1(a) {
    console.log(a);
    if (a == 'usance' && !this.buyer) {
      console.log(a);
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'lcUsance',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
          buyer: false,
        },
      ]);
    } else if (a == 'sight' && !this.buyer) {
      console.log(a);
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'lcSight',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
          buyer: false,
        },
      ]);
    } else if (a == 'usance' && this.buyer) {
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'lcUsance',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
          buyer: true,
        },
      ]);
    } else if (a == 'sight' && this.buyer) {
      this.router.navigate([
        'home/bill-under-collection',
        {
          file: 'lcSight',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
          buyer: true,
        },
      ]);
    }
  }

  openSubLetter(a) {
    if (a == 'yes') {
      console.log(a);
      this.uploadIsurance = !this.uploadIsurance;
      this.letterToggle = !this.letterToggle;
    } else if (a == 'no') {
      console.log(a);
      this.router.navigate([
        'home/lc-isurance',
        {
          file: 'import',
          pipo: this.pipoData.pi_poNo,
          pipo_id: this.pipoData._id,
          bene: this.pipoData.benneName,
          amount: this.pipoData.amount,
        },
      ]);
    }
  }

  onAddCourse(a) {
    console.log(a);
    if (a === 1) {
      console.log(a);
      let control = this.piPoForm.controls.paymentTerm as FormArray;
      control.push(this.initCourse());
      if (this.i >= this.payTerm.length) {
        this.payTerm.push([]);
      }
      this.i++;
    } else {
      console.log(a);
      const control = this.piPoForm.get('paymentTerm') as FormArray;
      control.push(this.initCourse());
      this.payTerm.push([]);

      this.z++;
      this.i++;
    }
  }

  removeAddress(i) {
    let control1 = this.piPoForm.controls.paymentTerm as FormArray;
    control1.removeAt(i);
    this.payTerm.splice(i, 1);
    this.z = this.z - 1;
  }

  onSubmitPipo() {
    console.log(this.id);
    console.log(this.piPoForm.value);
    var temp: any = {
      ...this.piPoForm.value
    }
    temp.doc = this.pipourl1;
    temp.file = this.file1;
    temp.document = this.documentType;
    temp.benneName = this.beneValue;
    console.log(temp);
    this.userService.updatePipo(temp, this.id).subscribe(
      (data) => {
        console.log('king123');
        console.log(data['data']);
        this.toastr.success('PI/PO updated successfully.');
        this.toggle = false;
        this.toggle2 = false;
      },
      (error) => {
      }
    );
  }

  viewClick(a) {
    if (a == 'lcIssuance') {
      console.log(this.pipoData[a].doc);
      console.log(this.pipoData[a]);
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.pipoData[a].doc
      );
      console.log(this.viewData);
    } else {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.pipoData[a]
      );
      console.log(this.viewData);
    }
  }

  onSubmitPipo1() {
    console.log(this.id);
    console.log(this.piPoForm.value);
    var temp: any = {
      ...this.piPoForm.value
    }
    temp.doc1 = this.pipourl1;
    temp.doc = this.pipourl11;
    temp.file = this.file1;
    temp.document = 'PI';
    temp.benneName = this.beneValue;
    console.log(temp);
    this.userService.updatePipo(temp, this.id).subscribe(
      (data) => {
        console.log('king123');
        console.log(data['data']);
        this.toastr.success('PI/PO updated successfully.');
        this.documentType = 'PI';
        this.toggle = false;
        this.toggle3 = false;
        this.toggle1 = false;

        // this.toastr.success('Company details updated successfully.');
        // this.router.navigate(['/home/dashboardNew']);
      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        // console.log("error")
      }
    );
  }

  cancel() {
    this.toggle = false;
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    //this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    console.log(args);
    if (this.upfile == 'PI') {
      this.toggle3 = true;
      this.pipourl11 = args[1].data;
      this.piPoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].data
      );
    } else if (this.upfile == 'PO') {
      this.pipoData.doc1 = args[1].data;
      this.userService.updatePipo(this.pipoData, this.id).subscribe(
        (data) => {
          console.log('king123');
          console.log(data['data']);
          this.toastr.success('PI/PO updated successfully.');
          this.documentType = 'PI';
          this.toggle = false;
          this.toggle3 = false;
          this.toggle1 = false;

          // this.toastr.success('Company details updated successfully.');
          // this.router.navigate(['/home/dashboardNew']);
        },
        (error) => {
          // this.toastr.error('Invalid inputs, please check!');
          // console.log("error")
        }
      );
    } else if (this.upfile != 'PO' && this.upfile != 'PO') {
      if (this.uploadIsurance) {
        this.pipoDoc = 'lcIssuance';
        let data = {
          lcNumber: this.lcNumber,
          lcAmount: this.lcAmount,
          lcCurrency: this.lcCurrency,
          doc: args[1].data,
        };
        this.userService
          .updateSinglePipo(this.id, this.pipoDoc, data)
          .subscribe(
            (data) => {
              this.pipoData[`${this.pipoDoc}`] = args[1].data;
              console.log('king123');
              console.log(data['data']);
              this.toastr.success('PI/PO updated successfully.');
              this.docTog = false;
              this.toggle = false;
              this.toggle2 = false;
              this.uploadIsurance = false;
              // this.toastr.success('Company details updated successfully.');
              // this.router.navigate(['/home/dashboardNew']);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
      } else {
        console.log(args[1].data);
        this.userService
          .updateSinglePipo(this.id, this.pipoDoc, args[1].data)
          .subscribe(
            (data) => {
              this.pipoData[`${this.pipoDoc}`] = args[1].data;
              console.log('king123');
              console.log(data['data']);
              this.toastr.success('PI/PO updated successfully.');
              this.docTog = false;
              this.toggle = false;
              this.toggle2 = false;
              // this.toastr.success('Company details updated successfully.');
              // this.router.navigate(['/home/dashboardNew']);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              // console.log("error")
            }
          );
      }
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

  openPipoNote(content) {
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

  PIPOTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      this.FILTER_VALUE_LIST_NEW['items'] = [];
      this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
      await newdata?.forEach(async (element) => {
        let boedata: any = [];
        (element?.boeRef != 'NF' ? element?.boeRef : [{
          BOENO: "NF",
          BOEDATE: "NF",
          REGION: "NF",
          FOBVALUE: "NF",
          PORTCODE: "NF",
          BOEBalanceAmount: "NF",
          FreightCharges: "NF"
        }])?.forEach(boeelement => {
          boedata.push({
            BOENO: boeelement['boeNumber'],
            BOEDATE: moment(boeelement['boeDate']).format("YYYY-MM-DD"),
            REGION: boeelement['origin'],
            FOBVALUE: boeelement['invoiceAmount'],
            PORTCODE: boeelement['iecCode'],
            BOEBalanceAmount: boeelement['balanceAmount'],
            FreightCharges: boeelement['freightAmount']
          })
        });
        let advice: any = [];
        (element?.AdviceRef != 'NF' ? element?.AdviceRef : [{
          TTDATE: 'NF',
          TTUSD: 'NF',
          PaymentDate: 'NF',
          Amount: "NF",
          Currency: "NF",
          CCYRate: "NF",
          INRAmount: "NF",
          ORMREFNUMBERID: "NF",
          TOTALDEDUCTIONSDAMGESUSD: "NF",
          FINALAMOUNTUSD: "NF",
          DEBITNOTESTATUS: "NF",
          STATUSOFBOESUBMISSIONINBANK: "NF",
        }])?.forEach(adviceelement => {
          advice.push({
            TTDATE: moment(adviceelement['date']).format("YYYY-MM-DD"),
            TTUSD: adviceelement['amount'],
            PaymentDate: adviceelement['amount'],
            Amount: adviceelement['amount'],
            Currency: adviceelement['currency'],
            CCYRate: adviceelement['amount'],
            INRAmount: adviceelement['amount'],
            ORMREFNUMBERID: adviceelement['billNo'],
            TOTALDEDUCTIONSDAMGESUSD: adviceelement['amount'],
            FINALAMOUNTUSD: adviceelement['amount'],
            DEBITNOTESTATUS: adviceelement['amount'],
            STATUSOFBOESUBMISSIONINBANK: adviceelement['amount'],
          })
        });
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          DATE: moment(element['purchasedate']).format("YYYY-MM-DD"),
          INVOICENUMBER: element['pi_poNo'],
          INVOICEDATE: moment(element['date']).format("YYYY-MM-DD"),
          SELLERNAMES: element['benneName'],
          INVOICECURRENCY: element['currency'],
          INVOICEVALUEUSD: element['amount'],
          BRANCH: element['location'],
          COMMODITY: element['commodity'],
          BALANCEIFANY: element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['amount'],
          Expansion_Items: boedata,
          Expansion_Items2: advice,
          ITEMS_STATUS: this.documentService.getDateStatus(element?.createdAt) == true ? 'New' : 'Old',
          isExpand: false,
          isExpand2: false,
          disabled: element['deleteflag'] != '-1' ? false : true,
          RoleType: this.USER_DATA?.result?.RoleCheckbox
        })
      });
      if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'isExpand2')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'Expansion_Items2');
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'ITEMS_STATUS')
        this.FILTER_VALUE_LIST_NEW['ExpansionKeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0]['Expansion_Items'][0])
        this.FILTER_VALUE_LIST_NEW['ExpansionKeys2'] = await this.FILTER_VALUE_LIST_NEW['items'][0]['Expansion_Items2'].length != 0 ? Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0]['Expansion_Items2'][0]) : []
      }
      console.log(this.FILTER_VALUE_LIST_NEW, 'this.FILTER_VALUE_LIST_NEW')
    });
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

  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  viewpdf(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.item3[a?.index]['doc']);
    }, 200);
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.userService.updatePipo(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('PI/PO Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log('555555555555550', data);
    this.userService.updatePipo(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('PI/PO updated successfully.'); // this.docTog = false
      },
      (error) => {
        console.log('error');
      }
    );
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    this.SELECTED_VALUE = '';
    this.SELECTED_VALUE = this.item3[data?.index];
    this.EDIT_FORM_DATA = {
      date: this.SELECTED_VALUE['date'],
      sbno: this.SELECTED_VALUE['sbno'],
      buyerName: this.SELECTED_VALUE['buyerName'],
      BankName: this.SELECTED_VALUE['BankName'],
      currency: this.SELECTED_VALUE['currency'],
      amount: this.SELECTED_VALUE['amount'],
      billNo: this.SELECTED_VALUE['billNo'],
      BalanceAvail: this.SELECTED_VALUE['BalanceAvail'] != undefined ? this.SELECTED_VALUE['BalanceAvail'] : this.SELECTED_VALUE['amount'],
    }
    this.toastr.warning('PI/PO Row Is In Edit Mode');
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(
      this.piposummery.nativeElement
    );
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Import -pipo.xlsx');
  }

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.item3[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.item3[data?.index]?._id, this.item3[data?.index])
      }
    });
  }

  deleteByRoleType(RoleCheckbox: string, id: any, index: any) {
    if (RoleCheckbox == '') {
      this.documentService.deleteById({ id: id, tableName: 'pi_po' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'pi_po',
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
}
