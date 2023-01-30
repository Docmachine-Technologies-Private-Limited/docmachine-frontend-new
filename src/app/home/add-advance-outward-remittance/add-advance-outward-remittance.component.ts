import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { BoeBill } from "../../../model/boe.model";
import { IRAdvice } from "../../../model/irAdvice.model";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import { Subscription } from "rxjs";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';

import { ShippingBill } from "../../../model/shippingBill.model";
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { AppConfig } from "src/app/app.config";
import { DocumentService } from "../../service/document.service";
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-add-advance-outward-remittance',
  templateUrl: './add-advance-outward-remittance.component.html',
  styleUrls: ['./add-advance-outward-remittance.component.scss'],

})
export class AddAdvanceOutwardRemittanceComponent implements OnInit {
  LocationData: any = []
  bankDetail: any = []
  commodity: any = []
  buyer: string;
  bank: string;
  beneName: string;
  uploading: boolean = false;
  authToken: string;


  CurrencyData:any = ['INR','USD', 'EUR', 'GBP', 'CHF','AUD','CAD','AED','SGD','SAR','JPY']





  public type: string = "directive";
  public res;
  public size;
  public publicUrl;
  public sbNo = false;
  public boeNumber = false;
  public billNo = false;
  public pIpO = false;
  public override = false;
  public message = "";
  public documentType: string = '';
  public documentType1 = "";
  public piPoUrl:any='';
  public selectedDocumentType;
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  // ----------------------------------
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
  public config1: DropzoneConfigInterface;
  public config2: DropzoneConfigInterface;
  public config3: DropzoneConfigInterface;

  pipoForm:any= FormGroup;
  submitted = false;


  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    public appconfig: AppConfig,
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    public router: Router,
    private route: ActivatedRoute,
    public wininfo: WindowInformationService
  ) {
    this.loadFromLocalStorage();
    this.api_base = appconfig.apiUrl;
    this.getDropdownData()

  }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')
    this.file= this.route.snapshot.paramMap.get('doc_type');
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`
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


    // buyerName commodity doc

    this.pipoForm = this.formBuilder.group(
      {
        pi_poNo: new FormControl('', Validators.required),
        currency: new FormControl("",),
        amount: new FormControl("", Validators.required),
        incoterm: new FormControl("", Validators.required),
        lastDayShipment: new FormControl("", Validators.required),
        paymentTerm: new FormArray([this.initCourse()]),
        pcRefNo: new FormControl("",),
        date: new FormControl("", Validators.required),
        dueDate: new FormControl("",),
        location: new FormControl(null, Validators.required),
        quantityTerm: new FormArray([this.initQuantity()]),
      }
    );
  }


  initCourse() {
    return this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', [Validators.required]],
      amount: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  initQuantity() {
    return this.formBuilder.group({
      qty: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  //hiding info box
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';

  getDropdownData() {

    this.userService.getTeam()
      .subscribe(
        data => {
          this.commodity = data['data'][0]['commodity']
          this.LocationData = data['data'][0]['location']
          this.bankDetail = data['data'][0]['bankDetails']
        },
        error => {
          console.log("error")
        });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        this.benneDetail = res.data
      },
      (err) => console.log("Error", err)
    );


  }

  changepipo(value){
    this.documentService.getPipoByCustomer('import',value).subscribe(
      (res: any) => {
        this.pipoData = res.data
      },
      (err) => console.log("Error", err)
    );
    console.log('pipoData',this.pipoData);
  }

  

  get form() {
    return this.pipoForm.controls;
  }

  PipoSubmit(): void {

    this.submitted = true;

    console.log("this.pipoForm.invalid",this.pipoForm.invalid)
    console.log("this.pipoForm.invalid",this.pipoForm)

    if (this.pipoForm.invalid) {
      return;
    }

    if (this.file) {
      if (this.file == 'import') {
        // this.pipoForm.value.benneName = this.beneValue
      }
      else if (this.file == 'export') {
        this.pipoForm.value.buyerName = this.buyer
        this.pipoForm.value.commodity = this.commodityData
      }
      this.pipoForm.value.file = this.file

    }
    else {
      this.pipoForm.value.file = this.documentType1
    }

    if (this.documentType == 'PI') {
      this.pipoForm.value.doc = this.pipourl1
    }
    else if (this.documentType == 'PO') {
      this.pipoForm.value.doc1 = this.pipourl1
    }


    this.pipoForm.value.document = this.documentType

    this.documentService.addPipo(this.pipoForm.value).subscribe(
      (res) => {
        this.router.navigateByUrl("/home/pipo");
      },
      (err) => console.log("Error adding pipo")
    );
  }

  //  ------------------------- handle image upload------------------------------------------


  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }

  public onUploadInit(args: any): void {
    console.log("11111111111111111111111")
    console.log("onUploadInit:", args);
  }


  public onUploadSuccess(args: any): void {
    console.log("-----------------------> onUploadSuccess called")
    if (this.documentType !== "") {
      this.uploading = false;
      console.log("ARGS", args);
      console.log("DATA", args[1].data);
      console.log(args[1].data.boeNumber);
      console.log("jhsjshsjshjsh", args[1].data.billNo)
      console.log("Message Message", args[1].message);
      if (args[1].message == "This file already uploaded") {
        console.log("My Code")
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
        } else if (args[1].data.billNo) {
          this.res = new IRAdvice(args[1].data);
          this.billNo = true;
          console.log("jsjsjsjs", this.res);
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
      } else if (args[1].data.billNo) {
        console.log("Here data type", args[1].data);
        this.res = new IRAdvice(args[1].data);
        this.billNo = true;
        console.log("sjsjsjsj", this.res);
      }
      else {
        // this.res = new BoeBill(args[1].data);
        if (this.documentType === 'PI' || this.documentType === 'PO') {
          console.log("here comeee")
          this.pIpO = true;
          this.isUploaded = true
        }
        else if (this.documentType === 'tryPartyAgreement') {
          this.tryPartyAgreement = true;
        }
        else if (this.documentType === 'creditNote') {
          this.creditNote = true;
        }
        else if (this.documentType === 'swiftCopy') {
          this.swiftCopy = true;
        }
        else if (this.documentType === 'blCopyref') {
          this.blCopyref = true;
        }
        else if (this.documentType === 'blCopy') {
          this.blCopy = true;
        }
        else if (this.documentType === 'commercial') {
          this.commercial = true
        }
        else if (this.documentType === 'destruction') {
          this.destruction = true
        }
        else if (this.documentType === 'billOfExchange') {
          this.billOfExchange = true
        }
        else if (this.documentType === 'EBRC') {
          this.EBRC = true;
        }
        else if (this.documentType === 'debitNote') {
          this.debitNote = true;
        }
        else if (this.documentType === 'insuranceCopy') {
          this.insuranceCopy = true;
        }
        else if (this.documentType === 'lcCopy') {
          this.lcCopy = true;
        }
        else if (this.documentType === 'agreement') {
          this.agreement = true;
        }
        else if (this.documentType === 'opinionReport') {
          this.opinionReport = true;
        }
        else if (this.documentType === 'packingList') {
          this.packingList = true
        }
        else if (this.documentType === 'otherDoc') {
          this.otherDoc = true
        }
        else {
          this.other = true
          this.userService.updateManyPipo(this.pipoArr, this.documentType, args[1].data)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log(data)
                this.toastr.success('PI/PO updated successfully.');
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
      console.log(this.publicUrl);
      console.log("this.piPoUr this.piPoUr this.piPoUr", this.piPoUrl);
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

  // quantities() : FormArray {  
  //   return this.pipoForm.get("quantities") as FormArray  
  // }  

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

  }

  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  // ----------------------------- end handle image upload ----------------------------------


newQuantity(): FormGroup {  
  return this.formBuilder.group({  
    qty: '',  
    price: '',  
  })  
}  

  getCourses(form) {
    return form.get('paymentTerm').controls;
  }

  getQuantities(form) {
    return form.get('quantityTerm').controls;
  }


  addQuantity(e) {
    const control = this.pipoForm.controls.quantityTerm as FormArray;
    control.push(this.initQuantity());
  }

  removeQuantity(i) {
    let control = this.pipoForm.controls.quantityTerm as FormArray;
    control.removeAt(i);

  }
  
  onAddCourse(e) {
    const control = this.pipoForm.controls.paymentTerm as FormArray;
    control.push(this.initCourse());
  }

  removeAddress(i) {

    let control = this.pipoForm.controls.paymentTerm as FormArray;

    control.removeAt(i);

  }

}

// PROFORMA INVOICE

