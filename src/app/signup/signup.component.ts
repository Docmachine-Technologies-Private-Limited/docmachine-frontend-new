import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadServiceValidatorService } from '../components/Upload/service/upload-service-validator.service';
import { AppConfig } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  password = 'password';
  password1 = 'password';
  show = false;
  show1 = false;
  isDisabled: boolean = false;
  isVisible: boolean = false;
  submitted = false;
  registerForm: FormGroup;
  closeResult: string;
  checked: boolean = false;
  API_URL: any = AppConfig?.environment;

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
      fullName: {
        type: "text",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        style: {
          'border-radius': '30px',
          'padding': '20px'
        },
        placeholderText: 'Your Full Name'
      },
      email: {
        type: "email",
        value: "",
        label: "",
        rules: {
          required: true,
        },
        placeholderText: 'Your Email'
      },
      password: {
        type: "password",
        value: "",
        label: "",
        showhide: false,
        rules: {
          required: true,
        },
        placeholderText: 'Your Password'
      },
      confirmPassword: {
        type: "password",
        typeOf:'confirmPassword',
        value: "",
        label: "",
        rules: {
          required: true,
        },
        placeholderText: 'Confirm Your Password'
      },
      termsAndCondition: {
        type: "checkbox",
        value: false,
        label: "Terms And Condition",
        rules: {
          required: true,
        },
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
    e.value.role = 'manager'
    e.value.verified = 'no'
    console.log(e.value)
    if (e?.value?.termsAndCondition==true) {
      this.userService?.getEamilByIdUserMember(e.value?.email).then((emailvalidation: any) => {
        if (emailvalidation.length == 0) {
          this.userService.register(e.value).subscribe(data => {
            this.toastr.success('Registered Successfully!');
            this.userService.login({
              email: e.value.email,
              password: e.value.password,
            })
              .subscribe(
                data => {
                  this.userService.addLoginData(data);
                  this.userService.addToken(data['result'].token);
                  this.router.navigate(['/2FA'])
                });
  
            this.router.navigate(['/login'], { queryParams: { registered: true } });
          },
            error => {
              this.isDisabled = false;
              console.log(error)
              if (error.error == 'Both password should be same') {
                this.toastr.error('Registration unsuccessful!, Both password should be same');
              }
              else if (error.error == 'Email ID already exist') {
                this.toastr.error('Registration unsuccessful!, Email already exist');
              }
              else {
                this.toastr.error('Registration unsuccessful!, please check the details');
              }
  
              console.log("error")
            });
        } else {
          this.isDisabled = false;
          this.toastr?.error('This email id already exit please used different email id.');
        }
      });
    }else{
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
