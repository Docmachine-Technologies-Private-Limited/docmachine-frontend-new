import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  isDisabled: boolean = false;
  isVisible: boolean = false;
  submitted: boolean = false;
  qr: boolean;
  tfa: any;
  authcode: any;
  otp: boolean;
  value: any;
  data1: any;
  data: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (!this.value) {
      this.submitted = true
      this.isDisabled = true;
      if (this.loginForm.invalid) {
        this.toastr.error('Invalid inputs, please check again!');
        this.isDisabled = false;
        return;
      }
      this.userService.login(this.loginForm.value)
        .subscribe(
          data => {
            this.data = data
            if (data['result']) {
              this.userService.addToken(data['result'].token);
              this.userService.getUser().subscribe(
                data1 => {
                  this.data1 = data1
                  if (data['result']['dataURL']) {
                    this.submitted = false
                    this.isDisabled = false;
                    this.qr = true
                    this.tfa = data['result']
                  }
                  else {
                    this.otp = true
                    console.log("king123")
                    // console.log(data['result'])
                    // if (data['result']) {
                    //   
                    //   if (data['result']['role'] == 'ca') {
                    //     this.userService.role = data['result']['role']
                    //     this.router.navigate(['/home/caDocuments/all'])
                    //   }
                    //   else {
                    //     this.userService.role = data['result']['role']
                    //     if (data1['data'][0].companyId) {
                    //       this.router.navigate(['/home/dashboardNew'])
                    //     }
                    //     else {
                    //       this.router.navigate(['createTeam'])
                    //     }
                    //   }
                    // }
                    // else {
                    //   console.log()
                    //   this.toastr.error('Login unsuccessful!, Please check the details');
                    //   this.isDisabled = false;
                    // }
                  }


                },
                error1 => {
                  this.toastr.error('Login unsuccessful!, Please check the details');
                  this.isDisabled = false;
                  console.log(error1)
                  console.log("error")
                });
            }
            else {
              this.toastr.error('Login unsuccessful!, Please check the details');
              this.isDisabled = false;
            }

          },
          error => {
            this.toastr.error('Login unsuccessful!, Please check the details');
            this.isDisabled = false;
            console.log(error)
            console.log("error")
          });
    }
    else {
      console.log(this.value)
      this.userService.verify(this.value)
        .subscribe(
          data => {
            console.log("king123")
            console.log(data)

            if (data['status'] == 200) {
              this.toastr.success(data['message']);
              if (this.data['result']['role'] == 'ca') {
                this.userService.role = this.data['result']['role']
                this.router.navigate(['/home/caDocuments/all'])
              }
              else {
                this.userService.role = this.data['result']['role']
                if (this.data1['data'][0].companyId) {
                  this.router.navigate(['/home/dashboardNew'])
                }
                else {
                  this.router.navigate(['createTeam'])
                }
              }
            }
            else {
              this.toastr.error(data['message']);
            }
          },
          error => {
            this.toastr.error('something wrong, please check the details!');
            console.log("error")
          });
    }

  }

  inputFun(a) {
    this.submitted = false
    this.isDisabled = false;
    this.value = a
  }

  onSignup() {
    this.isVisible = true;
    this.router.navigate(['/signup'])

  }

  confirm() {
    console.log(this.authcode)
    this.userService.verify(this.authcode)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)

          if (data['status'] == 200) {
            this.toastr.success(data['message']);
            this.qr = false
          }
          else {
            this.toastr.error(data['message']);
          }
        },
        error => {
          this.toastr.error('something wrong, please check the details!');
          console.log("error")
        });
  }

}