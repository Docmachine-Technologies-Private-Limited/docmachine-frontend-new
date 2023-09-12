import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'export-opinion-reports',
  templateUrl: './opinion-reports.component.html',
  styleUrls: ['./opinion-reports.component.scss', '../../commoncss/common.component.scss']
})
export class EditOpinionReportsComponent implements OnInit {
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
  data: any = '';

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditOpinionReportsComponent")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        opinionReportNumber: {
          type: "text",
          value: args?.opinionReportNumber,
          label: "Opinion Report Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        opinionReportAmount: {
          type: "text",
          value: args?.opinionReportAmount,
          label: "Opinion Report Amount",
          rules: {
            required: true,
          }
        },
        ForeignPartyName: {
          type: "buyer",
          value: args?.ForeignPartyName,
          label: "Foreign Party Name",
          rules: {
            required: true,
          }
        },
        ReportDate: {
          type: "date",
          value: args?.ReportDate,
          label: "Report Date",
          rules: {
            required: true,
          }
        },
        ReportRatings: {
          type: "text",
          value: args?.ReportRatings,
          label: "Report Ratings",
          rules: {
            required: true,
          }
        }
      }, 'ExportOpomopnReport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.currency = e.value?.currency?.type!=undefined?e.value?.currency?.type:e.value?.currency;
    console.log(e.value);
    this.documentService.updateOpinionReport(e.value,this.data?._id).subscribe((res: any) => {
      this.toastr.success(`Opinion Report Document Updated Successfully`);
      this.router.navigate(['home/Summary/Export/opinion-report']);
    }, (err) => console.log('Error adding pipo'));
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
