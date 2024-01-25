import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../service/user.service';
import { AuthGuard } from '../../../service/authguard.service';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';
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
  VALIDATION_DONE: boolean = false;
  SUBSCRIPTION_PALN: any = []
  CouponData: any = {}
  @ViewChild('TermsofService_PANEL') TermsofService_PANEL: any;
  filterPlan: any = [];

  constructor(
    private userService: UserService,
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

          this.validator.buildForm({
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
                this.SubscriptionAmountSum(item);
              },
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
            PlanType: {
              type: "SelectOption",
              value: "",
              label: "Select Plan",
              items: DATA_SUBSCRIPTION_NAME,
              rules: {
                required: true,
              },
              divhide: true,
              callback: (Formitem: any) => {
                console.log(Formitem, "callback")
                // this.SubscriptionAmountSum(item);
                this.filterPlan = Data?.filter((item: any) => (item?.PlanName).toLowerCase() == (Formitem?.form?.value?.PlanType)?.toLowerCase())
                if (this.filterPlan?.length != 0) {
                  Formitem.field[5]['buttondisabled'] = false;
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
                } else {
                  Formitem.field[5]['buttondisabled'] = true;
                }
              },
            },
            DocumentsList: {
              type: "formGroup",
              label: "Features :",
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
                      const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                      if (item?.value == false) {
                        if (myForm.value[item?.OptionfieldIndex]["Transaction"] == true) {
                          myForm.value[item?.OptionfieldIndex]["Transaction"] = false;
                          myForm.controls[item?.OptionfieldIndex]?.controls["Transaction"]?.setValue(false);
                          myForm['touched'] = true;
                          myForm['status'] = 'VALID';
                        }
                      }
                      this.SubscriptionAmountSum(item);
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
                      this.SubscriptionAmountSum(item);
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
                      this.SubscriptionAmountSum(item);
                    },
                  }
                ]
              ]
            },
            DirectDispatch: {
              type: "yesnocheckbox",
              value: '',
              label: "You Have any Coupon Code?",
              rules: {
                required: true,
              },
              YesNo: '',
              YesButton: [
                { name: 'CouponCode', status: true },
                { name: 'PlanView', status: false }
              ],
              NoButton: [
                { name: 'CouponCode', status: false },
                { name: 'PlanView', status: true }
              ],
              callback: (value: any) => {
                console.log(value, "sdfsdfdfdsfd")
                if (value?.bool == true) {
                  value.field[5]['divhide'] = false;
                  value.field[2]['divhide'] = true;
                  value.field[6]['divhide'] = true;
                } else {
                  value.field[5]['divhide'] = true;
                  value.field[2]['divhide'] = false;
                  value.field[6]['divhide'] = false;
                }
              }
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
              placeholderText: 'Enter Coupon Code',
              ButtonText: "Verify",
              DivStyle: `display: flex !important;`,
              InputStyle: `border-radius: 20px 0px 0px 20px;`,
              buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
              buttondisabled: true,
              callback: (value: any) => {
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
                        value.field[7]['divhide'] = false;
                        value.field[8]['divhide'] = false;
                      } else {
                        this.toastr.success(res1?.msg);
                        this.VALIDATION_DONE = false;
                        value.field[7]['divhide'] = true;
                        value.field[8]['divhide'] = true;
                      }
                    })
                  } else {
                    this.VALIDATION_DONE = false;
                    value.field[7]['divhide'] = true;
                    value.field[8]['divhide'] = true;
                  }
                })
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
              divhide: true,
              Callback: (val: any) => {
                if (val?.form?.value?.Subscription != '' && val?.form?.value?.Subscription != undefined && val?.form?.value?.Subscription != null) {
                  if (val?.form?.value?.DocumentsList[0]?.DMS != '' || val?.form?.value?.DocumentsList[0]?.Teasury != '' || val?.form?.value?.DocumentsList[0]?.Transaction != '') {
                    this.OpenRazorPay(this.USER_LOGIN_DATA, this.SUM_AMOUNT, val);
                  } else {
                    this.toastr.error("Please select Documents List...")
                  }
                } else {
                  this.toastr.error("Please select Subscription...")
                }
                console.log(val, this.TermsofService_PANEL, "CallbackButton")
              }
            },
            Login_Limit: {
              type: "number",
              value: "",
              label: "Maximum No. of User :",
              rules: {
                required: true,
              },
              maxLength: 2,
              divhide: true
            },
            OTP: {
              type: "number",
              value: "",
              label: "Otp :",
              rules: {
                required: true,
              },
              maxLength: 6,
              divhide: true
            },
          }, '2_FACTOR_AUTH');
          console.log(res, "getSubscriptionPlan")
        })

      }
    })
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
      delete e?.value?.DirectDispatch;
      this.userService.SingUpVerify(e.value).subscribe((data: any) => {
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

  OpenRazorPay(data: any, Amount: any, FormValue: any) {
    this.userService.getEamilByIdUserMember(data?.emailId).then((res: any) => {
      console.log(res, "CheckUserExit")
      let USER_DATA: any = res[0]?.Userdata[0]
      if (USER_DATA?.length != 0) {
        let last_Order_Id_Status_False = USER_DATA?.order_id;
        let last_Order_Id_Status_TRUE = USER_DATA?.order_id;
        console.log(last_Order_Id_Status_False, last_Order_Id_Status_TRUE, "status")
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
                            FormValue.field[7]['divhide'] = false;
                            FormValue.field[8]['divhide'] = false;
                            console.log(res, "UpdateUserPaymentDetails")
                          }).catch((err) => {
                            this.VALIDATION_DONE = false;
                            FormValue.field[7]['divhide'] = true;
                            FormValue.field[8]['divhide'] = true;
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
                            FormValue.field[7]['divhide'] = false;
                            FormValue.field[8]['divhide'] = false;
                            console.log(res, "UpdateUserPaymentDetails")
                          }).catch((err) => {
                            this.VALIDATION_DONE = false;
                            FormValue.field[7]['divhide'] = true;
                            FormValue.field[8]['divhide'] = true;
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
                console.log(e, 'dismissed')
              }
            },
            redirect: true, // this redirects to the bank page from my website without opening a new window
            handler: (response: any) => {
              console.log(response,this.userService.checkUserExpired(), "exitresponse")
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
                      FormValue.field[7]['divhide'] = false;
                      FormValue.field[8]['divhide'] = false;
                      console.log(res, "UpdateUserPaymentDetails")
                    }).catch((err) => {
                      this.VALIDATION_DONE = false;
                      FormValue.field[7]['divhide'] = true;
                      FormValue.field[8]['divhide'] = true;
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
                      FormValue.field[7]['divhide'] = false;
                      FormValue.field[8]['divhide'] = false;
                      console.log(res, "UpdateUserPaymentDetails")
                    }).catch((err) => {
                      this.VALIDATION_DONE = false;
                      FormValue.field[7]['divhide'] = true;
                      FormValue.field[8]['divhide'] = true;
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
        } else if (last_Order_Id_Status_TRUE?.status == true) {
          this.toastr.success("Your Subscription already done");
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
