import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../service/user.service';
import { UploadServiceValidatorService } from '../components/Upload/service/upload-service-validator.service';
import { AppConfig } from '../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  message: any;
  no: boolean;
  API_URL: any = AppConfig?.environment;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    public validator: UploadServiceValidatorService) { }
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
    this.setTextAnimation(0.1, 6, 2, 'ease', '#ffffff', true);
    this.validator.buildForm({
      emailId: {
        type: "email",
        value: "",
        label: "Enter your email address",
        placeholderText:'Your email address',
        rules: {
          required: true,
        },
      },
    }, 'ResetPassword');
  }
  onSubmit(e: any) {
    console.log(e.value)
    this.userService.forgotpsw(e.value).subscribe(data => {
      console.log("king123")
      console.log(data)
      this.message = data['message']
      this.no = false;
    }, error => {
      this.no = true;
      this.message = null;
      console.log("error")
    });
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