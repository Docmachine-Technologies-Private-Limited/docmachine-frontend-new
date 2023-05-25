import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WindowInformationService } from '../../service/window-information.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {
  userData: any = [];
  constructor(@Inject(PLATFORM_ID) public platformId, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private userService: UserService, private router: Router, private toastr: ToastrService,
    public wininfo: WindowInformationService) {
  }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(250, '.content-wrap');
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      console.log("userData", this.userData)
    });
  }
}
