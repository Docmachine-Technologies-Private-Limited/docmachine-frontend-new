import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
import * as xlsx from 'xlsx';
import { Router } from '@angular/router';
import { DocumentService } from '../../service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
import { WindowInformationService } from '../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-destruction',
  templateUrl: './destruction.component.html',
  styleUrls: ['./destruction.component.scss']
})
export class DestructionComponent implements OnInit {

  @ViewChild('destruction', { static: false }) destruction: ElementRef;
  public item = [];
  public item1 = [];
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
    Destruction_Certificate_No: [],
    Currency: [],
    DATE: []
  };
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Pipo No.",
      "DATE",
      "Destruction Certificate No.",
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
      "col-td-th-1"
    ],
    eventId: ''
  }
  EDIT_FORM_DATA: any = {
    destructionDate: '',
    destructionNumber: '',
    buyerName: '',
  }
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
  ) { }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(270, '.content-wrap');
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA);
    this.item = [];
    this.documentService.getDestructionfile("export").subscribe(
      (res: any) => {
        this.item = res?.data;
        this.FILTER_VALUE_LIST = this.item;
        for (let value of res.data) {
          if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency) == false) {
            this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
          }
          value?.buyerName.forEach(element => {
            if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
              this.ALL_FILTER_DATA['Buyer_Name'].push(element);
            }
          });
          if (this.ALL_FILTER_DATA['Destruction_Certificate_No'].includes(value?.destructionNumber) == false) {
            this.ALL_FILTER_DATA['Destruction_Certificate_No'].push(value?.destructionNumber);
          }
          if (this.ALL_FILTER_DATA['DATE'].includes(value?.destructionDate) == false) {
            this.ALL_FILTER_DATA['DATE'].push(value?.destructionDate);
          }
        }
        this.DestructionTable(this.item)
        console.log(res, 'getDestructionfile');
      },
      (err) => console.log(err)
    );
  }

  DestructionTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      await newdata?.forEach(async (element) => {
        await this.FILTER_VALUE_LIST_NEW['items'].push({
          PipoNo: this.getPipoNumber(element['pipo']),
          destructionDate: element['destructionDate'],
          destructionNumber: element['destructionNumber'],
          buyerName: element['buyerName'],
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

  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }
  openDestruction(content) {
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
  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item.filter((item: any) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length == 0) {
      this.FILTER_VALUE_LIST = this.item;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item;
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
    return data.pipo.map((x) => { return x.pi_poNo; });
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
    this.documentService.updateDestruction(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Destruction Certificate updated successfully.');

      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );
  }

  toSaveNew(data, id, EditSummaryPagePanel: any) {
    console.log(data);
    this.documentService.updateDestruction(data, id).subscribe((data) => {
      console.log(data);
      this.toastr.success('Destruction Certificate Row Is Updated Successfully.');
      this.ngOnInit();
      EditSummaryPagePanel?.displayHidden
    }, (error) => {
      console.log('error');
    });
  }

  SELECTED_VALUE: any = '';
  toEdit(data: any) {
    this.SELECTED_VALUE = '';
    this.SELECTED_VALUE = this.FILTER_VALUE_LIST[data?.index];
    this.EDIT_FORM_DATA = {
      destructionDate: this.SELECTED_VALUE['destructionDate'],
      destructionNumber: this.SELECTED_VALUE['destructionNumber'],
      buyerName: this.SELECTED_VALUE['buyerName'],
    }
    this.toastr.warning('Destruction Certificate Row Is In Edit Mode');
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
      this.documentService.deleteById({ id: id, tableName: 'destructions' }).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
      }, (err) => console.log(err))
    } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
      var approval_data: any = {
        id: id,
        tableName: 'destructions',
        deleteflag: '-1',
        userdetails: this.USER_DATA['result'],
        status: 'pending',
        dummydata: this.item1[index],
        Types: 'deletion',
        TypeOfPage: 'summary',
        FileType: this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox, id, index, approval_data, () => {
        this.ngOnInit();
      });
    }
  }

  newDest() {
    this.sharedData.changeretunurl('home/destruction')
    this.router.navigate(['home/upload', { file: 'export', document: 'destruction' }]);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new DestructionFormat(this.FILTER_VALUE_LIST).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Destruction.xlsx');
  }
}

class DestructionFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element['pipo']),
        destructionDate: element['destructionDate'],
        destructionNumber: element['destructionNumber'],
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