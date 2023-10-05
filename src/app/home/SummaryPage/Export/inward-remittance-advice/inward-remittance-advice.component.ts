import {
  Component,
  ElementRef,
  OnInit,
  resolveForwardRef,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';
import { UserService } from '../../../../service/user.service';
import { NavigationExtras, Router } from '@angular/router';
import { SharedDataService } from '../../../shared-Data-Servies/shared-data.service';
import * as xlsx from 'xlsx';
import * as data1 from '../../../../currency.json';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowInformationService } from '../../../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import moment from "moment";

@Component({
  selector: 'export-inward-remittance-advice-summary',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss'],
})
export class InwardRemittanceAdviceSummaryComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public optionsVisibility: any = [];
  // public optionsVisibility : boolean = false;
  test;
  public item: any;
  public item1: any = [];
  item4: any;
  location;
  commodity;
  recievedAmount;
  amount;
  commision;
  Comoval: any = 'Commodity';
  Locval: any = 'Location';
  nameSearch: string = 'Commodity';
  origin: any = [];
  item5: any;
  Originval: any = 'origin';
  item3: any;
  pipoValue: any = 'Select PI/PO';
  public item6 = [];
  public closeResult: string;
  public viewData: any;
  filtervisible: boolean = false;
  USER_DATA: any = [];
  PENDING_DATA: any = [];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    SB_Number: [],
    From: [],
    Branch: [],
    Description: [],
    NO: [],
    Currency: [],
    DATE: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Pipo No.",
      "DATE",
      "SB Number",
      "Party Name",
      "Buyer Name",
      "Bank Name",
      "Currency",
      "TT Amount",
      "FIRX Number",
      "Available Balance",
      "Action"],
    items: [],
    Expansion_header: [
      "From",
      "Branch",
      "Description",
      "Recieved Date",
      "Commission/Bank Charges",
      "Recieved Amount USD",
      "Conversion Date",
      "Conversion Rate",
      "Converted Amount",
      "Payment Type"
    ],
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
      "col-td-th-2"
    ],
    eventId: ''
  }

  EDIT_FORM_DATA: any = {
    date: "",
    sbno: "",
    buyerName: "",
    BankName: "",
    currency: "",
    amount: "",
    billNo: "",
    BalanceAvail: "",
  }
  FILTER_FORM: any = ''
  
  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private documentService: DocumentService,
    private router: Router,
    private sharedData: SharedDataService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    public wininfo: WindowInformationService,
    public dialog: MatDialog,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService
  ) { }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content-wrap');
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.documentService.getRejectStatus(this.USER_DATA?.result?.sideMenu).subscribe((res: any) => {
      this.PENDING_DATA = res;
      console.log("this.PENDING_DATA", res)
    })
    this.item1 = [];
    this.documentService.getIrAdvice(1).subscribe((res: any) => {
      console.log(res), (this.item = res.data);
      console.log('king', this.item);
      this.item1 = res?.data;
        for (let value of res.data) {
          if (value['file'] == 'export') {
            if (this.ALL_FILTER_DATA['PI_PO_No'].filter((item: any) => item?.value == value?.pipo[0]?.pi_poNo)?.length == 0) {
              this.ALL_FILTER_DATA['PI_PO_No'].push({ value: value?.pipo[0]?.pi_poNo, id: value?.pipo[0]?._id });
            }
            if (this.ALL_FILTER_DATA['Buyer_Name'].filter((item: any) => item?.value == value?.buyerName)?.length == 0) {
              this.ALL_FILTER_DATA['Buyer_Name'].push({ value: value?.buyerName });
            }
            if (this.ALL_FILTER_DATA['NO'].filter((item: any) => item?.value == value?.billNo)?.length == 0) {
              this.ALL_FILTER_DATA['NO'].push({ value: value?.billNo });
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
            label: "Select FIRX Number",
            rules: {
              required: false,
            },
            item: this.ALL_FILTER_DATA['NO'],
            bindLabel: "value"
          },
        }
      this.item1.forEach((element, i) => {
        let commision = parseFloat(element.commision)
        let exchangeRate = parseFloat(element.exchangeRate)
        let pipoamount: any = parseFloat(element?.pipo[0]?.amount)
        this.item1[i].recUSD = (pipoamount - commision).toFixed(2);
        let cv = (parseFloat(this.item1[i].recUSD) * exchangeRate).toFixed(2);
        this.item1[i].convertedAmount = cv != "NaN" ? cv : null;
        element['BalanceAvail'] = element['BalanceAvail'] == 0 ? (element['BalanceAvail']).toString() : element['BalanceAvail']
      });
      this.FILTER_VALUE_LIST = this.item1;
      this.ForexAdviceTable(this.item1);
      console.log('exchangeRate', this.item1);
    },
      (err) => console.log(err)
    );
    this.userService.getTeam().subscribe((data) => {
      console.log(data['data'][0]);
      this.location = data['data'][0]['location'];
      this.commodity = data['data'][0]['commodity'];
      console.log(this.location);
      console.log('jsadffhsjshd', this.commodity);
      console.log('team data', data);
      this.location = this.location.filter((value, index) => this.location.indexOf(value) === index);
      this.commodity = this.commodity.filter((value, index) => this.commodity.indexOf(value) === index);
    }, (error) => {
      console.log('error');
    });
  }
  
  onSubmit(value: any) {
    let form_value: any = {
      buyerName: value?.value?.buyerName,
      date: value?.value?.date,
      billNo: value?.value?.NO
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

    this.documentService.filterAnyTable(removeEmptyValues(form_value), 'iradvices').subscribe((resp: any) => {
      console.log(resp, value, "iradvices")
      this.FILTER_VALUE_LIST = resp?.data?.length != 0 ? resp?.data : this.item;
      this.ForexAdviceTable(this.FILTER_VALUE_LIST)
    });
  }

  reset() {
    this.FILTER_VALUE_LIST = this.item;
    this.ForexAdviceTable(this.FILTER_VALUE_LIST)
  }


  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }

  ForexAdviceTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['pipo']),
          date:  moment(element['date']).format("DD-MM-YYYY"),
          boeno: element['sbno'],
          partyName: element['partyName'],
          buyerName: element['buyerName'],
          BankName: element['BankName']?.value,
          currency: element['currency'],
          amount: element['amount'],
          billNo: element['billNo'],
          BalanceAvail: element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element['amount'],
          ITEMS_STATUS: this.documentService.getDateStatus(element?.createdAt) == true ? 'New' : 'Old',
          Expansion_Items: [{
            From: element['origin'],
            Branch: element['location'],
            Description: element['commodity'],
            RecievedDate:  moment(element['recievedDate']).format("DD-MM-YYYY"),
            CommissionBankCharges: element['commision'],
            RecievedAmountUSD: element['recUSD'],
            ConversionDate:  moment(element['conversionDate']).format("DD-MM-YYYY"),
            ConversionRate: element['exchangeRate'],
            ConvertedAmount: element['convertedAmount'],
            PaymentType: element['PaymentType'],
          }],
          isExpand: false,
          disabled: element['deleteflag'] != '-1' ? false : true,
          RoleType: this.USER_DATA?.result?.RoleCheckbox
        })
      });
      if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
        this.FILTER_VALUE_LIST_NEW['ExpansionKeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0]['Expansion_Items'][0])
        this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'ITEMS_STATUS')
      }
    });
  }

  async removeEmpty(data: any) {
    await data.forEach(element => {
      for (const key in element) {
        if (element[key] == '' || element[key] == null || element[key] == undefined && element[key] != 0) {
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

  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item1.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length == 0) {
      this.FILTER_VALUE_LIST = this.item1;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item1;
  }

  newIrAdvice() {
    console.log('upload');
    this.sharedData.changeretunurl('home/inward-remittance-advice');
    this.router.navigate([
      'home/upload',
      { file: 'export', document: 'irAdvice' },
    ]);
  }

  openIradvice(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
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

  viewpdf(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(this.FILTER_VALUE_LIST[a?.index]['doc']);
    }, 200);
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateIrAdvice(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Forex Advice Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    // this.SELECTED_VALUE = '';
    // this.SELECTED_VALUE = this.FILTER_VALUE_LIST[data?.index];
    // this.EDIT_FORM_DATA = {
    //   date: this.SELECTED_VALUE['date'],
    //   sbno: this.SELECTED_VALUE['sbno'],
    //   buyerName: this.SELECTED_VALUE['buyerName'],
    //   BankName: this.SELECTED_VALUE['BankName'],
    //   currency: this.SELECTED_VALUE['currency'],
    //   amount: this.SELECTED_VALUE['amount'],
    //   billNo: this.SELECTED_VALUE['billNo'],
    //   BalanceAvail: this.SELECTED_VALUE['BalanceAvail'] != undefined ? this.SELECTED_VALUE['BalanceAvail'] : this.SELECTED_VALUE['amount'],
    // }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "item": JSON.stringify(this.FILTER_VALUE_LIST[data?.index])
      }
    };
    this.router.navigate([`/home/Summary/Export/Edit/InwardRemittanceAdvice`], navigationExtras);
    this.toastr.warning('Forex Advice Row Is In Edit Mode');
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
      this.documentService.deleteById({ id: id, tableName: 'iradvices' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'iradvices',
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
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new ForexAdviceFormat(this.FILTER_VALUE_LIST).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Forex Advice.xlsx');
  }

}

class ForexAdviceFormat {
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
        sbno: element['sbno'],
        buyerName: this.getBuyerName(element['buyerName']),
        BankName: element['BankName']?.value,
        currency: element['currency'],
        amount: element['amount'],
        billNo: element['billNo'],
        From: element['origin'],
        Branch: element['location'],
        Description: element['commodity'],
        RecievedDate: element['recievedDate'],
        CommissionBankCharges: element['commision'],
        RecievedAmountUSD: element['recUSD'],
        ConversionDate: element['conversionDate'],
        ConversionRate: element['exchangeRate'],
        ConvertedAmount: element['convertedAmount'],
        PaymentType: element['PaymentType'],
        BalanceAvail: element['BalanceAvail'] != undefined ? element['BalanceAvail'] : element['amount'],
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