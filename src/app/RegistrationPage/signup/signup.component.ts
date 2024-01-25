import { UserService } from '../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';
import { AppConfig } from '../../../environments/environment';
import moment from 'moment';

@Component({
  selector: 'user-registration-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  password = 'password';
  password1 = 'password';
  CURREENT_DATE: any = moment(new Date()).format('DD-MM-YYYY')
  show = false;
  show1 = false;
  isDisabled: boolean = false;
  isVisible: boolean = false;
  submitted = false;
  registerForm: FormGroup;
  closeResult: string;
  checked: boolean = false;
  API_URL: any = AppConfig?.environment;
  VALIDATION_DONE: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    public validator: UploadServiceValidatorService,
    private router: Router, private toastr: ToastrService, private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.password = 'password';
    this.setTextAnimation(0.1, 6, 2, 'ease', '#ffffff', true);
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.validator.buildForm({
      companyName: {
        type: "text",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        InputStyle: {
          'border-radius': '30px',
          'padding': '20px'
        },
        placeholderText: 'Your Company Name'
      },
      fullName: {
        type: "text",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        InputStyle: {
          'border-radius': '30px',
          'padding': '20px'
        },
        placeholderText: 'Your Full Name'
      },
      email: {
        type: "EmailButton",
        InputType: "text",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        placeholderText: 'Your Email Id',
        ButtonText: "Get OTP",
        DivStyle: `display: flex !important;`,
        InputStyle: `border-radius: 20px 0px 0px 20px;`,
        buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
        buttondisabled: false,
        KeyPressCallBack: (value: any) => {
        },
        callback: (value: any) => {
          if (value?.form?.controls?.fullName?.errors == null || value?.form?.controls?.fullName?.errors == undefined) {
            if (value?.form?.controls?.email?.errors == null || value?.form?.controls?.email?.errors == undefined) {
              this.userService?.getEamilByIdUserMember(value?.form?.value?.email).then((emailvalidation: any) => {
                if (emailvalidation?.length == 0) {
                  this.userService.CreateUser({
                    email: value?.form?.value?.email,
                    fullName: value?.form?.value?.fullName,
                    companyName: value?.form?.value?.companyName,
                    role: 'manager',
                    verified: 'no'
                  }).subscribe((data: any) => {
                    this.toastr.success('Registered Successfully!');
                    this.userService.SendOTPEmail(data?.result?.emailId).subscribe((sendres: any) => {
                      console.log(sendres, "SendOTPEmail")
                      this.toastr.success('OTP Send your registared email id!');
                      value.field[3]['divhide'] = false;
                    })
                    console.log(data, "hfhgfhfhfhfhff")
                  })

                } else {
                  if (emailvalidation[0]?.Userdata[0]?.emailIdOTPVerified == false || emailvalidation[0]?.Userdata[0]?.MobileOTPVerified == false) {
                    this.userService.SendOTPEmail(value?.form?.value?.email).subscribe((sendres: any) => {
                      console.log(sendres, "SendOTPEmail")
                      this.toastr.success('OTP Send your registared email id!');
                      value.field[3]['divhide'] = false;
                    })
                  } else {
                    this.toastr.success('Already email id registared!');
                    this.router.navigate(['/login'], { queryParams: { registered: true } });
                  }
                }
                console.log(emailvalidation, value, "emailvalidation")
              })
            } else {
              value.field[2]['divhide'] = false;
              this.toastr.error('Email id not valid...');
            }
          } else {
            value.field[2]['divhide'] = false;
            this.toastr.error('Please entered full name...');
          }
        }
      },
      EmailOTP: {
        type: "InputButton",
        InputType: "number",
        value: "",
        label: "",
        showhide: false,
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Enter 6 digit OTP',
        ButtonText: "Verify",
        DivStyle: `display: flex !important;`,
        InputStyle: `border-radius: 20px 0px 0px 20px;`,
        buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
        buttondisabled: false,
        callback: (value: any) => {
          this.userService?.getEamilByIdUserMember(value?.form?.value?.email).then((emailvalidation: any) => {
            if (emailvalidation?.length != 0) {
              if (emailvalidation[0]?.Userdata[0]?.emailIdOTP == value?.form?.value?.EmailOTP) {
                this.userService.updateregister(emailvalidation[0]?.Userdata[0]?._id, {
                  emailIdOTPVerified: true,
                  emailIdVerified: true
                }).subscribe(data => {
                  value.field[4]['divhide'] = false;
                })
              } else {
                value.field[4]['divhide'] = true;
                this.toastr.error("Email OTP not matched...")
              }
            }
          })
        }
      },
      mobileNo: {
        type: "NumberButton",
        InputType: "number",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Enter your mobile no.',
        ButtonText: "Get OTP",
        DivStyle: `display: flex !important;`,
        InputStyle: `border-radius: 20px 0px 0px 20px;`,
        buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
        buttondisabled: false,
        callback: (value) => {
          if (value?.form?.controls?.mobileNo?.errors == null || value?.form?.controls?.mobileNo?.errors == undefined) {
            this.userService?.getEamilByIdUserMember(value?.form?.value?.email).then((emailvalidation: any) => {
              this.userService.updateregister(emailvalidation[0]?.Userdata[0]?._id, {
                mobileNo: value?.form?.value?.mobileNo,
              }).subscribe(data => {
                console.log(data,"updateregister")
                this.userService.SendMobileOTP(value?.form?.value?.email).subscribe((otpdata:any) => {
                  console.log(data,"mobileNo")
                  if (otpdata?.status==true) {
                    value.field[5]['divhide'] = false;
                    this.toastr.success(otpdata?.message)
                  }else{
                    this.toastr.success(otpdata?.message)
                  }
                })
              })
              console.log(emailvalidation, value, "emailvalidation")
            })
          } else {
            value.field[5]['divhide'] = true;
            this.toastr.error('mobile no. id not valid...');
          }
        }
      },
      MobileOTP: {
        type: "InputButton",
        value: "",
        label: "",
        showhide: false,
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Enter 6 digit OTP',
        ButtonText: "Verify",
        DivStyle: `display: flex !important;`,
        InputStyle: `border-radius: 20px 0px 0px 20px;`,
        buttonStyle: `border-radius: 0px 20px 20px 0px;background-color: transparent;color: black;`,
        buttondisabled: false,
        callback: (value: any) => {
          this.userService?.getEamilByIdUserMember(value?.form?.value?.email).then((emailvalidation: any) => {
            if (emailvalidation?.length != 0) {
              if (emailvalidation[0]?.Userdata[0]?.phoneOTP == value?.form?.value?.MobileOTP) {
                this.userService.updateregister(emailvalidation[0]?.Userdata[0]?._id, {
                  MobileOTPVerified: true,
                }).subscribe(data => {
                  value.field[6]['divhide'] = false;
                  value.field[7]['divhide'] = false;
                  value.field[8]['divhide'] = false;
                  this.VALIDATION_DONE = true;
                  value?.form?.controls?.email?.disable();
                  value?.form?.controls?.EmailOTP?.disable();
                  value?.form?.controls?.phone?.disable();
                  value?.form?.controls?.MobileOTP?.disable();

                  value.field[2]['buttondisabled'] = true;
                  value.field[3]['buttondisabled'] = true;
                  value.field[4]['buttondisabled'] = true;
                  value.field[5]['buttondisabled'] = true;
                })
              } else {
                value.field[6]['divhide'] = true;
                value.field[7]['divhide'] = true;
                value.field[8]['divhide'] = true;
                this.VALIDATION_DONE = false;

                value.field[2]['buttondisabled'] = false;
                value.field[3]['buttondisabled'] = false;
                value.field[4]['buttondisabled'] = false;
                value.field[5]['buttondisabled'] = false;
                value?.form?.controls?.email?.enable();
                value?.form?.controls?.EmailOTP?.enable();
                value?.form?.controls?.phone?.enable();
                value?.form?.controls?.MobileOTP?.enable();
                this.toastr.error("Mobile OTP not matched...")
              }
            }
          })
        }
      },
      password: {
        type: "password",
        value: "",
        label: "",
        showhide: false,
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Your Password'
      },
      confirmPassword: {
        type: "password",
        typeOf: 'confirmPassword',
        value: "",
        label: "",
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Confirm Your Password'
      },
      termsAndCondition: {
        type: "checkbox",
        value: false,
        label: "Terms And Condition",
        rules: {
          required: true,
        },
        divhide: true,
        placeholderText: 'Terms And Condition'
      },
    }, 'UserRegistration');
  }

  get f() { return this.registerForm.controls; }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
    console.log(this.show, "hi------");
    console.log(this.show1, "hiiii1----");
  }
  onClick1() {
    if (this.password1 === 'password') {
      this.password1 = 'text';
      this.show1 = true;
    } else {
      this.password1 = 'password';
      this.show1 = false;
    }
  }

  onSubmit(e: any) {
    console.log(e)
    if (e?.termsAndCondition == true) {
      this.userService?.getEamilByIdUserMember(e.email).then((emailvalidation: any) => {
        if (emailvalidation.length != 0) {
          this.userService.lastsignup(emailvalidation[0]?.Userdata[0]?._id, {
            password: e?.password,
            confirmPassword: e?.confirmPassword,
            termsAndCondition: e?.termsAndCondition,
            fullName: emailvalidation[0]?.Userdata[0]?.fullName
          }).subscribe((resdata) => {
            this.toastr.success('Registered Successfully!');
            this.userService.login({
              email: e.email,
              password: e.password,
            }).subscribe((data) => {
              this.userService.addLoginData(data);
              this.userService.addToken(data['result'].token);
              this.router.navigate(['/2FA'])
            });
            this.router.navigate(['/login'], { queryParams: { registered: true } });
          });
        } else {
          this.isDisabled = false;
          this.toastr?.error('This email id already exit please used different email id.');
        }
      });
    } else {
      this.toastr?.error('You Need To Agree For Terms And Condition');
    }
  }

  onLogin() {
    this.isVisible = true;
    this.router.navigate(['/login']);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onCheck(event) {
    console.log(this.checked, " not loged")
    this.checked = !this.checked
    console.log(this.checked, "loged")
  }

  dump(panel: any) {
    panel?.onClickButton
    console.log(panel, 'sdfsdsdfdf')
  }

  setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }

}
