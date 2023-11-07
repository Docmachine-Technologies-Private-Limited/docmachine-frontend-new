import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, } from '@angular/core';
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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';

@Component({
  selector: 'forward-contract-add',
  templateUrl: './forward-contract-add.component.html',
  styleUrls: ['./forward-contract-add.component.scss']
})
export class ForwardContractAddComponent implements OnInit,OnChanges {
  @Input('data') data: any = '';
  @Input('id') id: any = '';
  FORM_DATA: any = {
    BookingDate: '',
    ForwardRefNo: '',
    BuySell: '',
    Currency: '',
    BookingAmount: '',
    UtilizedAmount: '',
    CancellationDate: '',
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
  FORWARD_CONTRACT: FormGroup;
  SUBMIT_ERROR: boolean = false;

  constructor(private toastr: ToastrService,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public wininfo: WindowInformationService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public validator: UploadServiceValidatorService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,) { }

  ngOnInit(): void {
    console.log(this.data, 'ghshgjfsfsdgfsdjfgsdjfgd')
  }
  SubmitForm(e: any) {
    console.log(e, 'sdfgsjgdjfd')
    e.value.Underlying= e?.value?.Underlying?.value!=undefined?e?.value?.Underlying?.value:e?.value?.Underlying
    e.value.Currency= e?.value?.Currency?.type!=undefined?e?.value?.Currency?.type:e?.value?.Currency
    e.value.BuySell= e?.value?.BuySell?.value!=undefined?e?.value?.BuySell?.value:e?.value?.BuySell
    
    this.documentService.ForwardContractadd(e?.value).subscribe((ForwardContract: any) => {
      console.log(ForwardContract, 'ForwardContract')
      this.toastr.success('ForwardContract added successfully....')
      window.location.reload();
      this.router.navigate(['home/Forward-Contract-Summary']);
    })
  }
  ngOnChanges(changes: SimpleChanges | any): void {
      console.log(changes,'sdfsdfsdfsdfsdfsdfsdfdf')
      if(changes.length!=0){
        this.validator.buildForm({
          BookingDate: {
            type: "date",
            value: changes[''],
            label: "Booking Date",
            rules: {
              required: true,
            },
          },
          ForwardRefNo: {
            type: "text",
            value: "",
            label: "Forward Ref No",
            rules: {
              required: true,
            },
          },
          BuySell: {
            type: "BuySell",
            value: "",
            label: "Buy/Sell",
            InputBindValue: 'ImportExport',
            rules: {
              required: true,
            },
          },
          Currency: {
            type: "currency",
            value: "",
            label: "Currency",
            rules: {
              required: true,
            },
          },
          BookingAmount: {
            type: "number",
            value: "",
            label: "Booking Amount",
            rules: {
              required: true,
            },
          },
          UtilizedAmount: {
            type: "number",
            value: "",
            label: "Utilized amount",
            rules: {
              required: false,
            },
          },
          AvailableAmount: {
            type: "text",
            value: "",
            label: "Available Amount",
            rules: {
              required: false,
            },
          },
          FromDate: {
            type: "date",
            value: "",
            label: "From Date",
            rules: {
              required: true,
            },
          },
          ToDate: {
            type: "date",
            value: "",
            label: "To Date",
            rules: {
              required: true,
            },
          },
          NetRate: {
            type: "text",
            value: "",
            label: "Net Rate",
            rules: {
              required: true,
            },
          },
          BookedUnderFacility: {
            type: "text",
            value: "",
            label: "Booked under Facility",
            rules: {
              required: true,
            },
          },
          ImportExport: {
            type: "text",
            value: "",
            label: "Import/Export",
            rules: {
              required: true,
            },
          },
          Underlying: {
            type: "Underlying",
            value: "",
            label: "Status",
            rules: {
              required: true,
            },
          }
        }, 'ForwardContract');
      }else{
        this.validator.buildForm({
          BookingDate: {
            type: "date",
            value: "",
            label: "Booking Date",
            rules: {
              required: true,
            },
          },
          ForwardRefNo: {
            type: "text",
            value: "",
            label: "Forward Ref No",
            rules: {
              required: true,
            },
          },
          BuySell: {
            type: "BuySell",
            value: "",
            label: "Buy/Sell",
            InputBindValue: 'ImportExport',
            rules: {
              required: true,
            },
          },
          Currency: {
            type: "currency",
            value: "",
            label: "Currency",
            rules: {
              required: true,
            },
          },
          BookingAmount: {
            type: "number",
            value: "",
            label: "Booking Amount",
            rules: {
              required: true,
            },
          },
          UtilizedAmount: {
            type: "number",
            value: "",
            label: "Utilized amount",
            rules: {
              required: false,
            },
          },
          AvailableAmount: {
            type: "text",
            value: "",
            label: "Available Amount",
            rules: {
              required: false,
            },
          },
          FromDate: {
            type: "date",
            value: "",
            label: "From Date",
            rules: {
              required: true,
            },
          },
          ToDate: {
            type: "date",
            value: "",
            label: "To Date",
            rules: {
              required: true,
            },
          },
          NetRate: {
            type: "text",
            value: "",
            label: "Net Rate",
            rules: {
              required: true,
            },
          },
          BookedUnderFacility: {
            type: "text",
            value: "",
            label: "Booked under Facility",
            rules: {
              required: true,
            },
          },
          ImportExport: {
            type: "text",
            value: "",
            label: "Import/Export",
            rules: {
              required: true,
            },
          },
          Underlying: {
            type: "Underlying",
            value: "",
            label: "Status",
            rules: {
              required: true,
            },
          }
        }, 'ForwardContract');
      }
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
