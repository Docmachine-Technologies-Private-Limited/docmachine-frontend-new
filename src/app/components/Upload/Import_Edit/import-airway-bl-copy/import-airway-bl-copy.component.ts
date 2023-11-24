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
  selector: 'edit-import-airway-bl-copy',
  templateUrl: './import-airway-bl-copy.component.html',
  styleUrls: ['./import-airway-bl-copy.component.scss','../../commoncss/common.component.scss']
})
export class EditImportAirwayBlCopyComponent implements OnInit {
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
    public route: ActivatedRoute,
    public validator: UploadServiceValidatorService,
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditAirwayBlCopyComponent")
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
    this.changedCommercial([this.data?.pipo[0]?._id])
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.blCopyDoc);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Select Commercial Invoice",
          rules: {
            required: true,
          }
        },
        airwayBlCopydate: {
          type: "date",
          value: "",
          label: "Airway / BlCopy Date",
          rules: {
            required: true,
          }
        },
        airwayBlCopyNumber: {
          type: "text",
          value: "",
          label: "Airway / BlCopy Number",
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
      }, 'ImportAirwayBlCopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  ReUplod(args: any) {
    this.publicUrl = '';
    this.changedCommercial([this.data?.pipo[0]?._id])
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Select Commercial Invoice",
          rules: {
            required: true,
          }
        },
        airwayBlCopydate: {
          type: "date",
          value: "",
          label: "Airway / BlCopy Date",
          rules: {
            required: true,
          }
        },
        airwayBlCopyNumber: {
          type: "text",
          value: "",
          label: "Airway / BlCopy Number",
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
      }, 'ImportAirwayBlCopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    console.log(e.value, 'onSubmitblCopy');
    if (this.data?.airwayBlCopyNumber != e.value.airwayBlCopyNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your airway BlCopy Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            airwayBlCopyNumber: e.value.airwayBlCopyNumber
          }, 'airwayblcopies').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.blCopyDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateAirwayBlcopy(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`addAirwayBlcopy Document Updated Successfully`);
                this.router.navigate(['home/Summary/Import/Airway-bl-Copy']);
              },(err) => console.log('Error adding pipo'));
            }else{
              this.toastr.error(`Please check this airway-bl-copy no. : ${e.value.airwayBlCopyNumber} already exit...`);
            }
          });
        }
      });
    } else {
      this.documentService.updateAirwayBlcopy(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`addAirwayBlcopy Document Updated Successfully`);
        this.router.navigate(['home/Summary/Import/Airway-bl-Copy']);
      },(err) => console.log('Error adding pipo'));
    }
   
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0]=(event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('import', pipo).subscribe((res: any) => {
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0] });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },
      (err) => {
        console.log(err)
      }
    );
  }
}
