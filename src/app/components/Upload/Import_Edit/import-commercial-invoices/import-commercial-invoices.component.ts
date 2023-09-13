import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'edit-import-commercial-invoices',
  templateUrl: './import-commercial-invoices.component.html',
  styleUrls: ['./import-commercial-invoices.component.scss','../../commoncss/common.component.scss']
})
export class EditImportCommercialInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  INVOICE_LIST: any = {
    sno: '1',
    invoiceno: '',
    amount: '',
    currency: ''
  };
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {};
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
    public route: ActivatedRoute,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditCommercialInvoicesComponent")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.commercialDoc);
      this.validator.buildForm({
        AdvanceInfo: {
          type: "AdvanceInfo",
          value: args?.AdvanceInfo,
          label: "Select Advance no.",
          rules: {
            required: false,
          },
          autofillinput:[{input:'AdvanceNo',key:'billNo'},{input:'AdvanceCurrency',key:'currency'},{input:'AdvanceAmount',key:'amount'}]
        },
        AdvanceNo: {
          type: "text",
          value:args?.AdvanceNo,
          label: "Advance No.",
          rules: {
            required: false,
          }
        },
        AdvanceCurrency: {
          type: "currency",
          value: args?.AdvanceCurrency,
          label: "Advance Currency*",
          rules: {
            required: false,
          }
        },
        AdvanceAmount: {
          type: "number",
          value: args?.AdvanceAmount,
          label: "Advance Amount",
          rules: {
            required: false,
          }
        },
        commercialNumber: {
          type: "text",
          typeOf:'ALPHA_NUMERIC',
          value: args?.commercialNumber,
          label: "Commercial Invoice Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: args?.amount,
          label: "Amount*",
          rules: {
            required: true,
          }
        },
        InvoiceDate: {
          type: "date",
          value: args?.InvoiceDate,
          label: "Invoice Date*",
          rules: {
            required: true,
          }
        },
        InvoiceValue: {
          type: "number",
          value: args?.InvoiceValue,
          label: "Commodity Amount*",
          rules: {
            required: true,
          }
        },
        FreightValue: {
          type: "number",
          value: args?.FreightValue,
          label: "Freight Amount*",
          rules: {
            required: true,
          }
        },
        InsuranceValue: {
          type: "number",
          value: args?.InsuranceValue,
          label: "Insurance Amount*",
          rules: {
            required: true,
          }
        },
        MiscCharges: {
          type: "number",
          value: args?.MiscCharges,
          label: "Misc Charges*",
          rules: {
            required: true,
          }
        },
        ThirdParty: {
          type: "text",
          value: args?.ThirdParty,
          label: "Third Party*",
          rules: {
            required: true,
          }
        }
      }, 'ImportCommerical');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.AdvanceCurrency = e.value.AdvanceCurrency?.type != undefined ? e.value.AdvanceCurrency.type : e.value.AdvanceCurrency;
    this.documentService.updateCommercial(e.value,this.data?._id).subscribe((res: any) => {
      this.toastr.success(`Commercial Invoice Updated Successfully`);
      this.router.navigate(['home/Summary/Import/Commercial']);     
    },(err) => console.log('Error adding pipo'));
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.documentService.getbyPartyName(this.BUYER_LIST[0]).subscribe((res: any) => {
        console.log(res, 'getbyPartyName');
        this.validator.ORM_BY_PARTY_NAME = res?.data;
      });
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
