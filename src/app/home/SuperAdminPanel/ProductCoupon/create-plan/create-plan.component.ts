import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent implements OnInit, OnChanges {
  @Output('SubmitButtonEvent') SubmitButtonEvent: any = new EventEmitter();
  @Input('EditCondition') EditCondition: boolean = false;
  @Input('data') data: any = '';

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
        Currency: {
          type: "currency",
          value: "",
          label: "Select Plan Currency",
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
        Amount: {
          type: "number",
          value: "",
          label: "Plan Amount",
          rules: {
            required: true,
          }
        },
        Description: {
          type: "textarea",
          value: "",
          label: "Plan Description",
          rules: {
            required: true,
          }
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
          type: "currency",
          value: data?.Currency,
          label: "Select Plan Currency",
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
      this.documentService.addSubscriptionPlan(e.value).subscribe((res: any) => {
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
      this.documentService.updateSubscriptionPlan(this.data?._id, e.value).subscribe((res: any) => {
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
