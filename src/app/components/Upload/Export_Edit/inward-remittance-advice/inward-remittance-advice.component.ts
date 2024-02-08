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
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'edit-export-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss','../../commoncss/common.component.scss']
})
export class EditInwardRemittanceAdviceComponent implements OnInit {
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
      console.log(this.data, "EditInwardUploadDocumentsComponent")
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
        BankName: {
          type: "Bank",
          value: args?.BankName,
          label: "Bank Name*",
          rules: {
            required: true,
          }
        },
        date: {
          type: "date",
          value: args?.date,
          label: "TT Date",
          rules: {
            required: true,
          }
        },
        billNo: {
          type: "text",
          value: args?.billNo,
          label: "FOREX ADVICE No.",
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
        partyName: {
          type: "buyer",
          value: args?.partyName,
          label: "PARTY NAME",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "number",
          value: args?.amount,
          label: "TT AMOUNT",
          rules: {
            required: true,
          }
        },
        recievedDate: {
          type: "date",
          value: args?.recievedDate,
          label: "Recieved Date",
          rules: {
            required: true,
          }
        },
        commision: {
          type: "number",
          value: args?.commision,
          label: "Commission",
          rules: {
            required: true,
          }
        },
        conversionDate: {
          type: "date",
          value: args?.conversionDate,
          label: "Conversion Date",
          rules: {
            required: true,
          }
        },
        exchangeRate: {
          type: "number",
          value: args?.exchangeRate,
          label: "Exchange Rate",
          rules: {
            required: true,
          }
        },
        location: {
          type: "location",
          value: args?.location,
          label: "Location",
          rules: {
            required: true,
          }
        },
        commodity: {
          type: "commodity",
          value: args?.commodity,
          label: "Commodity",
          rules: {
            required: true,
          }
        },
        origin: {
          type: "origin",
          value: args?.origin,
          label: "Origin",
          rules: {
            required: false,
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
      }, 'InwardRemittanceAdvice');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      let res: any = new IRAdvice(args[1].data);
      console.log(res, 'sdfjhksdjhdkfjsdhfsdkfhsd')
      this.validator.buildForm({
        TrackerRef: {
          type: "RemitterCheckBox",
          value: res?.partyName,
          label: "Select Remitter Name",
          rules: {
            required: true,
          },
          Show: true,
          RemitterLabel: "Select Remitter Ref No.",
        },
        date: {
          type: "date",
          value: res?.date,
          label: "TT Date",
          rules: {
            required: true,
          }
        },
        billNo: {
          type: "text",
          value: res?.billNo,
          label: "FOREX ADVICE No.",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: res?.currency,
          label: "Currency*",
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
        recievedDate: {
          type: "date",
          value: res?.recievedDate,
          label: "Recieved Date",
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
        conversionDate: {
          type: "date",
          value: res?.conversionDate,
          label: "Conversion Date",
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
            required: true,
          }
        },
        commodity: {
          type: "commodity",
          value: res?.commodity,
          label: "Commodity",
          rules: {
            required: true,
          }
        },
        origin: {
          type: "origin",
          value: res?.origin,
          label: "Origin",
          rules: {
            required: false,
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
      },  'InwardRemittanceAdvice');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.partyName = e.value.partyName?.value != undefined ? e.value.partyName.value : e.value.partyName;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.PaymentType = e.value.PaymentType?.value != undefined ? e.value.PaymentType.value : e.value.PaymentType;
    e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
    e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
    e.value.origin = e.value.origin?.value != undefined ? e.value.origin.value : e.value.origin;
    console.log('doc', this.pipourl1);
    console.log('onSubmitIrAdvice', e.value);
    if (this.data?.billNo != e.value.billNo) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Firex Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            billNo: e.value.billNo
          }, 'iradvices').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateIrAdvice(e.value,this.data?._id).subscribe((data: any) => {
                console.log('addIrAdvice', data);
                this.toastr.success('Firex Document added successfully.');
                this.router.navigate(['home/Summary/Export/inward-remittance-advice']);
              },(error) =>console.log('error'));
            }else{
              this.toastr.error(`Please check this Firex Number : ${e.value.billNo} already exit...`);
            }
          });
        }
      });
    } else {
      this.documentService.updateIrAdvice(e.value,this.data?._id).subscribe((data: any) => {
        console.log('addIrAdvice', data);
        this.toastr.success('Firex Document added successfully.');
        this.router.navigate(['home/Summary/Export/inward-remittance-advice']);
      },(error) =>console.log('error'));
    }
    
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
