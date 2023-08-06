import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'app-shipping-bill',
  templateUrl: './shipping-bill.component.html',
  styleUrls: ['./shipping-bill.component.scss', '../../commoncss/common.component.scss']
})
export class ShippingBillComponent implements OnInit {
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
  @Input('PipoId') Pipoid:any='';
  
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
      this.UPLOAD_FORM = new ShippingBill(args[1]?.data);
      this.UPLOAD_FORM['leodate'] = this.date_format.formatDate(this.UPLOAD_FORM['leodate'], '-');
      let removeother: any = this.date_format.removeUnadvantageText(this.UPLOAD_FORM['sbdate'], '__—_—');
      this.UPLOAD_FORM['sbdate'] = this.date_format.formatDate(this.date_format.removeAllUnderscore(removeother), '-');
      this.pipourl1 = args[1].data;
      const defaultinvoice: any = [
        [
          {
            type: "text",
            value: "1",
            label: "Invoices Sno.",
            name: 'sno',
            rules: {
              required: true,
            },
          },
          {
            type: "text",
            value: "",
            label: "Invoices No.",
            name: 'invoiceno',
            rules: {
              required: true,
            }
          },
          {
            type: "currency",
            value: "",
            label: "Invoices Currency",
            name: 'currency',
            rules: {
              required: true,
            }
          },
          {
            type: "text",
            value: "",
            label: "Invoices Amount",
            name: 'amount',
            rules: {
              required: true,
            }
          }
        ]
      ]
      this.validator.buildForm({
        sbdate: {
          type: "date",
          value: this.UPLOAD_FORM['sbdate'],
          label: "Sb Date",
          rules: {
            required: true,
          }
        },
        sbno: {
          type: "text",
          value: this.UPLOAD_FORM['sbno'],
          label: "SB No.",
          rules: {
            required: true,
          }
        },
        adCode: {
          type: "text",
          value: this.UPLOAD_FORM['adCode'],
          label: "AD CODE",
          rules: {
            required: true,
          }
        },
        buyerName: {
          type: "text",
          value: this.BUYER_LIST[0],
          label: "Buyer Name",
          disabled: true,
          rules: {
            required: true,
          }
        },
        consigneeName: {
          type: "consignee",
          value: this.UPLOAD_FORM['consigneeName'],
          label: "Consignee Name",
          rules: {
            required: true,
          }
        },
        countryOfFinaldestination: {
          type: "text",
          value: this.UPLOAD_FORM['countryOfFinaldestination'],
          label: "Country Of Final Destination",
          rules: {
            required: true,
          }
        },
        exporterLocationCode: {
          type: "text",
          value: this.UPLOAD_FORM['exporterLocationCode'],
          label: "EXPORTER LOCATION CODE",
          rules: {
            required: true,
          }
        },
        fobCurrency: {
          type: "currency",
          value: this.UPLOAD_FORM['fobCurrency'],
          label: "FOB CURRENCY",
          rules: {
            required: true,
          }
        },
        fobValue: {
          type: "text",
          value: this.UPLOAD_FORM['fobValue'],
          label: "FOB VALUE",
          rules: {
            required: true,
          }
        },
        freightCurrency: {
          type: "currency",
          value: this.UPLOAD_FORM['freightCurrency'],
          label: "FREIGHT CURRENCY",
          rules: {
            required: true,
          }
        },
        freightValue: {
          type: "text",
          value: this.UPLOAD_FORM['freightValue'],
          label: "FREIGHT VALUE",
          rules: {
            required: true,
          }
        },
        iecName: {
          type: "text",
          value: this.UPLOAD_FORM['iecName'],
          label: "IEC NAME",
          maxLength: 200,
          rules: {
            required: true,
          }
        },
        ieccode: {
          type: "text",
          value: this.UPLOAD_FORM['ieccode'],
          label: "IEC CODE",
          rules: {
            required: true,
          }
        },
        insuranceCurrency: {
          type: "currency",
          value: this.UPLOAD_FORM['insuranceCurrency'],
          label: "Insurance Currency",
          rules: {
            required: true,
          }
        },
        insuranceValue: {
          type: "text",
          value: this.UPLOAD_FORM['insuranceValue'],
          label: "Insurance Value",
          rules: {
            required: true,
          }
        },
        leodate: {
          type: "date",
          value: this.UPLOAD_FORM['leodate'],
          label: "LEO DATE",
          rules: {
            required: true,
          }
        },
        portCode: {
          type: "text",
          value: this.UPLOAD_FORM['portCode'],
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
          formArray: this.UPLOAD_FORM['invoices'] != undefined ? [
            [
              {
                type: "text",
                value: this.UPLOAD_FORM['invoices'][0]['sno'],
                label: "Invoices Sno.",
                name: 'sno',
                rules: {
                  required: true,
                },
              },
              {
                type: "text",
                value: this.UPLOAD_FORM['invoices'][0]['invoiceno'],
                label: "Invoices No.",
                name: 'invoiceno',
                rules: {
                  required: true,
                }
              },
              {
                type: "currency",
                value: this.UPLOAD_FORM['invoices'][0]['currency'],
                label: "Invoices Currency",
                name: 'currency',
                rules: {
                  required: true,
                }
              },
              {
                type: "text",
                value: this.UPLOAD_FORM['invoices'][0]['amount'],
                label: "Invoices Amount",
                name: 'amount',
                rules: {
                  required: true,
                }
              }
            ]
          ] : defaultinvoice
        }
      }, 'ShippingBill');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    let invoices: any = [];
    e.value.file = 'export';
    for (let i = 0; i < e?.invoices?.length; i++) {
      invoices = Object.assign(e?.invoices[i], invoices)
    }
    console.log(invoices);
    e.value.fobCurrency = e.value.fobCurrency?.type != undefined ? e.value.fobCurrency.type : e.value.fobCurrency;
    e.value.freightCurrency = e.value.freightCurrency?.type != undefined ? e.value.freightCurrency.type : e.value.freightCurrency;
    e.value.insuranceCurrency = e.value.insuranceCurrency?.type != undefined ? e.value.insuranceCurrency.type : e.value.insuranceCurrency;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.consigneeName = e.value.consigneeName?.value != undefined ? e.value.consigneeName.value : e.value.consigneeName;
    e.value.buyerName = this.BUYER_LIST
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1?.doc;
    this.documentService.getInvoice_No({
      sbno: e.value.sbno
    }, 'masterrecord').subscribe((resp: any) => {
      console.log('getInvoice_No', resp)
      if (resp?.data.length == 0) {
        this.documentService.addMasterBySb(e.value).subscribe((res: any) => {
          console.log('Shippingbill updated Successfully');
          let updatedData: any = ''
          updatedData = {
            "sbRef": [
              res?.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'export', this.pipourl1.doc, updatedData).subscribe((data) => {
            console.log(data);
            this.toastr.success('shipping Bill added successfully.');
            if (this.validator.SELECTED_PIPO?.length == 0) {
              this.router.navigate(['home/Summary/Export/Shipping-bill']);
            }
          }, (error) => {
            console.log('error');
          }
          );
        }, (error) => {
          console.log('error');
        }
        );
      } else {
        this.toastr.error(`Please check this sb no. : ${e.value.sbno} already exit...`);
      }
    })
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
