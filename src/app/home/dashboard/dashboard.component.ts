import { DocumentService } from './../../service/document.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../sass/application.scss', './dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public tableWidth;
  public export = false;
  public import = false;
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  constructor(private documentService: DocumentService) {
    this.showInvoice = false;
    this.tableWidth = '100%';
  }

  ngOnInit(): void {
    this.documentService.getMaster(this.user)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'])
          this.item1 = data['data']
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        error => {
          console.log("error")
        });

    this.documentService.getBoe(this.user)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'])
          this.item2 = data['data']
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        error => {
          console.log("error")
        });

  }
  getInvoices(selectedRowValues) {
    console.log(selectedRowValues)

    return (this.selectedRow = selectedRowValues, this.showInvoice = true, this.tableWidth = '30%');

  }
  onExport() {
    this.export = !this.export
  }

  onImport() {
    this.import = !this.import
  }
  exBill() {
    this.Ax1 = !this.Ax1
  }
  withBill() {
    this.Ax2 = !this.Ax2
  }
  onNewTrans() {
    this.step1 = !this.step1;
  }

}