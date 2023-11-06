import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance/add-advance-outward-remittance.component';
import { AddAdvanceOutwardRemittanceA2Component } from './add-advance-outward-remittance-a2/add-advance-outward-remittance-a2.component';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { ImportDirectPaymentComponent } from './Import-Direct-Payment/Import-Direct-Payment.component';
import { BuyerCreditPanelComponent } from './BuyerCreditPanel/Buyer-Credit-Panel.component';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { NewLcInsuranceComponent } from './new-lc-insurance/new-lc-insurance.component';

const routes: Routes = [
  {
    path: "add-advance-outward-remittance",
    component: AddAdvanceOutwardRemittanceComponent,
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
    component: ImportDirectPaymentComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  {
    path: "Buyer-Credit-Panel",
    component: BuyerCreditPanelComponent,
    pathMatch: "full",
    canActivate: [MemberGuard]
  },
  { path: "Transaction-Dashboard/:id", component: TransactionDashboardComponent, pathMatch: "full", canActivate: [MemberGuard] },          
  { path: "lc-isurance", component: NewLcInsuranceComponent, pathMatch: "full", canActivate: [MemberGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportTransactionRoutingModule { }
