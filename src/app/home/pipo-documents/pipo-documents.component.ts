
import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-pipo-documents',
  templateUrl: './pipo-documents.component.html',
  styleUrls: ["../../../sass/application.scss", './pipo-documents.component.scss']
})
export class PipoDocumentsComponent implements OnInit {
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
  url: any;
  file: any;
  doc: string;
  pipo: boolean;
  boe: boolean;
  sb: boolean;
  docu: any;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.documentService.getPipo().subscribe(
        (res: any) => {
          console.log("HEre Response", res), (this.item1 = res.data);
        },
        (err) => console.log(err)
      );

      this.showInvoice = false;
      console.log("hello")
    });




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
    console.log(selectedRowValues.doc);
    this.lastIndex = i;
    //this.docu = selectedRowValues.doc;
    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
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
    if (!data.completed) {
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
      } else {
        console.log(this.selectedDoc);
        this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);

      }

    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }

  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    if (parseInt(this.selectedRow.amount) < 200000) {
      this.documentService.pdfData = this.selectedRow;
      this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
    } else {
      console.log(this.selectedDoc);


      this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);

    }
  }
}
