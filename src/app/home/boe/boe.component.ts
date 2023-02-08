import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DocumentService } from "../../service/document.service";
import * as xlsx from 'xlsx';
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import {UserService} from './../../service/user.service';
import * as data1 from '../../currency.json';
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
  public viewData: any;
  public item: any;
  public closeResult: string;
  public lastIndex;
  public item1 = [];
  public tableWidth;
  public greaterAmount = 0;
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  filtervisible: boolean = false;
  USER_DATA:any=[];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    BOE_NUMBER: [],
    Buyer_Name: [],
    AD_CODE: [],
    AD_BILL_NO: [],
    IEC_CODE	: [],
    IEC_NAME	: [],
    ORIGIN: [],
    DISCHARGE_PORT: [],
    Currency: [],
    DATE: []
  };

  constructor(
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private modalService: NgbModal,
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
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
      this.documentService.getBoe(1).subscribe(
        (res: any) => {
          for (let value of res.data) {
            if (value['file'] == 'import') {
              this.item1.push(value);
              value?.benneName.forEach(element => {
                if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element)==false && element!='' && element!=undefined) {
                  this.ALL_FILTER_DATA['Buyer_Name'].push(element);
                }
              });
              if ( this.ALL_FILTER_DATA['BOE_NUMBER'].includes(value?.boeNumber)==false) {
                this.ALL_FILTER_DATA['BOE_NUMBER'].push(value?.boeNumber);
              }
              if ( this.ALL_FILTER_DATA['AD_CODE'].includes(value?.adCode)==false) {
                this.ALL_FILTER_DATA['AD_CODE'].push(value?.adCode);
              }
              if ( this.ALL_FILTER_DATA['AD_BILL_NO'].includes(value?.adBillNo)==false) {
                this.ALL_FILTER_DATA['AD_BILL_NO'].push(value?.adBillNo);
              }
              if ( this.ALL_FILTER_DATA['IEC_CODE'].includes(value?.iecCode)==false) {
                this.ALL_FILTER_DATA['IEC_CODE'].push(value?.iecCode);
              }
              if ( this.ALL_FILTER_DATA['IEC_NAME'].includes(value?.iecName)==false) {
                this.ALL_FILTER_DATA['IEC_NAME'].push(value?.iecName);
              }
              if ( this.ALL_FILTER_DATA['ORIGIN'].includes(value?.origin)==false) {
                this.ALL_FILTER_DATA['ORIGIN'].push(value?.origin);
              }
              if ( this.ALL_FILTER_DATA['DISCHARGE_PORT'].includes(value?.dischargePort)==false) {
                this.ALL_FILTER_DATA['DISCHARGE_PORT'].push(value?.dischargePort);
              }
              if ( this.ALL_FILTER_DATA['DATE'].includes(value?.boeDate)==false) {
                this.ALL_FILTER_DATA['DATE'].push(value?.boeDate);
              }
            }
          }
          this.FILTER_VALUE_LIST= this.item1;
          console.log(res,'yuyuyuyuyuyuyuuy')
        },
        (err) => console.log(err)
      );

    }

    openBoe(content) {
      this.modalService
        .open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'})
        .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    }
    filter(value, key) {
      this.FILTER_VALUE_LIST = this.item1.filter((item) => item[key].indexOf(value) != -1);
      if (this.FILTER_VALUE_LIST.length== 0) {
        this.FILTER_VALUE_LIST = this.item1;
      }
    }
    resetFilter() {
      this.FILTER_VALUE_LIST = this.item1;
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

  viewCN(a) {

    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
      a['doc']
    );
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
        TypeOfPage:'summary',
        FileType:this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox,id,index,approval_data,()=>{
        this.ngOnInit();
      });
    }
  }

}
