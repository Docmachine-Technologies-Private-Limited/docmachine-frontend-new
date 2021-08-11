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
  constructor(
    public documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response", res), (this.item1 = res.data);
      },
      (err) => console.log(err)
    );
  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: "advance" }).subscribe(
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
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  onItemChange(value) {
    console.log(" Value is : ", value);
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
    if (!data.completed) {
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (data.bank == "yesBank") {
        if (parseInt(data.pipoDetail.amount) < 200000) {
          this.documentService.pdfData = this.selectedRow;
          this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
        } else {
          console.log(this.selectedDoc);
          this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);

        }
      }
      else {
        if (parseInt(data.pipoDetail.amount) < 200000) {
          console.log("h1");
          this.documentService.pdfData = this.selectedRow;
          this.router.navigateByUrl(`/home/advance-remittance/${data.pi_poNo}`);
        } else {
          console.log(this.selectedDoc);
          console.log("h2");
          console.log("pipo", data.pi_poNo);
          this.router.navigateByUrl(`/home/advance-remittance-fbg/${data.pi_poNo}`);

        }
      }


    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }

  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    console.log(this.myRadio)
    if (this.myRadio == 'axisBank') {
      console.log("h");
      if (parseInt(this.selectedRow.amount) < 200000) {
        console.log("h1");
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/advance-remittance/${piPo}`);
      } else {
        console.log(this.selectedDoc);
        console.log("h2");
        console.log("pipo", piPo);
        this.router.navigateByUrl(`/home/advance-remittance-fbg/${piPo}`);

      }
    }
    else {
      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
      } else {
        console.log(this.selectedDoc);


        this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);

      }
    }

  }
}