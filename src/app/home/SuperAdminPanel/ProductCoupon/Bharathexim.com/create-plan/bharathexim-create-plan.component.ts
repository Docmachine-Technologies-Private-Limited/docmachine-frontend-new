import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DocumentService } from '../../../../../service/document.service';
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bharathexim-create-plan',
  templateUrl: './bharathexim-create-plan.component.html',
  styleUrls: ['./bharathexim-create-plan.component.scss']
})
export class BharatheximCreatePlanComponent implements OnInit, OnChanges {
  @Output('SubmitButtonEvent') SubmitButtonEvent: any = new EventEmitter();
  @Input('EditCondition') EditCondition: boolean = false;
  @Input('data') data: any = '';
  SubscriptionType: any = ['Export', 'Import', 'both']

  constructor(public documentService: DocumentService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService) { }

  ngOnInit(): void {
    if (this.EditCondition == false) {
      this.response()
    } else {
      this.Edit(this.data)
    }
    console.log(this.EditCondition, this.data, "EditCondition")
  }

  ngOnChanges(changes: any): void {
    if (this.EditCondition == true) {
      this.Edit(changes?.data?.currentValue);
      this.data = changes?.data?.currentValue;
    } else {
      this.response()
    }
    console.log(changes, this.EditCondition, this.data, "ngOnChanges")
  }

  response() {
    setTimeout(() => {
      this.validator.buildForm({
        PlanName: {
          type: "text",
          value: "",
          label: "Plan Name",
          rules: {
            required: true,
          }
        },
        CompanyName: {
          type: "text",
          value: "",
          label: "Plan Company Name",
          rules: {
            required: true,
          }
        },
        PlanType: {
          type: "formGroup",
          label: "Plan Type :",
          GroupLabel: ['Plan Both', 'Plan Export', 'Plan Import'],
          AddNewRequried: false,
          rules: {
            required: true,
          },
          Style: `box-shadow: unset;padding: 0;`,
          formArray: [
            [
              {
                type: "number",
                value: 0,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add ALL Amount",
                name: 'ALL',
                rules: {
                  required: false,
                },
              }
            ],
            [
              {
                type: "number",
                value: 0,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add ALL Amount",
                name: 'ALL',
                rules: {
                  required: false,
                },
              }
            ],
            [
              {
                type: "number",
                value: 0,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: 0,
                label: "Add ALL Amount",
                name: 'ALL',
                rules: {
                  required: false,
                },
              }
            ]
          ]
        },
      }, 'CREATE_PLAN');
    }, 200);
  }

  Edit(data) {
    setTimeout(() => {
      this.validator.buildForm({
        PlanName: {
          type: "text",
          value: data?.PlanName,
          label: "Plan Name",
          rules: {
            required: true,
          }
        },
        CompanyName: {
          type: "text",
          value: data?.CompanyName,
          label: "Plan Company Name",
          rules: {
            required: true,
          }
        },
        Currency: {
          type: "text",
          value: "INR",
          label: "Plan Currency",
          Inputdisabled: true,
          rules: {
            required: true,
          }
        },
        Amount: {
          type: "number",
          value: data?.Amount,
          label: "Plan Amount",
          rules: {
            required: true,
          }
        },
        Description: {
          type: "textarea",
          value: data?.Description,
          label: "Plan Description",
          rules: {
            required: true,
          }
        },
      }, 'EDIT_CREATE_PLAN');
    }, 200);
  }

  onSubmit(e: any, REST_FORM: any) {
    console.log(e)
    if (e.status == "VALID") {
      e.value.Currency = e?.value?.Currency?.type != undefined ? e?.value?.Currency?.type : e?.value?.Currency
      e.value['both'] = e?.value?.PlanType[0]
      e.value['Export'] = e?.value?.PlanType[1]
      e.value['Import'] = e?.value?.PlanType[2];
      delete e?.value?.PlanType;
      this.documentService.addBharatheximSubscriptionPlan(e.value).subscribe((res: any) => {
        if (res?.status == true) {
          this.SubmitButtonEvent.emit({ status: true, REST_FORM: REST_FORM })
          this.toastr.success("Added Successfully")
        } else {
          this.SubmitButtonEvent.emit({ status: false, REST_FORM: REST_FORM })
        }
      });
    }
  }

  onUpdate(e: any, REST_FORM: any) {
    console.log(e)
    if (e.status == "VALID") {
      e.value.Currency = e?.value?.Currency?.type != undefined ? e?.value?.Currency?.type : e?.value?.Currency
      this.documentService.updateBharatheximSubscriptionPlan(this.data?._id, e.value).subscribe((res: any) => {
        if (res?.status == true) {
          this.SubmitButtonEvent.emit({ status: true, REST_FORM: REST_FORM })
          this.toastr.success("Update Successfully")
        } else {
          this.SubmitButtonEvent.emit({ status: false, REST_FORM: REST_FORM })
        }
      });
    }
  }
}
