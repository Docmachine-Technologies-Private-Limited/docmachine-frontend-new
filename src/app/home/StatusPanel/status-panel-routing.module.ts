import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberGuard } from '../../service/RolePermission/Member/member.guard';
import { RejectPanelComponent } from './reject-panel/reject-panel.component';
import { PendingPanelComponent } from './pending-panel/pending-panel.component';
import { ApprovalPanelComponent } from './approval-panel/approval-panel.component';

const routes: Routes = [
  { path: "approvalpanel", component: ApprovalPanelComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "pendingpanel", component: PendingPanelComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "rejectpanel", component: RejectPanelComponent, pathMatch: "full", canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusPanelRoutingModule { }
