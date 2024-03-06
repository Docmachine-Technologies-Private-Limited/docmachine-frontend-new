import { Component, OnInit } from '@angular/core';
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
  selector: 'edit-export-packing-list-invoices',
  templateUrl: './packing-list-invoices.component.html',
  styleUrls: ['./packing-list-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class EditPackingListInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  btndisabled: boolean = true;
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
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
    this.validator.SHIPPING_BILL_LIST = [];
    this.LoadShippingBill([this.data?.pipo[0]?._id]);
    setTimeout(() => {
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.sbno === args?.sbNo)[0];
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.packingDoc);
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        packingListNumber: {
          type: "text",
          value: args?.packingListNumber,
          label: "Packing List Number",
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
      }, 'ExportPackingList');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    this.validator.SHIPPING_BILL_LIST = [];
    this.LoadShippingBill([this.data?.pipo[0]?._id]);
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.sbno === this.data?.sbNo)[0];
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        packingListNumber: {
          type: "text",
          value: this.data?.packingListNumber,
          label: "Packing List Number",
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
      }, 'ExportPackingList');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.SB_ID === e?.value?.sbNo)[0];
    e.value.sbNo = selectedShippingBill?.sbno;
    e.value.sbRef = [selectedShippingBill?._id];
    if (this.data?.packingListNumber != e.value.packingListNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Packing List Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            packingListNumber: e.value.packingListNumber
          }, 'packinglists').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.packingDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updatePackingList(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Packing List Added Successfully`);
                console.log('Packing List Added Successfully');
                this.router.navigate(['home/Summary/Export/packing-list']);
              }, (err) => console.log('Error adding pipo'));
            } else {
              this.toastr.error(`Please check this Packing List no. : ${e.value.packingListNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.packingDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updatePackingList(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Packing List Added Successfully`);
        console.log('Packing List Added Successfully');
        this.router.navigate(['home/Summary/Export/packing-list']);
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
