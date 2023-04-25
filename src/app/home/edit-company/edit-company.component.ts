import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import * as data from '../../bank.json';
import * as data1 from '../../currency.json';
import { AppConfig } from '../../app.config';
import { WindowInformationService } from '../../service/window-information.service';
import $ from 'jquery'
import { DomSanitizer } from '@angular/platform-browser';
import { takeWhile, timer } from 'rxjs';
import { DocumentService } from '../../service/document.service';
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['../../../sass/application.scss', './edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public type: string = 'directive';
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, { static: true }) directiveRef?: DropzoneDirective;
  item: any;
  authToken: any;
  headers: any;
  file: Array<any> = [];
  loginForm: any = FormGroup;
  letterHead = false;
  roundSeal = false;
  forSeal = false;
  letterHeadDone = false;
  roundSealDone = false;
  forSealDone = false;
  public config: DropzoneConfigInterface;
  letterHead1: any;
  roundSeal1: any;
  forSeal1: any;
  fs: boolean = true;
  rs: boolean = true;
  lh: boolean = true;
  editable: boolean = false;
  isItem: boolean = false;
  submitted: boolean;
  isDisabled: boolean;
  file1: any;
  bankDetails: any;
  Details: any;
  details: any;
  i: number;
  k = 2;
  showLess = false;
  jsondata: any;
  dataJson: any;
  bankName:any = [];
  currencyName = [];
  toggle: boolean;
  dataJson1: any;
  jsondata1: any;
  toggle1: boolean;
  value = 100;
  value1: any;
  submitted1: boolean;
  z: any;
  api_base: any;
  l: number = 2;
  showLessLoc: boolean;
  m: number = 2;
  showLessCom: boolean;
  location: any = [];
  commodity: any = [];
  x: number;
  y: number;
  p: any;
  q: any;
  userData: any = [];
  TEXT_CHANGED: string = 'Details';
  UPDATED_DETAILS: any = [];
  VALIDATION_FORM: any = {
    adress: '',
    bankDetails: [],
    caEmail: '',
    chaEmail: '',
    commodity: [],
    file: [],
    gst: '',
    iec: '',
    location: [],
    phone: '',
    teamName: ''
  };
  CURRENCY_LIST: any = [];
  Account_Type: any = [{
    type: 'OD-over draft'
  }, {
    type: 'CC-cash credit'
  }, {
    type: 'CA-Current account'
  }, {
    type: 'EEFC - Exchange earner Foreign currency'
  }, {
    type: 'PCFC- packing credit Foreign currency'
  }, {
    type: 'EBRD- Bill discounting accoun'
  }];

  BANK_NAME_LIST: any = [];
  ADD_REMOVE_OPTION: any = {
    Location: [],
    Commodity: [],
    Bank_Details: []
  }
  constructor(@Inject(PLATFORM_ID) public platformId,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    public appconfig: AppConfig,
    private sanitizer: DomSanitizer,
    public docservice: DocumentService,
    public wininfo: WindowInformationService) {
    this.loadFromLocalStorage()
    this.api_base = appconfig.apiUrl;
    console.log(this.api_base)
    console.log(this.authToken)
    this.headers = {
      Authorization: this.authToken,
    }

    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        url: `${this.api_base}/member/uploadImage`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles: 'image/*,application/pdf',
        previewTemplate: '<div  class=\"dz-preview dz-file-preview\" style=\"text-align: right; margin-right:3px;\">\n <div class=\"dz-image\" style=\"text-align: right; margin-right:3px;\"> <img data-dz-thumbnail /></div>\n <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <i style=\"color: red; text-align: center;font-size: 30px;\" class=\"fa fa-exclamation-circle\"></i>\n  </div>\n</div>'
      };
    }

  }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(250, '.content-wrap');
    await this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      console.log("userData", this.userData)
      for (let index = 0; index < data1['default']?.length; index++) {
        this.CURRENCY_LIST.push({
          type: data1['default'][index]['value']
        })
      }
      console.log(this.CURRENCY_LIST, 'CURRENCY_LIST')
    });

    this.BANK_NAME_LIST = this.docservice.getBankNameList();
    console.log(this.BANK_NAME_LIST, 'BANK_NAME_LIST')
    this.jsondata = data['default'];
    this.dataJson = data['default']
    this.jsondata1 = data1['default'];
    this.dataJson1 = data1['default']
    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'][0])
          this.item = data['data'][0]
          this.UPDATED_DETAILS = this.item;
          delete this.UPDATED_DETAILS['updatedAt'];
          delete this.UPDATED_DETAILS['userId'];
          delete this.UPDATED_DETAILS['__v'];
          delete this.UPDATED_DETAILS['member'];

          if (this.UPDATED_DETAILS['Starhousecertificate_Details'] == undefined) {
            this.UPDATED_DETAILS['Starhousecertificate_Details'] = {
              CertificateNo: '',
              Issuesdate: '',
              ExpiryDate: '',
              file: ''
            };
          }
          this.iframeVisible = true;
          this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.UPDATED_DETAILS['Starhousecertificate_Details']?.file
          );
          this.isItem = true;
          console.log(this.item)
          // this.letterHead1 = data['data'][0].file[0]["Letter Head"]
          // this.roundSeal1 = data['data'][0].file[1]["Round Seal"]
          // this.forSeal1 = data['data'][0].file[2]["For Seal"]
          this.file1 = data['data'][0].file;
        },
        error => {
          console.log("error")
        });

    // this.loginForm = this.formBuilder.group({
    //   teamName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 _]+$")]],
    //   iec: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 _]{10}$"), Validators.maxLength(10)]],
    //   adress: ['', Validators.required],
    //   phone: ['', [Validators.required, Validators.pattern("^[0-9 _]{10}$"), Validators.maxLength(10)]],
    //   caEmail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    //   chaEmail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    //   gst: ['', [Validators.required, Validators.pattern("^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$"), Validators.maxLength(15)]],
    //   location: new FormArray([this.initLocation()]),
    //   commodity: new FormArray([this.initComo()]),
    //   bankDetails: new FormArray([this.initCourse()], Validators.required)
    // });
  }
  email_validation(key, value): any {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (value.match(validRegex)) {
      return true;
    } else {
      return `Please check your ${key} email is invalid`;
    }
  }
  IEC_validation(key, value) {
    var validRegex = /^[a-zA-Z0-9 _]{10}$/;
    if (value.match(validRegex)) {
      return true;
    } else {
      return `Please check your ${key} email is invalid`;
    }
  }
  phone_validation(key, value): any {
    var validRegex = /^[0-9 _]{10}$/;
    if (value.match(validRegex)) {
      return true;
    } else {
      return `Please check your ${key} email is invalid`;
    }
  }
  Edit(className1: any, className2: any) {
    this.TEXT_CHANGED = 'Update Details'
    $('.card').toggleClass('flipped');
    $(className1).css('display', 'none');
    $(className2).css('display', 'block');
    window.scroll(0, 0);
  }
  Update(className1: any, className2: any) {
    this.TEXT_CHANGED = 'Details'
    $('.card').toggleClass('flipped');
    $(className1).css('display', 'none');
    $(className2).css('display', 'block');
    window.scroll(0, 0);
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }
  uploading: boolean = false;
  iframeVisible: boolean = false;
  publicUrl: any = '';

  public onUploadError(args: any): void {
    //this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    //this.uploading = false;]
    console.log(args[1].data)
    this.file.push(args[1].data)
    console.log(this.file)
    this.letterHead = false;
    this.roundSeal = false;
    this.forSeal = false;

    this.uploading = false;
    this.iframeVisible = true;
    this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      args[1].data
    );
    console.log(this.publicUrl, 'publicUrl')
    if (Object.keys(args[1].data)[0] == 'Letter Head') {
      this.letterHeadDone = true;
    }
    else if (Object.keys(args[1].data)[0] == 'Round Seal') {
      this.roundSealDone = true;
    }
    else {
      this.forSealDone = true;
    }

  }
  submit(e) {
    this.uploading = true;
    console.log(e[0].size, 'ajbkab')
    this.runProgressBar(e[0].size);
  }
  public a = 10;
  width: any = 0;

  runProgressBar(value) {
    console.log(this.config, 'directiveRef');
    console.log(value / 1000);
    timer(0, value / 1000)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });
  }
  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
  public sending(args: any, value) {
    args[2].append('fileType', value);
    if (value == 'Letter Head') {
      this.lh = false
      this.letterHead = true;
    }
    else if (value == 'Round Seal') {
      this.rs = false
      this.roundSeal = true;
    }
    else {
      this.fs = false
      this.forSeal = true;
    }
  }
  get f() { return this.loginForm.controls; }

  onSubmit(id) {
    var validationData = this.getNonEmptyObj(this.UPDATED_DETAILS);
    var location_validation = this.getNonEmptyObj_2(this.UPDATED_DETAILS, 'location');
    var Commodity_validation = this.getNonEmptyObj_2(this.UPDATED_DETAILS, 'commodity');
    var Bank_Details_validation = this.getNonEmptyObj_2(this.UPDATED_DETAILS, 'bankDetails');
    if (validationData == true) {
      if (location_validation == true && Commodity_validation == true && Bank_Details_validation == true) {
        var caEmail: any = this.email_validation('caEmail', this.UPDATED_DETAILS['caEmail']);
        var chaEmail: any = this.email_validation('chaEmail', this.UPDATED_DETAILS['chaEmail']);
        if (caEmail == true && chaEmail == true) {
          var chaEmail: any = this.IEC_validation('iec', this.UPDATED_DETAILS['iec']);
          this.UPDATED_DETAILS['file'] = this.file;
          this.UPDATED_DETAILS['Starhousecertificate_Details']['file'] = this.publicUrl?.changingThisBreaksApplicationSecurity;          
          console.log(this.UPDATED_DETAILS, 'this.UPDATED_DETAILS');
          this.userService.updateTeamById(this.UPDATED_DETAILS, id).subscribe(
            data => {
              console.log("king123")
              console.log(data['data'])
              this.toastr.success('Company details updated successfully.');
              this.Update('.back', '.front');
              this.ngOnInit();
            },
            error => {
              this.toastr.error('Invalid inputs, please check!');
              console.log("error")
            });
        } else {
          var error = caEmail == true ? chaEmail : caEmail
          this.toastr.error(error);
        }
      } else {
        if (location_validation !== true) {
          for (const key in location_validation) {
            this.toastr.error(location_validation[key]);
          }
        } else if (Commodity_validation !== true) {
          for (const key in Commodity_validation) {
            this.toastr.error(Commodity_validation[key]);
          }
        } else if (Bank_Details_validation !== true) {
          for (const key in Bank_Details_validation) {
            this.toastr.error(Bank_Details_validation[key]);
          }
        }
      }
    } else {
      for (const key in validationData) {
        this.toastr.error(validationData[key]);
      }
    }
  }
  letterheadUrl:any=''
  letterheadView(url:any){
   this.letterheadUrl=url;
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }
  add_more_Bank(i: any) {
    this.UPDATED_DETAILS.bankDetails.push({
      bank: '',
      accNumber: '',
      bicAddress: '',
      accType: '',
      currency: '',
      BankUniqueId: '',
    })
    this.ADD_REMOVE_OPTION.Bank_Details[i + 1] = (true);
  }
  remove_more_Bank(index: any) {
    if (index != 0) {
      this.UPDATED_DETAILS.bankDetails.splice(index, 1);
      this.ADD_REMOVE_OPTION.Bank_Details.splice(index, 1);
    }
  }
  add_location(i) {
    this.UPDATED_DETAILS.location.push({ loc: '' })
    this.ADD_REMOVE_OPTION.Location[i + 1] = (true);
  }
  remove_location(index: any) {
    if (index != 0) {
      this.UPDATED_DETAILS.location.splice(index, 1);
      this.ADD_REMOVE_OPTION.Location.splice(index, 1);
    }
  }
  add_commodity(i) {
    this.UPDATED_DETAILS.commodity.push({ como: '' })
    this.ADD_REMOVE_OPTION.Commodity[i + 1] = (true);
  }
  remove_commodity(index: any) {
    if (index != 0) {
      this.UPDATED_DETAILS.commodity.splice(index, 1);
      this.ADD_REMOVE_OPTION.Commodity.splice(index, 1);
    }
  }
  add_Form_value(key, value) {
    this.UPDATED_DETAILS[key] = value;
  }
  add_ArrayForm_value(array_key, index, key, value) {
    this.UPDATED_DETAILS[array_key][index][key] = value;
  }
  add_ArrayForm_push(array_key, key, value) {
    this.UPDATED_DETAILS[array_key][key] = (value);
  }
  getNonEmptyObj(obj) {
    var temp: any = [];
    var obj = obj;
    for (const key in obj) {
      if (obj[key] === '') {
        temp[key] = `Please check ${key} input field value is required...`;
      }
    }
    return Object.keys(temp).length == 0 ? true : temp;
  };
  getNonEmptyObj_2(obj, id) {
    var temp: any = [];
    var obj = obj;
    for (const iterator of obj[id]) {
      for (let key in iterator) {
        if (iterator[key] === '') {
          temp[key] = `Please check ${id}_${key} input field value is required...`;
        }
      }
    }
    return Object.keys(temp).length == 0 ? true : temp;
  };
  ID: number = -1;
  view_bank_details(id) {
    this.ID = id;
  }
  fileinput:any=''
  letterheadUpload(f:any){
    this.fileinput=f;
  }
  uploadletterhead(id) {
    var input = this.fileinput.target;
    var reader = new FileReader();
    reader.onload = (event:any)=> {
      var dataUri = event.target.result;
      this.userService.updateTeamById({letterHead:dataUri}, id).subscribe(
        data => {
          console.log("king123")
          this.toastr.success('update letter head successfully.');
          this.Update('.back', '.front');
          this.ngOnInit();
        },
        error => {
          this.toastr.error('Invalid inputs, please check!');
          console.log("error")
        });
    };
    reader.onerror = function (event:any) {
      console.log("File could not be read: " + event.target.error.code);
    };
    reader.readAsDataURL(input.files[0]);
  }
  bankClick(e, i) {
    this.bankName[i] = e;
    this.UPDATED_DETAILS.bankDetails[i]['BankUniqueId']=e?.BankUniqueId
    console.log(this.bankName,e,'this.loginForm.value.bankDetails.')    
  }
}
