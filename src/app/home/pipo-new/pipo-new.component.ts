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

/**
 * @title Table with pagination
 */



@Component({
  selector: 'app-pipo-new',
  templateUrl: './pipo-new.component.html',
  styleUrls: ['./pipo-new.component.scss'],

})

export class PipoNewComponent implements OnInit {
  @ViewChild('piposummery', { static: false }) piposummery: ElementRef;

  displayedColumns: string[] = ['pi_poNo', 'date', 'buyerName', 'location', 'commodity', 'amount', 'paymentTerm', 'actions','Approval Status'];
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
  constructor(public documentService: DocumentService, private userService: UserService, public dialog: MatDialog,
    public wininfo: WindowInformationService) {
    this.getDropDownItems()

  }
 async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content_top_common')
    this.getPipoData()
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
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


  handleDelete(id) {
    var approval_data:any={
      id:id,
      userdata:this.USER_DATA['result'],
      approval_status:false,
      tableName:''
    }
    console.log(approval_data,'dfsdfhjfdfjdsfdsfds')
    this.documentService.deletflagPiPo({id:id,deleteflag:-1}).subscribe((res:any)=>{
      console.log(res,'responsgsghgsgs')
    })
    // const message = `Are you sure you want to delete this?`;

    // const dialogData = new ConfirmDialogModel("Confirm Action", message);

    // const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
    //   maxWidth: "400px",
    //   data: dialogData
    // });

    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   // this.result = dialogResult;
    //   console.log("---->", dialogResult)
    //   if (dialogResult) {
    //     this.documentService.deletePipoByid(id).subscribe((res) => {
    //       console.log(res)
    //       if (res) {
    //         this.getPipoData()
    //       }
    //     }, (err) => console.log(err))
    //   }
    // });


  }


}
