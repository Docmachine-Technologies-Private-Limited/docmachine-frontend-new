import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DocumentService } from "../../service/document.service";
import * as xlsx from 'xlsx';
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import {UserService} from './../../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-boe',
  templateUrl: './boe.component.html',
  styleUrls: ['./boe.component.scss']
})
export class BOEComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public showInvoice;
  public selectedRow;
  docu: any;
  public item: any;
  public lastIndex;
  public item1;
  public tableWidth;
  public greaterAmount = 0;
  public allTransactions: any = [];
  public optionsVisibility: any = [];
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
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private sharedData : SharedDataService,
    private userService: UserService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,

  ) { }


  async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    this.item1=[];
      this.documentService.getBoe(1).subscribe(
        (res: any) => {
          for (let value of res.data) {
            if (value['file'] == 'import') {
              this.item1.push(value);
            }
          }
          console.log(res,'yuyuyuyuyuyuyuuy')
        },
        (err) => console.log(err)
      );

    }


  exportToExcel(){
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'BOE.xlsx');
  }

  uploadNew(){
    this.sharedData.changeretunurl('home/boe')
    this.router.navigate(['home/upload', { file: 'import', document: 'boe' }]);
  }

  getInvoices(selectedRowValues, i){
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    console.log(selectedRowValues.doc);
    this.lastIndex = i;

    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  getTransactions(selectedRowValues){
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: "advance" }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  hide(){
    this.showInvoice = false;
  }

  toSave(data, index){
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateBoe(data, data._id).subscribe(
      (data) => {
        console.log("king123");
        console.log(data);
        this.toastr.success('Bill Of Entry row is updated')
        // this.router.navigate(["home/view-document/sb"]);
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      (error) => {
        console.log("error");
      }
    );
  }

  toEdit(index){
    this.optionsVisibility[index] = true;
    this.toastr.warning('Bill Of Entry Row Is In Edit Mode');
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
      this.documentService.deleteById({id:id,tableName:'boerecords'}).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
    }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'boerecords',
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

}
