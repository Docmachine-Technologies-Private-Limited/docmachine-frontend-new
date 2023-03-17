// import { BoeBill } from '../.././../../../model/boe.model';
// import { IRAdvice } from '../.././../../../model/irAdvice.model';
// import { ORAdvice } from '../../../../../model/orAdvice.model';

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
import * as data1 from '../../../../currency.json';
import { SharedDataService } from '../../../shared-Data-Servies/shared-data.service';
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
// import { ShippingBill } from '../../../../../model/shippingBill.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
// import { MatSelectModule } from '@angular/material/select';
// import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from '../../../../app.config';
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'app-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['../../../upload/upload.component.scss']
})
export class DebitNoteComponent implements OnInit {
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
  authToken:any;
  headers: any;
  closeResult: string;
  APPEND_HTML: any = [];
  piPoForm = new FormGroup({
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
    benneName: new FormControl('', Validators.required),
  });

  // payment = this.formBuilder.group({
  //   paymentTerm: new FormArray([this.initCourse()], Validators.required)
  // });

  loginForm = this.formBuilder.group({
    benneName: ['', Validators.required],
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

  //*****************
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
  get f() {
    return this.loginForm.controls;
  }
  constructor(
    @Inject(PLATFORM_ID) public platformId,

    private formBuilder: FormBuilder,
    private http: HttpClient,
    private documentService: DocumentService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private toastr: ToastrService,
    public appconfig: AppConfig,
    private sharedData: SharedDataService,
    public pipoDataService: PipoDataService,
    public wininfo: WindowInformationService,
    public CustomDropDown: CustomConfirmDialogModelComponent
  ) {
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
    this.userService.getUserDetail().then((data: any) => {
      this.USER_DATA = data?.result
      console.log("this.USER_DATA", data1, this.USER_DATA)
    });
    for (let index = 0; index < data1['default']?.length; index++) {
      this.CURRENCY_LIST.push({
        type: data1['default'][index]['value']
      })
    }
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
      },
      (error) => {
        console.log('error');
      }
    );
    this.config = {
      ...this.config,
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
    await this.pipoDataService.getPipoList('import').then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        this.pipolist = data;
      });
    });;

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

  onSubmitDebit(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.BUYER_NAME_LIST;
    e.form.value.currency = e.form.value?.currency?.type;
    e.form.value.file = 'import';
    console.log(e.form.value);
    this.documentService.getInvoice_No({
      debitNoteNumber:e.form.value.debitNoteNumber
    },'debitnotes').subscribe((resp:any)=>{
      console.log('debitNoteNumber Invoice_No',resp)
    if (resp.data.length==0) {
    this.documentService.addDebit(e.form.value).subscribe((res: any) => {
      this.toastr.success(`Credit Note Document Added Successfully`);
      let updatedData = {
        "debitNoteRef": [
          res.data._id,
        ],
      }
      this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData)
        .subscribe(
          (data) => {
            console.log(' credit Note document', this.pipourl1);
            console.log(data);
            this.router.navigate(['home/importDebit']);
          },
          (error) => {
            console.log('error');
          }
        );
    },
      (err) => console.log('Error adding pipo'));
    }else {
      this.toastr.error(`Please check this sb no. : ${e.form.value.debitNoteNumber} already exit...`);
    }});
  }
  CommercialNumber: any = [];
  storeCommercialNumber(id: any, commercialnumber) {
    console.log(this.CommercialNumber, 'CommercialNumber')
    if (!this.CommercialNumber.includes(commercialnumber)) {
      this.CommercialNumber.push(commercialnumber)
    }
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  MULTIPLE_DROP_DOWN: any = [];
  public onUploadSuccess(args: any): void {
    this.uploading = false;
    console.log('ARGS', args);
    console.log('DATA', args[1].data);
    this.pubUrl = args[1].publicUrl;
    this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      args[1].publicUrl
    );
    this.pipourl1 = args[1].data;
    this.piPoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      args[1].data
    );
    console.log('PIPO URL', this.piPoUrl);
    console.log(this.publicUrl);
    console.log(this.piPoUrl);
  }

  submit(e) {
    console.log('ajbkab');
    this.uploading = true;
    console.log(e[0].size);
    this.size = this.formatBytes(e[0].size);
    this.runProgressBar(e[0].size);
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
  onAddCourse(e) {
    console.log('fffff');
    const control = this.piPoForm.controls.paymentTerm as FormArray;
    control.push(this.initCourse());
  }

  removeAddress(i) {
    let control1 = this.piPoForm.controls.paymentTerm as FormArray;
    control1.removeAt(i);
  }
  BUYER_NAME_LIST:any=[];
  clickPipo(PI_PO_LIST) {
    var last_length = PI_PO_LIST.length - 1;
    var LAST_VALUE: any = PI_PO_LIST[last_length]?.value;
    console.log(PI_PO_LIST[last_length]?.value, 'clickPipoclickPipoclickPipo')
    console.log('line 2359', this.pipoSelect);
    this.pipoSelect = true;
    console.log('line 2361', this.pipoSelect);
    if (this.BUYER_NAME_LIST.includes(PI_PO_LIST[last_length]?.value?.id[1])==false) {
      this.BUYER_NAME_LIST.push(PI_PO_LIST[last_length]?.value?.id[1])
    }
    this.mainBene = PI_PO_LIST[last_length]?.value?.id[1];
    let x = LAST_VALUE?.pi_po_buyerName;
    let j = this.arrayData.indexOf(LAST_VALUE?.pi_po_buyerName);
    if (j == -1) {
      this.arrayData.push(x);
      this.pipoArr.push(LAST_VALUE?._id);
    } else {
      console.log('x');
    }
    console.log(this.arrayData, this.mainBene, 'mainBenemainBene');
    console.log('Array List', this.pipoArr);
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

}
