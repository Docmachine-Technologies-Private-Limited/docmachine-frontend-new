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
  CI_INFO_SUM: any = {
    CI_SUM: 0,
    TOTAL_CI: 0,
    PIPO_AMOUNT: 0,
    REMAINING_AMOUNT: 0
  }

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
        commercialNumber: {
          type: "text",
          value: "",
          label: "Commercial Invoice Number",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.PIPO_DATA?.currency,
          label: "Currency",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: "",
          label: "Amount",
          rules: {
            required: true,
          }
        },
        InvoiceDate: {
          type: "date",
          value: "",
          label: "Invoice Date",
          rules: {
            required: true,
          }
        },
        IfAdvancePaid: {
          type: "yesnocheckbox",
          value: 'true',
          label: "If Advance Paid?",
          rules: {
            required: false,
          },
          YesNo: 'true',
          text1: 'No',
          text2: 'Yes',
          HideShowInput: ["AdvanceInfo"],
          class: 'row-reverse'
        },
        AdvanceInfo: {
          type: "formGroup",
          label: "Advance Info",
          GroupLabel: ['Advance Info 1'],
          AddNewRequried: false,
          rules: {
            required: true,
          },
          disabled: true,
          formArray: [
            [
              {
                type: "AdvanceInfo",
                value: "",
                label: "Select Advance no.",
                name: 'AdvanceInfoAny',
                rules: {
                  required: false,
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
                  required: false,
                },
              },
              {
                type: "currency",
                value: "",
                label: "Advance Currency*",
                name: 'AdvanceCurrency',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: "",
                label: "Advance Amount",
                name: 'AdvanceAmount',
                rules: {
                  required: false,
                },
              }
            ]
          ]
        },
        InvoiceValue: {
          type: "number",
          value: "",
          label: "Commodity Amount",
          rules: {
            required: false,
          }
        },
        FreightValue: {
          type: "number",
          value: "",
          label: "Freight Amount",
          rules: {
            required: false,
          }
        },
        InsuranceValue: {
          type: "number",
          value: "",
          label: "Insurance Amount",
          rules: {
            required: false,
          }
        },
        MiscCharges: {
          type: "number",
          value: "",
          label: "Misc Charges",
          rules: {
            required: false,
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
      }, 'ImportCommerical');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, this.validator.ORM_SELECTION_DATA, 'value')
    if (e != false) {
      if (parseFloat(this.CI_INFO_SUM['REMAINING_AMOUNT']) >= parseFloat(e?.amount)) {
        e.file = 'import';
        e.pipo = this.pipoArr;
        console.log('pipoarrya', this.pipoArr);
        e.commercialDoc = this.pipourl1;
        e.buyerName = this.BUYER_LIST;
        e.currency = e.currency?.type != undefined ? e.currency.type : e.currency;
        e.AdvanceCurrency = e.AdvanceInfo[0]?.AdvanceCurrency?.type != undefined ? e.AdvanceInfo[0]?.AdvanceCurrency?.type : e.AdvanceCurrency;
        e.AdvanceNo = e.AdvanceInfo[0]?.AdvanceNo != undefined ? e.AdvanceInfo[0]?.AdvanceNo : e.AdvanceNo;
        e.AdvanceAmount = e.AdvanceInfo[0]?.AdvanceAmount != undefined ? e.AdvanceInfo[0]?.AdvanceAmount : e.AdvanceAmount;
        e.sbNo = '';
        e.sbRef = [];
        e.BoeNo = this.validator.ORM_SELECTION_DATA?.billNo;
        e.BoeRef = [this.validator.ORM_SELECTION_DATA?.id];
        e.ORM_Ref = [this.validator.ORM_SELECTION_DATA?._id];
        this.documentService.getInvoice_No({
          commercialNumber: e.commercialNumber
        }, 'commercials').subscribe((resp: any) => {
          console.log('creditNoteNumber Invoice_No', resp)
          if (resp.data.length == 0) {
            delete e.AdvanceInfo
            this.documentService.addCommercial(e).subscribe((res: any) => {
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
            this.toastr.error(`Please check this sb no. : ${e.commercialNumber} already exit...`);
          }
        });
      } else {
        this.toastr.error(`CI Amount should be equal to PIPO or less`);
      }
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
      this.pipoDataService.getShippingNo(event?._id, 'import');
      this.documentService.getPipoById(event?._id).subscribe((res: any) => {
        this.PIPO_DATA = res?.data[0];
        let CI_SUM = this.PIPO_DATA?.commercialRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
        this.CI_INFO_SUM['CI_SUM'] = CI_SUM;
        this.CI_INFO_SUM['TOTAL_CI'] = this.PIPO_DATA?.commercialRef?.length
        this.CI_INFO_SUM['PIPO_AMOUNT'] = this.PIPO_DATA?.amount;
        this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.PIPO_DATA?.amount) - parseFloat(CI_SUM);
        console.log(res, "getPipoById", this.CI_INFO_SUM)
        this.documentService.filterAnyTable({
          beneficiaryName: this.BUYER_LIST,
          currency: this.PIPO_DATA?.currency,
          pipo: this.pipoArr
        }, 'iradvices').subscribe((res: any) => {
          this.validator.ORM_BY_PARTY_NAME = res?.data;
          console.log(res, 'ORM_BY_PARTY_NAME')
        });
      })
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
