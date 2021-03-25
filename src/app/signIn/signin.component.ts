import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-detail',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  }
  onSubmit() {
    this.userService.login(this.loginForm.value)
            .subscribe(
                data => {
                    console.log("king123")
                    console.log(data)
                    //this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    console.log("error")
                });
  }

}
