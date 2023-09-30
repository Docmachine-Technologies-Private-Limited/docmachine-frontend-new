import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { BoeBill } from '../../../../../model/boe.model';

@Component({
  selector: 'app-boe-bill',
  templateUrl: './boe.component.html',
  styleUrls: ['./boe.component.scss', '../../commoncss/common.component.scss']
})
export class BOEComponent implements OnInit {
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
      this.UPLOAD_FORM = new BoeBill(args[1]?.data);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        CI_DETAILS: {
          type: "CommericalNo",
          value: "",
          label: "Commerical No.",
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
              value: this.UPLOAD_FORM['boeDate']?.replaceAll('/','-').toString(),
              label: "Boe Date",
              rules: {
                required: true,
              }
            },
            boeNumber: {
              type: "text",
              value: this.UPLOAD_FORM['boeNumber'],
              label: "Boe No.",
              rules: {
                required: true,
              }
            },
            AWBNo: {
              type: "text",
              value: this.UPLOAD_FORM['AWBNo'],
              label: "AWB No.*",
              rules: {
                required: true,
              }
            },
            origin: {
              type: "text",
              value: "",
              label: "ORIGIN*",
              rules: {
                required: true,
              }
            },
            dischargePort: {
              type: "text",
              value: this.UPLOAD_FORM['dischargePort'],
              label: "DISCHARGE PORT*",
              rules: {
                required: true,
              }
            },
            iecName: {
              type: "text",
              value: this.UPLOAD_FORM['iecName'],
              label: "IEC NAME",
              maxLength:200,
              rules: {
                required: true,
              }
            },
            iecCode: {
              type: "text",
              value: this.UPLOAD_FORM['iecCode'],
              label: "IEC CODE",
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
            adBillNo: {
              type: "text",
              value: '',
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
              value: this.UPLOAD_FORM['invoiceNumber'],
              label: "Invoices No.",
              rules: {
                required: true,
              }
            },
            currency: {
              type: "currency",
              value: this.UPLOAD_FORM['currency'],
              label: "Invoices Currency",
              rules: {
                required: true,
              }
            },
            invoiceAmount: {
              type: "text",
              value: this.UPLOAD_FORM['invoiceAmount'],
              label: "Invoices Amount",
              rules: {
                required: true,
              }
            },
            CIINVOICE: {
              type: "text",
              value: "",
              label: "CI INVOICE Amount",
              disabled: true,
              rules: {
                required: true,
              }
            },
            settledAmount: {
              type: "text",
              value: this.UPLOAD_FORM['settledAmount'],
              label: "SETTELED AMOUNT*",
              rules: {
                required: true,
              }
            },
            status: {
              type: "text",
              value: this.UPLOAD_FORM['status'],
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
              value: this.UPLOAD_FORM['freightCurrency'],
              label: "FREIGHT CURRENCY",
              rules: {
                required: true,
              }
            },
            freightValue: {
              type: "text",
              value: this.UPLOAD_FORM['freightAmount'],
              label: "FREIGHT VALUE",
              rules: {
                required: true,
              }
            },
            CIfreightValue: {
              type: "text",
              value: "",
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
              value: this.UPLOAD_FORM['insuranceCurrency'],
              label: "Insurance Currency",
              rules: {
                required: true,
              }
            },
            insuranceAmount: {
              type: "text",
              value: this.UPLOAD_FORM['insuranceAmount'],
              label: "INSURANCE AMOUNT*",
              rules: {
                required: true,
              }
            },
            CIinsuranceAmount: {
              type: "text",
              value: "",
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
              value: this.UPLOAD_FORM['discountCurrency'],
              label: "DISCOUNT Currency",
              rules: {
                required: true,
              }
            },
            discountAmount: {
              type: "text",
              value: this.UPLOAD_FORM['discountAmount'],
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
              value: this.UPLOAD_FORM['miscellaneousCurrency'],
              label: "MISCELLANEOUS Currency",
              rules: {
                required: true,
              }
            },
            miscellaneousAmount: {
              type: "text",
              value: "",
              label: "MISCELLANEOUS AMOUNT*",
              rules: {
                required: true,
              }
            },
            CImiscellaneousAmount: {
              type: "text",
              value: "",
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
              value: this.UPLOAD_FORM['commissionCurrency'],
              label: "COMMISSION Currency",
              rules: {
                required: true,
              }
            },
            commissionAmount: {
              type: "text",
              value: this.UPLOAD_FORM['commissionAmount'],
              label: "COMMISSION AMOUNT*",
              rules: {
                required: true,
              }
            },
          }]
        },
      }, 'BILL_OF_ENTRY');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    let newform: any = this.formJSON_To_Array(e.value);
    console.log(e, newform, 'formJSON_To_Array')
    newform.pipo = this.pipoArr;
    newform.file = 'import';
    newform.doc = this.pipourl1;
    newform.benneName = this.BUYER_LIST;
    newform.currency = newform.currency?.type != undefined ? newform.currency.type : newform.currency;
    newform.commissionCurrency = newform.commissionCurrency?.type != undefined ? newform.commissionCurrency.type : newform.commissionCurrency;
    newform.discountCurrency = newform.discountCurrency?.type != undefined ? newform.discountCurrency.type : newform.discountCurrency;
    newform.freightCurrency = newform.freightCurrency?.type != undefined ? newform.freightCurrency.type : newform.freightCurrency;
    newform.insuranceCurrency = newform.insuranceCurrency?.type != undefined ? newform.insuranceCurrency.type : newform.insuranceCurrency;
    newform.miscellaneousCurrency = newform.miscellaneousCurrency?.type != undefined ? newform.miscellaneousCurrency.type : newform.miscellaneousCurrency;
    newform.commercialNumber = newform.CI_DETAILS?.data?.commercialNumber
    console.log('Benne Name', newform);
    this.documentService.getInvoice_No({
      boeNumber: newform?.boeNumber
    }, 'boerecords').subscribe((resp: any) => {
      console.log('boerecord', resp)
      if (resp.data.length == 0) {
        this.documentService.addBoe(newform).subscribe((data: any) => {
          console.log('addBoe', data);
          let updatedData1 = {
            "boeRef": [
              data?._id,
            ]
          }
          this.userService.updateManyPipo(this.pipoArr, 'import', '', updatedData1).subscribe((data_res) => {
            console.log('updateManyPipo', data_res);
            this.toastr.success('Boe added successfully.');
            this.router.navigate(['home/Summary/Import/boe']);
          }, (error) => {
            console.log('error');
          }
          );
        }, (error) => {
          console.log('error');
        }
        );
      } else {
        this.toastr.error(`Please check this boe no. : ${newform?.boeNumber} already exit...`);
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
