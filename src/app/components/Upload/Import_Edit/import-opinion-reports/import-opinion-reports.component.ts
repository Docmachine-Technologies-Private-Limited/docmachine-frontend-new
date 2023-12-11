import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'edit-app-opinion-reports',
  templateUrl: './import-opinion-reports.component.html',
  styleUrls: ['./import-opinion-reports.component.scss','../../commoncss/common.component.scss']
})
export class EditImportOpinionReportComponent implements OnInit {
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
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditOpinionReportsComponent")
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
      }, 'ImportOpinionreport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  
  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        opinionReportNumber: {
          type: "text",
          value: this.data?.opinionReportNumber,
          label: "Opinion Report Number*",
          rules: {
            required: true,
          }
        },
        ForeignPartyName: {
          type: "buyer",
          value: this.data?.ForeignPartyName,
          label: "Foreign Party Name",
          rules: {
            required: true,
          }
        },
        ReportDate: {
          type: "date",
          value: this.data?.ReportDate,
          label: "Report Date",
          rules: {
            required: true,
          }
        },
        ReportRatings: {
          type: "text",
          value: this.data?.ReportRatings,
          label: "Report Ratings",
          rules: {
            required: true,
          }
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
      }, 'ImportOpinionreport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.currency = e.value?.currency?.type!=undefined?e.value?.currency?.type:e.value?.currency;
    console.log(e.value);
    if (this.data?.opinionReportNumber != e.value.opinionReportNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Opinion Report Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            opinionReportNumber: e.value.opinionReportNumber
          }, 'opinionreports').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateOpinionReport(e.value,this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Opinion Report Document Updated Successfully`);
                this.router.navigate(['home/Summary/Import/opinion-report']);
              }, (err) => console.log('Error adding pipo'));
            }else{
              this.toastr.error(`Please check this Opinion Report Number : ${e.value.opinionReportNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateOpinionReport(e.value,this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Opinion Report Document Updated Successfully`);
        this.router.navigate(['home/Summary/Import/opinion-report']);
      }, (err) => console.log('Error adding pipo'));
    }
   
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
