import { Component, OnInit } from '@angular/core';
import { WindowInformationService } from '../../../../service/window-information.service';
import { AuthenticateService } from '../../../../service/authenticate.service';
import { DocumentService } from '../../../../service/document.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-bharathexim-subscription-module',
  templateUrl: './bharathexim-subscription-module.component.html',
  styleUrls: ['./bharathexim-subscription-module.component.scss']
})
export class BharatheximSubscriptionModuleComponent implements OnInit {
  TRADE_APP_DATA: any = [];
  TradeAppUserData: any = [];
  COUPON_CODE_DATA: any = [];
  VIEW_SUBSCRIPTION_PLAN_DATA: any = [];
  TRADE_APP_FORM: any = FormGroup;
  EditSubsciptionPlan_DATA: any = [];
  ORIGNAL_DATA: any = [];

  constructor(public route?: ActivatedRoute,
    public formBuilder?: FormBuilder,
    public userService?: UserService,
    public toastr?: ToastrService,
    public router?: Router,
    public docserivce?: DocumentService,
    public authservice?: AuthenticateService,
    public wininfo?: WindowInformationService) {
    this.TRADE_APP_FORM = this.formBuilder?.group({
      TrailDays: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.ORIGNAL_DATA = await this.userService?.getAllUserMember();
    console.log(this.ORIGNAL_DATA, "ORIGNAL_DATA")
    this.ORIGNAL_DATA?.UserDetails?.forEach(element => {
      element['StartDate'] = moment(element?.FreeTrailPeroidStratDate).format('YYYY-MM-DD')
      element['EndDate'] = moment(element?.FreeTrailPeroidEndDate).format('YYYY-MM-DD')
      element['Days'] = this.getDays(element?.FreeTrailPeroidStratDate, element?.FreeTrailPeroidEndDate) + ' Days'
      if (element?.isLoggin) {
        setInterval(() => {
          element['LastLogin'] = this.SubtractDates(new Date(element?.updatedAt), new Date());
        }, 1000)
      } else {
        element['LastLogin'] = this.SubtractDates(new Date(element?.updatedAt), new Date());
      }
    });
    this.TradeAppUserData = this.ORIGNAL_DATA?.UserDetails
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

  onclickCouponDetails() {
    this.docserivce?.GetBharatheximCouponCodeDetails().subscribe((res: any) => {
      this.COUPON_CODE_DATA = res?.data;
      console.log(res, "GetCouponCodeDetails")
    })
  }
  
  EditTradeApp(data) {
    this.TRADE_APP_DATA = data;
  }
  
  EditSubsciptionPlan(data) {
    this.EditSubsciptionPlan_DATA= data;
  }
  
  onclickSubscriptionPlan() {
    this.docserivce?.getBharatheximSubscriptionPlan().subscribe((res: any) => {
      this.VIEW_SUBSCRIPTION_PLAN_DATA = res?.data;
      console.log(res, "getSubscriptionPlan")
    })
  }

  getDays(d1: any, d2: any) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days =
      Math.round(Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days
  }

  UpdateTradeData(TRADE_APP_PANEL) {
    console.log(this.TRADE_APP_FORM, "asdasdsadasdsad")
    if (this.TRADE_APP_FORM?.status != '') {
      this.userService?.UpdateBharatheximpUserData(this.TRADE_APP_DATA?._id, {
        TrailDays: this.TRADE_APP_FORM?.value?.TrailDays,
        FreeTrailPeroidStratDate: moment().format('dddd, MMMM DD, YYYY h:mm A'),
        FreeTrailPeroidEndDate: moment(this.addDays(new Date(), this.TRADE_APP_FORM?.value?.TrailDays)).format('dddd, MMMM DD, YYYY h:mm A')
      }).subscribe((res: any) => {
        console.log(res, "UpdateBharatheximpUserData")
        if (res?.status == true) {
          this.toastr?.success(res?.msg)
          TRADE_APP_PANEL?.displayHidden;
          this.ngOnInit();
        } else {
          this.toastr?.error(res?.msg)
        }
      })
    }
  }

  addDays(date: any, days: any) {
    var result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    console.log(result, date, days, "addDays")
    return result;
  }

  ClosePopup(event, panel) {
    if (event?.status == true) {
      panel?.displayHidden
      event?.REST_FORM?.resetForm
      this.ngOnInit()
    }
  }
}
