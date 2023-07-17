import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'app-pipos',
  templateUrl: './pipos.component.html',
  styleUrls: ['./pipos.component.scss','../../commoncss/common.component.scss']
})
export class PIPOSComponent implements OnInit {
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

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) { }

  async ngOnInit() {
   
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        buyerName: {
          type: "buyer",
          value: "",
          label: "Buyer's name",
          rules: {
            required: true,
          }
        },
        commodity: {
          type: "commodity",
          value: "",
          label: "Choose commodity",
          rules: {
            required: true,
          }
        },
        document: {
          type: "typedocument",
          value: "",
          label: "Select the type of document",
          rules: {
            required: true,
          }
        },
        pi_poNo: {
          type: "text",
          value: "",
          label: "PI/PO number *",
          rules: {
            required: true,
          }
        },
        date: {
          type: "date",
          value: "",
          label: "Invoice Date",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "Invoice amount",
          rules: {
            required: true,
          }
        },
        incoterm: {
          type: "text",
          value: "",
          label: "Incoterm",
          rules: {
            required: true,
          }
        },
        location: {
          type: "location",
          value: "",
          label: "Branch",
          rules: {
            required: true,
          }
        },
        lastDayShipment: {
          type: "date",
          value: "",
          label: "Last date of shipment",
          rules: {
            required: true,
          }
        },
        pcRefNo: {
          type: "text",
          value: "",
          label: "PC reference number",
          rules: {
            required: false,
          }
        },
        dueDate: {
          type: "date",
          value: "",
          label: "Due date",
          rules: {
            required: false,
          }
        },  
        paymentTerm: {
          type: "formArray",
          label: "Payment Terms",
          GroupLabel: ['Payment Terms 1'],
          MAX_LIMIT: 4,
          rules: {
            required: true,
          },
          formGroup:[{
            date: {
              type: "date",
              value: "",
              label: "Last date of shipment",
              rules: {
                required: true,
              },
            },
            type: {
              type: "PaymentTermType",
              value: "",
              label: "Type",
              rules: {
                required: true,
              },
            },
            amount: {
              type: "text",
              value: "",
              label: "Amount",
              rules: {
                required: true,
              },
            },
            currency: {
              type: "currency",
              value: "",
              label: "Currency",
              rules: {
                required: true,
              }
            },
          }]
        },
      }, 'PIPO_EXPORT');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
    e.value.buyerName = e.value.buyerName?.value != undefined ? e.value.buyerName.value : e.value.buyerName;
    if (e.value?.document == 'PI') {
      e.value.doc = this.pipourl1
    }
    else if (e.value?.document == 'PO') {
      e.value.doc1 = this.pipourl1
    }
    this.documentService.getInvoice_No({
      pi_poNo: e.value.pi_poNo
    }, 'pi_po').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addPipo(e.value).subscribe(
          (res) => {
            this.toastr.success('PI/PO added successfully.');
            this.router.navigateByUrl("/home/pipo");
          },
          (err) => console.log("Error adding pipo")
        );
      } else {
        this.toastr.error(`Please check this sb no. : ${e.value.pi_poNo} already exit...`);
      }
    });
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
}
