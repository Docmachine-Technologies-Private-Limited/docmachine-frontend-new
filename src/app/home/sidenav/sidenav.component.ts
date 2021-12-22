import { AuthGuard } from "./../../service/authguard.service";
import { AuthenticateService } from "./../../service/authenticate.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { UserService } from "../../service/user.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["../../../sass/application.scss", "./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  mt: boolean;
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
  view: boolean;
  applicant: any;
  role: any;
  id: any;
  name: any;
  ct: boolean;
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  mt1: any;
  mt2: any;
  nt1: boolean;
  billuc1: boolean;
  mt3: boolean;
  mt4: any;
  val: Object;

  constructor(
    public router: Router,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard,
    private documentService: DocumentService,
    public userService: UserService,
    private toastr: ToastrService
  ) { }

  async ngOnInit() {
    console.log("side nav")
    this.id = await this.userService.getUserDetail();
    console.log(this.id)
    this.name = this.id.result.fullName
    if (this.id.result.emailId == 'ranjithranju7022@gmail.com') {
      this.role = 'admin'

    }
    else {
      this.role = this.id.result.role
      console.log(this.name)
    }



    // const data1: any = this.userService.getUserDetail();

    // console.log(data1.result)
    let token = this.authGuard.loadFromLocalStorage();
    if (!token) {
      this.router.navigate(["login"]);
    }

  }

  hideIncoice() {
    this.documentService.showInvoice = false;
  }

  public logout() {
    this.authservice.logout();
    this.router.navigate(["login"]);
  }

  public manageTask() {
    this.mt = !this.mt;
  }

  public manageTask1() {
    this.mt1 = !this.mt1;
  }

  public viewDocument() {
    this.view = !this.view;

  }

  public exportTask() {
    this.mt2 = !this.mt2;
  }

  public idpmsTask() {
    this.mt3 = !this.mt3;
  }

  public edpmsTask() {
    this.mt4 = !this.mt4;
  }

  public newTask() {
    this.status = !this.status;
    this.router.navigate(["home/pipoDoc"]);
  }

  public newTask1() {
    this.nt1 = !this.nt1;
    //this.router.navigate(["home/pipoDoc"]);
  }

  public export() {
    this.exp = !this.exp;
  }

  public inward() {
    this.inw = !this.inw;
  }

  public import() {
    this.imp = !this.imp;
  }

  public outward() {
    this.out = !this.out;
  }

  public other() {
    this.others = !this.others;
  }

  public buc() {
    this.billuc = !this.billuc;
  }

  public buc1() {
    this.billuc1 = !this.billuc1;

  }
  public lc() {
    this.lc1 = !this.lc1;
  }
  public nonLc() {
    this.nonlc1 = !this.nonlc1;
  }

  public lcIsurence() {
    this.lcI = !this.lcI
  }

  onCompletedTask() {
    this.ct = !this.ct
  }

  lcSight() {
    console.log("lcSight")
    this.router.navigate(['home/bill-under-collection', {
      file: "lcSight"
    }]);

    //this.router.navigate(["/home/bill-under-collection/lcSight"])
  }

  lcUsance() {
    console.log("lcUsance")
    //this.router.navigate(["/home/bill-under-collection/lcUsance"])
    this.router.navigate(['home/bill-under-collection', {
      file: "lcUsance"
    }]);
  }
  nonlcSight() {
    console.log("nonlcSight")
    //this.router.navigate(["/home/bill-under-collection/nonlcSight"])
    this.router.navigate(['home/bill-under-collection', {
      file: "nonlcSight"
    }]);

  }
  nonlcUsance() {
    console.log("nonlcUsance")
    //this.router.navigate(["/home/bill-under-collection/nonlcUsance"])
    this.router.navigate(['home/bill-under-collection', {
      file: "nonlcUsance"
    }]);

  }

  lcInland() {
    console.log("nonlcUsance")
    this.router.navigate(['home/lc-isurence', {
      file: "inland"
    }]);
    //this.router.navigate(["/home/lc-isurence/inland"])
  }

  lcImport() {
    console.log("nonlcUsance")
    this.router.navigate(['home/lc-isurence', {
      file: "import"
    }]);
    //this.router.navigate(["/home/lc-isurence/import"])
  }

  removeTwo() {
    this.userService.delete('this.authcode')
      .subscribe(
        data => {
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
}