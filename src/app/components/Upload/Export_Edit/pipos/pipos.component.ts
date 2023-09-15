import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  selector: 'edit-export-app-pipos',
  templateUrl: './pipos.component.html',
  styleUrls: ['./pipos.component.scss', '../../commoncss/common.component.scss']
})
export class EditPIPOSComponent implements OnInit {
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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      let paymentTermdata: any = [];
      let PCReferanceDetailsData: any = [];
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
            disabled:true
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

      args?.PCReferanceDetails?.forEach(element => {
        PCReferanceDetailsData.push({
          type: "text",
          value: element?.amount,
          label: "Amount of PC",
          name: 'amount',
          rules: {
            required: false,
          }
        }, {
          type: "number",
          value: element?.Tenor,
          label: "Tenor",
          name: 'Tenor',
          rules: {
            required: false,
          },
        }, {
          type: "text",
          value: element?.pcRefNo,
          name: 'pcRefNo',
          label: "PC reference number",
          rules: {
            required: false,
          }
        }, {
          type: "date",
          value: element?.dueDate,
          label: "Due date",
          name: 'dueDate',
          rules: {
            required: false,
          }
        })
      });
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
        buyerName: {
          type: "buyer",
          value: args?.buyerName,
          label: "Buyer's name",
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
          autofill:{
            type:"formGroup",
            SetInputName:"currency",
            CONTROLS_NAME:"paymentTerm",
            GetInputName:"currency"
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
            { text: "Finished Goods", value: 'Finished Goods' },
            { text: 'Services', value: 'Services' },
            { text: 'Samples', value: 'Samples' },
            { text: 'Repairs and returns', value: 'Repairs and returns' }
          ],
          NotificationShow: {
            "Finished Goods": "",
            "Services": "No SB traceability and applicability (SB+9months criteria not applicable).",
            "Samples": "Invoice should be sent to CHA for marking FOC in the SB,CHA Email id should be mandatorily registered if not to Admin.",
            "Repairs and returns": "GR waiver form should be made available."
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
          rules: {
            required: true,
          }
        },
        ConsigneeName: {
          type: "consignee",
          value: args?.ConsigneeName,
          label: "Consignee Name",
          rules: {
            required: true,
          }
        },
        RemitterName: {
          type: "RemitterName",
          value: args?.RemitterName,
          label: "Remitter Name",
          rules: {
            required: false,
          }
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
        PCReferanceDetails: {
          type: "OptionMultiCheckBox",
          value: args?.PCReferanceDetails[0]?.amount != '' ? "Yes" : "No",
          label: "PC reference number",
          checkboxlabel: [{ text: "Yes", value: 'Yes' }, { text: 'No', value: 'No' }],
          Yes: "Yes",
          rules: {
            required: true,
          },
          option: [PCReferanceDetailsData]
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
      }, 'PIPO_EXPORT');
    }, 200);
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
    e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
    e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
    e.value.buyerName = e.value.buyerName?.value != undefined ? e.value.buyerName.value : e.value.buyerName;
    e.value.incoterm = e.value.incoterm?.value != undefined ? e.value.incoterm.value : e.value.incoterm;
    e.value.ConsigneeName = e.value.ConsigneeName?.value != undefined ? e.value.ConsigneeName.value : e.value.ConsigneeName;
    e.value.RemitterName = e.value.RemitterName?.Remitter_Name != undefined ? e.value.RemitterName.Remitter_Name : e.value.RemitterName;
    this.documentService.updatePipo(this.data?._id, e.value).subscribe((res) => {
      this.toastr.success('PI/PO added successfully.');
      if (this.validator.SELECTED_PIPO?.length == 0) {
        this.router.navigateByUrl("home/Summary/Export/Pipo");
      }
    }, (err) => console.log("Error adding pipo"));
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
