import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomConfirmDialogModelComponent } from 'src/app/custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { DocumentService } from 'src/app/service/document.service';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-pending-panel',
  templateUrl: './pending-panel.component.html',
  styleUrls: ['./pending-panel.component.scss']
})
export class PendingPanelComponent implements OnInit {
  DATA_CREATE:any=[];
  constructor(public wininfo: WindowInformationService,public CustomConfirmDialogModel:CustomConfirmDialogModelComponent,
    public documentService: DocumentService,public dialog: MatDialog, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')
    this.documentService.getPendingStatus().subscribe((status) => {
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
        data['status'] ='Approved'
        this.documentService.DeleteStatus(data).subscribe((status) => {
            console.log(status,'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
            this.ngOnInit();
        })
      }
    });
  }
  Reject(data:any){
    this.CustomConfirmDialogModel.InputConfirmDialogModel('Please insert your comments','Comments',(res:any) => {
        data['status'] ='Rejected'
        data['comment']=res.value.value
        this.documentService.RejectedStatus(data).subscribe((status) => {
            console.log(status,'Rejeeced');
            this.ngOnInit();
        })
    });
  }
  openView(url){
    console.log(url,'sdfgsfhsdgfdfsd')
    var publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.CustomConfirmDialogModel.IframeConfirmDialogModel('View',publicUrl,null);
  }
}
