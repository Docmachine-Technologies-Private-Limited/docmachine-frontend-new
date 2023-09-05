import { Component, OnInit } from '@angular/core';
import { UploadServiceValidatorService } from '../../../components/Upload/service/upload-service-validator.service';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../service/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contactus-technical',
  templateUrl: './contactus-technical.component.html',
  styleUrls: ['./contactus-technical.component.scss']
})
export class ContactusTechnicalComponent implements OnInit {

  constructor(
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService,
    public router: Router,
    public docservice: DocumentService) {
  }

  ngOnInit(): void {
    this.validator.buildForm({
      Name: {
        type: "text",
        value: "",
        label: "Your Name",
        rules: {
          required: true,
        },
      },
      EmailId: {
        type: "text",
        value: "",
        label: "Your Email Id",
        rules: {
          required: true,
        },
      },
      Message: {
        type: "textarea",
        value: "",
        label: "Message",
        maxLength: 1000,
        rules: {
          required: true,
        },
        style: {
          height: "220px !important"
        }
      }
    }, 'ContactUsTechnical');
  }
  onChangesContactUsTechnical(value: any) {
    if (value?.status == "VALID") {
      value.value.Type = "Technical";
      this.docservice.sendContactMessage(value?.value).subscribe((res: any) => {
        this.router.navigate(['/home/dashboardTask'])
        this.toastr.success(res?.message)
      }, (error) => {
        console.log(error, "sendContactMessage")
        this.toastr.error(error?.error?.error?.message);
      });
    }
    console.log(value, "onChangesContactUsTechnical")
  }
}
