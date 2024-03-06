import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'export-commercial-invoices',
  templateUrl: './commercial-invoices.component.html',
  styleUrls: ['./commercial-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class CommercialInvoicesComponent implements OnInit {
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
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  cicreate: any = [];
  GroupLabel: any = [];
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
          label: "Commercial Invoice Number*",
          name: 'commercialNumber',
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.PIPO_DATA[0]?.currency,
          label: "Currency*",
          name: 'currency',
          disabled: true,
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "Commercial Invoice Amount",
          name: 'amount',
          rules: {
            required: true,
          }
        },
        type: {
          type: "PaymentTermType",
          value: "",
          label: "Type",
          name: 'type',
          rules: {
            required: true,
          },
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
      }, 'ExportCommercialInvoices');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    let selectedShippingBill = this.PIPO_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
    console.log(selectedShippingBill, e.amount, "selectedShippingBill")
    if (parseFloat(this.CI_INFO_SUM['CI_SUM']) <= parseFloat(selectedShippingBill)) {
      if (parseFloat(selectedShippingBill) >= parseFloat(e.amount)) {
        e.file = 'export';
        e.pipo = this.pipoArr;
        e.commercialDoc = this.pipourl1;
        e.buyerName = this.BUYER_LIST;
        e.currency = e?.currency?.type != undefined ? e?.currency?.type : e?.currency;
        e.type = e?.type?.value;
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
              }
              this.userService.updateManyPipo(this.pipoArr, 'commercial', this.pipourl1, updatedData).subscribe((data) => {
                console.log('commercial', data);
                this.router.navigate(['home/Summary/Export/commercial']);
              }, (error) => {
                console.log('error');
              });
            },
              (err) => console.log('Error adding pipo')
            );

          } else {
            this.toastr.error(`Please check this commercial no. : ${e.commercialNumber} already exit...`);
          }
        });
      } else {
        this.toastr.error(`Sorry your Sb amount and Invoices amount not equal...`);
      }
    } else {
      this.toastr.error(`Total CI amount is exceeding PI amount by.... Plz check`);
    }
  }

  checkValueExit(list: any) {
    return new Promise((resolve, reject) => {
      let counterlist: any = {
        count: 0,
        no: [],
        status: false
      };
      if (list?.length == 0) {
        resolve(counterlist);
        return;
      }
      for (let index = 0; index < list.length; index++) {
        const element: any = list[index];
        this.documentService.getInvoice_No({
          commercialNumber: element?.commercialNumber
        }, 'commercials').subscribe((resp: any) => {
          if (resp.data.length != 0) {
            counterlist['count'] += 1;
            counterlist['no'].push(element?.commercialNumber);
          }
          if ((index + 1) == list.length) {
            counterlist['status'] = counterlist['count'] == 0 ? true : false
            resolve(counterlist);
          }
        });
      }
    })
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
          let CI_SUM = DATA?.commercialRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
          this.CI_INFO_SUM['CI_SUM'] += CI_SUM;
          this.CI_INFO_SUM['TOTAL_CI'] += DATA?.AdviceRef?.length
          this.CI_INFO_SUM['PIPO_AMOUNT'] += DATA?.amount;
          PIPODATA.push(DATA)
        });
        this.PIPO_DATA = PIPODATA;
        this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.CI_INFO_SUM['PIPO_AMOUNT']) - parseFloat(this.CI_INFO_SUM['CI_SUM']);
        console.log(res, "getPipoById", this.CI_INFO_SUM)
      })
      this.COMMERCIAL_LIST = [];
      console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
