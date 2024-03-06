import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DocumentService } from '../../../../../service/document.service';
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';

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
        TotalMonthDays: {
          type: "number",
          value: "",
          label: "No. of Days",
          rules: {
            required: true,
          },
          callback:(value:any)=>{
            console.log(value,"TodayDays")
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
      }, 'CREATE_BHARATHEXIM_SUBSCRIPTION_PLAN');
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
        TotalMonthDays: {
          type: "number",
          value: data?.TotalMonthDays,
          label: "No. of Days",
          rules: {
            required: true,
          },
          callback:(value:any)=>{
            console.log(value,"TodayDays")
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
                value: data?.both?.DMS,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.both?.ForwardContractManagement,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.both?.TransactionDMS,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.both?.DMS_Teasury,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.both?.ALL,
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
                value: data?.Export?.DMS,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Export?.ForwardContractManagement,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Export?.TransactionDMS,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Export?.DMS_Teasury,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Export?.ALL,
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
                value: data?.Import?.DMS,
                label: "Add DMS Amount",
                name: 'DMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Import?.ForwardContractManagement,
                label: "Add Forward Contract Management Amount",
                name: 'ForwardContractManagement',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Import?.TransactionDMS,
                label: "Add Transaction+DMS Amount",
                name: 'TransactionDMS',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Import?.DMS_Teasury,
                label: "Add DMS+Teasury Amount",
                name: 'DMS_Teasury',
                rules: {
                  required: false,
                },
              },
              {
                type: "number",
                value: data?.Import?.ALL,
                label: "Add ALL Amount",
                name: 'ALL',
                rules: {
                  required: false,
                },
              }
            ]
          ]
        },
      }, 'EDIT_BHARATHEXIM_SUBSCRIPTION_PLAN');
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
      e.value['StartDate'] = moment().format('dddd, MMMM DD, YYYY h:mm A')
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
  
  getDays(d1: any, d2: any) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days =
      Math.round(Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days
  }

  onUpdate(e: any, REST_FORM: any) {
    console.log(e)
    if (e.status == "VALID") {
      e.value['both'] = e?.value?.PlanType[0]
      e.value['Export'] = e?.value?.PlanType[1]
      e.value['Import'] = e?.value?.PlanType[2];
      delete e?.value?.PlanType;
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
