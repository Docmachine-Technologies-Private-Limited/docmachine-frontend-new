import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../service/user.service';
import { DocumentService } from '../../service/document.service';
import { ToastrService } from 'ngx-toastr';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-reset-otp',
  templateUrl: './reset-otp.component.html',
  styleUrls: ['./reset-otp.component.scss']
})
export class ResetOTPComponent implements OnInit {
  otp_url:any=''
  counter:number=0;
  constructor( private userService: UserService,
    private toastr: ToastrService,
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  
  emailCheck(value:any){
    this.userService.getUserbyEmail(value).subscribe((res:any)=>{
      console.log(res,'reset otp')
        if (res.result.length!=0) {
        if (this.counter==0) {
          this.userService.QR_RESET(res?.result).subscribe((resqr)=>{
            this.counter++;
            this.toastr.success('Send your registared email id please check...');
            this.router.navigate(['/login'])
          })
        }else{
          this.toastr.error('You already send your registared email id please check...');
        }
        } else {
          this.toastr.error('Email id not found, please check again...');
        }
    })
  }
}
