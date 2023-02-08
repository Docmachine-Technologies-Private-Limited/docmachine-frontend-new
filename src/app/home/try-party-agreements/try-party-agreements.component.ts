import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DocumentService} from 'src/app/service/document.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {UserService} from './../../service/user.service'
import * as xlsx from 'xlsx';
import * as data1 from '../../currency.json';
import {Router} from '@angular/router';
import {SharedDataService} from "../shared-Data-Servies/shared-data.service";
import * as _ from 'lodash';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { MatDialog } from '@angular/material/dialog';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';
@Component({
  selector: 'app-try-party-agreements',
  templateUrl: './try-party-agreements.component.html',
  styleUrls: ['./try-party-agreements.component.scss']
})
export class TryPartyAgreementsComponent implements OnInit {

  @ViewChild('epltable', {static: false}) epltable: ElementRef;
  public item: any=[];
  public item1 = [];
  public viewData: any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  USER_DATA:any=[];
  filtervisible: boolean = false;
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    T_P_A_No: [],
    Currency: [],
    DATE: []
  };
  constructor(
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private sharedData: SharedDataService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,
  ) {
  }

  async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.item=[];
    this.documentService.getThird().subscribe(
      (res: any) => {
        console.log('Res', res);
        for (let value of res.data) {
          if (value['file'] == 'export') {
            this.item.push(value);
            this.FILTER_VALUE_LIST.push(value);
            if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency)==false) {
              this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
            }
            value?.buyerName.forEach(element => {
              if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element)==false && element!='' && element!=undefined) {
                this.ALL_FILTER_DATA['Buyer_Name'].push(element);
              }
            });
            if ( this.ALL_FILTER_DATA['T_P_A_No'].includes(value?.triPartyAgreementNumber)==false) {
              this.ALL_FILTER_DATA['T_P_A_No'].push(value?.triPartyAgreementNumber);
            }
            if ( this.ALL_FILTER_DATA['DATE'].includes(value?.date)==false) {
              this.ALL_FILTER_DATA['DATE'].push(value?.date);
            }
          }
        }
      },
      (err) => console.log(err)
    );

  }
  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length== 0) {
      this.FILTER_VALUE_LIST = this.item;
    }
  }
  resetFilter() {
    this.FILTER_VALUE_LIST = this.item;
  }

  openLetterOfCredit(content) {
    this.modalService
      .open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'})
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

  viewLC(a) {

    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
      a['doc']
    );
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    let document:any = {
      ..._.cloneDeep(data)
    };
    delete document.pipo;
    this.documentService.updateThird(document, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Tri-Party Agreement Row Is Updated Successfully.');

      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );


  }

  triParty() {
    this.sharedData.changeretunurl('home/try-party')
    this.router.navigate(['home/upload', {file: 'export', document: 'tryPartyAgreement'}]);

  }

  toEdit(index) {
    this.optionsVisibility[index] = true;
    this.toastr.warning('Tri-Party Agreement Row Is In Edit Mode');
  }
  handleDelete(id,index:any) {
    console.log(id,index,'dfsfhsfgsdfgdss');
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {maxWidth: "400px",data: dialogData});
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'],id,index)
      }
    });
  }

  deleteByRoleType(RoleCheckbox:string,id:any,index:any){
    if (RoleCheckbox==''){
      this.documentService.deleteById({id:id,tableName:'thirdparties'}).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
    }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'thirdparties',
        deleteflag:'-1',
        userdetails:this.USER_DATA['result'],
        status:'pending',
        dummydata:this.item1[index],
        Types:'deletion',
        TypeOfPage:'summary',
        FileType:this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox,id,index,approval_data,()=>{
        this.ngOnInit();
      });
    }
  }



  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Tri-Party.xlsx');
  }
}
