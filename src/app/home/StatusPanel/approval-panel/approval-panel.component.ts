import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from 'src/app/service/document.service';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-approval-panel',
  templateUrl: './approval-panel.component.html',
  styleUrls: ['./approval-panel.component.scss']
})
export class ApprovalPanelComponent implements OnInit {
  DATA_CREATE:any=[];
  APPROVED_DATA:any=[];
  constructor(public wininfo: WindowInformationService,public documentService: DocumentService,public dialog: MatDialog) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')
    this.documentService.getApprovedStatus().subscribe((status) => {
      this.DATA_CREATE=status;
        console.log(status,'statusstatusstatusstatusstatus');
    })
  }

  Approved(data:any){
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.documentService.DeleteStatus(data).subscribe((status) => {
            console.log(status,'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
            this.ngOnInit();
        })
      }
    });
  }
  Reject(data:any){
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.documentService.DeleteStatus(data).subscribe((status) => {
            console.log(status,'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
            this.ngOnInit();
        })
      }
    });
  }
  detailsViewdata:any=[];
  detailsView(id:any,dump:any){
    this.detailsViewdata=this.DATA_CREATE[id];
    console.log(this.detailsViewdata,'detailsViewdata')
  }
}
