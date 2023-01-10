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
  USER_DATA:any=[];

  constructor(public documentService: DocumentService, private userService: UserService, public dialog: MatDialog,
    public wininfo: WindowInformationService,public CustomConfirmDialogModel:CustomConfirmDialogModelComponent) { }


  deleteByRole_PI_PO_Type(roleType:string,id:any,index:any,data:any,callback:any){
     if (roleType=='2'){
      this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments','Comments',(res:any) => {
        var approval_data:any=data;
        approval_data['comments']=res.value.value;
        this.documentService.deletflagPiPo({id:id,deleteflag:-1}).subscribe((res:any)=>{
          this.documentService.adddeletflag(approval_data).subscribe((r:any)=>{
            if (callback!=null && callback!=undefined) {
              callback();
            }
          })
        })
      });
    } else if (roleType=='3'){
      this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments','Comments',(res:any) => {
        var approval_data:any=data;
        approval_data['comments']=res.value.value;
        this.documentService.deletflagPiPo({id:id,deleteflag:-1}).subscribe((res:any)=>{
          this.documentService.adddeletflag(approval_data).subscribe((r:any)=>{
            callback();
          })
        })
      });
    }
  }
  DownloadByRole_Transaction_Type(roleType:string,id:any,index:any,data:any,callback:any){
    if (roleType=='2'){
     this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments','Comments',(res:any) => {
       var approval_data:any=data;
       approval_data['comments']=res.value.value;
         this.documentService.adddeletflag(approval_data).subscribe((r:any)=>{
           if (callback!=null && callback!=undefined) {
             callback();
           }
         })
     });
   } else if (roleType=='3'){
     this.CustomConfirmDialogModel.DropDownConfirmDialogModel('Please insert your comments','Comments',(res:any) => {
       var approval_data:any=data;
       approval_data['comments']=res.value.value;
         this.documentService.adddeletflag(approval_data).subscribe((r:any)=>{
           callback();
         })
     });
   }
 }
}
