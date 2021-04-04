import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import {ToastrService} from 'ngx-toastr';
import { DropzoneDirective, DropzoneConfigInterface} from 'ngx-dropzone-wrapper';
import {Subscription} from 'rxjs';
// import {DashboardService} from './dashboard-service';
// import { TabsComponent } from './tabs.component';
// import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShippingBill } from '../../../model/shippingBill.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DocumentService } from '../../service/document.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['../../../sass/application.scss','./upload.component.scss']
})
export class UploadComponent implements OnInit, AfterViewInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild('inputName', {static: true}) public inputRef: ElementRef;
  public type: string = 'directive';
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, {static: true}) directiveRef?: DropzoneDirective;
  public urls: any = [];
  public data1 : any = [];
  public res;
  public name;
  public uploading = false;
  public size;
  public formData;
  
  private subscription: Subscription;

  public config: DropzoneConfigInterface;
  shippingForm: FormGroup;
  authToken: string;
  headers: any;

  constructor( @Inject(PLATFORM_ID) public platformId, private formBuilder: FormBuilder, private http: HttpClient, private documentService: DocumentService,  public router: Router,) {
    this.loadFromLocalStorage()
    console.log(this.authToken)
    this.headers = {
      Authorization: this.authToken
    }

    
    if (isPlatformBrowser(this.platformId)) {
      this.config = {
        url: `http://localhost:3000/v1/documents/uploadFile`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles: 'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate: '<div  class=\"dz-preview dz-file-preview\" style=\"text-align: right; margin-right:3px;\">\n <div class=\"dz-image\" style=\"text-align: right; margin-right:3px;\"> <img data-dz-thumbnail /></div>\n <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <i style=\"color: red; text-align: center;font-size: 30px;\" class=\"fa fa-exclamation-circle\"></i>\n  </div>\n</div>'
      };
    }
   }
   public a = 10;
   width : any=0;

  runProgressBar(value){
    
    timer(0, 100)
    .pipe(
        takeWhile(() => 
          this.isWidthWithinLimit()
       )).subscribe(()=>{
      this.width=this.width+1;
       }
    )
    
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }


  isWidthWithinLimit(){
    if(this.width===100){
      return false;
    }else{
      return true;
    }
  }

 

  ngOnInit(): void {
    
    console.log(this);
    this.config = {
      ...this.config
    };
  }

  public onSubmit(e){
    console.log("LENGTH",this.res.invoices.length)
    console.log(e)
    console.log(e.form.value['sno1'])
    let invoices = []
    for(let i=0; i<this.res.invoices.length; i++) {
         invoices.push({
           "sno": e.form.value[`sno${i+1}`],
           "invoiceno": e.form.value[`invoiceno${i+1}`],
           "amount": e.form.value[`amount${i+1}`],
           "currency": e.form.value[`currency${i+1}`]
         })
    }
    console.log(invoices)
    e.form.value.invoices =  invoices
    // e.form.value._id = this.res._id
    console.log(e.form.value)
    // this.formData = new ShippingBill(e.form.value)
    // console.log(this.formData)
    this.documentService.updateMaster(e.form.value,this.res._id)
            .subscribe(
                data => {
                    console.log("king123")
                    console.log(data)
                    this.router.navigate(['home/dashboard']);
                    //this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    console.log("error")
                });
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any): void {
    this.uploading = false;
    console.log(args)
    this.res = new ShippingBill(args[1].data)
    console.log(this.res)

  }
  submit(e) {
    this.uploading = true;
    console.log(e[0].size)
    this.size = this.formatBytes(e[0].size);

    this.runProgressBar(e[0].size);
    
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
  
  ngAfterViewInit() {
    window['sidebarInit']();
    if (isPlatformBrowser(this.platformId)) {
      this.filePreview();
    }
  }

  public filePreview() {
    console.log("inside")
    const images = this.que.selectedFiles;
    // is images a true array and not empty
    if (Array.isArray(images) && images.length > 0) {
      images.forEach(image => {
        // cuting out the extension from filename
        let extension: any = image.fileName.split('.');
        extension = extension.slice(extension.length - 1, extension.length).join('.');
        const {accepted, size, height, width, type, dataURL, upload} = image.file;
        const mockFile = {
          accepted,
          size,
          type,
          dataURL: dataURL || image.location,
          name: upload.filename
        };
        const dropzoneInstance = this.directiveRef.dropzone();
        console.log(dropzoneInstance);
        dropzoneInstance.emit('addedfile', mockFile);
        dropzoneInstance.options.maxFiles = 5;
        dropzoneInstance.createThumbnailFromUrl(mockFile, image.file.width || '400', image.file.height || '400', 'contain', true, function (thumbnail) {
            dropzoneInstance.files.push(thumbnail);
            dropzoneInstance.emit('thumbnail', mockFile, thumbnail);
          },
          'anonymous'
        );
        dropzoneInstance.emit('complete', mockFile);
      });
    }
  }

  


  
}
