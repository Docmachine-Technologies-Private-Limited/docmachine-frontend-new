import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomConfirmDialogModelComponent } from '../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { DocumentService } from '../../../service/document.service';
import { MergePdfService } from '../../../service/MergePdf/merge-pdf.service';
import { UserService } from '../../../service/user.service';
import { WindowInformationService } from '../../../service/window-information.service';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../confirm-dialog-box/confirm-dialog-box.component';
import { MergePdfListService } from '../../merge-pdf-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-panel',
  templateUrl: './pending-panel.component.html',
  styleUrls: ['./pending-panel.component.scss']
})
export class PendingPanelComponent implements OnInit {
  DATA_CREATE: any = [];
  USER_DETAILS: any = [];
  BENE_DATA: any = '';
  BUYER_DATA: any = '';

  constructor(public wininfo: WindowInformationService, public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    private toastr: ToastrService,
    public documentService: DocumentService, public dialog: MatDialog, public userserivce: UserService) { }
  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270, '.content_top_common')
    this.userserivce.getUserDetail().then((status: any) => {
      this.USER_DETAILS = status['result'];
      console.log(this.USER_DETAILS, 'USER_DETAILS');

      this.documentService.getPendingStatus(this.USER_DETAILS?.sideMenu).subscribe((status) => {
        this.DATA_CREATE = status;
        this.documentService.getVerifyStatus(this.USER_DETAILS?.sideMenu).subscribe((status2: any) => {
          for (let index = 0; index < status2.length; index++) {
            this.DATA_CREATE.push(status2[index]);
          }
        })
        console.log(this.DATA_CREATE, 'statusstatusstatusstatusstatus');
      })
    })

  }

  Approved(data: any, index: any) {
    if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
      var download = {
        data: {
          _id: data['id'],
          status: data['status'],
          deleteflag: data['deleteflag']
        },
        TransactionTableName: 'ExportTransaction',
        TransactionTableId: data?.Tableid
      }
      this.documentService.setDownloadStatus(download).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        this.toastr.success('Successfully Updated data...')
        this.ngOnInit();
      });
    } else if (this.DATA_CREATE[index]['Types'] == 'BuyerAddition') {
      console.log(data, 'fhgjdfhdgfgdgfdgfdgfgfgfgfg')
      this.documentService.UpdateStatus({
        data: {
          _id: data['id'],
          status: data['status'],
          deleteflag: data['deleteflag']
        }
      }).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        if (data?.deleteflag == '2') {
          this.userserivce.creatBuyer(this.DATA_CREATE[index]?.data).subscribe(responsedata => {
            console.log("king123")
            console.log(responsedata)
            this.ngOnInit();
            this.SendMailText(this.DATA_CREATE[index]?.data, 'New Buyer Name added : ');
            this.toastr.success('Successfully Accpeted data...')
          }, error => {
            console.log("error")
          });
        } else {
          this.ngOnInit();
          this.toastr.success('Successfully Accpeted data...')
        }
      });
    } else if (this.DATA_CREATE[index]['Types'] == 'BeneficiaryAddition') {
      console.log(data, 'fhgjdfhdgfgdgfdgfdgfgfgfgfg')
      this.documentService.UpdateStatus({
        data: {
          _id: data['id'],
          status: data['status'],
          deleteflag: data['deleteflag']
        }
      }).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        if (data?.deleteflag == '2') {
          this.userserivce.creatBene(this.DATA_CREATE[index]?.data).subscribe(responsedata => {
            console.log("king123")
            console.log(responsedata)
            this.ngOnInit();
            this.SendMailText(this.DATA_CREATE[index]?.data, 'New Beneficiary Name added : ');
            this.toastr.success('Successfully Accpeted data...')
          }, error => {
            console.log("error")
          });
        } else {
          this.ngOnInit();
          this.toastr.success('Successfully Accpeted data...')
        }
      });
    } else {
      const message = `Are you sure you want to delete this?`;
      const dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.documentService.DeleteStatus(data).subscribe((status) => {
            console.log(status, 'DeleteStatusDeleteStatusDeleteStatusDeleteStatusDeleteStatus');
            this.toastr.success('Successfully Accpeted data...')
            this.ngOnInit();
          })
        }
      });
    }

  }
  Reject(data: any, index: any) {
    if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
      var download = {
        data: {
          _id: data['id'],
          status: data['status'],
          deleteflag: data['deleteflag']
        },
        TransactionTableName: 'ExportTransaction',
        TransactionTableId: data?.Tableid
      }
      this.RejectedData(index, download)[this.DATA_CREATE[index]['tableName']]();
    } else {
      this.CustomConfirmDialogModel.InputConfirmDialogModel('Please insert your comments', 'Comments', (res: any) => {
        data['status'] = 'Rejected'
        data['comment'] = res.value
        this.documentService.RejectedStatus(data).subscribe((status) => {
          console.log(status, 'Rejeeced');
          this.toastr.success('Successfully Rejected data...')
          this.ngOnInit();
        })
      });
    }
  }
  SELECTED_INDEX:any='';
  Q_TYPE:any=''
  async openView(item: any, index: any, panel: any, roletype: any) {
    console.log(item, 'sdfgsfhsdgfdfsd')
    var temp: any = [];
    if (item != undefined && item != '') {
      if (item?.Types === 'downloadPDF') {
        if (item?.documents.length != 0) {
          try {
            var temp: any = item?.documents.filter(n => n)
            await this.pdfmerge._multiple_merge_pdf(temp).then(async (merge: any) => {
              this.CustomConfirmDialogModel.IframeConfirmDialogModel('View', [merge?.pdfurl], this.DATA_CREATE[index]?.status == 'Approved' ? true : false, roletype, (value: any) => {
                console.log(value, "IframeConfirmDialogModel")
                if (value?.Name == "Verify") {
                  this.Approved({
                    id: item['_id'],
                    Tableid: item['id'],
                    tableName: item['tableName'],
                    status: 'Verify',
                    deleteflag: '1'
                  }, index)
                } else if (value?.Name == "Approve") {
                  this.Approved({
                    id: item['_id'],
                    Tableid: item['id'],
                    tableName: item['tableName'],
                    status: 'Approved',
                    deleteflag: '2'
                  }, index)
                }
              });
            });
          } catch (error) {
            console.log(error, 'errror')
          }
        } else {
          this.CustomConfirmDialogModel.ConfirmDialogModel('Pdf View', "Sorry's documents not found!", null);
        }
      } else if (item?.Types === 'BuyerAddition') {
        try {
          this.BENE_DATA = ''
          this.BUYER_DATA = item;
          this.SELECTED_INDEX=index;
          this.Q_TYPE=this.DATA_CREATE[index]?.status == 'Approved' ? 'Approved' : 'Verify'
          panel.displayShow;
          console.log(item,"BuyerAddition")
        } catch (error) {
          console.log(error, 'errror')
        }
      } else if (item?.Types === 'BeneficiaryAddition') {
        try {
          this.BUYER_DATA = '';
          this.BENE_DATA = item
          this.SELECTED_INDEX=index;
          this.Q_TYPE=this.DATA_CREATE[index]?.status == 'Approved' ? 'Approved' : 'Verify'
          panel.displayShow;
          console.log(item,"BeneficiaryAddition")
        } catch (error) {
          console.log(error, 'errror')
        }
      }
      else {
        try {
          await this.pdfmerge._multiple_merge_pdf([item['dummydata']['doc'] != '' ? item['dummydata']['doc'] : item['dummydata']['doc1']]).then(async (merge: any) => {
            this.CustomConfirmDialogModel.IframeConfirmDialogModel('View', [merge?.pdfurl], this.DATA_CREATE[index]?.status == 'Approved' ? true : false, roletype, (value) => {
              console.log(value, "IframeConfirmDialogModel")
                if (value?.Name == "Verify") {
                  this.Approved({
                    id: item['_id'],
                    Tableid: item['id'],
                    tableName: item['tableName'],
                    status: 'Verify',
                    deleteflag: '1'
                  }, index)
                } else if (value?.Name == "Approve") {
                  this.Approved({
                    id: item['_id'],
                    Tableid: item['id'],
                    tableName: item['tableName'],
                    status: 'Approved',
                    deleteflag: '2'
                  }, index)
                }
            });
          });
        } catch (error) {
          console.log(error, 'errror')
        }
      }
    } else {
      this.CustomConfirmDialogModel.ConfirmDialogModel('Pdf View', 'Pdf not found!', null);
    }
  }
  SendMailText(data: any, text: any) {
    console.log(data, 'sendMail')
    this.documentService.SendMailNormal({ data: data, subject: text + data[Object.keys(data)[0]] }).subscribe((res2) => {
      this.toastr.success('Message sent your email id successfully!');
    },
      (err) => console.log("ERROR")
    );
  }

  RejectedData(index: any, download: any) {
    return {
      'Direct-Bills': () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          await rejecteddata?.data?.BOETerm?.forEach((element: any) => {
            this.documentService.getDataAnyTable(rejecteddata?.tableName, element?.BOE_Number).subscribe((res) => {
              const sum = parseFloat(res[0]?.balanceAmount) + parseFloat(element?.remittanceAmount);
              this.documentService.UpdateAnyTable(rejecteddata?.tableName, element?.BOE_Number, { balanceAmount: sum }).subscribe((data) => {
                this.toastr.success('Successfully Rejected data...')
              })
            })
          });
          await this.ngOnInit();
        });
      },
      'Buyer-Credit': () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          await rejecteddata?.data?.BOETerm?.forEach((element: any) => {
            this.documentService.getDataAnyTable(rejecteddata?.tableName, element?.BOE_Number).subscribe((res) => {
              const sum = parseFloat(res[0]?.balanceAmount) + parseFloat(element?.remittanceAmount);
              this.documentService.UpdateAnyTable(rejecteddata?.tableName, element?.BOE_Number, { balanceAmount: sum }).subscribe((data) => {
                this.toastr.success('Successfully Rejected data...')
              })
            })
          });
          await this.ngOnInit();
        });
      },
      'Advance-Outward-Remittance': () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          await rejecteddata?.data?.pipoTerm?.forEach((element: any) => {
            this.documentService.getDataAnyTable(rejecteddata?.tableName, element?.pi_poNo).subscribe((res) => {
              const sum = parseFloat(res[0]?.balanceAmount) + parseFloat(element?.remittanceAmount);
              this.documentService.UpdateAnyTable(rejecteddata?.tableName, element?.pi_poNo, { balanceAmount: sum }).subscribe((data) => {
                this.toastr.success('Successfully Rejected data...')
              })
            })
          });
          await this.ngOnInit();
        });
      },
      'Advance-Remittance-A2': () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          await rejecteddata?.data?.pipoTerm?.forEach((element: any) => {
            this.documentService.getDataAnyTable(rejecteddata?.tableName, element?.pi_poNo).subscribe((res) => {
              const sum = parseFloat(res[0]?.balanceAmount) + parseFloat(element?.remittanceAmount);
              this.documentService.UpdateAnyTable(rejecteddata?.tableName, element?.pi_poNo, { balanceAmount: sum }).subscribe((data) => {
                this.toastr.success('Successfully Rejected data...')
              })
            })
          });
          await this.ngOnInit();
        });
      },
      "Export-Bill-Realisation": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => { await this.ngOnInit(); this.toastr.success('Successfully Rejected data...') });
      },
      "Inward-Remittance-Disposal": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => { await this.ngOnInit(); this.toastr.success('Successfully Rejected data...') });
      },
      "Packing-Credit-Request": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => { await this.ngOnInit(); this.toastr.success('Successfully Rejected data...') });
      },
      "Export-Bill-Regularisation": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          this.documentService.getDataAnyTable(rejecteddata?.tableName, rejecteddata?.data?.SbRef).subscribe((res) => {
            const sum = parseFloat(res[0]?.balanceAvai) + parseFloat(rejecteddata?.data?.Total_FIRX_Amount);
            this.documentService.UpdateAnyTable(rejecteddata?.tableName, rejecteddata?.data?.SbRef, { balanceAvai: sum, firxdetails: [] }).subscribe((data) => {
              this.toastr.success('Successfully Rejected data...')
            })
          })
          await this.ngOnInit();
        });
      },
      "Export-Bill-Lodgement": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => {
          var rejecteddata: any = this.DATA_CREATE[index]['RejectData']
          this.documentService.getDataAnyTable(rejecteddata?.tableName, rejecteddata?.data?.SbRef).subscribe((res) => {
            const sum = parseFloat(res[0]?.balanceAvai) + parseFloat(rejecteddata?.data?.Total_FIRX_Amount);
            this.documentService.UpdateAnyTable(rejecteddata?.tableName, rejecteddata?.data?.SbRef, { balanceAvai: sum, firxdetails: [] }).subscribe((data) => {
              this.toastr.success('Successfully Rejected data...')
            })
          })
          await this.ngOnInit();
        });
      },
      "": () => {
        this.documentService.setDownloadStatus(download).subscribe(async (res: any) => { await this.ngOnInit(); this.toastr.success('Successfully Rejected data...') });
      },
    }
  }
}
