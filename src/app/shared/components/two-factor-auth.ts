import {UserService} from '../../service/user.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'two-auth',
  template: `

    `,
  styles: [`  `]
})
export class TwoFactorAuthComponent implements OnInit {
  public authcode: any;
  public tfa: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private router: Router, private toastr: ToastrService) {
    this.userService.loginData.subscribe((data) => {
      if (data['result']['dataURL']) {
        this.tfa = data['result']
      }
    })
  }

  ngOnInit(): void {

  }

  confirm() {
    console.log(this.authcode)
    this.userService.verify(this.authcode)
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
  }
}
