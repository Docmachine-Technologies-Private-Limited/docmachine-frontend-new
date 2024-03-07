import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IRAdvice } from '../../../../../model/irAdvice.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'import-outward-remittance-advice',
  templateUrl: './import-inward-remittance-advice.component.html',
  styleUrls: ['./import-inward-remittance-advice.component.scss', '../../commoncss/common.component.scss']
})
export class ImportOutwardRemittanceAdviceComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
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
    REMAINING_AMOUNT: 0,
    PAYMENTS_TERMS_AMOUNT: 0
  }
  UPLOAD_STATUS: boolean = false;
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) { }

  TIMEOUT: any = ''
  async ngOnInit() {
    setTimeout(async () => {
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
    }, 200);
  }

  load() {
    setTimeout(async () => {
      var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
      if (temp_pipo?.length != 0) {
        this.btndisabled = false;
        this.validator.SELECTED_PIPO = temp_pipo;
        // await this.documentService.getPipoListNo('import', temp_pipo);
        this.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false
      }
      console.log(temp_pipo, this.UPLOAD_STATUS, "temp_pipo")
    }, 200);
  }
  AdvanceDirectPayment: any = ''
  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      let res: any = new IRAdvice(args[1].data);
      console.log(res, 'sdfjhksdjhdkfjsdhfsdkfhsd')
      this.validator.buildForm({
        date: {
          type: "date",
          value: res?.date,
          label: "TT Date",
          rules: {
            required: true,
          }
        },
        AdvanceDirectPayment: {
          type: "DropDown",
          value: '',
          items: [{ value: 'Advance Payment' }, { value: 'Direct Imports(Payment Against Bill of entry)' }],
          bindLabel: 'value',
          Show: false,
          label: "Select Transaction Type",
          rules: {
            required: true,
          },
          callback: (items: any) => {
            let FILTER_DIRECT_PAYMENTS: any = []
            this.PIPO_DATA?.forEach(element => {
              element?.paymentTerm?.filter((val: any) => val?.type?.value == items?.value)?.forEach(FilterElement => {
                FILTER_DIRECT_PAYMENTS.push(FilterElement);
              })
            });
            console.log(items, FILTER_DIRECT_PAYMENTS, this.PIPO_DATA, "FILTER_DIRECT_PAYMENTS")
            let CI_SUM = FILTER_DIRECT_PAYMENTS?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
            this.CI_INFO_SUM['PAYMENTS_TERMS_AMOUNT'] = CI_SUM;
            if (items?.value == "Direct Imports(Payment Against Bill of entry)") {
              let boeRef: any = []
              this.PIPO_DATA?.forEach(element => {
                element?.boeRef?.filter((item: any) => item?.currency == element?.currency)?.forEach(boeelement => {
                  boeRef?.push(boeelement)
                });
              })
              boeRef?.forEach(element => {
                element['balanceAmount'] = element?.balanceAmount != '-1' ? element?.balanceAmount : element?.invoiceAmount
              });
              this.validator.BOE_LIST = boeRef;
              items.field[2]['showhide'] = true;
              items?.FormGroup?.controls['BOE_DETAIILS']?.enable();
              console.log(boeRef, "boeRef")
            } else {
              items.field[2]['showhide'] = false;
              items?.FormGroup?.controls['BOE_DETAIILS']?.disable();
              this.validator.BOE_LIST = [];
            }
            this.AdvanceDirectPayment = items?.value
            console.log(items, "AdvanceDirectPayment")
          }
        },
        BOE_DETAIILS: {
          type: "formGroup",
          label: "",
          GroupLabel: ['BOE 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          showhide: false,
          formArray: [
            [
              {
                type: "BOE",
                value: "",
                label: "Select BOE No.",
                name: 'BOE',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  myForm.controls[item?.OptionfieldIndex]?.controls["AvailableAmount"]?.setValue(currentVal?.balanceAmount != '-1' ? currentVal?.balanceAmount : currentVal?.invoiceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, this.validator.FIELDS_DATA, "callback")
                },
              },
              {
                type: "currency",
                value: "",
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "text",
                value: "",
                label: "Amount",
                name: 'AvailableAmount',
                rules: {
                  required: true,
                },
                disabled: true,
              },
            ]
          ]
        },
        billNo: {
          type: "text",
          value: res?.billNo,
          label: "Bill No",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.PIPO_DATA[0]?.currency,
          label: "Currency",
          Inputdisabled: true,
          rules: {
            required: true,
          }
        },
        partyName: {
          type: "benne",
          value: res?.partyName,
          label: "PARTY NAME",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: res?.amount,
          label: "TT AMOUNT",
          rules: {
            required: true,
          }
        },
        commision: {
          type: "number",
          value: res?.commision,
          label: "Commission",
          rules: {
            required: true,
          }
        },
        exchangeRate: {
          type: "number",
          value: res?.exchangeRate,
          label: "Exchange Rate",
          rules: {
            required: true,
          }
        },
        location: {
          type: "location",
          value: res?.location,
          label: "Location",
          rules: {
            required: false,
          }
        },
      }, 'OutwardRemittanceAdvice').then((res) => {
        this.validator.FIELDS_DATA['OutwardRemittanceAdvice'][2]['disabled'] = true;
        this.validator.dynamicFormGroup['OutwardRemittanceAdvice']?.controls['BOE_DETAIILS']?.disable();
        this.validator.BOE_LIST = [];
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    var temp: any = [];
    if (parseFloat(this.CI_INFO_SUM['REMAINING_AMOUNT']) >= parseFloat(e.value?.amount)) {
      let TOTAL_BOE_AMOUNT: any = e.value.BOE_DETAIILS?.reduce((a, b) => parseFloat(a) + parseFloat(b?.BOE?.balanceAmount), 0)
      if ((parseFloat(e?.value?.amount) <= parseFloat(TOTAL_BOE_AMOUNT) && parseFloat(TOTAL_BOE_AMOUNT) != 0) || this.AdvanceDirectPayment == "Advance Payment") {
        e.value.file = 'import';
        e.value.pipo = this.pipoArr;
        e.value.doc = this.pipourl1;
        e.value.beneficiaryName = this.BUYER_LIST;
        e.value.partyName = e.value.partyName?.value != undefined ? e.value.partyName.value : e.value.partyName;
        e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
        e.value.PaymentType = e.value.PaymentType?.value != undefined ? e.value.PaymentType.value : e.value.PaymentType;
        e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
        if (this.AdvanceDirectPayment == "Direct Imports(Payment Against Bill of entry)") {
          let BOE_Ref: any = [];
          e?.value?.BOE_DETAIILS?.forEach(element => {
            BOE_Ref.push(element?.BOE?._id)
          });
          e.value.BOE_Ref = BOE_Ref;
        } else {
          e.value.BOE_Ref = [];
        }
        console.log('doc', temp, this.pipourl1);
        console.log('onSubmitIrAdvice', e.value);
        this.documentService.getInvoice_No({
          billNo: e.value.billNo
        }, 'iradvices').subscribe((resp: any) => {
          console.log('creditNoteNumber Invoice_No', resp)
          if (resp.data.length == 0) {
            this.documentService.addIrAdvice(e.value).subscribe((data: any) => {
              console.log('addIrAdvice', data);
              let updatedData = {
                "MasterServiceRef": [
                  data?.data._id,
                ],
                "AdviceRef": [
                  data?.data._id,
                ]
              }
              if (this.AdvanceDirectPayment == "Direct Imports(Payment Against Bill of entry)") {
                this.SaveChanges(data?.data)
              }
              this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData).subscribe((data1) => {
                var Transaction_id: any = [];
                let TransActionType: any = []
                this.PIPO_DATA?.forEach(element => {
                  element?.TransActionType?.forEach(TransActionTypeElement => {
                    TransActionType.push(TransActionTypeElement)
                  });
                });
                if (TransActionType?.length != 0) {
                  TransActionType?.forEach(element => {
                    if (element?.Type == this.AdvanceDirectPayment) {
                      Transaction_id.push(element?.TransactionId)
                    }
                  });
                } else {
                  Transaction_id = this.route.snapshot.paramMap.get('transaction_id')?.split(',');
                }
                console.log(TransActionType, Transaction_id, "Transaction_id");
                if (Transaction_id?.length != 0 && Transaction_id?.length != undefined) {
                  Transaction_id?.forEach((element, index) => {
                    this.documentService.AnyUpdateTable(element, { ORMRef: [data?.data._id] }, "ExportTransaction").subscribe((res: any) => {
                      this.documentService.UpdateTransaction({ id: element, data: { ORMRefData: e.value } }).subscribe((res: any) => {
                        if ((index + 1) == Transaction_id?.length) {
                          this.toastr.success('Remittance Advice Successfully added...1');
                          this.router.navigate(['home/Summary/Import/Outward-Remittance-Advice']);
                        }
                      });
                    });
                  });
                } else {
                  this.toastr.success('Remittance Advice Successfully added...2');
                  this.router.navigate(['home/Summary/Import/Outward-Remittance-Advice']);
                }
              }, (error) => {
                console.log('error');
              });
            }, (error) => {
              console.log('error');
            });
          } else {
            this.toastr.error(`Please check this Firex Document no. : ${e.value.billNo} already exit...`);
          }
        });
      } else {
        this.toastr.error(`Total BOE amount is exceeding TT(Advice) amount by.... Plz check`);
      }
    } else {
      this.toastr.error(`Total ORM amount is exceeding PI amount by.... Plz check`);
    }
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
      let PIPODATA: any = [];
      this.documentService.getPipoByIdList(this.pipoArr).subscribe((res: any) => {
        console.log(res, 'getPipoByIdList')
        res?.forEach(element => {
          let DATA: any = element?.data[0];
          let CI_SUM = DATA?.AdviceRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
          this.CI_INFO_SUM['CI_SUM'] += CI_SUM;
          this.CI_INFO_SUM['TOTAL_CI'] += DATA?.AdviceRef?.length
          this.CI_INFO_SUM['PIPO_AMOUNT'] += DATA?.amount;
          PIPODATA.push(DATA)
        });
        this.PIPO_DATA = PIPODATA;
        this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.CI_INFO_SUM['PIPO_AMOUNT']) - parseFloat(this.CI_INFO_SUM['CI_SUM']);
        console.log(res, "getPipoById", this.CI_INFO_SUM)
      })

      // this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      // this.documentService.getPipoById(event?._id).subscribe((res: any) => {
      //   this.PIPO_DATA = res?.data[0];
      //   let CI_SUM = this.PIPO_DATA?.AdviceRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
      //   this.CI_INFO_SUM['CI_SUM'] = CI_SUM;
      //   this.CI_INFO_SUM['TOTAL_CI'] = this.PIPO_DATA?.AdviceRef?.length
      //   this.CI_INFO_SUM['PIPO_AMOUNT'] = this.PIPO_DATA?.amount;
      //   this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.PIPO_DATA?.amount) - parseFloat(CI_SUM);
      //   console.log(res, "getPipoById", this.CI_INFO_SUM)
      // })
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  tp: any = {
    firxNumber: [],
    firxDate: [],
    firxCurrency: [],
    firxAmount: [],
    firxCommision: [],
    firxRecAmo: [],
    FirxUsed_Balance: [],
    id: [],
  };

  SaveChanges(data: any) {
    if (data != undefined) {
      this.tp = {
        firxNumber: [],
        firxDate: [],
        firxCurrency: [],
        firxAmount: [],
        firxCommision: [],
        firxRecAmo: [],
        FirxUsed_Balance: [],
        id: [],
      };
      this.tp['firxNumber'].push(data?.billNo)
      this.tp['firxDate'].push(data?.date)
      this.tp['firxCurrency'].push(data?.currency)
      this.tp['firxAmount'].push(data?.amount)
      this.tp['firxCommision'].push(data?.commision)

      this.tp['FirxUsed_Balance'].push(data?.amount)
      this.tp['firxRecAmo'].push(0);
      this.tp['id'].push(data?._id);

      this.documentService.Update_Amount_by_Table({
        tableName: 'iradvices',
        id: data._id,
        query: {
          BalanceAvail: 0,
          CommissionUsed: true,
          MatchOffData: data,
          UsedAmount: data?.amount
        }
      }).subscribe((list: any) => {

      })
      data?.BOE_DETAIILS.forEach(element => {
        let Createquery = {
          ORMNumber: this.tp?.firxNumber.join(','),
          ORMDate: this.tp?.firxDate.join(','),
          ORMCurrency: this.tp?.firxCurrency.join(','),
          ORMAmount: this.tp?.firxAmount.join(','),
          ORMCommision: this.tp?.firxCommision.join(','),
          ORMRecAmo: '0',
          FirxUsed_Balance: this.tp?.FirxUsed_Balance.join(','),
          MatchOffData: data,
          balanceAmount: 0
        }
        this.documentService.Update_Amount_by_Table({
          tableName: 'boerecords',
          id: element?.BOE?._id,
          query: Createquery
        }).subscribe((r2: any) => {
        });
      });
    } else {
      this.toastr.error("No Changes Found...")
    }
    console.log(data, "SaveChanges")
  }

  FIRX_AMOUNT(amountarray: any): any {
    return parseFloat(amountarray?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
  }
}
