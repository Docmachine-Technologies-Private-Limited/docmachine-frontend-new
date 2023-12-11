import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'edit-import-commercial-invoices',
  templateUrl: './import-commercial-invoices.component.html',
  styleUrls: ['./import-commercial-invoices.component.scss', '../../commoncss/common.component.scss']
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
    public route: ActivatedRoute,
    public validator: UploadServiceValidatorService,
    public filteranytablepagination: filterAnyTablePagination,
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
    this.PIPOInfo(this.data?.pipo[0]?._id)
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.commercialDoc);
      this.validator.buildForm({
        commercialNumber: {
          type: "text",
          value: args?.commercialNumber,
          label: "Commercial Invoice Number",
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
        amount: {
          type: "number",
          value: args?.amount,
          label: "Amount",
          rules: {
            required: true,
          }
        },
        InvoiceDate: {
          type: "date",
          value: args?.InvoiceDate,
          label: "Invoice Date",
          rules: {
            required: true,
          }
        },
        AdvanceInfo: {
          type: "formGroup",
          label: "Advance Info",
          GroupLabel: ['Advance Info 1'],
          AddNewRequried: false,
          rules: {
            required: true,
          },
          formArray: [
            [
              {
                type: "AdvanceInfo",
                value: args?.AdvanceInfo,
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
                value: args?.AdvanceNo,
                label: "Advance No.",
                name: 'AdvanceNo',
                rules: {
                  required: true,
                },
              },
              {
                type: "currency",
                value: args?.AdvanceCurrency,
                label: "Advance Currency",
                name: 'AdvanceCurrency',
                rules: {
                  required: true,
                },
              },
              {
                type: "number",
                value: args?.AdvanceAmount,
                label: "Advance Amount",
                name: 'AdvanceAmount',
                rules: {
                  required: true,
                },
              }
            ]
          ]
        },
        InvoiceValue: {
          type: "number",
          value: args?.InvoiceValue,
          label: "Commodity Amount",
          rules: {
            required: true,
          }
        },
        FreightValue: {
          type: "number",
          value: args?.FreightValue,
          label: "Freight Amount",
          rules: {
            required: true,
          }
        },
        InsuranceValue: {
          type: "number",
          value: args?.InsuranceValue,
          label: "Insurance Amount",
          rules: {
            required: true,
          }
        },
        MiscCharges: {
          type: "number",
          value: args?.MiscCharges,
          label: "Misc Charges",
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
      }, 'EditImportCommerical');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    this.PIPOInfo(this.data?.pipo[0]?._id)
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        commercialNumber: {
          type: "text",
          value: this.data?.commercialNumber,
          label: "Commercial Invoice Number",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.data?.currency,
          label: "Currency",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: this.data?.amount,
          label: "Amount",
          rules: {
            required: true,
          }
        },
        InvoiceDate: {
          type: "date",
          value: this.data?.InvoiceDate,
          label: "Invoice Date",
          rules: {
            required: true,
          }
        },
        AdvanceInfo: {
          type: "formGroup",
          label: "Advance Info",
          GroupLabel: ['Advance Info 1'],
          AddNewRequried: false,
          rules: {
            required: true,
          },
          formArray: [
            [
              {
                type: "AdvanceInfo",
                value: this.data?.AdvanceInfo,
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
                value: this.data?.AdvanceNo,
                label: "Advance No.",
                name: 'AdvanceNo',
                rules: {
                  required: true,
                },
              },
              {
                type: "currency",
                value: this.data?.AdvanceCurrency,
                label: "Advance Currency",
                name: 'AdvanceCurrency',
                rules: {
                  required: true,
                },
              },
              {
                type: "number",
                value: this.data?.AdvanceAmount,
                label: "Advance Amount",
                name: 'AdvanceAmount',
                rules: {
                  required: true,
                },
              }
            ]
          ]
        },
        InvoiceValue: {
          type: "number",
          value: this.data?.InvoiceValue,
          label: "Commodity Amount",
          rules: {
            required: true,
          }
        },
        FreightValue: {
          type: "number",
          value: this.data?.FreightValue,
          label: "Freight Amount",
          rules: {
            required: true,
          }
        },
        InsuranceValue: {
          type: "number",
          value: this.data?.InsuranceValue,
          label: "Insurance Amount",
          rules: {
            required: true,
          }
        },
        MiscCharges: {
          type: "number",
          value: this.data?.MiscCharges,
          label: "Misc Charges",
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
      }, 'EditImportCommerical');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  PIPOInfo(id) {
    this.documentService.getPipoById(id).subscribe((res: any) => {
      this.PIPO_DATA = res?.data[0];
      let CI_SUM = this.PIPO_DATA?.commercialRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
      this.CI_INFO_SUM['CI_SUM'] = CI_SUM;
      this.CI_INFO_SUM['TOTAL_CI'] = this.PIPO_DATA?.commercialRef?.length
      this.CI_INFO_SUM['PIPO_AMOUNT'] = this.PIPO_DATA?.amount;
      this.CI_INFO_SUM['REMAINING_AMOUNT'] = (parseFloat(this.PIPO_DATA?.amount) - parseFloat(CI_SUM)) + parseFloat(this.data?.amount);
      console.log(res, "getPipoById", this.CI_INFO_SUM)
      this.documentService.filterAnyTable({
        beneficiaryName: this.PIPO_DATA?.benneName,
        currency: this.PIPO_DATA?.currency,
        pipo: [id]
      }, 'iradvices').subscribe((res: any) => {
        this.validator.ORM_BY_PARTY_NAME = res?.data;
        console.log(res, 'ORM_BY_PARTY_NAME')
      });
    })
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    if (e != false) {
      if (parseFloat(this.CI_INFO_SUM['REMAINING_AMOUNT']) >= parseFloat(e?.amount)) {
        e.currency = e.currency?.type != undefined ? e.currency.type : e.currency;
        e.AdvanceCurrency = e.AdvanceInfo[0]?.AdvanceCurrency?.type != undefined ? e.AdvanceInfo[0]?.AdvanceCurrency?.type : e.AdvanceCurrency;
        e.AdvanceNo = e.AdvanceInfo[0]?.AdvanceNo != undefined ? e.AdvanceInfo[0]?.AdvanceNo : e.AdvanceNo;
        e.AdvanceAmount = e.AdvanceInfo[0]?.AdvanceAmount != undefined ? e.AdvanceInfo[0]?.AdvanceAmount : e.AdvanceAmount;
        e.sbNo = '';
        e.sbRef = [];
        e.BoeNo = this.validator.ORM_SELECTION_DATA?.billNo;
        e.BoeRef = [this.validator.ORM_SELECTION_DATA?.id];
        e.ORM_Ref = [this.validator.ORM_SELECTION_DATA?._id];
        if (this.data?.commercialNumber != e.commercialNumber) {
          this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Commercial Invoice Number`, 'Comments', (CustomConfirmDialogRes: any) => {
            if (CustomConfirmDialogRes?.value == "Ok") {
              this.documentService.getInvoice_No({
                commercialNumber: e.commercialNumber
              }, 'commercials').subscribe((resp: any) => {
                console.log('creditNoteNumber Invoice_No', resp)
                if (resp.data.length == 0) {
                  e.commercialDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
                  this.documentService.updateCommercial(e, this.data?._id).subscribe((res: any) => {
                    this.toastr.success(`Commercial Invoice Updated Successfully`);
                    this.router.navigate(['home/Summary/Import/Commercial']);
                  }, (err) => console.log('Error adding pipo'));
                } else {
                  this.toastr.error(`Please check this Commercial Invoice Number : ${e.commercialNumber} already exit...`);
                }
              });
            }
          });
        } else {
          e.commercialDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
          this.documentService.updateCommercial(e, this.data?._id).subscribe((res: any) => {
            this.toastr.success(`Commercial Invoice Updated Successfully`);
            this.router.navigate(['home/Summary/Import/Commercial']);
          }, (err) => console.log('Error adding pipo'));
        }
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
