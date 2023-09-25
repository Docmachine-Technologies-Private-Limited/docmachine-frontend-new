import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { BillLodgementComponent } from './bill-lodgement/bill-lodgement.component';
import { NewDirectDispatchComponent } from './New-Direct-Dispatch/New-Direct-Dispatch.component';
import { UploadDocComponent } from './export-home/upload-doc/upload-doc.component';
import { ExportHomeComponent } from './export-home/export-home.component';
import { PackingCreditRequestComponent } from './Packing-Credit-Request/Packing-Credit-Request.component';
import { TransactionDashboardComponent } from './transaction-dashboard/transaction-dashboard.component';
import { NewExportHomeTransactionComponent } from './export-home/new-export-home-transaction/new-export-home-transaction.component';
import { NewExportBillLodgementComponent } from './new-export-bill-lodgement/new-export-bill-lodgement.component';

const routes: Routes = [
  { path: "bill-lodgement", component: BillLodgementComponent, canActivate: [MemberGuard] },
  { path: "Packing-Credit-Request-New", component: PackingCreditRequestComponent, canActivate: [MemberGuard] },
  { path: "direct-dispatch", component: NewDirectDispatchComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "new-direct-dispatch", component: NewExportBillLodgementComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "export-home", component: NewExportHomeTransactionComponent, canActivate: [MemberGuard] },
  { path: "export-home/:id", component: ExportHomeComponent, canActivate: [MemberGuard] },
  { path: "Pdf-Upload", component: UploadDocComponent },
  { path: "Transaction-Dashboard/:id", component: TransactionDashboardComponent, pathMatch: "full", canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportTransactionRoutingModule { }
