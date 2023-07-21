import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";
import $ from 'jquery'
declare var kendo: any;

import {
  FormGroup, NgForm, Validators
} from '@angular/forms';

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
  LIST_OF_QUESTION: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];

  constructor(
    private userService: UserService,
    public documentService: DocumentService,
    public pipoDataService: PipoDataService,
    public router: Router,
    public wininfo: WindowInformationService,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService) {
      this.LIST_OF_QUESTION = [
        {
          type: 'checkbox',
          value: "",
          label: "DATE & PLACE OF EXPIRY | 31D",
          fieldName: '1',
          option: [
            {
              value: "werwerwer",
              text: "Credit Note Number*",
            },
            {
              value: "werwerwe",
              text: "Credit Note Number*",
            },
            {
              value: "werwer",
              text: "Credit Note Number*",
            },
            {
              value: "ewrewr",
              text: "Credit Note Number*",
            }
          ]
        },
        {
          type: "checkbox",
          value: "",
          label: "CURRENCY & AMOUNT OF CREDIT IN FIGURES AND INR | 32B",
          fieldName: '2',
          option: [
            {
              value: "sdfdsf",
              text: "Credit Note Number*",
            },
            {
              value: "wedsfdsf",
              text: "Credit Note Number*",
            },
            {
              value: "dsfsdfds",
              text: "Credit Note Number*",
            },
            {
              value: "sdfdsfdsfdsf",
              text: "Credit Note Number*",
            }
          ]
        }, {
          type: "checkbox",
          value: "",
          label: "PERCENTAGE CREDIT AMOUNT TOLERANCE | 39A",
          fieldName: '3',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }, {
          type: "radio",
          value: "",
          label: "MAXIMUM CREDIT AMOUNT | 39B",
          fieldName: '4',
          option: [
           {
              value: "test1",
              text: "Credit Note Number*",
            },
            {
              value: "ets2",
              text: "Credit Note Number*",
            },
            {
              value: "test333",
              text: "Credit Note Number*",
            },
            {
              value: "test343434",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '5',
          option: [
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '6',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '7',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '8',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '9',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '10',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '11',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '12',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '13',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '14',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '15',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '16',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '17',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '18',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '19',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '20',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '21',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '22',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '23',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '24',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '25',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '26',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '27',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '28',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '29',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
        , {
          type: "radio",
          value: "",
          label: "Credit Note Number*",
          fieldName: '30',
          option: [
           {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            },
            {
              value: "",
              text: "Credit Note Number*",
            }
          ]
        }
      ]
      console.log(this.LIST_OF_QUESTION, 'LIST_OF_QUESTION');
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

  piposelect(id: any) {
    console.log(id, 'dfaasdasdasdas')
  }

}
