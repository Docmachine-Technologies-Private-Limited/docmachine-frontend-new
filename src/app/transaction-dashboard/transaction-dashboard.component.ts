import { DocumentService } from '../service/document.service';
import { UserService } from '../service/user.service';
import { WindowInformationService } from '../service/window-information.service';
import { PDFDocument, PDFPage } from "pdf-lib";
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PipoDataService } from '../service/homeservices/pipo.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AppConfig } from '../app.config';
import { DomSanitizer } from '@angular/platform-browser';
import { MergePdfService } from '../service/MergePdf/merge-pdf.service';
declare var $: any;

@Component({
  selector: 'app-transaction-dashboard',
  templateUrl: './transaction-dashboard.component.html',
  styleUrls: ['./transaction-dashboard.component.scss']
})
export class TransactionDashboardComponent implements OnInit {
  displayedColumns: string[] = ['Unique', 'Transaction Type', 'fileType'];
  dataSource: any = [];
  USER_DATA_VIEW: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  TRANSACTION_NAME: any = ''
  LOADER_ON_OFF: any = false;
  public config: DropzoneConfigInterface;
  api_base: any;
  authToken: any;
  headers: { Authorization: any; timeout: string; };
  benneDetail: any = [];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private actRoute: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService,
    public appconfig: AppConfig,
    public router: Router,
    public sanitizer: DomSanitizer,
    public pipoDataService: PipoDataService,
    public mergerpdf: MergePdfService,
    public wininfo: WindowInformationService) {
    this.api_base = appconfig.apiUrl;
  }

  UploadUrl: any = '';
  ngOnInit(): void {
    this.loadFromLocalStorage();
    this.headers = {
      Authorization: this.authToken,
      timeout: `${200000}`,
    };
    this.config = {
      url: `${this.api_base}/member/uploadImage`,
      method: `POST`,
      maxFiles: 5,
      maxFilesize: 5,
      addRemoveLinks: true,
      headers: this.headers,
      timeout: 820000,
      dictDefaultMessage: 'Drag a document here',
      acceptedFiles:
        'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx',
      previewTemplate:
        '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
    };


    this.wininfo.set_controller_of_width(250, '.content_top_common')
    this.actRoute.paramMap.subscribe((params) => {
      console.log('TransactionDashboardComponent', params.get('id'));
      this.userService.getUserDetail().then((data: any) => {
        console.log("this.USER_DATA", data?.result?.sideMenu)
        this.TRANSACTION_NAME = params.get('id');

        this.documentService.getExportBillLodgment().subscribe((res: any) => {
          var filterType:any=[];
          if (this.TRANSACTION_NAME=='Inward-Remitance-Dispoal') {
            filterType=[this.TRANSACTION_NAME,'Export-Direct-Dispatch'];
          } if (this.TRANSACTION_NAME=='Export-Direct-Dispatch'){
            filterType=['Export-Direct-Dispatch','Inward-Remitance-Dispoal'];
          } if (this.TRANSACTION_NAME=='Advance-Remittance-flow') {
            filterType=[this.TRANSACTION_NAME,'Import-Direct-Payment'];
          } if (this.TRANSACTION_NAME=='Import-Direct-Payment'){
            filterType=['Import-Direct-Payment','Advance-Remittance-flow'];
          }if (this.TRANSACTION_NAME=='Inward-Remitance-Dispoal-Realization'){
            filterType=['Inward-Remitance-Dispoal-Realization'];
          }
          this.mergeTransaction(res,data?.result?.sideMenu,filterType).then((mergeTransactionres:any)=>{
            var merge:any=mergeTransactionres;
            if (this.TRANSACTION_NAME == 'Inward-Remitance-Dispoal') {         
              for (let index = 0; index < merge['Inward-Remitance-Dispoal'].length; index++) {
                  if (compareArrays(merge['Inward-Remitance-Dispoal'][index].pipo[0]?._id,merge['Export-Direct-Dispatch'][index]?.pipo[0]?._id)) {
                    merge['Inward-Remitance-Dispoal'][index].Ref_Data['blCopyRef']=merge['Export-Direct-Dispatch'][index];
                  }
              }
            } else if (this.TRANSACTION_NAME == 'Export-Direct-Dispatch') {
              for (let index = 0; index < merge['Export-Direct-Dispatch'].length; index++) {
                if (compareArrays(merge['Export-Direct-Dispatch'][index]?.pipo[0]?._id,merge['Inward-Remitance-Dispoal'][index]?.pipo[0]?._id) && merge['Export-Direct-Dispatch'][index]?.Ref_Data!=undefined) {
                    merge['Export-Direct-Dispatch'][index].Ref_Data['irRef']=merge['Inward-Remitance-Dispoal'][index];
                }
              }
            }else if (this.TRANSACTION_NAME == 'Advance-Remittance-flow') {         
              for (let index = 0; index < merge['Advance-Remittance-flow'].length; index++) {
                  if (compareArrays(merge['Advance-Remittance-flow'][index].pipo[0]?._id,merge['Import-Direct-Payment'][index]?.pipo[0]?._id)) {
                    merge['Advance-Remittance-flow'][index]['data']['ImportDirectPayment']=merge['Import-Direct-Payment'][index]?.data?.pipo_1[0][0];
                  }
              }
            } else if (this.TRANSACTION_NAME == 'Import-Direct-Payment') {
              for (let index = 0; index < merge['Import-Direct-Payment'].length; index++) {
                if (compareArrays(merge['Import-Direct-Payment'][index].pipo[0]?._id,merge['Advance-Remittance-flow'][index].pipo[0]?._id) && merge['Advance-Remittance-flow'][index]?.Ref_Data!=undefined) {
                    merge['Import-Direct-Payment'][index]['Ref_Data']=merge['Advance-Remittance-flow'][index]?.Ref_Data;
                }
              }
            }
              console.log(mergeTransactionres,merge,'mergeTransactionres')
              var temp: any = []
              for (let index = 0; index < merge[this.TRANSACTION_NAME].length; index++) {
                var element =  merge[this.TRANSACTION_NAME][index];
                temp.push({
                  'Sr.no.': (index + 1),
                  'Unique': 'Unique' + element?._id,
                  'Transaction Type': element?.TypeTransaction,
                  'fileType': element?.fileType,
                  'MoreDetails': element?.data,
                  pipo:element?.pipo,
                  Ref_Data: element?.Ref_Data,
                  _id: element?._id
                })
              }
              for (let index = 0; index < merge[this.TRANSACTION_NAME].length; index++) {
                this.documentService.getApprovedData(element?.UserDetails).subscribe((res1: any) => {
                  temp[index] = Object.assign({ 'UserDetails': element?.UserDetails != undefined ? res1[0] : '' }, temp[index])
                })
              }
              this.dataSource = temp;
              console.log(res, this.displayedColumns, this.dataSource, 'TRANSACTION_DASHBOARD_DATA')
          })
        });
        this.userService.getBene(1).subscribe((res: any) => {
          console.log('benneDetail', res.data);
          this.benneDetail = res?.data;
        }, (err) => console.log("Error", err));
      });
    });
    const compareArrays = (a, b) => {
      return a!=undefined?JSON.stringify(a) === JSON.stringify(b):null;
    };
  }
  mergeTransaction(res: any, fileType, filterType: any) {
    var MERGE_TRANSACTION: any = [];
    filterType.forEach(element => {
      MERGE_TRANSACTION[element]=[];
    });
    return new Promise((resolve, reject) => {
      for (let index = 0; index < filterType.length; index++) {
        MERGE_TRANSACTION[filterType[index]]=(res?.result?.filter((item: any) => item?.TypeTransaction.toLowerCase() == filterType[index]?.toLowerCase()
          && item?.fileType?.toLowerCase() == fileType.toLowerCase()));
        if ((index + 1) == filterType.length) {
          resolve(MERGE_TRANSACTION);
        }
      }
    })
  }
  pdflist: any = [];
  pipolist: any = [];
  async userview(data: any) {
    this.pdflist = [];
    for (let j = 0; j < data?.documents?.length; j++) {
      await this.userService.mergePdf(data?.documents[j]).subscribe((res: any) => {
        res.arrayBuffer().then((data: any) => {
          this.pdflist.push(data);
        });
      });
    }
    this.USER_DATA_VIEW = data;
    console.log(data, 'sdfdfdfdsfdf')
  }
  OBJECT_DATA: any = [];
  INOVICE_SUM: any = 0;
  async transactionview(data: any) {
    this.pdflist = [];
    this.OBJECT_DATA = [];
    this.UploadUrl = ''
    this.LOADER_ON_OFF = true;
    this.INOVICE_SUM = 0;
    console.log(data, 'sdfgdshdgfsdf')
    if (this.TRANSACTION_NAME == 'Advance-Remittance-flow') {
      try {
        for (let index = 0; index < data?.MoreDetails?.formdata?.pipoTerm.length; index++) {
          const element1: any = data?.MoreDetails?.formdata?.pipoTerm[index];
          const element2: any = data?.MoreDetails?.pipo_1[index];
          this.OBJECT_DATA.push({
            invoice_number: element2?.pipo_no,
            amount: element1?.remittanceAmount,
            currency: element1?.currency
          })
          this.INOVICE_SUM += parseFloat(element1?.remittanceAmount)
        }
        console.log(this.OBJECT_DATA, 'OBJECT_DATA')
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
      try {
        await this.mergerpdf.mergePdf(data?.MoreDetails?.documents).then((merge: any) => {
          this.pdflist.push(merge)
          this.LOADER_ON_OFF = false;
        })
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
    } else if (this.TRANSACTION_NAME == 'Import-Direct-Payment') {
      try {
        this.OBJECT_DATA = data?.MoreDetails?.formdata;
        var temp: any = this.benneDetail.filter((item: any) => item?._id == this.OBJECT_DATA?.benneName)
        this.OBJECT_DATA['benneName'] = temp[0]?.benneName
        this.LOADER_ON_OFF = false;
        console.log(this.OBJECT_DATA, 'OBJECT_DATA')
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
      try {
        await this.mergerpdf.mergePdf(data?.MoreDetails?.documents).then((merge: any) => {
          this.pdflist.push(merge)
          this.LOADER_ON_OFF = false;
        })
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
    } else if (this.TRANSACTION_NAME == 'Inward-Remitance-Dispoal') {
      try {
        this.OBJECT_DATA = data?.MoreDetails;
        this.OBJECT_DATA.Url_Redirect['Transaction_id'] = this.OBJECT_DATA?._id
        console.log(this.OBJECT_DATA, data?.MoreDetails?.documents, 'OBJECT_DATA')
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
      if (data?.MoreDetails?.documents == undefined) {
        this.LOADER_ON_OFF = false;
      }
      try {
        await this.mergerpdf.mergePdf(data?.MoreDetails?.documents).then((merge: any) => {
          this.pdflist.push(merge)
          this.LOADER_ON_OFF = false;
        })
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
    } else if (this.TRANSACTION_NAME == 'Packing-Credit-Request') {
      try {
        for (let index = 0; index < data?.MoreDetails?.formdata?.BOETerm.length; index++) {
          const element1: any = data?.MoreDetails?.formdata?.BOETerm[index];
          const element2: any = data?.MoreDetails?.pipo_1[index];
          this.OBJECT_DATA.push({
            invoice_number: element2?.boeNumber,
            amount: element1?.remittanceAmount,
            currency: element1?.currency
          })
          this.INOVICE_SUM += parseFloat(element1?.remittanceAmount)
        }
        console.log(this.OBJECT_DATA, 'OBJECT_DATA')
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
      try {
        await this.mergerpdf.mergePdf(data?.MoreDetails?.documents).then((merge: any) => {
          this.pdflist.push(merge)
          this.LOADER_ON_OFF = false;
        })
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
    } else if (this.TRANSACTION_NAME == 'Export-Direct-Dispatch') {
      try {
        this.OBJECT_DATA = data?.MoreDetails
        // var pipolist: any = [];
        // for (let index = 0; index < this.OBJECT_DATA?.Shipping_bill_list.length; index++) {
        //   const element = this.OBJECT_DATA?.Shipping_bill_list[index];
        //   element?.pipo.forEach(item => {
        //     pipolist.push(item?.pi_poNo)
        //   });
        // }
        // this.OBJECT_DATA.Url_Redirect['pipo'] = pipolist.toString();
        this.LOADER_ON_OFF = false;
        console.log(this.OBJECT_DATA, 'OBJECT_DATA')
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
      try {
        await this.mergerpdf.mergePdf(data?.MoreDetails?.documents).then((merge: any) => {
          this.pdflist.push(merge)
          this.LOADER_ON_OFF = false;
        })
      } catch (error) {
        console.log(error, 'errror')
        this.LOADER_ON_OFF = false;
      }
    }
    else {
      this.LOADER_ON_OFF = false;
    }
  }
  getPipoList(data: any, key: any) {
    var temp: any = [];
    for (let index = 0; index < data?.length; index++) {
      temp.push(data[index][key]);
    }
    return temp.filter((item, index) => temp.indexOf(item) === index);
  }
  datetoString(date: any) {
    return new Date(date).toDateString();
  }
  public onUploadError(args: any): void {
    this.uploading = false;
    console.log('onUploadError:', args, args[1].message);
  }
  MULITPLE_DROP_DOWN: any = [];
  public onUploadSuccess(args: any): void {
    this.uploading = false;
    console.log('ARGS', args);
    console.log('DATA', args[1].data);
    this.UploadUrl = args[1].data
  }
  uploading: any = ''
  submit(e) {
    console.log('ajbkab');
    this.uploading = true;
    console.log(e[0].size);
    this.runProgressBar(e[0].size);
  }

  width: any = '';
  INTERVAL: any = null;
  runProgressBar(value) {
    this.INTERVAL = setInterval(() => {
      if (this.width < 100) {
        this.width = this.width + 1;
      }
      else {
        clearInterval(this.INTERVAL);
        this.width = 100;
      }
    }, value / 1500);
  }
  public loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  UpdateReferanceNo() {
    this.UploadUrl = ''
  }
  Newtemp: any = [];
  navigationByUrlParam(url: string, id: any, param: any): void {
    this.Newtemp = param?.MoreDetails?.Url_Redirect;
    this.Newtemp['Transaction_id'] = id;
    if (this.TRANSACTION_NAME == 'Export-Direct-Dispatch') {
      var pipolist: any = [];
      for (let index = 0; index <param?.MoreDetails?.Shipping_bill_list?.length; index++) {
        const element = param?.MoreDetails?.Shipping_bill_list[index];
        element?.pipo.forEach(item => {
          pipolist.push(item?.pi_poNo)
        });
      }
       this.Newtemp['pipo'] =pipolist.toString();
    }
    this.router.navigate(['home/' + url, this.Newtemp]);
  }

}
