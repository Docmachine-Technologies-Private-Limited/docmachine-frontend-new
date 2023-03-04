import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from '../../../service/document.service';
import { UserService } from '../../../service/user.service';
import { WindowInformationService } from '../../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';
@Component({
  selector: 'app-reject-panel',
  templateUrl: './reject-panel.component.html',
  styleUrls: ['./reject-panel.component.scss']
})
export class RejectPanelComponent implements OnInit {
  DATA_CREATE:any=[];
  APPROVED_DATA:any=[];
  USER_DATA:any=[];

  constructor(public wininfo: WindowInformationService,public documentService: DocumentService,public dialog: MatDialog,public userService: UserService) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common');
    this.userService.getUserDetail().then((user:any) => {
      this.USER_DATA=user;
      console.log("this.USER_DATA", this.USER_DATA)
      this.documentService.getRejectStatus(this.USER_DATA?.result?.sideMenu).subscribe((status:any) => {
        this.DATA_CREATE=status;
          console.log(status,'statusstatusstatusstatusstatus');
      })
    });
  }
  detailsViewdata:any=[];
  detailsView(id:any,dump:any){
    this.detailsViewdata=this.DATA_CREATE[id];
    console.log(this.detailsViewdata,'detailsViewdata')
  }

}
