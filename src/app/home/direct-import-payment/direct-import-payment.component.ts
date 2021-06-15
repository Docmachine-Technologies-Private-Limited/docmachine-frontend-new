import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-direct-import-payment',
  templateUrl: './direct-import-payment.component.html',
  styleUrls: ['./direct-import-payment.component.scss']
})
export class DirectImportPaymentComponent implements OnInit {
  public item1;
  public item2;
  public user;
  public selectedRow;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = "";
  public showInvoice = false;
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
    public documentService: DocumentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.documentService.getBoe(1).subscribe(
      (res: any) => {
        console.log(res), (this.item1 = res.data);
      },
      (err) => console.log(err)
    );
  }

  getTransactions(selectedRowValues) {
    console.log("jjsjsjsj")
    this.documentService.getBoeTask({ boeNumber: selectedRowValues }).subscribe(
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
    this.getTransactions(selectedRowValues.boeNumber)
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
    this.getTransactions(selectedRowValues.boeNumber)

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
    // data.pipoDetail["draft"] = true;
    // data.pipoDetail["_id"] = data._id;
    // this.documentService.pdfData = data.pipoDetail;
    // this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
    console.log("PIPO NO", data);
    if(!data.completed) {
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      this.router.navigateByUrl(`/home/inwardRemittanceBoe/${data.boeNumber}`);
      
    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }
  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    this.router.navigateByUrl(`/home/inwardRemittanceBoe/${piPo}`);
      
  }

}
