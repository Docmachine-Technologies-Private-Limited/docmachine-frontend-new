import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../service/user.service';
import { AuthGuard } from '../../../service/authguard.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    public authGuard: AuthGuard,
    private router: Router, private toastr: ToastrService) {
    this.userService.loginData.subscribe((data) => {
      if (data['result']['dataURL']) {
        this.tfa = data['result']
      }
    })
    this.userService.getUserDetail().then((data: any) => {
      console.log(data, 'dsjfhsdfjdsfdfdsf');
      this.USER_LOGIN_DATA = data['result'];
      this.tfa = data['result']['otpDetails']
    })
  }

  ngOnInit(): void {

  }

  confirm(inputformdata: any) {
    for (const key in this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER) {
      delete inputformdata[key];
    }
    if (this.USER_LOGIN_DATA['role'] == 'member') {
      inputformdata['RoleCheckbox'] = this.USER_LOGIN_DATA['RoleCheckbox'];
      inputformdata['Subscription'] = this.USER_LOGIN_DATA['Subscription'];
    }
    this.findEmptyObject(inputformdata, [undefined, null, '', 'Select Subscription', 'Select Role']).then((condition: any) => {
      if (condition == true) {
        for (const key in this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER) {
          inputformdata[key] = this.EXTRA_INPUT_FORM_VALUE_LIST_MANGER[key]
        }
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
}
