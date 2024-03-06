
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../service/document.service';
import { UploadServiceValidatorService } from '../components/Upload/service/upload-service-validator.service';
import { LEIRecordsService } from '../service/LEIRecord/leirecords.service';
@Component({
  selector: 'app-create-team1',
  templateUrl: './create-team1.component.html',
  styleUrls: ['./create-team1.component.scss']
})
export class CreateTeam1Component implements OnInit {
  Visible: boolean = false;
  LEI_YES_NO: boolean = false;
  LEI_VALIDATION: any = {
    message: '',
    status: '',
    visible: ''
  }
  LEI_DATA: any = [];
  IMAGE_SHOW: any = '';

  constructor(@Inject(PLATFORM_ID) public platformId,
    public userService: UserService,
    private router: Router,
    public docservice: DocumentService,
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService,
    public leiRecords: LEIRecordsService) {
  }

  async ngOnInit() {
    this.validator.BANK_NAME_LIST_GLOABL = await this.docservice.getBankNameList();
    console.log(this.validator.BANK_NAME_LIST_GLOABL, this.userService.UserData, 'BANK_NAME_LIST')
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
  ValidateLEI(value: any) {
    if (value != '' && value != undefined && value != null) {
      this.leiRecords.getRecordsLEI(value).subscribe((res: any) => {
        console.log(res, "getRecordsLEI")
        this.LEI_DATA = res?.data[0]?.attributes;
        this.LEI_VALIDATION['message'] = '';
        this.LEI_VALIDATION['status'] = '';
        if (res?.data?.length != 0) {
          this.LEI_VALIDATION['visible'] = "true";
          this.IMAGE_SHOW = 'true';
          setTimeout(() => {
            this.IMAGE_SHOW = '';
            this.LEI_VALIDATION['message'] = 'Entity Name : ' + res?.data[0]?.attributes?.entity?.legalName?.name;
            this.LEI_VALIDATION['status'] = "true";
          }, 2000);
        } else {
          this.IMAGE_SHOW = 'false';
          this.LEI_VALIDATION['visible'] = "false";
          setTimeout(() => {
            this.IMAGE_SHOW = '';
            this.LEI_DATA = [];
            this.LEI_VALIDATION['message'] = "";
            this.LEI_VALIDATION['status'] = "false";
          }, 2000);
        }
      })
    } else {
      this.LEI_VALIDATION['status'] = "";
      this.toastr.error('Please type your LEI No.');
    }
  }

  loadForm() {
    setTimeout(() => {
      let Address: any = this.LEI_DATA?.entity?.legalAddress?.addressLines?.join(',') + ' ' + this.LEI_DATA?.entity?.legalAddress?.city + ' ' + this.LEI_DATA?.entity?.legalAddress?.country;
      if ((this.userService.UserData?.Teasury == true || this.userService.UserData?.DMS == true) && this.userService.UserData?.Transaction == false) {
        this.validator.buildForm({
          teamName: {
            type: "text",
            value: this.LEI_DATA?.entity?.legalName?.name != undefined ? this.LEI_DATA?.entity?.legalName?.name : this.userService.UserData?.companyName,
            label: "Company Name",
            rules: {
              required: true,
            }
          },
          adress: {
            type: "text",
            value: Address?.indexOf('undefined') == -1 ? Address : '',
            label: "Company Address",
            rules: {
              required: true,
            },
            maxLength: 1000,
          },
          iec: {
            type: "text",
            value: "",
            label: "Importer Exporter code (IEC)",
            rules: {
              required: true,
            }
          },
          phone: {
            type: "text",
            value: this.userService.UserData?.mobileNo,
            label: "Contact Phone number",
            rules: {
              required: true,
            }
          },
          AdCode: {
            type: "formGroup",
            label: "AD Code",
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
                  label: "AD Code",
                  name: 'AdCode',
                  rules: {
                    required: false,
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
                  label: "Bank Name",
                  name: 'bank',
                  rules: {
                    required: true,
                  },
                }
              ]
            ]
          }
        }, 'SetupCompanyDetails');
      } else if (this.userService.UserData?.Transaction == true) {
        this.validator.buildForm({
          teamName: {
            type: "text",
            value: this.LEI_DATA?.entity?.legalName?.name != undefined ? this.LEI_DATA?.entity?.legalName?.name : this.userService.UserData?.companyName,
            label: "Company Name",
            rules: {
              required: true,
            }
          },
          adress: {
            type: "text",
            value: Address?.indexOf('undefined') == -1 ? Address : '',
            label: "Company Address",
            rules: {
              required: true,
            },
            maxLength: 1000,
          },
          iec: {
            type: "text",
            value: "",
            label: "Importer Exporter code (IEC)",
            rules: {
              required: true,
            }
          },
          phone: {
            type: "text",
            value: this.userService.UserData?.mobileNo,
            label: "Contact Phone number",
            rules: {
              required: true,
            }
          },
          gst: {
            type: "text",
            value: "",
            label: "GSTIN",
            rules: {
              required: true,
            }
          },
          AdCode: {
            type: "formGroup",
            label: "AD Code",
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
                  label: "AD Code",
                  name: 'AdCode',
                  rules: {
                    required: true,
                  },
                },
              ]
            ]
          },
          caEmail: {
            type: "text",
            value: "",
            label: "CA email id",
            rules: {
              required: false,
            }
          },
          chaEmail: {
            type: "text",
            value: "",
            label: "CHA email id",
            rules: {
              required: false,
            }
          },
          location: {
            type: "formGroup",
            label: "Branch List",
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
                  label: "Add Location",
                  name: 'loc',
                  rules: {
                    required: false,
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
                  label: "Add Commodity",
                  name: 'como',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "HSCODE",
                  value: "",
                  label: "Select HS Code",
                  name: "HSCODE",
                  rules: {
                    required: true,
                  }
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
                  label: "Bank Name",
                  name: 'bank',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "text",
                  value: "",
                  label: "Bank Swift Code",
                  name: 'SwiftCode',
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "text",
                  value: "",
                  label: "Bank Address",
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
            ],

          }
        }, 'SetupCompanyDetails');
      }
    }, 200);
  }
}
