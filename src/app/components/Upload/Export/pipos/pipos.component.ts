import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'export-app-pipos',
  templateUrl: './pipos.component.html',
  styleUrls: ['./pipos.component.scss', '../../commoncss/common.component.scss']
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
        document: {
          type: "MultiCheckBox",
          value: "",
          label: "Select the type of document",
          checkboxlabel: [
            { text: "Proforma Inovice", type: "checkbox", value: 'PI' },
            { text: 'Purchase Order', type: "checkbox", value: 'PO' }
          ],
          rules: {
            required: true,
          }
        },
        buyerName: {
          type: "buyer",
          value: "",
          label: "Buyer's name",
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
          },
        },
        currency: {
          type: "currency",
          value: "",
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
          value: "",
          label: "PI/PO Amount",
          rules: {
            required: true,
          }
        },
        MaterialTypes: {
          type: "MultiCheckBox",
          value: "",
          label: "Type of goods category",
          checkboxlabel: [
            { text: "Finished Goods", type: "checkbox", value: 'Finished Goods' },
            { text: 'Services', type: "checkbox", value: 'Services' },
            { text: 'Samples', type: "checkbox", value: 'Samples' },
            { text: 'Repairs and returns', type: "checkbox", value: 'Repairs and returns' }
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
          value: "",
          label: "Consignee Name",
          rules: {
            required: false,
          }
        },
        RemitterName: {
          type: "RemitterCheckBox",
          value: "",
          label: "Select Inward Remitter Name",
          rules: {
            required: false,
          },
          Show: false,
          RemitterLabel: "Select Inward Remitter Ref No.",
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
        PCReferanceDetails: {
          type: "OptionMultiCheckBox",
          value: "",
          label: "PC reference number",
          checkboxlabel: [{ text: "Yes", type: "checkbox", value: 'Yes' }, { text: 'No', type: "checkbox", value: 'No' }],
          Yes: "Yes",
          rules: {
            required: true,
          },
          option: [
            [{
              type: "text",
              value: "",
              label: "Amount of PC",
              name: 'amount',
              rules: {
                required: false,
              }
            }, {
              type: "number",
              value: "",
              label: "Tenor",
              name: 'Tenor',
              rules: {
                required: false,
              },
            }, {
              type: "text",
              value: "",
              name: 'pcRefNo',
              label: "PC reference number",
              rules: {
                required: false,
              }
            }, {
              type: "date",
              value: "",
              label: "Due date",
              name: 'dueDate',
              rules: {
                required: false,
              }
            }],
          ]
        },
        ModeofTransport: {
          type: "OptionMultiCheckBox",
          value: "",
          label: "Mode of Transport",
          checkboxlabel: [{ text: "Sea", type: "checkbox", value: 'Sea' }, { text: 'Air', type: "checkbox", value: 'Air' }],
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
          AddNewRequried: true,
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
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.dynamicFormGroup?.controls['currency']?.value;
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.type);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, "callback")
                },
                rules: {
                  required: true,
                },
              },
              {
                type: "date",
                value: "",
                label: "Last date of shipment",
                name: 'lastDayShipment',
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
                disabled: true
              },
            ]
          ]
        },
      }, 'PIPO_EXPORT');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    console.log(this.paymentTermSum(e.value.paymentTerm), e.value.amount, "this.paymentTermSum(e.value.paymentTerm)")
    if (this.paymentTermSum(e.value.paymentTerm) == parseInt(e.value.amount)) {
      e.value.location = e.value.location?.value != undefined ? e.value.location.value : e.value.location;
      e.value.currency = e.value.currency?.type != undefined ? e.value.currency.type : e.value.currency;
      e.value.commodity = e.value.commodity?.value != undefined ? e.value.commodity.value : e.value.commodity;
      e.value.buyerName = e.value.buyerName?.value != undefined ? e.value.buyerName.value : e.value.buyerName;
      e.value.incoterm = e.value.incoterm?.value != undefined ? e.value.incoterm.value : e.value.incoterm;
      e.value.ConsigneeName = e.value.ConsigneeName?.value != undefined ? e.value.ConsigneeName.value : e.value.ConsigneeName;
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
              if (this.validator.SELECTED_PIPO?.length == 0) {
                this.router.navigateByUrl("home/Summary/Export/Pipo");
              }
            },
            (err) => console.log("Error adding pipo")
          );
        } else {
          this.toastr.error(`Please check this sb no. : ${e.value.pi_poNo} already exit...`);
        }
      });
    } else {
      this.toastr.error(`Total amount in payment Term should be equal to PIPO amount`);
    }
  }
  paymentTermSum(value: any) {
    return value.reduce((a, b) => a + parseFloat(b?.amount), 0)
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
