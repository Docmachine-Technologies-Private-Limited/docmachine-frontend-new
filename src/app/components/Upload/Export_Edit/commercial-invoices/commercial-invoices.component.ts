import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'edit-export-commercial-invoices',
  templateUrl: './commercial-invoices.component.html',
  styleUrls: ['./commercial-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class EditCommercialInvoicesComponent implements OnInit {
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
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditCommercialInvoicesComponent")
    });
  }
  response(args: any) {
    console.log(args, args?.length, "argsShippingbill")
    if (args?.length == undefined) {
      this.Edit(args);
    } else {
      this.ReUplod(args)
    }
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  Edit(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.commercialDoc);
      this.validator.buildForm({
        sbNo: {
          type: "text",
          value: args?.sbNo,
          label: "Select Shipping Bill",
          disabled: true,
          rules: {
            required: true,
          }
        },
        commercialNumber: {
          type: "text",
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
          type: "text",
          value: args?.amount,
          label: "Commercial Invoice Amount",
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
      }, 'ExportCommercialInvoices');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        commercialNumber: {
          type: "text",
          value: this.data?.commercialNumber,
          label: "Commercial Invoice Number",
          name: 'commercialNumber',
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.data?.currency,
          label: "Currency*",
          name: 'currency',
          disabled: true,
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: this.data?.amount,
          label: "Commercial Invoice Amount",
          name: 'amount',
          rules: {
            required: true,
          }
        },
        type: {
          type: "PaymentTermType",
          value: this.data?.type,
          label: "Type",
          name: 'type',
          rules: {
            required: true,
          },
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
      }, 'ExportCommercialInvoices');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    e.value.type = e.value?.type?.value != undefined ? e.value?.type?.value : e.value?.type;
    if (this.data?.commercialNumber != e.value.commercialNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Commercial Invoice Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            commercialNumber: e.value.commercialNumber
          }, 'commercials').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.commercialDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateCommercial(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Commercial Invoice Updated Successfully`);
                this.router.navigate(['home/Summary/Export/commercial']);
              }, (err) => console.log('Error adding pipo'));
            }
          })
        }
      })
    } else {
      e.value.commercialDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateCommercial(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Commercial Invoice Updated Successfully`);
        this.router.navigate(['home/Summary/Export/commercial']);
      }, (err) => console.log('Error adding pipo'));
    }
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
      this.validator.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
        if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.validator.SHIPPING_BILL_LIST.push(this.validator.SHIPPING_BUNDEL[j]);
        }
      }
      console.log(event, this.validator.SHIPPING_BUNDEL, this.validator.SHIPPING_BILL_LIST, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
