import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'import-commercial-invoices',
  templateUrl: './import-commercial-invoices.component.html',
  styleUrls: ['./import-commercial-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class ImportCommercialInvoicesComponent implements OnInit {
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

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {

  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        AdvanceInfo: {
          type: "formGroup",
          label: "Advance Info",
          GroupLabel: ['Advance Info 1'],
          AddNewRequried: false,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "AdvanceInfo",
                value: "",
                label: "Select Advance no.",
                name: 'AdvanceInfoAny',
                rules: {
                  required: true,
                },
                AutoFillType: "formGroup",
                autofillinput: [
                  { input: 'AdvanceNo', key: 'billNo', parent: "AdvanceInfo" },
                  { input: 'AdvanceCurrency', key: 'currency', parent: "AdvanceInfo" },
                  { input: 'AdvanceAmount', key: 'amount', parent: "AdvanceInfo" }
                ],
              },
              {
                type: "text",
                value: "",
                label: "Advance No.",
                name: 'AdvanceNo',
                rules: {
                  required: true,
                },
              },
              {
                type: "currency",
                value: "",
                label: "Advance Currency*",
                name: 'AdvanceCurrency',
                rules: {
                  required: true,
                },
              },
              {
                type: "number",
                value: "",
                label: "Advance Amount",
                name: 'AdvanceAmount',
                rules: {
                  required: true,
                },
              }
            ]
          ]
        },
        commercialNumber: {
          type: "text",
          typeOf: 'ALPHA_NUMERIC',
          value: "",
          label: "Commercial Invoice Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: "",
          label: "Amount*",
          rules: {
            required: true,
          }
        },
        InvoiceDate: {
          type: "date",
          value: "",
          label: "Invoice Date*",
          rules: {
            required: true,
          }
        },
        InvoiceValue: {
          type: "number",
          value: "",
          label: "Commodity Amount*",
          rules: {
            required: true,
          }
        },
        FreightValue: {
          type: "number",
          value: "",
          label: "Freight Amount*",
          rules: {
            required: true,
          }
        },
        InsuranceValue: {
          type: "number",
          value: "",
          label: "Insurance Amount*",
          rules: {
            required: true,
          }
        },
        MiscCharges: {
          type: "number",
          value: "",
          label: "Misc Charges*",
          rules: {
            required: true,
          }
        },
        ThirdParty: {
          type: "text",
          value: "",
          label: "Third Party*",
          rules: {
            required: false,
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
    e.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.value.commercialDoc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.AdvanceCurrency = e.value.AdvanceCurrency?.type != undefined ? e.value.AdvanceCurrency.type : e.value.AdvanceCurrency;
    e.value.sbNo = '';
    e.value.sbRef = [];
    e.value.BoeNo = this.validator.ORM_SELECTION_DATA?.billNo;
    e.value.BoeRef = [this.validator.ORM_SELECTION_DATA?.id];
    e.value.ORM_Ref = [this.validator.ORM_SELECTION_DATA?._id];
    this.documentService.getInvoice_No({
      commercialNumber: e.value.commercialNumber
    }, 'commercials').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        delete e.value.AdvanceInfo
        this.documentService.addCommercial(e.value).subscribe((res: any) => {
          this.toastr.success(`Commercial Invoice Added Successfully`);
          let updatedData = {
            "commercialRef": [
              res.data._id,
            ],
            "commercialdetails": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'commercial', this.pipourl1, updatedData).subscribe((data) => {
            console.log('commercial', data);
            this.router.navigate(['home/Summary/Import/Commercial']);
          }, (error) => {
            console.log('error');
          }
          );
        },
          (err) => console.log('Error adding pipo')
        );

      } else {
        this.toastr.error(`Please check this sb no. : ${e.value.commercialNumber} already exit...`);
      }
    });
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
