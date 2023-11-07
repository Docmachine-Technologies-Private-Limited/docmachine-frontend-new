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
  selector: 'app-opinion-reports',
  templateUrl: './import-opinion-reports.component.html',
  styleUrls: ['./import-opinion-reports.component.scss','../../commoncss/common.component.scss']
})
export class ImportOpinionReportComponent implements OnInit {
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
        date: {
          type: "date",
          value: "",
          label: "Opinion Report Number*",
          rules: {
            required: true,
          }
        },
        opinionReportNumber: {
          type: "text",
          value: "",
          label: "Opinion Report Number*",
          rules: {
            required: true,
          }
        },
        ForeignPartyName: {
          type: "benne",
          value: "",
          label: "Foreign benne Name",
          rules: {
            required: true,
          }
        },
        ReportDate: {
          type: "date",
          value: "",
          label: "Report Date",
          rules: {
            required: true,
          }
        },
        ReportRatings: {
          type: "text",
          value: "",
          label: "Report Ratings",
          rules: {
            required: true,
          }
        }
      },'ImportOpinionreport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    console.log(e.value);
    this.documentService.getInvoice_No({
      opinionReportNumber: e.value.opinionReportNumber
    }, 'opinionreports').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addOpinionReport(e.value).subscribe(
          (res: any) => {
            this.toastr.success(`Opinion Report Document Added Successfully`);
            let updatedData = {
              "opinionReportRef": [
                res.data._id,
              ],
            }
            this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData).subscribe(
              (data) => {
                console.log(data);
                this.router.navigate(['home/Summary/Import/Opinion-Report']);
              },
              (error) => {
                console.log('error');
              }
            );
          },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this opinion-report no. : ${e.value.opinionReportNumber} already exit...`);
      }
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0]=(event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
