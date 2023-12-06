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
import { NewLCImportPaymentsComponent } from './new-lcimport-payments/new-lcimport-payments.component';
import { NewAdvanceImportPaymentsComponent } from './Bank/FEDRAL_BANK/new-advance-import-payments/new-advance-import-payments.component';
import { NewCollectionImportPaymentsComponent } from './Bank/FEDRAL_BANK/new-collection-import-payments/new-collection-import-payments.component';
import { NewDirectImportPaymentsComponent } from './Bank/FEDRAL_BANK/new-direct-import-payments/new-direct-import-payments.component';
import { NewAdvanceOutwardRemittanceA2Component } from './Bank/FEDRAL_BANK/new-advance-outward-remittance-a2/new-advance-outward-remittance-a2.component';
import { NewBuyerCreditTransactionComponent } from './Bank/FEDRAL_BANK/new-buyer-credit-transaction/new-buyer-credit-transaction.component';
import { NewFLCApplicationComponent } from './Bank/FEDRAL_BANK/new-flc-application/new-flc-application.component';
import { AdvanceOutwardRemittanceControllerData } from './Controller/Advance-Outward-Remittance-Controller';
import { A2AdvanceOutwardRemittanceControllerData } from './Controller/A2-Advance-Outward-Remittance-Controller';
import { DirectPaymentsControllerData } from './Controller/Direct-Payments-Controller';
import { ImportBillLodgementComponent } from './Bank/FEDRAL_BANK/import-bill-lodgement/import-bill-lodgement.component';
import { ImportHomeComponent } from './Bank/FEDRAL_BANK/import-home/import-home.component';
import { NewImportHomeTransactionComponent } from './Bank/FEDRAL_BANK/import-home/new-import-home-transaction/new-import-home-transaction.component';

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
    NewDirectImportPaymentsComponent,
    NewAdvanceOutwardRemittanceA2Component,
    NewBuyerCreditTransactionComponent,
    NewFLCApplicationComponent,
    ImportBillLodgementComponent,
    ImportHomeComponent,
    NewImportHomeTransactionComponent
  ],
  providers: [
    BOEORMMactchData,
    AdvanceOutwardRemittanceControllerData,
    A2AdvanceOutwardRemittanceControllerData,
    DirectPaymentsControllerData
  ],
  imports: [
    CommonModule,
    SharedHomeModule,
    ImportTransactionRoutingModule,
  ]
})
export class ImportTransactionModule { }
