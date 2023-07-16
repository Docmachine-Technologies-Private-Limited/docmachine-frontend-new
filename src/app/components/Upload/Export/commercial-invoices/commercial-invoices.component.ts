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

@Component({
  selector: 'app-commercial-invoices',
  templateUrl: './commercial-invoices.component.html',
  styleUrls: ['./commercial-invoices.component.scss','../../commoncss/common.component.scss']
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
    private fb: FormBuilder,
    public userService: UserService) { }

  async ngOnInit() {
    this.CURRENCY_LIST = this.documentService.getCurrencyList();
    this.userService.getBuyer(1).subscribe((res: any) => {
      res.data?.forEach(element => {
        if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
          this.ConsigneeNameList.push({ value: element?.ConsigneeName })
        }
        this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
      });
      console.log('Benne Detail111', this.ConsigneeNameList, this.BUYER_DETAILS);
    }, (err) => console.log('Error', err));
    this.documentService.getMaster(1).subscribe((res: any) => {
      console.log('Master Data File', res);
      res.data.forEach((element, i) => {
        element?.pipo.forEach((ele, j) => {
          this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id });
        });
      });
    }, (err) => console.log(err));
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
      this.buildForm({
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
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR = false;
      e.value.file = 'export';
      let selectedShippingBill = this.SHIPPING_BILL_LIST.filter((item: any) => item?._id === e?.value?.sbNo)[0];
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
                this.router.navigate(['home/commercial']);
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
          this.toastr.error(`Please check this sb no. : ${e.value.commercialNumber} already exit...`);
        }
      });
    } else {
      this.SUBMIT_ERROR = true
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
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.SHIPPING_BUNDEL.length; j++) {
        if (this.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.SHIPPING_BILL_LIST.push({
            sbno: this.SHIPPING_BUNDEL[j]?.sbno,
            _id: this.SHIPPING_BUNDEL[j]?.SB_ID
          });
        }
      }
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  buildForm(model: any) {
    this.fields = [];
    const formGroupFields = this.getFormControlsFields(model);
    this.dynamicFormGroup = new FormGroup(formGroupFields);
    console.log(this.dynamicFormGroup, 'dynamicFormGroup')
  }

  getFormControlsFields(model: any) {
    const formGroupFields = {};
    for (let field of Object.keys(model)) {
      let id: any = field;
      const fieldProps = model[field];
      if (fieldProps?.type != "formArray") {
        formGroupFields[field] = new FormControl(fieldProps.value, Validators.required);
        this.fields.push({ ...fieldProps, fieldName: field });
      } else {
        let control: any = fieldProps?.formGroup?.map(r =>
          new FormGroup(Object.entries(r).reduce((acc, [k, v]) => {
            let vk: any = v;
            acc[k] = new FormControl(vk?.value || "", Validators.required);
            return acc;
          }, {})));
        formGroupFields[field] = control[0];
        console.log(id, fieldProps, control, this.fields, 'hghjgjhghjgjh')
        let control2: any = fieldProps?.formGroup?.map(r => {
          var temp: any = [];
          for (let field_1 of Object.keys(r)) {
            temp.push({ ...r[field_1], fieldName: field_1 })
          }
          return temp;
        });
        fieldProps['formGroup'] = control2[0];
        this.fields.push({ ...fieldProps, fieldName: field });
      }
    }
    console.log(this.fields, 'hghjgjhghjgjh')
    return formGroupFields;
  }
}
