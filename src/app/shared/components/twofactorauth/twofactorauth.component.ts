import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../service/user.service';
import { AuthGuard } from '../../../service/authguard.service';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../../../components/Upload/service/upload-service-validator.service';

@Component({
  selector: 'app-twofactorauth',
  templateUrl: './twofactorauth.component.html',
  styleUrls: ['./twofactorauth.component.scss']
})
export class TwofactorauthComponent implements OnInit {
  public authcode: any;
  public tfa: any;
  RoleCheckbox_DATA: any = [];
  VIEWS_CHECKBOX_DATA: any = {
    '1': false,
    '2': false,
    '3': false,
  };
  USER_LOGIN_DATA: any = [];
  INPUT_FORM_VALUE_LIST_MANGER: any = {
    Subscription: '',
    Role: '',
    Login_Limit: '',
    OTP: '',
  };
  INPUT_FORM_VALUE_LIST_MEMBER: any = {
    OTP: ''
  };

  EXTRA_INPUT_FORM_VALUE_LIST_MANGER: any = {
    DMS: false,
    Teasury: false,
    Transaction: false,
  };

  ADMIN_ACCESS: any = []
  LIST_ROLE = {
    'Without maker/checker': 1,
    'Maker and Approver': 2,
    'Maker/checker/Approver': 3
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    public authGuard: AuthGuard,
    public documentService: DocumentService,
    public validator: UploadServiceValidatorService,
    private router: Router, private toastr: ToastrService) {
    this.userService.loginData.subscribe((data) => {
      if (data['result']['dataURL']) {
        this.tfa = data['result']
      }
    })
    let SubscriptionType: any = [];
    let RoleType: any = [];
    RoleType = ['Without maker/checker', 'Maker and Approver', 'Maker/checker/Approver']
    SubscriptionType = ['Export', 'Import', 'both']
    this.userService.getUserDetail().then((data: any) => {
      console.log(data, 'dsjfhsdfjdsfdfdsf');
      this.USER_LOGIN_DATA = data['result'];
      this.tfa = data['result']['otpDetails']
      if (this.USER_LOGIN_DATA['role'] == 'member') {
        this.documentService.filterAnyTable({
          role: "manager",
          companyId: this.USER_LOGIN_DATA?.companyId
        }, 'users').subscribe((res: any) => {
          this.ADMIN_ACCESS = res?.data[0];
          console.log(res, this.ADMIN_ACCESS, "filterAnyTable")
          this.validator.buildForm({
            OTP: {
              type: "number",
              value: "",
              label: "Otp :",
              rules: {
                required: true,
              },
              maxLength: 6
            },
          }, '2_FACTOR_AUTH');
        })
      } else {
        this.validator.buildForm({
          Subscription: {
            type: "SelectOption",
            value: "",
            label: "Subscription",
            items: SubscriptionType,
            rules: {
              required: true,
            }
          },
          Role: {
            type: "SelectOption",
            value: "",
            label: "Role",
            items: RoleType,
            rules: {
              required: true,
            }
          },
          DocumentsList: {
            type: "formGroup",
            label: "Documents List :",
            GroupLabel: [''],
            AddNewRequried: false,
            rules: {
              required: false,
            },
            Style: `
            box-shadow: unset;
            padding: 0;
            `,
            formArray: [
              [
                {
                  type: "CheckboxMultiple",
                  value: false,
                  label: "",
                  name: 'DMS',
                  checkboxlabel: "DMS(Documents Management System)",
                  rules: {
                    required: false,
                  },
                  callback: (item: any) => {
                    console.log(item, "callback")
                  },
                },
                {
                  type: "CheckboxMultiple",
                  value: false,
                  label: "",
                  checkboxlabel: "Teasury",
                  name: 'Teasury',
                  rules: {
                    required: false,
                  },
                  callback: (item: any) => {
                    console.log(item, "callback")
                  },
                },
                {
                  type: "CheckboxMultiple",
                  value: false,
                  label: "",
                  name: 'Transaction',
                  checkboxlabel: "Transaction",
                  rules: {
                    required: false,
                  },
                  callback: (item: any) => {
                    const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                    myForm.value[item?.OptionfieldIndex]["DMS"] = item?.value;
                    myForm.controls[item?.OptionfieldIndex]?.controls["DMS"]?.setValue(item?.value);
                    myForm['touched'] = true;
                    myForm['status'] = 'VALID';
                    console.log(item, "callback")
                  },
                }
              ]
            ]
          },
          Login_Limit: {
            type: "number",
            value: "",
            label: "Maximum No. of User :",
            rules: {
              required: true,
            },
            maxLength: 2
          },
          OTP: {
            type: "number",
            value: "",
            label: "Otp :",
            rules: {
              required: true,
            },
            maxLength: 6
          },
        }, '2_FACTOR_AUTH');
      }
    })
  }

  ngOnInit(): void {

  }

  onSubmit(e: any) {
    console.log(e, "onSubmit")
    if (e.status = "VALID") {
      e?.value?.DocumentsList?.forEach(element => {
        for (const key in element) {
          if (element[key] == null || element[key] == undefined || element[key] == "") {
            element[key] = false;
            e.value[key] = false;
          } else {
            e.value[key] = element[key]
          }
        }
      });
      if (this.USER_LOGIN_DATA['role'] == 'member') {
        e.value['RoleCheckbox'] = this.USER_LOGIN_DATA['RoleCheckbox'];
        e.value['Subscription'] = this.ADMIN_ACCESS['Subscription'];
        e.value['Teasury'] = this.ADMIN_ACCESS['Teasury'];
        e.value['Transaction'] = this.ADMIN_ACCESS['Transaction'];
        e.value['DMS'] = this.ADMIN_ACCESS['DMS'];
        e.value['companyName'] = this.ADMIN_ACCESS['companyName'];
        e.value['AdminRole'] = this.USER_LOGIN_DATA['role'];
      } else {
        e.value['Role'] = this.LIST_ROLE[e.value['Role']];
      }
      this.userService.SingUpVerify(e.value).subscribe(data => {
        if (data['status'] == 200) {
          this.toastr.success(data['message']);
          this.router.navigate(['/login'], { queryParams: { registered: true } });
          this.authGuard.setLocalStorage('SING_UP_OTP', true)
        } else {
          this.toastr.error(data['message']);
        }
      },
        error => {
          this.toastr.error('something wrong, please check the details!');
          console.log("error", error)
        });
    }
  }

  dump(panel: any) {
    panel?.onClickButton
    console.log(panel, 'sdfsdsdfdf')
  }

  confirm(inputformdata: any) {
    for (const key in this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER) {
      delete inputformdata[key];
    }
    if (this.USER_LOGIN_DATA['role'] == 'member') {
      inputformdata['RoleCheckbox'] = this.USER_LOGIN_DATA['RoleCheckbox'];
      inputformdata['Subscription'] = this.ADMIN_ACCESS['Subscription'];
      inputformdata['Teasury'] = this.ADMIN_ACCESS['Teasury'];
      inputformdata['Transaction'] = this.ADMIN_ACCESS['Transaction'];
      inputformdata['DMS'] = this.ADMIN_ACCESS['DMS'];
      inputformdata['companyName'] = this.ADMIN_ACCESS['companyName'];
      inputformdata['AdminRole'] = this.USER_LOGIN_DATA['role'];
    } else {
      for (const key in this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER) {
        inputformdata[key] = this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER[key]
      }
    }
    this.findEmptyObject(inputformdata, [undefined, null, '', 'Select Subscription', 'Select Role']).then((condition: any) => {
      if (condition == true) {
        console.log(condition, inputformdata, 'sfdfsdfdfdsfd')
        this.userService.SingUpVerify(inputformdata).subscribe(data => {
          if (data['status'] == 200) {
            this.toastr.success(data['message']);
            this.router.navigate(['/login'], { queryParams: { registered: true } });
            this.authGuard.setLocalStorage('SING_UP_OTP', true)
          } else {
            this.toastr.error(data['message']);
          }
        },
          error => {
            this.toastr.error('something wrong, please check the details!');
            console.log("error", error)
          });
      } else {
        for (const key in condition) {
          this.toastr.error(condition[key]);
        }
      }

    })

  }
  findEmptyObject(object: any, errorlist: any) {
    var temp: any = {};
    return new Promise((resolve, reject) => {
      var objectkeys = Object.keys(object);
      if (objectkeys.length == 0) {
        resolve([])
        return;
      }
      for (let index = 0; index < objectkeys.length; index++) {
        if (errorlist.includes(object[objectkeys[index]]) || object[objectkeys[index]] == '') {
          temp[objectkeys[index]] = objectkeys[index] + ' Please check input value is empty!';
        }
        if (objectkeys.length == (index + 1)) {
          if (Object.keys(temp).length != 0) {
            resolve(temp);
          } else {
            resolve(true);
          }
        }
      }
    });
  }
  truefalse(value) {
    if (value == '') {
      return true;
    } else {
      return false;
    }
  }
  ArraytoString(arr: any) {
    var temp: any = [];
    for (const key in arr) {
      temp.push(arr[key]);
    }
    return temp.toString();
  }
  changesRoleCheckbox(value: any) {
    console.log(value)
    this.RoleCheckbox_DATA = value
  }
  checkboxView(value: any) {
    for (const iterator in this.VIEWS_CHECKBOX_DATA) {
      this.VIEWS_CHECKBOX_DATA[iterator] = false;
    }
    this.VIEWS_CHECKBOX_DATA[value] = true;
  }
}
