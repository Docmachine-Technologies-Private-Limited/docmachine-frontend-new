import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentService } from '../service/document.service';
import { AuthGuard } from '../service/authguard.service';
import { AppConfig } from '../../environments/environment';
import { StorageEncryptionDecryptionService } from '../Storage/storage-encryption-decryption.service';
import { UploadServiceValidatorService } from '../components/Upload/service/upload-service-validator.service';
import { TallyAuthorizationService } from './tally-authorization.service';

@Component({
  selector: 'authorization-tally-intrgration',
  templateUrl: './authorization-tally-intrgration.component.html',
  styleUrls: ['./authorization-tally-intrgration.component.scss']
})
export class AuthorizationTallyIntrgrationComponent implements OnInit {
  password;
  show = false;
  loginForm: FormGroup;
  isDisabled: boolean = false;
  isVisible: boolean = false;
  submitted: boolean = false;
  otp: boolean;
  value: any;
  data1: any;
  data: any;
  closeResult: string;
  CODE: any = [];
  rolebaseddata: any = ['Buyer Credit Aggregator', 'Insurance', 'CA', 'Auditor']
  API_URL: any = AppConfig?.environment;

  constructor(
    private TallyAuthorizationService: TallyAuthorizationService,
    private router: Router, public authGuard: AuthGuard,
    public sessionstorage: StorageEncryptionDecryptionService,
    public validator: UploadServiceValidatorService,
    private toastr: ToastrService, private modalService: NgbModal) {
    sessionStorage.clear();
    localStorage.clear();
  }

  ngOnInit(): void {
    let token = this.authGuard.loadFromLocalStorage();
    console.log(token, 'tokenn....');
    this.password = 'password';
    this.setTextAnimation(0.1, 6, 2, 'ease', '#ffffff', true);
    this.validator.buildForm({
      email: {
        type: "email",
        value: "",
        label: "",
        rules: {
          required: true,
        },
      },
      password: {
        type: "password",
        value: "",
        label: "",
        showhide: false,
        rules: {
          required: true,
        },
      },
      otp: {
        type: "number",
        value: "",
        label: "",
        visible: false,
        rules: {
          required: false,
        },
        style: {
          'border-radius': '30px',
          'padding': '20px'
        }
      }
    }, 'UserLoginPage');
  }

  get f() {
    return this.loginForm.controls;
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  loginError(message: any) {
    this.toastr.error(message);
    this.isDisabled = false;
  }

  onSubmit(e: any) {
    console.log(e, 'sdfksdfhsdkfjshskdfsdfsdfds')
    this.value = e?.value?.otp;
    this.TallyAuthorizationService.getTallyUserbyEmail({ emailId: e.value?.email }).subscribe((resany: any) => {
      if (this.rolebaseddata.includes(resany?.result?.role)) {
        let tempdata: any = {
          emailId: e.value?.email,
          password: e.value?.password
        }
        this.TallyAuthorizationService.Rolelogin(tempdata).subscribe((res: any) => {
          console.log(res, 'hfhffgffg')
          if (res?.docs?.token != null && res?.docs?.token != undefined) {
            console.log(res, 'token')
            this.toastr.success('Sucessfully Login...');
            this.TallyAuthorizationService.addToken(res?.docs?.token);
            this.sessionstorage.set('PERMISSION', JSON.stringify({
              emailId: res?.docs?.emailId,
              role: res?.docs?.role
            }))
            window.open(AppConfig?.ROLE_URL + "/login/" + res?.docs?.token, "_self")
          }
        });
      } else {
        if (!this.value) {
          this.submitted = true
          this.isDisabled = true;
          if (e.invalid) {
            this.toastr.error('Invalid inputs, please check again!');
            this.isDisabled = false;
            return;
          }
          this.TallyAuthorizationService.TallyUserlogin(e.value).subscribe(data => {
            this.TallyAuthorizationService.addLoginData(data);
            this.data = data;
            if (data['result']) {
              this.TallyAuthorizationService.addToken(data['result'].token);
              if (data['result']['dataURL']) {
                this.router.navigate(['/2FA']);
              } else {
                this.otp = true;
                this.validator.setInputVisibilty('UserLoginPage', 2, 'visible', true);
                this.TallyAuthorizationService.TallygetUser().subscribe(data1 => {
                  console.log(data1);
                  this.data1 = data1
                }, error1 => {
                  this.loginError('Login unsuccessful!, Please check the details');
                });
              }
            } else {
              this.loginError(this.data?.message);
            }
          }, error => {
            this.loginError('Login unsuccessful!, Please check the details');
          });
        } else {
          this.TallyAuthorizationService.TallyloginVerfiy(this.value).subscribe(data => {
            this.TallyAuthorizationService.Tallyloginlogout(true).subscribe((res: any) => console.log(res, 'loginlogout'))
            if (this.data1['data'][0].emailId == 'docmachinetec@gmail.com' || this.data1['data'][0].emailId == 'tramsdocmachine@gmail.com' || this.data1['data'][0].emailId == 'fintech.innovations2021@gmail.com') {
              this.router.navigate(['/home/powerAdmin/pending'])
              this.authGuard.setLocalStorage('LOGIN_OTP', true);
              this.sessionstorage.set('PERMISSION', JSON.stringify({
                emailId: this.data1['data'][0].emailId,
                role: this.data['result']['role']
              }))
            } else {
              if (this.data1['data'][0]['emailIdVerified']) {
                if (this.data1['data'][0]['verified'] == 'yes') {
                  if (data['status'] == 200) {
                    this.authGuard.setLocalStorage('LOGIN_OTP', true);
                    this.sessionstorage.set('PERMISSION', JSON.stringify({
                      emailId: this.data1['data'][0].emailId,
                      role: this.data['result']['role']
                    }))
                    this.toastr.success(data['message']);
                    window.close();
                  } else {
                    this.toastr.error(data['message']);
                  }
                } else {
                  this.router.navigate(['newUser'])
                }
              } else {
                this.router.navigate(['notVerified'])
              }
            }
          },
            error => {
              this.loginError('Login unsuccessful!, Please check the details');
            });
        }
      }
    })
  }

  inputFun(a: any) {
    this.submitted = false
    this.isDisabled = false;
    this.value = a
    console.log(a, 'sdfsdfsdfsdfdsfsdfdsfsdfdf')
  }

  onSignup() {
    this.isVisible = true;
    this.router.navigate(['/signup'])
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
  dump(panel: any) {
    panel?.onClickButton
    console.log(panel, 'sdfsdsdfdf')
  }
}