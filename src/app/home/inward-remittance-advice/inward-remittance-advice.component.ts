import {
  Component,
  ElementRef,
  OnInit,
  resolveForwardRef,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../service/document.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-Data-Servies/shared-data.service';
import * as xlsx from 'xlsx';
import * as data1 from '../../currency.json';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowInformationService } from '../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss'],
})
export class InwardRemittanceAdviceComponent implements OnInit {
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
    Party_Name: [],
    SB_Number: [],
    From: [],
    Branch: [],
    Description: [],
    FIRX_Number_ID: [],
    Currency: [],
    DATE: []
  };
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
    this.documentService.getIrAdvice(1).subscribe(
      (res: any) => {
        console.log(res), (this.item = res.data);
        console.log('king', this.item);
        for (let value of this.item) {
          if (value['file'] == 'export') {
            this.item1.push(value);
            if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency) == false) {
              this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
            }
            if (this.ALL_FILTER_DATA['Party_Name'].includes(value?.partyName) == false) {
              this.ALL_FILTER_DATA['Party_Name'].push(value?.partyName);
            }
            if (this.ALL_FILTER_DATA['SB_Number'].includes(value?.sbNo) == false) {
              this.ALL_FILTER_DATA['SB_Number'].push(value?.sbNo);
            }
            if (this.ALL_FILTER_DATA['From'].includes(value?.origin) == false) {
              this.ALL_FILTER_DATA['From'].push(value?.origin);
            }
            if (this.ALL_FILTER_DATA['Branch'].includes(value?.location) == false) {
              this.ALL_FILTER_DATA['Branch'].push(value?.location);
            }
            if (this.ALL_FILTER_DATA['Description'].includes(value?.commodity) == false) {
              this.ALL_FILTER_DATA['Description'].push(value?.commodity);
            }
            if (this.ALL_FILTER_DATA['FIRX_Number_ID'].includes(value?.billNo) == false) {
              this.ALL_FILTER_DATA['FIRX_Number_ID'].push(value?.billNo);
            }
            if (this.ALL_FILTER_DATA['DATE'].includes(value?.date) == false) {
              this.ALL_FILTER_DATA['DATE'].push(value?.date);
            }
          }
        }
        this.item1.forEach((element, i) => {
          let amount = element.amount
          let commision = parseFloat(element.commision)
          let exchangeRate = parseFloat(element.exchangeRate)
          let pipoamount: any = parseFloat(element?.pipo[0]?.amount)
          this.item1[i].recUSD = (pipoamount - commision).toFixed(2);
          let cv = (
            parseFloat(this.item1[i].recUSD) * exchangeRate
          ).toFixed(2);
          this.item1[i].convertedAmount = cv != "NaN" ? cv : null;
        });
        this.FILTER_VALUE_LIST = this.item1;
        console.log('exchangeRate', this.item1);
      },
      (err) => console.log(err)
    );
    this.userService.getTeam().subscribe(
      (data) => {
        console.log('llllllllllllllllllllllllllllllll');
        console.log(data['data'][0]);
        this.location = data['data'][0]['location'];
        this.commodity = data['data'][0]['commodity'];
        console.log(this.location);
        console.log('jsadffhsjshd', this.commodity);
        console.log('team data', data);
        this.location = this.location.filter(
          (value, index) => this.location.indexOf(value) === index
        );
        this.commodity = this.commodity.filter(
          (value, index) => this.commodity.indexOf(value) === index
        );
      },
      (error) => {
        console.log('error');
      }
    );

    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        console.log('Master Data File', res);
        this.item5 = res.data;
        this.merging();
        this.item5.forEach((element, i) => {
          this.origin[i] = element.countryOfFinaldestination;
        });
        this.origin = this.origin.filter(
          (value, index) => this.origin.indexOf(value) === index
        );

        console.log('Master Country', this.origin);
      },
      (err) => console.log(err)
    );

    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('Data fetched successfully', res), (this.item3 = res.data);
      },
      (err) => console.log(err)
    );
  }

  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }
  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log('Shailendra', data);
    this.documentService.updateIrAdvice(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Forex Advice Row Is Updated Successfully.');
      },
      (error) => {
        console.log('error');
      }
    );
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
  toEdit(index) {
    this.optionsVisibility[index] = true;
    this.toastr.warning('Forex Advice Row Is In Edit Mode');
  }

  newIrAdvice() {
    console.log('upload');
    this.sharedData.changeretunurl('home/inward-remittance-advice');
    this.router.navigate([
      'home/upload',
      { file: 'export', document: 'irAdvice' },
    ]);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(
      this.epltable.nativeElement
    );
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Forex Advice.xlsx');
  }

  merging() {
    let filterForexData: any = [];
    if (this.item5 && this.item5.length) {
      for (let irData of this.item1) {
        console.log('irdata', irData);
        var temp: any = [];
        for (let shippingdata of this.item5) {
          console.log('shipping', shippingdata);
          temp['deleteflag'] = shippingdata['deleteflag']
          for (let i = 0; i <= irData.sbNo.length; i++) {
            console.log('index of shipping Bill', irData.sbNo[i]);
            if (irData.sbNo[i] == shippingdata.sbno) {
              const newVal: any = { ...irData };
              console.log('Line no. 211', newVal);
              let sbBalance = shippingdata.fobValue;
              let irAmount = irData.amount
              let availableBalance = irAmount - sbBalance;

              if (availableBalance <= 0) {
                newVal['BalanceAvail'] = 0;
              } else {
                newVal['BalanceAvail'] = availableBalance;
              }

              console.log('Forex data Value', newVal);
              filterForexData.push(newVal);
            }
          }
        }
      }
      for (let irData of this.item1) {
        console.log("229", irData.sbNo.length)
        if (irData.sbNo.length == 0) {
          const newVal = { ...irData };
          let availableBal = irData.amount
          newVal['BalanceAvail'] = availableBal;
          filterForexData.push(newVal);
          console.log('235', filterForexData);
        }
      }

    } else {
      for (let ir of this.item1) {
        const newVal = { ...ir };
        let availableBal = ir.amount
        newVal['BalanceAvail'] = availableBal;
        filterForexData.push(newVal);
        console.log('245', filterForexData);
      }
    }
    this.item6 = filterForexData
    console.log("Full data", this.item6)
  }

  openIradvice(content) {
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

  viewpdf(a) {
    this.viewData = ''
    setTimeout(() => {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['doc']);
    }, 200);
  }
  handleDelete(id, index: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], id, index)
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
}
