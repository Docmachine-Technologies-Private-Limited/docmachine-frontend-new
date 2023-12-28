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
          value: this.PIPO_DATA[0]?.currency,
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
          YesNo: 'false',
          YesButton: [
            { name: 'AdvanceInfo', status: true }
          ],
          NoButton: [
            { name: 'AdvanceInfo', status: false },
          ],
        },
        AdvanceInfo: {
          type: "formGroup",
          label: "",
          GroupLabel: ['ORM SELECTION 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "ORM_SELECTION",
                value: "",
                label: "Select Advance No.",
                name: 'ORM_SELECTION',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item['field']['NewformArray'][item?.OptionfieldIndex]["ORMAmount"]['value'] = currentVal?.amount
                  myForm.controls[item?.OptionfieldIndex]?.controls["ORMAmount"]?.setValue(currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, this.validator.FIELDS_DATA, "callback")
                },
              },
              {
                type: "currency",
                value: "",
                label: "Advance Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "TextValiadtion",
                value: "",
                label: "Advance Amount",
                name: 'ORMAmount',
                EqualName: "AvailableAmount",
                rules: {
                  required: true,
                },
                disabled: true,
                errormsg: 'Remittance amount should be lesser than  or equal to the available amount.',
              },
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
        e.commercialDoc = this.pipourl1;
        e.buyerName = this.BUYER_LIST;
        e.currency = e.currency?.type != undefined ? e.currency.type : e.currency;
        let AdvanceInfo: any = {
          ID: [],
          AdvanceCurrency: [],
          AdvanceNo: [],
          AdvanceAmount: []
        };
        e?.AdvanceInfo?.forEach(element => {
          AdvanceInfo?.ID?.push(element?.ORM_SELECTION?._id)
          AdvanceInfo?.AdvanceCurrency?.push(element?.ORM_SELECTION?.currency)
          AdvanceInfo?.AdvanceNo?.push(element?.ORM_SELECTION?.billNo)
          AdvanceInfo?.AdvanceAmount?.push(element?.ORM_SELECTION?.amount)
        });
        e.AdvanceCurrency = AdvanceInfo?.AdvanceCurrency?.join(',');
        e.AdvanceNo = AdvanceInfo?.AdvanceNo?.join(',');
        e.AdvanceAmount = AdvanceInfo?.AdvanceAmount?.join(',');
        e.sbNo = '';
        e.sbRef = [];
        e.BoeNo = this.validator.ORM_SELECTION_DATA?.billNo;
        e.BoeRef = AdvanceInfo?.ID
        e.ORM_Ref = AdvanceInfo?.ID
        this.documentService.getInvoice_No({
          commercialNumber: e.commercialNumber
        }, 'commercials').subscribe((resp: any) => {
          console.log('creditNoteNumber Invoice_No', resp)
          if (resp.data.length == 0) {
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
              });
            },(err) => console.log('Error adding pipo'));
          } else {
            this.toastr.error(`Please check this Commerical no. : ${e.commercialNumber} already exit...`);
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
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });
      this.pipoArr = PIPO_ID_ARRAY?.filter(function(item, pos) {return PIPO_ID_ARRAY.indexOf(item) == pos});
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.pipoDataService.getShippingNo(event?._id, 'import');
      let PIPODATA:any=[];
      this.documentService.getPipoByIdList(this.pipoArr).subscribe((res: any) => {
        console.log(res, 'getPipoByIdList')
        res?.forEach(element => {
          let DATA: any = element?.data[0];
          let CI_SUM = DATA?.commercialRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
          this.CI_INFO_SUM['CI_SUM'] += CI_SUM;
          this.CI_INFO_SUM['TOTAL_CI'] += DATA?.AdviceRef?.length
          this.CI_INFO_SUM['PIPO_AMOUNT'] += DATA?.amount;
          PIPODATA.push(DATA)
        });
        this.PIPO_DATA = PIPODATA;
        this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.CI_INFO_SUM['PIPO_AMOUNT']) - parseFloat(this.CI_INFO_SUM['CI_SUM']);
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
