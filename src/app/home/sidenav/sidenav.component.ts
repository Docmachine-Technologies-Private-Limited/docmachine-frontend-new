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
  styleUrls: ["../../../sass/application.scss", "./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  // mt: boolean;
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
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;
  status10: boolean = false;
  status11: boolean = false;
  status12: boolean = false;
  status13: boolean = false;
  status14: boolean = false;
  status15: boolean = false;
  status16: boolean = false;
  status17: boolean = false;
  status18: boolean = false;
  status19: boolean = false;
  mt1: any;
  mt2: any;
  nt1: boolean;
  billuc1: boolean;
  mt3: boolean;
  mt4: any;
  val: Object;
  customer: any;
  new:  boolean = false;
  new1: boolean = false;
  new2: boolean = false;
  new3: boolean = false;
  new4: boolean = false;
  new5: boolean = false;
  new7: boolean = false;
  new6: boolean = false;
  new8: boolean = false;
  new9: boolean = false;
  new10: boolean = false;
  new11: boolean = false;
  new12: boolean = false;
  new13: boolean = false;
  new14: boolean;
  new15: boolean;
  new16: boolean;
  new17: boolean;
  new19: boolean;
  new18: boolean;

  constructor(

    public router: Router,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard,
    private documentService: DocumentService,
    public userService: UserService,
    private toastr: ToastrService,
    private sharedData : SharedDataService
  ) {

    // this.sharedData.currentDashBoard.subscribe(message => this.status5 = message)
    // this.sharedData.currentExport.subscribe(message => this.status7 = message)


     this.newHight()
    }

  async ngOnInit() {

    console.log("side nav")
    this.id = await this.userService.getUserDetail();
    console.log(this.id)
    this.name = this.id.result.fullName
    if (this.id.result.emailId == 'tramsdocmachine@gmail.com' || this.id.result.emailId == 'docmachinetec@gmail.com' || this.id.result.emailId == 'fintech.innovations2021@gmail.com') {
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

  // public manageTask() {
  //   this.mt = !this.mt;
  // }

  public manageTask1() {
    this.mt1 = !this.mt1;
  }

  public viewDocument() {
    this.view = !this.view;

  }
  public idpmsTask() {
    this.mt3 = !this.mt3;
  }

  public edpmsTask() {
    this.mt4 = !this.mt4;
  }
  newHight(){
    if(this.router.url == '/home/dashboardTask'){
      this.status5 = true;
    }
    else if(this.router.url == '/home/pipoDocExport'){
      this.new = true;
      this.status7 = true;

    }
    else if(this.router.url == '/home/viewDocument/sb'){
      this.new1 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/creditNote'){
      this.new2 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/debitNote'){
      this.new3 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/insuranceDocument'){
      this.new4 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/letterOfCredit-LC'){
      this.new5 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/master-services'){
      this.new6 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/try-Party'){
      this.new7 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/opinion-report'){
      this.new8 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/exportHome'){
      this.new9 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/billLodgement'){
      this.new10 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/billLodgement'){
      this.new11 = true;
      this.status7 = true;
    }

    else if(this.router.url == '/home/packingCreditRequest'){
      this.new12 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/packingCreditRequest'){
      this.new13 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/inwardRemittanceAdvice'){
      this.new14 = true;
      this.status7 = true;
    }
    else if(this.router.url == '/home/upload'){
      this.status6 = true;
    }
    // else if(this.router.url == '/home/upload' , { file: 'export', document: 'pipo' }){
    //   this.status6 = true;
    //   this.new = false;
    //   this.status7 = false;
    // }
    else if(this.router.url == '/home/manageUser'){
      this.status8 = true;
    }
    else if(this.router.url == '/home/manageCustomer/import'){
      this.status10 = true;
      this.new15 = true;
    }
    else if(this.router.url == '/home/manageCustomer/export'){
      this.status10 = true;
      this.new16 = true;
    }
    else if(this.router.url == '/home/viewDocument/sb'){
      this.status11 = true;
      this.new17 = true;
    }
    else if(this.router.url == '/home/viewDocument/boe'){
      this.status11 = true;
      this.new18 = true;
    }
    else if(this.router.url == '/home/viewDocument/pipo'){
      this.status11 = true;
      this.new19 = true;
    }
    else if(this.router.url == '/home/help'){
      this.status12 = true;
    }
    else if(this.router.url == '/home/t&c'){
      this.status17 = true;
    }
    else if(this.router.url == '/home/account'){
      this.status14 = true;
    }
    else if(this.router.url == '/home/pipoDoc'){
      this.status = true;
      this.status4 = true;
    }

  }

  public newTask() {
    this.status = true;
    this.router.navigate(["home/pipoDoc"]);
  }
  //export dropdown highlight
  public newTask4(){
    this.status4 = true;
    this.status5  = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9    = false;
    this.status10   = false;
    this.status11   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;

  }
  public newTask5(){
  this.status5 = true;
  this.status4  = false;
  this.status6    = false;
  this.status7    = false;
  this.status8    = false;
  this.status9    = false;
  this.status10   = false;
  this.status11   = false;
  this.status12   = false;
  this.status13   = false;
  this.status14   = false;
  this.status15   = false;
  this.status16   = false;
  this.status17   = false;
  this.status18   = false;
  // this.sharedData.changeDashboard(true)
  }
  public newTask6(){
    this.status6 = true;
    this.status4  = false;
  this.status5    = false;
  this.status7    = false;
  this.status8    = false;
  this.status9    = false;
  this.status10   = false;
  this.status11   = false;
  this.status12   = false;
  this.status13   = false;
  this.status14   = false;
  this.status15   = false;
  this.status16   = false;
  this.status17   = false;
  this.status18   = false;
  }
  public newTask7(){
    this.router.navigate(["home/pipoDocExport"]);
    this.status7 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status8    = false;
    this.status9    = false;
    this.status10   = false;
    this.status11   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
    // this.sharedData.changeExport(true)
  }
  public newTask8(){
    this.router.navigate(["/home/manageUser"])
    this.status8 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status9    = false;
    this.status10   = false;
    this.status11   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;

  }
  public newTask9(){
    this.status9 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status10   = false;
    this.status11   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask10(){
    this.status10 = !this.status10;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask11(){
    this.status11 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask12(){
    this.status12 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask13(){
    this.status13 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask14(){
    this.status14 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status15   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask15(){
    this.status15 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status16   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask16(){
    this.status16 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status17   = false;
    this.status18   = false;
  }
  public newTask17(){
    this.status17 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   = false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status16   = false;
    this.status18   = false;

  }
  public newTask18(){
    this.status18 = true;
    this.status4  = false;
    this.status5    = false;
    this.status6    = false;
    this.status7    = false;
    this.status8    = false;
    this.status9   =  false;
    this.status11   = false;
    this.status10   = false;
    this.status12   = false;
    this.status13   = false;
    this.status14   = false;
    this.status15   = false;
    this.status17   = false;
    this.status16   = false;
  }
  public newTask19(){
    this.status2 = !this.status2;
  }
 //export dropdown highlite

  public newTask1() {
    this.nt1 = !this.nt1;
    this.router.navigate(["home/pipoDocExport"]);
    this.new = true;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub1() {
    this.router.navigate(["/home/viewDocument/sb"]);
    this.new1 = true;
    this.new = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;

  }
  public newSub2() {
    this.router.navigate(["/home/creditNote"]);
    this.new2 = true;
    this.new = false;
    this.new1 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub3() {
    this.router.navigate(["/home/debitNote"]);
    this.new3 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new4 = false;
    this.new5 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;

  }
  public newSub4() {
    this.router.navigate(["home/insuranceDocument"]);
    this.new4 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new5 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub5() {
    this.router.navigate(["/home/letterOfCredit-LC"]);
    this.new5 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new6 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;

  }
  public newSub6() {
    this.router.navigate(["/home/master-services"]);
    this.new6 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;

  }
  public newSub7() {
    this.router.navigate(["/home/try-Party"]);
    this.new7 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new6 = false;
    this.new8 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub8() {
    this.router.navigate(["/home/opinion-report"]);
    this.new8 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub9() {
    this.router.navigate(["/home/exportHome"]);
    this.new9 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new8 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub10() {
    this.router.navigate(["/home/billLodgement"]);
    this.new10 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new8 = false;
    this.new11 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub11() {
    this.router.navigate(["/home/billLodgement"]);
    this.new11 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new8 = false;
    this.new12 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub12() {
    this.router.navigate(["/home/packingCreditRequest"]);
    this.new12 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new8 = false;
    this.new13 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub13() {
    this.router.navigate(["/home/packingCreditRequest"]);
    this.new13 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new14 = false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub14() {
    this.router.navigate(["/home/inwardRemittanceAdvice"]);
    this.new14 = true;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
    this.new16 = false;
    this.new15 = false;
  }
  public newSub15() {
    this.router.navigate(["/home/manageCustomer/import"]);
    this.new15 = true;
    this.new14 = false;
    this.new16 = false;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
  }
  public newSub16() {
    this.router.navigate(["/home/manageCustomer/export"]);
    this.new16 = true;
    this.new15 = false;
    this.new14 = false;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
  }
  public newSub17() {
    this.router.navigate(["/home/viewDocument/sb"]);
    this.new17 = true;
    this.new18 = false;
    this.new19 = false;
    this.new15 = false;
    this.new14 = false;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
  }
  public newSub18() {
    this.router.navigate(["/home/viewDocument/boe"]);
    this.new18 = true;
    this.new17 = false;
    this.new19 = false;
    this.new15 = false;
    this.new14 = false;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
  }
  public newSub19() {
    this.router.navigate(["/home/viewDocument/pipo"]);
    this.new19 = true;
    this.new18 = false;
    this.new17 = false;
    this.new15 = false;
    this.new14 = false;
    this.new = false;
    this.new1 = false;
    this.new2 = false;
    this.new3 = false;
    this.new4 = false;
    this.new5 = false;
    this.new7 = false;
    this.new9 = false;
    this.new10 = false;
    this.new11 = false;
    this.new12 = false;
    this.new8 = false;
    this.new13= false;
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

  customerClick() {
    this.customer = !this.customer
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
