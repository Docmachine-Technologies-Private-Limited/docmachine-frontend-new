import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'
declare var kendo: any;

import {
  DropzoneDirective,
  DropzoneConfigInterface,
} from "ngx-dropzone-wrapper";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, NgForm, Validators
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentService } from "../../service/document.service";
import { PipoDataService } from "../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../service/window-information.service';
import { PDFDocument, rgb } from 'pdf-lib';
import { AprrovalPendingRejectTransactionsService } from '../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../merge-pdf-list.service';

@Component({
  selector: 'app-new-lc-insurance',
  templateUrl: './new-lc-insurance.component.html',
  styleUrls: ['./new-lc-insurance.component.scss']
})
export class NewLcInsuranceComponent implements OnInit {
  PIPO_LIST: any = [];
  showSummaryPage: number = 0;
  bankDetail: any = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public wininfo: WindowInformationService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
  }

  async ngOnInit() {
    this.userService.getTeam().subscribe(
      data => {
        for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
          this.bankDetail.push({ value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId, org: data['data'][0]['bankDetails'][index] })
        }
      },
      error => {
        console.log("error")
      });
  }

  showhideSummaryPage(val: any) { }

}
