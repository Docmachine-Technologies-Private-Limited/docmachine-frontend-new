import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { count, takeWhile } from 'rxjs/operators';
import { FormArray, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as data1 from '../../../../currency.json';
import { SharedDataService } from '../../../shared-Data-Servies/shared-data.service';
import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from 'ngx-dropzone-wrapper';
import { Subscription } from 'rxjs';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { MatSelectModule } from '@angular/material/select';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from '../../../../app.config';
import {PipoDataService} from "../../../../service/homeservices/pipo.service";
import $ from 'jquery';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss','../../../upload/upload.component.scss']
})
export class UploadDocComponent implements OnInit {

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
  MT103_Form:any=[];

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
  origin: any = [];
  item5: any;

  //*****************
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
  buyerDetail34: any;
  retururl;
  bank:any=[];
  CURRENCY_LIST: any = [];
  uploading:boolean=false;
  iframeVisible:boolean=false;
  publicUrl:any ='';
  formSubmitted:boolean=false;

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
    public appconfig: AppConfig,
    private sharedData: SharedDataService,
    private pipoDataService: PipoDataService,
    public wininfo: WindowInformationService) {
    this.iframeVisible=false;
    this.sharedData.currentReturnUrl.subscribe(
      (message) => (this.retururl = message)
    );
    this.api_base = appconfig.apiUrl;
    console.log(this.api_base);
    this.loadFromLocalStorage();
    console.log(this.authToken);
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`,
    };
    if (isPlatformBrowser(this.platformId)) {
      console.log('asdkhsajvdsug');
      this.config = {
        url: `${this.api_base}/documents/inward/uploadFile `,
        method: `POST`,
        maxFiles: 5,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: 'Drag a document here',
        acceptedFiles:
          'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
        previewTemplate:
          '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
      };
    }
    this.MT103_Form = new FormGroup({
      BankName:new FormControl('', Validators.required),
      Inward_reference_number:new FormControl('', Validators.required),
      amount:new FormControl('', Validators.required),
      currency:new FormControl('', Validators.required),
      Remitter_Name:new FormControl('', Validators.required),
      Bill_lodgment_Number:new FormControl('', Validators.required),
      Inward_amount_for_disposal:new FormControl('', Validators.required),
      Credit_Account_Number:new FormControl('', Validators.required),
      Charges_Account_Number:new FormControl('', Validators.required)
    });
  }

  public a = 10;
  width: any = 0;

  runProgressBar(value) {
    console.log(this.config,'directiveRef');
    console.log(value /1000);
    timer(0, value / 1000)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
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
  BANK_DETAILS:any=[];

 async ngOnInit() {
    this.wininfo.set_controller_of_width(230,'.content_top_common')
    for (let index = 0; index < data1['default']?.length; index++) {
      this.CURRENCY_LIST.push({
        type: data1['default'][index]['value']
      })
    }
    this.userService.getTeam()
    .subscribe(
      data => {
        for (let index = 0; index < data['data'][0]?.bankDetails.length; index++) {
          this.BANK_DETAILS.push({
            value:data['data'][0]?.bankDetails[index]['accNumber']+' | '+data['data'][0]?.bankDetails[index]['currency'],
            accNumber:data['data'][0]?.bankDetails[index]['accNumber'],
            currency:data['data'][0]?.bankDetails[index]['currency'],
            Bank_Name:data['data'][0]?.bankDetails[index]['bank']
          });
        }
        console.log(this.BANK_DETAILS,'getTeam')
      },
      error => {
        console.log("error")
      });
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args, args[1].message);
  }

  public onChangeIssues(data:any,event:any): void {
    console.log(data,'onChangeIssues')
  }
  submit(e) {
    this.uploading = true;
    console.log(e[0].size,'ajbkab')
    this.runProgressBar(e[0].size);
  }
dataPdf:any=[];
 async onUploadSuccess(args: any) {
  console.log('onUploadSuccess:', args);
      this.uploading = false;
      this.iframeVisible=true;
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        args[1].publicUrl
      );
      var data:any=args[1]['data'][0];
      console.log(data,'data')

      this.dataPdf={
        AccountDetails:data['Account Details'],
        Amount:data['Amount'],
        BankOperationCode:data['Bank Operation Code'],
        BeneficiaryCustomer:data['Beneficiary Customer'],
        BeneficiaryCustomerAddress:data['Beneficiary Customer Address'],
        BeneficiaryCustomerName:data['Beneficiary Customer Name'],
        CurrencyInstructedAmount:data['Currency/Instructed Amount'],
        CurrencyCode:this.replaceText(data['CurrencyCode'],'32A'),
        DetailsofCharges:data['Details of Charges'],
        Orderinglnstitution:data['Ordering lnstitution'],
        Receiver:data['Receiver'],
        ReceiversCorrespondent:data["Receiver's Correspondent"],
        RemittanceInformation:data["Remittance Information 70 ADVANCE IMPORT PYM INV"],
        RemitterCustomerCode:data["Remitter Customer Code"],
        RemitterCustomerDetails:data['Remitter Customer Details'],
        RemittersCustomerName:data['Remitter Customer Name'],
        SenderCorrespondent:data["Sender's Correspondent"],
        SendersReference:data["Sender's Reference"],
        SenderCode:data['Sender Code'],
        SenderInformation:data['Sender Information'],
        Uniquedigitldentifier:data["Unique 16 digit ldentifier"],
        ValueDate32A31:data["Value Date 32A 31"],
        lntermediary:data['lntermediary']
        };
      this.documentService.setSessionData('InwardSheet',this.dataPdf[0]);
      console.log(this.dataPdf,'this.dataPdf');
     console.log('-------------------->Selected Document type', this.publicUrl);
  }
  onUpload(e){
    e.value.BankName=e.value?.BankName?.Bank_Name!=undefined?e.value?.BankName?.Bank_Name:e.value?.BankName
    e.value.Charges_Account_Number=e.value?.Charges_Account_Number?.accNumber!=undefined?e.value?.Charges_Account_Number?.accNumber:e.value?.Charges_Account_Number
    e.value.Credit_Account_Number=e.value?.Credit_Account_Number?.accNumber!=undefined?e.value?.Credit_Account_Number?.accNumber:e.value?.Credit_Account_Number
    e.value.currency =e.value?.currency?.type!=undefined?e.value?.currency?.type:e.value?.currency;
    console.log(e,'onUpload')
    this.formSubmitted=true;
    if (e.status=='INVALID') {
      return;
    }
    e.value.file=this.publicUrl?.changingThisBreaksApplicationSecurity;
    this.documentService.addInward_remittance(e.value).subscribe((res:any)=>{
      console.log(res,'addInward_remittance')
      if (res.data.length!=0){
        this.router.navigate(['/home/export-home'])
      }
    })
  }
  replaceText(text:any,repl_text:any){
    return text!=undefined?(text.replace(repl_text,'')).trim():''
  }
  removeallSpace(spacetext:any){
    return spacetext.replace(/\s/g,'');
  }
  removeallSpace2(spacetext:any,data:any){
  if (data[spacetext]!=undefined && data[spacetext]!=null) {
    return data[spacetext].replace(/\s/g,'');
  }else{
    return '';
  }
  }
  validation(e:any,validationData:any){
    var temp:any=[];
    for (const key in e) {
      if (validationData.includes(e.value)) {
          temp.push(`Plese`)
      }
    }
  }
  ObjectLength(object:any){
    return Object.keys(object);
  }
}
