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
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'import-transaction-dashboard',
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
    public validator: UploadServiceValidatorService,
    public toastr: ToastrService,
    public wininfo: WindowInformationService) {
    this.api_base = userService.api_base;
  }

  UploadUrl: any = '';
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.TRANSACTION_NAME = params.get('id')?.split(" ")?.join('-');
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

  getPIPOCurrency(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.PIPO_LIST?.currency);
    });
    return temp.join(',')
  }
  getPIPOCurrency2(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.currency);
    });
    return temp.join(',')
  }

  getPIPOBenneName(pipo: any) {
    let temp: any = [];
    (pipo != 'NF' ? pipo : []).forEach(element => {
      temp.push(element?.benneName);
    });
    return temp.join(',')
  }

  getORM_Details(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    pipo?.forEach(ORMelement => {
      temp1.push(ORMelement?.date);
      temp2.push(ORMelement?.billNo);
      temp3.push(ORMelement?.amount);
    });
    return { ORM_DATE: temp1.join(','), ORM_NO: temp2.join(','), ORM_AMOUNT: temp3.join(',') }
  }

  getBOE_DETAILS(pipo: any) {
    let temp1: any = [];
    let temp2: any = [];
    let temp3: any = [];
    pipo?.forEach(BOEelement => {
      temp1.push(BOEelement?.boeDate);
      temp2.push(BOEelement?.boeNumber);
      temp3.push(BOEelement?.invoiceAmount);
    })
    return { BOE_DATE: temp1.join(','), BOE_NO: temp2.join(','), BOE_AMOUNT: temp3.join(',') }
  }

  getStatus(pipo: any) {
    let STATUS: boolean = false;
    if (pipo?.length != 0) {
      STATUS = true;
    }
    return STATUS;
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
  SELECTED_DATA_FLC:any=''
  uploadFLC(panel: any,data:any) {
    this.SELECTED_DATA_FLC=data;
    console.log(data,"uploadFLC")
    setTimeout(() => {
      this.validator.buildForm({
        FLCRefNo: {
          type: "text",
          value: "",
          label: "FLC Ref No.",
          rules: {
            required: true,
          }
        },
        IssuanceDate: {
          type: "date",
          value: "",
          label: "Issuance Date",
          rules: {
            required: true,
          }
        },
      }, 'FLCRefNo_UPLOAD').then((res) => {
        panel?.displayShow;
      });
    }, 200);
  }
  
  SubmitButton(formvalue: any,panel) {
    this.documentService.UpdateTransaction({ id: this.SELECTED_DATA_FLC._id, data: { FLCRef: formvalue?.value } }).subscribe((res: any) => {
      this.documentService.AnyUpdateTable({
        id: this.SELECTED_DATA_FLC?.LCTransactionRef[0]?._id,
      }, formvalue?.value, 'LCTransaction').subscribe((res: any) => {
        panel?.displayHidden;
        this.toastr.success('Successfully added...');
        this.onTabChanges({name:"LC Transaction"})
      })
    });
    console.log(formvalue, this.SELECTED_DATA_FLC,"formvalue")
  }
  
  SELECTED_DATA_BC:any=''
  uploadBC(panel: any,data:any) {
    this.SELECTED_DATA_BC=data;
    console.log(data,"uploadFLC")
    setTimeout(() => {
      this.validator.buildForm({
        BCRefNo: {
          type: "text",
          value: "",
          label: "BC Ref No.",
          rules: {
            required: true,
          }
        },
        DueDate: {
          type: "date",
          value: "",
          label: "Due Date",
          rules: {
            required: true,
          }
        },
      }, 'BCRefNo_UPLOAD').then((res) => {
        panel?.displayShow;
      });
    }, 200);
  }
  
  SubmitButtonBC(formvalue: any,panel) {
    this.documentService.UpdateTransaction({ id: this.SELECTED_DATA_BC._id, data: { BCRef: formvalue?.value } }).subscribe((res: any) => {
      panel?.displayHidden;
        this.toastr.success('Successfully added...');
        this.onTabChanges({name:"Buyer Credit"})
    });
    console.log(formvalue, this.SELECTED_DATA_BC,"formvalue")
  }
}

