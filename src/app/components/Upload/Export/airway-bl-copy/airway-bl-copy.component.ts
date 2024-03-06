import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'export-airway-bl-copy',
  templateUrl: './airway-bl-copy.component.html',
  styleUrls: ['./airway-bl-copy.component.scss', '../../commoncss/common.component.scss']
})
export class AirwayBlCopyComponent implements OnInit {
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

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public filteranytablepagination: filterAnyTablePagination,
    public userService: UserService) { }

  async ngOnInit() {

  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        sbNo: {
          type: "formGroup",
          label: "",
          GroupLabel: ['Shipping Bill 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "ShippingBill",
                value: "",
                label: "Select Shipping Bill",
                rules: {
                  required: true,
                },
                name: 'SBData',
              }
            ]
          ]
        },
        date: {
          type: "date",
          value: "",
          label: "Date",
          rules: {
            required: true,
          }
        },
        airwayBlCopyNumber: {
          type: "text",
          value: "",
          label: "Airway / BlCopy Number*",
          rules: {
            required: true,
          }
        },
      }, 'AirwayBlCopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    let SB_NO:any=[];
    let SB_ID:any=[];
    let SB_ID_NO:any=[];
    e?.value?.sbNo?.forEach(element => {
      SB_ID.push(element?.SBData)
      let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.SB_ID === element?.SBData)[0];
      SB_NO.push(selectedShippingBill?.sbno)
      SB_ID_NO.push({id:element?.SBData,no:selectedShippingBill?.sbno})
    });
    console.log('this is console of blcopy', e.value);
    e.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.value.blCopyDoc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);
    e.value.buyerName = this.BUYER_LIST;
    e.value.CommercialNumber = this.CommercialNumber
    e.value.sbNo = SB_NO?.join(',');
    e.value.sbRef = SB_ID;
    console.log(e.value, SB_ID, 'onSubmitblCopy');
    this.documentService.getInvoice_No({
      airwayBlCopyNumber: e.value.airwayBlCopyNumber
    }, 'airwayblcopies').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addAirwayBlcopyFile(e.value).subscribe((res: any) => {
          this.toastr.success(`AWB/Bl Copy Successfully added`);
          let updatedDataSB = {
            "blcopydetails": [
              res.data._id,
            ],
          }
          SB_ID_NO?.forEach(element => {
            this.documentService.updateMasterBySb(
              updatedDataSB,
              element?.no,
              element?.id
            ).subscribe((data) => {
              console.log('updateMasterBySbupdateMasterBySb', data);
            }, (error) => console.log('error'));
          });
         
          let updatedData = {
            "airwayBlCopyRef": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'airwayBlcopy', this.pipourl1, updatedData).subscribe((data) => {
            console.log(data);
            SB_ID_NO?.forEach(element => {
            this.documentService.updateMasterBySb(
              e.value,
              element?.no,
              element?.id
            ).subscribe((data) => {
              console.log('DATA', data);
              this.router.navigate(['home/Summary/Export/airway-bl-copy']);
            },(error) => console.log('error'));
            })
          },(error) => console.log('error'));
        },(err) => console.log('Error adding pipo'));
      } else {
        this.toastr.error(`Please check this airway-bl-copy no. : ${e.value.airwayBlCopyNumber} already exit...`);
      }
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });

      this.pipoArr = PIPO_ID_ARRAY?.filter(function (item, pos) { return PIPO_ID_ARRAY.indexOf(item) == pos });
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.LoadShippingBill(this.pipoArr);
    } else {
      this.btndisabled = true;
    }
    console.log(event, this.validator.SHIPPING_BUNDEL, this.validator.SHIPPING_BILL_LIST, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  LoadShippingBill(pipoArr: any) {
    let API_DATA: any = [];
    pipoArr?.forEach(element => {
      API_DATA.push({
        query: { pipo: { $eq: element } }, tableName: "masterrecord", filterPage: { limit: 20 }
      })
    });
    console.log(API_DATA, "API_DATA");
    this.filteranytablepagination.PaginationfilterAnyTableList(API_DATA).subscribe((res: any) => {
      console.log(res, "LoadShippingBill")
      let DATA_WRAP: any = []
      res?.forEach(element => {
        element?.data?.forEach(SBElement => {
          DATA_WRAP.push(SBElement);
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
      console.log('Master Country', this.validator.SHIPPING_BUNDEL, this.validator.origin);
    })
  }
}
