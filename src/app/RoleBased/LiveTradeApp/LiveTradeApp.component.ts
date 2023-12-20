import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'LiveTradeApp',
  templateUrl: './LiveTradeApp.component.html',
  styleUrls: ['./LiveTradeApp.component.scss']
})
export class LiveTradeAppComponent implements OnInit {
  userForm:any = new FormGroup({
    emailId: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    last_name: new FormControl()
  });
  constructor(public userService: UserService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  
  onFormSubmit() {
    this.userForm.value.role="TradeApp"
    this.userService.RoleBaseSingUp(this.userForm.value).subscribe((res: any) => {
      console.log(res, 'hfhffgffg')
      this.toastr.success('Successfully create Trade App account...');
      this.toastr.success('Also check registrated email id..')
    },(err)=>{
       this.toastr.error(err?.error?.text);
       console.log(err,'sdfsdhfsdklfhdsfksdfsdfds')
    })
    console.log(this.userForm.value, 'sdsgjdfgsdfdf')
  }
  
  RoleType:any=''
  ChangesRoleType(role:any){
    this.RoleType=role?.value;
  }
}
