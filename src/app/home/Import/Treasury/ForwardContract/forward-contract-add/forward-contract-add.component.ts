import { Component, Input, OnInit, Output, ViewChild, } from '@angular/core';
import { Router } from "@angular/router";
import $ from 'jquery'
declare var kendo: any;

import { ToastrService } from 'ngx-toastr';
import { DocumentService } from "../../../../../service/document.service";
import { PipoDataService } from "../../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../../../merge-pdf-list.service';

@Component({
  selector: 'forward-contract-add',
  templateUrl: './forward-contract-add.component.html',
  styleUrls: ['./forward-contract-add.component.scss']
})
export class ForwardContractAddComponent implements OnInit {
  @Input('data') data: any = '';
  @Input('id') id: any = '';
  FORM_DATA: any = {
    BookingDate: '',
    ForwardRefNo: '',
    BuySell: '',
    Currency: '',
    BookingAmount: '',
    UtilizedAmount: '',
    CancellationDate:'',
    CancellationAmount: '',
    AvailableAmount: '',
    FromDate: '',
    ToDate: '',
    NetRate: '',
    CancellationRate: '',
    BookedUnderFacility: '',
    ImportExport: '',
    Status: '',
    Underlying: '',
  }
  constructor(private toastr: ToastrService,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public wininfo: WindowInformationService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,) { }

  ngOnInit(): void {
    console.log(this.data,'ghshgjfsfsdgfsdjfgsdjfgd')
    if (this.data != '') {
       this.FORM_DATA=this.data?.data;
    }else{
      this.FORM_DATA = {
        BookingDate: '',
        ForwardRefNo: '',
        BuySell: '',
        Currency: '',
        BookingAmount: '',
        UtilizedAmount: '',
        AvailableAmount: '',
        FromDate: '',
        ToDate: '',
        NetRate: '',
        BookedUnderFacility: '',
        ImportExport: '',
        Underlying: '',
      }
    }
  }
  SubmitForm(value: any) {
    console.log(value, 'sdfgsjgdjfd')
    this.FORM_CHECK_VALUE(value).then(async (res: any) => {
      console.log(value, res, 'RequestforBCQuote')
      if (res == true) {
        this.toastr.error('Please check some input filed is empty...');
        return;
      } else {
        this.documentService.ForwardContractadd(value).subscribe((ForwardContract: any) => {
          console.log(ForwardContract, 'ForwardContract')
          this.toastr.success('ForwardContract added successfully....')
          window.location.reload();
          this.router.navigate(['home/Forward-Contract-Summary']);
        })
      }
    })
  }
  UpdateForm(value: any) {
    delete value?.createdAt
    delete value?.updatedAt
    delete value?.userId
    delete value?.__v
    delete value?._id
    delete value?.date1days
    delete value?.date3days
    delete value?.date7days
    delete value?.dateduesdays
    delete value?.userDetails
    delete value?.MailSend1days
    delete value?.MailSend3days
    delete value?.MailSend7days
    delete value?.MailSendduesdays
    
    console.log(value, 'sdfgsjgdjfd')

    this.FORM_CHECK_VALUE(value).then(async (res: any) => {
      console.log(value, res, 'RequestforBCQuote')
      if (res == true) {
        this.toastr.error('Please check some input filed is empty...');
        return;
      } else {
        this.documentService.ForwardContract_update({ id: this.data?.index, data: value }).subscribe((ForwardContract: any) => {
          console.log(ForwardContract, 'ForwardContract')
          this.toastr.success('ForwardContract updated successfully....')
          window.location.reload();
          this.router.navigate(['home/Forward-Contract-Summary']);
        })
      }
    })
  }
  async FORM_CHECK_VALUE(value: any) {
    let tempbol: boolean = false;
    for (const key in value) {
      console.log(value)
      if (value[key] == '' || value[key] == null || value[key] == undefined) {
        tempbol = true;
        break;
      }
    }
    return await tempbol;
  }
  ChangesBuySell(value: any) {
    this.FORM_DATA['ImportExport'] = value == 'Buy' ? 'Import' : 'Export'
  }
}
