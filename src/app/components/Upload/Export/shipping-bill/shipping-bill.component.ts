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

@Component({
  selector: 'app-shipping-bill',
  templateUrl: './shipping-bill.component.html',
  styleUrls: ['./shipping-bill.component.scss']
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
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {
    name: '',
    lastName: '',
    address: '',
    age: '',
  };
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    private fb: FormBuilder,
    public userService: UserService) { }

  async ngOnInit() {
    this.CURRENCY_LIST = this.documentService.getCurrencyList();
    this.userService.getBuyer(1).subscribe((res: any) => {
      res.data?.forEach(element => {
        if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
          this.ConsigneeNameList.push({ value: element?.ConsigneeName })
        }
        this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
      });
      console.log('Benne Detail111', this.ConsigneeNameList, this.BUYER_DETAILS);
    },
      (err) => console.log('Error', err));
    await this.pipoDataService.getPipoList('export').then(async (data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        this.PIPO_DATA = data;
        console.log(data, 'data2222..................')
      });
    });
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
      const defaultinvoice: any = [{
        sno: {
          type: "text",
          value: "",
          label: "Invoices Sno.",
          rules: {
            required: true,
          }
        },
        invoiceno: {
          type: "text",
          value: "",
          label: "Invoices No.",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Invoices Currency",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "Invoices Amount",
          rules: {
            required: true,
          }
        }
      }]
      this.buildForm({
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
          type: "buyer",
          value: this.UPLOAD_FORM['buyerName'],
          label: "Buyer Name",
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
        realizedfreightCurrency: {
          type: "currency",
          value: this.UPLOAD_FORM['realizedfreightCurrency'],
          label: "FREIGHT Currency",
          rules: {
            required: true,
          }
        },
        realizedfreightValue: {
          type: "text",
          value: this.UPLOAD_FORM['realizedfreightValue'],
          label: "FREIGHT VALUE",
          rules: {
            required: true,
          }
        },
        invoices: {
          type: "formArray",
          label: "Invoices Info",
          rules: {
            required: true,
          },
          formGroup: this.UPLOAD_FORM['invoices'] != undefined ? [{
            sno: {
              type: "text",
              value: this.UPLOAD_FORM['invoices'][0]['sno'],
              label: "Invoices Sno.",
              rules: {
                required: true,
              },
            },
            invoiceno: {
              type: "text",
              value: this.UPLOAD_FORM['invoices'][0]['invoiceno'],
              label: "Invoices No.",
              rules: {
                required: true,
              }
            },
            currency: {
              type: "currency",
              value: this.UPLOAD_FORM['invoices'][0]['currency'],
              label: "Invoices Currency",
              rules: {
                required: true,
              }
            },
            amount: {
              type: "text",
              value: this.UPLOAD_FORM['invoices'][0]['amount'],
              label: "Invoices Amount",
              rules: {
                required: true,
              }
            }
          }] : defaultinvoice
        }
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(value: any) {
    console.log(value, 'value')
    let invoices: any = [];
    value.form.value.file = 'export';
    // for (let i = 0; i < this.UPLOAD_FORM?.invoices?.length; i++) {
    //   invoices.push({
    //     sno: value.form.value[`sno${i + 1}`],
    //     invoiceno: value.form.value[`invoiceno${i + 1}`],
    //     amount: value.form.value[`amount${i + 1}`],
    //     currency: value.form.value[`currency${i + 1}`],
    //   });
    // }
    // console.log(invoices);
    // value.form.value.invoices = invoices.length != 0 ? invoices : this.INVOICE_LIST;
    // value.form.value.fobCurrency = value.form.value.fobCurrency?.type != undefined ? value.form.value.fobCurrency.type : value.form.value.fobCurrency;
    // value.form.value.freightCurrency = value.form.value.freightCurrency?.type != undefined ? value.form.value.freightCurrency.type : value.form.value.freightCurrency;
    // value.form.value.insuranceCurrency = value.form.value.insuranceCurrency?.type != undefined ? value.form.value.insuranceCurrency.type : value.form.value.insuranceCurrency;
    // value.form.value.currency = value.form.value.currency?.type != undefined ? value.form.value.currency.type : value.form.value.currency;
    // value.form.value.consigneeName = value.form.value.consigneeName?.value != undefined ? value.form.value.consigneeName.value : value.form.value.consigneeName;
    // value.form.value.buyerName = value.form.value.buyerName?.value != undefined ? [value.form.value.buyerName.value] : [value.form.value.buyerName];
    // value.form.value.pipo = this.pipoArr;
    // value.form.value.doc = this.pipourl1?.doc;
    console.log('buyername', value);
    // this.documentService.getInvoice_No({
    //   sbno: value.form.value.sbno
    // }, 'masterrecord').subscribe((resp: any) => {
    //   console.log('getInvoice_No', resp)
    //   if (resp?.data.length == 0) {
    //     this.documentService.addMasterBySb(value.form.value).subscribe((res: any) => {
    //       console.log('Shippingbill updated Successfully');
    //       let updatedData: any = ''
    //       updatedData = {
    //         "sbRef": [
    //           res?.data._id,
    //         ],
    //       }
    //       this.userService.updateManyPipo(this.pipoArr, 'export', this.pipourl1.doc, updatedData).subscribe((data) => {
    //         console.log(data);
    //         this.toastr.success('shipping Bill added successfully.');
    //         this.router.navigate(['/home/view-document/sb']);
    //       }, (error) => {
    //         console.log('error');
    //       }
    //       );
    //     }, (error) => {
    //       console.log('error');
    //     }
    //     );
    //   } else {
    //     this.toastr.error(`Please check this sb no. : ${value.form.value.sbno} already exit...`);
    //   }
    // })
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  buildForm(model: any) {
    const formGroupFields = this.getFormControlsFields(model);
    this.dynamicFormGroup = new FormGroup(formGroupFields);
    console.log(this.dynamicFormGroup, 'dynamicFormGroup')
  }

  getFormControlsFields(model: any) {
    const formGroupFields = {};
    for (let field of Object.keys(model)) {
      let id: any = field;
      const fieldProps = model[field];
      if (fieldProps?.type != "formArray") {
        formGroupFields[field] = new FormControl(fieldProps.value, Validators.required);
        this.fields.push({ ...fieldProps, fieldName: field });
      } else {
        let control: any = fieldProps?.formGroup?.map(r =>
          new FormGroup(Object.entries(r).reduce((acc, [k, v]) => {
            let vk: any = v;
            acc[k] = new FormControl(vk?.value || "", Validators.required);
            return acc;
          }, {})));
        formGroupFields[field] = control[0];
        console.log(id, fieldProps, control, this.fields, 'hghjgjhghjgjh')
        let control2: any = fieldProps?.formGroup?.map(r => {
          var temp: any = [];
          for (let field_1 of Object.keys(r)) {
            temp.push({ ...r[field_1], fieldName: field_1 })
          }
          return temp;
        });
        fieldProps['formGroup'] = control2[0];
        this.fields.push({ ...fieldProps, fieldName: field });
      }
    }
    console.log(this.fields, 'hghjgjhghjgjh')
    return formGroupFields;
  }
}
