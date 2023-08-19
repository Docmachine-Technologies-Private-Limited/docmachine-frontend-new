import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserService } from "../../../../service/user.service";
import { Router } from "@angular/router";
import $ from 'jquery'
declare var kendo: any;

import {
  FormGroup, NgForm, Validators
} from '@angular/forms';

import { DocumentService } from "../../../../service/document.service";
import { PipoDataService } from "../../../../service/homeservices/pipo.service";
import { WindowInformationService } from '../../../../service/window-information.service';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { MergePdfService } from '../../../../service/MergePdf/merge-pdf.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';

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
  LIST_OF_QUESTION2: any = [];

  dynamicFormGroup: FormGroup;
  fields: any = [];
  ToCreditAccountdata: any = [];
  BANK_LIST_DROPDOWN: any = [];
  benneDetail: any = [];
  TEAM_DETAILS: any = [];
  URL_PDF: any = '';

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
        type: "checkbox",
        value: "",
        label: "CREDIT AVAILABLE WITH CREDIT AVAILABLE BY",
        fieldName: '2',
        id: '41a',
        option: [
          {
            value: "By Sight Payment",
            text: "By Sight Payment",
          },
          {
            value: "By Deferred Payment",
            text: "By Deferred Payment",
          },
          {
            value: "By Negotiation",
            text: "By Negotiation",
          },
          {
            value: "By Acceptance",
            text: "By Acceptance",
          }
        ]
      }, {
        type: "checkbox",
        value: "",
        label: "DRAFTS AT",
        fieldName: '3',
        id: '42c',
        option: [
          {
            value: "At Sight",
            text: "At Sight",
          },
          {
            value: "Drawn at ____90______ days from Shipment Date",
            text: "Drawn at ____90______ days from Shipment Date",
          }
        ]
      }, {
        type: "radio",
        value: "",
        label: "PARTIAL SHIPMENTS	",
        fieldName: '4',
        id: '43P',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
          }
        ]
      }
      , {
        type: "radio",
        value: "",
        label: "TRANSHIPMENTS",
        fieldName: '5',
        id: '43T',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
          }
        ]
      }
      , {
        type: "radio",
        value: "",
        label: "CONFIRMATION INSTRUCTIONS",
        fieldName: '6',
        id: '49',
        option: [
          {
            value: "WITHOUT",
            text: "WITHOUT",
          },
          {
            value: "CHARGES PAYABLE BY",
            text: "CHARGES PAYABLE BY",
          }
        ]
      }
      , {
        type: "radio",
        value: "",
        label: "SENDER TO RECEIVER INFORMATION",
        fieldName: '7',
        id: '72',
        option: [
          {
            value: "NOT APPLICABLE",
            text: "NOT APPLICABLE",
          }
        ]
      }
    ]

    this.LIST_OF_QUESTION2 = [
      {
        type: "checkbox",
        value: "",
        label: "CREDIT AVAILABLE WITH CREDIT AVAILABLE BY",
        fieldName: '2',
        id: '41a',
        option: [
          {
            value: "sdfdsf",
            text: "By Sight Payment",
          },
          {
            value: "wedsfdsf",
            text: "By Deferred Payment",
          },
          {
            value: "dsfsdfds",
            text: "By Negotiation",
          },
          {
            value: "sdfdsfdsfdsf",
            text: "By Acceptance",
          }
        ]
      }, {
        type: "checkbox",
        value: "",
        label: "DRAFTS AT",
        fieldName: '3',
        id: '39A',
        option: [
          {
            value: "",
            text: "At Sight",
          },
          {
            value: "",
            text: "Drawn at __________ days from Shipment Date",
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
        id: '39B',
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
        id: '44C',
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
    this.LIST_OF_QUESTION.forEach((element, index) => {
      element['index'] = index;
      element['Active'] = false
    });
    console.log(this.LIST_OF_QUESTION, 'LIST_OF_QUESTION');
  }

  async ngOnInit() {
    this.userService.getTeam().subscribe(data => {
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
        this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
      }
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
          value: data['data'][0]['bankDetails'][index],
          text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
          org: data['data'][0]['bankDetails'][index]
        })
        this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
          value: data['data'][0]['bankDetails'][index],
          text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
          org: data['data'][0]['bankDetails'][index]
        })
        if (this.BANK_LIST_DROPDOWN.filter((item: any) => item?.value?.includes(data['data'][0]['bankDetails'][index]?.bank))?.length == 0) {
          this.BANK_LIST_DROPDOWN.push({
            value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId,
          })
        }
      }
      console.log(data, this.bankDetail, this.BANK_LIST_DROPDOWN, 'fgfhgfhfhgfhgfhgfhg')
    },
      error => {
        console.log("error")
      });
    this.userService.getBene(1).subscribe((res: any) => {
      console.log('benneDetail', res.data);
      this.benneDetail = res.data
    }, (err) => console.log("Error", err));

    this.userService.getTeam().subscribe((data: any) => {
      console.log(data, "TEAM_DETAILS")
      this.TEAM_DETAILS = data?.data;
    });
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
    });
  }

  showhideSummaryPage(val: any) { }

  BENE_INFO: any = [];
  PIPO_INFO: any = [];
  piposelect(id: any) {
    console.log(id, 'dfaasdasdasdas')
    this.BENE_INFO = this.benneDetail.filter((items: any) => items?.benneName?.toLowerCase()?.includes(id?.benneName.toLowerCase()));
    console.log('benneDetail', this.benneDetail, this.BENE_INFO);
    this.pipoDataService.findbyPipoNo(id?.pi_poNo).then((res) => {
      this.PIPO_INFO = res;
      console.log(res, "findbyBeneName")
    });
  }

  selectedBankName: any = '';
  onSelectBank(value: any) {
    this.selectedBankName = value?.id;
  }
  SELECTED_BANK_NAME: any = {
    BankUniqueId: "",
    accNumber: "",
    accType: "",
    bank: "",
    bicAddress: "",
    currency: ""
  };
  ToCreditAccount($event) {
    this.SELECTED_BANK_NAME = $event;
    console.log($event, "asdhsjkdfhsdfdsfd")
  }

  TableEvent(value: any) {
    this.LIST_OF_QUESTION.forEach((item: any) => {
      if (item?.id?.includes(value?.value)) {
        item['Active'] = true;
      } else {
        item['Active'] = false;
      }
    });
    setTimeout(() => {
      const element: any = document.getElementById(value?.value) as any;
      if (element != undefined) {
        element.scrollTop = 0;
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
          });
        }, 200);
      }
    }, 200);
  }

  ResetQuestion() {
    this.LIST_OF_QUESTION.forEach(element => {
      element['Active'] = false
    });
  }
  LIST_OF_QUESTION_VALUE: any = [];

  DoneButton() {
    this.LIST_OF_QUESTION_VALUE = [];
    console.log(this.LIST_OF_QUESTION, "LIST_OF_QUESTION")
    this.LIST_OF_QUESTION.forEach(element => {
      this.LIST_OF_QUESTION_VALUE.push(element?.value);
    });
  }

  NEW_PREVIEWS_URL_LIST: any = [];
  PREVIEWS_URL_STRING: any = '';
  async PREVIEWS_URL(model: any, LC_PANEL: any) {
    console.log(LC_PANEL, "LC_PANEL")
    this.getS3Url().then(async (element: any) => {
      let data: any = [];
      await element?.forEach(urlelement => {
        data.push(urlelement);
      });
      data.push(this.PIPO_INFO[0]?.doc);
      var fitertemp: any = await data.filter(n => n);
      this.NEW_PREVIEWS_URL_LIST = fitertemp;
      await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
        console.log(merge?.pdfurl, 'mergepdfresponse?.pdfurl')
        this.PREVIEWS_URL_STRING = '';
        setTimeout(() => {
          this.PREVIEWS_URL_STRING = merge?.pdfurl;
        }, 200);
        model?.displayShow;
        console.log(merge?.pdfurl, 'PREVIEWS_URL')
      });
    });
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.URL_PDF,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse1: any) => {
        temp[0] = pdfresponse1?.url;
        reslove(temp);
      });
    })
  }


  GetDownloadStatus: any = [];
  USER_DATA: any = [];
  Approval_URL: any = [];

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var approval_data: any = {
        id: UniqueId,
        tableName: 'LC-Transaction',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: this.NEW_PREVIEWS_URL_LIST,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      }
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id || res == undefined) {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
            var pipo_id: any = [];
            var pipo_name: any = [];
            pipo_id.push(this.PIPO_INFO[0]?._id)
            pipo_name.push(this.PIPO_INFO[0]?.pipo_no)
            var data: any = {
              data: {
                formdata: [this.LIST_OF_QUESTION2, this.BENE_INFO, this.TEAM_DETAILS, this.PIPO_INFO[0],
                this.LIST_OF_QUESTION, this.LIST_OF_QUESTION_VALUE, this.SELECTED_BANK_NAME],
                documents: this.NEW_PREVIEWS_URL_LIST,
                Url_Redirect: { file: 'import', document: 'null', pipo: pipo_name.toString() },
              },
              TypeTransaction: 'LC-Transaction',
              fileType: 'Import',
              UserDetails: approval_data?.id,
              pipo: pipo_id,
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data);
              }, (error) => {
                console.log('error');
              });
              
              this.documentService.addLCTransaction({bundel:[this.LIST_OF_QUESTION2, this.BENE_INFO, this.TEAM_DETAILS, this.PIPO_INFO,
                this.LIST_OF_QUESTION, this.LIST_OF_QUESTION_VALUE, this.SELECTED_BANK_NAME],file:'import',doc:this.NEW_PREVIEWS_URL_LIST[0]}).subscribe((res1: any) => {
                  this.router.navigate(['/home/dashboardTask'])
                })
              this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '-1' }).subscribe((res: any) => {
                console.log(res, 'dsdsdsdsdsdsds');
                this.GetDownloadStatus = res[0];
                if (res.length == 0) {
                  this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '2' }).subscribe((res: any) => {
                    console.log(res, 'dsdsdsdsdsdsds');
                    this.GetDownloadStatus = res[0];
                  })
                }
              })
            });

          });
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${Status} panel`)
        }
      });
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }
  getStatusCheckerMaker(id: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };

}
