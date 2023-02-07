import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'
import { saveAs as importedSaveAs } from 'file-saver';

import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { AppConfig } from "src/app/app.config";
import { DocumentService } from "../../service/document.service";
import { PipoDataService } from "../../service/homeservices/pipo.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import { degrees, PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';

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

  CurrencyData: any = ['INR', 'USD', 'EUR', 'GBP', 'CHF', 'AUD', 'CAD', 'AED', 'SGD', 'SAR', 'JPY']

  public type: string = "directive";
  public res;
  public size;
  public uploadUrl: any = '';
  public uploadUrl_Original: any = '';

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

  pipoForm: any = FormGroup;
  submitted = false;
  selectedItems: any = [];
  selectedBenne: any = [];
  LIST_PIPO: any = [];
  sumTotalAmount = 0;
  showOpinionReport = 0;
  showSummaryPage = 0;
  isCheckedYes: boolean = false;
  isCheckedNo: boolean = false;
  charge: any;
  formerge: string | ArrayBuffer | Uint8Array;
  remittanceUrl: any;
  newTask: any = [];
  PREVIWES_URL: any = '';
  PREVIEWS_URL_LIST: any = [];
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
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) {
    this.loadFromLocalStorage();
    this.api_base = appconfig.apiUrl;
    this.getDropdownData()

  }

 async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content_top_common')
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`
    };
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
    });
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
        console.log('benneDetail', res.data);
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
    this.selectedBenne = temp.pop();

    console.log('this.selectedBenneName', this.selectedBenne);
    this.pipoDataService.getPipoListByCustomer('import', this.selectedBenne.beneName).then((data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        console.log(data, 'data2222..................')
        this.pipoData = data;
        for (let index = 0; index < data.length; index++) {
          this.LIST_PIPO[data[index]['_id']] = data[index];
        }
        console.log('importpipolist', this.pipoData, this.LIST_PIPO);
      });
    });;
  }
  DATA: any = [];
  slicedData(data: any[], id: any, value: any) {
    if (value != '') {
      var indexof = data.map(e => e?._id).indexOf(value);
      if (indexof == -1) {
        this.DATA[id] = data
      } else {
        delete data[indexof]
        var temp: any = data;
        for (let index = 0; index < temp.length; index++) {
          this.DATA[id].push(temp[index]);
        }
      }
    } else {
      this.DATA[id] = data
    }
  }
  ITEM_FILL_PDF: any = [];
  temp1: any = [];

  choosenItems(id, i) {
    let temp: any = [];
    let temp2: any = [];
    temp = this.pipoData.filter(items => {
      return items._id == id
    });
    temp2 = this.pipoData.filter(items => {
      return items._id == id
    });
    this.temp1[i] = [];
    this.ITEM_FILL_PDF[i] = temp;
    temp = temp.map((items) => {
      return {
        pipo_id: items._id,
        pipo_no: items.pi_poNo,
        doc: items.doc ? this.sanitizer.bypassSecurityTrustResourceUrl(items.doc) : items.doc,
        amount: items.amount,
        currency: items.currency,
        buyerName: items.buyerName,
        date: items.date,
        balanceAmount: items?.balanceAmount ?? "",
      };
    });
    this.selectedItems[i] = temp.pop();
    temp2[0] = temp2.pop();
    for (let index = 0; index < temp2.length; index++) {
      this.temp1[i].push({
        pdf: (temp2[index]['doc']),
        name: 'PIPO'
      });
    }
    console.log(this.temp1, temp2, 'selectedItemsselectedItems')
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    this.showOpinionReport = 0;
    this.fillForm();
  }

  showhideOpinionReport(value) {
    this.showOpinionReport = value;
    if (value == 1) {
      this.isCheckedYes = true;
      this.isCheckedNo = false;
    }
    else {
      this.isCheckedYes = false;
      this.isCheckedNo = true;
    }

  }

  showhideSummaryPage(value) {
    console.log('this.pipoForm.controls;', this.pipoForm.controls);
    this.showSummaryPage = value;
  }

  onSelectBank(value) {
    this.selectedBankName = value;
    this.fillForm();
  }
  OUR_SHA_BEN: any = '';
  ORIGINAL_PDF:any='';
  async fillForm() {
    const formUrl = './../../assets/advanceoutward.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    const pages = pdfDoc.getPages()
    const firstpage = pages[0]
    var INVOICE_NO: any = [];
    for (let index = 0; index < this.ITEM_FILL_PDF.length; index++) {
      INVOICE_NO.push(this.ITEM_FILL_PDF[index][0]?.pi_poNo);
    }
    console.log(this.selectedBenne, this.ITEM_FILL_PDF, INVOICE_NO, 'fillForm')
    const textField = form.createTextField('best.text')
    let result = this.selectedBenne?.beneName.concat(" ", this.selectedBenne?.beneAdrs);
    textField.setText(result)
    textField.addToPage(firstpage, {
      x: 409, y: 570, width: 132,
      height: 28, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text1Field = form.createTextField('best.text1')
    text1Field.setText(this.sumTotalAmount.toString())
    text1Field.addToPage(firstpage, {
      x: 409, y: 555, width: 132,
      height: 12, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text2Field = form.createTextField('best.text2')
    text2Field.setText(INVOICE_NO.toString())
    text2Field.addToPage(firstpage, {
      x: 409, y: 538, width: 132,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })
    const text3Field = form.createTextField('best.text3')
    text3Field.setText('')
    text3Field.addToPage(firstpage, {
      x: 409, y: 515, width: 132,
      height: 20, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    let result1 = this.selectedBenne?.beneBankName.concat(" ", this.selectedBenne?.beneBankAdress);
    const text4Field = form.createTextField('best.text4')
    text4Field.setText(result1)
    text4Field.addToPage(firstpage, {
      x: 409, y: 464, width: 132,
      height: 47, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text5Field = form.createTextField('best.text5')
    text5Field.setText(this.selectedBenne?.beneAccNo)
    text5Field.addToPage(firstpage, {
      x: 409, y: 442, width: 132,
      height: 20, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })
    let result2 = this.selectedBenne?.interBankName.concat(" ", this.selectedBenne?.interBankSwiftCode);
    const text6Field = form.createTextField('best.text6')
    text6Field.setText(result2)
    text6Field.addToPage(firstpage, {
      x: 409, y: 420, width: 132,
      height: 18, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text7Field = form.createTextField('best.text7')
    text7Field.setText(this.selectedBenne?.iban)
    text7Field.addToPage(firstpage, {
      x: 409, y: 390, width: 132,
      height: 25, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text8Field = form.createTextField('best.text8')
    text8Field.setText(this.OUR_SHA_BEN)
    text8Field.addToPage(firstpage, {
      x: 409, y: 364, width: 132,
      height: 20, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const pdfBytes = await pdfDoc.save()
    console.log(pdfDoc, "pdf")
    console.log(pdfBytes, "pdfBytes")
    // this.getPdfFile(pdfBytes);
    console.log(form, "form")
    var base64String = this._arrayBufferToBase64(pdfBytes)
    const x = 'data:application/pdf;base64,' + base64String;
    const url = window.URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
    console.log(url, 'dsjkfhsdkjfsdhfksfhsd')
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
    this.PREVIWES_URL = this.sanitizer.bypassSecurityTrustResourceUrl(x1);
    console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
    this.ORIGINAL_PDF=pdfBytes;

  }
  OUR_SHA_BEN_FUNC(data: any) {
    this.OUR_SHA_BEN = data;
    this.fillForm();
  }

  async getPdfFile(item: any) {
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

  async disabledTextbox(pdfDoc: any) {
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

  getData(data, id): any {
    return data[id];
  }
  onSubmit(e): void {

    this.submitted = true;

    console.log("this.pipoForm.invalid", this.pipoForm.invalid)
    console.log("this.pipoForm.invalid", this.pipoForm)
    console.log('this.pipoForm.value', this.pipoForm.value);
    if (this.pipoForm.invalid) {
      return;
    }
    else {

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
    console.log('args', args);
    this.uploading = true;
    this.isUploaded = true;
    this.uploadUrl_Original=args[1].data;
    this.userService.mergePdf(args[1].data).subscribe((res: any) => {
      res.arrayBuffer().then((data: any) => {
        this.uploadUrl=data;
      });
    });

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


  addItems(index, id) {
    const control = this.pipoForm.controls.pipoTerm as FormArray;
    control.push(this.initItems());
    this.temp1[index]
  }

  removeItems(i) {
    this.selectedItems = this.selectedItems.filter((items, index) => {
      return index != i
    });
    console.log('this.selectedItems', this.selectedItems);
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.amount), 0);
    let control = this.pipoForm.controls.pipoTerm as FormArray;
    control.removeAt(i);
  }
  PDF_LIST: any = [];

  SlideToggle(event, i) {
    $(".accordion-item").find(".accordion-contant").css('display', 'none')
    $(event?.target?.parentElement).parent(".accordion-item").find(".accordion-contant").slideToggle();
    if (this.PDF_LIST[i] == undefined) {
      this.PDF_LIST[i] = [];
      for (let index = 0; index < this.temp1[i].length; index++) {
        if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
          this.userService.mergePdf(this.temp1[i][index]?.pdf).subscribe((res: any) => {
            res.arrayBuffer().then((data: any) => {
              this.PDF_LIST[i].push({
                pdf: data,
                name: this.temp1[i][index]['name']
              })
              console.log('downloadEachFile', data, this.PDF_LIST);
            });
          });
        }
      }
    }
  }

  PREVIEWS_URL(id) {
    this.PREVIEWS_URL_LIST=[];
    this.PREVIEWS_URL_LIST[0] = this.ORIGINAL_PDF;
    this.PREVIEWS_URL_LIST[1]=this.uploadUrl;
    for (let i = 0; i < this.selectedItems.length; i++) {
      for (let index = 0; index < this.temp1[i].length; index++) {
        if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
          this.userService.mergePdf(this.temp1[i][index]?.pdf).subscribe((res: any) => {
            res.arrayBuffer().then((data: any) => {
              this.PREVIEWS_URL_LIST.push(data);
              console.log('downloadEachFile', this.PREVIEWS_URL_LIST);
            });
          });
        }
      }
    }
    this.documentService.getDownloadStatus({ id: id, deleteflag: '-1' }).subscribe((res: any) => {
      console.log(res, 'dsdsdsdsdsdsds');
      this.GetDownloadStatus = res[0];
      if (res.length == 0) {
        this.documentService.getDownloadStatus({ id: id, deleteflag: '1' }).subscribe((res: any) => {
          console.log(res, 'dsdsdsdsdsdsds');
          this.GetDownloadStatus = res[0];
          if (res.length == 0) {
            this.documentService.getDownloadStatus({ id: id, deleteflag: '2' }).subscribe((res: any) => {
              console.log(res, 'dsdsdsdsdsdsds');
              this.GetDownloadStatus = res[0];
            })
          }
        })
      }
    })
  }
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];

  SendApproval(Status: string, UniqueId: any) {
    if(UniqueId!=null){
      var temp_doc: any = [];
      temp_doc[0] = this.PREVIWES_URL?.changingThisBreaksApplicationSecurity;
      temp_doc[1] = this.uploadUrl_Original;
      for (let i = 0; i < this.selectedItems.length; i++) {
        for (let index = 0; index < this.temp1[i].length; index++) {
          if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != undefined) {
            temp_doc.push(this.temp1[i][index]?.pdf)
          }
        }
      }
      var approval_data: any = {
        id: UniqueId,
        tableName: 'Advance Remittance flow',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: temp_doc,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      console.log(approval_data, 'approval_data')
      if (Status == '' || Status == null || Status == 'Rejected') {
        this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
          this.ngOnInit();
          this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '-1' }).subscribe((res: any) => {
            console.log(res, 'dsdsdsdsdsdsds');
            this.GetDownloadStatus = res[0];
            if (res.length == 0) {
              this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '2' }).subscribe((res: any) => {
                console.log(res, 'dsdsdsdsdsdsds');
                this.GetDownloadStatus = res[0];
              })
            }
          })
        });
      }
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  mergeAllPDFs = async (type: String) => {
    let urls = this.PREVIEWS_URL_LIST;
    console.log("2542 Line", urls)
    const numDocs = urls.length;
    const pdfDoc = await PDFDocument.create();

    var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
      if (currentpage < docLength) {
        console.log('Inside Page', currentpage, 'total pages', docLength);
        const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
        pdfDoc.addPage(donorPage);
        await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
      }
    };
    var appendEachFile = async (bytes) => {
      const donorPdfDoc = await PDFDocument.load(bytes);
      const docLength = donorPdfDoc.getPageCount();
      console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
      await appendEachPage(donorPdfDoc, 0, docLength);
    };
    var appendAllFiles = async (pdflist, currentfile) => {
      if (currentfile < numDocs) {
        await appendEachFile(pdflist[currentfile]);
        console.log('Inside file', currentfile);
        await appendAllFiles(pdflist, currentfile + 1);
      } else {
        if (type == 'download') {
          this.downloadAsSingleFile(pdfDoc);
        } else {
          this.sendMail2(pdfDoc);
        }
      }
    };

    // download single file;
    let downloadEachFile = (filename) => {
      return new Promise((resolve, reject) => {
        this.userService.mergePdf(filename).subscribe((res: any) => {
          console.log('downloadEachFile', res);
          resolve(res.arrayBuffer());
        },
          (err) => reject('Failed to fetch the pdf')
        );
      });
    };
    // download all the pdfs
    let downloadAllFiles = () => {
      var promises = [];
      for (var i = 0; i < urls.length; i++) {
        if (urls[i]!='' && urls[i]!=undefined) {
          promises.push(urls[i]);
        }
      }
      Promise.all(promises).then((pdfList) => {
        appendAllFiles(pdfList, 0);
        console.log('pdfList2', pdfList);
      }, (error) => {
      }
      );
    };
    downloadAllFiles();
  };
  downloadAsSingleFile = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    if (true == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf //this.value
      const mergedPdf = await PDFDocument.create();
      const pdfA = await PDFDocument.load(this.formerge);
      const pdfB = await PDFDocument.load(merge);
      const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));
      const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      importedSaveAs(
        new Blob([byteArray], { type: 'application/pdf' }),
        'BankAttachment'
      );
    }
    else {
      const byteCharacters1 = atob(data_pdf);
      const byteNumbers1 = new Array(byteCharacters1.length);
      for (let i = 0; i < byteCharacters1.length; i++) {
        byteNumbers1[i] = byteCharacters1.charCodeAt(i);
      }
      const byteArray1 = new Uint8Array(byteNumbers1);
      importedSaveAs(
        new Blob([byteArray1], { type: 'application/pdf' }),
        'InwardRemittanceDisposal'
      );

    }
  };

  blobToSaveAs(fileName: string, exportText: any) {
    try {
      const linkSource = exportText;
      const downloadLink = document.createElement("a");
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  sendMail2 = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    console.log('5417****', pdfDataUri);
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    const byteCharacters = atob(data_pdf);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    console.log('99999999999999999999999', data_pdf);
    if (true == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf //this.value
      const mergedPdf = await PDFDocument.create();
      console.log("2679", this.formerge)
      const pdfA = await PDFDocument.load(this.formerge);
      const pdfB = await PDFDocument.load(merge);
      const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));

      const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);
      this.userService.documentSend(this.USER_DATA?.emailId, base64String).subscribe(
        (data) => {
          console.log('king123');
          console.log(data);
        },
        (error) => {
           console.log('error');
        }
      );
    }
    else {
      this.userService.documentSend(this.USER_DATA?.emailId, data_pdf).subscribe(
        (data) => {
          console.log('king123');
          console.log(data)
        },
        (error) => {
          console.log('error');
        }
      );
    }
  };
}

// PROFORMA INVOICE

