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
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
  public piPoUrl;
  public selectedDocumentType;
  public benneDetail: any = [];
  private subscription: Subscription;
  public selectedBenne = "";
  public beneSelect1: string;
  public selectCombo;

  public config: DropzoneConfigInterface;
  public config1: DropzoneConfigInterface;
  shippingForm: FormGroup;
  authToken: string;
  headers: any;

  piPoForm = new FormGroup({
    pi_poNo: new FormControl("", [
      Validators.required,
      Validators.minLength(4)]),
    benneName: new FormControl("", Validators.required),
    currency: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    incoterm: new FormControl("", Validators.required),
    lastDayShipment: new FormControl("", Validators.required),
    paymentTerm: new FormControl("", Validators.required),
    pcRefNo: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    dueDate: new FormControl("", Validators.required),
  });
  pipourl1: any;

  constructor(
    @Inject(PLATFORM_ID) public platformId,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private documentService: DocumentService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    this.headers = {
      Authorization: this.authToken,
    };

    if (isPlatformBrowser(this.platformId)) {
      console.log("asdkhsajvdsug");
      this.config = {
        url: `https://beta.dm.uipep.com/v1/documents/uploadFile`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
        // autoProcessQueue: false,
        dictDefaultMessage: "Drag a document here",
        acceptedFiles:
          "image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx",
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
      this.config1 = {
        url: `https://beta.dm.uipep.com/v1/member/uploadImage`,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 120000,
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
          console.log("Benne Detail", this.benneDetail);
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
    this.config = {
      ...this.config,
    };

    this.config1 = {
      ...this.config1,
    };

    console.log("DOCUMENT TYPE", this.documentType);
  }

  public onSubmit(e) {
    console.log("sjfskfbu");
    console.log("LENGTH", this.res.invoices.length);
    console.log(e);
    console.log(e.form.value["sno1"]);
    let invoices = [];
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
            this.router.navigate(["home/dashboard"]);
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
          this.router.navigate(["home/dashboard"]);
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

  public onSubmitBoe(e) {
    console.log(this.selectCombo)
    console.log("asjbakujfbkasjfbkuh");
    console.log(e.form.value);
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
            this.router.navigate(["home/dashboard"]);
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log("error");
          }
        );
    } else {
      console.log("jhsfjavfjhavfkhvfhavkashfbjh");

      this.documentService.updateBoe(e.form.value, this.res._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(data);
          this.router.navigate(["home/dashboard"]);
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }

  public onSubmitPipo() {
    console.log(this.piPoForm.value);
    this.piPoForm.value.doc = this.pipourl1
    console.log(this.piPoForm.value);
    this.documentService.addPipo(this.piPoForm.value).subscribe(
      (res) => {
        console.log("Pipo Added Successfully");
        this.router.navigateByUrl("/home/dashboard");
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
        this.pIpO = true;
        console.log(this.res);
      }
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
      document.getElementById("uploadError").style.display = "none";

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

  ngAfterViewInit() {
    window["sidebarInit"]();
    if (isPlatformBrowser(this.platformId)) {
      this.filePreview();
    }
  }
  public onOverride() {
    this.override = false;
  }

  public beneSelect(e) {
    console.log(e)
  }

  public filePreview() {
    console.log("inside");
    const images = this.que.selectedFiles;
    // is images a true array and not empty
    if (Array.isArray(images) && images.length > 0) {
      images.forEach((image) => {
        // cuting out the extension from filename
        let extension: any = image.fileName.split(".");
        extension = extension
          .slice(extension.length - 1, extension.length)
          .join(".");
        const { accepted, size, height, width, type, dataURL, upload } =
          image.file;
        const mockFile = {
          accepted,
          size,
          type,
          dataURL: dataURL || image.location,
          name: upload.filename,
        };
        const dropzoneInstance = this.directiveRef.dropzone();
        console.log(dropzoneInstance);
        dropzoneInstance.emit("addedfile", mockFile);
        dropzoneInstance.options.maxFiles = 5;
        dropzoneInstance.createThumbnailFromUrl(
          mockFile,
          image.file.width || "400",
          image.file.height || "400",
          "contain",
          true,
          function (thumbnail) {
            dropzoneInstance.files.push(thumbnail);
            dropzoneInstance.emit("thumbnail", mockFile, thumbnail);
          },
          "anonymous"
        );
        dropzoneInstance.emit("complete", mockFile);
      });
    }
  }
}
