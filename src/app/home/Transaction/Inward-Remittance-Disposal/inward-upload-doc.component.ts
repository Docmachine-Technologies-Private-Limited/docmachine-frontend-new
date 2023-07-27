import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../service/user.service';
import { PipoDataService } from "../../../service/homeservices/pipo.service";
import { UploadServiceValidatorService } from '../../../components/Upload/service/upload-service-validator.service';
import { DateFormatService } from '../../../DateFormat/date-format.service';

@Component({
  selector: 'inward-Remittance-documents-upload',
  templateUrl: './inward-upload-doc.component.html',
  styleUrls: ['./inward-upload-doc.component.scss']
})
export class InwardUploadDocumentsComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) {
  }
  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      console.log(args,'ahdakjhsdjkhdasds')
      this.validator.buildForm({
        BankName: {
          type: "Bank",
          value: "",
          label: "Select Bank Name",
          rules: {
            required: true,
          }
        },
        Inward_reference_number: {
          type: "text",
          value: this.removeallSpace2('Uniquedigitldentifier', args[1]?.data[0])!='' ? this.removeallSpace2('Uniquedigitldentifier', args[1]?.data[0]) : 0,
          label: "Inward reference number",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: this.replaceText(args[1]?.data[0]['Amount'],'32A')==''?0 : this.replaceText(args[1]?.data[0]['Amount'],'32A'),
          label: "Amount",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args[1]?.data[0]['CurrencyCode'],
          label: "Currency",
          rules: {
            required: true,
          }
        },
        Remitter_Name: {
          type: "text",
          value: this.replaceText(args[1]?.data[0]['RemittersCustomerName'],'50A/50K'),
          label: "Remitter name ( as per MT103 )",
          rules: {
            required: true,
          },
          maxLength:200
        },
        Bill_lodgment_Number: {
          type: "text",
          value: args[1]?.data[0]['RemittanceInformation']!=undefined?args[1]?.data[0]['RemittanceInformation'] : 0,
          label: "Bill lodgment number",
          rules: {
            required: true,
          }
        },
        Inward_amount_for_disposal: {
          type: "number",
          value: "",
          label: "Inward amount for disposal",
          rules: {
            required: true,
          }
        },
      }, 'inwardremittancedisposal');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  ngOnInit(): void {
      
  }
  onUpload(e) {
    e.value.BankName = e.value?.BankName?.value != undefined ? e.value?.BankName?.value : e.value?.BankName
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    e.value.file = this.pipourl1;
    this.documentService.addInward_remittance(e.value).subscribe((res: any) => {
      console.log(res, 'addInward_remittance')
      if (res.data.length != 0) {
        this.router.navigate(['home/Inward-Remittance-Disposal'])
      }
    })
  }
  replaceText(text: any, repl_text: any) {
    return text != undefined ? (text.replace(repl_text, '')).trim() : ''
  }
  removeallSpace(spacetext: any) {
    return spacetext.replace(/\s/g, '');
  }
  removeallSpace2(spacetext: any, data: any) {
    if (data[spacetext] != undefined && data[spacetext] != null) {
      return data[spacetext].replace(/\s/g, '');
    } else {
      return '';
    }
  }
}
