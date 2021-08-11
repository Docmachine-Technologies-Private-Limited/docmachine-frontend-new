import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['../../../sass/application.scss', './edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit, AfterViewInit {
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
  loginForm: FormGroup;
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
  constructor(@Inject(PLATFORM_ID) public platformId, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private userService: UserService, private router: Router, private toastr: ToastrService) {
    this.loadFromLocalStorage()
    console.log(this.authToken)
    this.headers = {
      Authorization: this.authToken,
    }

    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        url: `https://dm.uipep.com/v1/member/uploadImage`,
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



  ngOnInit(): void {

    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'][0])
          this.item = data['data'][0]
          this.isItem = true
          console.log(this.item)
          this.letterHead1 = data['data'][0].file[0]["Letter Head"]
          this.roundSeal1 = data['data'][0].file[1]["Round Seal"]
          this.forSeal1 = data['data'][0].file[2]["For Seal"]
          this.file1 = data['data'][0].file
          this.details = data['data'][0].bankDetails
          if (this.details.length > 1) {
            console.log("1")
            this.i = 1
            for (let j = 1; j < this.details.length; j++) {
              this.onAddCourse()
            }

          }
          //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });

    // this.menuForm = new FormGroup({
    //   name: new FormControl('', [
    //     Validators.required,
    //     Validators.maxLength(100)
    //   ]),
    //   description: new FormControl('', Validators.maxLength(255)),
    //   price: new FormControl('', [Validators.required, Validators.min(0)]),
    //   courses: new FormArray([this.initCourse()])
    // });

    this.loginForm = this.formBuilder.group({
      teamName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]],
      iec: ['', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$"), Validators.maxLength(10)]],
      adress: ['', Validators.required],
      phone: ['', Validators.required],
      caEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      chaEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gst: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){15}$"), Validators.maxLength(15)]],
      bankDetails: new FormArray([this.initCourse()])
    });


  }

  initCourse() {
    return new FormGroup({
      bank: new FormControl(''),
      bicAddress: new FormControl(''),
      accNumber: new FormControl(''),
      accType: new FormControl(''),
      currency: new FormControl('')
    });
  }

  initProduct() {
    return new FormGroup({
      product: new FormControl('')
    });
  }

  getCourses(form) {
    return form.get('bankDetails').controls;
  }

  // getProducts(form) {
  //   return form.get('products').controls;
  // }

  onAddCourse() {
    const control = this.loginForm.get('bankDetails') as FormArray;
    control.push(this.initCourse());
    if (this.i >= this.details.length) {
      this.details.push([])
    }
    this.i++

  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    //this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    //this.uploading = false;]
    console.log(args[1].data)
    console.log(Object.keys(args[1].data)[0])
    this.file.push(args[1].data)
    console.log(this.file)
    this.letterHead = false;
    this.roundSeal = false;
    this.forSeal = false;
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

  onSubmit() {
    console.log("1")
    console.log(this.loginForm.value)
    this.submitted = true
    this.isDisabled = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Invalid inputs, please check!');
      console.log("2")
      this.isDisabled = false;
      return;
    }
    if (this.file.length > 0) {
      console.log("11")
      this.loginForm.value.file = this.file
    }
    else {
      console.log("12")
      console.log(this.file1)
      this.loginForm.value.file = this.file1
    }

    this.loginForm.value.member = this.item.member
    console.log(this.loginForm.value)
    this.userService.updateTeam(this.loginForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'])
          this.toastr.success('Company details updated successfully.');
          this.router.navigate(['/home/dashboardNew']);
        },
        error => {
          this.toastr.error('Invalid inputs, please check!');
          console.log("error")
        });
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  edit() {
    this.editable = true;
  }

  ngAfterViewInit() {
    //   window['sidebarInit']();
    //   if (isPlatformBrowser(this.platformId)) {
    //     this.filePreview();
    //   }
  }

}
