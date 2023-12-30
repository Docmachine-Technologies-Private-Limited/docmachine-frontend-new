import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  selector: 'edit-app-export-billlodgementreferencenumberadvicecopy',
  templateUrl: './export-billlodgementreferencenumberadvicecopy.component.html',
  styleUrls: ['./export-billlodgementreferencenumberadvicecopy.component.scss', '../../commoncss/common.component.scss']
})
export class EditExportBilllodgementreferencenumberadvicecopyComponent implements OnInit {
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
  @Input('Transaction_id') Transaction_id: any = '';
  data: any = '';

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public route: ActivatedRoute,
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
    this.LoadShippingBill([this.data?.pipo[0]?._id]);
    setTimeout(() => {
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.sbno === args?.SbRef[0]?.sbno)[0];
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        blcopyrefNumber: {
          type: "text",
          value: args?.blcopyrefNumber,
          label: "BlCopyRef Number",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: args?.amount,
          label: "BlCopyRef Amount",
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
      }, 'exportbilllodgementreferencenumberadvicecopy');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  ReUplod(args: any) {
    this.publicUrl = '';
    this.LoadShippingBill([this.data?.pipo[0]?._id]);
    setTimeout(() => {
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.sbno === this.data?.SbRef[0]?.sbno)[0];
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        blcopyrefNumber: {
          type: "text",
          value: this.data?.blcopyrefNumber,
          label: "BlCopyRef Number",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: this.data?.amount,
          label: "BlCopyRef Amount",
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
      }, 'exportbilllodgementreferencenumberadvicecopy');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  onSubmit(e: any) {
    console.log(e, 'value')
    console.log(e.value, 'onSubmitblCopy');
    e.value.SbRef = [e?.value?.sbNo];
    if (this.data?.blcopyrefNumber != e.value.blcopyrefNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Blcopyref`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            blcopyrefNumber: e.value.blcopyrefNumber
          }, 'blcopyref').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateBlcopyref(e.value, this.data?._id).subscribe((res: any) => {
                console.log(res, 'addBlcopyref');
                this.toastr.success(`Blcopyref Document Updated Successfully`);
                this.router.navigate(['home/Summary/Export/Bill-Lodgement-Referance-AdviceCopy']);
              },(err) => console.log('Error adding pipo'));
            }else{
              this.toastr.error(`Please check this blcopyref Number : ${e.value.blcopyrefNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateBlcopyref(e.value, this.data?._id).subscribe((res: any) => {
        console.log(res, 'addBlcopyref');
        this.toastr.success(`Blcopyref Document Updated Successfully`);
        this.router.navigate(['home/Summary/Export/Bill-Lodgement-Referance-AdviceCopy']);
      },(err) => console.log('Error adding pipo'));
    }
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.validator.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
        if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.validator.SHIPPING_BILL_LIST.push(this.validator.SHIPPING_BUNDEL[j]);
        }
      }
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  
  LoadShippingBill(pipoArr: any) {
    this.filteranytablepagination.PaginationfilterAnyTable({
      pipo: pipoArr
    }, { limit: 20 }, 'masterrecord').subscribe((res: any) => {
      console.log(res, "LoadShippingBill")
      this.validator.SHIPPING_BILL_MASTER_DATA = res?.data;
      this.validator.origin = [];
      this.validator.SHIPPING_BUNDEL = [];
      this.validator.SHIPPING_BILL_LIST = [];
      res?.data?.forEach((element, i) => {
        if (element?.sbno != null && element?.sbno != undefined && element?.sbno != '') {
          this.validator.SHIPPING_BUNDEL.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
          this.validator.SHIPPING_BILL_LIST.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
        }
        this.validator.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
      });
      console.log('Master Country', this.validator.SHIPPING_BUNDEL, this.validator.origin);
    })
  }
  
}
