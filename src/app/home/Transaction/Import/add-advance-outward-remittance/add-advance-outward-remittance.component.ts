import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import $ from 'jquery'

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
import { DocumentService } from "../../../../service/document.service";
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';

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
  benneName: string;
  selectedBankName: string;
  selectedBenneId: string;
  selectedBenneName: string;
  uploading: boolean = false;
  authToken: any;
  CurrencyData: any = ['INR', 'USD', 'EUR', 'GBP', 'CHF', 'AUD', 'CAD', 'AED', 'SGD', 'SAR', 'JPY']
  public type: string = "directive";
  public res: any;
  public size: any;
  public uploadUrl: any = '';
  public uploadUrl_Original: any = '';
  public message = "";
  width: any = 0;
  public benneDetail: any = [];
  public pipoData: any = [];
  @ViewChild(DropzoneDirective, { static: true })
  directiveRef?: DropzoneDirective;
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
  UrlList: any = '';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public mergerpdf: MergePdfService,
    public wininfo: WindowInformationService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
    this.loadFromLocalStorage();
    this.api_base = userService.api_base;
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
    this.getDropdownData()
    this.pipoForm = this.formBuilder.group({
      bank: new FormControl('', Validators.required),
      benneName: new FormControl('', Validators.required),
      RemittanceTotalAmount: new FormControl("", Validators.required),
      pipoTerm: new FormArray([this.initItems()]),
      Total_PI_Amount: new FormControl('', Validators.required)
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
  ORIGNAL_BANK_DETAILS: any = [];
  BANK_LIST_DROPDOWN: any = [];
  ForwardContractDATA: any = [];
  HS_CODE_DATA: any = [];
  FILTER_HS_CODE_DATA: any = [];
  ToChargesAccountdata: any = [];
  ToCreditAccountdata: any = [];
  COMPANY_INFO: any = [];

  getDropdownData() {
    this.userService.getTeam().subscribe((data: any) => {
      this.COMPANY_INFO = data['data'];
      this.commodity = data['data'][0]['commodity']
      this.LocationData = data['data'][0]['location']
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
        this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
        this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
      }
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
          value: data['data'][0]['bankDetails'][index],
          text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
          org: data['data'][0]['bankDetails'][index]
        })
        this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
          value: data['data'][0]['bankDetails'][index],
          text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
          org: data['data'][0]['bankDetails'][index]
        })
        this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
          value: data['data'][0]['bankDetails'][index],
          text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
          org: data['data'][0]['bankDetails'][index]
        })
        if (this.BANK_LIST_DROPDOWN.filter((item: any) => item?.value?.includes(data['data'][0]['bankDetails'][index]?.bank))?.length == 0) {
          this.BANK_LIST_DROPDOWN.push({
            value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId,
          })
        }
      }
      console.log(data, this.bankDetail, this.BANK_LIST_DROPDOWN, 'fgfhgfhfhgfhgfhgfhg')
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

    this.documentService.ForwardContractget().subscribe((res: any) => {
      this.ForwardContractDATA = res?.data;
      console.log(res, 'daasdasdasdasdasdadsd')
    });
    this.HS_CODE_DATA = this.documentService.getHSCODE();
    this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
  }

  changepipo(id) {
    let temp = [];
    temp = this.benneDetail.filter(items => {
      return items._id == id?._id
    });
    this.selectedBenne = temp.pop();

    console.log('this.selectedBenneName', id, this.selectedBenne);
    this.pipoDataService.getPipoListByCustomer('import', this.selectedBenne.benneName).then((data: any) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        data.forEach(element => {
          element['balanceAmount'] = element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['amount']
        });
        console.log(data, 'data2222..................')
        this.pipoData = [];
        for (let index = 0; index < data.length; index++) {
          if (data[index]?.balanceAmount != '0' && data[index]?.balanceAmount != 0) {
            this.LIST_PIPO[data[index]['_id']] = data[index];
            this.pipoData.push(data[index]);
          }
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
    this.sumTotalAmount = this.selectedItems.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.balanceAmount), 0);
    this.showOpinionReport = 0;
    // this.fillForm();
    this.OTHER_BANK_VISIBLE = false;
    setTimeout(() => { this.OTHER_BANK_VISIBLE = true; }, 150)
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
  BANK_DETAILS: any = [];
  OTHER_BANK_VISIBLE: boolean = false
  onSelectBank(value) {
    this.selectedBankName = value?.id;
    this.bankformat = ''
    this.bankformat = this.documentService?.getBankFormat()?.filter((item: any) => item.BankUniqueId.indexOf(this.selectedBankName) != -1);
    console.log(this.bankformat, 'this.newBankArray')
    if (this.bankformat.length != 0 && this.bankformat[0]?.urlpdf != '') {
      this.OTHER_BANK_VISIBLE = false;
      // this.fillForm();
    } else {
      this.OTHER_BANK_VISIBLE = true;
    }
  }

  OUR_SHA_BEN: any = '';
  ORIGINAL_PDF: any = '';
  bankformat: any = ''

  OUR_SHA_BEN_FUNC(data: any) {
    this.OUR_SHA_BEN = data;
  }

  get form() {
    return this.pipoForm.controls;
  }

  getData(data, id): any {
    return data[id];
  }

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
    this.uploadUrl_Original = args[1].data;
    this.uploadUrl = args[1].data;
    console.log("this.uploadUrl", this.uploadUrl);
    this.width = 100;
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
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  REMIITANCE_SUM: any = 0;
  REMIITANCE_AMOUNT: any = [];

  InputKeyPress(index: any) {
    this.OTHER_BANK_VISIBLE = false;
    setTimeout(() => {
      // this.fillForm()
      this.OTHER_BANK_VISIBLE = true;
      this.REMIITANCE_SUM = this.pipoForm?.controls?.pipoTerm?.value.reduce((pv, selitems) => parseFloat(pv) + parseFloat(selitems.remittanceAmount), 0);
      this.REMIITANCE_AMOUNT[index] = this.pipoForm?.controls?.pipoTerm?.value[index]?.remittanceAmount;

      if (this.REMIITANCE_SUM > this.selectedItems[index]?.balanceAmount) {
        this.toastr.error('You added more than amount your pipo amount....');
        this.REMIITANCE_SUM = this.selectedItems[index]?.balanceAmount;
        this.REMIITANCE_AMOUNT[index] = this.selectedItems[index]?.balanceAmount
      }
    }, 500)
    console.log(this.pipoForm.controls.pipoTerm, this.selectedItems, 'this.pipoForm.controls.pipoTerm')
  }

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
          console.log(this.temp1[i][index]?.pdf, 'dgdfgfgdfgfdgfdgfgf')
          this.PDF_LIST[i].push({
            pdf: this.temp1[i][index]?.pdf,
            name: this.temp1[i][index]['name']
          });
        }
      }
    }
  }
  
  NEW_PREVIEWS_URL_LIST:any=[];
  PREVIEWS_URL_STRING: any = '';
  async PREVIEWS_URL(model, id) {
    this.PREVIEWS_URL_LIST = [];
    this.NEW_PREVIEWS_URL_LIST=[];
    this.PREVIEWS_URL_STRING = '';
    console.log(this.UrlList, 'UrlList')
    this.PromiseReturn().then(async (data: any) => {
      this.getS3Url().then(async (element: any) => {
        await element?.forEach(urlelement => {
          data.push(urlelement);
        });
        var fitertemp: any = await data.filter(n => n);
        this.NEW_PREVIEWS_URL_LIST = fitertemp;
        await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
          this.PREVIEWS_URL_LIST = [];
          console.log(merge?.pdfurl, 'mergepdfresponse?.pdfurl')
          this.PREVIEWS_URL_LIST.push(merge?.pdfurl);
          this.PREVIEWS_URL_STRING = '';
          setTimeout(() => {
            this.PREVIEWS_URL_STRING = merge?.pdfurl;
          }, 200);
          model.style.display = 'block';
          console.log(this.pipoForm, merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PREVIEWS_URL')
        });
      });
    })
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

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.UrlList?.BankUrl,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse: any) => {
        temp[0] = pdfresponse?.url;
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.UrlList?.LetterHeadUrl,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse1: any) => {
          temp[1] = pdfresponse1?.url;
          reslove(temp);
        });
      });
    })
  }
  PromiseReturn() {
    var temp: any = [];
    temp[0] = this.uploadUrl;
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.selectedItems.length; i++) {
        for (let index = 0; index < this.temp1[i].length; index++) {
          if (this.temp1[i][index]?.pdf != '' && this.temp1[i][index]?.pdf != null && this.temp1[i][index]?.pdf != undefined) {
            temp.push(this.temp1[i][index]?.pdf);
          }
        }
      }
      await resolve(temp.filter(n => n));
    })
  }
  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.selectedItems.length; index++) {
        pipo_id.push(this.selectedItems[index]?.pipo_id)
        pipo_name.push(this.selectedItems[index]?.pipo_no)
      }
     
      this.pipoForm.value.bank = this.pipoForm.controls?.bank
      this.pipoForm.value.benneName = this.pipoForm.controls?.benneName
      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'Advance-Remittance-flow',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: this.NEW_PREVIEWS_URL_LIST,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id || res == undefined) {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
            var pipo_id: any = [];
            var pipo_name: any = [];
            for (let index = 0; index < this.selectedItems.length; index++) {
              pipo_id.push(this.selectedItems[index]?.pipo_id)
              pipo_name.push(this.selectedItems[index]?.pipo_no)
            }
            var data: any = {
              data: {
                formdata: this.pipoForm.value,
                documents: this.NEW_PREVIEWS_URL_LIST,
                pipo_1: this.selectedItems,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
                ALL_DATA_HSCODE_FORWARD:this.ALL_DATA_HSCODE_FORWARD
              },
              TypeTransaction: 'Advance-Remittance-flow',
              fileType: 'Import',
              UserDetails: approval_data?.id,
              pipo: pipo_id,
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data, this.selectedItems);

                for (let index = 0; index < this.selectedItems.length; index++) {
                  const element = this.selectedItems[index];
                  const sum = parseFloat(element?.balanceAmount) - parseFloat(this.pipoForm?.controls?.pipoTerm?.value[index]?.remittanceAmount);
                  this.userService.updatePipo({ balanceAmount: sum }, element?.pipo_id).subscribe((data) => {
                    console.log('king123');
                    console.log(data);
                    if ((index + 1) == this.selectedItems.length) {
                      var updateapproval_data: any = {
                        RejectData: {
                          tableName: 'pi_po',
                          id: approval_data?.id,
                          TransactionId: res1._id,
                          data: this.pipoForm.value,
                          pipo_id: pipo_id,
                          pipo_name: pipo_name
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                      });
                    }
                  }, (error) => {
                    console.log('error');
                  }
                  );
                }
              }, (error) => {
                console.log('error');
              }
              );
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

          });
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${Status} panel`)
        }
      });
    }

    console.log(UniqueId, approval_data, this.pipoForm, 'uiiiiiiiiiiiiii')
  }
  getStatusCheckerMaker(id: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };

  filtertimeout: any = ''
  filterHSCode(value: any) {
    clearTimeout(this.filtertimeout);
    this.filtertimeout = setTimeout(() => {
      this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA.filter((item: any) => item?.hscode?.indexOf(value) != -1 || item?.description?.toLowerCase()?.indexOf(value?.toLowerCase()) != -1);
      if (this.FILTER_HS_CODE_DATA.length == 0) {
        this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
      }
    }, 200);
  }
  ToCreditAccount_Selected: any = ''
  ToChargesAccount_Selected: any = ''

  ToCreditAccount(value: any) {
    console.log(value, 'asfaffsdfsdfsdf')
    this.ToCreditAccount_Selected = value
  }

  ToChargesAccount(value: any) {
    console.log(value, 'asfaffsdfsdfsdf')
    this.ToChargesAccount_Selected = value
  }

  ToForwardContract_Selected: any = []
  ToHSCode_Selected: any = [];
  FORM_VALUE:any=[];
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
    } else {
      this.ToForwardContract_Selected[0] = '';
    }
  }

  ToHSCode(event: any, value: any, index: any) {
    console.log(event, 'adasdasdsad')
    if (event?.target?.checked == true) {
      this.ToHSCode_Selected[index] = value;
    } else {
      this.ToHSCode_Selected[index] = '';
    }
  }
  ALL_DATA_HSCODE_FORWARD: any = {};
  DoneButton() {
    let temp2: any = [];
    this.ToHSCode_Selected.forEach(element => {
      temp2.push(element?.hscode);
    });
    this.ALL_DATA_HSCODE_FORWARD = {
      HS_CODE: temp2?.join(','),
      FORWARD_CONTRACT: this.ToForwardContract_Selected
    };
    this.FORM_VALUE=this.pipoForm?.controls?.pipoTerm?.value;
  }
  fillData(){
    this.FORM_VALUE=this.pipoForm?.controls?.pipoTerm?.value;
  }
}
