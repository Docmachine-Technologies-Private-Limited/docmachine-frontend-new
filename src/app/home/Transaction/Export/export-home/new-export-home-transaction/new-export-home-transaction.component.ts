import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { DocumentService } from "../../../../../service/document.service";
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'new-export-home-transaction',
  templateUrl: './new-export-home-transaction.component.html',
  styleUrls: ['./new-export-home-transaction.component.scss']
})
export class NewExportHomeTransactionComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  Inward_Remittance_MT103_DATA: any = [];
  Inward_Remittance_MT103: any = [];
  MT103_URL: any = '';
  isEditable = false;
  ForwardContractDATA: any = [];

  CUSTOM_MAT_STEPPER: any = {
    LABEL_LIST_NAME: ["Select Inward Remittance Disposal No.", "Form Forward Ref No."]

  }

  constructor(private _formBuilder: FormBuilder,
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService,
    public documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getInward_remittance().subscribe((res: any) => {
      res?.data?.forEach(element => {
        element['Checked'] = false;
      });
      this.Inward_Remittance_MT103_DATA = res?.data;
      console.log(res, 'getInward_remittance')
    })

    this.documentService.ForwardContractget().subscribe((res: any) => {
      this.ForwardContractDATA = res?.data;
      console.log(res, 'daasdasdasdasdasdadsd')
    });
  }

  REMITTANCE_DATA: any = ''
  Remittancedata(data: any, i: any, stepper: any) {
    this.REMITTANCE_DATA = data;
    this.Inward_Remittance_MT103_DATA?.forEach((element, index) => {
      if (i != index) {
        element['Checked'] = false;
      } else {
        element['Checked'] = true;
      }
    });
    this.MT103_URL = data?.file;
    this.Inward_Remittance_MT103 = [data];
    var cleartimeout: any = null;
    setTimeout(() => {
      this.validator.buildForm({
        BankName: {
          type: "LabelShow",
          value: this.Inward_Remittance_MT103[0]?.BankName,
          label: "Bank Name",
          Inputdisabled: true,
          visible: true,
          rules: {
            required: true,
          }
        },
        Inward_reference_number: {
          type: "LabelShow",
          value: this.Inward_Remittance_MT103[0]?.Inward_reference_number,
          label: "Ref. Number",
          Inputdisabled: true,
          visible: true,
          rules: {
            required: true,
          }
        },
        currency: {
          type: "LabelShow",
          value: this.Inward_Remittance_MT103[0]?.currency,
          label: "Currency",
          Inputdisabled: true,
          disabled: true,
          rules: {
            required: true,
          },
        },
        amount: {
          type: "LabelShow",
          value: this.Inward_Remittance_MT103[0]?.amount,
          label: "Amount",
          Inputdisabled: true,
          visible: true,
          rules: {
            required: true,
          }
        },
        Remitter_Name: {
          type: "LabelShow",
          value: this.Inward_Remittance_MT103[0]?.Remitter_Name,
          label: "Remitter Name",
          Inputdisabled: true,
          visible: true,
          rules: {
            required: true,
          }
        },
        Inward_amount_for_disposal: {
          type: "text",
          value: this.Inward_Remittance_MT103[0]?.Inward_amount_for_disposal,
          label: "Disposal Amount",
          visible: true,
          rules: {
            required: true,
          },
          KeyPress: (event: any) => {
            clearTimeout(cleartimeout);
            if (parseFloat(event?.target?.value) > parseFloat(this.Inward_Remittance_MT103[0]?.Inward_amount_for_disposal)) {

            } else {
              this.toastr.error("Inward Amount for Disposal Should be Equal to Your Added Amount");
              event?.preventDefault();
              cleartimeout = setTimeout(() => {
                event.target.value = this.Inward_Remittance_MT103[0]?.Inward_amount_for_disposal;
              }, 200);
            }
            console.log("sdfsdhfsdfdsfsdfd", event)
          }
        }
      }, 'NewInwardRemittanceDisposal');
    }, 200);
    console.log(this.REMITTANCE_DATA, 'REMITTANCE_DATA')
  }

  ToForwardContract_Selected: any = []
  ToForwardContract(event: any, value: any, index: any) {
    var cleartimeout: any = null;
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
      this.validator.buildForm({
        ForwardRefNo: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.ForwardRefNo,
          label: "Forward Ref No",
          rules: {
            required: true,
          }
        },
        BookingDate: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.BookingDate,
          label: "Booking Date",
          rules: {
            required: true,
          }
        },
        BookingAmount: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.BookingAmount,
          label: "Forward Contract Amount",
          rules: {
            required: true,
          }
        },
        ToDate: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.ToDate,
          label: "Due Date",
          rules: {
            required: true,
          }
        },
        AvailableAmount: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.AvailableAmount!=""?this.ToForwardContract_Selected[0]?.AvailableAmount:0,
          label: "Available Amount",
          rules: {
            required: true,
          }
        },
        UtilizedAmount: {
          type: "text",
          value: this.ToForwardContract_Selected[0]?.UtilizedAmount,
          label: "Amount to be utilised",
          AmountLessThan: {
            key: 'UtilizedAmount',
            equalkey: 'AvailableAmount',
            index: 3,
            equalindex: 2,
            errormsg: 'Available Amount should be less than allow is required.',
          },
          rules: {
            required: true,
          },
          KeyPress: (event: any) => {
            clearTimeout(cleartimeout);
            if (parseFloat(event?.target?.value) > parseFloat(this.ToForwardContract_Selected[0]?.AvailableAmount)) {

            } else {
              this.toastr.error("Utilized Amount Should be Equal to Your Added Amount");
              event?.preventDefault();
              cleartimeout = setTimeout(() => {
                event.target.value = this.ToForwardContract_Selected[0]?.AvailableAmount;
              }, 200);
            }
            console.log("sdfsdhfsdfdsfsdfd", event)
          }
        },
        NetRate: {
          type: "LabelShow",
          value: this.ToForwardContract_Selected[0]?.NetRate,
          label: "Exchange rate as per FWC",
          rules: {
            required: true,
          }
        }
      }, 'ForwardRef');
    } else {
      this.ToForwardContract_Selected[0] = '';
    }
  }
  INWARD_DISPOSAL_VALUE_FORM: any = [];
  InwardDisposalNext: boolean = false;
  InwardDisposalFormValue(value: any) {
    if (value != false) {
      this.INWARD_DISPOSAL_VALUE_FORM = [this.mergeObject(value, this.REMITTANCE_DATA)];
      this.InwardDisposalNext = true;
    } else {
      this.INWARD_DISPOSAL_VALUE_FORM = [];
      this.InwardDisposalNext = false
    }
    console.log(value, "FormValue")
  }

  FORWARD_REF_VALUE_FORM: any = [];
  ForwardRefNext: boolean = false;
  ForwardRefFormValue(value: any) {
    if (value != false) {
      this.FORWARD_REF_VALUE_FORM = [this.mergeObject(value, this.ToForwardContract_Selected[0])]
      this.ForwardRefNext = true;
    } else {
      this.FORWARD_REF_VALUE_FORM = [];
      this.ForwardRefNext = false
    }
    console.log(value, "ForwardRefFormValue")
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
