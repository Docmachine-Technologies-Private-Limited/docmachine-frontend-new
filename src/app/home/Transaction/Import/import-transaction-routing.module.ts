import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance/add-advance-outward-remittance.component';
import { AddAdvanceOutwardRemittanceA2Component } from './add-advance-outward-remittance-a2/add-advance-outward-remittance-a2.component';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { ImportDirectPaymentComponent } from './Import-Direct-Payment/Import-Direct-Payment.component';
import { BuyerCreditPanelComponent } from './BuyerCreditPanel/Buyer-Credit-Panel.component';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { NewLcInsuranceComponent } from './new-lc-insurance/new-lc-insurance.component';
import { BOE_ORMMMatchOffComponent } from './BOEORMmatch-off/BOE_ORMmatch-off.component';
import { NewAdvanceImportPaymentsComponent } from './new-advance-import-payments/new-advance-import-payments.component';
import { NewDirectImportPaymentsComponent } from './new-direct-import-payments/new-direct-import-payments.component';

const routes: Routes = [
  {
    path: "add-advance-outward-remittance",
    component: NewAdvanceImportPaymentsComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  {
    path: "add-advance-outward-remittance-a2",
    component: AddAdvanceOutwardRemittanceA2Component,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  {
    path: "Import-Direct-Payment",
    component: NewDirectImportPaymentsComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  {
    path: "Buyer-Credit-Panel",
    component: BuyerCreditPanelComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  {
    path: "BOE-ORM-Macth-Off",
    component: BOE_ORMMMatchOffComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  { path: "Transaction-Dashboard/:id", component: TransactionDashboardComponent, pathMatch: "full", canActivate: [MemberGuard] },          
  { path: "lc-isurance", component: NewLcInsuranceComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Transaction/:file", component: NewAdvanceImportPaymentsComponent, pathMatch: "full", canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportTransactionRoutingModule { }
