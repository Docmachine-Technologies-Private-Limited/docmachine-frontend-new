import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-outward-remittance",
  templateUrl: "./outward-remittance.component.html",
  styleUrls: ["./outward-remittance.component.scss"],
})
export class OutwardRemittanceComponent implements OnInit {
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
  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log(res), (this.item1 = res.data);
      },
      (err) => console.log(err)
    );
  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  getInvoices(selectedRowValues, i) {
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    this.lastIndex = i;
    return (
      (this.selectedRow = selectedRowValues),
      (this.documentService.showInvoice = true),
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
    data.pipoDetail["draft"] = true;
    data.pipoDetail["_id"] = data._id;
    this.documentService.pdfData = data.pipoDetail;
    this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
    console.log("PIPO NO", data);
  }

  showThisPdf(piPo) {
    if (parseInt(this.selectedRow.amount) < 200000) {
      this.documentService.pdfData = this.selectedRow;
      this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
    } else {
      console.log(this.selectedDoc);
      if (this.selectedDoc === "bankDocument") {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
      } else if (this.selectedDoc === "FBG") {
        this.documentService.pdfData = this.selectedRow;

        this.router.navigateByUrl(`/home/fbg-wavier`);
      }
    }
  }
}
