import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { DocumentService } from "../../../../../service/document.service";
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';

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
    this.validator.buildForm({
      BankName: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.BankName,
        label: "Bank Name",
        disabled: true,
        rules: {
          required: true,
        }
      },
      Inward_reference_number: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.Inward_reference_number,
        label: "Ref. Number",
        disabled: true,
        rules: {
          required: true,
        }
      },
      currency: {
        type: "currency",
        value: this.Inward_Remittance_MT103[0]?.currency,
        label: "Currency",
        disabled: true,
        rules: {
          required: true,
        }
      },
      amount: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.amount,
        label: "Amount",
        disabled: true,
        rules: {
          required: true,
        }
      },
      Bill_lodgment_Number: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.Bill_lodgment_Number,
        label: "BL. Number",
        disabled: true,
        rules: {
          required: true,
        }
      },
      Remitter_Name: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.Remitter_Name,
        label: "Remitter Name",
        disabled: true,
        rules: {
          required: true,
        }
      },
      Inward_amount_for_disposal: {
        type: "text",
        value: this.Inward_Remittance_MT103[0]?.Inward_amount_for_disposal,
        label: "Disposal Amount",
        rules: {
          required: true,
        }
      }
    }, 'InwardRemittanceDisposal');
    console.log(this.REMITTANCE_DATA, 'REMITTANCE_DATA')
  }

  ToForwardContract_Selected: any = []
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
      this.validator.buildForm({
        ForwardRefNo: {
          type: "text",
          value: this.ToForwardContract_Selected[0]?.ForwardRefNo,
          label: "Forward Ref No",
          disabled: true,
          rules: {
            required: true,
          }
        },
        BookingDate: {
          type: "date",
          value: this.ToForwardContract_Selected[0]?.BookingDate,
          label: "Booking Date",
          disabled: true,
          rules: {
            required: true,
          }
        },
        BookingAmount: {
          type: "text",
          value: this.ToForwardContract_Selected[0]?.BookingAmount,
          label: "Forward Contract Amount",
          disabled: true,
          rules: {
            required: true,
          }
        },
        ToDate: {
          type: "text",
          value: this.ToForwardContract_Selected[0]?.ToDate,
          label: "Due Date",
          disabled: true,
          rules: {
            required: true,
          }
        },
        BookedUnderFacility: {
          type: "text",
          value: this.ToForwardContract_Selected[0]?.BookedUnderFacility,
          label: "Amount to be utilised",
          disabled: true,
          rules: {
            required: true,
          }
        },
        NetRate: {
          type: "text",
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
      this.INWARD_DISPOSAL_VALUE_FORM = [this.mergeObject(value,this.REMITTANCE_DATA)];
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
      this.FORWARD_REF_VALUE_FORM = [this.mergeObject(value,this.ToForwardContract_Selected)]
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
