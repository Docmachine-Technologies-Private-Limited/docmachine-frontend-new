import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { BoeBill } from "../../../model/boe.model";
import { IRAdvice } from "../../../model/irAdvice.model";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'

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
import { PipoDataService } from "../../service/homeservices/pipo.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import { degrees, PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';

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
  selectedBankName: string;
  selectedBenneId: string;
  selectedBenneName: string;
  uploading: boolean = false;
  authToken: string;
  
  CurrencyData:any = ['INR','USD', 'EUR', 'GBP', 'CHF','AUD','CAD','AED','SGD','SAR','JPY']

  public type: string = "directive";
  public res;
  public size;
  public uploadUrl:any='';
  public message = "";
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];

  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
  // ----------------------------------

  opinionReport: boolean = false;
  document: any;
  file: any;
  api_base: any;
  headers: any;
  
  isUploaded: boolean = false;

  public config: DropzoneConfigInterface;

  pipoForm:any= FormGroup;
  submitted = false;
  selectedItems: any = [];
  selectedBenne: any = [];
  LIST_PIPO:any=[];
  sumTotalAmount = 0;
  showOpinionReport = 0;
  showSummaryPage = 0;
  isCheckedYes:boolean = false;
  isCheckedNo:boolean = false;
  charge: any;
  formerge: string | ArrayBuffer | Uint8Array;
  remittanceUrl: any;
  newTask: any = [];
  PREVIWES_URL:any='';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    public appconfig: AppConfig,
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    public pipoDataService: PipoDataService, 
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
    this.config = {
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
        bank: new FormControl('', Validators.required),
        beneName: new FormControl('', Validators.required),
        pi_poNo: new FormControl('', Validators.required),
        currency: new FormControl("",),
        amount: new FormControl("", Validators.required),
        pipoTerm: new FormArray([this.initItems()]),
      }
    );
  }

  initItems() {
    return this.formBuilder.group({
      pi_poNo: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      payableAmount: ['', Validators.required],
      remittanceAmount: ['', Validators.required],
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
        console.log('benneDetail',res.data);
        this.benneDetail = res.data
      },
      (err) => console.log("Error", err)
    );


  }

  changepipo(id) {

    let temp = [];
    temp = this.benneDetail.filter(items => { 
      return items._id == id 
     });

    // temp =temp.map((items) => {

    //   // items.doc = items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc):items.doc;

    // return {
      // beneAccNo: items.beneAccNo,
      // beneAdrs: items.beneAdrs,
      // beneBankAdress: items.beneBankAdress,
      // beneBankName: items.beneBankName,
      // beneBankSwiftCode: items.beneBankSwiftCode,
      // beneName:items.beneName,
      // iban:items.iban,
      // interBankName:items.interBankName,
      // interBankSwiftCode:items.interBankSwiftCode
      // sortCode:items.sortCode
    // };
    // });
  
    
    // this.selectedBenne[0] = temp.pop();

    this.selectedBenne = temp.pop();

    console.log('this.selectedBenneName',this.selectedBenne);
    this.pipoDataService.getPipoListByCustomer('import', this.selectedBenne.beneName).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        this.pipoData = data;
        for (let index = 0; index < data.length; index++) {
          this.LIST_PIPO[data[index]['_id']]=data[index];
        }
        console.log('importpipolist', this.pipoData, this.LIST_PIPO);
      });
    });;
  }
  DATA:any=[];
  slicedData(data : any[],id:any,value:any) {
    if (value!='') {
      var indexof=data.map(e => e?._id).indexOf(value);
      if (indexof==-1) {
        this.DATA[id]=data
      } else {
        delete data[indexof] 
        var temp:any=data;
        for (let index = 0; index <temp.length; index++) {
          this.DATA[id].push(temp[index]);  
        }
      }
    }else{
      this.DATA[id]=data
    }
  }

  choosenItems(id,i)
  {
    let temp = [];
    temp = this.pipoData.filter(items => { 
      console.log('items._id ',items._id);
      console.log('id ',id);
      console.log('items._id == id',items._id == id);
      return items._id == id 
     });

    temp =temp.map((items) => {

      // items.doc = items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc):items.doc;

      return {
				pipo_id: items._id,
				pipo_no: items.pi_poNo,
				doc: items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc):items.doc,
				amount: items.amount,
				currency: items.currency,
        buyerName:items.buyerName,
        date:items.date,
        balanceAmount:items?.balanceAmount??"",
			};
    });
  
    this.selectedItems[i] = temp.pop();

    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
   
    this.showOpinionReport = 0;
  }

  showhideOpinionReport(value)
  {
    this.showOpinionReport = value;
    if(value == 1)
    {
      this.isCheckedYes = true;
      this.isCheckedNo = false;
    }
    else
    {
      this.isCheckedYes = false;
      this.isCheckedNo = true;
    }
    
  }

  showhideSummaryPage(value)
  {
    console.log('this.pipoForm.controls;',this.pipoForm.controls);
    this.showSummaryPage = value;
  }

  onSelectBank(value)
  {
    this.selectedBankName = value;
    this.fillForm();
  }

  async fillForm() {
    const formUrl = './../../assets/TAOR.pdf'

    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    const pages = pdfDoc.getPages()
    const firstpage = pages[0]
    const secondpage = pages[1]
    const textField = form.createTextField('best.text')
    textField.setText(this.selectedBenne?.beneName + this.selectedBenne?.beneAdrs)
    textField.addToPage(firstpage, {
      x: 409, y: 605, width: 132,
      height: 28, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text1Field = form.createTextField('best.text1')
    text1Field.setText('')
    text1Field.addToPage(firstpage, {
      x: 409, y: 594, width: 132,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text2Field = form.createTextField('best.text2')
    text2Field.setText('')
    text2Field.addToPage(firstpage, {
      x: 409, y: 580, width: 132,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text3Field = form.createTextField('best.text3')
    text3Field.setText('')
    text3Field.addToPage(firstpage, {
      x: 409, y: 559, width: 132,
      height: 20, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text4Field = form.createTextField('best.text4')
    text4Field.setText(this.selectedBenne?.beneName)
    text4Field.addToPage(firstpage, {
      x: 409, y: 542, width: 132,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text5Field = form.createTextField('best.text5')
    text5Field.setText(this.selectedBenne?.beneBankName + this.selectedBenne?.beneBankAdress + this.selectedBenne?.beneBankSwiftCode)
    text5Field.addToPage(firstpage, {
      x: 409, y: 526, width: 132,
      height: 28, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text6Field = form.createTextField('best.text6')
    text6Field.setText(this.selectedBenne?.beneAccNo)
    text6Field.addToPage(firstpage, {
      x: 409, y: 510, width: 132,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text7Field = form.createTextField('best.text7')
    text7Field.setText(this.selectedBenne?.interBankName + this.selectedBenne?.interBankSwiftCode)
    text7Field.addToPage(firstpage, {
      x: 409, y: 483, width: 132,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text8Field = form.createTextField('best.text8')
    text8Field.setText(this.selectedBenne?.beneBankName)
    text8Field.addToPage(firstpage, {
      x: 409, y: 428, width: 132,
      height: 28, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text9Field = form.createTextField('best.text9')
    text9Field.setText(this.selectedBenne?.beneBankName)
    text9Field.addToPage(firstpage, {
      x: 368, y: 355, width: 33,
      height: 10, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text10Field = form.createTextField('best.text10')
    text10Field.setText(this.selectedBenne?.beneBankName)
    text10Field.addToPage(firstpage, {
      x: 225, y: 199, width: 70,
      height: 10, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text11Field = form.createTextField('best.text11')
    text11Field.setText(this.selectedBenne?.beneBankName)
    text11Field.addToPage(secondpage, {
      x: 390, y: 518, width: 92,
      height: 25, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text12Field = form.createTextField('best.text12')
    text12Field.setText(this.selectedBenne?.beneBankName)
    text12Field.addToPage(secondpage, {
      x: 390, y: 501, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text13Field = form.createTextField('best.text13')
    text13Field.setText(this.selectedBenne?.beneBankName)
    text13Field.addToPage(secondpage, {
      x: 390, y: 484, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text14Field = form.createTextField('best.text14')
    text14Field.setText(this.selectedBenne?.beneBankName)
    text14Field.addToPage(secondpage, {
      x: 390, y: 464, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text15Field = form.createTextField('best.text15')
    text15Field.setText(this.selectedBenne?.beneBankName)
    text15Field.addToPage(secondpage, {
      x: 390, y: 446, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text16Field = form.createTextField('best.text16')
    text16Field.setText(this.selectedBenne?.beneBankName)
    text16Field.addToPage(secondpage, {
      x: 390, y: 413, width: 92,
      height: 25, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text17Field = form.createTextField('best.text17')
    text17Field.setText(this.selectedBenne?.beneBankName)
    text17Field.addToPage(secondpage, {
      x: 390, y: 392, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text18Field = form.createTextField('best.text18')
    text18Field.setText(this.selectedBenne?.beneBankName)
    text18Field.addToPage(secondpage, {
      x: 390, y: 371, width: 92,
      height: 10, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text19Field = form.createTextField('best.text19')
    text19Field.setText(this.selectedBenne?.beneBankName)
    text19Field.addToPage(secondpage, {
      x: 390, y: 351, width: 92,
      height: 8, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text20Field = form.createTextField('best.text20')
    text20Field.setText(this.selectedBenne?.beneBankName)
    text20Field.addToPage(secondpage, {
      x: 164, y: 282, width: 57,
      height: 10, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text21Field = form.createTextField('best.text21')
    text21Field.setText(this.selectedBenne?.beneBankName)
    text21Field.addToPage(secondpage, {
      x: 321, y: 233, width: 57,
      height: 10, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const pdfBytes = await pdfDoc.save()
    console.log(pdfDoc, "pdf")
    console.log(pdfBytes, "pdfBytes")
    // this.getPdfFile(pdfBytes);
    console.log(form, "form")
    var base64String = this._arrayBufferToBase64(pdfBytes)

    const x = 'data:application/pdf;base64,' + base64String;

    const url = window.URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}));
    console.log(url,'dsjkfhsdkjfsdhfksfhsd')
// this.sendFileDownload()
    this.formerge = x
    this.remittanceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(x);

    const mergedPdf = await PDFDocument.create();
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
    const mergedPdfFile = await mergedPdf.save();
    const mergedPdfload = await PDFDocument.load(mergedPdfFile);
    await this.disabledTextbox(pdfDoc)
    const mergedPdfFileload = await mergedPdfload.save();
    var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
    const x1 = 'data:application/pdf;base64,' + base64String1;
    console.log("line no. 1735", this.remittanceUrl)
    this.PREVIWES_URL= this.sanitizer.bypassSecurityTrustResourceUrl(x1);
    console.log(this.PREVIWES_URL,'this.PREVIWES_URL')

  }

  async getPdfFile(item:any){
    let array = new Uint8Array(item);
    let blob = new Blob([array], { type: 'application/pdf' });
    var urlCreator = window.URL || window.webkitURL;
    let url = urlCreator.createObjectURL(blob);
    let fileName: string = new Date().toLocaleDateString();
    try {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.target = '_blank';
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evt);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  async disabledTextbox(pdfDoc:any){
    pdfDoc.getForm()
    .getFields()
    .forEach((field) => {
      field.enableReadOnly();
      console.log(field,)
    });
    }


  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  get form() {
    return this.pipoForm.controls;
  }

  onSubmit(e): void {

    this.submitted = true;

    console.log("this.pipoForm.invalid",this.pipoForm.invalid)
    console.log("this.pipoForm.invalid",this.pipoForm)
    console.log('this.pipoForm.value',this.pipoForm.value);
    if (this.pipoForm.invalid) {
      return;
    }
    else
    {

    }
  }  //  ------------------------- handle image upload------------------------------------------


  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }

  public onUploadInit(args: any): void {
    console.log("onUploadInit:", args);
  }


  public onUploadSuccess(args: any): void {
    console.log("------ onUploadSuccess called")
    console.log('args',args);
      this.uploading = true;
      this.isUploaded = true;
      this.uploadUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].data
      );

      console.log("this.uploadUrl", this.uploadUrl);
  }

  submit(e) {
      this.uploading = true;
      console.log(e[0].size);
      this.size = this.formatBytes(e[0].size);
      //document.getElementById("uploadError").style.display = "none";
      this.runProgressBar(e[0].size);

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

  runProgressBar(value) {
    console.log(value / 1500);
    timer(0, value / 2500)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });

  }

  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  // ----------------------------- end handle image upload ----------------------------------


  getItems(form) {
    return form.get('pipoTerm').controls;
  }


  addItems(index,id) {
    const control = this.pipoForm.controls.pipoTerm as FormArray;
    control.push(this.initItems());
  }

  removeItems(i) {
    this.selectedItems = this.selectedItems.filter((items,index) => { 
      return index != i
    });

    console.log('this.selectedItems',this.selectedItems);

    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);

    let control = this.pipoForm.controls.pipoTerm as FormArray;
    control.removeAt(i);

  }
  


}

// PROFORMA INVOICE

