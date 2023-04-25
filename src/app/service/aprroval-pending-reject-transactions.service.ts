import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from './document.service';
import { UserService } from './user.service';
import { WindowInformationService } from './window-information.service';
import { CustomConfirmDialogModelComponent } from '../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
@Injectable({
  providedIn: 'root'
})
export class AprrovalPendingRejectTransactionsService {
  USER_DATA: any = [];

  constructor(public documentService: DocumentService, private userService: UserService, public dialog: MatDialog,
    public wininfo: WindowInformationService, public CustomConfirmDialogModel: CustomConfirmDialogModelComponent) { }


  deleteByRole_PI_PO_Type(RoleCheckbox: string, id: any, index: any, data: any, callback: any) {
    if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments', 'Comments', (res: any) => {
        var approval_data: any = data;
        approval_data['comment'] = res.value.value;
        this.documentService.deletflagPiPo({ id: id, deleteflag: -1 }).subscribe((res: any) => {
          this.documentService.adddeletflag(approval_data).subscribe((r: any) => {
            if (callback != null && callback != undefined) {
              callback();
            }
          })
        })
      });
    }
  }
  DownloadByRole_Transaction_Type(roleType: string, data: any, callback: any) {
    console.log('DownloadByRole_Transaction_Type')
    if (roleType == 'Maker' || roleType == 'Checker') {
      this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments', 'Comments', (res: any) => {
        var approval_data: any = data;
        approval_data['comment'] = res.value.value;
        this.documentService.adddeletflag(approval_data).subscribe((r: any) => {
          if (callback != null && callback != undefined) {
            callback();
          }
        })
      });
    } else {
      this.CustomConfirmDialogModel.Confirm_DialogModel("Approver can't access this feature",
        'You have not access send for download pdf <br> please login maker/checker email id...');
    }
  }
  truefalse(condition) {
    if (condition) {
      return '';
    }
    return 'none';
  }
}
