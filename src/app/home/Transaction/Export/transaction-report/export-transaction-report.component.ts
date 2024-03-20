import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../service/document.service';

@Component({
  selector: 'export-transaction-report',
  templateUrl: './export-transaction-report.component.html',
  styleUrls: ['./export-transaction-report.component.scss']
})
export class ExportTransactionReportComponent implements OnInit {

  constructor(public apiservice: DocumentService) { }

  ngOnInit(): void {
    this.apiservice.getLCTransaction().subscribe((res: any) => {
      console.log(res, "getLCTransaction")
    })
  }

}
