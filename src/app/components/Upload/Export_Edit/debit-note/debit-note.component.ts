import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'edit-export-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['./debit-note.component.scss', '../../commoncss/common.component.scss']
})
export class EditDebitNotesComponent implements OnInit {
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
      console.log(this.data, "EditDebitNotesComponent")
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
      this.changedCommercial(args?.pipo[0]?._id)
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        commercialNumber: {
          type: "CommericalNo",
          value: args?.commercialNumber,
          label: "Commerical Number",
          rules: {
            required: true,
          }
        },
        debitNoteNumber: {
          type: "text",
          value: args?.debitNoteNumber,
          label: "Debit Note Number",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency",
          rules: {
            required: true,
          }
        },
        totalDebitAmount: {
          type: "text",
          value: args?.totalDebitAmount,
          label: "Debit Note Amount",
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
      }, 'DebitNoteExport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.changedCommercial(this.data?.pipo[0]?._id)
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        commercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Commerical Number",
          rules: {
            required: true,
          }
        },
        debitNoteNumber: {
          type: "text",
          value: "",
          label: "Debit Note Number",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency",
          rules: {
            required: true,
          }
        },
        totalDebitAmount: {
          type: "text",
          value: "",
          label: "Debit Note Amount",
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
      }, 'DebitNoteExport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    e.value.commercialNumber = e.value?.commercialNumber?.value != undefined ? e.value?.commercialNumber?.value : e.value?.commercialNumber;
    console.log(e.value);
    if (this.data?.debitNoteNumber != e.value.debitNoteNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Debit Note Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            debitNoteNumber: e.value.debitNoteNumber
          }, 'debitnotes').subscribe((resp: any) => {
            console.log('debitNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.DebitNote = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateDebit(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`debit Note Document Updated Successfully`);
                this.router.navigate(['home/Summary/Export/debit-note']);
              });
            } else {
              this.toastr.error(`Please check this Debit Note Number. : ${e.value.debitNoteNumber} already exit...`);
            }
          })
        }
      })
    } else {
      this.documentService.updateDebit(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`debit Note Document Updated Successfully`);
        this.router.navigate(['home/Summary/Export/debit-note']);
      });
    }

  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('export', pipo).subscribe((res: any) => {
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0] });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    }, (err) => console.log(err));
  }
}
