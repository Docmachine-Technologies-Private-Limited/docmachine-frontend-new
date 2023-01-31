import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as xlsx from 'xlsx';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from '../shared-Data-Servies/shared-data.service';
import {ShippingbillDataService} from "../../service/homeservices/shippingbill.service";
import { WindowInformationService } from 'src/app/service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { UserService } from 'src/app/service/user.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss'],
})
export class ViewDocumentComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  @ViewChild('table', { static: false }) table: ElementRef;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public item1 = [];
  public item2 = [];
  public item3 = [];
  public item4 = [];
  public viewData: any;
  public closeResult: string;
  public user;
  public selectedRow;
  public showInvoice;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = '';
  public allTransactions: any = [];
  public optionsVisibility: any = [];
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  res;
  filtervisible: boolean = false

  piPoForm = new FormGroup({
    pi_poNo: new FormControl(''),
    benneName: new FormControl(''),
    currency: new FormControl(''),
    amount: new FormControl(''),
    incoterm: new FormControl(''),
    lastDayShipment: new FormControl(''),
    paymentTerm: new FormControl(''),
    pcRefNo: new FormControl(''),
  });
  url: any;
  file: any;
  doc: string;
  pipo: boolean;
  boe: boolean;
  sb: boolean;
  docu: any;
  USER_DATA:any=[];
  PENDING_DATA:any=[];
  constructor(
    public documentService: DocumentService,
    public shippingBillService: ShippingbillDataService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private sharedData: SharedDataService,
    public wininfo: WindowInformationService,
    private userService: UserService,
    public dialog: MatDialog,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService
  ) {}

 async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content-wrap');
    this.USER_DATA = await this.userService.getUserDetail();
    console.log("this.USER_DATA", this.USER_DATA)
    this.documentService.getRejectStatus(this.USER_DATA?.result?.sideMenu).subscribe((res: any)=>{
      this.PENDING_DATA = res;
      console.log("this.PENDING_DATA", res)
    })
    this.route.params.subscribe((params) => {
      this.file = this.route.snapshot.params['file'];
      if (this.file === 'sb') {
        this.doc = 'Shipping Bill';
        this.pipo = false;
        this.boe = false;
        this.sb = true;
        this.shippingBillService.getShippingBillList().then((res: any) => {
          this.shippingBillService.shippingbills$.subscribe((data: any) => {
            console.log('getShippingBillList',data)
            this.item1 = data;
          });
        });
      } else if (this.file === 'boe') {
        this.doc = 'BOE';
        this.pipo = false;
        this.boe = true;
        this.sb = false;
        this.documentService.getBoe(1).subscribe(
          (res: any) => {
            console.log(res), (this.item2 = res.data);
          },
          (err) => console.log(err)
        );
      } else if (this.file === 'pipo') {
        this.doc = 'PI/PO';
        this.pipo = true;
        this.boe = false;
        this.sb = false;
        this.documentService.getPipo().subscribe(
          (res: any) => {
            console.log('Data fetched successfully', res);
            this.item2 = res.data;
          },
          (err) => console.log(err)
        );
      }
      this.showInvoice = false;
      console.log('hello');
      // setTimeout(()=>{this.documentService.loading=false;},1000)
    });
  }

  filter() {
    // this.getPipoData()
    this.filtervisible = !this.filtervisible

  }
  onclick() {
    this.filtervisible = !this.filtervisible
  }
  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(
      this.epltable.nativeElement
    );
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'ShippingBill.xlsx');
  }

  hide() {
    this.sb = true;
    this.showInvoice = false;
  }
  newShipping() {
    this.sharedData.changeretunurl('home/view-document/sb');
    this.router.navigate([
      'home/upload',
      {
        file: 'export',
        document: 'sb',
      },
    ]);
  }

  getTransactions(selectedRowValues) {
    this.documentService
      .getTask({ pi_poNo: selectedRowValues, file: 'advance' })
      .subscribe(
        (res: any) => {
          this.allTransactions = res.task;
          console.log('ALL TRANSACTIONS', this.allTransactions);
        },
        (err) => console.log(err)
      );
  }

  getInvoices(selectedRowValues, i) {
    console.log('SELECTED', selectedRowValues);
    console.log('INDEX', i);
    console.log(selectedRowValues.doc);
    this.lastIndex = i;
    //this.docu = selectedRowValues.doc;
    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = '30%'),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  onExport() {
    this.export = !this.export;
  }

  onImport() {
    this.import = !this.import;
  }
  exBill() {
    this.Ax1 = !this.Ax1;
  }
  withBill() {
    this.Ax2 = !this.Ax2;
  }

  onNewTrans() {
    this.step1 = !this.step1;
  }

  toggleStep1() {
    this.step1 = false;
    this.showPdf = false;
  }

  // getTrasactions() {
  //   const data: any = this.documentService.getTask();
  //   this.allTransactions = data.task;
  // }

  viewTask(data) {
    console.log(data);
    if (!data.completed) {
      this.documentService.task = data;
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
      } else {
        console.log(this.selectedDoc);
        this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);
      }
    } else {
      this.router.navigateByUrl(`/home/completed-task/${data._id}`);
    }
  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    if (parseInt(this.selectedRow.amount) < 200000) {
      this.documentService.pdfData = this.selectedRow;
      this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
    } else {
      console.log(this.selectedDoc);

      this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);
    }
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

  viewCN(a) {

    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
      a['doc']
    );
  }

  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log(data);
    // this.res = new ShippingBill(data[1].data);
    this.documentService.updateMaster(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        console.log(data);
        this.toastr.success('Shipping Bill row is updated');
        // this.router.navigate(["home/view-document/sb"]);
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      (error) => {
        console.log('error');
      }
    );
  }

  toEdit(index) {
    this.optionsVisibility[index] = true;
    this.toastr.warning('Shipping Bill Row Is In Edit Mode');
  }
  handleDelete(id,index:any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("---->", dialogResult)
      if (dialogResult) {
        this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'],id,index)
      }
    });
  }

  deleteByRoleType(RoleCheckbox:string,id:any,index:any){
    if (RoleCheckbox==''){
        this.documentService.deleteById({id:id,tableName:'masterrecord'}).subscribe((res) => {
            console.log(res)
            if (res) {
              this.ngOnInit()
            }
        }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'masterrecord',
        deleteflag:'-1',
        userdetails:this.USER_DATA['result'],
        status:'pending',
        dummydata:this.item1[index],
        Types:'deletion',
        FileType:this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox,id,index,approval_data,()=>{
        this.ngOnInit();
      });
    }
  }
  transform(input:Array<any>): string {
    return input.join(',');
  }
}
