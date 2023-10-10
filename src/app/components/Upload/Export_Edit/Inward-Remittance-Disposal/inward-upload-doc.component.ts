import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';

@Component({
  selector: 'edit-inward-Remittance-documents-upload',
  templateUrl: './inward-upload-doc.component.html',
  styleUrls: ['./inward-upload-doc.component.scss']
})
export class EditInwardUploadDocumentsComponent implements OnInit {
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
  data: any = '';

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditInwardUploadDocumentsComponent")
    });
  }
  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.file);
      console.log(args, 'ahdakjhsdjkhdasds')
      this.validator.buildForm({
        BuyerName: {
          type: "buyer",
          value: args?.BuyerName?.value,
          label: "Select Buyer Name",
          rules: {
            required: true,
          }
        },
        BankName: {
          type: "Bank",
          value: args?.BankName,
          label: "Select Bank Name",
          rules: {
            required: true,
          }
        },
        Inward_reference_number: {
          type: "text",
          value: args?.Inward_reference_number,
          label: "Inward reference number",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: args?.amount,
          label: "Amount",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency",
          rules: {
            required: true,
          }
        },
        Remitter_Name: {
          type: "text",
          value: args?.Remitter_Name,
          label: "Remitter name ( as per MT103 )",
          rules: {
            required: true,
          },
          maxLength: 200
        },
        Bill_lodgment_Number: {
          type: "text",
          value: args?.Bill_lodgment_Number,
          label: "Remittance Information",
          rules: {
            required: true,
          }
        },
      }, 'inwardremittancedisposal');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onUpload(e) {
    e.value.BankName = e.value?.BankName?.value != undefined ? e.value?.BankName?.value : e.value?.BankName
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    if (e?.value?.BuyerName?.Address == undefined) {
      e.value.BuyerName = this.data?.BuyerName;
    }
    this.documentService.addInward_remittance(e.value).subscribe((res: any) => {
      console.log(res, 'addInward_remittance')
      if (res.data.length != 0) {
        this.router.navigate(['home/Summary/Export/Inward-Remittance-Disposal'])
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