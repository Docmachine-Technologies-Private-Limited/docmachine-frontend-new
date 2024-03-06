import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { UserService } from '../../service/user.service';
import * as jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-verify-email',
  templateUrl: './role-verify-email.component.html',
  styleUrls: ['./role-verify-email.component.scss']
})
export class RoleVerifyEmailComponent implements OnInit {
  resetForm: FormGroup;
  message: any;
  token: any;
  email: any;
  toggle: boolean;
  UserData: any = []
  constructor(private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.token = this.route.snapshot.params['id'];
    let val: any = jwt_decode.default(this.token);
    console.log(val, "jwt_decode")
    this.email = val['_id'];
    this.UserData = val;
  }

  onSubmit() {
    console.log(this.token)
    if (this.UserData?.role == "TradeApp") {
      this.userService.DeltaTradeAppLoginUpdate('a', this.UserData?._id).subscribe(data => {
        console.log(data)
        if (data) {
          this.toggle = true;
          this.toastr.success('Email Verification done');
        }
      }, error => {
        console.log("error")
      });
    } else {
      this.userService.RoleBaseSingUpupdateEmail('a', this.UserData?._id).subscribe(data => {
        console.log(data)
        if (data) {
          this.toggle = true;
          this.toastr.success('Email Verification done');
        }
      }, error => {
        console.log("error")
      });
    }
  }

}
