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
import * as xlsx from 'xlsx';
import * as data1 from '../../currency.json';
import {DocumentService} from '../../service/document.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {UserService} from './../../service/user.service';
import {SharedDataService} from "../shared-Data-Servies/shared-data.service";
import {Router} from '@angular/router';
import { WindowInformationService } from '../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';


@Component({
  selector: 'app-insurance-document',
  templateUrl: './insurance-document.component.html',
  styleUrls: ['./insurance-document.component.scss']
})
export class InsuranceDocumentComponent implements OnInit {
  @ViewChild('insurance', {static: false}) insurance: ElementRef;
  public item: any;
  public item1:any = [];
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
    Insurance_No: [],
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
    this.FILTER_VALUE_LIST=[];
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    for (let index = 0; index < data1['default']?.length; index++) {
      this.ALL_FILTER_DATA['Currency'].push(data1['default'][index]['value']);
    }
    this.item1=[];
      this.documentService.getInsurance().subscribe(
        (res: any) => {
          for (let value of res.data) {
            if (value['file'] == 'export') {
              this.item1.push(value);
              this.FILTER_VALUE_LIST.push(value);
              if (this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency)==false) {
                this.ALL_FILTER_DATA['PI_PO_No'].push(this.getPipoNumbers(value));
              }
              if ( this.ALL_FILTER_DATA['Buyer_Name'].includes(value?.buyerName[0])==false) {
                this.ALL_FILTER_DATA['Buyer_Name'].push(value?.buyerName[0]);
              }
              if ( this.ALL_FILTER_DATA['Insurance_No'].includes(value?.insuranceNumber)==false) {
                this.ALL_FILTER_DATA['Insurance_No'].push(value?.insuranceNumber);
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

  openInsuranceDoc(content) {
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

  viewID(a) {

    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
      a['doc']
    );
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

  newInsurance() {
    console.log('upload');
    this.sharedData.changeretunurl('home/insurance-document')
    this.router.navigate(['home/upload', {file: 'export', document: 'insuranceCopy'}]);
  }

  toEdit(index) {
    this.optionsVisibility[index] = true;
    this.toastr.warning('Insurance Document Row Is In Edit Mode');
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
      this.documentService.deleteById({id:id,tableName:'insurances'}).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
    }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'insurances',
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
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.insurance.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'importInsurance.xlsx');
  }

}
