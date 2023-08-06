import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportTransactionRoutingModule } from './import-transaction-routing.module';

import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance/add-advance-outward-remittance.component';
import { AddAdvanceOutwardRemittanceA2Component } from './add-advance-outward-remittance-a2/add-advance-outward-remittance-a2.component';
import { ImportDirectPaymentComponent } from './Import-Direct-Payment/Import-Direct-Payment.component';
import { BuyerCreditPanelComponent } from './BuyerCreditPanel/Buyer-Credit-Panel.component';
import { SharedHomeModule } from '../../shared-home.module';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';

@NgModule({
  declarations: [
    AddAdvanceOutwardRemittanceComponent,
    AddAdvanceOutwardRemittanceA2Component,
    ImportDirectPaymentComponent,
    BuyerCreditPanelComponent,
    TransactionDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedHomeModule,
    ImportTransactionRoutingModule
  ]
})
export class ImportTransactionModule { }
