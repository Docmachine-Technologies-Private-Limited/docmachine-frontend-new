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

@Component({
  selector: 'export-triparty-agreements',
  templateUrl: './triparty-agreements.component.html',
  styleUrls: ['./triparty-agreements.component.scss', '../../commoncss/common.component.scss']
})
export class EditTripartyAgreementsComponent implements OnInit {
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
  data: any = [];

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public route: ActivatedRoute,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditTripartyAgreementsComponent")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.doc);
      let PartyDetails_Data = [
        {
          Party1Name: {
            type: "buyer",
            value: args?.PartyDetails[0]?.Party1Name?.value,
            label: "Party1 Name",
            InputBindValue: 'Party1Address',
            rules: {
              required: true,
            }
          },
          Party1Address: {
            type: "text",
            value: args?.PartyDetails[0]?.Party1Name?.Address,
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
            value: args?.PartyDetails[1]?.Party2Name?.value,
            label: "Party2 Name",
            InputBindValue: 'Party2Address',
            rules: {
              required: true,
            }
          },
          Party2Address: {
            type: "text",
            value: args?.PartyDetails[1]?.Party2Name?.Address,
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
            value: args?.PartyDetails[2]?.Party3Name?.value,
            label: "Party3 Name",
            InputBindValue: 'Party3Address',
            rules: {
              required: true,
            }
          },
          Party3Address: {
            type: "text",
            value: args?.PartyDetails[2]?.Party3Name?.Address,
            InputBindValue: '',
            label: "Party3 Address",
            disabled: true,
            rules: {
              required: true,
            }
          }
        }
      ]
      this.validator.buildForm({
        triPartyAgreementDate: {
          type: "date",
          value: args?.triPartyAgreementDate,
          label: "Date",
          rules: {
            required: true,
          }
        },
        triPartyAgreementNumber: {
          type: "text",
          value: args?.triPartyAgreementNumber,
          label: "Tri Party Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        triPartyAgreementAmount: {
          type: "text",
          value: args?.triPartyAgreementAmount,
          label: "Tri Party Amount",
          rules: {
            required: true,
          }
        },
        PartyDetails: {
          type: "formArray",
          label: "Party Name and Address",
          GroupLabel: ['Party Name and Address 1', 'Party Name and Address 2', 'Party Name and Address 3'],
          MAX_LIMIT: 2,
          rules: {
            required: true,
          },
          formGroup: PartyDetails_Data
        }
      }, 'ExportTryPartyAgreements');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.currency = e.value?.currency?.type != undefined ? e.value?.currency?.type : e.value?.currency;
    if (e?.value?.PartyDetails[0]?.Party1Name?.Address == '' || e?.value?.PartyDetails[0]?.Party1Name?.Address == undefined) {
      e.value.PartyDetails[0].Party1Name = this.data?.PartyDetails[0]?.Party1Name;
    }
    if (e?.value?.PartyDetails[1]?.Party2Name?.Address == '' || e?.value?.PartyDetails[1]?.Party2Name?.Address == undefined) {
      e.value.PartyDetails[1].Party2Name = this.data?.PartyDetails[1]?.Party2Name;
    }
    if (e?.value?.PartyDetails[2]?.Party3Name?.Address == '' || e?.value?.PartyDetails[2]?.Party3Name?.Address == undefined) {
      e.value.PartyDetails[2].Party3Name = this.data?.PartyDetails[2]?.Party3Name;
    }
      this.documentService.updateThird(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Third Party Document Updated Successfully`);
        this.router.navigate(['home/Summary/Export/try-party']);
      }, (err) => console.log('Error adding pipo'));
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

  mergeObject(obj1: any, obj2: any) {
    for (const key in obj2) {
      if (obj1[key] == undefined) {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  }
}
