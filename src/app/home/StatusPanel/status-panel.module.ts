import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPanelRoutingModule } from './status-panel-routing.module';
import { SharedHomeModule } from '../shared-home.module';
import { RejectPanelComponent } from './reject-panel/reject-panel.component';
import { PendingPanelComponent } from './pending-panel/pending-panel.component';
import { ApprovalPanelComponent } from './approval-panel/approval-panel.component';

@NgModule({
  declarations: [
    RejectPanelComponent,
    PendingPanelComponent,
    ApprovalPanelComponent
  ],
  imports: [
    CommonModule,
    StatusPanelRoutingModule,
    SharedHomeModule
  ]
})
export class StatusPanelModule { }
