import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '.././../../service/user.service';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { WindowInformationService } from '../../../service/window-information.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Observable, interval, timeInterval } from 'rxjs';
import { AuthenticateService } from '../../../service/authenticate.service';
import { AuthGuard } from '../../../service/authguard.service';
import { DocumentService } from '../../../service/document.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import JSZip from 'jszip/dist/jszip';
import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-back-up-panel-mongo-db',
  templateUrl: './back-up-panel-mongo-db.component.html',
  styleUrls: ['./back-up-panel-mongo-db.component.scss']
})
export class BackUpPanelMongoDBComponent implements OnInit {

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
  AllCompanyId: any = [];
  OrgAllCompanyId: any = [];
  SHOW_PANEL: boolean = false;
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
  }

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
    console.log(this.USER_DEATILS, 'this.USER_DEATILS')

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
      this.SHOW_PANEL = true;
      console.log(res, this.AlldeletebyCollectionName, this.OrgAlldeletebyCollectionName, 'getAllCompanyId')
    })

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

  refresh(type: any) {
    this.filterdata = []
    this.loaddata()
    console.log(this.filterdata, 'refresh')
  }

  SearchCompanyId(val: any) {
    this.AllCompanyId = this.OrgAllCompanyId.filter((items: any) => items?.teamName?.toLowerCase()?.includes(val?.toLowerCase()) || items?._id?.toLowerCase()?.includes(val?.toLowerCase()));
    if (val == '' || this.AllCompanyId?.length == 0) {
      this.AllCompanyId = this.OrgAllCompanyId;
    }
    console.log(this.AllCompanyId, "AllCompanyId")
    setTimeout(() => {
      this.SHOW_PANEL = true;
    }, 200);
  }

  DeleteCompanyIdData(data: any) {
    let JSON_DATA: any = []
    data?.forEach((element, index) => {
      this.userService?.getCollectionNameData({ companyId: element?.id, CollectionName: element?.name, }).then((res: any) => {
        console.log(res, "DeleteCompanyIdCollectionNameData")
        JSON_DATA.push({ name: element?.name, data: res?.data, id: element?.id, teamname: element?.teamname })
        if ((index + 1) == data?.length) {
          this.downloadZip(element?.teamname + "_" + element?.id, JSON_DATA);
        }
      });
    });
  }
  SearchCompanyIdCollectionName(val: any) {
    this.SHOW_PANEL = false;
    this.OrgAllCompanyId.forEach(element => {
      this.AlldeletebyCollectionName[element?._id] = this.OrgAlldeletebyCollectionName[element?._id].filter((items: any) =>
        items?.name?.toLowerCase()?.includes(val?.toLowerCase())
        || items?.teamname?.toLowerCase()?.includes(val?.toLowerCase())
        || items?.id?.toLowerCase()?.includes(val?.toLowerCase()));
    });
    if (val == '') {
      this.AlldeletebyCollectionName = this.OrgAlldeletebyCollectionName;
    }
    console.log(this.AlldeletebyCollectionName, "AlldeletebyCollectionName")
    this.SearchCompanyId(val);
  }

  DeleteCompanyIdCollectionNameData(companyId: any, CollectionName: string, teamname: any) {
    this.userService?.getCollectionNameData({ companyId: companyId, CollectionName: CollectionName }).then((res: any) => {
      let JSON_DATA: any = []
      console.log(res, "DeleteCompanyIdCollectionNameData")
      JSON_DATA.push({ name: CollectionName, data: res?.data, id: companyId, teamname: teamname })
      this.downloadZip(teamname + "_" + companyId, JSON_DATA);
    });
  }

  downloadZip(name_zip, JSON_DATA: any) {
    var zip: any = new JSZip();
    JSON_DATA?.forEach(element => {
      const blob2 = new Blob([JSON.stringify({
        data: element?.data,
        CompanyInfo: { name: element?.name, CompanyId: element?.id, teamname: element?.teamname }
      })], { type: 'application/json' });
      zip.file(element?.name + '.json', blob2);
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, name_zip + ".zip");
    });
  }

  UPLOAD_COLUMN_KEY_JSON: any = []
  UPLOAD_COLUMN_DATA_JSON: any = []
  UPLOAD_COMPANY_INFO: any = ''
  uploadpopuplocalfile(event: any) {
    console.log(event, "uploadpopuplocalfile")
    if (event?.data?.data?.length != 0) {
      this.UPLOAD_COMPANY_INFO = event?.data?.CompanyInfo;
      this.UPLOAD_COLUMN_KEY_JSON = Object.keys(event?.data?.data[0])
      this.UPLOAD_COLUMN_DATA_JSON = event?.data?.data;
      console.log(this.UPLOAD_COLUMN_KEY_JSON, this.UPLOAD_COLUMN_DATA_JSON, "UPLOAD_COLUMN_KEY_JSON")
    }
  }

  ChangeCompanyId(value: any, defaulvalue: any) {
    console.log(value, "ChangeCompanyId")
    this.UPLOAD_COLUMN_DATA_JSON?.forEach(element => {
      element['userId'] = value != '' && value != undefined && value != null ? value?.toLowerCase() : defaulvalue;
    });
  }

  UploadData(companyId, CollectionName, data: any) {
    const message = `Are you sure you want to add this table name : (${CollectionName}) data from this company Id ${companyId}?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.userService?.AddDataTabel({ companyId: companyId, CollectionName: CollectionName, data: data }).then((res: any) => {
          console.log(res, "UploadData")
          this.SHOW_PANEL = false;
          setTimeout(() => {
            this.SHOW_PANEL = true;
            this.ngOnInit()
            this.UPLOAD_COMPANY_INFO = ''
            this.UPLOAD_COLUMN_DATA_JSON = [];
            this.UPLOAD_COLUMN_KEY_JSON = [];
          }, 200);
        });
      }
    })
  }
}
