import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../../service/user.service';
import * as xlsx from 'xlsx';
import * as data1 from '../../../../currency.json';
import { Router } from '@angular/router';
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import moment from "moment";

@Component({
  selector: 'export-master-service-summary',
  templateUrl: './master-service.component.html',
  styleUrls: ['./master-service.component.scss']
})

export class MasterServiceComponent implements OnInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public item: any;
  public item1: any = [];
  public viewData: any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  USER_DATA: any = [];
  filtervisible: boolean = false;
  TEMP_PI_PO_NUMBER: any = [];
  FILTER_VALUE_LIST: any = [];
  PIPO_DROP_DOWN_DATA: any = [];
  PIPO_SELECTED_DROP_DOWN_DATA: any = {};
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    M_S_A_No: [],
    Currency: [],
    DATE: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Pipo No.",
      "DATE",
      "M S A No.",
      "Start Date",
      "Expiry Date",
      "Overseas Party Name",
      "M S A Amount",
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
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1"
    ],
    eventId: ''
  }
  EDIT_FORM_DATA: any = {
    date: '',
    masterServiceNumber: '',
    masterServiceAmount: '',
    currency: '',
    buyerName: '',
    StartDate: "",
    Expirydate: "",
    UtilizationAddition: [{
      pi_poNo: "",
      amount: "",
      UtilizationAmount: 0,
      buyerName: ""
    }]
  }
  constructor(
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private pipodataservice: PipoDataService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog
  ) {
  }
  async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.item = [];
    this.documentService.getMasterServiceFile("export").subscribe(
      (res: any) => {
        this.item = res?.data;
        this.FILTER_VALUE_LIST = this.item;
        for (let value of res.data) {
          if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency) == false) {
            this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
          }
          value?.buyerName != "NF" ? value?.buyerName : [].forEach(element => {
            if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
              this.ALL_FILTER_DATA['Buyer_Name'].push(element);
            }
          });
          if (this.ALL_FILTER_DATA['M_S_A_No'].includes(value?.masterServiceNumber) == false) {
            this.ALL_FILTER_DATA['M_S_A_No'].push(value?.masterServiceNumber);
          }
          if (this.ALL_FILTER_DATA['DATE'].includes(value?.date) == false) {
            this.ALL_FILTER_DATA['DATE'].push(value?.date);
          }
        }
        this.MasterServiceTable(this.item)
        console.log(res, 'getMasterServiceFile');
      }, (err) => console.log(err));
    this.pipodataservice.getPipoList("export").then((res: any) => {
      this.PIPO_DROP_DOWN_DATA = [];
      this.PIPO_SELECTED_DROP_DOWN_DATA = [];
      res?.pipoModelList?.forEach(element => {
        this.PIPO_SELECTED_DROP_DOWN_DATA[element?._id] = {
          pi_poNo: element?.pi_poNo,
          amount: element?.amount,
          buyerName: element?.buyerName,
          UtilizationAmount: 0
        }
        this.PIPO_DROP_DOWN_DATA.push({
          pi_poNo: element?.pi_poNo,
          amount: element?.amount,
          UtilizationAmount: 0,
          buyerName: element?.buyerName,
          id: element?._id
        });
      });
      console.log(res, this.PIPO_DROP_DOWN_DATA, this.PIPO_SELECTED_DROP_DOWN_DATA, "pipodataservice")

    })
  }

  MasterServiceTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['UtilizationAddition']),
          date: element['date'],
          masterServiceNumber: element['masterServiceNumber'],
          StartDate: moment(element['StartDate']).format("YYYY-MM-DD"),
          Expirydate: moment(element['Expirydate']).format("YYYY-MM-DD"),
          PartyName: element['buyerName']?.value,
          masterServiceAmount: element['masterServiceAmount'],
          currency: element['currency'],
          buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
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

  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }
  getPipoBuyerName(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.buyerName);
    });
    return temp.join(',')
  }
  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length == 0) {
      this.FILTER_VALUE_LIST = this.item;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item;
  }
  openLetterOfCredit(content) {
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
    return data?.pipo[0]?.pi_poNo;
  }
  viewpdf(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.FILTER_VALUE_LIST[a?.index]['doc']);
    }, 200);
  }
  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateMasterService(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Master Service Row Is Updated Successfully.');
      },
      (error) => {
        console.log('error');
      }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateMasterService(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Master Service Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  masterSer() {
    // this.sharedData.changeretunurl('home/master-services')
    // this.router.navigate(['home/upload', { file: 'export', document: 'agreement' }]);
    this.router.navigate(['/home/upload/Export/MasterServiceAgreements']);
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    this.SELECTED_VALUE = '';
    this.SELECTED_VALUE = this.FILTER_VALUE_LIST[data?.index];
    this.EDIT_FORM_DATA = {
      date: this.SELECTED_VALUE['date'],
      masterServiceNumber: this.SELECTED_VALUE['masterServiceNumber'],
      StartDate: this.SELECTED_VALUE['StartDate'],
      Expirydate: this.SELECTED_VALUE['Expirydate'],
      masterServiceAmount: this.SELECTED_VALUE['masterServiceAmount'],
      currency: this.SELECTED_VALUE['currency'],
      buyerName: this.SELECTED_VALUE['buyerName'],
      UtilizationAddition: this.SELECTED_VALUE['UtilizationAddition'].length != 0 && this.SELECTED_VALUE['UtilizationAddition'] != "NF" ? this.SELECTED_VALUE['UtilizationAddition'] : [{
        pi_poNo: "",
        amount: "",
        UtilizationAmount: 0,
        buyerName: ""
      }]
    }
    this.toastr.warning('Master Service Row Is In Edit Mode');
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
      this.documentService.deleteById({ id: id, tableName: 'masterservices' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'masterservices',
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

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new MasterServiceFormat(this.FILTER_VALUE_LIST).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'MasterService.xlsx');
  }

  clickPipo($event, index) {
    this.EDIT_FORM_DATA["UtilizationAddition"][index]['pi_poNo'] = $event["pi_poNo"];
    this.EDIT_FORM_DATA["UtilizationAddition"][index]['amount'] = $event["amount"];
    this.EDIT_FORM_DATA["UtilizationAddition"][index]['UtilizationAmount'] = $event["UtilizationAmount"];
    this.EDIT_FORM_DATA["UtilizationAddition"][index]['buyerName'] = $event["buyerName"];
  }
  AddMore() {
    this.EDIT_FORM_DATA?.UtilizationAddition.push({
      pi_poNo: "",
      amount: "",
      UtilizationAmount: 0,
      buyerName: ""
    });
  }
  RemoveMore(index) {
    this.EDIT_FORM_DATA?.UtilizationAddition.splice(index, 1);
  }
  timeout: any = null;
  AmountValidation(UtilizationAmount: any, index: any, PipoAmount: any, InsuranceAmount: any) {
    clearTimeout(this.timeout);
    let SUM_OF_PIPO: any = this.EDIT_FORM_DATA.UtilizationAddition?.reduce(function (acc, obj) { return parseInt(acc) + parseInt(obj.amount); }, 0);
    if (UtilizationAmount > SUM_OF_PIPO || UtilizationAmount > InsuranceAmount) {
      this.timeout = setTimeout(() => {
        this.EDIT_FORM_DATA.UtilizationAddition[index]["UtilizationAmount"] = PipoAmount;
      }, 200);
      this.toastr.error("You don't have much engouh amount");
      return;
    }
    if (SUM_OF_PIPO > InsuranceAmount) {
      this.timeout = setTimeout(() => {
        this.EDIT_FORM_DATA.UtilizationAddition[index]["UtilizationAmount"] = PipoAmount;
      }, 200);
      this.toastr.error("insurance value insufficient");
      return;
    }
  }

}

class MasterServiceFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        date: element['date'],
        masterServiceNumber: element['masterServiceNumber'],
        StartDate: moment(element['StartDate']).format("YYYY-MM-DD"),
        Expirydate: moment(element['Expirydate']).format("YYYY-MM-DD"),
        PartyName: element['buyerName']?.value,
        masterServiceAmount: element['masterServiceAmount'],
        currency: element['currency'],
        buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
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

  getPipoBuyerName(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.buyerName);
    });
    return temp.join(',')
  }

  ARRAY_TO_STRING(array, key) {
    return array[key]?.join(',')
  }

}
