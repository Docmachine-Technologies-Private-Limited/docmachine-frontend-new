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


@Component({
  selector: 'import-outward-remittance-advice',
  templateUrl: './import-inward-remittance-advice.component.html',
  styleUrls: ['./import-inward-remittance-advice.component.scss', '../../commoncss/common.component.scss']
})
export class ImportOutwardRemittanceAdviceComponent implements OnInit {
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
  CI_INFO_SUM: any = {
    CI_SUM: 0,
    TOTAL_CI: 0,
    PIPO_AMOUNT: 0,
    REMAINING_AMOUNT: 0
  }
  UPLOAD_STATUS: boolean = false;
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) { }

  TIMEOUT: any = ''
  async ngOnInit() {
    setTimeout(async () => {
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
    }, 200);
  }

  load() {
    setTimeout(async () => {
      var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
      if (temp_pipo?.length != 0) {
        this.btndisabled = false;
        this.validator.SELECTED_PIPO = temp_pipo;
        // await this.documentService.getPipoListNo('import', temp_pipo);
        this.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false
      }
      console.log(temp_pipo, this.UPLOAD_STATUS, "temp_pipo")
    }, 200);
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      let res: any = new IRAdvice(args[1].data);
      console.log(res, 'sdfjhksdjhdkfjsdhfsdkfhsd')
      this.validator.buildForm({
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
          label: "Bill No",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.PIPO_DATA?.currency,
          label: "Currency",
          Inputdisabled: true,
          rules: {
            required: true,
          }
        },
        partyName: {
          type: "benne",
          value: res?.partyName,
          label: "PARTY NAME",
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
        commision: {
          type: "number",
          value: res?.commision,
          label: "Commission",
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
      }, 'OutwardRemittanceAdvice');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    var temp: any = [];
    if (parseFloat(this.CI_INFO_SUM['REMAINING_AMOUNT']) >= parseFloat(e.value?.amount)) {
      e.value.file = 'import';
      e.value.pipo = this.pipoArr;
      e.value.doc = this.pipourl1;
      e.value.beneficiaryName = this.BUYER_LIST;
      e.value.partyName = e.value.partyName?.value != undefined ? e.value.partyName.value : e.value.partyName;
      e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
      e.value.PaymentType = e.value.PaymentType?.value != undefined ? e.value.PaymentType.value : e.value.PaymentType;
      e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;

      console.log('doc', temp, this.pipourl1);
      console.log('onSubmitIrAdvice', e.value);
      this.documentService.getInvoice_No({
        billNo: e.value.billNo
      }, 'iradvices').subscribe((resp: any) => {
        console.log('creditNoteNumber Invoice_No', resp)
        if (resp.data.length == 0) {
          this.documentService.addIrAdvice(e.value).subscribe((data: any) => {
            console.log('addIrAdvice', data);
            let updatedData = {
              "MasterServiceRef": [
                data?.data._id,
              ],
              "AdviceRef": [
                data?.data._id,
              ]
            }
            this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData).subscribe((data1) => {
              this.toastr.success('Remittance Advice Successfully added...');
              this.router.navigate(['home/Summary/Import/Outward-Remittance-Advice']);
              var Transaction_id: any = this.route.snapshot.paramMap.get('transaction_id');
              if (Transaction_id != '') {
                this.documentService.AnyUpdateTable(Transaction_id, { ORMRef: [data?.data._id] }, "ExportTransaction").subscribe((res: any) => {
                  this.documentService.UpdateTransaction({ id: Transaction_id, data: { ORMRefData: e.value } }).subscribe((res: any) => {
                    this.toastr.success('Remittance Advice Successfully added...');
                    this.router.navigate(['home/Summary/Import/Outward-Remittance-Advice']);
                  });
                });
              } else {
                this.toastr.success('Remittance Advice Successfully added...');
                this.router.navigate(['home/Summary/Import/Outward-Remittance-Advice']);
              }
            }, (error) => {
              console.log('error');
            });
          },
            (error) => {
              console.log('error');
            }
          );
        } else {
          this.toastr.error(`Please check this Firex Document no. : ${e.value.billNo} already exit...`);
        }
      });
    } else {
      this.toastr.error(`Total ORM amount is exceeding PI amount by.... Plz check`);
    }

  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.documentService.getPipoById(event?._id).subscribe((res: any) => {
        this.PIPO_DATA = res?.data[0];
        let CI_SUM = this.PIPO_DATA?.AdviceRef?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
        this.CI_INFO_SUM['CI_SUM'] = CI_SUM;
        this.CI_INFO_SUM['TOTAL_CI'] = this.PIPO_DATA?.AdviceRef?.length
        this.CI_INFO_SUM['PIPO_AMOUNT'] = this.PIPO_DATA?.amount;
        this.CI_INFO_SUM['REMAINING_AMOUNT'] = parseFloat(this.PIPO_DATA?.amount) - parseFloat(CI_SUM);
        console.log(res, "getPipoById", this.CI_INFO_SUM)
      })
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
