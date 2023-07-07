import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DocumentService } from "../../service/document.service";
import { UserService } from '../../service/user.service';
import * as xlsx from 'xlsx';
import { ConfirmDialogModel, ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { WindowInformationService } from '../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { Router } from '@angular/router';

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
  USER_DATA: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  PENDING_DATA: any = [];
  HOVER_DATA: any = '';

  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Invoice No.",
      "Invoice Date",
      "Consignee Name",
      "BRANCH",
      "Commodity",
      "Amount",
      "Payment Term",
      "Action"],
    items: [],
    Expansion_header: [],
    Expansion_Items: [],
    Objectkeys: [],
    ExpansionKeys: [],
    TableHeaderClass: [
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1"
    ],
    eventId: ''
  }

  constructor(public documentService: DocumentService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
    this.getDropDownItems()
  }
  async ngOnInit() {
    this.USER_DATA = await this.userService.getUserDetail();
    this.getPipoData();
    console.log("this.USER_DATA", this.USER_DATA)
    this.documentService.getRejectStatus(this.USER_DATA?.result?.sideMenu).subscribe((res: any) => {
      this.PENDING_DATA = res;
      console.log("this.PENDING_DATA", res)
    })
  }

  onclick() {
    this.filtervisible = !this.filtervisible
  }

  getPipoData() {
    console.log("-->", this.page, this.limit)
    this.documentService.getPipos(this.page, this.limit, this.commodity, this.location, this.buyer, 'export').subscribe((res: any) => {
      var sort_of_deleteflag_1: any = res.docs.filter((item) => item.deleteflag == '0');
      var sort_of_deleteflag_2: any = res.docs.filter((item) => item.deleteflag == '-1');
      this.dataSource = sort_of_deleteflag_1.concat(sort_of_deleteflag_2);
      this.PIPOTable(this.dataSource)
      console.log("res", sort_of_deleteflag_1, sort_of_deleteflag_2, this.dataSource)
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

  PIPOTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          "InvoiceNo": element['pi_poNo'],
          "InvoiceDate": element['date'],
          "ConsigneeName": element['buyerName'],
          "BRANCH": element['location'],
          "Commodity": element['commodity'],
          "Amount": element['amount'],
          "PaymentTerm": element['paymentTerm'][0]?.type,
          isExpand: false,
          disabled: element['deleteflag'] != '-1' ? false : true,
          RoleType: this.USER_DATA?.result?.RoleCheckbox
        })
      });
      if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
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

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.dataSource[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.dataSource[data?.index]?._id, this.dataSource[data?.index])
      }
    });
  }

  detailsViewdata: any = [];
  detailsView(id: any, dump: any) {
    this.detailsViewdata = this.PENDING_DATA[id];
    console.log(this.detailsViewdata, 'detailsViewdata')
  }

  deleteByRoleType(RoleCheckbox: string, id: any, index: any) {
    if (RoleCheckbox == '') {
      this.documentService.deletePipoByid(id).subscribe((res) => {
        console.log(res)
        if (res) {
          this.getPipoData()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'PI_PO',
        deleteflag: '-1',
        userdetails: this.USER_DATA['result'],
        status: 'pending',
        dummydata: this.dataSource[index],
        Types: 'deletion',
        TypeOfPage: 'summary',
        FileType: this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox, id, index, approval_data, () => {
        this.ngOnInit();
      });
    }
  }

  toEdit(data: any) {
    this.router.navigate([`/home/edit-pipo/export/` + this.dataSource[data?.index]?._id])
  }

  toView(data: any) {
    this.router.navigate([`home/view-pipo/` + this.dataSource[data?.index]?._id])
  }

  MouseHover(data: any, panel: any) {
    this.HOVER_DATA = '';
    this.HOVER_DATA = this.dataSource[data?.index]?._id;
    setTimeout(() => {
      panel?.displayShow
    }, 200);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new PipoSummaryFormat(this.dataSource).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Pipo-Summary.xlsx');
  }
}

class PipoSummaryFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        "InvoiceNo": element['pi_poNo'],
        "InvoiceDate": element['date'],
        "ConsigneeName": element['buyerName'],
        "BRANCH": element['location'],
        "Commodity": element['commodity'],
        "Amount": element['amount'],
        "PaymentTerm": element['paymentTerm'][0]?.type,
      })
    });
    return temp;
  }
}