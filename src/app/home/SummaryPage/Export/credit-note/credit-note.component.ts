import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../../service/user.service';
import * as data1 from '../../../../currency.json';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Data, NavigationExtras, NavigationStart, Router } from '@angular/router';
import * as xlsx from 'xlsx';
import { SharedDataService } from "../../../shared-Data-Servies/shared-data.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import moment from 'moment';

@Component({
  selector: 'export-credit-note-summary',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})

export class CreditNoteSummaryComponent implements OnInit {
  @ViewChild('creditnotes', { static: false }) creditnotes: ElementRef;
  public item: any;
  public item1: any = [];
  public viewData: any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  filtervisible: boolean = false;
  USER_DATA: any = [];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    NO: [],
    Currency: [],
    DATE: []
  };

  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Pipo No.",
      "DATE",
      "C N No.",
      "C N Amount",
      "CURRENCY",
      "Buyer Name",
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
      "col-td-th-1"
    ],
    eventId: ''
  }

  EDIT_FORM_DATA: any = {
    date: '',
    creditNoteNumber: '',
    creditNoteAmount: '',
    currency: '',
    buyerName: '',
  }
  FILTER_FORM: any = ''

  constructor(
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private sharedData: SharedDataService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,
  ) {
  }

  async ngOnInit() {
    this.FILTER_VALUE_LIST = [];
    this.wininfo.set_controller_of_width(270, '.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    console.log("this.USER_DATA", this.USER_DATA)
    this.item1 = [];
    this.documentService.getCredit().subscribe((res: any) => {
      this.item1 = res?.data;
      this.FILTER_VALUE_LIST = this.item1;
      for (let value of res.data) {
        if (value['file'] == 'export') {
          if (this.ALL_FILTER_DATA['PI_PO_No'].filter((item: any) => item?.value == value?.pipo[0]?.pi_poNo)?.length == 0) {
            this.ALL_FILTER_DATA['PI_PO_No'].push({ value: value?.pipo[0]?.pi_poNo, id: value?.pipo[0]?._id });
          }
          if (this.ALL_FILTER_DATA['Buyer_Name'].filter((item: any) => item?.value == value?.buyerName)?.length == 0) {
            this.ALL_FILTER_DATA['Buyer_Name'].push({ value: value?.buyerName });
          }
          if (this.ALL_FILTER_DATA['NO'].filter((item: any) => item?.value == value?.creditNoteNumber)?.length == 0) {
            this.ALL_FILTER_DATA['NO'].push({ value: value?.creditNoteNumber });
          }
          if (this.ALL_FILTER_DATA['DATE'].filter((item: any) => item?.value == value?.date)?.length == 0) {
            this.ALL_FILTER_DATA['DATE'].push({ value: value?.date });
          }
        }
      }
      this.FILTER_FORM = {
        buyerName: {
          type: "ArrayList",
          value: "",
          label: "Select Buyer",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['Buyer_Name'],
          bindLabel: "value"
        },
        date: {
          type: "ArrayList",
          value: "",
          label: "Select Date",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['DATE'],
          bindLabel: "value"
        },
        NO: {
          type: "ArrayList",
          value: "",
          label: "Select Credit No.",
          rules: {
            required: false,
          },
          item: this.ALL_FILTER_DATA['NO'],
          bindLabel: "value"
        },
      }
      this.CreditNoteTable(this.item1)
      console.log(res, 'yuyuyuyuyuyuyuuy')
    },
      (err) => console.log(err)
    );
  }

  onSubmit(value: any) {
    let form_value: any = {
      buyerName: value?.value?.buyerName,
      date: value?.value?.date,
      creditNoteNumber: value?.value?.NO
    };

    const removeEmptyValues = (object) => {
      let newobject = {}
      for (const key in object) {
        if (object[key] != '' && object[key] != null && object[key] != undefined) {
          newobject[key] = object[key];
        }
      }
      return newobject;
    };

    this.documentService.filterAnyTable(removeEmptyValues(form_value), 'creditNote').subscribe((resp: any) => {
      console.log(resp, value, "creditNote")
      this.FILTER_VALUE_LIST = resp?.data?.length != 0 ? resp?.data : this.item1;
      this.CreditNoteTable(this.FILTER_VALUE_LIST)
    });
  }

  reset() {
    this.FILTER_VALUE_LIST = this.item1;
    this.CreditNoteTable(this.FILTER_VALUE_LIST)
  }

  CreditNoteTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['pipo']),
          date: moment(element['date']).format('DD-MM-YYYY'),
          creditNoteNumber: element['creditNoteNumber'],
          creditNoteAmount: element['creditNoteAmount'],
          currency: element['currency'],
          buyerName: element['buyerName'],
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
  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }

  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  openCreditNote(content) {
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

  viewCN(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.FILTER_VALUE_LIST[a?.index]['doc']);
    }, 200);
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateCredit(data, data._id).subscribe((data) => {
      console.log('king123');
      this.toastr.success('PI/PO updated successfully.');
    }, (error) => {
      console.log('error');
    }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateCredit(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Credit Note Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  newCredit() {
    this.sharedData.changeretunurl('home/credit-note')
    this.router.navigate(['home/upload', { file: 'export', document: 'creditNote' }]);
  }

  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item1.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length == 0) {
      this.FILTER_VALUE_LIST = this.item1;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item1;
  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new CreditNoteFormat(this.FILTER_VALUE_LIST).getCreditNote());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'creditnotes.xlsx');
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    // this.SELECTED_VALUE = '';
    // this.SELECTED_VALUE = this.FILTER_VALUE_LIST[data?.index];
    // this.EDIT_FORM_DATA = {
    //   date: this.SELECTED_VALUE['date'],
    //   creditNoteNumber: this.SELECTED_VALUE['creditNoteNumber'],
    //   creditNoteAmount: this.SELECTED_VALUE['creditNoteAmount'],
    //   currency: this.SELECTED_VALUE['currency'],
    //   buyerName: this.SELECTED_VALUE['buyerName'],
    // }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "item": JSON.stringify(this.FILTER_VALUE_LIST[data?.index])
      }
    };
    this.router.navigate([`/home/Summary/Export/Edit/CreditNoteDocument`], navigationExtras);
    this.toastr.warning('Credit Note Row Is In Edit Mode');
  }

  handleDelete(data: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", this.FILTER_VALUE_LIST[data?.index], dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], this.FILTER_VALUE_LIST[data?.index]?._id, this.FILTER_VALUE_LIST[data?.index])
      }
    });
  }

  deleteByRoleType(RoleCheckbox: string, id: any, index: any) {
    if (RoleCheckbox == '') {
      this.documentService.deleteById({ id: id, tableName: 'creditnotes' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'creditnotes',
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
}

class CreditNoteFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  getCreditNote() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        date: element['date'],
        creditNoteNumber: element['creditNoteNumber'],
        creditNoteAmount: element['creditNoteAmount'],
        currency: element['currency'],
        buyerName: this.getBuyerName(element['buyerName']),
      })
    });
    return temp;
  }
  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  getBuyerName(buyerName: any) {
    let temp: any = [];
    buyerName.forEach(element => {
      temp.push(element);
    });
    return temp.join(',')
  }

  ARRAY_TO_STRING(array, key) {
    return array[key]?.join(',')
  }

}
