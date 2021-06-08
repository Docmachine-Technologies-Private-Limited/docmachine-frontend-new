import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../service/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  resetForm: FormGroup;
  message:any;
  token: any;
  email: any;
  toggle: boolean;
  constructor(private formBuilder: FormBuilder,private userService: UserService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.token = this.route.snapshot.params['id'];
    let val = jwt_decode(this.token);
    console.log(val)
    this.email = val['_id'];
    this.resetForm = this.formBuilder.group({
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  onSubmit() {
    console.log(this.resetForm.value)
    console.log(this.token)
    if(true) {
      this.userService.updatePsw(this.resetForm.value,this.email)
            .subscribe(
                data => {
                    console.log("king123")
                    console.log(data)
                    if(data['success']==true) {
                      this.toggle = true;
                    }
                    //this.message = data['message']
                   // 
                },
                error => {
                    console.log("error")
                });
    }
  }

}
