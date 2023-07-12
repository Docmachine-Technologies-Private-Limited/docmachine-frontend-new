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
  selector: 'app-triparty-agreements',
  templateUrl: './triparty-agreements.component.html',
  styleUrls: ['./triparty-agreements.component.scss']
})
export class TripartyAgreementsComponent implements OnInit {
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
  dynamicFormGroup?: any | FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  INDEX: number = 0;
  MAX_DATA_SIZE: number = 2;

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
        triPartyAgreementDate: {
          type: "date",
          value: "",
          label: "Date",
          rules: {
            required: true,
          }
        },
        triPartyAgreementNumber: {
          type: "text",
          value: "",
          label: "Tri Party Number*",
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
        triPartyAgreementAmount: {
          type: "text",
          value: "",
          label: "Tri Party Amount",
          rules: {
            required: true,
          }
        },
        PartyDetails: {
          type: "formArray",
          label: "Party Name and Address",
          GroupLabel: ['Party Name and Address 1', 'Party Name and Address 2', 'Party Name and Address 3'],
          DivisionLength: 2,
          rules: {
            required: true,
          },
          formGroup: [
            {
              Party1Name: {
                type: "buyer",
                value: "",
                label: "Party1 Name",
                InputBindValue: 'Party1Address',
                rules: {
                  required: true,
                }
              },
              Party1Address: {
                type: "text",
                value: "",
                label: "Party1 Address",
                InputBindValue: '',
                disabled: true,
                rules: {
                  required: true,
                }
              }
            },
            {
              Party2Name: {
                type: "buyer",
                value: "",
                label: "Party2 Name",
                InputBindValue: 'Party2Address',
                rules: {
                  required: true,
                }
              },
              Party2Address: {
                type: "text",
                value: "",
                label: "Party2 Address",
                InputBindValue: '',
                disabled: true,
                rules: {
                  required: true,
                }
              }
            },
            {
              Party3Name: {
                type: "buyer",
                value: "",
                label: "Party3 Name",
                InputBindValue: 'Party3Address',
                rules: {
                  required: true,
                }
              },
              Party3Address: {
                type: "text",
                value: "",
                InputBindValue: '',
                label: "Party3 Address",
                disabled: true,
                rules: {
                  required: true,
                }
              }
            }
          ]
        }
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
      e.value.pipo = this.pipoArr;
      e.value.doc = this.pipourl1;
      e.value.buyerName = this.BUYER_LIST;
      e.value.currency = e.value?.currency?.type;
      this.documentService.getInvoice_No({
        triPartyAgreementNumber: e.value.triPartyAgreementNumber
      }, 'thirdparties').subscribe((resp: any) => {
        console.log('thirdparties Invoice_No', resp)
        if (resp.data.length == 0) {
          this.documentService.addThird(e.value).subscribe((res: any) => {
            this.toastr.success(`Third Party Document Added Successfully`);
            let updatedData = {
              "tryPartyAgreementRef": [
                res.data._id,
              ],
            }
            this.userService
              .updateManyPipo(this.pipoArr, 'export', this.pipourl1, updatedData).subscribe((data) => {
                console.log(data);
                this.router.navigate(['/home/try-party']);
              }, (error) => {
                console.log('error');
              }
              );
          }, (err) => console.log('Error adding pipo'));
        } else {
          this.toastr.error(`Please check this sb no. : ${e.value.triPartyAgreementNumber} already exit...`);
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
      if (this.BUYER_LIST.includes(event?.id[1]) == false) {
        this.BUYER_LIST.push(event?.id[1])
      }
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
        var temp: any = [];
        var tempFormGroup: any = [];
        let count: number = 0;
        fieldProps?.formGroup.forEach(element => {
          for (let field2 of Object.keys(element)) {
            temp.push({ ...element[field2], fieldName: field2, index: count });
            tempFormGroup.push(new FormGroup({ [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false }, Validators.required) }));
            count++;
          }
        });
        fieldProps['NewformGroup'] = temp;
        formGroupFields[field] = new FormArray(tempFormGroup);
        this.fields.push({ ...fieldProps, fieldName: field });
        console.log(id, fieldProps, tempFormGroup, this.fields, 'hghjgjhghjgjh')
      }
    }
    console.log(this.fields, 'hghjgjhghjgjh')
    return formGroupFields;
  }

  setFormValue(value: any, index: any, name1: any, name2: any) {
    this.dynamicFormGroup.controls[name1]?.controls[index]?.controls[name2]?.setValue(value)
  }
}
