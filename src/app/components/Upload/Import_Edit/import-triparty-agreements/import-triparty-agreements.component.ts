import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';

@Component({
  selector: 'edit-import-triparty-agreements',
  templateUrl: './import-triparty-agreements.component.html',
  styleUrls: ['./import-triparty-agreements.component.scss', '../../commoncss/common.component.scss']
})
export class EditImportTripartyAgreementsComponent implements OnInit {
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
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditTripartyAgreementsComponent")
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
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.doc);
      let PartyDetails_Data = [
        {
          Party1Name: {
            type: "benne",
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
            type: "benne",
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
            type: "benne",
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
      }, 'ImportTrypartyagreements');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      let PartyDetails_Data = [
        {
          Party1Name: {
            type: "benne",
            value: this.data?.PartyDetails[0]?.Party1Name?.value,
            label: "Party1 Name",
            InputBindValue: 'Party1Address',
            rules: {
              required: true,
            }
          },
          Party1Address: {
            type: "text",
            value: this.data?.PartyDetails[0]?.Party1Name?.Address,
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
            type: "benne",
            value: this.data?.PartyDetails[1]?.Party2Name?.value,
            label: "Party2 Name",
            InputBindValue: 'Party2Address',
            rules: {
              required: true,
            }
          },
          Party2Address: {
            type: "text",
            value: this.data?.PartyDetails[1]?.Party2Name?.Address,
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
            type: "benne",
            value: this.data?.PartyDetails[2]?.Party3Name?.value,
            label: "Party3 Name",
            InputBindValue: 'Party3Address',
            rules: {
              required: true,
            }
          },
          Party3Address: {
            type: "text",
            value: this.data?.PartyDetails[2]?.Party3Name?.Address,
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
          value: this.data?.triPartyAgreementDate,
          label: "Date",
          rules: {
            required: true,
          }
        },
        triPartyAgreementNumber: {
          type: "text",
          value: this.data?.triPartyAgreementNumber,
          label: "Tri Party Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: this.data?.currency,
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        triPartyAgreementAmount: {
          type: "text",
          value: this.data?.triPartyAgreementAmount,
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
      }, 'ImportTrypartyagreements');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
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
    if (this.data?.CertificateOriginNumber != e.value.CertificateOriginNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Certificate of Origin`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            CertificateOriginNumber: e.value.CertificateOriginNumber
          }, 'CertificateofOrigin').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateThird(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Third Party Document Updated Successfully`);
                this.router.navigate(['home/Summary/Import/TripartyAgreements']);
              }, (err) => console.log('Error adding pipo'));
            } else {
              this.toastr.error(`Please check this Certificate of Origin Number : ${e.value.CertificateOriginNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updateThird(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Third Party Document Updated Successfully`);
        this.router.navigate(['home/Summary/Import/TripartyAgreements']);
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
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

}
