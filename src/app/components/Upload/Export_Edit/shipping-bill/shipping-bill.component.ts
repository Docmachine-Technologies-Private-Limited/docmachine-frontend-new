import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { FormGroup } from '@angular/forms';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

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
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "Shippingbill")
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
    console.log(args, "Edit")
    this.publicUrl = '';
    this.changedCommercial([this.data?.pipo[0]?._id])
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.doc);
      let defaultValue: any = [];
      this.data?.invoices?.forEach(element => {
        defaultValue.push([
          {
            type: "CommericalNo",
            value: element?.invoiceno,
            label: "Invoices No.",
            name: 'invoiceno',
            id: "CommericalNo",
            rules: {
              required: true,
            },
            callback: (item: any) => {
              let SELECTED_COMMERCIAL_VALUE = this.CommercialFilter(item?.value?.id)?.length != 0 ? this.CommercialFilter(item?.value?.id)[0] : []
              console.log(item?.value, SELECTED_COMMERCIAL_VALUE, "CommericalNo")

              const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
              myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(SELECTED_COMMERCIAL_VALUE?.amount);
              myForm.controls[item?.OptionfieldIndex]?.controls["type"]?.setValue(SELECTED_COMMERCIAL_VALUE?.type);
              if (SELECTED_COMMERCIAL_VALUE?.currency == this.data?.pipo[0]?.currency) {
                myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(SELECTED_COMMERCIAL_VALUE?.currency);
                myForm['touched'] = true;
                myForm['status'] = 'VALID';
              } else {
                myForm?.setErrors({
                  matched: "Your CI Selected Currency and your pipo currency is different..."
                });
                myForm['touched'] = true;
              }
              console.log(item, "callback")
            }
          },
          {
            type: "currency",
            value: this.data?.pipo[0]?.currency,
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
          },
          {
            type: "PaymentTermType",
            value: element?.type,
            label: "Type",
            name: 'type',
            rules: {
              required: true,
            },
          },
        ])
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
          label: "SB CURRENCY",
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
          label: "SB VALUE",
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
          formArray: defaultValue
        },
      }, 'ShippingBill');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    console.log(args, "ReUplod")
    this.publicUrl = '';
    this.changedCommercial([this.data?.pipo[0]?._id])
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.UPLOAD_FORM = new ShippingBill(args[1]?.data);
      this.UPLOAD_FORM['leodate'] = this.date_format.formatDate(this.UPLOAD_FORM['leodate'], '-');
      let removeother: any = this.date_format.removeUnadvantageText(this.UPLOAD_FORM['sbdate'], '__—_—');
      this.UPLOAD_FORM['sbdate'] = this.date_format.formatDate(this.date_format.removeAllUnderscore(removeother), '-');
      this.pipourl1 = args[1].data;
      let defaultValue: any = [];
      this.data?.invoices?.forEach(element => {
        defaultValue.push([
          {
            type: "CommericalNo",
            value: element?.invoiceno,
            label: "Invoices No.",
            name: 'invoiceno',
            id: "CommericalNo",
            rules: {
              required: true,
            },
            callback: (item: any) => {
              let SELECTED_COMMERCIAL_VALUE = this.CommercialFilter(item?.value?.id)?.length != 0 ? this.CommercialFilter(item?.value?.id)[0] : []
              console.log(item?.value, SELECTED_COMMERCIAL_VALUE, "CommericalNo")

              const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
              myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(SELECTED_COMMERCIAL_VALUE?.amount);
              myForm.controls[item?.OptionfieldIndex]?.controls["type"]?.setValue(SELECTED_COMMERCIAL_VALUE?.type);
              if (SELECTED_COMMERCIAL_VALUE?.currency == this.data?.pipo[0]?.currency) {
                myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(SELECTED_COMMERCIAL_VALUE?.currency);
                myForm['touched'] = true;
                myForm['status'] = 'VALID';
              } else {
                myForm?.setErrors({
                  matched: "Your CI Selected Currency and your pipo currency is different..."
                });
                myForm['touched'] = true;
              }
              console.log(item, "callback")
            }
          },
          {
            type: "currency",
            value: this.UPLOAD_FORM['invoices'] != null && this.UPLOAD_FORM['invoices'] != undefined ? this.UPLOAD_FORM['invoices'][0]['currency'] : '',
            label: "Invoices Currency",
            name: 'currency',
            rules: {
              required: true,
            },
            disabled: true
          },
          {
            type: "text",
            value: this.UPLOAD_FORM['invoices'] != null && this.UPLOAD_FORM['invoices'] != undefined ? this.UPLOAD_FORM['invoices'][0]['amount'] : '',
            label: "Invoices Amount",
            name: 'amount',
            rules: {
              required: true,
            }
          },
          {
            type: "PaymentTermType",
            value: element?.type,
            label: "Type",
            name: 'type',
            rules: {
              required: true,
            },
          },
        ])
      });

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
          value: this.data?.pipo[0]?.currency,
          label: "SB CURRENCY",
          rules: {
            required: true,
          },
          Inputdisabled: true,
          autofill: {
            type: "formGroup",
            SetInputName: "currency",
            CONTROLS_NAME: "invoices",
            GetInputName: "currency"
          }
        },
        fobValue: {
          type: "text",
          value: this.UPLOAD_FORM['fobValue'],
          label: "SB VALUE",
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
          formArray: defaultValue
        },
      }, 'ShippingBill');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    let invoices: any = [];
    console.log(this.paymentTermSum(e.value.invoices), e.value.fobValue, "this.paymentTermSum(e.value.invoices)")
    if (parseInt(this.paymentTermSum(e.value.invoices)) == parseInt(e.value.fobValue)) {
      e.value.fobCurrency = e.value.fobCurrency?.type != undefined ? e.value.fobCurrency.type : e.value.fobCurrency;
      e.value.freightCurrency = e.value.freightCurrency?.type != undefined ? e.value.freightCurrency.type : e.value.freightCurrency;
      e.value.insuranceCurrency = e.value.insuranceCurrency?.type != undefined ? e.value.insuranceCurrency.type : e.value.insuranceCurrency;
      e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
      e.value.consigneeName = e.value.consigneeName?.value != undefined ? e.value.consigneeName.value : e.value.consigneeName;
      e.value.buyerName = this.data?.buyerName;
      e.value.doc = this.publicUrl?.doc;
      if (this.data?.sbno != e.value.sbno) {
        this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your sb no.`, 'Comments', (CustomConfirmDialogRes: any) => {
          if (CustomConfirmDialogRes?.value == "Ok") {
            this.documentService.getInvoice_No({
              sbno: e.value.sbno
            }, 'masterrecord').subscribe((resp: any) => {
              console.log('getInvoice_No', resp)
              if (resp?.data.length == 0) {
                this.documentService.updateMaster(e.value, this.data?._id).subscribe((res: any) => {
                  this.toastr.success('shipping Bill added successfully.');
                  this.router.navigate(['home/Summary/Export/Shipping-bill']);
                }, (error) => {
                  console.log('error');
                });
              } else {
                this.toastr.error(`Please check this sb no. : ${e.value.sbno} already exit...`);
              }
            })
          }
        })
      } else {
        this.documentService.updateMaster(e.value, this.data?._id).subscribe((res: any) => {
          this.toastr.success('shipping Bill added successfully.');
          this.router.navigate(['home/Summary/Export/Shipping-bill']);
        }, (error) => {
          console.log('error');
        });
      }
    } else {
      this.toastr.error(`SB Amount and total invoice amount should be equal`);
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

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('export', pipo).subscribe((res: any) => {
      this.COMMERCIAL_LIST = res?.data;
      this.validator.COMMERICAL_NO = [];
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0], doc: element?.commercialDoc });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },
      (err) => {
        console.log(err)
      }
    );
  }

  CommercialFilter(id: any) {
    return this.COMMERCIAL_LIST.filter((item: any) => item?._id?.includes(id) == true)
  }
}
