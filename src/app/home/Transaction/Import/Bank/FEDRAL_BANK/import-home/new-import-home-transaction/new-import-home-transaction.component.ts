import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { DocumentService } from "../../../../../../../service/document.service";
import { UploadServiceValidatorService } from '../../../../../../../components/Upload/service/upload-service-validator.service';
import { ToastrService } from 'ngx-toastr';
import { filterAnyTablePagination } from '../../../../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'new-import-home-transaction',
  templateUrl: './new-import-home-transaction.component.html',
  styleUrls: ['./new-import-home-transaction.component.scss']
})
export class NewImportHomeTransactionComponent implements OnInit {
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

  ForwardContractFilterDATA: any = [];

  constructor(private _formBuilder: FormBuilder,
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService,
    public filteranytablepagination: filterAnyTablePagination,
    public documentService: DocumentService) { }

  ngOnInit(): void {
    this.filteranytablepagination.PaginationfilterAnyTable({}, { skip: 0, limit: 200 }, 'Inward_remittance').subscribe((res: any) => {
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
    this.ForwardContractFilterDATA = this.ForwardContractDATA.filter((item: any) => item?.Currency?.indexOf(data?.currency) != -1)
    this.MT103_URL = data?.file;
    this.Inward_Remittance_MT103 = [data];
    this.filteranytablepagination.PaginationfilterAnyTable({
      buyerName: this.Inward_Remittance_MT103[0]?.BuyerName
    }, { skip: 0, limit: 1000 }, 'LC').subscribe((res: any) => {
      console.log(res, 'Beneficiary');
      setTimeout(() => {
        this.validator.buildForm({
          BankName: {
            type: "LabelShow",
            value: data?.BankName,
            label: "Bank Name",
            Inputdisabled: true,
            visible: true,
            rules: {
              required: true,
            }
          },
          Inward_reference_number: {
            type: "LabelShow",
            value: data?.Inward_reference_number,
            label: "Ref. Number",
            Inputdisabled: true,
            visible: true,
            rules: {
              required: true,
            }
          },
          currency: {
            type: "LabelShow",
            value: data?.currency,
            label: "Currency",
            rules: {
              required: true,
            },
          },
          amount: {
            type: "LabelShow",
            value: data?.amount,
            label: "Bill Amount",
            Inputdisabled: true,
            visible: true,
            rules: {
              required: true,
            }
          },
          // Remitter_Name: {
          //   type: "LabelShow",
          //   value: data?.Remitter_Name,
          //   label: "Party Name",
          //   Inputdisabled: true,
          //   visible: true,
          //   rules: {
          //     required: true,
          //   }
          // },
          Inward_amount_for_disposal: {
            type: "TextValiadtion",
            value: data?.Inward_amount_for_disposal != '' && data?.Inward_amount_for_disposal != undefined ? data?.Inward_amount_for_disposal : data?.amount,
            label: "Payment Amount",
            visible: true,
            EqualName: "amount",
            rules: {
              required: true,
            },
            errormsg: 'Disposal Amount should be lesser than Inward Remittance Amount.',
          },
          SightUsance: {
            type: "yesnocheckbox",
            value: '',
            label: "Sight/Usance?",
            rules: {
              required: true,
            },
            YesNo: 'Sight',
            text1:"Sight",
            text2:"Usance",
            HideShowInput: ["DueDate","UploadAcceptanceLetter"]
          },
          DueDate: {
            type: "date",
            value: '',
            label: "Due Date",
            rules: {
              required: true,
            }
          },
          UploadAcceptanceLetter: {
            type: "yesnocheckbox",
            value: '',
            label: "Do you want Acceptance Letter?",
            rules: {
              required: true,
            },
            YesNo: '',
          },
          YesNoUnderLCAsk: {
            type: "yesnocheckbox",
            value: '',
            label: "Under LC?",
            rules: {
              required: true,
            },
            YesNo: 'false',
            HideShowInput: ["UnderLC"]
          },
          UnderLC: {
            type: "DropDown",
            value: '',
            items:res?.data,
            bindLabel:"letterOfCreditNumber",
            label: "Select LC No.",
            rules: {
              required: true,
            },
          },
        }, 'NewInwardRemittanceDisposal');
      }, 200);
    })
    
    console.log(this.REMITTANCE_DATA, 'REMITTANCE_DATA')
  }

  ToForwardContract_Selected: any = []
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      if (this.Inward_Remittance_MT103[0]?.currency == value?.Currency) {
        this.ToForwardContract_Selected[0] = value;
        this.validator.buildForm({
          RemittanceAmount: {
            type: "LabelShow",
            value: this.INWARD_DISPOSAL_VALUE_FORM[0]?.amount,
            label: "Remittance Amount",
            rules: {
              required: true,
            }
          },
          DisposalAmount: {
            type: "LabelShow",
            value: this.INWARD_DISPOSAL_VALUE_FORM[0]?.Inward_amount_for_disposal,
            label: "Disposal Amount",
            rules: {
              required: true,
            }
          },
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
          ToDate: {
            type: "LabelShow",
            value: this.ToForwardContract_Selected[0]?.ToDate,
            label: "Due Date",
            rules: {
              required: true,
            }
          },
          Currency: {
            type: "LabelShow",
            value: this.ToForwardContract_Selected[0]?.Currency,
            label: "Currency",
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
          AvailableAmount: {
            type: "LabelShow",
            value: this.ToForwardContract_Selected[0]?.AvailableAmount != "" ? this.ToForwardContract_Selected[0]?.AvailableAmount : this.ToForwardContract_Selected[0]?.BookingAmount,
            label: "Available Amount",
            rules: {
              required: true,
            }
          },
          UtilizedAmount: {
            type: "TextValiadtion",
            value: this.ToForwardContract_Selected[0]?.UtilizedAmount,
            label: "Amount to be utilised",
            EqualName: "DisposalAmount",
            errormsg: 'Utilisation amount should be equal or less than the forward contract Amount.',
            rules: {
              required: true,
            },
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
        event.target.checked = false
        this.ToForwardContract_Selected[0] = '';
        this.toastr.error("Forward Contract Currency should be same Remittance Currency.")
      }
    } else {
      event.target.checked = false
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
