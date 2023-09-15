
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../service/document.service';
import { UploadServiceValidatorService } from '../components/Upload/service/upload-service-validator.service';
@Component({
  selector: 'app-create-team1',
  templateUrl: './create-team1.component.html',
  styleUrls: ['./create-team1.component.scss']
})
export class CreateTeam1Component implements OnInit {
  constructor(@Inject(PLATFORM_ID) public platformId,
    private userService: UserService,
    private router: Router,
    public docservice: DocumentService,
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.docservice.getBankNameList().then((res) => {
      this.validator.BANK_NAME_LIST_GLOABL = res
      setTimeout(() => {
        this.validator.buildForm({
          teamName: {
            type: "text",
            value: "",
            label: "Company name/ Team name",
            rules: {
              required: true,
            }
          },
          iec: {
            type: "text",
            value: "",
            label: "*Importer exporter code (IEC)",
            rules: {
              required: true,
            }
          },
          adress: {
            type: "text",
            value: "",
            label: "Company Address",
            rules: {
              required: true,
            }
          },
          phone: {
            type: "text",
            value: "",
            label: "Contact Phone number",
            rules: {
              required: true,
            }
          },
          AdCode: {
            type: "text",
            value: "",
            label: "Ad Code",
            rules: {
              required: true,
            }
          },
          caEmail: {
            type: "text",
            value: "",
            label: "CA email id",
            rules: {
              required: true,
            }
          },
          chaEmail: {
            type: "text",
            value: "",
            label: "CHA email id",
            rules: {
              required: true,
            }
          },
          gst: {
            type: "text",
            value: "",
            label: "*GSTIN",
            rules: {
              required: true,
            }
          },
          Location: {
            type: "formGroup",
            label: "Location List",
            GroupLabel: [''],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: [
              [
                {
                  type: "text",
                  value: "",
                  label: "Location",
                  name: 'loc',
                  rules: {
                    required: true,
                  },
                },
              ]
            ]
          },
          commodity: {
            type: "formGroup",
            label: "Commodity List",
            GroupLabel: [''],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: [
              [
                {
                  type: "text",
                  value: "",
                  label: "Commodity",
                  name: 'como',
                  rules: {
                    required: true,
                  },
                },
              ]
            ]
          },
          bankDetails: {
            type: "formGroup",
            label: "Bank Details",
            GroupLabel: [''],
            AddNewRequried: true,
            rules: {
              required: false,
            },
            formArray: [
              [
                {
                  type: "BankList",
                  value: "",
                  label: "*Bank Name",
                  name: 'bank',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "text",
                  value: "",
                  label: "Bank Bic Address",
                  name: 'bicAddress',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "text",
                  value: "",
                  label: "Bank Account Number",
                  name: 'accNumber',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "AccountType",
                  value: "",
                  label: "Bank Account Type",
                  name: 'accType',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "currency",
                  value: "",
                  label: "Bank Currency Type",
                  name: 'currency',
                  rules: {
                    required: true,
                  },
                },
              ]
            ]
          }
        }, 'SetupCompanyDetails');
      }, 200);
    });
    console.log(this.validator.BANK_NAME_LIST_GLOABL, 'BANK_NAME_LIST')
  }

  onSubmit(e: any) {
    let array1: any = []
    e.value.bankDetails.forEach((value, index) => {
      const newVal = { ...value };
      newVal['BankUniqueId'] = value?.bank?.BankUniqueId != undefined ? value?.bank?.BankUniqueId : value?.BankUniqueId;
      newVal['bank'] = value?.bank?.value != undefined ? value?.bank?.value : value?.bank;
      newVal['accType'] = value?.accType?.type != undefined ? value?.accType?.type : value?.accType;
      newVal['currency'] = value?.currency?.type != undefined ? value?.currency?.type : value?.currency;
      array1.push(newVal)
    });
    e.value.bankDetails = array1;
    this.userService.creatTeam(e.value).subscribe(data => {
      this.toastr.success('Company details uploaded successfully!');
      this.router.navigate(['/home/dashboardTask'])
    }, error => {
      this.toastr.error('something wrong, please check the details!');
      console.log("error")
    });
  }

}
