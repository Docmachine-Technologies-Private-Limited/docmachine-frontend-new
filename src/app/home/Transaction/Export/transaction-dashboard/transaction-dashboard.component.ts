import { DocumentService } from '../../../../service/document.service';
import { UserService } from '../../../../service/user.service';
import { WindowInformationService } from '../../../../service/window-information.service';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DomSanitizer } from '@angular/platform-browser';
import { MergePdfService } from '../../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';
import * as xlsx from 'xlsx';

@Component({
  selector: 'export-transaction-dashboard',
  templateUrl: './transaction-dashboard.component.html',
  styleUrls: ['./transaction-dashboard.component.scss']
})
export class TransactionDashboardComponent implements OnInit {
  displayedColumns: string[] = ['Unique', 'Transaction Type', 'fileType'];
  TRANSACTION_DATA: any = [];
  USER_DATA_VIEW: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  TRANSACTION_NAME: any = ''
  LOADER_ON_OFF: any = false;
  public config: DropzoneConfigInterface;
  api_base: any;
  authToken: any;
  headers: { Authorization: any; timeout: string; };
  benneDetail: any = [];
  TRANSACTION_DASHBOARD_LIST: any = {
    Export: [
      { name: "Export Bill Regularisation", isActive: false },
      { name: "Export Bill Lodgement", isActive: false },
      { name: "Inward Remittance Disposal", isActive: false },
      { name: "Export Bill Realisation", isActive: false }],
    Import: ["Import-Direct-Payment", "Advance-Remittance-flow"]
  };

  constructor(private actRoute: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService,
    public router: Router,
    public sanitizer: DomSanitizer,
    public pipoDataService: PipoDataService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public wininfo: WindowInformationService) {
    this.api_base = userService.api_base;
  }

  UploadUrl: any = '';
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.TRANSACTION_NAME = params.get('id')?.split(" ")?.join('-');
      // console.log(this.TRANSACTION_NAME=='Export-Bill-Regularisation')
      // this.documentService.filterAnyTable({
      //   TypeTransaction: this.TRANSACTION_NAME?.split(" ")?.join('-'),
      // }, 'ExportTransaction').subscribe((res: any) => {
      //   this.TRANSACTION_DATA = res?.data;
      //   console.log(res, this.TRANSACTION_DATA, "TransactionDashboardComponent")
      // });
    });
  }

  onTabChanges(value: any) {
    console.log(value, "onTabChanges")
    this.TRANSACTION_DATA = [];
    this.TRANSACTION_NAME = value?.MATSTEP_LABEL != undefined && value?.MATSTEP_LABEL != null ? value?.MATSTEP_LABEL?.split(" ")?.join('-') : value?.name?.split(" ")?.join('-');
    this.documentService.filterAnyTable({
      TypeTransaction: value?.MATSTEP_LABEL != undefined && value?.MATSTEP_LABEL != null ? value?.MATSTEP_LABEL?.split(" ")?.join('-') : value?.name?.split(" ")?.join('-'),
      "$or": [{ "deleteflag": '2' }]
    }, 'ExportTransaction').subscribe((res: any) => {
      this.TRANSACTION_DATA = res?.data;
      console.log(res, this.TRANSACTION_DATA, "TransactionDashboardComponent")
    });
  }

  getPipoList(data: any, key: any) {
    var temp: any = [];
    for (let index = 0; index < data?.length; index++) {
      temp.push(data[index][key]);
    }
    return temp.filter((item, index) => temp.indexOf(item) === index);
  }

  getPipoNumber(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.pi_poNo);
    });
    return temp.join(',')
  }

  getShippingBillCuurency(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.fobCurrency);
    });
    return temp.join(',')
  }

  getShippingBill_Details(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp1.push(element?.sbdate);
      temp2.push(element?.sbno);
      temp3.push(element?.fobValue);
    });
    return { SB_DATE: temp1.join(','), SB_NO: temp2.join(','), SB_AMOUNT: temp3.join(',') }
  }

  getFIRX_DETAILS(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      element?.firxdetails?.forEach(Firxelement => {
        temp1.push(Firxelement?.firxDate);
        temp2.push(Firxelement?.firxNumber);
        temp3.push(Firxelement?.FirxUsed_Balance);
      });
    });
    return { FIRX_DATE: temp1.join(','), FIRX_NO: temp2.join(','), FIRX_AMOUNT: temp3.join(',') }
  }

  getPipoAmountSum(pipo: any) {
    return pipo?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
  }

  getPipoId(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?._id);
    });
    return temp.join(',')
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(new DataFormat(this.TRANSACTION_DATA).get());
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, `${this.TRANSACTION_NAME}_${new Date().getTime()}.xlsx`);
  }

}

class DataFormat {
  data: any = [];
  constructor(data: any) {
    this.data = data;
  }

  get() {
    var temp: any = [];
    this.data?.forEach(element => {
      temp.push({
        PipoNo: this.getPipoNumber(element?.pipo),
        currency: this.getShippingBillCuurency(element?.SBRef),
        Amount: this.getPipoAmountSum(element?.pipo),
        SbNo: this.getSbNo(element?.SBRef),
        IRMDate: this.getFIRX_DETAILS(element?.SBRef)?.FIRX_DATE,
        FIRXNo: this.getFIRX_DETAILS(element?.SBRef)?.FIRX_NO,
        IRMAmount:this.getFIRX_DETAILS(element?.SBRef)?.FIRX_AMOUNT,
        LodgementRefno: element?.Ref_Data?.blCopyRef?.blcopyrefNumber,
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

  getShippingBillCuurency(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.fobCurrency);
    });
    return temp.join(',')
  }

  getShippingBill_Details(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp1.push(element?.sbdate);
      temp2.push(element?.sbno);
      temp3.push(element?.fobValue);
    });
    return { SB_DATE: temp1.join(','), SB_NO: temp2.join(','), SB_AMOUNT: temp3.join(',') }
  }

  getFIRX_DETAILS(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      element?.firxdetails?.forEach(Firxelement => {
        temp1.push(Firxelement?.firxDate);
        temp2.push(Firxelement?.firxNumber);
        temp3.push(Firxelement?.FirxUsed_Balance);
      });
    });
    return { FIRX_DATE: temp1.join(','), FIRX_NO: temp2.join(','), FIRX_AMOUNT: temp3.join(',') }
  }

  getPipoAmountSum(pipo: any) {
    return pipo?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
  }

  getPipoId(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?._id);
    });
    return temp.join(',')
  }
  
  getSbNo(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.sbno);
    });
    return temp.join(',')
  }
}
