import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomConfirmDialogModelComponent } from 'src/app/custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { DocumentService } from 'src/app/service/document.service';
import { UserService } from 'src/app/service/user.service';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-pending-panel',
  templateUrl: './pending-panel.component.html',
  styleUrls: ['./pending-panel.component.scss']
})
export class PendingPanelComponent implements OnInit {
  DATA_CREATE: any = [];
  USER_DETAILS: any = [];
  constructor(public wininfo: WindowInformationService, public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public documentService: DocumentService, public dialog: MatDialog, private sanitizer: DomSanitizer, public userserivce: UserService,) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270, '.content_top_common')
    this.userserivce.getUserDetail().then((status) => {
      this.USER_DETAILS = status['result'];
      console.log(this.USER_DETAILS, 'USER_DETAILS');

      this.documentService.getPendingStatus(this.USER_DETAILS?.sideMenu).subscribe((status) => {
        this.DATA_CREATE = status;
        if (this.USER_DETAILS?.RoleCheckbox != 'Checker') {
          this.documentService.getVerifyStatus(this.USER_DETAILS?.sideMenu).subscribe((status2: any) => {
            for (let index = 0; index < status2.length; index++) {
              this.DATA_CREATE.push(status2[index]);
            }
          })
        }
        console.log(this.DATA_CREATE, 'statusstatusstatusstatusstatus');
      })
    })

  }

  Approved(data: any, index: any) {
    if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
      var download = {
        _id: data['id'],
        status: data['status'],
        deleteflag: data['deleteflag']
      }
      this.documentService.setDownloadStatus(download).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        this.ngOnInit();
      });
    } else {
      const message = `Are you sure you want to delete this?`;
      const dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.documentService.DeleteStatus(data).subscribe((status) => {
            console.log(status, 'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
            this.ngOnInit();
          })
        }
      });
    }

  }
  Reject(data: any, index: any) {
    if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
      var download = {
        _id: data['id'],
        status: data['status'],
        deleteflag: '3'
      }
      this.documentService.setDownloadStatus(download).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        this.ngOnInit();
      });
    } else {
      this.CustomConfirmDialogModel.InputConfirmDialogModel('Please insert your comments', 'Comments', (res: any) => {
        data['status'] = 'Rejected'
        data['comment'] = res.value
        this.documentService.RejectedStatus(data).subscribe((status) => {
          console.log(status, 'Rejeeced');
          this.ngOnInit();
        })
      });
    }
  }
  openView(url: any, index: any) {
    console.log(url, 'sdfgsfhsdgfdfsd')
    var temp: any = [];
    if (url!=undefined && url!='') {
      if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
        for (let index = 0; index < url.length; index++) {
          this.userserivce.mergePdf(url[index]).subscribe((res: any) => {
            console.log('downloadEachFile', res);
            res.arrayBuffer().then((data: any) => {
              temp.push(data)
              console.log('mergePdf_downloadEachFile',data);
            });
          });
          if ((index+1)==url.length) {
            this.CustomConfirmDialogModel.IframeConfirmDialogModel('View',temp,this.DATA_CREATE[index]?.status == 'Approved' ? true : false, null);
          }
        }
      } else {
        this.userserivce.mergePdf(url).subscribe((res: any) => {
          console.log('downloadEachFile', res);
          res.arrayBuffer().then((data: any) => {
            temp.push(data)
            console.log('mergePdf_downloadEachFile',data);
          });
          this.CustomConfirmDialogModel.IframeConfirmDialogModel('View', temp,this.DATA_CREATE[index]?.status == 'Approved' ? true : false, null);
        });
      }
    } else {
      this.CustomConfirmDialogModel.ConfirmDialogModel('Pdf View','Pdf not found!', null);
    }

  }
}
