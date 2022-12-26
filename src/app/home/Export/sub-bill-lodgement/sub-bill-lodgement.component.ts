import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import * as xlsx from 'xlsx';
import { ConfirmDialogModel, ConfirmDialogBoxComponent } from '../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import { DocumentService } from '../../../service/document.service';
import { UserService } from '../../../service/user.service';
import { ShippingbillDataService } from '../../../service/homeservices/shippingbill.service';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-sub-bill-lodgement',
  templateUrl: './sub-bill-lodgement.component.html',
  styleUrls: ['./sub-bill-lodgement.component.scss']
})
export class SubBillLodgementComponent implements OnInit {

  $SB_NUMBERS:any=['1','2','3','4','5','6','7','8','9','10'];
  $LODGEMENT_NUMBER:any=['1','2','3','4','5','6','7','8','9','10'];
  $PARTY_NAME:any=['1','2','3','4','5','6','7','8','9','10'];

  @ViewChild('piposummery', { static: false }) piposummery: ElementRef;

  displayedColumns: string[] = ['SB no', 'Lodgement no', 'Party Name'];
  dataSource: any[];
  benneDetailArray: any;
  locationArray: any;
  commodityArray: any;

  buyer: string = '';
  location: string = '';
  commodity: string = '';
  page: number = 0
  limit: number = 10

  @ViewChild(MatPaginator) paginator: MatPaginator;
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  ALL_DATA_FORMAT:any=[]
  TEMP:any={
    SB_NO:[],
    Lodgement_No:[],
    Party_Name:[]
  };

  constructor(public documentService: DocumentService,
    private userService: UserService, public shippingBillService: ShippingbillDataService,
    public dialog: MatDialog,
     public wininfo: WindowInformationService) {
    this.getDropDownItems()
  }
  ngOnInit() {
    this.wininfo.set_controller_of_width(250,'.content_top_common')
    this.documentService.getBlcopyrefPromies().then((res: any)=>{console.log(res,'getBlcopyrefPromies')})
    this.shippingBillService.getShippingBillList().then((res: any) => {
      this.shippingBillService.shippingbills$.subscribe((data: any) => {
       console.log(data,'ressdsdsdsdv sdfsfsdfsdfd')
       for (let index = 0; index < data.length; index++) {
        this.TEMP['SB_NO'][index]=data[index]['sbno'];
       }
       console.log(this.TEMP,'ALL');
       this.getPipoData()
      });
    });
  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }

  getPipoData() {
    console.log("-->", this.page, this.limit)
    this.documentService.getBlcopyrefPromies().then(async (res: any) => {
      this.dataSource = res
      console.log("res", this.dataSource)
      var counter=0;
      for (let index = 0; index < this.dataSource.length; index++) {
        if (this.dataSource[index]['buyerName']!='' &&
            this.dataSource[index]['buyerName']!=undefined
            && this.dataSource[index]['buyerName']!=null) {
            this.TEMP['Party_Name'][index]=this.dataSource[index]['buyerName'];
            this.TEMP['Lodgement_No'][index]=this.dataSource[index]['blcopyrefNumber'];
        }
        if ((index+1)==this.dataSource.length) {
          for (let index = 0; index < this.TEMP['Party_Name'].length; index++) {
            if (this.TEMP['SB_NO'][index]!='' && this.TEMP['SB_NO'][index]!=undefined) {
              this.ALL_DATA_FORMAT[counter]={
                SB_NO:this.TEMP['SB_NO'][counter],
                Party_Name:this.TEMP['Party_Name'][counter],
                Lodgement_No:this.TEMP['Lodgement_No'][counter]
              }
              counter++;
            }
          }
        }
       }
       console.log(this.TEMP,this.ALL_DATA_FORMAT,'ALL_DATA_FORMAT')
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


    const message = `Are you sure you want to delete this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      // this.result = dialogResult;
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.documentService.deletePipoByid(id).subscribe((res) => {
          console.log(res)
          if (res) {
            this.getPipoData()
          }
        }, (err) => console.log(err))
      }
    });
  }

}
