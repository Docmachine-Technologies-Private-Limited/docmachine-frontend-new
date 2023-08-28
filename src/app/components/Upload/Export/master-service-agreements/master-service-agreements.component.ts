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
  selector: 'export-master-service-agreements',
  templateUrl: './master-service-agreements.component.html',
  styleUrls: ['./master-service-agreements.component.scss', '../../commoncss/common.component.scss']
})
export class MasterServiceAgreementsComponent implements OnInit {
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
        masterServiceAmount: {
          type: "text",
          value: "",
          label: "Master Service Amount*",
          rules: {
            required: true,
          }
        },
        StartDate: {
          type: "date",
          value: "",
          label: "Start Date*",
          rules: {
            required: true,
          }
        },
        Expirydate: {
          type: "date",
          value: "",
          label: "Expiry date*",
          rules: {
            required: true,
          }
        },
        buyerName: {
          type: "buyer",
          value: "",
          label: "Overseas Party Name*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        masterServiceNumber: {
          type: "text",
          value: "",
          label: "Master Service Number*",
          rules: {
            required: true,
          }
        },
      }, 'ExportMasterService');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.currency = e.value?.currency?.type;
    this.documentService.getInvoice_No({
      masterServiceNumber: e.value.masterServiceNumber
    }, 'masterservices').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addMasterService(e.value).subscribe(
          (res: any) => {
            this.toastr.success(`Master Service Document Added Successfully`);
            let updatedData = {
              "MasterServiceRef": [
                res.data._id,
              ],
            }
            this.userService
              .updateManyPipo(this.pipoArr, 'export', this.pipourl1, updatedData)
              .subscribe(
                (data) => {
                  console.log('king123');
                  console.log(data);
                  this.router.navigate(['home/Summary/Export/master-services']);
                },
                (error) => {
                  console.log('error');
                }
              );
          },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this sb no. : ${e.value.masterServiceNumber} already exit...`);
      }
    });
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
