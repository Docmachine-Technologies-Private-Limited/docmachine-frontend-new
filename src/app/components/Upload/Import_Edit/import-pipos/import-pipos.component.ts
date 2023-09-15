import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import moment from 'moment';

@Component({
  selector: 'edit-import-pipos',
  templateUrl: './import-pipos.component.html',
  styleUrls: ['./import-pipos.component.scss', '../../commoncss/common.component.scss']
})
export class EditImportPIPOSComponent implements OnInit {
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
  data: any = '';

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
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "asdasdasdasds")
    });
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      let paymentTermdata: any = [];
      let ModeofTransportData1: any = [];
      let ModeofTransportData2: any = [];

      args?.paymentTerm?.forEach(element => {
        paymentTermdata.push({
          type: "PaymentTermType",
          value: element?.type,
          label: "Type",
          name: 'type',
          rules: {
            required: true,
          },
        },
          {
            type: "date",
            value: moment(element?.date).format("YYYY-MM-DD"),
            label: "Last date of shipment",
            name: 'lastDayShipment',
            rules: {
              required: true,
            },
          },
          {
            type: "text",
            value: element?.amount,
            label: "Amount",
            name: 'amount',
            rules: {
              required: true,
            },
          },
          {
            type: "currency",
            value: element?.currency?.type,
            label: "Currency",
            name: 'currency',
            rules: {
              required: true,
            },
            disabled: true
          })
      });
      ModeofTransportData1 = [{
        type: "checkbox",
        value: args?.ModeofTransport[0]?.EDI,
        label: "EDI",
        name: 'EDI',
        rules: {
          required: false,
        }
      }, {
        type: "checkbox",
        value: args?.ModeofTransport[0]?.nonEDI,
        label: "non - EDI",
        name: 'nonEDI',
        rules: {
          required: false,
        },
      }];

      ModeofTransportData2 = [{
        type: "checkbox",
        value: args?.ModeofTransport[1]?.AirportCustoms,
        label: "Airport customs",
        name: 'AirportCustoms',
        rules: {
          required: false,
        }
      }, {
        type: "checkbox",
        value: args?.ModeofTransport[1]?.Courier,
        label: "Courier",
        name: 'Courier',
        rules: {
          required: false,
        },
      }];

      this.validator.buildForm({
        document: {
          type: "MultiCheckBox",
          value: args?.document,
          label: "Select the type of document",
          checkboxlabel: [
            { text: "Proforma Inovice", value: 'PI' },
            { text: 'Purchase Order', value: 'PO' }
          ],
          rules: {
            required: true,
          }
        },
        benneName: {
          type: "benne",
          value: args?.benneName,
          label: "Beneficiary Name*",
          rules: {
            required: true,
          }
        },
        HSCODE: {
          type: "HSCODE",
          value: args?.HSCODE,
          label: "Select HS Code",
          rules: {
            required: true,
          }
        },
        pi_poNo: {
          type: "text",
          value: args?.pi_poNo,
          label: "PI/PO number *",
          rules: {
            required: true,
          }
        },
        date: {
          type: "date",
          value: args?.date,
          label: "Pipo Date",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency",
          rules: {
            required: true,
          },
          autofill: {
            type: "formGroup",
            SetInputName: "currency",
            CONTROLS_NAME: "paymentTerm",
            GetInputName: "currency"
          }
        },
        amount: {
          type: "text",
          value: args?.amount,
          label: "Pipo Amount",
          rules: {
            required: true,
          }
        },
        MaterialTypes: {
          type: "MultiCheckBox",
          value: args?.MaterialTypes,
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
        incoterm: {
          type: "IncoTerm",
          value: args?.incoterm,
          label: "Incoterm",
          rules: {
            required: true,
          }
        },
        location: {
          type: "location",
          value: args?.location,
          label: "Branch",
          rules: {
            required: true,
          }
        },
        ModeofTransport: {
          type: "OptionMultiCheckBox",
          value: args?.ModeofTransport[0]?.EDI != '' && args?.ModeofTransport[0]?.EDI != undefined ? "Sea" : "Air",
          label: "Mode of Transport",
          checkboxlabel: [{ text: "Sea", value: 'Sea' }, { text: 'Air', value: 'Air' }],
          rules: {
            required: true,
          },
          Yes: "Sea",
          No: "Air",
          option: [ModeofTransportData1],
          option1: [ModeofTransportData2]
        },
        paymentTerm: {
          type: "formGroup",
          label: "Payment Terms",
          GroupLabel: ['Payment Terms 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: [paymentTermdata]
        },
      }, 'PIPO_IMPORT');
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
    this.documentService.updatePipo(this.data?._id, e.value).subscribe((res) => {
      this.toastr.success('PI/PO added successfully.');
      if (this.validator.SELECTED_PIPO?.length == 0) {
        this.router.navigateByUrl("home/Summary/Import/Pipo");
      }
    }, (err) => console.log("Error adding pipo"));
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
