
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
import * as xlsx from 'xlsx';
import {Router}from '@angular/router';
import { DocumentService } from 'src/app/service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';


@Component({
  selector: 'app-import-destruction',
  templateUrl: './import-destruction.component.html',
  styleUrls: ['./import-destruction.component.scss']
})

export class ImportDestructionComponent implements OnInit {
  @ViewChild('destruction', { static: false }) destruction: ElementRef;
  public item = [];
  public item1 = [];
  public viewData : any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  filtervisible: boolean = false;
  USER_DATA:any=[];
  
  filter() {
  // this.getPipoData()
  this.filtervisible = !this.filtervisible

}
onclick() {
  this.filtervisible = !this.filtervisible
}

  constructor(
    private documentService : DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private sharedData : SharedDataService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,
  ) { }


  async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    this.item=[];
      this.documentService.getDestructionfile("import").subscribe(
        (res: any) => {
          this.item=res?.data;
          console.log(res,'getDestructionfile');
        },
        (err) => console.log(err)
        );
      }

    openDestruction(content){
    this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
    .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
}

private getDismissReason(reason: any): string {

if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
} else {
  return `with: ${reason}`;
}
}
  getPipoNumbers(data) {
    return data.pipo.map((x) => {return x.pi_poNo;});
  }
viewCN(a){

this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
  a['doc']
);
}

toSave(data, index){
this.optionsVisibility[index] = false;
console.log(data);
this.documentService.updateDestruction(data, data._id ).subscribe(
  (data) => {
    console.log('king123');
    this.toastr.success('Destruction Certificate updated successfully.');

  },
  (error) => {
    // this.toastr.error('Invalid inputs, please check!');
    console.log('error');
  }
);
}
handleDelete(id,index:any) {
  console.log(id,index,'dfsfhsfgsdfgdss');
  const message = `Are you sure you want to delete this?`;
  const dialogData = new ConfirmDialogModel("Confirm Action", message);
  const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {maxWidth: "400px",data: dialogData});
  dialogRef.afterClosed().subscribe(dialogResult => {
    console.log("---->", dialogResult)
    if (dialogResult) {
      this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'],id,index)
    }
  });
}

deleteByRoleType(RoleCheckbox:string,id:any,index:any){
  if (RoleCheckbox==''){
    this.documentService.deleteById({id:id,tableName:'destructions'}).subscribe((res) => {
      console.log(res)
      if (res) {
        this.ngOnInit()
      }
  }, (err) => console.log(err))
  } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
    var approval_data:any={
      id:id,
      tableName:'destructions',
      deleteflag:'-1',
      userdetails:this.USER_DATA['result'],
      status:'pending',
      dummydata:this.item1[index],
      Types:'deletion',
      FileType:this.USER_DATA?.result?.sideMenu
    }
    this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox,id,index,approval_data,()=>{
      this.ngOnInit();
    });
  }
}

newDest(){
//this.sharedData.changeretunurl('home/destruction')
this.router.navigate(['home/upload', { file: 'import', document: 'import-destruction' }]);
}

exportToExcel() {
const ws: xlsx.WorkSheet =
xlsx.utils.table_to_sheet(this.destruction.nativeElement);
const wb: xlsx.WorkBook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
xlsx.writeFile(wb, 'Destruction.xlsx');
}

toEdit(index){
this.optionsVisibility[index] = true;
this.toastr.warning('Destruction Certificate Is In Edit Mode');
}


}







