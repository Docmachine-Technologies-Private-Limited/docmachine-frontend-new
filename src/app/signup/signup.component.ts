import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  }
  onSubmit() {
    this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    console.log("king123")
                    console.log(data)
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    console.log("error")
                });
  }

}
