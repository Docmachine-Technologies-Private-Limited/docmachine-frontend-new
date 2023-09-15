import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'edit-app-shipping-bill',
  templateUrl: './shipping-bill.component.html',
  styleUrls: ['./shipping-bill.component.scss', '../../commoncss/common.component.scss']
})
export class EditShippingBillComponent implements OnInit {
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
  @Input('PipoId') Pipoid: any = '';
  data: any = [];

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
      console.log(this.data, "Shippingbill")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.doc);
      let defaultinvoice: any = [];
      args?.invoices?.forEach(element => {
        defaultinvoice.push([
          {
            type: "text",
            value: element?.sno,
            label: "Invoices Sno.",
            name: 'sno',
            rules: {
              required: true,
            },
          },
          {
            type: "text",
            value: element?.invoiceno,
            label: "Invoices No.",
            name: 'invoiceno',
            rules: {
              required: true,
            }
          },
          {
            type: "currency",
            value: element?.currency,
            label: "Invoices Currency",
            name: 'currency',
            rules: {
              required: true,
            },
            disabled: true
          },
          {
            type: "text",
            value: element?.amount,
            label: "Invoices Amount",
            name: 'amount',
            rules: {
              required: true,
            }
          }
        ]);
      });

      this.validator.buildForm({
        sbdate: {
          type: "date",
          value: args?.sbdate,
          label: "Sb Date",
          rules: {
            required: true,
          }
        },
        sbno: {
          type: "text",
          value: args?.sbno,
          label: "SB No.",
          rules: {
            required: true,
          }
        },
        adCode: {
          type: "text",
          value: args?.adCode,
          label: "AD CODE",
          rules: {
            required: true,
          }
        },
        buyerName: {
          type: "text",
          value: args?.buyerName,
          label: "Buyer Name",
          disabled: true,
          rules: {
            required: true,
          }
        },
        consigneeName: {
          type: "consignee",
          value: args?.consigneeName,
          label: "Consignee Name",
          rules: {
            required: true,
          }
        },
        countryOfFinaldestination: {
          type: "text",
          value: args?.countryOfFinaldestination,
          label: "Country Of Final Destination",
          rules: {
            required: true,
          }
        },
        exporterLocationCode: {
          type: "text",
          value: args?.exporterLocationCode,
          label: "EXPORTER LOCATION CODE",
          rules: {
            required: true,
          }
        },
        fobCurrency: {
          type: "currency",
          value: args?.fobCurrency,
          label: "FOB CURRENCY",
          rules: {
            required: true,
          },
          autofill: {
            type: "formGroup",
            SetInputName: "currency",
            CONTROLS_NAME: "invoices",
            GetInputName: "currency"
          }
        },
        fobValue: {
          type: "text",
          value: args?.fobValue,
          label: "FOB VALUE",
          rules: {
            required: true,
          }
        },
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
          value: args?.freightValue != "NF" ? args?.freightValue : 0,
          label: "FREIGHT VALUE",
          rules: {
            required: true,
          }
        },
        iecName: {
          type: "text",
          value: args?.iecName,
          label: "IEC NAME",
          maxLength: 200,
          rules: {
            required: true,
          }
        },
        ieccode: {
          type: "text",
          value: args?.ieccode,
          label: "IEC CODE",
          rules: {
            required: true,
          }
        },
        insuranceCurrency: {
          type: "currency",
          value: args?.insuranceCurrency,
          label: "Insurance Currency",
          rules: {
            required: true,
          }
        },
        insuranceValue: {
          type: "text",
          value: args?.insuranceValue != 'NF' ? args?.insuranceValue : 0,
          label: "Insurance Value",
          rules: {
            required: true,
          }
        },
        leodate: {
          type: "date",
          value: args?.leodate,
          label: "LEO DATE",
          rules: {
            required: true,
          }
        },
        portCode: {
          type: "text",
          value: args?.portCode,
          label: "PORT CODE",
          rules: {
            required: true,
          }
        },
        invoices: {
          type: "formGroup",
          label: "Invoices Info",
          GroupLabel: ['Invoices 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: defaultinvoice
        }
      }, 'ShippingBill');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    let invoices: any = [];
    console.log(this.paymentTermSum(e.value.invoices), e.value.fobValue, "this.paymentTermSum(e.value.invoices)")
    if (this.paymentTermSum(e.value.invoices) <= parseInt(e.value.fobValue)) {
      for (let i = 0; i < e?.invoices?.length; i++) {
        invoices = Object.assign(e?.invoices[i], invoices)
      }
      console.log(invoices);
      e.value.fobCurrency = e.value.fobCurrency?.type != undefined ? e.value.fobCurrency.type : e.value.fobCurrency;
      e.value.freightCurrency = e.value.freightCurrency?.type != undefined ? e.value.freightCurrency.type : e.value.freightCurrency;
      e.value.insuranceCurrency = e.value.insuranceCurrency?.type != undefined ? e.value.insuranceCurrency.type : e.value.insuranceCurrency;
      e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
      e.value.consigneeName = e.value.consigneeName?.value != undefined ? e.value.consigneeName.value : e.value.consigneeName;
      this.documentService.updateMaster(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success('shipping Bill added successfully.');
        if (this.validator.SELECTED_PIPO?.length == 0) {
          this.router.navigate(['home/Summary/Export/Shipping-bill']);
        }
      }, (error) => {
        console.log('error');
      });
    } else {
      this.toastr.error(`Sorry your Sb amount and Invoices amount not equal...`);
    }
  }
  paymentTermSum(value: any) {
    return value.reduce((a, b) => a + parseFloat(b?.amount), 0)
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
