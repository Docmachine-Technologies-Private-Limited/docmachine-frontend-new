import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportTransactionRoutingModule } from './export-transaction-routing.module';
import { BillLodgementComponent } from './bill-lodgement/bill-lodgement.component';
import { PackingCreditComponent } from './packing-credit/packing-credit.component';
import { NewDirectDispatchComponent } from './New-Direct-Dispatch/New-Direct-Dispatch.component';
import { SubBillLodgementComponent } from './sub-bill-lodgement/sub-bill-lodgement.component';
import { UploadDocComponent } from './export-home/upload-doc/upload-doc.component';
import { ExportHomeComponent } from './export-home/export-home.component';
import { SharedHomeModule } from '../../shared-home.module';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { PackingCreditRequestComponent } from './Packing-Credit-Request/Packing-Credit-Request.component';


@NgModule({
  declarations: [
    BillLodgementComponent,
    PackingCreditComponent,
    NewDirectDispatchComponent,
    SubBillLodgementComponent,
    UploadDocComponent,
    ExportHomeComponent,
    TransactionDashboardComponent,
    PackingCreditRequestComponent
  ],
  imports: [
    CommonModule,
    SharedHomeModule,
    ExportTransactionRoutingModule
  ]
})
export class ExportTransactionModule { }
