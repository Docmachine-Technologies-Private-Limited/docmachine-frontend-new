import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ToastrService} from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-twofactorauth',
  templateUrl: './twofactorauth.component.html',
  styleUrls: ['./twofactorauth.component.scss']
})
export class TwofactorauthComponent implements OnInit {
  public authcode: any;
  public tfa: any;
  RoleCheckbox_DATA:any=[];
  VIEWS_CHECKBOX_DATA:any={
    '1':false,
    '2':false,
    '3':false,
  };
  USER_LOGIN_DATA:any=[];

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private router: Router, private toastr: ToastrService) {
    this.userService.loginData.subscribe((data) => {
      if (data['result']['dataURL']) {
        this.tfa = data['result']
      }
    })
    this.userService.getUserDetail().then((data) => {
      console.log(data,'dsjfhsdfjdsfdfdsf');
      this.USER_LOGIN_DATA = data['result'];
    })
  }

  ngOnInit(): void {

  }

  confirm(value:any) {
    if (this.USER_LOGIN_DATA['role']=='member') {
      value['RoleCheckbox']=this.USER_LOGIN_DATA['RoleCheckbox'];
      value['Subscription']=this.USER_LOGIN_DATA['Subscription'];
    }
    this.findEmptyObject(value,[undefined,null,'','Select Subscription','Select Role']).then((condition:any)=>{
      if (condition==true) {
        console.log(condition,value,'sfdfsdfdfdsfd')
        this.userService.verify(value)
        .subscribe(
          data => {
            if (data['status'] == 200) {
              this.toastr.success(data['message']);
              this.router.navigate(['/login'], { queryParams: { registered: true } });
            } else {
              this.toastr.error(data['message']);
            }
          },
          error => {
            this.toastr.error('something wrong, please check the details!');
            console.log("error")
          });
      }else{
        for (const key in condition) {
          this.toastr.error(condition[key]);
        }
      }

    })

  }
  findEmptyObject(object: any,errorlist: any) {
    var temp:any={};
    return new Promise((resolve, reject) => {
      var objectkeys=Object.keys(object);
      if (objectkeys.length==0) {
        resolve([])
        return;
      }
      for (let index = 0; index < objectkeys.length; index++) {
        if (errorlist.includes(object[objectkeys[index]]) || object[objectkeys[index]]=='') {
          temp[objectkeys[index]]=objectkeys[index]+' Please check input value is empty!';
        }
      if (objectkeys.length==(index+1)) {
        if (Object.keys(temp).length!=0) {
          resolve(temp);
        }else{
          resolve(true);
        }
      }
    }
    });
  }
  truefalse(value){
    if (value==''){
      return true;
    }else{
      return false;
    }
  }
  ArraytoString(arr:any){
    var temp:any=[];
    for (const key in arr) {
      temp.push(arr[key]);
    }
    return temp.toString();
  }
  changesRoleCheckbox(value:any){
    console.log(value)
    this.RoleCheckbox_DATA=value
  }
  checkboxView(value:any){
    for (const iterator in this.VIEWS_CHECKBOX_DATA) {
      this.VIEWS_CHECKBOX_DATA[iterator]=false;
    }
    this.VIEWS_CHECKBOX_DATA[value]=true;
  }
}
