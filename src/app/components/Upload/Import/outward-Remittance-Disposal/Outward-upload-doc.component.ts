import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';

@Component({
  selector: 'Outward-Remittance-documents-upload',
  templateUrl: './Outward-upload-doc.component.html',
  styleUrls: ['./Outward-upload-doc.component.scss','../../commoncss/common.component.scss']
})
export class OutwardUploadDocumentsComponent implements OnInit {
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
      console.log(args, 'ahdakjhsdjkhdasds')
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
          value: this.removeallSpace2('Uniquedigitldentifier', args[1]?.data[0]) != '' ? this.removeallSpace2('Uniquedigitldentifier', args[1]?.data[0]) : 0,
          label: "Bill Reference Number",
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
        amount: {
          type: "number",
          value: this.replaceText(args[1]?.data[0]['Amount'], '32A') == '' ? 0 : this.replaceText(args[1]?.data[0]['Amount'], '32A'),
          label: "Amount",
          rules: {
            required: true,
          }
        },
        Remitter_Name: {
          type: "text",
          value: this.replaceText(args[1]?.data[0]['RemittersCustomerName'], '50A/50K'),
          label: "Party Name",
          rules: {
            required: true,
          },
          maxLength: 200
        },
        Bill_lodgment_Number: {
          type: "text",
          value: args[1]?.data[0]['RemittanceInformation'] != undefined ? args[1]?.data[0]['RemittanceInformation'] : 0,
          label: "Foreign Bank Ref No.",
          rules: {
            required: true,
          }
        },
        // AdditionalDocuments: {
        //   type: "AdditionalDocuments",
        //   value: [],
        //   label: "Add More Documents",
        //   rules: {
        //     required: false,
        //   },
        //   id: "AdditionalDocuments",
        //   url: "member/uploadImage",
        //   items: [0]
        // },
      }, 'outwardremittancedisposal');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  ngOnInit(): void {

  }
  
  onSubmit(e) {
    e.value.BankName = e.value?.BankName?.bank != undefined ? e.value?.BankName?.bank : e.value?.BankName
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    e.value.file = this.pipourl1;
    e.value.BuyerName = this.BUYER_LIST;
    e.value.pipoRef = this.pipoArr;
    this.documentService.addInward_remittance(e.value).subscribe((res: any) => {
      console.log(res, 'addInward_remittance')
      if (res.data.length != 0) {
        this.router.navigate(['home/Summary/Import/Outward-Remittance-Disposal'])
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
  
  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });
      
      this.pipoArr = PIPO_ID_ARRAY?.filter(function(item, pos) {return PIPO_ID_ARRAY.indexOf(item) == pos});
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
