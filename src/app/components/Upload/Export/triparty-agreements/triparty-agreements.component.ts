import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'export-triparty-agreements',
  templateUrl: './triparty-agreements.component.html',
  styleUrls: ['./triparty-agreements.component.scss','../../commoncss/common.component.scss']
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
          MAX_LIMIT: 2,
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
      },'ExportTryPartyAgreements');
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
                this.router.navigate(['home/Summary/Export/try-party']);
              }, (error) => {
                console.log('error');
              }
              );
          }, (err) => console.log('Error adding pipo'));
        } else {
          this.toastr.error(`Please check this Third Party no. : ${e.value.triPartyAgreementNumber} already exit...`);
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
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
