import { BoeBill } from './../../../model/boe.model';
import { IRAdvice } from './../../../model/irAdvice.model';
import { ORAdvice } from './../../../model/orAdvice.model';

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
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { FormArray, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as data1 from '../../currency.json';
import { SharedDataService } from '../shared-Data-Servies/shared-data.service';
// import {ToastrService} from 'ngx-toastr';
import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from 'ngx-dropzone-wrapper';
import { Subscription } from 'rxjs';
// import {DashboardService} from './dashboard-service';
// import { TabsComponent } from './tabs.component';
// import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ShippingBill } from '../../../model/shippingBill.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { DocumentService } from '../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../service/user.service';
import { MatSelectModule } from '@angular/material/select';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from '../../app.config';
import { PipoDataService } from "../../service/homeservices/pipo.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import { CustomConfirmDialogModelComponent } from 'src/app/custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { DateFormatService } from 'src/app/DateFormat/date-format.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['../../../sass/application.scss', './upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public type: string = 'directive';
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  docu: any;
  public urls: any = [];
  chosenMod: string = '';
  public data1: any = [];
  public res;
  public name;
  public uploading = false;
  public size;
  public formData;
  public publicUrl;
  public sbNo = false;
  public boeNumber = false;
  public billNo = false;
  public pIpO = false;
  public override = false;
  public message = '';
  public documentType = '';
  public documentType1 = '';
  public piPoUrl;
  public selectedDocumentType;
  public benneDetail: any = [];
  public buyerDetail: any = [];
  private subscription: Subscription;
  public selectedBenne = '';
  public beneSelect1: string;
  public selectCombo;
  public pipoSelect = false;
  currencyName = [];
  currencyName1 = [];
  dataJson1: any;
  jsondata1: any;
  toggle1: boolean;
  y: any;
  dataJson2: any;
  jsondata2: any;
  toggle2: boolean;
  z: any;

  public config: DropzoneConfigInterface;
  public config1: DropzoneConfigInterface;
  public config2: DropzoneConfigInterface;
  public config3: DropzoneConfigInterface;
  public config4: DropzoneConfigInterface;
  shippingForm: FormGroup;
  // loginForm: FormGroup;
  public submitted = false;
  authToken: string;
  headers: any;
  closeResult: string;
  APPEND_HTML: any = [];
  piPoForm: any = new FormGroup({
    pi_poNo: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    currency: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    incoterm: new FormControl('', Validators.required),
    lastDayShipment: new FormControl('', Validators.required),
    paymentTerm: new FormArray([this.initCourse()], Validators.required),
    pcRefNo: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    beneName: new FormControl('', Validators.required),
  });
  loginForm = this.formBuilder.group({
    beneName: ['', Validators.required],
    beneAdrs: ['', Validators.required],
    beneBankName: ['', Validators.required],
    beneAccNo: ['', Validators.required],
    beneBankAdress: ['', Validators.required],
    beneBankSwiftCode: ['', Validators.required],
    sortCode: ['', Validators.required],
    iban: ['', Validators.required],
    interBankSwiftCode: ['', Validators.required],
    interBankName: ['', Validators.required],
  });

  buyerForm = this.formBuilder.group({
    buyerName: ['', Validators.required],
    buyerAdrs: ['', Validators.required],
  });

  pipourl1: any;
  tryPartyAgreement: boolean = false;
  creditNote: boolean = false;
  swiftCopy: boolean = false;
  EBRC: boolean = false;
  blCopyref: boolean = false;
  blCopy: boolean = false;
  commercial: boolean = false;
  billOfExchange: boolean = false;
  destruction: boolean = false;
  debitNote: boolean = false;
  packingList: boolean = false;
  otherDoc: boolean = false;
  insuranceCopy: boolean = false;
  lcCopy: boolean = false;
  agreement: boolean = false;
  opinionReport: boolean = false;
  pipolist: any;
  item4: any;
  pipoArray: any = [];
  beneValue: any = 'Select Beneficiary';
  buyerValue: any = 'Select Buyer';
  pipoValue: any = 'Select PI/PO';
  payment: any = 'select Type';

  document: any;
  file: any;
  arrayData: any = [];
  comoData: any = [];
  other: boolean;
  pipoArr: any = [];
  pubUrl: any;
  pipoOut: string;
  beneOut: string;
  api_base: any;
  mainBene: any;
  location: any;
  commodity: any;
  isDisabled: boolean;
  origin: any = [];
  item5: any;
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
  buyerDetail34: any;
  retururl;

  userData: any
  commerciallist: any;
  importpipolist: any;

  PI_PO_NUMBER_LIST: any = [];
  USER_DATA: any = [];
  PDF_READER_DATA: any = [];

  get f() {
    return this.loginForm.controls;
  }
  constructor(
    @Inject(PLATFORM_ID) public platformId,

    public formBuilder: FormBuilder,
    public http: HttpClient,
    public documentService: DocumentService,
    public router: Router,
    public sanitizer: DomSanitizer,
    public userService: UserService,
    public toastr: ToastrService,
    public modalService: NgbModal,
    public route: ActivatedRoute,
    public appconfig: AppConfig,
    public sharedData: SharedDataService,
    public pipoDataService: PipoDataService,
    public wininfo: WindowInformationService,
    public date_format: DateFormatService,
    public CustomDropDown: CustomConfirmDialogModelComponent) {

    this.userData = this.userService.userData?.result
    if (this.userData) {
      this.documentType1 = this.userData?.sideMenu
    }
    this.sharedData.currentReturnUrl.subscribe(
      (message) => (this.retururl = message)
    );
    this.api_base = appconfig.apiUrl;
    console.log(this.api_base);
    this.loadFromLocalStorage();
    console.log(this.authToken);
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`,
    };

    if (isPlatformBrowser(this.platformId)) {
      console.log('asdkhsajvdsug');
      this.config = {
        url: `${this.api_base}/documents/uploadFile `,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
      this.config2 = {
        url: `${this.api_base}/documents/uploadFile1`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
      this.config4 = {
        url: `${this.api_base}/documents/uploadFile4`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 500000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
      this.config3 = {
        url: `${this.api_base}/documents/uploadFile2`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
      this.config1 = {
        url: `${this.api_base}/member/uploadImage`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
    }
  }

  public a = 10;
  width: any = 0;

  runProgressBar(value) {
    console.log(value / 1500);
    timer(0, value / 2500)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data),
          console.log('Benne Detail22222', this.benneDetail);
      },
      (err) => console.log('Error', err)
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log('Benne Detail111', this.buyerDetail);
      },
      (err) => console.log('Error', err)
    );
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
  CURRENCY_LIST: any = [];

  async ngOnInit() {
    this.wininfo.set_controller_of_width(230, '.content_top_common')
    for (let index = 0; index < data1['default']?.length; index++) {
      this.CURRENCY_LIST.push({
        type: data1['default'][index]['value']
      })
    }

    this.userService.getUserDetail().then((data: any) => {
      this.USER_DATA = data?.result
      console.log("this.USER_DATA", this.USER_DATA)
    });

    this.jsondata1 = data1['default'];
    this.dataJson1 = data1['default'];
    this.jsondata2 = data1['default'];
    this.dataJson2 = data1['default'];
    this.userService.getTeam().subscribe(
      (data) => {
        console.log('llllllllllllllllllllllllllllllll');
        console.log(data['data'][0]);
        this.location = data['data'][0]['location'];
        this.commodity = data['data'][0]['commodity'];
        console.log(this.location);
        console.log(this.commodity);
        //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })
      },
      (error) => {
        console.log('error');
      }
    );
    console.log(this.route.snapshot.paramMap.get('document'));
    this.file = this.route.snapshot.paramMap.get('file');
    this.redirectid = this.route.snapshot.paramMap.get('pipo_id');
    this.redirectindex = this.route.snapshot.paramMap.get('index');
    this.redirectpage = this.route.snapshot.paramMap.get('page');
    console.log('checking', this.file);
    this.docu = this.route.snapshot.paramMap.get('document');
    console.log('this is doc', this.docu);

    if (this.docu == 'pipo') {
      this.documentType1 = this.route.snapshot.paramMap.get('file');
      console.log(this.documentType1, 'docType');
    }
    if (this.docu == 'sb') {
      console.log('this is test for pipo');
      this.documentType1 = 'export';
      this.documentType = 'sb';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
        console.log('this is test 2******', this.arrayData);
      }
    } else if (this.docu == 'boe') {
      this.documentType1 = 'import';
      this.documentType = 'boe';
      this.documentType1 = 'import';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'debitNote') {
      if (this.file == 'export') {
        this.documentType1 = 'export';
        this.documentType = 'debitNote';
        this.documentType1 = 'export';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      } else if (this.file == 'import') {
        this.documentType1 = 'import';
        this.documentType = 'debitNote';
        this.documentType1 = 'import';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      }
    } else if (this.docu == 'creditNote') {
      console.log('Credit', this.file);
      if (this.file == 'export') {
        this.documentType1 = 'export';
        this.documentType = 'creditNote';
        this.documentType1 = 'export';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      } else if (this.file == 'import') {
        this.documentType1 = 'import';
        this.documentType = 'creditNote';
        this.documentType1 = 'import';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      }
    } else if (this.docu == 'insuranceCopy') {
      if (this.file == 'import') {
        this.documentType1 = 'import';
        this.documentType = 'insuranceCopy';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      } else if (this.file == 'export') {
        this.documentType1 = 'export';
        this.documentType = 'insuranceCopy';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      }
    } else if (this.docu == 'irAdvice') {
      this.documentType1 = 'export';
      this.documentType = 'irAdvice';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'orAdvice') {
      this.documentType1 = 'import';
      this.documentType = 'orAdvice';
      this.documentType1 = 'import';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'lcCopy') {
      this.documentType1 = 'export';
      this.documentType = 'lcCopy';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'tryPartyAgreement') {
      if (this.file == 'import') {
        this.documentType1 = 'import';
        this.documentType = 'tryPartyAgreement';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      } else if (this.file == 'export') {
        this.documentType1 = 'export';
        this.documentType = 'tryPartyAgreement';
        if (this.route.snapshot.paramMap.get('pipo_id')) {
          this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
          this.beneOut = this.route.snapshot.paramMap.get('bene');
          let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
          this.arrayData.push(x);
          this.pipoArr.push(this.pipoOut);
          this.mainBene = this.beneOut;
        }
      }
    } else if (this.docu == 'agreement') {
      this.documentType1 = 'export';
      this.documentType = 'agreement';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'opinionReport') {
      this.documentType1 = 'export';
      this.documentType = 'opinionReport';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'debitNote') {
      this.documentType1 = 'export';
      this.documentType = 'debitNote';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'swiftCopy') {
      this.documentType1 = 'export';
      this.documentType = 'swiftCopy';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'EBRC') {
      this.documentType1 = 'export';
      this.documentType = 'EBRC';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'blCopyref') {
      this.documentType1 = 'export';
      this.documentType = 'blCopyref';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'blCopy') {
      this.documentType1 = 'export';
      this.documentType = 'blCopy';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'import-blCopy') {
      this.documentType1 = 'import';
      this.documentType = 'import-blCopy';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'commercial') {
      this.documentType1 = 'export';
      this.documentType = 'commercial';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'import-commercial') {
      this.documentType1 = 'import';
      this.documentType = 'import-commercial';
      this.documentType1 = 'import';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'billOfExchange') {
      this.documentType1 = 'export';
      this.documentType = 'billOfExchange';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'import-billOfExchange') {
      this.documentType1 = 'import';
      this.documentType = 'import-billOfExchange';
      this.documentType1 = 'import';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'destruction') {
      this.documentType1 = 'export';
      this.documentType = 'destruction';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'import-destruction') {
      this.documentType1 = 'import';
      this.documentType = 'import-destruction';
      this.documentType1 = 'import';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    }else if (this.docu == 'packingList') {
      this.documentType1 = 'export';
      this.documentType = 'packingList';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    } else if (this.docu == 'otherDoc') {
      this.documentType1 = 'export';
      this.documentType = 'otherDoc';
      this.documentType1 = 'export';
      if (this.route.snapshot.paramMap.get('pipo_id')) {
        this.pipoOut = this.route.snapshot.paramMap.get('pipo_id');
        this.beneOut = this.route.snapshot.paramMap.get('bene');
        let x = 'PI' + '-' + this.pipoOut + '-' + this.beneOut;
        this.arrayData.push(x);
        this.pipoArr.push(this.pipoOut);
        this.mainBene = this.beneOut;
      }
    }


    //console.log(this.route.snapshot.paramMap.get('document'))
    this.config = {
      ...this.config,
    };

    this.config1 = {
      ...this.config1,
    };

    this.config3 = {
      ...this.config3,
    };

    this.config4 = {
      ...this.config4,
    };

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data),
          console.log('Benne Detail3', this.benneDetail);
      },
      (err) => console.log('Error', err)
    );
    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log('Benne Detail4', this.buyerDetail);
      },
      (err) => console.log('Error', err)
    );
    this.documentService.getPipoTask(1).subscribe(
      (res: any) => {
        (this.buyerDetail34 = res.data),
          console.log('Benne Detail4354545345435', this.buyerDetail34);
      },
      (err) => console.log('Error', err)
    );
    console.log('DOCUMENT TYPE', this.documentType);
    await this.pipoDataService.getPipoList(this.documentType1).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        console.log(this.PI_PO_NUMBER_LIST, 'PI_PO_NUMBER_LIST')
        this.pipolist = data;
      });
    });
    this.documentService.getIrAdvice(1).subscribe(
      (res: any) => {
        console.log('SJSJSJSJ', res), (this.item4 = res.data);
      },
      (err) => console.log(err)
    );

    this.documentService.getOrAdvice(1).subscribe(
      (res: any) => {
        console.log('SJSJSJSJ', res), (this.item4 = res.data);
      },
      (err) => console.log(err)
    );

    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        console.log('Master Data File', res);
        this.item5 = res.data;
        console.log('line 736', this.item5);
        this.item5.forEach((element, i) => {
          this.origin[i] = element.countryOfFinaldestination;
        });
        console.log('Master Country', this.origin);
        this.origin = this.origin.filter(
          (value, index) => this.origin.indexOf(value) === index
        );

        if (this.arrayData.length) {
          console.log("arrayData Legth", this.arrayData);
          this.pipoSelect = true;
          console.log("pipoSelect", this.pipoSelect)
        }
      },
      (err) => console.log(err));
  }

  onSubmitIrAdvice(e) {
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1.doc;
    console.log('doc', this.pipourl1.doc);
    console.log('ID Data', this.res._id);
    console.log(this.res);
    e.form.value.file = 'export';
    console.log('onSubmitIrAdvice', e.form.value);
    this.documentService.getBillNo(e.form.value.billNo).subscribe((res: any) => {
      console.log(res, 'getBillNo')
      if (res.length != 0) {
        console.log('inside file already exist');
        console.log('document value', e.form.value);
        this.documentService.updateByOrAdvice(e.form.value, e.form.value.billNo).subscribe(
          (data: any) => {
            console.log('updateByOrAdvice', data);
            this.message = '';
            if (this.retururl) {
              this.router.navigate(['/home/inward-remittance-advice']);
            } else {
              this.router.navigate(['/home/inward-remittance-advice']);
            }
            let updatedData = {
              "MasterServiceRef": [
                data.data._id,
              ]
            }
            this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData).subscribe(
              (data) => {
                console.log('king123');
                console.log(data);
                this.toastr.success('Firex Document added successfully.');
                this.router.navigate(['/home/inward-remittance-advice']);
              },
              (error) => {
                console.log('error');
              }
            );
          },
          (error) => {
            console.log('error');
          }
        );
      } else {
        console.log('updateOrAdvice', e.form.value.doc, this.res);
        this.documentService.updateOrAdvice(e.form.value, this.res._id).subscribe(
          (res: any) => {
            this.toastr.success(`Ir document updated successfully`);
            console.log('Ir document updated successfully');
            let updatedData = {
              "masterRef": [
                res.data._id,
              ],
            }
            this.userService
              .updateManyPipo(this.pipoArr, this.documentType, this.pubUrl, updatedData)
              .subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  this.toastr.success('Firex Document added successfully.');
                  if (this.retururl) {
                    let url = this.retururl;
                    this.sharedData.changeretunurl('');
                    this.router.navigate(['/home/inward-remittance-advice']);
                  } else {
                    this.router.navigate(['/home/inward-remittance-advice']);
                  }
                },
                (error) => {
                  console.log('error');
                }
              );
          },
          (error) => {
            console.log('error');
          }
        );
      }
    })
  }

  onSubmitOrAdvice(e) {
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1.doc;
    console.log('doc', this.pipourl1.doc);
    console.log('ID Data', this.res._id);
    console.log(this.res);
    e.form.value.file = 'import';
    console.log('onSubmitOrAdvice', e.form.value);
    this.documentService.getBillNo(e.form.value.billNo).subscribe((res: any) => {
      console.log(res, 'getBillNo')
      if (res.length != 0) {
        console.log('inside file already exist');
        console.log('document value', e.form.value);
        this.documentService.updateByOrAdvice(e.form.value, e.form.value.billNo).subscribe(
          (data: any) => {
            console.log('updateByOrAdvice', data);
            this.message = '';
            if (this.retururl) {
              this.router.navigate(['/home/Onward-remittance-advice']);
            } else {
              this.router.navigate(['home/pipo-export', {
                id: this.redirectid,
                page: this.redirectpage,
                index: this.redirectindex,
              },
              ]);
            }
            let updatedData = {
              "MasterServiceRef": [
                data.data._id,
              ],
            }
            this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData).subscribe(
              (data) => {
                console.log('king123');
                console.log(data);
                this.toastr.success('Firex Document added successfully.');
                this.router.navigate(['home/outward-remittance-advice']);
              },
              (error) => {
                console.log('error');
              }
            );
          },
          (error) => {
            console.log('error');
          }
        );
      } else {
        console.log('updateOrAdvice', e.form.value.doc, this.res);
        this.documentService.updateOrAdvice(e.form.value, this.res._id).subscribe(
          (res: any) => {
            this.toastr.success(`Ir document updated successfully`);
            console.log('Ir document updated successfully');
            let updatedData = {
              "masterRef": [
                res.data._id,
              ],
            }
            this.userService
              .updateManyPipo(this.pipoArr, this.documentType, this.pubUrl, updatedData)
              .subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  this.toastr.success('Firex Document added successfully.');
                  if (this.retururl) {
                    let url = this.retururl;
                    this.sharedData.changeretunurl('');
                    this.router.navigate([url]);
                  } else {
                    this.router.navigate(['home/outward-remittance-advice']);
                  }
                },
                (error) => {
                  console.log('error');
                }
              );
          },
          (error) => {
            console.log('error');
          }
        );
      }
    })

  }

  public onSubmit(e) {
    console.log('sjfskfbu');
    console.log('LENGTH', this.res.invoices.length);
    console.log(e);
    console.log(e.form.value['sno1']);
    let invoices = [];
    if (this.file) {
      e.form.value.file = this.file;
    } else {
      e.form.value.file = this.documentType1;
    }
    for (let i = 0; i < this.res.invoices.length; i++) {
      invoices.push({
        sno: e.form.value[`sno${i + 1}`],
        invoiceno: e.form.value[`invoiceno${i + 1}`],
        amount: e.form.value[`amount${i + 1}`],
        currency: e.form.value[`currency${i + 1}`],
      });
    }
    console.log(invoices);
    e.form.value.invoices = invoices;
    e.form.value.buyerName = this.arrayData;
    e.form.value.pipo = this.pipoArr;
    console.log('buyername for BL', e.form.value.buyerName);
    e.form.value._id = this.res._id
    console.log(e.form.value);
    // this.formData = new ShippingBill(e.form.value)
    // console.log(this.formData
    if (this.message == 'This file already uploaded') {
      console.log('inside file already exist');

      this.documentService.updateMasterBySb(e.form.value, e.form.value.sbno, e.form.value._id).subscribe(
          (res: any) => {
            this.toastr.success(`Shippingbill updated Successfully`);
            console.log('Shippingbill updated Successfully');
            var updatedData:any =''
            if (this.documentType1=='export') {
              updatedData = {
                "sbRef": [
                  this.res._id,
                ],
              }
            }else{
              updatedData = {
                "boeRef": [
                  this.res._id,
                ],
              }
            }

            this.userService
              .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1.doc, updatedData)
              .subscribe(
                (data) => {
                  //this.pipoData[`${this.pipoDoc}`] = args[1].data
                  console.log('king123');
                  console.log(data);

                  this.toastr.success('shipping Bill added successfully.');
                  if (this.retururl) {
                    let url = this.retururl;
                    this.sharedData.changeretunurl('');
                    this.router.navigate(['/home/view-document/sb']);
                  } else {
                    this.router.navigate(['/home/view-document/sb']);
                  }
                },
                (error) => {
                  // this.toastr.error('Invalid inputs, please check!');
                  console.log('error');
                }
              );

            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log('error');
          }
        );
    } else {
      this.documentService.updateMaster(e.form.value, this.res._id).subscribe(
        (res: any) => {
          this.toastr.success(`Shippingbill updated Successfully`);
          console.log('Shippingbill updated Successfully');
          var updatedData:any =''
            if (this.documentType1=='export') {
              updatedData = {
                "sbRef": [
                  this.res._id,
                ],
              }
            }else{
              updatedData = {
                "boeRef": [
                  this.res._id,
                ],
              }
            }
          this.userService
            .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1.doc, updatedData)
            .subscribe(
              (data) => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log('king123');
                console.log(data);
                this.toastr.success('shipping Bill added successfully.');
                if (this.retururl) {
                  let url = this.retururl;
                  this.sharedData.changeretunurl('');
                  this.router.navigate(['/home/view-document/sb']);
                } else {
                  this.router.navigate(['/home/view-document/sb']);
                }
              },
              (error) => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log('error');
              }
            );
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log('error');
        }
      );
    }
  }

  public submitType() {
    console.log('This is the document type', this.documentType);
  }

  changeCheckbox(value) {
    let j = this.pipoArray.indexOf(value);
    if (j == -1) {
      this.pipoArray.push(value);
    } else {
      this.pipoArray.splice(j, 1);
    }

    console.log(this.pipoArray);
  }

  changepipo(value) {
    this.pipoDataService.getPipoListByCustomer(this.documentType1, value).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        this.importpipolist = data;
        console.log('importpipolist', this.importpipolist);
      });
    });;
  }

  searchCurrency(e, i) {
    this.y = i;
    this.toggle1 = true;
    console.log(e);
    this.jsondata1 = [];
    for (let data of this.dataJson1) {
      if (data.currency.toLowerCase().includes(e.toLowerCase())) {
        console.log('1');
        this.jsondata1.push(data);
      }
    }
    console.log(this.jsondata1);
    console.log(this.currencyName.length);
  }
  currencyClick(e, i) {
    this.currencyName[i] = e;
    console.log(this.currencyName);

    this.toggle1 = false;
  }
  searchCurrency1(e, i) {
    this.z = i;
    this.toggle2 = true;
    console.log(e);
    this.jsondata2 = [];
    for (let data of this.dataJson2) {
      if (data.currency.toLowerCase().includes(e.toLowerCase())) {
        console.log('1');
        this.jsondata2.push(data);
      }
    }
    console.log(this.jsondata2);
    console.log(this.currencyName1.length);
  }
  currencyClick1(e, j) {
    this.currencyName1[j] = e;
    console.log(this.currencyName1);

    this.toggle2 = false;
  }

  public onSubmitBoe(e) {
    console.log(this.selectCombo);
    console.log('asjbakujfbkasjfbkuh');
    console.log(this.pubUrl);
    console.log(this.documentType);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    if (this.file) {
      e.form.value.file = this.file;
    } else {
      e.form.value.file = this.documentType1;
    }
    e.form.value.doc = this.pubUrl;
    e.form.value.benneName = this.arrayData;
    e.form.value.commissionCurrency = e.form.value?.commissionCurrency?.type;
    e.form.value.discountCurrency = e.form.value?.discountCurrency?.type;

    console.log('Benne Name', e.form.value);
    this.documentService.CHECK_ALL_INVOICES({
      tableName: 'boerecords', query: {
        boeNumber: e.form?.value?.boeNumber
      }
    }).subscribe((temp: any) => {
      if (temp.result.length!=0) {
         this.toastr.error('Already Boe Number added...');
        return;
      }
      if (temp?.result.length==0 || temp?.result?.boeNumber== null || temp?.result?.boeNumber== undefined) {
          this.documentService.addBoe(e.form.value).subscribe((data) => {
              console.log('king123');
              console.log(data);
              this.message = '';
              this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl).subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  this.toastr.success('Boe added successfully.');
                  this.router.navigate(['/home/boe']);
                },
                (error) => {
                  console.log('error');
                }
              );
            },
              (error) => {
                console.log('error');
              }
          );
      } else {
        this.toastr.error('Already Boe Number added...');
      }

      console.log(temp, 'CHECK_ALL_INVOICES');
    })

  }

  public onSubmitPipo() {
    console.log('aaaasss', this.piPoForm.value);
    var temp: any = {
      ...this.piPoForm.value,
    }
    this.piPoForm.value.currency = this.piPoForm.value?.currency?.type;

    if (this.file) {
      if (this.file == 'import') {
        temp.benneName = this.beneValue;
        temp.currency = temp.currency?.type;
      } else if (this.file == 'export') {
        temp.buyerName = this.buyerValue;
        temp.commodity = this.comoData;
        console.log('comossss', temp.commodity);
      }
      temp.file = this.file;
    } else {
      temp.file = this.documentType1;
    }

    if (this.documentType == 'PI') {
      temp.doc = this.pipourl1;
    } else if (this.documentType == 'PO') {
      temp.doc1 = this.pipourl1;
    }
    temp.document = this.documentType;

    console.log(temp, this.beneValue, 'onSubmitPipo');
    console.log(this.piPoForm.value, 'onSubmitPipo');
    this.documentService.addPipo(temp).subscribe(
      (res) => {
        console.log('Pipo Added Successfully');
        if (this.documentType1 == 'import' && this.documentType == 'PI') {
          this.router.navigateByUrl('/home/pipo-doc');
        } else if (
          this.documentType1 == 'import' &&
          this.documentType == 'PO'
        ) {
          this.router.navigateByUrl('/home/pipo-doc');
        } else if (
          this.documentType1 == 'export' &&
          this.documentType == 'PI'
        ) {
          this.router.navigateByUrl('/home/pipo-export');
        } else if (
          this.documentType1 == 'export' &&
          this.documentType == 'PO'
        ) {
          this.router.navigateByUrl('/home/pipo-export');
        } else if (
          this.documentType1 == 'export' &&
          this.documentType == 'PO'
        ) {
          this.router.navigateByUrl('/home/pipo-export');
        } else {
          this.router.navigateByUrl('/home/dashboardNew');
        }
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitThird(e) {
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    this.documentService.addThird(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Third Party Document Added Successfully`);
        console.log('Third Party Document Added Successfully');
        let updatedData = {
          "tryPartyAgreementRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (e.form.value.file == 'export') {
                if (this.retururl) {
                  let url = this.retururl;
                  this.sharedData.changeretunurl('');
                  if (this.documentType1 == "import") {
                    this.router.navigate(['/home/importTriParty']);
                  } else {
                    this.router.navigate(['/home/try-party']);
                  }
                } else {
                  if (this.documentType1 == "import") {
                    this.router.navigate(['/home/importTriParty']);
                  } else {
                    this.router.navigate(['/home/try-party']);
                  }
                }
              } else {
                if (this.documentType1 == "import") {
                  this.router.navigate(['/home/importTriParty']);
                } else {
                  this.router.navigate(['/home/try-party']);
                }
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitCredit(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    console.log(e.form.value);
    this.documentService.addCredit(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Credit Note Document Added Successfully`);
        console.log('Credit Note Document Added Successfully');
        let updatedData = {
          "creditNoteRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log(' credit Note document', this.pipourl1);
              console.log('king123');
              console.log(data);
              if (this.documentType1 == 'export') {
                if (this.retururl) {
                  let url = this.retururl;
                  this.sharedData.changeretunurl('');
                  this.router.navigate(['/home/importCredit']);
                } else {
                  this.router.navigate(['/home/importCredit']);
                }
              } else if (this.documentType1 == 'import') {
                this.router.navigate(['/home/importCredit']);
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  // Debit Note Submit button

  onSubmitDebit(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    this.documentService.addDebit(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Debit Note Document Added Successfully`);
        console.log('Debit Note Document Added Successfully');
        let updatedData = {
          "debitNoteRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.retururl) {
                let url = this.retururl;
                this.sharedData.changeretunurl('');
                this.router.navigate(['/home/debit-note']);
              } else {
                this.router.navigate(['/home/debit-note']);
              }
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }
  CommercialNumber: any = [];
  storeCommercialNumber(id: any, commercialnumber) {
    console.log(this.CommercialNumber, 'CommercialNumber')
    if (!this.CommercialNumber.includes(commercialnumber)) {
      this.CommercialNumber.push(commercialnumber)
    }
  }
  //blCopyref Submit buttton
  onSubmitblcopyref(e) {
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.doc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    console.log(e.form.value);
    this.documentService.addBlcopyref(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`addBlcopyref Document Added Successfully`);
        console.log('addBlcopyref Document Added Successfully');
        let updatedData = {
          "blcopyRefs": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.documentType1 == 'import') {
                this.router.navigate(['/home/import-airway-bl-copy']);
              } else {
                this.router.navigate(['/home/airway-bl-copy']);
              }
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  //blCopy Submit buttton
  onSubmitblCopy(e) {
    let selectedShippingBill = this.pipoDataService.getShippingBillById(e.form.value.sbNo);
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.blCopyDoc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);
    e.form.value.file = this.documentType1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.CommercialNumber = this.CommercialNumber
    console.log(e.form.value, 'onSubmitblCopy');

    this.documentService.addAirwayBlcopyFile(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`addAirwayBlcopy Document Added Successfully`);
        console.log('addAirwayBlcopy Document Added Successfully');
        let updatedData = {
          "airwayBlCopyRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, 'airwayBlcopy', this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              this.documentService.updateMasterBySb(
                e.form.value,
                selectedShippingBill?.sbno,
                selectedShippingBill?._id
              ).subscribe(
                (data) => {
                  console.log('king123');
                  console.log('DATA', data);
                  if (this.documentType1 == 'import') {
                    this.router.navigate(['/home/import-airway-bl-copy']);
                  } else {
                    this.router.navigate(['/home/airway-bl-copy']);
                  }
                },
                (error) => {
                  console.log('error');
                }
              );
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log('Error adding pipo')
    );
  }

  //commercial Invoice Submit buttton
  onSubmitCommercial(e) {
    let selectedShippingBill = this.pipoDataService.getShippingBillById(e.form.value.sbNo);
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.commercialDoc = this.pipourl1;
    console.log('pipoDoc', this.pipourl1);
    e.form.value.buyerName = this.arrayData;
    console.log(e.form.value);
    this.documentService.addCommercial(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Commercial Invoice Added Successfully`);
        console.log('Commercial Invoice Added Successfully');
        let updatedData = {
          "commercialRef": [
            res.data._id,
          ],
        }
        this.userService.updateManyPipo(this.pipoArr, 'commercial', this.pipourl1, updatedData).subscribe((data) => {
          console.log('king123');
          console.log('commercial', data);
          this.documentService.updateMasterBySb(e.form.value, selectedShippingBill?.sbno, selectedShippingBill?._id).subscribe(
            (data) => {
              console.log('.kjsakjsdkdsjYYYYY');
              console.log('DATA', data);
              this.router.navigate(['home/commercial']);
            },
            (error) => {
              console.log('error');
            }
          );
          console.log('redirectindex', this.redirectindex);
          console.log('redirectinpage', this.redirectpage);
          console.log('redirectid', this.redirectid);
        },
          (error) => {
            // this.toastr.error('Invalid inputs, please check!');
            console.log('error');
          }
        );
        // this.router.navigateByUrl('/home/dashboardNew');
      },
      (err) => console.log('Error adding pipo')
    );
  }

  //commercial Invoice Import Submit buttton
  onSubmitCommercialImport(e) {
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;
    e.form.value.commercialDoc = this.pipourl1;
    console.log('pipoDoc', this.pipourl1);
    e.form.value.buyerName = this.arrayData;

    console.log(e.form.value);
    this.documentService.addCommercial(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Commercial Invoice Added Successfully`);
        console.log('Commercial Invoice Added Successfully');
        let updatedData = {
          "commercialRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, 'commercial', this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              //this.pipoData[`${this.pipoDoc}`] = args[1].data
              console.log('king123');
              console.log(data);

              this.router.navigate(['home/import-commercial']);

              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl('/home/dashboardNew');
      },
      (err) => console.log('Error adding pipo')
    );
  }

  // billExchange Submit button
  onSubmitBillExchange(e) {
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.doc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);

    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;

    console.log(e.form.value);
    this.documentService.addBillExchange(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Bill Of Exchange Document Added Successfully`);
        console.log('Bill Of Exchange Document Added Successfully');
        let updatedData = {
          "billOfExchangeRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, 'billOfExchange', this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.documentType1 == 'import') {
                this.router.navigate(['/home/import-bill-of-exchange']);
              } else {
                this.router.navigate(['/home/bill-of-exchange']);
              }
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl('/home/dashboardNew');
      },
      (err) => console.log('Error adding pipo')
    );
  }

  //destruction certificate Submit buttton
  onSubmitDestruction(e) {
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.doc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);

    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    this.documentService.addDestruction(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`destruction Document Added Successfully`);
        console.log('destruction Document Added Successfully');
        let updatedData = {
          "destructionRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, 'destruction', this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              //this.pipoData[`${this.pipoDoc}`] = args[1].data
              console.log('king123');
              console.log(data);
              if (this.documentType1 == 'import') {
                this.router.navigate(['/home/import-destruction']);
              } else {
                this.router.navigate(['/home/destruction']);
              }
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log('Error adding pipo')
    );
  }

  // Packing List Submit Button
  onSubmitPackingList(e) {
    let selectedShippingBill = this.pipoDataService.getShippingBillById(e.form.value.sbNo);
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.packingDoc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);
    e.form.value.file = this.documentType1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    this.documentService.addPackingList(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Packing List Added Successfully`);
        console.log('Packing List Added Successfully');
        let updatedData = {
          "packingListRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, "packingList", this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              //this.pipoData[`${this.pipoDoc}`] = args[1].data
              console.log('king123');
              console.log(data);

              this.documentService
                .updateMasterBySb(
                  e.form.value,
                  selectedShippingBill?.sbno,
                  selectedShippingBill?._id
                ).subscribe(
                  (data) => {
                    console.log('king123');
                    console.log('DATA', data);
                    if (this.documentType1 == 'import') {
                      this.router.navigate(['/home/packing-list']);
                    } else {
                      this.router.navigate(['/home/packing-list']);
                    }
                  },
                  (error) => {
                    console.log('error');
                  }
                );
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl('/home/dashboardNew');
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitotherDoc(e) {
    console.log('this is console of blcopy', e.form.value);
    e.form.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.form.value.file = this.documentType1;
    e.form.value.doc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);

    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    // this.documentService.addOtherDoc(e.form.value).subscribe(
    //   (res) => {
    //     this.toastr.success(`Packing List Added Successfully`);
    //     console.log("Packing List Added Successfully");

    //     this.userService.updateManyPipo(this.pipoArr, "otherDoc",this.pipourl1)
    //         .subscribe(
    //           data => {
    //             //this.pipoData[`${this.pipoDoc}`] = args[1].data
    //             console.log("king123")
    //             console.log(data)

    //             this.router.navigate([
    //               'home/pipo-export',
    //                   {
    //                     id: this.redirectid,
    //                     page: this.redirectpage,
    //                     index: this.redirectindex,
    //                   },
    //                ]);
    //                console.log("redirectindex",this.redirectindex);
    //                console.log("redirectinpage",this.redirectpage);
    //                console.log("redirectid",this.redirectid);

    //           },
    //           error => {
    //             // this.toastr.error('Invalid inputs, please check!');
    //             console.log("error")
    //           });
    //     this.router.navigateByUrl("/home/dashboardNew");
    //   },
    //   (err) => console.log("Error adding pipo")
    // );
  }

  //EBRC Submit button
  onSubmitEbrc(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    e.form.value.file = this.documentType1;
    this.documentService.addEbrc(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`EBRC Document Added Successfully`);
        console.log('EBRC Document Added Successfully');

        let updatedData = {
          "ebrcRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              //this.pipoData[`${this.pipoDoc}`] = args[1].data
              console.log('king123');
              console.log(data);

              this.router.navigate([
                'home/pipo-export'
              ]);
              console.log('redirectindex', this.redirectindex);
              console.log('redirectinpage', this.redirectpage);
              console.log('redirectid', this.redirectid);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log('Error adding pipo')
    );
  }
  //swiftCopy Submit button
  onSubmitSwift(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.currency = e.form.value?.currency?.type;
    e.form.value.file = this.documentType1;
    console.log(e.form.value);
    this.documentService.addSwift(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`swift copy Document Added Successfully`);
        console.log('swift copy Document Added Successfully');

        this.userService
          .updateManyPipo(this.pipoArr, 'swiftCopy', this.pipourl1)
          .subscribe(
            (data) => {
              this.router.navigate([
                'home/pipo-export'
              ]);
            },
            (error) => {
              // this.toastr.error('Invalid inputs, please check!');
              console.log('error');
            }
          );
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log('Error adding pipo')
    );
  }
  onSubmitInsurance(e) {
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value, 'onSubmitInsurance');
    this.documentService.addInsurance(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Insurance Document Added Successfully`);
        console.log('Insurance Document Added Successfully');
        let updatedData = {
          "insuranceRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.retururl) {
                let url = this.retururl;
                this.sharedData.changeretunurl('');
                if (this.documentType1 == "import") {
                  this.router.navigate(['/home/importInsurance']);
                } else {
                  this.router.navigate(['/home/insurance-document']);
                }
              } else {
                if (this.documentType1 == "import") {
                  this.router.navigate(['/home/importInsurance']);
                } else {
                  this.router.navigate(['/home/insurance-document']);
                }
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitLetterLC(e) {
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;

    console.log(e.form.value);
    this.documentService.addLetterLC(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Letter Of Credit Document Added Successfully`);
        console.log('Letter of Credit Document Added Successfully');
        let updatedData = {
          "lcRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.retururl) {
                let url = this.retururl;
                this.sharedData.changeretunurl('');
                this.router.navigate(['/home/letterofcredit-lc']);
              } else {
                this.router.navigate(['/home/letterofcredit-lc']);
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitMasterService(e) {
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;
    console.log(e.form.value);
    this.documentService.addMasterService(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Master Service Document Added Successfully`);
        console.log('Master Service Document Added Successfully');
        let updatedData = {
          "MasterServiceRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.retururl) {
                let url = this.retururl;
                this.sharedData.changeretunurl('');
                this.router.navigate(['/home/master-services']);
              } else {
                this.router.navigate(['/home/master-services']);
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  onSubmitOpinionReport(e) {
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.arrayData;
    e.form.value.file = this.documentType1;
    e.form.value.currency = e.form.value?.currency?.type;

    console.log(e.form.value);
    this.documentService.addOpinionReport(e.form.value).subscribe(
      (res: any) => {
        this.toastr.success(`Opinion Report Document Added Successfully`);
        console.log('Opinion Report Document Added Successfully');
        let updatedData = {
          "opinionReportRef": [
            res.data._id,
          ],
        }
        this.userService
          .updateManyPipo(this.pipoArr, this.documentType, this.pipourl1, updatedData)
          .subscribe(
            (data) => {
              console.log('king123');
              console.log(data);
              if (this.retururl) {
                let url = this.retururl;
                this.sharedData.changeretunurl('');
                this.router.navigate(['/home/opinion-report']);
              } else {
                this.router.navigate(['/home/opinion-report']);
              }
            },
            (error) => {
              console.log('error');
            }
          );
      },
      (err) => console.log('Error adding pipo')
    );
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  MULITPLE_DROP_DOWN: any = [];
  public onUploadSuccess(args: any): void {
    if (this.documentType !== '') {
      this.uploading = false;
      console.log('ARGS', args);
      console.log('DATA', args[1].data);
      console.log(args[1].data.boeNumber);
      console.log('jhsjshsjshjsh', args[1].data.billNo);
      console.log('Message Message', args[1].message);
      console.log('Sample PDF other doc', args[1].data.pdfflag);
      if (args[1].message == 'This file already uploaded') {
        console.log('My Code');
        this.message = args[1].message;
        this.override = true;
        if (args[1].data.sbno) {
          this.res = new ShippingBill(args[1].data);
          this.sbNo = true;
          console.log(this.res);
          this.res['leodate'] = this.date_format.formatDate(this.res['leodate'], '-')
          this.res['sbdate'] = this.date_format.formatDate(this.date_format.removeAllUnderscore(this.res['sbdate']), '-')
        } else if (args[1].data.boeNumber) {
          this.res = new BoeBill(args[1].data);
          this.boeNumber = true;
          console.log(this.res);
        } else if (args[1].data.billNo) {
          this.res = new IRAdvice(args[1].data);
          this.billNo = true;
          this.PDF_READER_DATA = args[1].data;
          this.PDF_READER_DATA['recievedDate'] = this.date_format.formatDate(this.PDF_READER_DATA['recievedDate'], '-')
          this.PDF_READER_DATA['date'] = this.date_format.formatDate(this.PDF_READER_DATA['date'], '-')
          this.PDF_READER_DATA['conversionDate'] = this.date_format.formatDate(this.PDF_READER_DATA['conversionDate'], '-')
          console.log('PDF_READER_DATA', this.PDF_READER_DATA, this.res);
        }
      } else if (args[1].data.sbno) {
        console.log('Here data type', args[1].data);
        this.res = new ShippingBill(args[1].data);
        this.sbNo = true;
        console.log(this.res);
        this.res['leodate'] = this.date_format.formatDate(this.res['leodate'], '-')
        this.res['sbdate'] = this.date_format.formatDate(this.date_format.removeAllUnderscore(this.res['sbdate']), '-')
      } else if (args[1].data.boeNumber) {
        console.log('Here data type', args[1].data);
        this.res = new BoeBill(args[1].data);
        this.boeNumber = true;
        console.log(this.res);
      } else if (args[1].data.billNo) {
        console.log('Here data type', args[1].data);
        this.res = new IRAdvice(args[1].data);
        this.billNo = true;
        console.log('sjsjsjsj', this.res);
      }
      else if (args[1].data.pdfflag) {
        // BoE.pdf Except other document upload code
        this.res = args[1].data.pdfflag;
        console.log('Sample Other PDF FLAG CONDITION');
        this.boeNumber = true;
      }
      else {
        console.log('this.documentType', this.documentType);
        // this.res = new BoeBill(args[1].data);
        if (this.documentType === 'PI' || this.documentType === 'PO') {
          this.pIpO = true;
        } else if (this.documentType === 'tryPartyAgreement') {
          this.tryPartyAgreement = true;
        } else if (this.documentType === 'creditNote') {
          this.creditNote = true;
        } else if (this.documentType === 'swiftCopy') {
          this.swiftCopy = true;
        } else if (this.documentType === 'blCopyref') {
          this.blCopyref = true;
        } else if (this.documentType === 'blCopy') {
          this.blCopy = true;
        } else if (this.documentType === 'import-blCopy') {
          this.blCopy = true;
          for (let index = 0; index < this.pipoArr.length; index++) {
            this.documentService.getCommercialByFiletype(this.documentType1, this.pipoArr[index]).subscribe(
              (res: any) => {
                console.log('getCommercialImport', res);
                this.MULITPLE_DROP_DOWN[this.pipoArr[index]] = res.data;
              },
              (err) => console.log(err)
            );
          }
        } else if (this.documentType === 'commercial') {
          this.commercial = true;
        } else if (this.documentType === 'import-commercial') {
          this.commercial = true;
        } else if (this.documentType === 'destruction') {
          this.destruction = true;
        } else if (this.documentType === 'import-destruction') {
          this.destruction = true;  
        } else if (this.documentType === 'billOfExchange') {
          this.billOfExchange = true;
        } else if (this.documentType === 'import-billOfExchange') {
          this.billOfExchange = true;
        } else if (this.documentType === 'EBRC') {
          this.EBRC = true;
        } else if (this.documentType === 'debitNote') {
          this.debitNote = true;
        } else if (this.documentType === 'insuranceCopy') {
          this.insuranceCopy = true;
        } else if (this.documentType === 'lcCopy') {
          this.lcCopy = true;
        } else if (this.documentType === 'agreement') {
          this.agreement = true;
        } else if (this.documentType === 'opinionReport') {
          this.opinionReport = true;
        } else if (this.documentType === 'packingList') {
          this.packingList = true;
        } else if (this.documentType === 'otherDoc') {
          this.otherDoc = true;
        } else {
          this.other = true;
          this.userService.updateManyPipo(this.pipoArr, this.documentType, args[1].data).subscribe(
              (data) => {
                console.log('king123');
                console.log(data);
                this.toastr.success('PI/PO updated successfully.');
              },
              (error) => {
                console.log('error');
              }
            );
        }
        console.log(this.res);
      }
      this.pubUrl = args[1].publicUrl;
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].publicUrl
      );
      this.pipourl1 = args[1].data;
      this.piPoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].data
      );

      if (args[1].data.doc) {
        console.log('DOC URL', args[1].doc);

        this.piPoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          args[1].data.doc
        );
      }
      console.log('PIPO URL', this.piPoUrl);
      console.log(this.publicUrl);
      console.log(this.piPoUrl);
      console.log(this.res);
    } else {
      console.log('Document type not given');
    }

    console.log('Selected Document type', this.selectedDocumentType);
  }

  submit(e) {
    if (this.documentType !== '') {
      console.log('ajbkab');
      this.uploading = true;
      console.log(e[0].size);
      this.size = this.formatBytes(e[0].size);
      //document.getElementById("uploadError").style.display = "none";

      this.runProgressBar(e[0].size);
    } else {
      console.log('Document type not given');
      document.getElementById('uploadError').style.display = 'block';
    }
  }

  getFormDetail() {
    console.log(this.piPoForm.value);
    console.log('SELECTED BENNE', this.selectedBenne);
  }

  public formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + ' Bytes';
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(3) + ' KB';
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(3) + ' MB';
    } else {
      return (bytes / 1073741824).toFixed(3) + ' GB';
    }
  }

  public onOverride() {
    this.override = false;
  }

  public beneSelect(e) {
    console.log(e);
  }

  initCourse() {
    return this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(11)]],
      type: ['', [Validators.required]],
      amount: ['', Validators.required],
    });
  }

  initProduct() {
    return new FormGroup({
      product: new FormControl(''),
    });
  }

  getCourses(form) {
    return form.get('paymentTerm').controls;
  }

  // getProducts(form) {
  //   return form.get('products').controls;
  // }

  onAddCourse(e) {
    // if (e.controls.bankDetails.invalid) {
    //   //this.submitted1 = true
    //   this.toastr.error('You can add another bank after filling first one!');
    //   console.log("2")
    //   //this.isDisabled = false;
    //   return;
    // }
    console.log('fffff');
    // this.currencyName.push('')
    // this.bankName.push('')
    const control = this.piPoForm.controls.paymentTerm as FormArray;
    control.push(this.initCourse());
    //this.isDisabled = false;
  }

  removeAddress(i) {
    // console.log(i)
    // //console.log(this.control)
    let control1 = this.piPoForm.controls.paymentTerm as FormArray;
    // console.log(control1)
    // console.log(control1.length)
    // console.log(this.bankName)
    // console.log(this.currencyName)
    control1.removeAt(i);
    // this.bankName.splice(i, 1)
    // this.currencyName.splice(i, 1)
    // console.log(this.bankName)
    // console.log(this.currencyName)
    // console.log(control1.length)
  }

  // public filePreview() {
  //   console.log("inside");
  //   const images = this.que.selectedFiles;
  //   // is images a true array and not empty
  //   if (Array.isArray(images) && images.length > 0) {
  //     images.forEach((image) => {
  //       // cuting out the extension from filename
  //       let extension: any = image.fileName.split(".");
  //       extension = extension
  //         .slice(extension.length - 1, extension.length)
  //         .join(".");
  //       const { accepted, size, height, width, type, dataURL, upload } =
  //         image.file;
  //       const mockFile = {
  //         accepted,
  //         size,
  //         type,
  //         dataURL: dataURL || image.location,
  //         name: upload.filename,
  //       };
  //       const dropzoneInstance = this.directiveRef.dropzone();
  //       console.log(dropzoneInstance);
  //       dropzoneInstance.emit("addedfile", mockFile);
  //       dropzoneInstance.options.maxFiles = 5;
  //       dropzoneInstance.createThumbnailFromUrl(
  //         mockFile,
  //         image.file.width || "400",
  //         image.file.height || "400",
  //         "contain",
  //         true,
  //         function (thumbnail) {
  //           dropzoneInstance.files.push(thumbnail);
  //           dropzoneInstance.emit("thumbnail", mockFile, thumbnail);
  //         },
  //         "anonymous"
  //       );
  //       dropzoneInstance.emit("complete", mockFile);
  //     });
  //   }
  // }

  async LOAD_PIPO_LIST_BUYER(type: any) {
    await this.pipoDataService.getPipoList(type).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        console.log(this.PI_PO_NUMBER_LIST, 'PI_PO_NUMBER_LIST')
        this.pipolist = data;
      });
    });
  }

  clickBene(value) {
    console.log('hhddh', value);
    this.beneValue = value;
  }
  clickpay(value) {
    this.payment = value;
  }

  clickBuyer(value) {
    console.log('hhddh');
    this.buyerValue = value;
  }

  clickComo(a) {
    let j = this.comoData.indexOf(a);
    if (j == -1) {
      this.comoData.push(a);
    }
  }
  SHIPPINGBILL_LIST: any = [];
  clickPipo(PI_PO_LIST) {
    var last_length = PI_PO_LIST.length - 1;
    var LAST_VALUE: any = PI_PO_LIST[last_length]?.value;
    console.log(PI_PO_LIST[last_length]?.value, 'clickPipoclickPipoclickPipo')
    console.log('PI_PO_LISTPI_PO_LISTPI_PO_LIST', PI_PO_LIST);
    this.pipoSelect = true;
    console.log('line 2361', this.pipoSelect);

    this.mainBene = this.FILTER_VALUE(this.pipolist, LAST_VALUE?._id)[0]?.buyerName;
    let x = LAST_VALUE?.id[1];
    let j = this.arrayData.indexOf(LAST_VALUE?.id[1]);
    if (j == -1) {
      this.arrayData.push(x);
      this.pipoArr.push(LAST_VALUE?._id);
    } else {
      console.log('x');
    }
    if(PI_PO_LIST.length==0){
      this.SHIPPINGBILL_LIST=[];
      this.arrayData=[];
      this.pipoArr=[];
    }else{
      this.pipoDataService.getShippingNo(LAST_VALUE?._id,this.documentType1);
      this.documentService.getCommercialByFiletype(this.documentType1, LAST_VALUE?._id).subscribe(
        (res: any) => {
          console.log('getCommercialImport', res);
          this.commerciallist = res.data;
          this.MULITPLE_DROP_DOWN[LAST_VALUE?._id] = res.data;
        },
        (err) => console.log(err)
      );
    }
    console.log(this.arrayData, this.mainBene, 'mainBenemainBene');
    console.log('Array List', this.pipoArr, this.SHIPPINGBILL_LIST);

  }
  FILTER_VALUE(array: any, value: any) {
    return array.filter((item: any) => item?._id == value);
  }
  commerciallistselected: any = [];
  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype(this.documentType1, pipo).subscribe((res: any) => {
      this.commerciallistselected[pipo] = res.data;
    },
      (err) => {
        console.log(err)
      }
    );
  }
  removePipo(i) {
    this.arrayData.splice(i, 1);
    this.pipoArr.splice(i, 1);
    console.log(this.pipoSelect)
    if (this.arrayData.length == 0) {
      this.pipoSelect = false;
      console.log(this.pipoSelect)
    }
  }

  removeComo(i) {
    this.comoData.splice(i, 1);
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

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmitBene() {
    this.isDisabled = true;
    console.log(this.loginForm.value);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.isDisabled = false;
      this.submitted = true;

      return;
    }

    console.log(this.loginForm.value);

    this.beneValue = this.loginForm.value.beneName;
    this.userService.creatBene(this.loginForm.value).subscribe(
      (data) => {
        console.log('king123');
        console.log(data);
        this.userService.getBene(1).subscribe(
          (res: any) => {
            (this.benneDetail = res.data),
              console.log('Benne Detail5', this.benneDetail);
            this.toastr.success('New Beneficiary added successfully');
            this.modalService.dismissAll();
          },
          (err) => console.log('Error', err)
        );
      },
      (error) => {
        console.log('error');
      }
    );
  }

  onSubmitBuyer() {
    console.log(this.buyerForm.value);

    this.buyerValue = this.buyerForm.value.buyerName;
    this.userService.creatBuyer(this.buyerForm.value).subscribe(
      (data) => {
        console.log('king123');
        console.log(data);
        this.userService.getBuyer(1).subscribe(
          (res: any) => {
            (this.buyerDetail = res.data),
              console.log('Buyer Detail', this.buyerDetail);
            this.toastr.success('New Buyer added successfully');
            this.modalService.dismissAll();
          },
          (err) => console.log('Error', err)
        );
      },
      (error) => {
        console.log('error');
      }
    );
  }

  matchSelectedPipo(pipo, selectedPipoArr) {
    console.log("pipo", pipo)
    for (let i in selectedPipoArr) {
      if (selectedPipoArr[i] == pipo?._id) {
        return true;
      }
    }
    return false;
  }
}
