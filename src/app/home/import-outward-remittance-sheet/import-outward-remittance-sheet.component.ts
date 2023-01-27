import {
  Component,
  ElementRef,
  OnInit,
  resolveForwardRef,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from 'src/app/service/document.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-Data-Servies/shared-data.service';
import * as xlsx from 'xlsx';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowInformationService } from 'src/app/service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from 'src/app/service/aprroval-pending-reject-transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-import-outward-remittance-sheet',
  templateUrl: './import-outward-remittance-sheet.component.html',
  styleUrls: ['./import-outward-remittance-sheet.component.scss']
})
export class ImportOutwardRemittanceSheetComponent implements OnInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public optionsVisibility: any = [];
  // public optionsVisibility : boolean = false;
  test;
  public item: any;
  public item1 = [];
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
  USER_DATA:any=[];
  
  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private documentService: DocumentService,
    private router: Router,
    private sharedData: SharedDataService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    public wininfo: WindowInformationService,
    public AprrovalPendingRejectService:AprrovalPendingRejectTransactionsService,
    public dialog: MatDialog,

  ) {}

  async ngOnInit() {
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.documentService.getOrAdvice(1).subscribe(
      (res: any) => {
        console.log(res), (this.item = res.data);
        console.log('king', this.item);
        for (let value of this.item) {
          if (value['file'] == 'import') {
            console.log('avvvvvvvvvv', value);
            this.item1.push(value);
          }
        }
        this.item1.forEach((element, i) => {
          let amount = element.amount
          // .replace(/,/g, '');
          let commision = parseFloat(element.commision)
          // .replace(/,/g, '');
          let exchangeRate = parseFloat(element.exchangeRate)
          // .replace(/,/g, '');
          this.item1[i].recUSD = (amount - commision).toFixed(2);
          let cv = (
            parseFloat(this.item1[i].recUSD) * exchangeRate
          ).toFixed(2);
          this.item1[i].convertedAmount = cv != "NaN" ? cv: null;
        });
        console.log('sjsjs', this.item1);
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
        //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })
      },
      (error) => {
        console.log('error');
      }
    );

    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        console.log('Master Data File', res);
        // this.origin = res['data'][0]['countryOfFinaldestination']
        // console.log("jainshailendra",this.origin);
        this.item5 = res.data;
        this.merging();
        this.item5.forEach((element, i) => {
          this.origin[i] = element.countryOfFinaldestination;
        });
        this.origin = this.origin.filter(
          (value, index) => this.origin.indexOf(value) === index
        );

        console.log('Master Country', this.origin);

        // this.origin.forEach((element, i)=>{
        //   this.origin[i].ori = element[i]
        // })
        // console.log("Master Country2", this.origin)
      },
      (err) => console.log(err)
    );

    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('Data fetched successfully', res), (this.item3 = res.data);
      },
      (err) => console.log(err)
    );

    this.USER_DATA = await this.userService.getUserDetail();


  }

  getPipoNumbers(data) {
    return data.pipo.map((x) => {
      return x.pi_poNo;
    });
  }
  toSave(data, index) {
    this.optionsVisibility[index] = false;
    console.log('Shailendra', data);
    this.documentService.updateOrAdvice(data, data._id).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Forex Advice Row Is Updated Successfully.');
      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );
  }


    
  filter() {
    // this.getPipoData()
    this.filtervisible = !this.filtervisible

  }
  onclick() {
    this.filtervisible = !this.filtervisible
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

  newOrAdvice() {
    console.log('upload');
    this.sharedData.changeretunurl('home/Onward-remittance-advice');
    this.router.navigate([
      'home/upload',
      { file: 'import', document: 'orAdvice' },
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
    let filterForexData = [];
    if (this.item5 && this.item5.length) {
      for (let irData of this.item1) {
        console.log('irdata', irData);
        for (let shippingdata of this.item5) {
          console.log('shipping', shippingdata);
          for (let i = 0; i <= irData.sbNo.length; i++) {
            console.log('index of shipping Bill', irData.sbNo[i]);
            if (irData.sbNo[i] == shippingdata.sbno) {
              const newVal = { ...irData };
              console.log('Line no. 211', newVal);
              let sbBalance = shippingdata.fobValue;
              let irAmount = irData.amount
              // .replace(/,/g, ''));
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
        console.log("229",irData.sbNo.length)
        if(irData.sbNo.length == 0){
          const newVal = { ...irData };
          let availableBal = irData.amount
            // .replace(/,/g, ''));
          newVal['BalanceAvail'] = availableBal;
          filterForexData.push(newVal);
          console.log('235', filterForexData);
        }
      }

    } else {
      for (let ir of this.item1) {
        const newVal = { ...ir };
        let availableBal = ir.amount
          // .replace(/,/g, ''));
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

  viewIr(a) {
    ;
    this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['doc']);
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
      this.documentService.deleteById({id:id,tableName:'iradvices'}).subscribe((res) => {
        console.log(res)
        if (res) {
          this.ngOnInit()
        }
    }, (err) => console.log(err))
    } else if (RoleCheckbox=='Maker' || RoleCheckbox=='Checker' || RoleCheckbox=='Approver'){
      var approval_data:any={
        id:id,
        tableName:'iradvices',
        deleteflag:'-1',
        userdetails:this.USER_DATA['result'],
        status:'pending',
        dummydata:this.item6[index],
        Types:'deletion',
        FileType:this.USER_DATA?.result?.sideMenu
      }
      this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox,id,index,approval_data,()=>{
        this.ngOnInit();
      });
    }
  }

}
