import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import * as data from '../../bank.json';
import * as data1 from '../../currency.json';
import { AppConfig } from 'src/app/app.config';
import { WindowInformationService } from 'src/app/service/window-information.service';
import $ from 'jquery'

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {
  userData: any = [];
  constructor(@Inject(PLATFORM_ID) public platformId, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private userService: UserService, private router: Router, private toastr: ToastrService, public appconfig: AppConfig,
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
