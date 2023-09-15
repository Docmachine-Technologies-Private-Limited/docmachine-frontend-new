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
  selector: 'import-pipos',
  templateUrl: './import-pipos.component.html',
  styleUrls: ['./import-pipos.component.scss', '../../commoncss/common.component.scss']
})
export class ImportPIPOSComponent implements OnInit {
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
      console.log('Master Country', this.SHIPPING_BUNDEL);
    }, (err) => console.log(err));
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        benneName: {
          type: "benne",
          value: "",
          label: "Beneficiary Name*",
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
        MaterialTypes: {
          type: "MultiCheckBox",
          value: "",
          label: "Type of goods category",
          checkboxlabel: [
            { text: "Raw Material", value: 'Raw Material' },
            { text: 'Capital Goods', value: 'Capital Goods' },
            { text: 'Services', value: 'Services' },
            { text: 'Samples', value: 'Samples' },
            { text: 'Repairs and returns', value: 'Repairs and returns' }
          ],
          NotificationShow: {
            "Raw Material": "",
            "Services": "No BOE traceability and applicability.",
            "Capital Goods": "If goods are first imported and to be sent out, FOC should be marked in BOE and while doing export BOE number should be captured.",
            "Samples": "Invoice should be sent to CHA for marking FOC in the BOE.",
            "Repairs and returns": "If goods are sent from India out and then coming in, BOE number to captured in BOE along with FOC."
          },
          rules: {
            required: true,
          },
          HideShowInput: {
            Services: ["incoterm", "ModeofTransport"],
          },
          LabelNameChange: {
            Services: {
              paymentTerm: {
                type: "formGroup",
                name: "lastDayShipment",
                labelChange: "Last date of delivery"
              }
            },
            default: {
              paymentTerm: {
                type: "formGroup",
                name: "lastDayShipment",
                labelChange: "Last date of shipment"
              }
            }
          },
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
          label: "PI/PO Date",
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
          label: "PI/PO Amount",
          rules: {
            required: true,
          },
          autofill:{
            type:"formGroup",
            SetInputName:"currency",
            CONTROLS_NAME:"paymentTerm",
            GetInputName:"currency"
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
        incoterm: {
          type: "IncoTerm",
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
        HSCODE: {
          type: "HSCODE",
          value: "",
          label: "Select HS Code",
          rules: {
            required: true,
          }
        },
        ModeofTransport: {
          type: "OptionMultiCheckBox",
          value: "",
          label: "Mode of Transport",
          checkboxlabel: [{ text: "Sea", value: 'Sea' }, { text: 'Air', value: 'Air' }],
          rules: {
            required: true,
          },
          Yes: "Sea",
          No: "Air",
          option: [
            [{
              type: "checkbox",
              value: "",
              label: "EDI",
              name: 'EDI',
              rules: {
                required: false,
              }
            }, {
              type: "checkbox",
              value: "",
              label: "non - EDI",
              name: 'nonEDI',
              rules: {
                required: false,
              },
            }],
          ],
          option1: [
            [{
              type: "checkbox",
              value: "",
              name: 'AirportCustoms',
              label: "Airport customs",
              rules: {
                required: false,
              }
            }, {
              type: "checkbox",
              value: "",
              label: "Courier",
              name: 'Courier',
              rules: {
                required: false,
              }
            }],
          ]
        },
        paymentTerm: {
          type: "formGroup",
          label: "Payment Terms",
          GroupLabel: ['Payment Terms 1'],
          AddNewRequried:true,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "PaymentTermType",
                value: "",
                label: "Type",
                name: 'type',
                rules: {
                  required: true,
                },
              },
              {
                type: "date",
                value: "",
                label: "Last date of shipment",
                name: 'date',
                rules: {
                  required: true,
                },
              },
              {
                type: "text",
                value: "",
                label: "Amount",
                name: 'amount',
                rules: {
                  required: true,
                },
              },
              {
                type: "currency",
                value: "",
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled:true
              },
            ]
          ]
        },
      }, 'PIPO_IMPORT').then((res: any) => {
        console.log(res, 'PIPO_IMPORT')
      });
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
    e.value.benneName = e.value.benneName?.value != undefined ? e.value.benneName.value : e.value.benneName;
    e.value.incoterm = e.value.incoterm?.value != undefined ? e.value.incoterm.value : e.value.incoterm;
    if (e.value?.document == 'PI') {
      e.value.doc = this.pipourl1
    }
    else if (e.value?.document == 'PO') {
      e.value.doc = this.pipourl1
    }
    this.documentService.getInvoice_No({
      pi_poNo: e.value.pi_poNo
    }, 'pi_po').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addPipo(e.value).subscribe(
          (res) => {
            this.toastr.success('PI/PO added successfully.');
            this.router.navigateByUrl("home/Summary/Import/Pipo");
          },
          (err) => console.log("Error adding pipo")
        );
      } else {
        this.toastr.error(`Please check this pipo no. : ${e.value.pi_poNo} already exit...`);
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
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
