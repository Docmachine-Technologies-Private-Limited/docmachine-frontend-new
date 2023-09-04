import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import * as xlsx from 'xlsx';
import { ConfirmDialogModel, ConfirmDialogBoxComponent } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from '../../../../service/document.service';
import { UserService } from '../../../../service/user.service';
import { ShippingbillDataService } from '../../../../service/homeservices/shippingbill.service';
import { WindowInformationService } from '../../../../service/window-information.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';

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
  dataSource: any=[];
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
  USER_DATA: any = [];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    Packing_List_No: [],
    Currency: [],
    DATE: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Party Name",
      "SB no.",
      "Lodgement no.",
      "Currency",
      "Amount",
      "Realized Amount",
      "Balance Amount",
      "Action"],
    items: [],
    Expansion_header: [],
    Expansion_Items: [],
    Objectkeys: [],
    ExpansionKeys: [],
    TableHeaderClass: [
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-2"
    ],
    eventId: ''
  }
  constructor(public documentService: DocumentService,
    private userService: UserService, public shippingBillService: ShippingbillDataService,
    public dialog: MatDialog,
    public pipoDataService: PipoDataService,
     public wininfo: WindowInformationService) {
  }
  ngOnInit() {
    this.wininfo.set_controller_of_width(250,'.content_top_common');
    console.log("-->", this.page, this.limit)
    this.documentService.getBlcopyrefPromies().then(async (res: any) => {
      this.dataSource = res
      this.SUB_BILL_LODGEMENT_ListTable(res)
      console.log(this.TEMP,res,this.ALL_DATA_FORMAT,'ALL_DATA_FORMAT')
    })
  }
  SUB_BILL_LODGEMENT_ListTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PartyName: element?.pipo[0]?.buyerName,
          SBno: element?.SbRef[0]?.sbno,
          Lodgementno: element?.blcopyrefNumber,
          currency: element?.SbRef[0]?.currency,
          Amount: element?.amount,
          RealizedAmount: element?.LodgementData?.data?.amount,
          BalanceAmount:this.calculateAmount(element?.amount,element?.LodgementData?.data?.amount),
          ITEMS_STATUS: this.documentService.getDateStatus(element?.createdAt) == true ? 'New' : 'Old',
          isExpand: false,
          disabled: element['deleteflag'] != '-1' ? false : true,
          RoleType: this.USER_DATA?.result?.RoleCheckbox
        })
      });
      if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'ITEMS_STATUS')
      }
    });
  }
  
  async removeEmpty(data: any) {
    await data.forEach(element => {
      for (const key in element) {
        if (element[key] == '' || element[key] == null || element[key] == undefined) {
          element[key] = 'NF'
        }
      }
    });
    return await new Promise(async (resolve, reject) => { await resolve(data) });
  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }

  getPipoData() {
    console.log("-->", this.page, this.limit)
    this.documentService.getBlcopyrefPromies().then(async (res: any) => {
      console.log(this.TEMP,res,this.ALL_DATA_FORMAT,'ALL_DATA_FORMAT')
    })
  }

calculateAmount(amount1,amount2){
 return !isNaN(parseFloat(amount1))?parseFloat(amount1)-parseFloat(amount2):0;
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
