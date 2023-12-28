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
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import $ from 'jquery';

@Component({
  selector: 'export-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss', '../../commoncss/common.component.scss']
})
export class InwardRemittanceAdviceComponent implements OnInit {
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
  UPLOAD_STATUS: boolean = false;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public route: ActivatedRoute,
    public userService: UserService) { }

  async ngOnInit() {
    var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
    if (temp_pipo?.length != 0) {
      this.btndisabled = false;
      this.validator.documentService.PI_PO_NUMBER_LIST = {
        PI_PO_BUYER_NAME: [],
        PI_PO_BENNE_NAME: [],
        PIPO_TRANSACTION: [],
        PIPO_NO: []
      };
      this.validator.CommonLoadTransaction(temp_pipo);;
      this.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false
    }
    console.log(temp_pipo, this.UPLOAD_STATUS, "temp_pipo")
  }


  response(args: any) {
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
      }, 'InwardRemittanceAdvice').then((res) => {
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    this.SUBMIT_ERROR = false;
    var temp: any = [];
    e.value.file = 'export';
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.partyName = e.value.partyName?.value != undefined ? e.value.partyName.value : e.value.partyName;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.PaymentType = e.value.PaymentType?.value != undefined ? e.value.PaymentType.value : e.value.PaymentType;
    e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
    e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
    e.value.origin = e.value.origin?.value != undefined ? e.value.origin.value : e.value.origin;
    console.log('doc', temp, this.pipourl1);
    console.log('onSubmitIrAdvice', e.value);
    this.documentService.getInvoice_No({
      billNo: e.value.billNo
    }, 'iradvices').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.CustomConfirmDialogModel.YesDialogModel(`You are updating remitter info in pipo no.</br>
        </br>
        <p>PIPO Remitter info. : </br> ${this.PIPO_DATA[0]?.RemitterName}</p>
        <p>New Remitter info. : </br> ${e?.value?.TrackerRef?.RemitterName}</p>
        `, 'Comments', (CustomConfirmDialogRes: any) => {
          this.documentService.addIrAdvice(e.value).subscribe((data: any) => {
            console.log('addIrAdvice', data);
            let updatedData = {
              "MasterServiceRef": [
                data?.data._id,
              ],
              "AdviceRef": [
                data?.data._id,
              ],

            }
            this.documentService.UpdateInward_Remittance(e.value?.TrackerRef?._id, {
              "AdviceRef": [
                data?.data._id,
              ]
            }).subscribe((res: any) => { })

            console.log(CustomConfirmDialogRes, "CustomConfirmDialogRes")
            if (CustomConfirmDialogRes?.value == "Ok") {
              this.userService.updatePipo({
                RemitterName: e?.value?.TrackerRef
              }, this.pipoArr[0]).subscribe((res: any) => {
                this.userService.updateManyPipo(this.pipoArr, 'export', this.pipourl1, updatedData).subscribe((tempdata) => {
                  var Transaction_id: any = this.route.snapshot.paramMap.get('transaction_id');
                  if (Transaction_id != '' && Transaction_id != undefined && Transaction_id != null) {
                    this.documentService.AnyUpdateTable({
                      _id: Transaction_id
                    }, {
                      "IRAdviceRef": [
                        data?.data._id,
                      ]
                    }, 'ExportTransaction').subscribe((res: any) => { })
                    this.documentService.UpdateTransaction({ id: Transaction_id, data: { irRef: e.value } }).subscribe((res: any) => {
                      this.toastr.success('Remittance advice added successfully');
                      this.router.navigate(['home/Summary/Export/inward-remittance-advice']);
                    });
                  } else {
                    this.toastr.success('Remittance advice added successfully');
                    this.router.navigate(['home/Summary/Export/inward-remittance-advice']);
                  }
                }, (error) => {
                  console.log('error');
                });
              })
            }
          },
            (error) => {
              console.log('error');
            }
          );
        });
      } else {
        this.toastr.error(`Please check this Firex Document no. : ${e.value.billNo} already exit...`);
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
      
      this.pipoArr = PIPO_ID_ARRAY?.filter(function(item, pos) {return PIPO_ID_ARRAY.indexOf(item) == pos});
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.documentService.getPipoById(event?._id).subscribe((res: any) => {
        this.PIPO_DATA = res?.data[0];
      })
      let PIPODATA: any = [];
      this.documentService.getPipoByIdList(this.pipoArr).subscribe((res: any) => {
        console.log(res, 'getPipoByIdList')
        res?.forEach(element => {
          let DATA: any = element?.data[0];
          PIPODATA.push(DATA)
        });
        this.PIPO_DATA = PIPODATA;
        console.log(res, "getPipoById")
      })
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'getPipoById')
  }
}
