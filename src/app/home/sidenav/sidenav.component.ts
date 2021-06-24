import { AuthGuard } from "./../../service/authguard.service";
import { AuthenticateService } from "./../../service/authenticate.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
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

  constructor(
    public router: Router,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
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

  public newTask() {
    this.nt = !this.nt;
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
  public lc() {
    this.lc1 = !this.lc1;
  }
  public nonLc() {
    this.nonlc1 = !this.nonlc1;
  }

  public lcIsurence() {
    this.lcI = !this.lcI
  }

  lcSight() {
    console.log("lcSight")
    
    this.router.navigate(["/home/bill-under-collection/lcSight"])
  }
  
  lcUsance() {
    console.log("lcUsance")
    this.router.navigate(["/home/bill-under-collection/lcUsance"])
  }
  nonlcSight() {
    console.log("nonlcSight")
    this.router.navigate(["/home/bill-under-collection/nonlcSight"])

  }
  nonlcUsance() {
    console.log("nonlcUsance")
    this.router.navigate(["/home/bill-under-collection/nonlcUsance"])

  }

  lcInland() {
    console.log("nonlcUsance")
    this.router.navigate(["/home/lc-isurence/inland"])
  }
  
  lcImport() {
    console.log("nonlcUsance")
    this.router.navigate(["/home/lc-isurence/import"])
  }
}
