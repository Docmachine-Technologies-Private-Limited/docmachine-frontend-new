import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportTransactionRoutingModule } from './export-transaction-routing.module';
import { BillLodgementComponent } from './bill-lodgement/bill-lodgement.component';
import { PackingCreditComponent } from './packing-credit/packing-credit.component';
import { NewDirectDispatchComponent } from './New-Direct-Dispatch/New-Direct-Dispatch.component';
import { UploadDocComponent } from './export-home/upload-doc/upload-doc.component';
import { ExportHomeComponent } from './export-home/export-home.component';
import { SharedHomeModule } from '../../shared-home.module';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { PackingCreditRequestComponent } from './Packing-Credit-Request/Packing-Credit-Request.component';
import { NewExportHomeTransactionComponent } from './export-home/new-export-home-transaction/new-export-home-transaction.component';
import { NewExportBillLodgementComponent } from './new-export-bill-lodgement/new-export-bill-lodgement.component';
import { ExportBillLodgementControllerData } from './Controller/Export-Bill-Lodgement-Controller';

@NgModule({
  declarations: [
    BillLodgementComponent,
    PackingCreditComponent,
    NewDirectDispatchComponent,
    UploadDocComponent,
    ExportHomeComponent,
    TransactionDashboardComponent,
    PackingCreditRequestComponent,
    NewExportHomeTransactionComponent,
    NewExportBillLodgementComponent
  ],
  providers:[ExportBillLodgementControllerData],
  imports: [
    CommonModule,
    SharedHomeModule,
    ExportTransactionRoutingModule,
  ]
})
export class ExportTransactionModule { }
