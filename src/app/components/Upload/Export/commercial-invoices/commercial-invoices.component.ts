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
  cicreate: any = [];
  GroupLabel: any = [];

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
        CI_LIST: {
          type: "formGroup",
          label: "CI Info",
          GroupLabel: ['Invoices 1', 'Invoices 2'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: this.cicreate
        }
      }, 'ExportCommercialInvoices');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    let selectedShippingBill = this.PIPO_DATA?.paymentTerm?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
    let CI_AMOUNT_SUM = e?.CI_LIST?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
    console.log(selectedShippingBill,CI_AMOUNT_SUM,"selectedShippingBill")
    if (selectedShippingBill == CI_AMOUNT_SUM) {
      for (let index = 0; index < e?.CI_LIST.length; index++) {
        const element = e?.CI_LIST[index];
        this.checkValueExit([{commercialNumber:element?.commercialNumber}]).then((res: any) => {
          if (res?.status == true) {
        element.file = 'export';
        element.pipo = this.pipoArr;
        console.log('pipoarrya', this.pipoArr);
        element.commercialDoc = this.pipourl1;
        element.buyerName = this.BUYER_LIST;
        element.currency = element?.currency?.type;
        this.documentService.addCommercial(element).subscribe((res: any) => {
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
        }, (err) => console.log('Error adding pipo'));
          } else {
            this.toastr.error(`Please check this commercial no. : ${res?.no?.join(",")} already exit...`);
          }
        })
      }
    } else {
      this.toastr.error(`Sorry your Sb amount and Invoices amount not equal...`);
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
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.documentService.getPipoById(event?._id).subscribe((res: any) => {
        this.PIPO_DATA = res?.data[0];
        this.cicreate = []
        this.PIPO_DATA?.paymentTerm?.forEach(element => {
          this.cicreate.push([
            {
              type: "text",
              value: "",
              label: "Commercial Invoice Number*",
              name: 'commercialNumber',
              rules: {
                required: true,
              }
            },
            {
              type: "currency",
              value: element?.currency?.type,
              label: "Currency*",
              name: 'currency',
              disabled: true,
              rules: {
                required: true,
              }
            },
            {
              type: "text",
              value: element?.amount,
              label: "Commercial Invoice Amount",
              disabled: true,
              name: 'amount',
              rules: {
                required: true,
              }
            },
            {
              type: "PaymentTermType",
              value: element?.type?.value,
              label: "Type",
              name: 'type',
              rules: {
                required: true,
              },
            },
          ]);
          this.GroupLabel.push('Invoices 1')
        });
        console.log(res, "getPipoById")
      })
      this.COMMERCIAL_LIST = [];
      console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
