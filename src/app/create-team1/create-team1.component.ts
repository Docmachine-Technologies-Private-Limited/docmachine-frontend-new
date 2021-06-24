
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-create-team1',
  templateUrl: './create-team1.component.html',
  styleUrls: ['./create-team1.component.scss']
})
export class CreateTeam1Component implements OnInit, AfterViewInit {
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
  constructor(@Inject(PLATFORM_ID) public platformId, private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loadFromLocalStorage()
    console.log(this.authToken)
    this.headers = {
      Authorization: this.authToken,
    }

    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        url: `http://localhost:3000/v1/member/uploadImage`, //`http://localhost:3000/v1/member/uploadImage`
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
    this.loginForm = this.formBuilder.group({
      teamName: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      iec: ['', Validators.required],
      adress: ['', Validators.required],
      phone: ['', Validators.required],
      caEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      chaEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gst: ['', Validators.required],
      acNo: ['', Validators.required],
      letterHead: ['', Validators.required],
      roundSeal: ['', Validators.required],
      forSeal: ['', Validators.required],
    });
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
      this.letterHead = true;
    }
    else if (value == 'Round Seal') {
      this.roundSeal = true;
    }
    else {
      this.forSeal = true;
    }
  }

  onSubmit() {
    this.loginForm.value.file = this.file
    this.userService.creatTeam(this.loginForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data']._id)
          this.item = data
          this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }


  ngAfterViewInit() {
    //   window['sidebarInit']();
    //   if (isPlatformBrowser(this.platformId)) {
    //     this.filePreview();
    //   }
  }

}
