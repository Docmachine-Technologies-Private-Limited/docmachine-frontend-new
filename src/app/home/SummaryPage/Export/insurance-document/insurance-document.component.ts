import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as xlsx from 'xlsx';
import * as data1 from '../../../../currency.json';
import { DocumentService } from '../../../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../service/user.service';
import { Router } from '@angular/router';
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../confirm-dialog-box/confirm-dialog-box.component';
import moment from "moment";
import { PipoDataService } from '../../../../service/homeservices/pipo.service';

@Component({
  selector: 'export-insurance-document-summary',
  templateUrl: './insurance-document.component.html',
  styleUrls: ['./insurance-document.component.scss']
})
export class InsuranceDocumentComponent implements OnInit {
  @ViewChild('insurance', { static: false }) insurance: ElementRef;
  public item: any;
  public item1: any = [];
  public viewData: any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  USER_DATA: any = [];
  filtervisible: boolean = false;
  FILTER_VALUE_LIST: any = [];
  PIPO_DROP_DOWN_DATA: any = [];
  PIPO_SELECTED_DROP_DOWN_DATA: any = {};
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
      "IP No.",
      "Start Date",
      "Expiry Date",
      "IP Amount",
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
      "col-td-th-1"
    ],
    eventId: ''
  }
  EDIT_FORM_DATA: any = {
    date: '',
    insuranceNumber: '',
    insuranceAmount: '',
    currency: '',
    buyerName: '',
    StartDate: "",
    Expirydate: "",
    UtilizationAddition: [{
      pi_poNo: "",
      amount: "",
      UtilizationAmount: 0,
      buyerName:""
    }]
  }
  FILTER_FORM: any = ''

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
    public dialog: MatDialog,
  ) {
  }

  async ngOnInit() {
    this.FILTER_VALUE_LIST = [];
    this.wininfo.set_controller_of_width(270, '.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.item = [];
    this.documentService.getInsurance().subscribe((res: any) => {
        this.item = res?.data;
        for (let value of res.data) {
          if (value['file'] == 'export') {
            if (this.ALL_FILTER_DATA['PI_PO_No'].filter((item: any) => item?.value == value?.pipo[0]?.pi_poNo)?.length == 0) {
              this.ALL_FILTER_DATA['PI_PO_No'].push({ value: value?.pipo[0]?.pi_poNo, id: value?.pipo[0]?._id });
            }
            if (this.ALL_FILTER_DATA['Buyer_Name'].filter((item: any) => item?.value == value?.buyerName)?.length == 0) {
              this.ALL_FILTER_DATA['Buyer_Name'].push({ value: value?.buyerName });
            }
            if (this.ALL_FILTER_DATA['NO'].filter((item: any) => item?.value == value?.insuranceNumber)?.length == 0) {
              this.ALL_FILTER_DATA['NO'].push({ value: value?.insuranceNumber });
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
            label: "Select IP NO.",
            rules: {
              required: false,
            },
            item: this.ALL_FILTER_DATA['NO'],
            bindLabel: "value"
          },
        }
        this.FILTER_VALUE_LIST = this.item;
        this.InsuranceNoTable(this.item)
        console.log(res, 'yuyuyuyuyuyuyuuy')
      }, (err) => console.log(err));
    this.pipodataservice.getPipoList("export").then((res: any) => {
      this.PIPO_DROP_DOWN_DATA = [];
      this.PIPO_SELECTED_DROP_DOWN_DATA = [];
      res?.pipoModelList?.forEach(element => {
        this.PIPO_SELECTED_DROP_DOWN_DATA[element?._id] = {
          pi_poNo: element?.pi_poNo,
          amount: element?.amount,
          UtilizationAmount: 0,
          buyerName: element?.buyerName,
        }
        this.PIPO_DROP_DOWN_DATA.push({
          pi_poNo: element?.pi_poNo,
          amount: element?.amount,
          UtilizationAmount: 0,
          id: element?._id,
          buyerName: element?.buyerName,
        });
      });
      console.log(res, this.PIPO_DROP_DOWN_DATA, this.PIPO_SELECTED_DROP_DOWN_DATA, "pipodataservice")

    })
  }
  
  onSubmit(value: any) {
    let form_value: any = {
      buyerName: value?.value?.buyerName,
      date: value?.value?.date,
      insuranceNumber: value?.value?.NO
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

    this.documentService.filterAnyTable(removeEmptyValues(form_value), 'insurances').subscribe((resp: any) => {
      console.log(resp, value, "insurances")
      this.FILTER_VALUE_LIST = resp?.data?.length != 0 ? resp?.data : this.item;
      this.InsuranceNoTable(this.FILTER_VALUE_LIST)
    });
  }

  reset() {
    this.FILTER_VALUE_LIST = this.item;
    this.InsuranceNoTable(this.FILTER_VALUE_LIST)
  }


  InsuranceNoTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['UtilizationAddition']),
          date: moment(element['date']).format("DD-MM-YYYY"),
          insuranceNumber: element['insuranceNumber'],
          StartDate: moment(element['StartDate']).format("DD-MM-YYYY"),
          Expirydate: moment(element['Expirydate']).format("DD-MM-YYYY"),
          insuranceAmount: element['insuranceAmount'],
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

  openInsuranceDoc(content) {
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
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
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
    this.documentService.updateInsurance(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Insurance Document Row Is Updated Successfully.');
        console.log(data)
      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateInsurance(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Insurance Document Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  newInsurance() {
    this.router.navigate(['/home/upload/Export/Insurancedocuments']);
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    this.SELECTED_VALUE = '';
    this.SELECTED_VALUE = this.FILTER_VALUE_LIST[data?.index];
    this.EDIT_FORM_DATA = {
      date: this.SELECTED_VALUE['date'],
      insuranceNumber: this.SELECTED_VALUE['insuranceNumber'],
      StartDate: this.SELECTED_VALUE['StartDate'],
      Expirydate: this.SELECTED_VALUE['Expirydate'],
      insuranceAmount: this.SELECTED_VALUE['insuranceAmount'],
      currency: this.SELECTED_VALUE['currency'],
      buyerName: this.SELECTED_VALUE['buyerName'],
      UtilizationAddition: this.SELECTED_VALUE['UtilizationAddition'].length != 0 && this.SELECTED_VALUE['UtilizationAddition']!="NF" ? this.SELECTED_VALUE['UtilizationAddition'] : [{
        pi_poNo: "",
        amount: "",
        UtilizationAmount: 0,
        buyerName:""
      }]
    }
    console.log(this.EDIT_FORM_DATA, "EDIT_FORM_DATA")
    this.toastr.warning('Insurance Document Row Is In Edit Mode');
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
      this.documentService.deleteById({ id: id, tableName: 'insurances' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'insurances',
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
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new InsurancesFormat(this.FILTER_VALUE_LIST).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'insurances.xlsx');
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
      buyerName:""
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


class InsurancesFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['UtilizationAddition']),
        date: moment(element['date']).format("YYYY-MM-DD"),
        insuranceNumber: element['insuranceNumber'],
        StartDate: moment(element['StartDate']).format("YYYY-MM-DD"),
        Expirydate: moment(element['Expirydate']).format("YYYY-MM-DD"),
        insuranceAmount: element['insuranceAmount'],
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
