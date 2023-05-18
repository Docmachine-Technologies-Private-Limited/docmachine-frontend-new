import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-based-sing-up',
  templateUrl: './role-based-sing-up.component.html',
  styleUrls: ['./role-based-sing-up.component.scss']
})
export class RoleBasedSingUpComponent implements OnInit {
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
    this.userForm.value.role=this.RoleType
    this.userService.RoleBaseSingUp(this.userForm.value).subscribe((res: any) => {
      console.log(res, 'hfhffgffg')
      this.toastr.success('Successfully create role base account...')
    },(err)=>{
       console.log(err,'sdfsdhfsdklfhdsfksdfsdfds')
    })
    console.log(this.userForm.value, 'sdsgjdfgsdfdf')
  }
  
  RoleType:any=''
  ChangesRoleType(role:any){
    this.RoleType=role;
  }
}
