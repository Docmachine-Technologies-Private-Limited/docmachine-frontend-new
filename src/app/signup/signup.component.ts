import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  isDisabled: boolean = false;
  isVisible: boolean = false;
  submitted = false;
  registerForm: FormGroup;
  closeResult: string;
  checked: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private toastr: ToastrService, private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });



  }
  get f() { return this.registerForm.controls; }


  onSubmit() {

    if(this.checked){
      this.submitted = true
      this.isDisabled = true;
      if (this.registerForm.invalid) {
        this.toastr.error('Invalid inputs, please check again!');
        this.isDisabled = false;
        return;
      }
      this.registerForm.value.role = 'manager'
      this.registerForm.value.verified = 'no'
      console.log(this.registerForm.value)
      this.userService.register(this.registerForm.value)
        .subscribe(
          data => {
            console.log("king123")
            console.log(data)
            this.toastr.success('User Created Successful!');
            this.router.navigate(['/login'], { queryParams: { registered: true } });
          },
          error => {
            this.isDisabled = false;
            console.log(error)
            if (error.error == 'Both password should be same') {
              this.toastr.error('Registration unsuccessful!, Both password should be same');
            }
            else if (error.error == 'Email ID already exist') {
              this.toastr.error('Registration unsuccessful!, Email already exist');
            }
            else {
              this.toastr.error('Registration unsuccessful!, please check the details');
            }

            console.log("error")
          });
    }
    else{
      this.toastr.error("You Need To Agree For Terms And Condition");
    }

  }

  onLogin() {
    this.isVisible = true;
    this.router.navigate(['/login']);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onCheck(event){
    console.log(this.checked," not loged")
    this.checked =  !this.checked
    console.log(this.checked,"loged")
  }

}



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { UserService, AuthenticationService, AlertService } from '../_services';

// @Component({ templateUrl: 'register.component.html' })
// export class RegisterComponent implements OnInit {
//   registerForm: FormGroup;
//   loading = false;
//   submitted = false;

//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private authenticationService: AuthenticationService,
//     private userService: UserService,
//     private alertService: AlertService
//   ) {
//     // redirect to home if already logged in
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }

//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
//       phoneNo: ['', [Validators.required, Validators.pattern("^\\+(?:[0-9] ?){6,14}[0-9]$")]],
//       username: ['', [Validators.required, Validators.pattern("^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.registerForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     this.alertService.clear();

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//       return;
//     }

//     this.loading = true;
//     this.userService.register(this.registerForm.value)
//       .subscribe(
//         data => {
//           console.log("king123")
//           console.log(data)

//           this.alertService.success('Registration successful', true);
//           this.router.navigate(['/login'], { queryParams: { registered: true } });
//         },
//         error => {
//           this.alertService.error(error.error);
//           this.loading = false;
//         });
//   }
// }
