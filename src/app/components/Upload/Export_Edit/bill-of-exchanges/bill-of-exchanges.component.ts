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
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'edit-export-bill-of-exchanges',
  templateUrl: './bill-of-exchanges.component.html',
  styleUrls: ['./bill-of-exchanges.component.scss', '../../commoncss/common.component.scss']
})
export class EditBillOfExchangesComponent implements OnInit {
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
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public route: ActivatedRoute,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditBillOfExchangesComponent")
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
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?._id === args?.sbNo)[0];
      this.validator.buildForm({
        billExchangeNumber: {
          type: "text",
          value: args?.billExchangeNumber,
          label: "Bill Of Exchange Number",
          rules: {
            required: true,
          }
        },
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        CommericalNoList: {
          type: "CommericalListCheckBox",
          value: "",
          label: "Commerical Number",
          rules: {
            required: true,
          },
          ShowCheckBox: true,
        },
        BLCopy: {
          type: "BLCopy",
          value: args?.BLCopy,
          label: "BLCopy Number",
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
      }, 'ExportBillOfExchange');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    this.LoadShippingBill([this.data?.pipo[0]?._id]);
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?._id === this.data?.sbNo)[0];
      this.validator.buildForm({
        billExchangeNumber: {
          type: "text",
          value: this.data?.billExchangeNumber,
          label: "Bill Of Exchange Number",
          rules: {
            required: true,
          }
        },
        sbNo: {
          type: "ShippingBill",
          value: selectedShippingBill?.SB_ID,
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        CommericalNoList: {
          type: "CommericalListCheckBox",
          value: "",
          label: "Commerical Number",
          rules: {
            required: true,
          },
          ShowCheckBox: true,
        },
        BLCopy: {
          type: "BLCopy",
          value: this.data?.BLCopy,
          label: "BLCopy Number",
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
      }, 'ExportBillOfExchange');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    console.log(e.value);
    if (this.data?.billExchangeNumber != e.value.billExchangeNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your bill Exchange Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            billExchangeNumber: e.value.billExchangeNumber
          }, 'billofexchanges').subscribe((resp: any) => {
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateBillExchange(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Bill Of Exchange Document Updated Successfully`);
                this.router.navigate(['home/Summary/Export/bill-of-exchange']);
              }, (err) => console.log('Error adding pipo'));
            } else {
              this.toastr.error(`Please check this BillExchange no. : ${e.value.billExchangeNumber} already exit...`);
            }
          });
        }
      })
    } else {
      e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateBillExchange(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Bill Of Exchange Document Updated Successfully`);
        this.router.navigate(['home/Summary/Export/bill-of-exchange']);
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

  onChangeShippingBill(data: any) {
    console.log(data, "onChangeShippingBill")
    let fileterdata = this.validator.SHIPPING_BILL_MASTER_DATA.filter((item: any) => item?._id?.includes(data?.SB_ID))[0];
    fileterdata?.commercialdetails?.forEach(element => {
      let checkexit = this.validator.COMMERICAL_NO.filter((item: any) => item?.value?.includes(element?.commercialNumber))
      if (checkexit?.length == 0) {
        this.validator.COMMERICAL_NO.push({
          value: element?.commercialNumber,
          id: element?._id, sbno: element?.sbNo,
          sbid: element?.sbRef[0],
          doc: element?.commercialDoc,
          currency: element?.currency,
          amount: element?.amount
        });
      }
    });
    fileterdata?.blcopydetails?.forEach(element => {
      let checkexit = this.validator.BL_COPY_LIST.filter((item: any) => item?.value?.includes(element?.airwayBlCopyNumber))
      if (checkexit?.length == 0) {
        this.validator.BL_COPY_LIST.push({ value: element?.airwayBlCopyNumber, id: element?._id, no: element?.airwayBlCopyNumber, sbid: element?.sbRef[0], doc: element?.commercialDoc });
      }
    });
    console.log('changedCommercial', fileterdata, this.validator.COMMERICAL_NO, this.validator.BL_COPY_LIST)
  }

}
