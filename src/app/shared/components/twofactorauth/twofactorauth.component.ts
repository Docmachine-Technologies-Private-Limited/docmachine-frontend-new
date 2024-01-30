import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../service/user.service';
import { AuthGuard } from '../../../service/authguard.service';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';
import { FormControllerService } from '../../../components/form-controller/form/form.service';
declare var Razorpay: any;

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
  LIST_ROLE2 = {
    1: 'Without maker/checker',
    2: 'Maker and Approver',
    3: 'Maker/checker/Approver'
  }
  VALIDATION_DONE: boolean = false;
  SUBSCRIPTION_PALN: any = []
  CouponData: any = {}
  @ViewChild('TermsofService_PANEL') TermsofService_PANEL: any;
  filterPlan: any = [];
  TEXT: string = ''

  FORM_CREATE_LIST: any = [];
  FORM_LIST: any = {}
  PLAN_BUTTON: boolean = true;

  constructor(
    private userService: UserService,
    public authGuard: AuthGuard,
    public documentService: DocumentService,
    public validator: UploadServiceValidatorService,
    public forservice: FormControllerService,
    private router: Router, private toastr: ToastrService) {
    this.userService.loginData.subscribe((data) => {
      if (data['result']['dataURL']) {
        this.tfa = data['result']
      }
    })
    let SubscriptionType: any = [];
    let PlanType: any = [];
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
          }, '2_FACTOR_AUTH').then((res) => {
            this.VALIDATION_DONE = true
          });
        })
      } else {
        this.documentService?.getBharatheximSubscriptionPlan().subscribe((res: any) => {
          let Data = res?.data;
          var DATA_SUBSCRIPTION_NAME: any = [];
          if (Data?.length != 0) {
            Data?.forEach(element => {
              if (!DATA_SUBSCRIPTION_NAME?.includes(element?.PlanName)) {
                DATA_SUBSCRIPTION_NAME.push(element?.PlanName)
              }
            });
          }
          this.FORM_LIST = {
            personalDetails: {
              companyName: {
                type: "LabelShow",
                value: this.USER_LOGIN_DATA?.companyName,
                label: "Company Name",
                rules: {
                  required: true,
                },
                Inputdisabled: true,
                placeholderText: 'Your Company Name'
              },
              fullName: {
                type: "LabelShow",
                value: this.USER_LOGIN_DATA?.fullName,
                label: "User Name",
                rules: {
                  required: true,
                },
                Inputdisabled: true,
                placeholderText: 'User Full Name'
              },
              email: {
                type: "LabelShow",
                InputType: "text",
                value: this.USER_LOGIN_DATA?.emailId,
                label: "Email Id",
                rules: {
                  required: true,
                },
                Inputdisabled: true,
                placeholderText: 'Your Email Id',
              },
              mobileNo: {
                type: "LabelShow",
                value: this.USER_LOGIN_DATA?.mobileNo,
                label: "Mobile No.",
                rules: {
                  required: true,
                },
                Inputdisabled: true,
                placeholderText: 'Enter your mobile no.',
              },
            },
            plandeatils: {
              DirectDispatch: {
                type: "yesnocheckbox",
                value: '',
                label: "Do you have coupon code?",
                rules: {
                  required: true,
                },
                YesNo: '',
                divdisabled:false,
                YesButton: [
                  { name: 'CouponCode', status: true },
                  { name: 'PlanView', status: false }
                ],
                NoButton: [
                  { name: 'CouponCode', status: false },
                  { name: 'PlanView', status: true }
                ],
                callback: (value: any) => {
                  console.log(value, "callback")
                  this.CouponData = {}
                  value?.form?.reset();
                  value?.form?.controls?.DirectDispatch?.setValue({ bool: value?.bool });
                  this.SUM_AMOUNT = 0;
                  if (value?.bool == true) {
                    value.field[1]['divhide'] = true;
                    value.field[2]['divhide'] = false;
                    value.field[3]['divhide'] = false;
                    value.field[4]['divhide'] = false;
                    value.field[5]['divhide'] = true;
                    value.field[1]['disabled'] = true;
                    this.SUBSCRIPTION_PALN = {
                      both: {
                        DMS: 0,
                        ForwardContractManagement: 0,
                        TransactionDMS: 0,
                        DMS_Teasury: 0,
                        ALL: 0
                      },
                      Export: {
                        DMS: 0,
                        ForwardContractManagement: 0,
                        TransactionDMS: 0,
                        DMS_Teasury: 0,
                        ALL: 0
                      },
                      Import: {
                        DMS: 0,
                        ForwardContractManagement: 0,
                        TransactionDMS: 0,
                        DMS_Teasury: 0,
                        ALL: 0
                      }
                    };
                    value?.form?.controls?.PlanType?.disable();
                  } else {
                    value.field[1]['divhide'] = false;
                    value.field[2]['divhide'] = true;
                    value.field[3]['divhide'] = true;
                    value.field[4]['divhide'] = true;
                    value.field[5]['divhide'] = true;
                    value.field[1]['disabled'] = true;
                    value?.form?.controls?.PlanType?.enable();
                  }
                }
              },
              PlanType: {
                type: "SelectOption",
                value: "",
                label: "Select Plan",
                items: DATA_SUBSCRIPTION_NAME,
                rules: {
                  required: true,
                },
                disabled: false,
                divhide: true,
                callback: (Formitem: any) => {
                  console.log(Formitem, "callback")
                  this.filterPlan = Data?.filter((item: any) => (item?.PlanName).toLowerCase() == (Formitem?.form?.value?.PlanType)?.toLowerCase())
                  if (this.filterPlan?.length != 0) {
                    Formitem.field[4]['buttondisabled'] = false;
                    Formitem.field[2]['divhide'] = false;
                    this.SUBSCRIPTION_PALN = {
                      both: {
                        DMS: this.filterPlan[0]?.both?.DMS,
                        ForwardContractManagement: this.filterPlan[0]?.both?.ForwardContractManagement,
                        TransactionDMS: this.filterPlan[0]?.both?.TransactionDMS,
                        DMS_Teasury: this.filterPlan[0]?.both?.DMS_Teasury,
                        ALL: this.filterPlan[0]?.both?.ALL
                      },
                      Export: {
                        DMS: this.filterPlan[0]?.Export?.DMS,
                        ForwardContractManagement: this.filterPlan[0]?.Export?.ForwardContractManagement,
                        TransactionDMS: this.filterPlan[0]?.Export?.TransactionDMS,
                        DMS_Teasury: this.filterPlan[0]?.Export?.DMS_Teasury,
                        ALL: this.filterPlan[0]?.Export?.ALL
                      },
                      Import: {
                        DMS: this.filterPlan[0]?.Import?.DMS,
                        ForwardContractManagement: this.filterPlan[0]?.Import?.ForwardContractManagement,
                        TransactionDMS: this.filterPlan[0]?.Import?.TransactionDMS,
                        DMS_Teasury: this.filterPlan[0]?.Import?.DMS_Teasury,
                        ALL: this.filterPlan[0]?.Import?.ALL
                      }
                    };
                    Formitem.field[5]['divhide'] = true;
                    this.SUM_AMOUNT = 0;
                    Formitem?.form?.controls?.DocumentsList?.reset();
                  } else {
                    Formitem.field[4]['buttondisabled'] = true;
                  }
                },
              },
              Subscription: {
                type: "SelectOption",
                value: "",
                label: "Export/Import",
                items: SubscriptionType,
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  console.log(item, "callback")
                  if (item?.form?.value?.DirectDispatch?.bool == false) {
                    this.SubscriptionAmountSum(item);
                    item.field[5]['divhide'] = true;
                    this.SUM_AMOUNT = 0;
                    item?.form?.controls?.DocumentsList?.reset();
                  }
                  item.field[3]['divhide'] = false;
                  item?.form?.controls?.DocumentsList?.reset();
                },
                divhide: true,
              },
              DocumentsList: {
                type: "formGroup",
                label: "Features :",
                GroupLabel: [''],
                AddNewRequried: false,
                rules: {
                  required: true,
                },
                divhide: true,
                Style: `box-shadow: unset;padding: 0;`,
                formArray: [
                  [
                    {
                      type: "CheckboxMultiple",
                      value: "",
                      label: "",
                      name: 'DMS',
                      checkboxlabel: "DMS(Documents Management System)",
                      rules: {
                        required: false,
                      },
                      callback: (item: any) => {
                        console.log(item, "callback")
                        const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                        if (item?.value == false) {
                          if (myForm.value[item?.OptionfieldIndex]["Transaction"] == true) {
                            myForm.value[item?.OptionfieldIndex]["Transaction"] = null;
                            myForm.controls[item?.OptionfieldIndex]?.controls["Transaction"]?.setValue(null);
                            myForm['touched'] = true;
                            myForm['status'] = 'VALID';
                          }
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        } else {
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        }
                        if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == false) {
                          this.SubscriptionAmountSum(item);
                        }
                      },
                    },
                    {
                      type: "CheckboxMultiple",
                      value: false,
                      label: "",
                      checkboxlabel: "Forward Contract Management",
                      name: 'Teasury',
                      rules: {
                        required: false,
                      },
                      callback: (item: any) => {
                        if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == false) {
                          this.SubscriptionAmountSum(item);
                        }
                        if (item?.value == false) {
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        } else {
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        }
                        console.log(item, "callback")
                      },
                    },
                    {
                      type: "CheckboxMultiple",
                      value: "",
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
                        if (item?.value == false) {
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        } else {
                          if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == true) {
                            item.field[5]['divhide'] = true;
                          } else {
                            item.field[5]['divhide'] = false;
                          }
                        }
                        if (item?.dynamicFormGroup?.value?.DirectDispatch?.bool == false) {
                          this.SubscriptionAmountSum(item);
                        }
                      },
                    }
                  ]
                ]
              },
              CouponCode: {
                type: "InputButton",
                InputType: "text",
                value: "",
                label: "",
                showhide: false,
                rules: {
                  required: true,
                },
                divhide: true,
                minLength: 15,
                maxLength: 15,
                placeholderText: 'Enter Coupon Code',
                ButtonText: "Verify",
                DivStyle: `display: flex !important;`,
                InputStyle: `border-radius: 20px 0px 0px 20px;`,
                buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
                buttondisabled: true,
                callback: (value: any) => {
                  if (value?.form?.getRawValue()?.Subscription != '' && value?.form?.getRawValue()?.Subscription != undefined && value?.form?.getRawValue()?.Subscription != null) {
                    if (value?.form?.getRawValue()?.DocumentsList[0]?.DMS != '' || value?.form?.getRawValue()?.DocumentsList[0]?.Teasury != '' || value?.form?.getRawValue()?.DocumentsList[0]?.Transaction != '') {
                      if (value?.form?.getRawValue()?.DocumentsList[0]?.DMS != null || value?.form?.getRawValue()?.DocumentsList[0]?.Teasury != null || value?.form?.getRawValue()?.DocumentsList[0]?.Transaction != null) {
                        this.userService.BharatheximCouponValidation(value?.form?.value?.CouponCode).subscribe((res: any) => {
                          console.log(value, "hjhfhfhgfhf")
                          this.CouponData = res;
                          if (res?.status == true) {
                            this.userService.updateregister(this.USER_LOGIN_DATA?._id, {
                              DeviceInfoRegistartion: this.userService.getDeviceInfo(),
                              CouponVerified: true, FreeTrailPeroid: true, FreeTrailPeroidStratDate: moment().format('dddd, MMMM DD, YYYY h:mm A'),
                              FreeTrailPeroidEndDate: moment(this.addDays(new Date(), this.CouponData?.data[0]?.TrailDays)).format('dddd, MMMM DD, YYYY h:mm A')
                            }).subscribe((res1: any) => {
                              console.log(res1, 'hfhffgffg')
                              if (res1?.success) {
                                this.VALIDATION_DONE = true;
                                this.PLAN_BUTTON = false;
                                this.loadTitle();
                              } else {
                                this.toastr.success(res1?.msg);
                                this.VALIDATION_DONE = false;
                                this.PLAN_BUTTON = true;
                                this.loadTitle();
                                value?.form?.controls.CouponCode?.setErrors({ matched: "Coupon code expired.." })
                              }
                            })
                          } else {
                            this.VALIDATION_DONE = false;
                            this.PLAN_BUTTON = true;
                            if (res?.notfound == true) {
                              value?.form?.controls.CouponCode?.setErrors({ matched: "Coupon code not valid.." })
                            } else {
                              value?.form?.controls.CouponCode?.setErrors({ matched: "Coupon code expired.." })
                            }
                            this.loadTitle();
                          }
                        })
                      } else {
                        this.toastr.error("Please select Documents List...")
                      }
                    } else {
                      this.toastr.error("Please select Documents List...")
                    }
                  } else {
                    this.toastr.error("Please select Subscription...")
                  }

                }
              },
              PlanView: {
                type: "CallbackButton",
                value: "",
                label: "",
                text: "Subscribe",
                rules: {
                  required: true,
                },
                ButtonStyle: 'margin-top: 0px;',
                divhide: true,
                divdisabled: false,
                Callback: (val: any) => {
                  this.PLAN_BUTTON = true;
                  if (val?.form?.getRawValue()?.PlanType != '' && val?.form?.getRawValue()?.PlanType != undefined && val?.form?.getRawValue()?.PlanType != null) {
                    if (val?.form?.getRawValue()?.Subscription != '' && val?.form?.getRawValue()?.Subscription != undefined && val?.form?.getRawValue()?.Subscription != null) {
                      if (val?.form?.getRawValue()?.DocumentsList[0]?.DMS != '' || val?.form?.getRawValue()?.DocumentsList[0]?.Teasury != '' || val?.form?.getRawValue()?.DocumentsList[0]?.Transaction != '') {
                        if (val?.form?.getRawValue()?.DocumentsList[0]?.DMS != null || val?.form?.getRawValue()?.DocumentsList[0]?.Teasury != null || val?.form?.getRawValue()?.DocumentsList[0]?.Transaction != null) {
                          val.field[1]['disabled'] = true;
                          val.field[2]['disabled'] = true;
                          val.field[3]['disabled'] = true;
                          val.field[4]['disabled'] = true;
                          val.field[5]['disabled'] = true;
                          val?.form?.controls?.PlanType?.disable();
                          val?.form?.controls?.Subscription?.disable();
                          val?.form?.controls?.Role?.disable();
                          val?.form?.controls?.DirectDispatch?.disable();
                          val?.form?.controls?.DocumentsList?.disable();
                          this.OpenRazorPay(this.USER_LOGIN_DATA, this.SUM_AMOUNT, val);
                        } else {
                          this.toastr.error("Please select Features List...")
                        }
                      } else {
                        this.toastr.error("Please select Features List...")
                      }
                    } else {
                      this.toastr.error("Please select Subscription...")
                    }
                  } else {
                    this.toastr.error("Please select Plan...")
                  }
                  console.log(val, val?.form?.getRawValue(), this.TermsofService_PANEL, "CallbackButton")
                }
              },
            },
            twofactor: {
              ImageShow: {
                type: "ImageShow",
                value: "",
                label: this.TEXT,
                rules: {
                  required: true,
                },
                src: this.tfa?.dataURL
              },
              Role: {
                type: "SelectOption",
                value: "",
                label: "Role",
                items: RoleType,
                rules: {
                  required: true,
                },
              },
              Login_Limit: {
                type: "number",
                value: "",
                label: "Maximum No. of User :",
                rules: {
                  required: true,
                },
                maxLength: 2,
              },
              OTP: {
                type: "number",
                value: "",
                label: "Otp :",
                rules: {
                  required: true,
                },
                maxLength: 6,
              },
            }
          };
          this.FORM_CREATE_LIST = ['personalDetails', 'plandeatils', 'twofactor'];
          this.loadTitle()
          console.log(res, this.FORM_LIST, "getSubscriptionPlan")
        })
      }
    })
  }

  loadTitle() {
    this.forservice.TitleDesciption = [
      { Title: 'Personal info', description: '', condition: false },
      { Title: 'Select your plan', description: 'You have the option of monthly or yearly billing.', condition: this.PLAN_BUTTON },
      { Title: '2 Factor Authentication', description: 'Two-factor authentication is a form of MFA. Technically, it is in use any time two authentication factors are required to gain access to a system or service.', condition: false }
    ]
  }
  ngOnInit(): void {

  }

  SUM_AMOUNT: any = 0;
  SubscriptionAmountSum(data: any) {
    this.SUM_AMOUNT = 0
    const element = data?.form?.value?.DocumentsList[0];
    const ValueCompare = this.getSumKey(element);
    if (ValueCompare == "DMS") {
      this.SUM_AMOUNT = this.SUBSCRIPTION_PALN[data?.form?.value?.Subscription]?.DMS
    } else if (ValueCompare == "Teasury") {
      this.SUM_AMOUNT = this.SUBSCRIPTION_PALN[data?.form?.value?.Subscription]?.ForwardContractManagement
    } else if (ValueCompare == "DMS_Teasury") {
      this.SUM_AMOUNT = this.SUBSCRIPTION_PALN[data?.form?.value?.Subscription]?.DMS_Teasury
    } else if (ValueCompare == "DMS_Transaction") {
      this.SUM_AMOUNT = this.SUBSCRIPTION_PALN[data?.form?.value?.Subscription]?.TransactionDMS;
    } else if (ValueCompare == "DMS_Teasury_Transaction") {
      this.SUM_AMOUNT = this.SUBSCRIPTION_PALN[data?.form?.value?.Subscription]?.ALL
    } else {
      this.SUM_AMOUNT = 0;
    }
    console.log(data, element, ValueCompare, this.SUM_AMOUNT, this.SUBSCRIPTION_PALN, "SubscriptionAmountSum")
  }

  getSumKey(object: any) {
    let newobject: any = []
    for (const key in object) {
      if (object[key] == true) {
        newobject.push(key);
      }
    }
    return newobject?.join("_");
  }

  addDays(date: any, days: any) {
    var result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    console.log(result, date, days, "addDays")
    return result;
  }

  onSubmit(e: any, RawValue) {
    let ObjectAssign = Object.assign(RawValue?.twofactor, RawValue?.plandeatils)
    console.log(e, RawValue, ObjectAssign, "onSubmit")
    if (e.status = "VALID") {
      ObjectAssign?.DocumentsList?.forEach(element => {
        for (const key in element) {
          if (element[key] == null || element[key] == undefined || element[key] == "") {
            element[key] = false;
            ObjectAssign[key] = false;
          } else {
            ObjectAssign[key] = element[key]
          }
        }
      });
      if (this.USER_LOGIN_DATA['role'] == 'member') {
        ObjectAssign['RoleCheckbox'] = this.USER_LOGIN_DATA['RoleCheckbox'];
        ObjectAssign['Subscription'] = this.ADMIN_ACCESS['Subscription'];
        ObjectAssign['Teasury'] = this.ADMIN_ACCESS['Teasury'];
        ObjectAssign['Transaction'] = this.ADMIN_ACCESS['Transaction'];
        ObjectAssign['DMS'] = this.ADMIN_ACCESS['DMS'];
        ObjectAssign['companyName'] = this.ADMIN_ACCESS['companyName'];
        ObjectAssign['AdminRole'] = this.USER_LOGIN_DATA['role'];
      } else {
        if (this.last_Order_Id_Status_TRUE?.status == true) {
          ObjectAssign['RoleCheckbox'] = this.USER_LOGIN_DATA['RoleCheckbox'];
          ObjectAssign['Subscription'] = this.USER_LOGIN_DATA['Subscription'];
          ObjectAssign['Teasury'] = this.USER_LOGIN_DATA['Teasury'];
          ObjectAssign['Transaction'] = this.USER_LOGIN_DATA['Transaction'];
          ObjectAssign['DMS'] = this.USER_LOGIN_DATA['DMS'];
          ObjectAssign['Role'] = this.LIST_ROLE[this.USER_LOGIN_DATA['Role']];
        } else {
          ObjectAssign['Role'] = this.LIST_ROLE[ObjectAssign['Role']];
        }
      }
      this.userService.SingUpVerify(ObjectAssign).subscribe((data: any) => {
        if (data['status'] == 200) {
          this.toastr.success(data['message']);
          this.router.navigate(['/login'], { queryParams: { registered: true } });
          this.authGuard.setLocalStorage('SING_UP_OTP', true)
        } else {
          this.toastr.error(data['message']);
        }
      }, error => {
        this.toastr.error('something wrong, please check the details!');
        console.log("error", error)
      });
    }
  }

  dump2(panel: any) {
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

  dump(panel: any) {
    panel?.onClickButton
    console.log(panel, 'sdfsdsdfdf')
  }
  last_Order_Id_Status_TRUE: any = {}
  OpenRazorPay(data: any, Amount: any, FormValue: any) {
    this.userService.getEamilByIdUserMember(data?.emailId).then((res: any) => {
      console.log(res, "CheckUserExit")
      let USER_DATA: any = res[0]?.Userdata[0]
      if (USER_DATA?.length != 0) {
        let last_Order_Id_Status_False = USER_DATA?.order_id;
        this.last_Order_Id_Status_TRUE = USER_DATA?.order_id;
        console.log(last_Order_Id_Status_False, this.last_Order_Id_Status_TRUE, "status")
        if (last_Order_Id_Status_False?.status == undefined || last_Order_Id_Status_False?.PlanDetails?.TotalMonthDays != this.filterPlan?.TotalMonthDays) {
          this.userService.creareOrder({
            currency: "INR",
            amount: parseFloat(Amount) * 100,
            note: "Pay amount for Subscription",
            receipt: 'UserId_' + USER_DATA?._id
          }).then((order: any) => {
            console.log(order, "sfdsfdsfdsfdfd")
            if (order?.id != undefined && order?.id != null) {
              let InfoPaymentStatus = {
                id: order?.id,
                time: new Date(),
                status: false,
                PlanDetails: this.filterPlan
              }
              this.userService.updateregister(USER_DATA?._id, { order_id: InfoPaymentStatus, PlanDetails: this.filterPlan }).subscribe((updateres) => {
                console.log(updateres, "UpdateUserPaymentDetails")
                const RozarpayOptions = {
                  key: 'rzp_live_YDjE76c4yZAjIi',
                  image: 'https://www.bharathexim.com/images/logo-transparent.png',
                  prefill: {
                    name: USER_DATA?.firstName,
                    email: USER_DATA?.emailId,
                    phone: USER_DATA?.mobileNo
                  },
                  order_id: order?.id,
                  theme: {
                    color: '#6466e3'
                  },
                  modal: {
                    ondismiss: (e: any) => {
                      FormValue?.form?.controls?.PlanType?.enable();
                      FormValue?.form?.controls?.Subscription?.enable();
                      FormValue?.form?.controls?.Role?.enable();
                      FormValue?.form?.controls?.DirectDispatch?.enable();
                      FormValue?.form?.controls?.DocumentsList?.enable();
                      console.log(e, 'dismissed')
                    }
                  },
                  redirect: true, // this redirects to the bank page from my website without opening a new window
                  handler: (response: any) => {
                    console.log(response, this.userService.checkUserExpired(), "newresponse")
                    response['Date'] = new Date().toLocaleDateString();
                    this.userService.checkUserExpired().then((checkUserExpired) => {
                      InfoPaymentStatus['status'] = true;
                      this.userService.getRazorpayOrderById(order?.id).subscribe((RazorpayOrderById: any) => {
                        console.log(RazorpayOrderById, "RazorpayOrderById")
                        if (checkUserExpired == false) {
                          this.userService.UpdateUserPaymentDetails(response, {
                            FreeTrailPeroidStratDate: moment().format('dddd, MMMM DD, YYYY h:mm A'),
                            FreeTrailPeroidEndDate: moment(this.addMonth(new Date(), this.filterPlan[0]?.TotalMonthDays)).format('dddd, MMMM DD, YYYY h:mm A'),
                            order_id: InfoPaymentStatus,
                            order_status: RazorpayOrderById[0]
                          }).then((res) => {
                            this.toastr.success("Your Subscription added successfully...");
                            this.VALIDATION_DONE = true;
                            this.PLAN_BUTTON = false
                            FormValue?.form?.controls?.PlanView?.setValue("abbbb");
                            FormValue?.form?.controls?.CouponCode?.setValue("abbbb");
                            FormValue?.form?.controls?.PlanView?.disable();
                            FormValue.field[0]['divdisabled']=true;
                            FormValue.field[5]['divdisabled']=true;
                            this.loadTitle();
                            console.log(res, "UpdateUserPaymentDetails")
                          }).catch((err) => {
                            this.VALIDATION_DONE = false;
                            this.PLAN_BUTTON = true;
                            FormValue?.form?.controls?.PlanView?.setValue(null);
                            FormValue?.form?.controls?.CouponCode?.setValue(null);
                            FormValue.field[0]['divdisabled']=false;
                            FormValue.field[5]['divdisabled']=false;
                            this.loadTitle();
                          })
                        } else {
                          this.userService.UpdateUserPaymentDetails(response, {
                            FreeTrailPeroidStratDate: moment(new Date(res[0]?.FreeTrailPeroidEndDate)).format('dddd, MMMM DD, YYYY h:mm A'),
                            FreeTrailPeroidEndDate: moment(this.addMonth(new Date(res[0]?.FreeTrailPeroidEndDate), this.filterPlan[0]?.TotalMonthDays)).format('dddd, MMMM DD, YYYY h:mm A'),
                            order_id: InfoPaymentStatus,
                            order_status: RazorpayOrderById[0]
                          }).then((res) => {
                            this.toastr.success("Your Subscription added successfully...");
                            this.VALIDATION_DONE = true;
                            this.PLAN_BUTTON = false
                            FormValue?.form?.controls?.PlanView?.setValue("abbbb");
                            FormValue?.form?.controls?.CouponCode?.setValue("abbbb");
                            FormValue?.form?.controls?.PlanView?.disable();
                            FormValue.field[0]['divdisabled']=true;
                            FormValue.field[5]['divdisabled']=true;
                            this.loadTitle();
                            console.log(res, "UpdateUserPaymentDetails")
                          }).catch((err) => {
                            this.VALIDATION_DONE = false;
                            this.PLAN_BUTTON = true;
                            FormValue?.form?.controls?.PlanView?.setValue(null);
                            FormValue?.form?.controls?.CouponCode?.setValue(null);
                            FormValue.field[0]['divdisabled']=false;
                            FormValue.field[5]['divdisabled']=false;
                            this.loadTitle();
                          })
                        }
                      })
                    })
                  }
                }
                var rzp1 = new Razorpay(RozarpayOptions);
                console.log(rzp1, "fsdfdsfdsfdsfds")
                rzp1.on('payment.failed', (response: any) => {
                  console.log(response, "errorresponse")
                  response['Date'] = new Date().toLocaleDateString()
                  this.userService.UpdateUserPaymentDetails(response, {}).then((res) => {
                    console.log(res, "UpdateUserPaymentDetails")
                  })
                });
                rzp1.on("payment.order", (e: any) => {
                  console.log(e, "dfdfdsfdfdfds")
                });
                rzp1.open();
              })
            }
          })
        } else if (last_Order_Id_Status_False?.status == false) {
          const RozarpayOptions = {
            key: 'rzp_live_YDjE76c4yZAjIi',
            image: 'https://www.bharathexim.com/images/logo-transparent.png',
            prefill: {
              name: USER_DATA?.firstName,
              email: USER_DATA?.emailId,
              phone: USER_DATA?.mobileNo
            },
            order_id: last_Order_Id_Status_False?.id,
            theme: {
              color: '#6466e3'
            },
            modal: {
              ondismiss: (e: any) => {
                FormValue?.form?.controls?.PlanType?.enable();
                FormValue?.form?.controls?.Subscription?.enable();
                FormValue?.form?.controls?.Role?.enable();
                FormValue?.form?.controls?.DirectDispatch?.enable();
                FormValue?.form?.controls?.DocumentsList?.enable();
                console.log(e, 'dismissed')
              }
            },
            redirect: true, // this redirects to the bank page from my website without opening a new window
            handler: (response: any) => {
              console.log(response, this.userService.checkUserExpired(), "exitresponse")
              response['Date'] = new Date().toLocaleDateString();
              this.userService.checkUserExpired().then((checkUserExpired) => {
                let InfoPaymentStatus = USER_DATA?.order_id;
                InfoPaymentStatus['status'] = true;
                this.userService.getRazorpayOrderById(last_Order_Id_Status_False?.id).subscribe((RazorpayOrderById: any) => {
                  console.log(RazorpayOrderById, "RazorpayOrderById")
                  if (checkUserExpired == false) {
                    this.userService.UpdateUserPaymentDetails(response, {
                      FreeTrailPeroidStratDate: moment().format('dddd, MMMM DD, YYYY h:mm A'),
                      FreeTrailPeroidEndDate: moment(this.addMonth(new Date(), this.filterPlan[0]?.TotalMonthDays)).format('dddd, MMMM DD, YYYY h:mm A'),
                      order_id: InfoPaymentStatus,
                      order_status: RazorpayOrderById[0]
                    }).then((res) => {
                      this.toastr.success("Your Subscription added successfully...");
                      this.VALIDATION_DONE = true;
                      this.PLAN_BUTTON = false
                      FormValue?.form?.controls?.PlanView?.setValue("abbbb");
                      FormValue?.form?.controls?.CouponCode?.setValue("abbbb");
                      FormValue?.form?.controls?.PlanView?.disable();
                      FormValue.field[0]['divdisabled']=true;
                      FormValue.field[5]['divdisabled']=true;
                      this.loadTitle();
                      console.log(res, "UpdateUserPaymentDetails")
                    }).catch((err) => {
                      this.VALIDATION_DONE = false;
                      this.PLAN_BUTTON = true;
                      FormValue?.form?.controls?.PlanView?.setValue(null);
                      FormValue?.form?.controls?.CouponCode?.setValue(null);
                      FormValue.field[0]['divdisabled']=false;
                      FormValue.field[5]['divdisabled']=false;
                      this.loadTitle();
                    })
                  } else {
                    this.userService.UpdateUserPaymentDetails(response, {
                      FreeTrailPeroidStratDate: moment(new Date(USER_DATA?.FreeTrailPeroidEndDate)).format('dddd, MMMM DD, YYYY h:mm A'),
                      FreeTrailPeroidEndDate: moment(this.addMonth(new Date(USER_DATA?.FreeTrailPeroidEndDate), this.filterPlan[0]?.TotalMonthDays)).format('dddd, MMMM DD, YYYY h:mm A'),
                      order_id: InfoPaymentStatus,
                      order_status: RazorpayOrderById[0]
                    }).then((res) => {
                      this.toastr.success("Your Subscription added successfully...");
                      this.VALIDATION_DONE = true;
                      FormValue?.form?.controls?.PlanView?.setValue("abbbb");
                      FormValue?.form?.controls?.CouponCode?.setValue("abbbb");
                      FormValue?.form?.controls?.PlanView?.disable();
                      FormValue.field[0]['divdisabled']=true;
                      FormValue.field[5]['divdisabled']=true;
                      this.PLAN_BUTTON = false;
                      this.loadTitle();
                      console.log(res, "UpdateUserPaymentDetails")
                    }).catch((err) => {
                      this.VALIDATION_DONE = false;
                      this.PLAN_BUTTON = true
                      FormValue?.form?.controls?.PlanView?.setValue(null);
                      FormValue?.form?.controls?.CouponCode?.setValue(null);
                      FormValue.field[0]['divdisabled']=false;
                      FormValue.field[5]['divdisabled']=false;
                      this.loadTitle();
                    })
                  }
                })
              })
            }
          }
          var rzp1 = new Razorpay(RozarpayOptions);
          rzp1.on('payment.failed', (response: any) => {
            response['Date'] = new Date().toLocaleDateString()
            this.userService.UpdateUserPaymentDetails(response, {}).then((res) => {
              console.log(res, "UpdateUserPaymentDetails")
            })
          });
          rzp1.open();
        } else if (this.last_Order_Id_Status_TRUE?.status == true) {
          this.PLAN_BUTTON = false
          FormValue?.form?.controls?.PlanView?.disable();
          FormValue?.form?.controls?.CouponCode?.setValue("abbbb");
          FormValue.field[0]['divdisabled']=true;
          FormValue.field[5]['divdisabled']=true;
          FormValue?.form?.controls?.PlanType?.setValue(USER_DATA?.PlanDetails[0]?.PlanName);
          FormValue?.form?.controls?.Subscription?.setValue(USER_DATA?.Subscription);
          FormValue?.form?.controls?.Role?.setValue(this.LIST_ROLE2[USER_DATA?.Subscription]);
          FormValue?.form?.controls?.DocumentsList?.setValue([{
            DMS: USER_DATA?.DMS,
            Teasury: USER_DATA?.Teasury,
            Transaction: USER_DATA?.Transaction
          }]);
          this.toastr.success("Your Subscription already done");
          this.loadTitle();
        }
      }
    });
  }

  addMonth(date: any, days: any) {
    var result = new Date(date);
    if (days == "3") {
      result.setDate(result.getDate() + 90);
    } else if (days == "6") {
      result.setDate(result.getDate() + 180);
    } else if (days == "12") {
      result.setDate(result.getDate() + 365);
    }
    return result;
  }
}
