import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-buyers-credit-request',
  templateUrl: './buyers-credit-request.component.html',
  styleUrls: ['./buyers-credit-request.component.scss']
})
export class BuyersCreditRequestComponent implements OnInit {
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = "";
  public allTransactions: any = [];
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  myRadio: any;

  piPoForm = new FormGroup({
    pi_poNo: new FormControl(""),
    benneName: new FormControl(""),
    currency: new FormControl(""),
    amount: new FormControl(""),
    incoterm: new FormControl(""),
    lastDayShipment: new FormControl(""),
    paymentTerm: new FormControl(""),
    pcRefNo: new FormControl(""),
  });
  url: any;
  file: any;
  beneDetail: any;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    console.log("hello")
  }

  ngOnInit(): void {
    //window.location.reload();

    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.showInvoice = false;
      console.log("hello")
    });
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response", res), (this.item1 = res.data);
      },
      (err) => console.log(err)
    );
    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.beneDetail = res.data),
          console.log("Benne Detail", this.beneDetail);
      },
      (err) => console.log("Error", err)
    );

    this.documentService.getBcTask({ file: "buyerCredit" }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  // getTransactions(selectedRowValues) {
  //   this.documentService.getLcTask({ pi_poNo: selectedRowValues, file:this.file }).subscribe(
  //     (res: any) => {
  //       this.allTransactions = res.task;
  //       console.log("ALL TRANSACTIONS", this.allTransactions);
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  getInvoices(selectedRowValues, i) {
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    this.lastIndex = i;
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  onExport() {
    this.export = !this.export;
  }

  onImport() {
    this.import = !this.import;
  }
  exBill() {
    this.Ax1 = !this.Ax1;
  }
  withBill() {
    this.Ax2 = !this.Ax2;
  }

  onNewTrans() {
    this.step1 = !this.step1;
  }

  toggleStep1() {
    this.step1 = false;
    this.showPdf = false;
  }

  // getTrasactions() {
  //   const data: any = this.documentService.getTask();
  //   this.allTransactions = data.task;
  // }

  viewTask(data) {
    console.log(data)
    console.log(data.beneDetail.beneName)


    if (!data.completed) {
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (data.bank == 'yesBank') {
        this.router.navigate(['home/tradeRequestLetter', data.beneDetail.beneName]);
      }
      else if (data.bank == 'axisBank') {
        this.router.navigate(['home//buyersCreditAxis', data.beneDetail.beneName]);
      }


    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }

  }

  showThisPdf() {
    this.documentService.draft = false;
    console.log(this.selectedDoc)

    if (this.myRadio == 'axisBank') {
      console.log("h");
      this.router.navigate(['home//buyersCreditAxis', this.selectedDoc]);
    }
    else {
      this.router.navigate(['home/tradeRequestLetter', this.selectedDoc]);
    }

  }

}
