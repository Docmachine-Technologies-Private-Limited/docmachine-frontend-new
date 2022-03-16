import { BoeBill } from "./../../../model/boe.model";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { FormArray, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import * as data1 from '../../currency.json';
// import {ToastrService} from 'ngx-toastr';
import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import { Subscription } from "rxjs";
// import {DashboardService} from './dashboard-service';
// import { TabsComponent } from './tabs.component';
// import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { ShippingBill } from "../../../model/shippingBill.model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { DocumentService } from "../../service/document.service";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../service/user.service";
import { MatSelectModule } from '@angular/material/select';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from "src/app/app.config";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["../../../sass/application.scss", "./upload.component.scss"],
})
export class UploadComponent implements OnInit, AfterViewInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild("inputName", { static: true }) public inputRef: ElementRef;
  public type: string = "directive";
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  docu: any;
  public urls: any = [];
  chosenMod: string = "";
  public data1: any = [];
  public res;
  public name;
  public uploading = false;
  public size;
  public formData;
  public publicUrl;
  public sbNo = false;
  public boeNumber = false;
  public pIpO = false;
  public override = false;
  public message = "";
  public documentType = "";
  public documentType1 = "";
  public piPoUrl;
  public selectedDocumentType;
  public benneDetail: any = [];
  public buyerDetail: any = [];
  private subscription: Subscription;
  public selectedBenne = "";
  public beneSelect1: string;
  public selectCombo;
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
  shippingForm: FormGroup;
  // loginForm: FormGroup;
  public submitted = false;
  authToken: string;
  headers: any;
  closeResult: string;

  piPoForm = new FormGroup({
    pi_poNo: new FormControl("", [
      Validators.required,
      Validators.minLength(4)]),
    currency: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    incoterm: new FormControl("", Validators.required),
    lastDayShipment: new FormControl("", Validators.required),
    paymentTerm: new FormArray([this.initCourse()], Validators.required),
    pcRefNo: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    dueDate: new FormControl("", Validators.required),
    location: new FormControl("", Validators.required),
    beneName: new FormControl("",Validators.required)
  });


  // payment = this.formBuilder.group({
  //   paymentTerm: new FormArray([this.initCourse()], Validators.required)
  // });

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
    buyerAdrs: ['', Validators.required]
  });

  pipourl1: any;
  thirdParty: boolean = false;
  creditNote: boolean = false;
  debitNote: boolean = false;
  insuranceCopy: boolean = false;
  lcCopy: boolean = false;
  agreement: boolean = false;
  opinionReport: boolean = false;
  item3: any;
  pipoArray: any = [];
  beneValue: any = 'Select Beneficiary';
  buyerValue: any = 'Select Buyer';
  pipoValue: any = 'Select PI/PO'
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

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     name:['',Validators.required]
  //   });
  // }
  get f(){return this.loginForm.controls;}
  constructor(
    @Inject(PLATFORM_ID) public platformId,

    private formBuilder: FormBuilder,
    private http: HttpClient,
    private documentService: DocumentService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public appconfig: AppConfig
  ) {
    this.api_base = appconfig.apiUrl;
    console.log(this.api_base)
    this.loadFromLocalStorage();
    console.log(this.authToken);
    this.headers = {
      Authorization: this.authToken,
    };

    if (isPlatformBrowser(this.platformId)) {
      console.log("asdkhsajvdsug");
      this.config = {
        url: `${this.api_base}/documents/uploadFile`,
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
      this.config2 = {
        url: `${this.api_base}/documents/uploadFile1`,
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
      this.config3 = {
        url: `${this.api_base}/documents/uploadFile`,
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
      this.config1 = {
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
          console.log("Benne Detail22222", this.benneDetail);
      },
      (err) => console.log("Error", err)
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log("Benne Detail111", this.buyerDetail);
      },
      (err) => console.log("Error", err)
    );
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
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

  ngOnInit(): void {
    this.jsondata1 = data1['default'];
    this.dataJson1 = data1['default']
    this.jsondata2 = data1['default'];
    this.dataJson2 = data1['default']
    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("llllllllllllllllllllllllllllllll")
          console.log(data['data'][0])
          this.location = data['data'][0]['location']
          this.commodity = data['data'][0]['commodity']
          console.log(this.location)
          console.log(this.commodity)
          //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });
    console.log(this.route.snapshot.paramMap.get('document'))
    this.file = this.route.snapshot.paramMap.get('file')
    console.log(this.file)
    this.docu = this.route.snapshot.paramMap.get('document')
    if (this.docu == 'pipo') {
      this.documentType1 = this.route.snapshot.paramMap.get('file')
    }
    if (this.docu == 'sb') {
      this.documentType1 = 'export'
      this.documentType = 'sb'
      this.documentType1 = 'export'
      this.pipoOut = this.route.snapshot.paramMap.get('pipo')
      this.beneOut = this.route.snapshot.paramMap.get('bene')
      let x = "PI" + "-" + this.pipoOut + "-" + this.beneOut
      this.arrayData.push(x)
      this.pipoArr.push(this.pipoOut)
    }
    else if (this.docu == 'boe') {
      this.documentType1 = 'import'
      this.documentType = 'boe'
      this.documentType1 = 'import'
      this.pipoOut = this.route.snapshot.paramMap.get('pipo')
      this.beneOut = this.route.snapshot.paramMap.get('bene')
      let x = "PI" + "-" + this.pipoOut + "-" + this.beneOut
      this.arrayData.push(x)
      this.pipoArr.push(this.pipoOut)

    }
    //console.log(this.route.snapshot.paramMap.get('document'))
    this.config = {
      ...this.config,
    };

    this.config1 = {
      ...this.config1,
    };

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data),
          console.log("Benne Detail3", this.benneDetail);
      },
      (err) => console.log("Error", err)
    );
    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log("Benne Detail4", this.buyerDetail);
      },
      (err) => console.log("Error", err)
    );
    console.log("DOCUMENT TYPE", this.documentType);
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response", res), (this.item3 = res.data);

      },
      (err) => console.log(err)
    );
  }

  public onSubmit(e) {
    console.log("sjfskfbu");
    console.log("LENGTH", this.res.invoices.length);
    console.log(e);
    console.log(e.form.value["sno1"]);
    let invoices = [];
    if (this.file) {
      e.form.value.file = this.file
    }
    else {
      e.form.value.file = this.documentType1
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
    e.form.value.buyerName = this.mainBene;
    e.form.value.pipo = this.pipoArr

    // e.form.value._id = this.res._id
    console.log(e.form.value);
    // this.formData = new ShippingBill(e.form.value)
    // console.log(this.formData
    if (this.message == "This file already uploaded") {
      console.log("inside file already exist");
      this.documentService
        .updateMasterBySb(e.form.value, e.form.value.sbno)
        .subscribe(
          (data) => {
            console.log(".kjsakjsdkdsjYYYYY");
            console.log("king123");
            console.log("DATA", data);
            this.message = "";
            this.router.navigate(["home/dashboardNew"]);
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log("error");
          }
        );
    } else {
      this.documentService.updateMaster(e.form.value, this.res._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(data);
          this.router.navigate(["home/dashboardNew"]);
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }

  public submitType() {
    console.log("This is the document type", this.documentType);
  }

  changeCheckbox(value) {
    let j = this.pipoArray.indexOf(value)
    if (j == -1) {
      this.pipoArray.push(value)
    }
    else {
      this.pipoArray.splice(j, 1)
    }

    console.log(this.pipoArray)
  }

  searchCurrency(e, i) {
    this.y = i
    this.toggle1 = true;
    console.log(e)
    this.jsondata1 = []
    for (let data of this.dataJson1) {
      if (data.currency.toLowerCase().includes(e.toLowerCase())) {
        console.log('1')
        this.jsondata1.push(data)
      }


    }
    console.log(this.jsondata1)
    console.log(this.currencyName.length)
  }
  currencyClick(e, i) {
    this.currencyName[i] = e
    console.log(this.currencyName)

    this.toggle1 = false;


  }
  searchCurrency1(e, i) {
    this.z = i
    this.toggle2 = true;
    console.log(e)
    this.jsondata2 = []
    for (let data of this.dataJson2) {
      if (data.currency.toLowerCase().includes(e.toLowerCase())) {
        console.log('1')
        this.jsondata2.push(data)
      }


    }
    console.log(this.jsondata2)
    console.log(this.currencyName1.length)
  }
  currencyClick1(e, j) {
    this.currencyName1[j] = e
    console.log(this.currencyName1)

    this.toggle2 = false;


  }
  public onSubmitBoe(e) {
    console.log(this.selectCombo)
    console.log("asjbakujfbkasjfbkuh");
    console.log(this.pubUrl)
    console.log(this.documentType)
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr
    if (this.file) {
      e.form.value.file = this.file
    }
    else {
      e.form.value.file = this.documentType1
    }
    e.form.value.benneName = this.mainBene
    // this.formData = new ShippingBill(e.form.value)
    // console.log(this.formData)
    if (this.message == "This file already uploaded") {
      console.log("akshdkuashdakuhdzzz");
      console.log("inside file already exist");
      this.documentService
        .updateBoeByBoe(e.form.value, e.form.value.boeNumber)
        .subscribe(
          (data) => {
            console.log("king123");
            console.log(data);
            this.message = "";
            this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
              .subscribe(
                data => {
                  //this.pipoData[`${this.pipoDoc}`] = args[1].data
                  console.log("king123")
                  console.log(data)
                  this.toastr.success('Boe added successfully.');
                  this.router.navigate(["home/dashboardNew"]);

                  // this.docTog = false
                  // this.toggle = false
                  // this.toggle2 = false
                  // this.toastr.success('Company details updated sucessfully.');
                  // this.router.navigate(['/home/dashboardNew']);
                },
                error => {
                  // this.toastr.error('Invalid inputs, please check!');
                  console.log("error")
                });

            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log("error");
          }
        );
    } else {
      console.log("jhsfjavfjhavfkhvfhavkashfbjh");
      e.form.value.pipo = this.pipoArr
      this.documentService.updateBoe(e.form.value, this.res._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(data);
          this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)
                this.toastr.success('Boe added successfully.');
                this.router.navigate(["home/dashboardNew"]);
                // this.docTog = false
                // this.toggle = false
                // this.toggle2 = false
                // this.toastr.success('Company details updated sucessfully.');
                // this.router.navigate(['/home/dashboardNew']);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });

          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }

  public onSubmitPipo() {
    console.log("aaaasss",this.piPoForm.value);
    if (this.file) {
      if (this.file == 'import') {
        this.piPoForm.value.benneName = this.beneValue
      }
      else if (this.file == 'export') {
        this.piPoForm.value.buyerName = this.buyerValue
        this.piPoForm.value.commodity = this.comoData
        console.log("comossss",this.piPoForm.value.commodity)
      }
      this.piPoForm.value.file = this.file

    }
    else {
      this.piPoForm.value.file = this.documentType1
    }

    if (this.documentType == 'PI') {
      this.piPoForm.value.doc = this.pipourl1
    }
    else if (this.documentType == 'PO') {
      this.piPoForm.value.doc1 = this.pipourl1
    }
    if (this.documentType1 == 'import' ) {
      this.piPoForm.value.benneName = this.beneValue
    }
    else if (this.documentType1 == 'export') {
      this.piPoForm.value.buyerName = this.buyerValue
      this.piPoForm.value.commodity = this.comoData
    }
    this.piPoForm.value.document = this.documentType

    console.log(this.piPoForm.value);
    this.documentService.addPipo(this.piPoForm.value).subscribe(
      (res) => {
        console.log("Pipo Added Successfully");
        if (this.documentType1 == 'import' && this.documentType == 'PI'){
        this.router.navigateByUrl("/home/pipoDoc");}
        else if( this.documentType1 == 'import' && this.documentType == 'PO'){
          this.router.navigateByUrl("/home/pipoDoc");
        }
        else if (this.documentType1 == 'export' && this.documentType == 'PI') {
          this.router.navigateByUrl("/home/pipoDocExport");
        }
        else if (this.documentType1 == 'export' && this.documentType == 'PO') {
          this.router.navigateByUrl("/home/pipoDocExport");
        }
        else if (this.documentType1 == 'export' && this.documentType == 'PO') {
          this.router.navigateByUrl("/home/pipoDocExport");
        }
        else{
          this.router.navigateByUrl("/home/dashboardNew");
        }
      },
      (err) => console.log("Error adding pipo")
    );
  }

  onSubmitThird(e) {
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    console.log(e.form.value);
    this.documentService.addThird(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Third Party Document Added Successfully`);
        console.log("Third Party Document Added Successfully");
        // this.router.navigateByUrl("/home/dashboardNew");
        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/try-Party");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
      },
      (err) => console.log("Error adding pipo")
    );
  }

  onSubmitCredit(e){
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    console.log(e.form.value);
    this.documentService.addCredit(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Credit Note Document Added Successfully`);
        console.log("Credit Note Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/creditNote");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );
  }

  // Debit Note Submit button

  onSubmitDebit(e){
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    // e.form.value.currency = this.currency;
    console.log(e.form.value);
    this.documentService.addDebit(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Debit Note Document Added Successfully`);
        console.log("Debit Note Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/debitNote");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );

  }

  onSubmitInsurance(e){
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    // e.form.value.currency = this.currency;
    console.log(e.form.value);
    this.documentService.addInsurance(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Insurance Document Added Successfully`);
        console.log("Insurance Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/insuranceDocument");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );

  }

  onSubmitLetterLC(e){

    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    // e.form.value.currency = this.currency;
    console.log(e.form.value);
    this.documentService.addLetterLC(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Letter Of Credit Document Added Successfully`);
        console.log("Letter of Credit Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/letterOfCredit-LC");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );

  }

  onSubmitMasterService(e){
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    // e.form.value.currency = this.currency;
    console.log(e.form.value);
    this.documentService.addMasterService(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Master Service Document Added Successfully`);
        console.log("Master Service Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/master-services");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );
  }


  onSubmitOpinionReport(e){
    console.log(e.form.value);
    console.log(e.form.value);
    e.form.value.pipo = this.pipoArr;
    e.form.value.doc = this.pipourl1;
    e.form.value.buyerName = this.mainBene;
    // e.form.value.currency = this.currency;
    console.log(e.form.value);
    this.documentService.addOpinionReport(e.form.value).subscribe(
      (res) => {
        this.toastr.success(`Opinion Report Document Added Successfully`);
        console.log("Opinion Report Document Added Successfully");

        this.userService.updateManyPipo(this.pipoArr, this.documentType, this.pubUrl)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)

                this.router.navigateByUrl("/home/opinion-report");
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        // this.router.navigateByUrl("/home/dashboardNew");
      },
      (err) => console.log("Error adding pipo")
    );
  }

  public onUploadInit(args: any): void {
    console.log("onUploadInit:", args);
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    if (this.documentType !== "") {
      this.uploading = false;
      console.log("ARGS", args);
      console.log("DATA", args[1].data);
      console.log(args[1].data.boeNumber);
      if (args[1].message == "This file already uploaded") {
        this.message = args[1].message;
        this.override = true;
        if (args[1].data.sbno) {
          this.res = new ShippingBill(args[1].data);
          this.sbNo = true;
          console.log(this.res);
        } else if (args[1].data.boeNumber) {
          this.res = new BoeBill(args[1].data);
          this.boeNumber = true;
          console.log(this.res);
        }
      } else if (args[1].data.sbno) {
        console.log("Here data type", args[1].data);
        this.res = new ShippingBill(args[1].data);
        this.sbNo = true;
        console.log(this.res);
      } else if (args[1].data.boeNumber) {
        console.log("Here data type", args[1].data);

        this.res = new BoeBill(args[1].data);
        this.boeNumber = true;
        console.log(this.res);
      } else {
        // this.res = new BoeBill(args[1].data);
        if (this.documentType === 'PI' || this.documentType === 'PO') {
          this.pIpO = true;
        }
        else if (this.documentType === 'thirdParty') {
          this.thirdParty = true;
        }
        else if (this.documentType === 'creditNote'){
          this.creditNote = true;
        }
        else if (this.documentType === 'debitNote'){
          this.debitNote = true;
        }
        else if (this.documentType === 'insuranceCopy'){
          this.insuranceCopy = true;
        }
        else if (this.documentType === 'lcCopy'){
          this.lcCopy = true;
        }
        else if (this.documentType === 'agreement'){
          this.agreement = true;
        }
        else if (this.documentType === 'opinionReport'){
          this.opinionReport = true;
        }
        else {
          this.other = true
          this.userService.updateManyPipo(this.pipoArr, this.documentType, args[1].data)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)
                this.toastr.success('PI/PO updated successfully.');
                // this.docTog = false
                // this.toggle = false
                // this.toggle2 = false
                // this.toastr.success('Company details updated successfully.');
                // this.router.navigate(['/home/dashboardNew']);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
        }

        console.log(this.res);
      }
      this.pubUrl = args[1].publicUrl
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].publicUrl
      );
      this.pipourl1 = args[1].data;
      this.piPoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].data
      );
      console.log("PIPO URL", this.piPoUrl);
      console.log(this.publicUrl);
      console.log(this.piPoUrl);
      console.log(this.res);
    } else {
      console.log("Document type not given");
    }

    console.log("Selected Document type", this.selectedDocumentType);
  }

  submit(e) {
    if (this.documentType !== "") {
      console.log("ajbkab");
      this.uploading = true;
      console.log(e[0].size);
      this.size = this.formatBytes(e[0].size);
      //document.getElementById("uploadError").style.display = "none";

      this.runProgressBar(e[0].size);
    } else {
      console.log("Document type not given");
      document.getElementById("uploadError").style.display = "block";
    }
  }

  getFormDetail() {
    console.log(this.piPoForm.value);
    console.log("SELECTED BENNE", this.selectedBenne);
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


  public onOverride() {
    this.override = false;
  }

  public beneSelect(e) {
    console.log(e)
  }



  initCourse() {
    return this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(11)]],
      type: ['', [Validators.required]],
      amount: ['', Validators.required]
    });
  }

  initProduct() {
    return new FormGroup({
      product: new FormControl('')
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
    console.log("fffff")
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

  clickBene(value) {
    console.log('hhddh')
    this.beneValue = value
  }

  clickBuyer(value) {
    console.log('hhddh')
    this.buyerValue = value
  }

  clickComo(a) {
    let j = this.comoData.indexOf(a)
    if (j == -1) {
      this.comoData.push(a)
    }
  }

  clickPipo(a, b, c) {
    this.mainBene = c
    let x = a + "-" + b + "-" + c
    let j = this.arrayData.indexOf(x)
    if (j == -1) {
      this.arrayData.push(x)
      this.pipoArr.push(b)
    }
    else {
      console.log("x")
    }




    console.log(this.arrayData)


  }

  removePipo(i) {
    this.arrayData.splice(i, 1)
    this.pipoArr.splice(i, 1)
  }

  removeComo(i) {
    this.comoData.splice(i, 1)
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open1(content1) {
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
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

    console.log(this.loginForm.value)

    this.beneValue = this.loginForm.value.beneName
    this.userService.creatBene(this.loginForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          this.userService.getBene(1).subscribe(
            (res: any) => {
              (this.benneDetail = res.data),
                console.log("Benne Detail5", this.benneDetail);
              this.toastr.success("New Beneficiary added successfully")
              this.modalService.dismissAll();
            },
            (err) => console.log("Error", err)
          );


        },
        error => {
          console.log("error")
        });

  }

  onSubmitBuyer() {
    console.log(this.buyerForm.value)

    this.buyerValue = this.buyerForm.value.buyerName
    this.userService.creatBuyer(this.buyerForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          this.userService.getBuyer(1).subscribe(
            (res: any) => {
              (this.buyerDetail = res.data),
                console.log("Buyer Detail", this.buyerDetail);
              this.toastr.success("New Buyer added successfully")
              this.modalService.dismissAll();
            },
            (err) => console.log("Error", err)
          );


        },
        error => {
          console.log("error")
        });
  }

  ngAfterViewInit() {
    // window["sidebarInit"]();
    // if (isPlatformBrowser(this.platformId)) {
    //   this.filePreview();
    // }
  }
}
