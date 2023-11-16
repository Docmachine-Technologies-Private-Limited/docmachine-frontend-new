import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'export-bill-of-exchanges',
  templateUrl: './bill-of-exchanges.component.html',
  styleUrls: ['./bill-of-exchanges.component.scss', '../../commoncss/common.component.scss']
})
export class BillOfExchangesComponent implements OnInit {
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

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
    await this.pipoDataService.getPipoList('export').then(async (data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        this.PIPO_DATA = data;
        console.log(data, 'data2222..................')
      });
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        billExchangeNumber: {
          type: "text",
          value: "",
          label: "Bill Of Exchange Number",
          rules: {
            required: true,
          }
        },
        sbNo: {
          type: "ShippingBill",
          value: "",
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
          value: "",
          label: "BLCopy Number",
          rules: {
            required: true,
          }
        },
      }, 'ExportBillOfExchange');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    console.log(e.value);
    this.documentService.getInvoice_No({
      billExchangeNumber: e.value.billExchangeNumber
    }, 'billofexchanges').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addBillExchange(e.value).subscribe(
          (res: any) => {
            this.toastr.success(`Bill Of Exchange Document Added Successfully`);
            let updatedData = {
              "billOfExchangeRef": [
                res.data._id,
              ],
            }
            this.userService.updateManyPipo(this.pipoArr, 'billOfExchange', this.pipourl1, updatedData).subscribe((data) => {
              console.log(data);
              this.router.navigate(['home/Summary/Export/bill-of-exchange']);
            }, (error) => {
              console.log('error');
            }
            );
          },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this BillExchange no. : ${e.value.billExchangeNumber} already exit...`);
      }
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.BUYER_DETAILS = this.validator.BUYER_DETAILS_MASTER.filter((item: any) => item?.buyerName?.includes(event?.id[1]))[0]
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
