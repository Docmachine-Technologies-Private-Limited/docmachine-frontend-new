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
import { FormGroup } from '@angular/forms';

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
  UPLOAD_STATUS: boolean = false;

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
    var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
    if (temp_pipo?.length != 0) {
      this.btndisabled = false;
      this.validator.documentService.PI_PO_NUMBER_LIST = {
        PI_PO_BUYER_NAME: [],
        PI_PO_BENNE_NAME: [],
        PIPO_TRANSACTION: [],
        PIPO_NO: []
      };
      this.validator.CommonLoadTransaction(temp_pipo);;
      this.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false
    }
    console.log(temp_pipo, this.UPLOAD_STATUS, "temp_pipo")
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.UPLOAD_FORM = new BoeBill(args[1]?.data);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        boeDate: {
          type: "date",
          value: this.UPLOAD_FORM['boeDate']?.replaceAll('/', '-').toString(),
          label: "BOE Date",
          rules: {
            required: true,
          }
        },
        boeNumber: {
          type: "text",
          value: this.UPLOAD_FORM['boeNumber'],
          label: "BOE No.",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.PIPO_DATA[0]?.currency,
          label: "BOE Currency",
          rules: {
            required: true,
          },
          Inputdisabled: true,
          autofill: {
            type: "formGroup",
            SetInputName: "currency",
            CONTROLS_NAME: "CI_DETAILS",
            GetInputName: "currency"
          }
        },
        invoiceAmount: {
          type: "text",
          value: this.UPLOAD_FORM['invoiceAmount'],
          label: "BOE Amount",
          rules: {
            required: true,
          }
        },
        AWBNo: {
          type: "text",
          value: this.UPLOAD_FORM['AWBNo'],
          label: "AWB No.",
          rules: {
            required: true,
          }
        },
        origin: {
          type: "text",
          value: "",
          label: "ORIGIN",
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
        adCode: {
          type: "text",
          value: this.UPLOAD_FORM['adCode'],
          label: "AD CODE",
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
        miscellaneousAmount: {
          type: "text",
          value: "",
          label: "MISCELLANEOUS AMOUNT*",
          rules: {
            required: true,
          }
        },
        CI_DETAILS: {
          type: "formGroup",
          label: "Invoices Info",
          GroupLabel: ['Invoices 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "CommericalNo",
                value: "",
                label: "Invoices No.",
                name: 'invoiceno',
                id: "CommericalNo",
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  if (currentVal?.data?.BalanceAmount != '0' || currentVal?.data?.BalanceAmount != 0) {
                    item.form['value'][item?.fieldName][item?.OptionfieldIndex]["amount"] = (currentVal?.data?.amount);
                    myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(currentVal?.data?.amount);
                    myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.data?.currency);
                    myForm['touched'] = true;
                    myForm['status'] = 'VALID';
                    myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.enable();
                  } else {
                    item.form['value'][item?.fieldName] = null
                    myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.disable();
                    this.toastr.error("Please select other CI,\nthis CI already used another BOE...")
                  }
                  console.log(item, "callback")
                },
              },
              {
                type: "currency",
                value: this.PIPO_DATA['currency'],
                label: "Invoices Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "text",
                value: '',
                label: "Invoices Amount",
                name: 'amount',
                rules: {
                  required: true,
                }
              },
              {
                type: "PaymentTermType",
                value: "",
                label: "Type",
                name: 'type',
                rules: {
                  required: true,
                },
              },
            ]
          ]
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
      }, 'BILL_OF_ENTRY');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    let newform: any = e.value;
    console.log(e, newform, this.Percentage(parseInt(newform.invoiceAmount)), 'formJSON_To_Array')
    if (parseInt(this.paymentTermSum(newform.CI_DETAILS)) >= this.Percentage(parseInt(newform.invoiceAmount))) {
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
      let CI_LIST: any = [];
      newform.CI_DETAILS.forEach(element => {
        CI_LIST.push(element?.invoiceno?.id)
      });
      newform.CI_REF = CI_LIST
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
            let updatedData2 = {
              "BoeRef": [
                data?._id,
              ],
            }
            newform.CI_DETAILS?.forEach(element => {
              let BalanceAmount: any = parseFloat(element?.invoiceno?.data?.amount) - parseFloat(element?.amount);
              updatedData2['BalanceAmount'] = BalanceAmount
              this.documentService.updateCommercial(updatedData2, element?.invoiceno?.id).subscribe((res: any) => { })
            });
            this.userService.updateManyPipo(this.pipoArr, 'import', '', updatedData1).subscribe((data_res) => {
              console.log('updateManyPipo', data_res);
              var Transaction_id: any = [];
              let TransActionType: any = []
              this.PIPO_DATA?.forEach(element => {
                element?.TransActionType?.forEach(TransActionTypeElement => {
                  TransActionType.push(TransActionTypeElement)
                });
              });
              if (TransActionType?.length != 0) {
                TransActionType?.forEach(element => {
                  if (element?.Type == "Advance Payment") {
                    Transaction_id.push(element?.TransactionId)
                  }
                });
              } else {
                Transaction_id = this.route.snapshot.paramMap.get('transaction_id')?.split(',');
              }
              console.log(TransActionType, Transaction_id, "Transaction_id");
              if (Transaction_id?.length != 0 && Transaction_id?.length != undefined) {
                Transaction_id?.forEach((element, index) => {
                  this.documentService.AnyUpdateTable(element, { BOERef: [data?._id] }, "ExportTransaction").subscribe((res: any) => {
                    this.documentService.UpdateTransaction({ id: element, data: { BOE: newform } }).subscribe((res: any) => {
                      if ((index + 1) == Transaction_id?.length) {
                        this.toastr.success('BOE Successfully added...');
                        this.router.navigate(['home/Summary/Import/boe']);
                      }
                    });
                  });
                });
              } else {
                this.toastr.success('BOE Successfully added...');
                this.router.navigate(['home/Summary/Import/boe']);
              }
            }, (error) => {
              console.log('error');
            });
          }, (error) => {
            console.log('error');
          }
          );
        } else {
          this.toastr.error(`Please check this boe no. : ${newform?.boeNumber} already exit...`);
        }
      })
    } else {
      this.toastr.error(`BOE Amount and total invoice amount should be equal`);
    }
  }

  Percentage(amount: any) {
    return parseFloat(amount) - ((parseFloat(amount) * 5) / 100);
  }

  paymentTermSum(value: any) {
    return value?.reduce((a, b) => a + parseFloat(b?.amount), 0)
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });
      this.pipoArr = PIPO_ID_ARRAY?.filter(function (item, pos) { return PIPO_ID_ARRAY.indexOf(item) == pos });
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.changedCommercial(this.pipoArr);
      let PIPODATA: any = [];
      this.documentService.getPipoByIdList(this.pipoArr).subscribe((res: any) => {
        console.log(res, 'getPipoByIdList')
        res?.forEach(element => {
          let DATA: any = element?.data[0];
          PIPODATA.push(DATA)
        });
        this.PIPO_DATA = PIPODATA;
      });
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  COMMERICAL_NO: any = [];

  changedCommercial(pipo: any) {
    this.documentService.filterAnyTable({
      buyerName: this.BUYER_LIST,
      currency: this.PIPO_DATA?.currency,
      pipo: this.pipoArr,
      BalanceAmount: { $ne: "0" }
    }, 'commercials').subscribe((res: any) => {
      console.log(res, 'commercials')
      this.validator.COMMERICAL_NO = [];
      this.COMMERICAL_NO = res?.data;
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0], data: element });
      });
    });
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
