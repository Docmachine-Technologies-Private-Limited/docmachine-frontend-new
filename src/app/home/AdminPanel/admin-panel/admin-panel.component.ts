import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '.././../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AppConfig } from '../../../app.config';
import { WindowInformationService } from '../../../service/window-information.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  USER_DEATILS: any = [];
  index_Selected: any = '';
  constructor(public route?: ActivatedRoute, public formBuilder?: FormBuilder,
    public userService?: UserService, public appconfig?: AppConfig,
    public sanitizer?: DomSanitizer, public toastr?: ToastrService,
    public elRef?: ElementRef,
    public wininfo?: WindowInformationService) { }

  async ngOnInit() {
    this.USER_DEATILS = await this.userService?.getAllUserMember();
    this.USER_DEATILS?.UserDetails.forEach(element => {
      this.USER_DEATILS?.MemberDetails.forEach(MemberDetailsElement => {
        if (element?.emailId.includes(MemberDetailsElement?.email)) {
          element['imageUrl'] = MemberDetailsElement?.imageUrl;
        }
      });
    });
    setInterval(() => {
      this.USER_DEATILS?.UserDetails.forEach(element => {
        element['LastLogin'] = this.SubtractDates(new Date(element?.updatedAt), new Date());
      });
    }, 1000);
    console.log(this.USER_DEATILS, 'this.USER_DEATILS')
  }

  View(type: any, i: any) {
    this.index_Selected = i;
    console.log(this.USER_DEATILS[type][i], 'members_list')
  }

  getTimeSecondMinutes(time: any) {
    let res: any = ''
    return res;
  }
  initialName(words) {
    'use strict'
    return (words.charAt(0) + words.charAt(1)).toUpperCase();
  }

  public SubtractDates(startDate: Date, endDate: Date): any {
    let dateDiff = (endDate.getTime() - startDate.getTime()) / 1000;
    var h: any = Math.floor(dateDiff / 3600);
    var m: any = Math.floor((dateDiff % 3600) / 60);
    var s: any = Math.floor((dateDiff % 3600) % 60);
    var ms = dateDiff
      .toString()
      .substring(dateDiff.toString().indexOf('.') + 1);
    var hDisplay = h > 0 ? h.toString().padStart(2, '0') + '' : '00';
    var mDisplay = m > 0 ? m.toString().padStart(2, '0') + '' : '00';
    var sDisplay = s > 0 ? s.toString().padStart(2, '0') + '' : '00';
    return (h > 24 ? this.SplitTime(h)?.Days + 'days | ' : hDisplay + 'h | ') + mDisplay + 'm | ' + sDisplay + 's';
  }
  SplitTime(numberOfHours) {
    var Days = Math.floor(numberOfHours / 24);
    var Remainder = numberOfHours % 24;
    var Hours = Math.floor(Remainder);
    var Minutes = Math.floor(60 * (Remainder - Hours));
    return ({ "Days": Days, "Hours": Hours, "Minutes": Minutes })
  }
}

