import {DocumentService} from '../../service/document.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {UserService} from './../../service/user.service';
import * as data1 from '../../currency.json';

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {ActivatedRoute, Data, NavigationStart, Router} from '@angular/router';
import * as xlsx from 'xlsx';
import {SharedDataService} from "../shared-Data-Servies/shared-data.service";
import { WindowInformationService } from '../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';


@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})

export class CreditNoteComponent implements OnInit {
  @ViewChild('creditnotes', {static: false}) creditnotes: ElementRef;
  public item: any;
  public item1:any = [];
  public viewData: any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;
  filtervisible: boolean = false;
  USER_DATA:any=[];
  FILTER_VALUE_LIST: any = [];
  ALL_FILTER_DATA: any = {
    PI_PO_No: [],
    Buyer_Name: [],
    C_N_No: [],
    Currency: [],
    DATE: []
  };

  constructor(
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private sharedData: SharedDataService,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,
  ) {
  }

  async ngOnInit() {
    this.FILTER_VALUE_LIST=[];
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    console.log("this.USER_DATA", this.USER_DATA)
    this.item1=[];
      this.documentService.getCredit().subscribe(
        (res: any) => {
          for (let value of res.data) {
            if (value['file'] == 'export') {
              this.item1.push(value);
              this.FILTER_VALUE_LIST.push(value);
              if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency)==false) {
                this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
              }
              value?.buyerName.forEach(element => {
                if (this.ALL_FILTER_DATA['Buyer_Name'].includes(element)==false && element!='' && element!=undefined) {
                  this.ALL_FILTER_DATA['Buyer_Name'].push(element);
                }
              });
              if ( this.ALL_FILTER_DATA['C_N_No'].includes(value?.creditNoteNumber)==false) {
                this.ALL_FILTER_DATA['C_N_No'].push(value?.creditNoteNumber);
              }
              if ( this.ALL_FILTER_DATA['DATE'].includes(value?.date)==false) {
                this.ALL_FILTER_DATA['DATE'].push(value?.date);
              }
            }
          }
          console.log(res,'yuyuyuyuyuyuyuuy')
        },
        (err) => console.log(err)
      );

    }


  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }

  openCreditNote(content) {
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

  viewCN(a) {

    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
      a['doc']
    );
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateCredit(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('PI/PO updated successfully.');

      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );


  }

  newCredit() {
    this.sharedData.changeretunurl('home/credit-note')
    this.router.navigate(['home/upload', {file: 'export', document: 'creditNote'}]);
  }

  filter(value, key) {
    this.FILTER_VALUE_LIST = this.item1.filter((item) => item[key].indexOf(value) != -1);
    if (this.FILTER_VALUE_LIST.length== 0) {
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
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.creditnotes.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'creditnotes.xlsx');
  }

  toEdit(index) {
    this.optionsVisibility[index] = true;
    this.toastr.warning('PI/PO Is In Edit Mode');
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
      this.documentService.deleteById({id:id,tableName:'creditnotes'}).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
    }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'creditnotes',
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


}
