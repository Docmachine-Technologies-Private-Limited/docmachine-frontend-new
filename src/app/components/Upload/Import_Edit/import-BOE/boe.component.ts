import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { BoeBill } from '../../../../../model/boe.model';
import $ from "jquery";

@Component({
  selector: 'edit-app-boe-bill',
  templateUrl: './boe.component.html',
  styleUrls: ['./boe.component.scss', '../../commoncss/common.component.scss']
})
export class EditBOEComponent implements OnInit {
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
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
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
      console.log(this.data, "EditBOEComponent")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.changedCommercial(args?.pipo[0]?._id)
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        CI_DETAILS: {
          type: "CommericalNo",
          value: args?.CI_DETAILS,
          label: "Commerical No.",
          id:"CommericalNo",
          autofill: [{ input: 'CIINVOICE', key: 'InvoiceValue', name: 'invoices', index: 3, equalinput: 'invoiceNumber', equalindex: 3 },
          { input: 'CIfreightValue', key: 'FreightValue', name: 'FOBFREIGHT', index: 2, equalinput: 'freightValue', equalindex: 1 },
          { input: 'CIinsuranceAmount', key: 'InsuranceValue', name: 'INSURANCE', index: 2, equalinput: 'insuranceAmount', equalindex: 1 },
          { input: 'CImiscellaneousAmount', key: 'MiscCharges', name: 'MISCELLANEOUS', index: 2, equalinput: 'miscellaneousAmount', equalindex: 1 }],
          autofillrequired: true,
          rules: {
            required: true,
          }
        },
        BOEDETAILS: {
          type: "formArray",
          label: "BOE DETAILS",
          GroupLabel: ['BOE DETAILS 1'],
          MAX_LIMIT: 9,
          rules: {
            required: true,
          },
          formGroup: [{
            boeDate: {
              type: "date",
              value: args?.boeDate,
              label: "Boe Date",
              rules: {
                required: true,
              }
            },
            boeNumber: {
              type: "text",
              value:  args?.boeNumber,
              label: "Boe No.",
              rules: {
                required: true,
              }
            },
            AWBNo: {
              type: "text",
              value:  args?.AWBNo,
              label: "AWB No.*",
              rules: {
                required: true,
              }
            },
            origin: {
              type: "text",
              value:  args?.origin,
              label: "ORIGIN*",
              rules: {
                required: true,
              }
            },
            dischargePort: {
              type: "text",
              value:  args?.dischargePort,
              label: "DISCHARGE PORT*",
              rules: {
                required: true,
              }
            },
            iecName: {
              type: "text",
              value: args?.iecName,
              label: "IEC NAME",
              maxLength:200,
              rules: {
                required: true,
              }
            },
            iecCode: {
              type: "text",
              value:  args?.iecCode,
              label: "IEC CODE",
              rules: {
                required: true,
              }
            },
            adCode: {
              type: "text",
              value:  args?.adCode,
              label: "AD CODE",
              rules: {
                required: true,
              }
            },
            adBillNo: {
              type: "text",
              value:  args?.adBillNo,
              label: "AD BILL CODE*",
              rules: {
                required: true,
              }
            },

          }]
        },
        invoices: {
          type: "formArray",
          label: "Invoices Info",
          GroupLabel: ['Invoices 1'],
          AutoFill: true,
          EqualList: {
            key: 'CIINVOICE',
            equalkey: 'invoiceAmount',
            index: 3,
            equalindex: 2,
            errormsg: 'INVOICE AMOUNT and CI INVOICE AMOUNT should be equal is required.',
          },
          MAX_LIMIT: 6,
          rules: {
            required: true,
          },
          formGroup: [{
            invoiceNumber: {
              type: "text",
              value:  args?.invoiceNumber,
              label: "Invoices No.",
              rules: {
                required: true,
              }
            },
            currency: {
              type: "currency",
              value:  args?.currency,
              label: "Invoices Currency",
              rules: {
                required: true,
              }
            },
            invoiceAmount: {
              type: "text",
              value:  args?.invoiceAmount!="NF"?args?.invoiceAmount:0,
              label: "Invoices Amount",
              rules: {
                required: true,
              }
            },
            CIINVOICE: {
              type: "text",
              value: args?.CI_DETAILS?.data?.InvoiceValue,
              label: "CI INVOICE Amount",
              disabled: true,
              rules: {
                required: true,
              }
            },
            settledAmount: {
              type: "text",
              value: args?.settledAmount,
              label: "SETTELED AMOUNT*",
              rules: {
                required: true,
              }
            },
            status: {
              type: "text",
              value: args?.status,
              label: "STATUS*",
              rules: {
                required: true,
              }
            }
          }]
        },
        FOBFREIGHT: {
          type: "formArray",
          label: "FOB and FREIGHT",
          GroupLabel: ['FOB and FREIGHT 1'],
          AutoFill: true,
          EqualList: {
            key: 'CIfreightValue',
            equalkey: 'freightValue',
            index: 2,
            equalindex: 1,
            errormsg: 'FREIGHT AMOUNT and CI FREIGHT AMOUNT should be equal is required.',
          },
          MAX_LIMIT: 3,
          rules: {
            required: true,
          },
          formGroup: [{
            freightCurrency: {
              type: "currency",
              value: args?.freightCurrency,
              label: "FREIGHT CURRENCY",
              rules: {
                required: true,
              }
            },
            freightValue: {
              type: "text",
              value: args?.freightAmount,
              label: "FREIGHT VALUE",
              rules: {
                required: true,
              }
            },
            CIfreightValue: {
              type: "text",
              value:  args?.CI_DETAILS?.data?.FreightValue,
              label: "CI FREIGHT VALUE",
              disabled: true,
              rules: {
                required: true,
              }
            }
          }]
        },
        INSURANCE: {
          type: "formArray",
          label: "INSURANCE",
          GroupLabel: ['INSURANCE 1'],
          AutoFill: true,
          EqualList: {
            key: 'CIinsuranceAmount',
            equalkey: 'insuranceAmount',
            index: 2,
            equalindex: 1,
            errormsg: 'INSURANCE AMOUNT and CI INSURANCE AMOUNT should be equal is required.',
          },
          MAX_LIMIT: 3,
          rules: {
            required: true,
          },
          formGroup: [{
            insuranceCurrency: {
              type: "currency",
              value: args?.insuranceCurrency,
              label: "Insurance Currency",
              rules: {
                required: true,
              }
            },
            insuranceAmount: {
              type: "text",
              value: args?.insuranceAmount!="NF"?args?.insuranceAmount:'0',
              label: "INSURANCE AMOUNT*",
              rules: {
                required: true,
              }
            },
            CIinsuranceAmount: {
              type: "text",
              value:  args?.CI_DETAILS?.data?.InsuranceValue,
              label: "CI INSURANCE AMOUNT*",
              disabled: true,
              rules: {
                required: true,
              }
            },
          }]
        },
        DISCOUNT: {
          type: "formArray",
          label: "DISCOUNT",
          GroupLabel: ['DISCOUNT 1'],
          MAX_LIMIT: 2,
          rules: {
            required: true,
          },
          formGroup: [{
            discountCurrency: {
              type: "currency",
              value: args?.discountCurrency,
              label: "DISCOUNT Currency",
              rules: {
                required: true,
              }
            },
            discountAmount: {
              type: "text",
              value: args?.discountAmount!="NF"?args?.discountAmount:'0',
              label: "DISCOUNT AMOUNT*",
              rules: {
                required: true,
              }
            },
          }]
        },
        MISCELLANEOUS: {
          type: "formArray",
          label: "MISCELLANEOUS",
          GroupLabel: ['MISCELLANEOUS 1'],
          AutoFill: true,
          EqualList: {
            key: 'CImiscellaneousAmount',
            equalkey: 'miscellaneousAmount',
            index: 2,
            equalindex: 1,
            errormsg: 'MISCELLANEOUS AMOUNT and CI MISCELLANEOUS AMOUNT should be equal is required.',
          },
          MAX_LIMIT: 3,
          rules: {
            required: true,
          },
          formGroup: [{
            miscellaneousCurrency: {
              type: "currency",
              value: args?.miscellaneousCurrency,
              label: "MISCELLANEOUS Currency",
              rules: {
                required: true,
              }
            },
            miscellaneousAmount: {
              type: "text",
              value:  args?.miscellaneousAmount!="NF"?args?.miscellaneousAmount:'0',
              label: "MISCELLANEOUS AMOUNT*",
              rules: {
                required: true,
              }
            },
            CImiscellaneousAmount: {
              type: "text",
              value:  args?.CI_DETAILS?.data?.MiscCharges,
              label: "CI MISCELLANEOUS AMOUNT*",
              disabled: true,
              rules: {
                required: true,
              }
            },
          }]
        },
        COMMISSION: {
          type: "formArray",
          label: "COMMISSION",
          GroupLabel: ['COMMISSION 1'],
          MAX_LIMIT: 2,
          rules: {
            required: true,
          },
          formGroup: [{
            commissionCurrency: {
              type: "currency",
              value: args?.commissionCurrency,
              label: "COMMISSION Currency",
              rules: {
                required: true,
              }
            },
            commissionAmount: {
              type: "text",
              value: args?.commissionAmount!="NF"?args?.commissionAmount:'0',
              label: "COMMISSION AMOUNT*",
              rules: {
                required: true,
              }
            },
          }]
        },
      }, 'BILL_OF_ENTRY').then((res)=>{
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    let newform: any = this.formJSON_To_Array(e.value);
    console.log(e, newform, 'formJSON_To_Array')
    newform.file = 'import';
    newform.currency = newform.currency?.type != undefined ? newform.currency.type : newform.currency;
    newform.commissionCurrency = newform.commissionCurrency?.type != undefined ? newform.commissionCurrency.type : newform.commissionCurrency;
    newform.discountCurrency = newform.discountCurrency?.type != undefined ? newform.discountCurrency.type : newform.discountCurrency;
    newform.freightCurrency = newform.freightCurrency?.type != undefined ? newform.freightCurrency.type : newform.freightCurrency;
    newform.insuranceCurrency = newform.insuranceCurrency?.type != undefined ? newform.insuranceCurrency.type : newform.insuranceCurrency;
    newform.miscellaneousCurrency = newform.miscellaneousCurrency?.type != undefined ? newform.miscellaneousCurrency.type : newform.miscellaneousCurrency;
    console.log('Benne Name', newform);
    this.documentService.updateBoe(newform,this.data?._id).subscribe((data: any) => {
      this.toastr.success('Boe added successfully.');
      this.router.navigate(['home/Summary/Import/boe']);
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('import', pipo).subscribe((res: any) => {
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0], data: element });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },
      (err) => {
        console.log(err)
      }
    );
  }
  
  formJSON_To_Array(data: any) {
    var temp: any = {};
    for (const key in data) {
      if (data[key].length != undefined) {
        data[key]?.forEach(element => {
          for (const key2 in element) {
            temp[key2] = element[key2]
          }
        });
      } else {
        temp[key] = data[key];
      }
    }
    return temp;
  }
}
