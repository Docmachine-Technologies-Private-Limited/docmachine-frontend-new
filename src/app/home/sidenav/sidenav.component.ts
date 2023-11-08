import { AuthGuard } from "./../../service/authguard.service";
import { AuthenticateService } from "./../../service/authenticate.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { UserService } from "../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: [ "./sidenav.component.scss"],
})

export class SidenavComponent implements OnInit {
  // mt: boolean;
  sideMenu: string = 'export';
  exp: boolean;
  inw: boolean;
  imp: any;
  out: any;
  others: boolean;
  nt: boolean;
  billuc: boolean;
  lc1: boolean;
  nonlc1: boolean;
  lcI: boolean;
  view: boolean = false;
  applicant: any;
  role: any;
  id: any;
  name: any;
  ct: boolean;
  userData: any = [];
  TRANSACTION_DASHBOARD_LIST: any = {
    Export: ["Export Bill Regularisation", "Export Bill Lodgement", "Inward Remittance Disposal", "Export Bill Realisation"],
    Import: ["Advance Outward Remittance", "Direct Bills", "Outward Remittance A2","Import Under Collection/LC","Buyer Credit"]
  };

  constructor(
    public router: Router,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard,
    public documentService: DocumentService,
    public userService: UserService,
    private toastr: ToastrService,
    private sharedData: SharedDataService) {
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user['result'];
      console.log("userData", this.TRANSACTION_DASHBOARD_LIST,this.userData)
    });
  }

  userDataListener;

  async ngOnInit() {

    this.userDataListener = this.userService.userDataListener$
    await this.userDataListener.subscribe((data: any) => {
      console.log("-----------> page calleddd")
      console.log(data)
      if (data != '' && data != null && data != undefined) {
        this.id = data
      }
    });

    this.id = await this.userService.getUserDetail();
    console.log("this.id", this.id)
    this.documentService.EXPORT_IMPORT[(this.id['result']['Subscription']) == 'both' ? this.id['result']['sideMenu'] : (this.id['result']['Subscription']).toLowerCase()] = true;
    console.log(this.documentService.EXPORT_IMPORT, 'sdfhsdgfdjshdgf')

    this.name = this.id.result.fullName
    this.sideMenu = this.id.result.sideMenu
    if (this.id.result.emailId == 'tramsdocmachine@gmail.com' || this.id.result.emailId == 'docmachinetec@gmail.com' || this.id.result.emailId == 'fintech.innovations2021@gmail.com') {
      this.role = 'admin'
    }
    else {
      this.role = this.id.result.role
      console.log(this.name)
    }
    let token = this.authGuard.loadFromLocalStorage();
    if (!token) {
      this.router.navigate(["login"]);
    }
    this.changer()
  }

  hideIncoice() {
    this.documentService.showInvoice = false;
  }

  UserLoginLogOut() {
    this.userService.loginlogout(false).subscribe((res: any) => {
      console.log(res, 'loginlogout');
      this.userService.authToken = null;
      this.router.navigate(["login"]);
      sessionStorage.clear();
      localStorage.clear();
    })
  }

  removeTwo() {
    this.userService.delete('this.authcode').subscribe(data => {
      console.log("king123")
      console.log(data)
      if (data['status'] == 200) {
        this.toastr.success(data['message']);
      }
      else {
        this.toastr.error(data['message']);
      }
    },
      error => {
        this.toastr.error('something wrong, please check the details!');
        console.log("error")
      });
  }
  typeChange(type1, type2) {
    this.router.navigate(['/home/dashboardTask'])
    let sendData = { sideMenu: type1 }
    this.documentService.EXPORT_IMPORT[type1] = true;
    this.documentService.EXPORT_IMPORT[type2] = false;
    if (this.documentService.EXPORT_IMPORT['callback'] != null && this.documentService.EXPORT_IMPORT['callback'] != undefined) {
      this.documentService.EXPORT_IMPORT['callback']();
    }
    this.documentService.updateUserById(this.userData._id, sendData).subscribe(
      (data) => {
        this.userData = { ...this.userData, sideMenu: type1 }
        this.userService.addLoginData(this.userData)
      },
      (error) => {
        console.log("error");
      }
    );
  }
  SUB_MENU: any = {};

  navigationByUrl(event: any, url: string): void {
    this.router.navigate(['/home/' + url]);
    this.HIDE_ALL_SUB_MENU();
  }
  navigationByUrlMain(event: any, url: string): void {
    this.router.navigate([url]);
    this.HIDE_ALL_SUB_MENU();
  }
  navigationByUrlParam(event: any, url: string, param: any): void {
    this.router.navigate(['home/' + url, param]);
  }
  HIDE_ALL_SUB_MENU() {
    for (const key in this.SUB_MENU) {
      this.SUB_MENU[key] = false;
    }
  }

  changer() {
    (function ($) {
      "use strict";
      var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height() as any);
        $(window).resize(function () {
          $('.js-fullheight').css('height', $(window).height() as any)
        });
      };
      fullHeight();
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebar1').toggleClass('hide');
        $('.scroll-bar-main').toggleClass('width-changer');
      });
    })(jQuery);
  }
}
