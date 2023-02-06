import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { DocumentService } from "../../service/document.service";
import { UserService } from '../../service/user.service';
import * as xlsx from 'xlsx';
import { ConfirmDialogModel, ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';

/**
 * @title Table with pagination
 */

@Component({
  selector: 'app-pipo-export',
  templateUrl: './pipo-export.component.html',
  styleUrls: ['./pipo-export.component.scss'],

})

export class PipoExportComponent implements OnInit {
  @ViewChild('piposummery', { static: false }) piposummery: ElementRef;

  displayedColumns: string[] = ['pi_poNo', 'date', 'buyerName', 'location', 'commodity', 'amount', 'paymentTerm', 'actions'];
  dataSource: any[];
  benneDetailArray: any;
  locationArray: any;
  commodityArray: any;

  buyer: string = '';
  location: string = '';
  commodity: string = '';
  page: number = 0
  limit: number = 10
  USER_DATA:any=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  PENDING_DATA:any=[];

  constructor(public documentService: DocumentService, private userService: UserService, public dialog: MatDialog,
    public wininfo: WindowInformationService,public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService) {
    this.getDropDownItems()

  }
 async ngOnInit() {
    this.wininfo.set_controller_of_width(250,'.content_top_common')
    this.getPipoData()
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    this.documentService.getRejectStatus(this.USER_DATA?.result?.sideMenu).subscribe((res: any)=>{
      this.PENDING_DATA = res;
      console.log("this.PENDING_DATA", res)
    })
  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }

  getPipoData() {
    console.log("-->", this.page, this.limit)
    this.documentService.getPipos(this.page, this.limit, this.commodity, this.location, this.buyer , 'export').subscribe((res: any) => {
      this.dataSource = res.docs
      console.log("res", this.dataSource)

      this.paginator.length = res.totalDocs
    })
  }


  handlePage(pagination: any) {
    console.log("==>", pagination)
    this.page = pagination.pageIndex
    this.limit = pagination.pageSize
    this.getPipoData()
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10
    this.paginator.pageSizeOptions = [10, 20, 30]

  }

  getDropDownItems() {
    this.userService.getTeam().subscribe(
      (data) => {


        this.locationArray = data['data'][0]['location'];
        this.commodityArray = data['data'][0]['commodity'];
        console.log("--------->locationArray", this.locationArray)
        console.log("--------->commodityArray", this.commodityArray)
      },
      (error) => {
        console.log('error');
      }
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        this.benneDetailArray = res.data
        console.log("--------->benneDetailArray", this.benneDetailArray)

      },
      (err) => console.log('Error', err)
    );
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(
      this.piposummery.nativeElement
    );
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Pipo-Summary.xlsx');
  }


  filter() {
    this.getPipoData()
    this.filtervisible = !this.filtervisible

  }
  resetFilter() {
    this.commodity = ''
    this.location = ''
    this.buyer = ''
    this.getPipoData()
    this.filtervisible = !this.filtervisible
  }


  handleDelete(id,index:any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'],id,index)
      }
    });
  }
  detailsViewdata:any=[];
  detailsView(id:any,dump:any){
    this.detailsViewdata=this.PENDING_DATA[id];
    console.log(this.detailsViewdata,'detailsViewdata')
  }
  truefalse(condition){
    if (condition){
      return '';
    }
    return 'none';
  }
  deleteByRoleType(RoleCheckbox:string,id:any,index:any){
    if (RoleCheckbox==''){
        this.documentService.deletePipoByid(id).subscribe((res) => {
            console.log(res)
            if (res) {
              this.getPipoData()
            }
        }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'PI_PO',
        deleteflag:'-1',
        userdetails:this.USER_DATA['result'],
        status:'pending',
        dummydata:this.dataSource[index],
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
