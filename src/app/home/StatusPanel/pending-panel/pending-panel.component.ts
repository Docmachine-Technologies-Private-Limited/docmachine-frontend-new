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
  constructor(public wininfo: WindowInformationService, public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public mergerpdf: MergePdfService,
    public pdfmerge: MergePdfListService,
    private toastr: ToastrService,
    public documentService: DocumentService, public dialog: MatDialog, private sanitizer: DomSanitizer, public userserivce: UserService,) { }
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
            this.SendMailText(this.DATA_CREATE[index]?.data)
          },
            error => {
              console.log("error")
            });
        } else {
          this.ngOnInit();
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
            this.ngOnInit();
          })
        }
      });
    }

  }
  Reject(data: any, index: any) {
    if (this.DATA_CREATE[index]['Types'] == 'downloadPDF') {
      var download = {
        _id: data['id'],
        status: data['status'],
        deleteflag: '3'
      }
      this.documentService.setDownloadStatus(download).subscribe((res: any) => {
        console.log(res, 'dfsdfhsdfdsjhdsfgdsfds')
        this.ngOnInit();
      });
    } else {
      this.CustomConfirmDialogModel.InputConfirmDialogModel('Please insert your comments', 'Comments', (res: any) => {
        data['status'] = 'Rejected'
        data['comment'] = res.value
        this.documentService.RejectedStatus(data).subscribe((status) => {
          console.log(status, 'Rejeeced');
          this.ngOnInit();
        })
      });
    }
  }
  async openView(item: any, index: any) {
    console.log(item, 'sdfgsfhsdgfdfsd')
    var temp: any = [];
    if (item != undefined && item != '') {
      if (item?.Types === 'downloadPDF') {
        if (item?.documents.length != 0) {
          try {
            var temp: any = item?.documents.filter(n => n)
            await this.pdfmerge._multiple_merge_pdf(temp).then(async (merge: any) => {
              this.CustomConfirmDialogModel.IframeConfirmDialogModel('View', [merge?.pdfurl], this.DATA_CREATE[index]?.status == 'Approved' ? true : false, null as any);
            });
          } catch (error) {
            console.log(error, 'errror')
          }
        } else {
          this.CustomConfirmDialogModel.ConfirmDialogModel('Pdf View', "Sorry's documents not found!", null);
        }

      } else {
        try {
          await this.pdfmerge._multiple_merge_pdf([item['dummydata']['doc'] != '' ? item['dummydata']['doc'] : item['dummydata']['doc1']]).then(async (merge: any) => {
            this.CustomConfirmDialogModel.IframeConfirmDialogModel('View', [merge?.pdfurl], this.DATA_CREATE[index]?.status == 'Approved' ? true : false, null as any);
          });
        } catch (error) {
          console.log(error, 'errror')
        }
      }
    } else {
      this.CustomConfirmDialogModel.ConfirmDialogModel('Pdf View', 'Pdf not found!', null);
    }
  }
  SendMailText(data: any) {
    console.log(data, 'sendMail')
    this.documentService.SendMailNormal({data:data,subject:'New Buyer Name added : ' +data[Object.keys(data)[0]]}).subscribe((res2) => {
      this.toastr.success('Message sent your email id successfully!');
    },
      (err) => console.log("ERROR")
    );
  }
}
