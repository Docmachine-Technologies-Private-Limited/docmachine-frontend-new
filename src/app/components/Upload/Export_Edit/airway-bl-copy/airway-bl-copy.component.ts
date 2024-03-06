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
  selector: 'edit-export-airway-bl-copy',
  templateUrl: './airway-bl-copy.component.html',
  styleUrls: ['./airway-bl-copy.component.scss', '../../commoncss/common.component.scss']
})
export class EditAirwayBlCopyComponent implements OnInit {
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
    let PIPO_LIST: any = [];
    this.data?.pipo?.forEach(element => {
      PIPO_LIST.push(element?._id)
    });
    this.LoadShippingBill(PIPO_LIST).then((Res: any) => {
      let SHIPPING_FORM: any = [];
      console.log(Res, args?.sbNo?.split(','), "args?.sbNo?.split(',')")
      args?.sbNo?.split(',')?.forEach(element => {
        let selectedShippingBill = Res?.filter((item: any) => item?.sbno === element)[0];
        SHIPPING_FORM?.push([
          {
            type: "ShippingBill",
            value: selectedShippingBill,
            label: "Select Shipping Bill",
            rules: {
              required: true,
            },
            name: 'SBData',
          }])
        console.log(selectedShippingBill, SHIPPING_FORM, "SHIPPING_FORM")
      });
      setTimeout(() => {
        this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.blCopyDoc);
        this.validator.buildForm({
          sbNo: {
            type: "formGroup",
            label: "",
            GroupLabel: ['Shipping Bill 1'],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: SHIPPING_FORM
          },
          date: {
            type: "date",
            value: args?.date,
            label: "Date",
            rules: {
              required: true,
            }
          },
          airwayBlCopyNumber: {
            type: "text",
            value: args?.airwayBlCopyNumber,
            label: "Airway / BlCopy Number*",
            rules: {
              required: true,
            }
          },
        }, 'AirwayBlCopy');
        console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
      }, 200);

    });

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    this.validator.SHIPPING_BILL_LIST = [];
    let PIPO_LIST: any = [];
    this.data?.pipo?.forEach(element => {
      PIPO_LIST.push(element?._id)
    });
    this.LoadShippingBill(PIPO_LIST).then((Res: any) => {
      setTimeout(() => {
        this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
        let SHIPPING_FORM: any = [];
        this.data?.sbNo?.split(',')?.forEach(element => {
          let selectedShippingBill = Res?.filter((item: any) => item?.sbno === element)[0];
          SHIPPING_FORM.push([
            {
              type: "ShippingBill",
              value: selectedShippingBill,
              label: "Select Shipping Bill",
              rules: {
                required: true,
              },
              name: 'SBData',
            }
          ])
        });
        this.validator.buildForm({
          sbNo: {
            type: "formGroup",
            label: "",
            GroupLabel: ['Shipping Bill 1'],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: SHIPPING_FORM
          },
          date: {
            type: "date",
            value: this.data?.date,
            label: "Date",
            rules: {
              required: true,
            }
          },
          airwayBlCopyNumber: {
            type: "text",
            value: this.data?.airwayBlCopyNumber,
            label: "Airway / BlCopy Number*",
            rules: {
              required: true,
            }
          },
        }, 'AirwayBlCopy');
        console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
      }, 200);
    });
   

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    let SB_NO: any = [];
    let SB_ID: any = [];
    let SB_ID_NO: any = [];
    e?.value?.sbNo?.forEach(element => {
      SB_ID.push(element?.SBData)
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.SB_ID === element?.SBData)[0];
      SB_NO.push(selectedShippingBill?.sbno)
      SB_ID_NO.push({ id: element?.SBData, no: selectedShippingBill?.sbno })
    });
    e.value.sbNo = SB_NO?.join(',');
    e.value.sbRef = SB_ID;
    console.log(e.value, SB_ID, 'onSubmitblCopy');
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
                this.toastr.success(`AirwayBlcopy Document Updated Successfully`);
                this.router.navigate(['home/Summary/Export/airway-bl-copy']);
              }, (err) => console.log('Error adding pipo'));
            } else {
              this.toastr.error(`Please check this airway-bl-copy no. : ${e.value.airwayBlCopyNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.blCopyDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateAirwayBlcopy(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`AirwayBlcopy Document Updated Successfully`);
        this.router.navigate(['home/Summary/Export/airway-bl-copy']);
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
    console.log(event, this.validator.SHIPPING_BUNDEL, this.validator.SHIPPING_BILL_LIST, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  LoadShippingBill(pipoArr: any) {
    return new Promise((resolve, reject) => {
      let API_DATA: any = [];
      pipoArr?.forEach(element => {
        API_DATA.push({
          query: { pipo: { $eq: element } }, tableName: "masterrecord", filterPage: { limit: 20 }
        })
      });
      console.log(API_DATA, "API_DATA");
      this.filteranytablepagination.PaginationfilterAnyTableList(API_DATA).subscribe(async (res: any) => {
        console.log(res, "LoadShippingBill")
        let DATA_WRAP: any = []
        res?.forEach(element => {
          element?.data?.forEach(WrapElement => {
            if (DATA_WRAP?.filter((item: any) => item?._id == WrapElement?._id)?.length == 0) {
              DATA_WRAP.push(WrapElement);
            }
          });
        });
        this.validator.SHIPPING_BILL_MASTER_DATA = DATA_WRAP;
        this.validator.origin = [];
        this.validator.SHIPPING_BUNDEL = [];
        this.validator.SHIPPING_BILL_LIST = [];
        DATA_WRAP?.forEach((element, i) => {
          if (element?.sbno != null && element?.sbno != undefined && element?.sbno != '') {
            this.validator.SHIPPING_BUNDEL.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
            this.validator.SHIPPING_BILL_LIST.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
          }
          this.validator.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
        });
        resolve(this.validator.SHIPPING_BUNDEL)
        console.log('Master Country', this.validator.SHIPPING_BUNDEL, this.validator.origin);
      })
    })
  }
}
