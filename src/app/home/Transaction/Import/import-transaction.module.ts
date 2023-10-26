import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportTransactionRoutingModule } from './import-transaction-routing.module';
import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance/add-advance-outward-remittance.component';
import { AddAdvanceOutwardRemittanceA2Component } from './add-advance-outward-remittance-a2/add-advance-outward-remittance-a2.component';
import { ImportDirectPaymentComponent } from './Import-Direct-Payment/Import-Direct-Payment.component';
import { BuyerCreditPanelComponent } from './BuyerCreditPanel/Buyer-Credit-Panel.component';
import { SharedHomeModule } from '../../shared-home.module';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { NewLcInsuranceComponent } from './new-lc-insurance/new-lc-insurance.component';
import { LcInsuranceFormatComponent } from './new-lc-insurance/lc-insurance-format/lc-insurance-format.component';
import { BOE_ORMMMatchOffComponent } from './BOEORMmatch-off/BOE_ORMmatch-off.component';
import { BOEORMMactchData } from './BOEORMmatch-off/BOE-ORM-Mactch-data';
import { NewAdvanceImportPaymentsComponent } from './new-advance-import-payments/new-advance-import-payments.component';
import { NewCollectionImportPaymentsComponent } from './new-collection-import-payments/new-collection-import-payments.component';
import { NewLCImportPaymentsComponent } from './new-lcimport-payments/new-lcimport-payments.component';
import { NewDirectImportPaymentsComponent } from './new-direct-import-payments/new-direct-import-payments.component';

@NgModule({
  declarations: [
    AddAdvanceOutwardRemittanceComponent,
    AddAdvanceOutwardRemittanceA2Component,
    ImportDirectPaymentComponent,
    BuyerCreditPanelComponent,
    TransactionDashboardComponent,
    NewLcInsuranceComponent,
    LcInsuranceFormatComponent,
    BOE_ORMMMatchOffComponent,
    NewAdvanceImportPaymentsComponent,
    NewCollectionImportPaymentsComponent,
    NewLCImportPaymentsComponent,
    NewDirectImportPaymentsComponent
  ],
  providers:[BOEORMMactchData],
  imports: [
    CommonModule,
    SharedHomeModule,
    ImportTransactionRoutingModule,
  ]
})
export class ImportTransactionModule { }
