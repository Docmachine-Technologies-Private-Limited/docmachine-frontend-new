import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DocumentService } from "../../../../service/document.service";
import { UserService } from '../../../../service/user.service';
import * as xlsx from 'xlsx';
import { ConfirmDialogModel, ConfirmDialogBoxComponent } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { NavigationExtras, Router } from '@angular/router';
import { TableServiceController } from '../../../../service/v1/TableServiceController';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'import-pipo-documents',
  templateUrl: './pipo-documents.component.html',
  styleUrls: ['./pipo-documents.component.scss'],
})
export class PipoDocumentsComponent implements OnInit {
  @ViewChild('piposummery', { static: false }) piposummery: ElementRef;
  USER_DATA: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  PENDING_DATA: any = [];
  HOVER_DATA: any = '';
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "DATE",
      "INVOICE No.",
      "INVOICE DATE",
      "Beneficiary NAMES",
      "CURRENCY",
      "BRANCH",
      "COMMODITY",
      "Amount",
      "Action"],
    items: [],
    Expansion_header: [
      "BOE NO",
      "BOE DATE",
      "REGION",
      "FOB VALUE",
      "PORT CODE",
      "BOE Balance Amount",
      "Freight Charges"
    ],
    Expansion_header2: [
      "TT DATE",
      "TT USD",
      "Payment Date",
      "Amount",
      "Currency",
      "CCY Rate",
      "INR Amount",
      "ORM REF NUMBER/ID",
      "TOTAL DEDUCTIONS/DAMGES/USD",
      "FINAL AMOUNT - USD",
      "DEBIT NOTE STATUS",
      "STATUS OF BOE SUBMISSION IN BANK"
    ],
    Expansion_Items: [],
    Expansion_Items2: [],
    Objectkeys: [],
    ExpansionKeys: [],
    ExpansionKeys2: [],
    TableHeaderClass: [
      "col-td-th-0",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-2",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
    ],
    eventId: 1,
    PageSize: 0
  };
  ALL_FILTER_DATA: any = {
    Buyer_Name: [],
    Company_Name: [],
    Origin: [],
    Destination: [],
    Currency: [],
    DATE: [],
    NO: []
  };
  FILTER_FORM: any = ''
  FILTER_FORM_VALUE = [];
  
  constructor(public documentService: DocumentService,
    private userService: UserService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    public wininfo: WindowInformationService,
    public filteranytablepagination: TableServiceController,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
  }

  async ngOnInit() {
    this.USER_DATA = await this.userService.getUserDetail();
    this.FILTER_FORM_VALUE = [];
    await this.filteranytablepagination.LoadTableImport({}, { skip: 0, limit: 10 }, 'pi_po',this.FILTER_VALUE_LIST_NEW)?.pi_po().then((res) => {
      this.FILTER_VALUE_LIST_NEW = res;
      for (let value of this.filteranytablepagination?.TABLE_CONTROLLER_DATA) {
        if (this.ALL_FILTER_DATA['Buyer_Name'].filter((item: any) => item?.value == value?.buyerName)?.length == 0) {
          this.ALL_FILTER_DATA['Buyer_Name'].push({ value: value?.buyerName });
        }
        if (this.ALL_FILTER_DATA['NO'].filter((item: any) => item?.value == value?.pi_poNo)?.length == 0) {
          this.ALL_FILTER_DATA['NO'].push({ value: value?.pi_poNo });
        }
        if (this.ALL_FILTER_DATA['DATE'].filter((item: any) => item?.value == value?.date)?.length == 0) {
          this.ALL_FILTER_DATA['DATE'].push({ value: value?.date });
        }
      }

      this.FILTER_FORM = {
        buyerName: {
          type: "ArrayList",
          value: "",
          label: "Select buyerName",
          rules: {
            required: false,
          },
          item: this.filteranytablepagination.UploadServiceValidatorService.BUYER_DETAILS,
          bindLabel: "value"
        },
        todate: {
          type: "date",
          value: "",
          label: "Select Start Date",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['DATE'],
          bindLabel: "value"
        },
        fromdate: {
          type: "date",
          value: "",
          label: "Select End Date",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['DATE'],
          bindLabel: "value"
        },
        NO: {
          type: "ArrayList",
          value: "",
          label: "Select Pipo No",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['NO'],
          bindLabel: "value"
        },
      }
    })
    console.log("this.USER_DATA", this.USER_DATA, this.FILTER_VALUE_LIST_NEW);
  }

  async onSubmit(value: any) {
    let form_value: any = {
      buyerName: value?.value?.buyerName,
      pi_poNo: value?.value?.NO,
    };

    if (value?.value?.todate != '' && value?.value?.todate != undefined) {
      form_value = {
        buyerName: value?.value?.buyerName,
        pi_poNo: value?.value?.NO,
        date: { $gte: value?.value?.todate }
      };
      if ((value?.value?.todate != '' && value?.value?.todate != undefined) && (value?.value?.fromdate != '' && value?.value?.fromdate != undefined)) {
        form_value = {
          buyerName: value?.value?.buyerName,
          pi_poNo: value?.value?.NO,
          date: { $gte: value?.value?.todate, $lt: value?.value?.fromdate }
        };
      }
    } else if (value?.value?.todate != '' && value?.value?.todate != undefined) {
      form_value = {
        buyerName: value?.value?.buyerName,
        pi_poNo: value?.value?.NO,
        date: { $lt: value?.value?.fromdate }
      };
      if ((value?.value?.todate != '' && value?.value?.todate != undefined) && (value?.value?.fromdate != '' && value?.value?.fromdate != undefined)) {
        form_value = {
          buyerName: value?.value?.buyerName,
          pi_poNo: value?.value?.NO,
          date: { $gte: value?.value?.todate, $lt: value?.value?.fromdate }
        };
      }
    }

    const removeEmptyValues = (object) => {
      let newobject: any = {}
      for (const key in object) {
        console.log(typeof object[key], "object[key]")
        if (object[key] != '' && object[key] != null && object[key] != undefined) {
          newobject[key] = object[key];
        }
      }
      return newobject;
    };
    if (Object.keys(removeEmptyValues(form_value))?.length != 0) {
      this.FILTER_FORM_VALUE = removeEmptyValues(form_value)
      await this.filteranytablepagination.LoadTableExport(this.FILTER_FORM_VALUE, { skip: 0, limit: 10 }, 'pi_po',this.FILTER_VALUE_LIST_NEW)?.pi_po().then((res) => {
        this.FILTER_VALUE_LIST_NEW = res;
      });
    } else {
      this.toastr.error("Please fill field...")
    }
  }

  reset() {
    this.ngOnInit()
  }


  ngAfterViewInit() {
    this.paginator.pageSize = 10
    this.paginator.pageSizeOptions = [10, 20, 30]
  }

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]?._id, this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index])
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
          this.ngOnInit();
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'PI_PO',
        deleteflag: '-1',
        userdetails: this.USER_DATA['result'],
        status: 'pending',
        dummydata: index,
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
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "item": JSON.stringify(this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index])
      }
    };
    this.router.navigate([`/home/Summary/Import/Edit/PIPO`], navigationExtras);
  }

  toView(data: any) {
    this.router.navigate([`home/view-pipo/` + this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]?._id])
  }

  MouseHover(data: any, panel: any) {
    if (data != null && data != undefined) {
      this.HOVER_DATA = '';
      this.HOVER_DATA = this.filteranytablepagination?.TABLE_CONTROLLER_DATA[data?.index]?._id;
      console.log('hgdsdsdasdsadas', data);
      setTimeout(() => {
        panel?.displayShow
      }, 200);
    }
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new PipoSummaryFormat(this.filteranytablepagination?.TABLE_CONTROLLER_DATA).get());
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
