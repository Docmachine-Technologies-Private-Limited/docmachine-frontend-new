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
  selector: 'export-commercial-invoices',
  templateUrl: './commercial-invoices.component.html',
  styleUrls: ['./commercial-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class CommercialInvoicesComponent implements OnInit {
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

  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: "",
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        commercialNumber: {
          type: "text",
          value: "",
          label: "Commercial Invoice Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "Commercial Invoice Amount",
          rules: {
            required: true,
          }
        },
      }, 'ExportCommercialInvoices');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.SB_ID === e?.value?.sbNo)[0];
    if (selectedShippingBill?.amount == parseInt(e?.value?.amount)) {
      e.value.pipo = this.pipoArr;
      console.log('pipoarrya', this.pipoArr);
      e.value.commercialDoc = this.pipourl1;
      e.value.buyerName = this.BUYER_LIST;
      e.value.currency = e.value?.currency?.type;
      e.value.sbNo = selectedShippingBill?.sbno;
      e.value.sbRef = [selectedShippingBill?._id];
      this.documentService.getInvoice_No({
        commercialNumber: e.value.commercialNumber
      }, 'commercials').subscribe((resp: any) => {
        console.log('creditNoteNumber Invoice_No', resp)
        if (resp.data.length == 0) {
          this.documentService.addCommercial(e.value).subscribe((res: any) => {
            this.toastr.success(`Commercial Invoice Added Successfully`);
            let updatedDataSB = {
              "commercialdetails": [
                res.data._id,
              ],
            }
            this.documentService.updateMasterBySb(
              updatedDataSB,
              selectedShippingBill?.sbno,
              selectedShippingBill?._id
            ).subscribe((data) => {
              console.log('updateMasterBySbupdateMasterBySb', data);
            }, (error) => {
              console.log('error');
            }
            );
            let updatedData = {
              "commercialRef": [
                res.data._id,
              ],
            }
            this.userService.updateManyPipo(this.pipoArr, 'commercial', this.pipourl1, updatedData).subscribe((data) => {
              console.log('commercial', data);
              this.documentService.updateMasterBySb(e.value, selectedShippingBill?.sbno, selectedShippingBill?._id).subscribe((data) => {
                console.log('DATA', data);
                this.router.navigate(['home/Summary/Export/commercial']);
              },
                (error) => {
                  console.log('error');
                }
              );
            }, (error) => {
              console.log('error');
            }
            );
          },
            (err) => console.log('Error adding pipo')
          );

        } else {
          this.toastr.error(`Please check this commercial no. : ${e.value.commercialNumber} already exit...`);
        }
      });
    } else {
      this.toastr.error(`Sorry your Sb amount and Invoices amount not equal...`);
    }
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.validator.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
        if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.validator.SHIPPING_BILL_LIST.push(this.validator.SHIPPING_BUNDEL[j]);
        }
      }
      console.log(event, this.validator.SHIPPING_BUNDEL, this.validator.SHIPPING_BILL_LIST, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
