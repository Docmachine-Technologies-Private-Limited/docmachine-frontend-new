import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../service/user.service';
import { DocumentService } from '../../service/document.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-otp',
  templateUrl: './reset-otp.component.html',
  styleUrls: ['./reset-otp.component.scss']
})
export class ResetOTPComponent implements OnInit {
  otp_url:any=''
  constructor( private userService: UserService,
    private toastr: ToastrService,
    public documentService: DocumentService,) { }

  ngOnInit(): void {
  }
  
  emailCheck(value:any){
    this.userService.getUserbyEmail(value).subscribe((res:any)=>{
      console.log(res,'reset otp')
      if (res.result.length!=0) {
        this.otp_url=res?.result?.otpDetails?.dataURL
      } else {
        this.toastr.error('Email id not found, please check again...');
      }
    })
  }
}
