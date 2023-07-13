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
  selector: 'app-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss']
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
  origin: any = [];
  commodity: any = [];
  location: any = [];
  bankDetail: any = [];

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    private fb: FormBuilder,
    public validator:UploadServiceValidatorService,
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
        this.origin[i] = { value: element.countryOfFinaldestination, id: element?._id };
      });
      console.log('Master Country', this.SHIPPING_BUNDEL, this.origin);
    }, (err) => console.log(err));
    this.userService.getTeam().subscribe((data) => {
      console.log(data['data'][0]);
      this.location = [];
      this.commodity = [];

      data['data'][0]['location']?.forEach(element => {
        this.location.push({ value: element?.loc })
      });
      data['data'][0]['commodity']?.forEach(element => {
        this.commodity.push({ value: element?.como })
      });
      console.log(this.location);
      console.log(this.commodity);
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail.push({ value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId })
      }
    },
      (error) => {
        console.log('error');
      }
    );
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
        BankName: {
          type: "Bank",
          value: "",
          label: "Bank Name*",
          rules: {
            required: true,
          }
        },
        billNo: {
          type: "text",
          value: "",
          label: "FOREX ADVICE No.",
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
        partyName: {
          type: "buyer",
          value: "",
          label: "PARTY NAME",
          rules: {
            required: true,
          }
        },
        date: {
          type: "date",
          value: "",
          label: "TT Date",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "TT AMOUNT",
          rules: {
            required: true,
          }
        },
        recievedDate: {
          type: "date",
          value: "",
          label: "Recieved Date",
          rules: {
            required: true,
          }
        },
        commision: {
          type: "text",
          value: "",
          label: "Commission",
          rules: {
            required: true,
          }
        },
        conversionDate: {
          type: "date",
          value: "",
          label: "Conversion Date",
          rules: {
            required: true,
          }
        },
        exchangeRate: {
          type: "text",
          value: "",
          label: "Exchange Rate",
          rules: {
            required: true,
          }
        },
        location: {
          type: "location",
          value: "",
          label: "Location",
          rules: {
            required: true,
          }
        },
        commodity: {
          type: "commodity",
          value: "",
          label: "Commodity",
          rules: {
            required: true,
          }
        },
        origin: {
          type: "origin",
          value: "",
          label: "Origin",
          rules: {
            required: true,
          }
        },
        PaymentType: {
          type: "PaymentType",
          value: "",
          label: "Payment Type*",
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
      // e.value.file = 'export';
      // e.value.pipo = this.pipoArr;
      // e.value.doc = this.pipourl1;
      // e.value.buyerName = this.BUYER_LIST;
      // e.value.currency = e.value?.currency?.type;
      // this.documentService.getInvoice_No({
      //   masterServiceNumber: e.value.masterServiceNumber
      // }, 'masterservices').subscribe((resp: any) => {
      //   console.log('creditNoteNumber Invoice_No', resp)
      //   if (resp.data.length == 0) {
      //     this.documentService.addMasterService(e.value).subscribe(
      //       (res: any) => {
      //         this.toastr.success(`Master Service Document Added Successfully`);
      //         let updatedData = {
      //           "MasterServiceRef": [
      //             res.data._id,
      //           ],
      //         }
      //         this.userService
      //           .updateManyPipo(this.pipoArr, 'export', this.pipourl1, updatedData)
      //           .subscribe(
      //             (data) => {
      //               console.log('king123');
      //               console.log(data);
      //               this.router.navigate(['/home/master-services']);
      //             },
      //             (error) => {
      //               console.log('error');
      //             }
      //           );
      //       },
      //       (err) => console.log('Error adding pipo')
      //     );
      //   } else {
      //     this.toastr.error(`Please check this sb no. : ${e.value.masterServiceNumber} already exit...`);
      //   }
      // });
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
        formGroupFields[field] = new FormControl(fieldProps.value, this.validator.getMAX_MIN_LENGTH()[fieldProps?.type]);
        this.fields.push({ ...fieldProps, fieldName: field });
      } else {
        let control: any = fieldProps?.formGroup?.map(r =>
          new FormGroup(Object.entries(r).reduce((acc, [k, v]) => {
            let vk: any = v;
            acc[k] = new FormControl(vk?.value || "", this.validator.getMAX_MIN_LENGTH()[vk?.type]);
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
