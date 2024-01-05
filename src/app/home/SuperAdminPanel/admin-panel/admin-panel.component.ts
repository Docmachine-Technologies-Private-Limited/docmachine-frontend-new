import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '.././../../service/user.service';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { WindowInformationService } from '../../../service/window-information.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from '../../../service/authenticate.service';
import { AuthGuard } from '../../../service/authguard.service';
import { DocumentService } from '../../../service/document.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import moment from 'moment';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class SuperAdminPanelComponent implements OnInit {
  USER_DEATILS: any = [];
  index_Selected: any = '';
  filterdata: any = [];
  ORIGNAL_DATA: any = [];
  item2: any;
  val: any;
  value: any = [];
  file: any;
  approved: boolean;
  pending: boolean;
  declined: boolean;
  SUBCRIPTION_DATA: any = [];
  SUBCRIPTION_CHANGES: any = FormGroup;
  TRADE_APP_FORM: any = FormGroup;
  AllCompanyId: any = [];
  OrgAllCompanyId: any = [];
  AlldeletebyCollectionName: any = [];
  OrgAlldeletebyCollectionName: any = [];

  constructor(public route?: ActivatedRoute, public formBuilder?: FormBuilder,
    public userService?: UserService,
    public sanitizer?: DomSanitizer, public toastr?: ToastrService,
    public elRef?: ElementRef,
    public router?: Router,
    public authGuard?: AuthGuard,
    public docserivce?: DocumentService,
    public authservice?: AuthenticateService,
    public dialog?: MatDialog,
    public wininfo?: WindowInformationService) {

    this.SUBCRIPTION_CHANGES = this.formBuilder?.group({
      Login_Limit: ['', Validators.required],
      Role_Type: ['', Validators.required],
      Subscription: ['', Validators.required],
      DMS: ['', Validators.required],
      Teasury: ['', Validators.required],
      Transaction: ['', Validators.required],
    });
    this.TRADE_APP_FORM = this.formBuilder?.group({
      TrailDays: ['', Validators.required],
    });
  }

  TRADE_APP_DATA: any = [];
  TradeAppUserData: any = [];
  COUPON_CODE_DATA: any = [];

  async ngOnInit() {
    let token = this.authGuard?.loadFromLocalStorage();
    if (token != null) {
      // interval(2 * 60 * 1000).subscribe(async () => {
      //   this.ORIGNAL_DATA = await this.userService?.getAllUserMember();
      //   this.USER_DEATILS = this.ORIGNAL_DATA;
      //   this.loaddata()
      // })
    }

    this.ORIGNAL_DATA = await this.userService?.getAllUserMember();
    this.USER_DEATILS = this.ORIGNAL_DATA;
    this.loaddata();
    this.ApprovalRejectDelete(null, 'approved')
    console.log(this.USER_DEATILS, 'this.USER_DEATILS')
    this.LoadTradedata()
    this.userService?.getAllCompanyId().then((res: any) => {
      this.AllCompanyId = res?.data;
      this.OrgAllCompanyId = res?.data;
      this.AlldeletebyCollectionName = [];
      this.OrgAlldeletebyCollectionName = [];
      res?.data?.forEach(element => {
        this.AlldeletebyCollectionName[element?._id] = [];
        this.OrgAlldeletebyCollectionName[element?._id] = [];
        res?.CollectionName.forEach(CollectionNameelement => {
          this.AlldeletebyCollectionName[element?._id].push(({ id: element?._id, teamname: element?.teamName, name: CollectionNameelement }));
          this.OrgAlldeletebyCollectionName[element?._id].push(({ id: element?._id, teamname: element?.teamName, name: CollectionNameelement }));
        });
      });
      console.log(res, this.AlldeletebyCollectionName, this.OrgAlldeletebyCollectionName, 'getAllCompanyId')
    })

  }

  EditTradeApp(data) {
    this.TRADE_APP_DATA = data;
  }

  LoadTradedata() {
    this.userService?.getTradeAppUserData().subscribe((res: any) => {
      res?.forEach(element => {
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
      this.TradeAppUserData = res
      console.log(res, "getTradeAppUserData")
    })

    this.docserivce?.GetCouponCodeDetails().subscribe((res: any) => {
      this.COUPON_CODE_DATA = res?.data;
      console.log(res, "GetCouponCodeDetails")
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
      this.userService?.UpdateTradeAppUserData(this.TRADE_APP_DATA?._id, {
        TrailDays: this.TRADE_APP_FORM?.value?.TrailDays,
        FreeTrailPeroidStratDate: moment().format('dddd, MMMM DD, YYYY h:mm A'),
        FreeTrailPeroidEndDate: moment(this.addDays(new Date(), this.TRADE_APP_FORM?.value?.TrailDays)).format('dddd, MMMM DD, YYYY h:mm A')
      }).subscribe((res: any) => {
        console.log(res, "UpdateTradeAppUserData")
        if (res?.status == true) {
          this.toastr?.success(res?.msg)
          TRADE_APP_PANEL?.displayHidden;
          this.LoadTradedata();
        } else {
          this.toastr?.error(res?.msg)
        }
      })
    }
  }

  ClosePopup(event, panel) {
    if (event?.status == true) {
      panel?.displayHidden
      event?.REST_FORM?.resetForm
    }
  }

  addDays(date: any, days: any) {
    var result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    console.log(result, date, days, "addDays")
    return result;
  }

  loaddata() {
    this.SUBCRIPTION_DATA = [];
    let buyerDetail: any = [];
    let BenneDetail: any = [];

    this.ORIGNAL_DATA.UserDetails.forEach(element => {
      if (element?.role == 'manager') {
        this.SUBCRIPTION_DATA.push(element);
      }
      this.ORIGNAL_DATA.MemberDetails.forEach(MemberDetailsElement => {
        if (element?.emailId.includes(MemberDetailsElement?.email)) {
          element['imageUrl'] = MemberDetailsElement?.imageUrl;
        }
      });
    });
    this.filterdata = this.USER_DEATILS;

    console.log(this.SUBCRIPTION_DATA, 'SUBCRIPTION_DATA')
    setInterval(() => {
      this.ORIGNAL_DATA.UserDetails.forEach(element => {
        element['LastLogin'] = this.SubtractDates(new Date(element?.updatedAt), new Date());
      });

      this.ORIGNAL_DATA.MemberDetails.forEach(Memberelement => {
        this.ORIGNAL_DATA.UserDetails.forEach(Userelement => {
          if (Memberelement?.email.includes(Userelement?.emailId)) {
            Memberelement['LastLogin'] = this.SubtractDates(new Date(Userelement?.updatedAt), new Date());
            Memberelement['isLoggin'] = Userelement?.isLoggin;
          }
        });
      });
    }, 1000);
    this.userService?.getBene(1).subscribe((res: any) => {
      console.log('getBene', res.data);
      BenneDetail = res?.data;
      this.SUBCRIPTION_DATA.forEach(element => {
        element['BenneDetails'] = BenneDetail.filter((BenneDetailelement: any) => element?.companyId?.indexOf(BenneDetailelement?.userId) != -1);
      });
      this.userService?.getBuyer(1).subscribe((res1: any) => {
        console.log('getBuyer', res1?.data);
        buyerDetail = res1?.data;
        this.SUBCRIPTION_DATA.forEach(element => {
          element['BuyerDetails'] = buyerDetail.filter((buyerDetailselement: any) => element?.companyId?.indexOf(buyerDetailselement?.userId) != -1);
        });
      }, (err) => console.log('Error', err)
      );
    }, (err) => console.log("Error", err)
    );

  }
  async ApprovalRejectDelete(event: any, file: any) {
    this.val = await this.userService?.getAllUser();
    const id = event != null ? event?.tab?.content?.viewContainerRef?.element?.nativeElement?.id : file;
    console.log(this.val);
    if (id === 'approved') {
      console.log("hello1")
      this.approved = true;
      this.pending = false;
      this.declined = false
      let x: any = [];
      for (let value of this.val['data']) {
        if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'fintech.innovations2021@gmail.com') {
          if (value['verified'] == 'yes') {
            x.push(value)
          }
        }
      }
      this.value = x

    }
    else if (id === 'pending') {
      this.approved = false;
      this.pending = true;
      this.declined = false
      console.log("hello2")
      let x: any = [];
      for (let value of this.val['data']) {
        if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'fintech.innovations2021@gmail.com') {
          if (value['verified'] == 'no') {
            x.push(value)
          }
        }
      }
      console.log(this.value)
      this.value = x
    }
    else if (id === 'declined') {
      this.approved = false;
      this.pending = false;
      this.declined = true
      console.log("hello2")
      let x: any = [];
      for (let value of this.val['data']) {
        if (value['emailId'] != 'tramsdocmachine@gmail.com' && value['emailId'] != 'docmachinetec@gmail.com' && value['emailId'] != 'fintech.innovations2021@gmail.com') {
          if (value['verified'] == 'declined') {
            x.push(value)
          }
        }
      }
      console.log(this.value)
      this.value = x
    }
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
    return words?.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
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
  timeout: any = null
  filterbyNameEmail(type: any, value: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.filterdata[type] = this.USER_DEATILS?.UserDetails.filter((item: any) => item?.emailId?.toLowerCase().indexOf(value?.toLowerCase()) != -1 ||
        item?.fullName?.toLowerCase().indexOf(value?.toLowerCase()) != -1);
      console.log(this.filterdata, this.USER_DEATILS, 'filterdatafilterdatafilterdata')
      if (value == '') {
        this.ngOnInit()
      }
    }, 100)
  }
  refresh(type: any) {
    this.filterdata = []
    this.loaddata()
    console.log(this.filterdata, 'refresh')
  }
  submit(id, i, emailId) {
    console.log(id)
    let x;
    if (this.approved) {
      x = 'no'
    }
    else if (this.pending) {
      x = 'yes'
    }
    else if (this.declined) {
      x = 'yes'
    }
    this.userService?.updateOneUser(id, x, emailId)
      .subscribe(
        async data => {
          console.log("king123")
          console.log(data)
          this.value.splice(i, 1)
          //this.message = data['message']
          if (this.approved) {
            this.toastr?.success('Revoked Successfully');
          }
          else if (this.pending || this.declined) {
            this.toastr?.success('Approved Successfully');
          }

        },
        error => {
          console.log("error")
        });
  }

  decline(id, i, emailId) {
    console.log(id)
    this.userService?.updateOneUser(id, "declined", emailId)
      .subscribe(
        async data => {
          console.log("king123")
          console.log(data)
          this.value.splice(i, 1)
          //this.message = data['message']
          this.toastr?.success('Account declined successfully');

        },
        error => {
          console.log("error")
        });
  }

  delete(id, i) {
    console.log(id)
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.deleteUser(id).subscribe(async data => {
          console.log("king123")
          console.log(data)
          this.value.splice(i, 1)
          this.toastr?.success('Account Deleted');
        },
          error => {
            console.log("error")
          });
      }
    });
  }
  deleteAdmin(id) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    console.log(id)
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.deleteUser(id).subscribe(async data => {
          console.log(data)
          this.toastr?.success('Account Deleted');
          this.ngOnInit();
        },
          error => {
            console.log("error")
          });
      }
    });
  }
  deleteMember(emailId: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.deleteUser_Role(emailId).subscribe((res: any) => {
          if (res['status'] == true) {
            this.toastr?.success('Account Deleted');
            this.ngOnInit()
          }
          console.log(res, 'dfsdfdsfsgdsfhdsgfd');
        })
      }
    });

  }
  SUBCRIPTION_ID: any = ''
  SELECTED_SUBCRIPTION_DATA: any = [];
  ChangeSubcriptionData(data: any, id: any) {
    console.log(data, 'ChangeSubcriptionData')
    this.SUBCRIPTION_ID = id;
    this.SELECTED_SUBCRIPTION_DATA = data;
    this.SUBCRIPTION_CHANGES = this.formBuilder?.group({
      Login_Limit: [data?.Login_Limit, Validators.required],
      Role_Type: [data?.Role_Type, Validators.required],
      Subscription: [data?.Subscription, Validators.required],
      DMS: [data?.DMS, Validators.required],
      Teasury: [data?.Teasury, Validators.required],
      Transaction: [data?.Transaction, Validators.required],
    });
  }
  SUBCRIPTION_Submit(form_value: any, displayHidden: any) {
    console.log(form_value, displayHidden, 'SUBCRIPTION_Submit')
    if (this.SUBCRIPTION_ID != '' && this.SUBCRIPTION_ID != undefined && this.SUBCRIPTION_ID != null) {
      this.docserivce?.updateUserById(this.SUBCRIPTION_ID, form_value?.value).subscribe((res: any) => {
        console.log(res, 'SUBCRIPTION_Submit');
        this.docserivce?.updateUserByCompanyId(this.SELECTED_SUBCRIPTION_DATA?.companyId, {
          DMS: form_value?.value?.DMS,
          Teasury: form_value?.value?.Teasury,
          Transaction: form_value?.value?.Transaction,
        }).subscribe((res: any) => {
          console.log(res, 'SUBCRIPTION_Submit');
          this.toastr?.success('Updated Succesfully...');
          this.ngOnInit()
          this.SUBCRIPTION_ID = '';
          displayHidden.PopUpOpenClose.nativeElement.style.display = 'none';
        });
      })
    } else {
      this.toastr?.error('Id not found...');
    }
  }
  Transaction_Checked(event: any) {
    if (event?.target?.checked) {
      this.SUBCRIPTION_CHANGES.controls.DMS.setValue(true)
    } else {
      this.SUBCRIPTION_CHANGES.controls.DMS.setValue(false)
    }
  }
  SearchCompanyId(val: any) {
    this.AllCompanyId = this.OrgAllCompanyId.filter((items: any) => items?.teamName?.toLowerCase()?.includes(val?.value?.toLowerCase()) || items?._id?.toLowerCase()?.includes(val?.value?.toLowerCase()));
    if (val?.value == '' || this.AllCompanyId?.length == 0) {
      this.AllCompanyId = this.OrgAllCompanyId;
    }
  }
  DeleteCompanyIdData(val: any, compnayname: any) {
    const message = `Are you sure you want to delete this all table data from ${compnayname}?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.DeleteAllCompanyIddata(val).then((res: any) => {
          this.toastr?.success('Successfully delete all data...')
        }).catch((error) => {
          this.toastr?.error('something find wrong....')
        })
      }
    });
  }
  SearchCompanyIdCollectionName(val: any) {
    this.OrgAllCompanyId.forEach(element => {
      this.AlldeletebyCollectionName[element?._id] = this.OrgAlldeletebyCollectionName[element?._id].filter((items: any) =>
        items?.name?.toLowerCase()?.includes(val?.value?.toLowerCase())
        || items?.teamname?.toLowerCase()?.includes(val?.value?.toLowerCase())
        || items?.id?.toLowerCase()?.includes(val?.value?.toLowerCase()));
    });
    if (val?.value == '') {
      this.AlldeletebyCollectionName = this.OrgAlldeletebyCollectionName;
    }
  }

  DeleteCompanyIdCollectionNameData(val: any, name: any, compnayname: any) {
    const message = `Are you sure you want to delete this table (${name}) data  from ${compnayname}?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.DeletebyCollectionName(val, name).then((res: any) => {
          this.toastr?.success('Successfully delete all data...')
        }).catch((error) => {
          this.toastr?.error('something find wrong....')
        })
      }
    });
  }
}

