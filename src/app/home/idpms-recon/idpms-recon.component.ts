import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { timer } from "rxjs";
import { takeWhile } from "rxjs/operators";
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DocumentService } from '../../service/document.service';
import { Router } from '@angular/router';
import { WindowInformationService } from '../../service/window-information.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-idpms-recon',
  templateUrl: './idpms-recon.component.html',
  styleUrls: ['./idpms-recon.component.scss'],
})
export class IdpmsReconComponent implements OnInit {
  public uploading = false;
  public uploaded = false;
  config3: DropzoneConfigInterface;
  authToken: any;
  headers: any;
  documentType = '';
  public benneDetail: any = [];
  public buyerDetail: any = [];
  api_base: any
  public size;
  width: any = 0;

  masterTeam: any = [];
  masterSB: any = [];
  masterIR: any = [];
  masterPIPO: any = [];
  masterExcelData: any = [];
  bankAccounts: any = [];
  bankSelection = "";
  disableUpload = true;
  applicant: any = [];
  blMaster: any = [];
  tasksMaster: any = [];
  edpmsData: any = [];
  pipoArrayListdata: any = []
  pipoArrayListdata2: any = [];
  pipoArrayListdata3: any = [];
  GET_EDMPS: any = [];
  GET_EDMPS_CLEARED: any = [];
  FILTER_EDPMS_DATA: any = [];
  FILTER_EDPMS_CLEARED_DATA: any = [];
  SB_NO_LIST: any = [];
  SB_NO_LIST2: any = [];
  LIMIT: number = 10;
  pageSizeOptionsList: any = [];
  pageSizeOptionsList2: any = [];
  USER_DETAILS: any = [];

  AD_CODE_BUCKET_LIST: any = [];
  AD_CODE_BUCKET_LIST_KEY: any = [];

  AD_CODE_PREVIOUS_BUCKET_LIST: any = [];
  AD_CODE_PREVIOUS_BUCKET_LIST_KEY: any = [];

  AD_CODE_CLEARED_BUCKET_LIST: any = [];
  AD_CODE_CLEARED_BUCKET_LIST_KEY: any = [];

  constructor(
    private userService: UserService,
    public documentService: DocumentService,
    public router: Router,
    public toastr: ToastrService,
    public wininfo: WindowInformationService
  ) {
    this.api_base = userService.api_base;
    this.loadFromLocalStorage();
    this.headers = {
      Authorization: this.authToken,
    };
    this.config3 = {
      url: `${this.api_base}/documents/uploadFile3`,
      method: `POST`,
      maxFiles: 5,
      maxFilesize: 5,
      addRemoveLinks: true,
      headers: this.headers,
      timeout: 820000,
      clickable: false,
      dictDefaultMessage: "Drag a document here",
      acceptedFiles:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
      previewTemplate:
        '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
    };
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  async getUserID() {
    const data: any = await this.userService.getUserDetail();
    this.applicant = data.result?.companyId;
    return data;
  }

  async ngOnInit() {
    this.documentService.Inner_loading = true;
    this.getUserID();
    await this.userService.getTeam().subscribe((res: any) => {
      this.USER_DETAILS = res?.data[0];
      console.log(res, "userService.getTeam")
      this.masterTeam = res?.data[0]?.bankDetails;
      this.masterTeam.forEach((acc: any) => {
        if (!this.bankAccounts?.includes(acc?.bank)) {
          this.bankAccounts.push(acc?.bank)
        }
      });
    })
    await this.documentService.getclearedIDPMS(this.LIMIT).subscribe(async (cleareddata: any) => {
      this.GET_EDMPS_CLEARED = this.addSBdata(cleareddata?.data);
      this.FILTER_EDPMS_CLEARED_DATA = this.GET_EDMPS_CLEARED;

      await cleareddata?.data?.forEach(element => {
        this.AD_CODE_CLEARED_BUCKET_LIST[element["adCode"]] = [];
      });
      this.AD_CODE_CLEARED_BUCKET_LIST_KEY = Object.keys(this.AD_CODE_CLEARED_BUCKET_LIST);
      await cleareddata?.data?.forEach(element => {
        element["isActive"] = false;
        this.AD_CODE_CLEARED_BUCKET_LIST[element["adCode"]].push(element);
      });

      this.SB_NO_LIST2 = [];
      var temp: any = [];
      this.GET_EDMPS_CLEARED.forEach(element => {
        if (this.SB_NO_LIST2.includes(element?.sbNo) == false) {
          temp.push(element?.sbNo)
        }
      });
      temp.forEach(element => {
        this.SB_NO_LIST2.push({ value: element })
      });
      this.pageSizeOptionsList2 = [];
      let lenforloop: number = parseInt(cleareddata?.TotalLength) / 10;
      for (let index = 0; index < lenforloop; index++) {
        this.pageSizeOptionsList2.push(10 * (index + 1))
      }
      console.log(cleareddata, 'getclearedEDPMS')
    });
    await this.documentService.Hide_InnerLoader();
  }

  chooseBank() {
    if (this.bankSelection && this.bankSelection !== "") {
      this.disableUpload = false;
    } else {
      this.disableUpload = true;
    }
  }


  fileInputClick = (event) => {
    if (this.disableUpload) {
      return true;
    }
    else {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }

  saveData(data, type: any) {
    this.documentService.createEDPMS({ data: data, type: type }).subscribe((res: any) => {
      console.log('create edpms res: ', res);
      this.edpmsData = res?.data;
      this.pageSizeOptionsList = [];
      let lenforloop: number = parseInt(res?.TotalLength) / 10;
      for (let index = 0; index < lenforloop; index++) {
        this.pageSizeOptionsList.push(10 * (index + 1))
      }
      this.SBdata();
      this.ngOnInit();
      this.AD_CODE_BUCKET_LIST = [];
      this.AD_CODE_BUCKET_LIST_KEY = [];
      this.AD_CODE_BUCKET_LIST = [];
      this.edpmsData = [];

      this.toastr.success('Successfully upload file in your system...')
    }, err => {
      console.log('create EDPMS error: ', err)
    })
  }


  preparePayload() {
    let payload: any = [];
    console.log('create edpms res: ', this.masterExcelData);
    for (let index = 0; index < this.masterExcelData?.length; index++) {
      const item: any = this.masterExcelData[index];
      if (item['IE Code'] == this.USER_DETAILS?.iec) {
        const tempObject = {
          userId: this.applicant,
          bank: '',
          boeno: (item['BOE Number']).toString(),
        boeDate: new Date((item['BOE Date'] - 25569) * 24 * 60 * 60 * 1000),
        adCode: (item['AD Code']).toString(),
        ShippingPortal: (item['BOE Number']).toString(),
        ImportAgency: item['Import Agency'],
        IEPAN: item['IE PAN'],
        IECode: item['IE Code'],
        IEName: item['IE Name'],
        IEAddress: item['IE Address'],
        portCode: item['Port Code']!=undefined?(item['Port Code']).toString():'',
        idpmsStatus: item['BOE STATUS'],
        boeAmount: (0).toString(),
        boeBalanceAmount: this.getboebalanceAmount(item['BOE Number'])?.balanceAmount != undefined ? this.getboebalanceAmount(item['BOE Number'])?.balanceAmount?.toString() : '-1',
        statusMeaning: this.getStatusMeaning(item['BOE STATUS']),
          systemStatus: this.getSystemStatus(item['systemStatus'], item['pipo'], item['sbAmount'], item['Shipping Bill No'], item?.sbdata),
          docAvailable: this.checkAllDocuments(item?.sbdata, item['systemStatus']),
          action: this.getAction(item['systemStatus']),
          sbdata: item['sbdata']
        };
        payload.push(tempObject);
      } else {
        payload = [];
        this.toastr.error("Your excel sheet iec code and your registration iec code is different please check...");
        break;
      }
    }
    return payload
  }
  
  getboebalanceAmount(boeno) {
    return this.masterSB?.filter((item: any) => item?.boeNumber == boeno)[0]
  }
  
  checkAllDocuments(item: any, status: any) {
    let docbool: boolean = false;
    if (status == "Available") {
      if (item?.commercialdetails?.length != 0 && item?.packingdetails?.length != 0 && item?.blcopydetails?.length != 0) {
        docbool = true;
      } else {
        docbool = false;
      }
    }
    return docbool;
  }

  getSystemStatus(status, pipo, sbAmount, sbNo, sbdata: any) {
    if (status != 'Available') {
      let temp: any = ''
      if (parseInt(sbdata?.balanceAvai) == 0) {
        temp = 'SUBMITTED TO BANK'
      } else {
        temp = 'DOC NOT AVAILABLE IN SYSTEM'
      }
      return temp;
    } else if (parseInt(sbdata?.balanceAvai) > 0) {
      return 'PARTIALLY REALISED'
    } else if (this.checkIfBLDone(pipo)) {
      return 'SUBMITTED & BANK REF NO. RECEIVED'
    } else if (this.checkifDownloaded(sbNo)) {
      return 'SUBMITTED BUT BANK REF NOT RECEIVED'
    } else {
      let temp: any = ''
      if (parseInt(sbdata?.balanceAvai) == 0) {
        temp = 'SUBMITTED TO BANK'
      } else {
        temp = 'NOT SUBMITTED TO BANK'
      }
      return temp
    }
  }

  checkifDownloaded(sbNo) {
    if (this.tasksMaster?.some((task: any) => task?.task?.some((t: any) => t?.sbNumbers?.includes(sbNo)))) {
      return true
    } else {
      return false
    }
  }

  checkIfBLDone(pipo) {
    if (pipo == undefined) {
      return false;
    }
    if (this.blMaster?.some((bl: any) => bl?.pipo?.includes(pipo?.pi_poNo) == true)) {
      return true
    } else {
      return false
    }
  }

  getAction(status) {
    let actionStatus: any = [];
    if (!(status === 'Available')) {
      actionStatus.push('Upload Documents')
    } else {
      actionStatus.push('Create Documents', 'Netoff/Setoff', 'ETX/Writeoff')
    }
    return actionStatus
  }

  getSBbalanceAmount(pipo, total) {
    let paidAmount = 0;
    this.masterIR.forEach((ir: any) => {
      if (pipo === ir?.pipo[0]) {
        paidAmount = paidAmount + parseInt(ir?.amount, 10)
      }
    });
    return parseInt(total, 10) - paidAmount
  }

  getSBAmount(sbno: any) {
    return this.masterSB?.filter((item: any) => item?.sbno == sbno)[0]
  }

  getStatusMeaning(status) {
    if (status === 'PARTIALLY_PAID') {
      return 'Lodgement done but partially realised'
    } else if (status === 'PENDING_AD_ACK') {
      return 'Lodgement not done'
    } else if (status === 'PENDING_PAYMENT') {
      return 'Lodgement done'
    } else {
      return 'EDPMS Status is not clear'
    }
  }

  public onUploadError(args: any): void {
    this.uploading = false;
    console.log("onUploadError:", args, args[1].message);
  }

  public onUploadInit(args: any): void {
    console.log("onUploadInit:", args);
  }


  async onUploadSuccess(args: any) {
    this.uploading = false;
    this.uploaded = true;
    console.log("onUploadSuccess ARGS", args);
    this.masterExcelData = args[1].data;
    await this.getData();
    await this.compareEDPMS(false, null, '');
    console.log("onUploadSuccess DATA", this.masterExcelData);
  }

  async onSubmit(data: any, type: any) {
    console.log(data, "sdfsdfsdfsdfdsfsdfdsfd")
    await this.getData();
    await this.compareEDPMS(true, data, type)
  }

  async compareEDPMS(bool: boolean, data: any, type: any) {
    await this.gatherSBdata(bool, data, type);
  }

  async gatherSBdata(bool: boolean, data: any, type: any) {
    await this.documentService.getBoe(1).subscribe(async (res: any) => {
      this.masterSB = res?.data;
      await this.masterExcelData.forEach((data, i) => {
        let index = this.masterSB.findIndex((item) => (item?.sbno)?.toString()?.toLowerCase() == (data['Shipping Bill No'])?.toString()?.toLowerCase());
        console.log('sbexit:', res, index, data['Shipping Bill No']);
        if (index != -1) {
          this.masterExcelData[i]['systemStatus'] = 'Available';
          this.masterExcelData[i]['sbAmount'] = this.masterSB[index]?.fobValue;
          this.masterExcelData[i]['sbCurrency'] = this.masterSB[index]?.fobCurrency;
          this.masterExcelData[i]['adRefNo'] = this.getBlRefNo(this.masterSB[index]?.blcopyRef)?.join(",");
          this.masterExcelData[i]['adBillNo'] = this.getBlRefNo(this.masterSB[index]?.blcopyRef)?.join(",");
          this.masterExcelData[i]['pipo'] = this.masterSB[index]?.pipo[index];
          this.masterExcelData[i]['sbBalanceAmount'] = this.masterSB[index]?.balanceAvai != "-1" ? this.masterSB[index]?.balanceAvai : this.masterSB[index]?.sbAmount;
          this.masterExcelData[i]['sbdata'] = this.masterSB[index];
        } else {
          this.masterExcelData[i]['systemStatus'] = 'NOT_AVAILABLE';
        }
      });
      this.edpmsData = await this.preparePayload();
      await this.edpmsData?.forEach(element => {
        this.AD_CODE_BUCKET_LIST[element["adCode"]] = [];
      });
      this.AD_CODE_BUCKET_LIST_KEY = Object.keys(this.AD_CODE_BUCKET_LIST);
      await this.edpmsData?.forEach(element => {
        element["isActive"] = false;
        this.AD_CODE_BUCKET_LIST[element["adCode"]].push(element);
      });
      if (bool == true) {
        await this.saveData(data, type);
      }
      console.log('this.masterExcelData', this.edpmsData, this.masterExcelData);
    }, (err: any) => {
      console.log(err);
    });
  }

  getBlRefNo(data: any) {
    let no: any = [];
    data?.forEach(element => {
      no.push(element?.blcopyrefNumber)
    });
    return no;
  }

  async SBdata() {
    await this.edpmsData.forEach((data, i) => {
      var index = -1;
      for (let j = 0; j < this.masterSB.length; j++) {
        if (this.masterSB[j] && this.masterSB[j]?.sbno && this.masterSB[j]?.sbno == data?.sbNo) {
          index = j;
          break;
        }
      }
      console.log("index:", index);
      if (index !== -1) {
        this.edpmsData[i]['sbdata'] = this.masterSB[index];
        this.edpmsData[i]['sbBalanceAmount'] = this.masterSB[index]?.balanceAvai != "-1" ? this.masterSB[index]?.balanceAvai : this.masterSB[index]?.sbAmount;
      } else {
        this.edpmsData[i]['sbdata'] = [];
      }
    });
    console.log('this.edpmsData', this.edpmsData);
  }

  addSBdata(edpmsdata: any) {
    edpmsdata.forEach((data, i) => {
      var index = -1;
      for (let j = 0; j < this.masterSB.length; j++) {
        if (this.masterSB[j] && this.masterSB[j]?.sbno && this.masterSB[j]?.sbno == data?.sbNo) {
          index = j;
          break;
        }
      }
      console.log("index:", index);
      if (index !== -1) {
        edpmsdata[i]['sbdata'] = this.masterSB[index];
      } else {
        edpmsdata[i]['sbdata'] = [];
      }
    });
    console.log('this.edpmsData', edpmsdata);
    return edpmsdata;
  }

  public submit(args: any) {
    this.uploading = true;
    console.log('submit: ', args);
    this.size = this.formatBytes(args[0].size);
    this.runProgressBar(args[0].size);
  }

  public formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + " Bytes";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(3) + " KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(3) + " MB";
    } else {
      return (bytes / 1073741824).toFixed(3) + " GB";
    }
  }


  runProgressBar(value) {
    console.log(value / 1500);
    timer(0, value / 2500)
      .pipe(takeWhile(() => this.isWidthWithinLimit()))
      .subscribe(() => {
        this.width = this.width + 1;
      });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data)
      },
      (err) => console.log("Error", err)
    );

    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data)
      },
      (err) => console.log("Error", err)
    );
  }

  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }

  SELECT_DOCUMENTS_VIEWS: any = '';
  SELECT_DOCUMENTS_UPLOAD: any = '';
  clearTime: any = ''

  dumpfun(data: any) {
    clearTimeout(this.clearTime);
    if (data?.buttontext == 'View') {
      this.SELECT_DOCUMENTS_UPLOAD = '';
      this.SELECT_DOCUMENTS_VIEWS = '';
      this.clearTime = setTimeout(() => {
        this.SELECT_DOCUMENTS_VIEWS = data;
      }, 200)
    } else if (data?.buttontext == 'Upload') {
      this.SELECT_DOCUMENTS_VIEWS = '';
      this.SELECT_DOCUMENTS_UPLOAD = '';
      this.clearTime = setTimeout(() => {
        this.SELECT_DOCUMENTS_UPLOAD = data;
      }, 200);
    }
    console.log(data, 'sdfgsdfdsjfj hello dump........')
  }

  clicktable(data: any) {
    this.pipoArrayListdata = [];
    console.log(data, 'sdfsdfdf')
    if (data?.pipo) {
      this.pipoArrayListdata.push({ status: true, text: 'PIPO', buttontext: 'View', doc: data?.pipo[0]?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata.push({ status: false, text: 'PIPO', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PIPO', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.doc) {
      this.pipoArrayListdata.push({ status: true, text: 'SB', buttontext: 'View', doc: data?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata.push({ status: false, text: 'SB', buttontext: 'Upload', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/Shippingbill', popup_close: 'pdf_upload' })
    }

    if (data?.blCopyDoc) {
      this.pipoArrayListdata.push({ status: true, text: 'BL', buttontext: 'View', doc: data?.blCopyDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata.push({ status: false, text: 'BL', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/AirwayBlCopy', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.commercialDoc) {
      this.pipoArrayListdata.push({ status: true, text: 'Commercial Invoice', buttontext: 'View', doc: data?.commercialDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata.push({ status: false, text: 'Commercial Invoice', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/CommercialInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.packingDoc) {
      this.pipoArrayListdata.push({ status: true, text: 'Packing List', buttontext: 'View', doc: data?.packingDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata.push({ status: false, text: 'Packing List', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PackingListInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }
  }

  SUBMIT_BUTTON: boolean = true;

  clicktable2(data: any) {
    this.pipoArrayListdata2 = [];
    console.log(data, 'sdfsdfdf')
    if (data?.pipo != undefined && data?.doc != undefined && data?.blCopyDoc != undefined && data?.commercialDoc != undefined && data?.packingDoc != undefined) {
      this.SUBMIT_BUTTON = false
    } else {
      this.SUBMIT_BUTTON = true;
    }
    if (data?.pipo) {
      this.pipoArrayListdata2.push({ status: true, text: 'PIPO', buttontext: 'View', doc: data?.pipo[0]?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata2.push({ status: false, text: 'PIPO', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PIPO', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.doc) {
      this.pipoArrayListdata2.push({ status: true, text: 'SB', buttontext: 'View', doc: data?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata2.push({ status: false, text: 'SB', buttontext: 'Upload', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/Shippingbill', popup_close: 'pdf_upload' })
    }

    if (data?.blCopyDoc) {
      this.pipoArrayListdata2.push({ status: true, text: 'BL', buttontext: 'View', doc: data?.blCopyDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata2.push({ status: false, text: 'BL', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/AirwayBlCopy', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.commercialDoc) {
      this.pipoArrayListdata2.push({ status: true, text: 'Commercial Invoice', buttontext: 'View', doc: data?.commercialDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata2.push({ status: false, text: 'Commercial Invoice', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/CommercialInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.packingDoc) {
      this.pipoArrayListdata2.push({ status: true, text: 'Packing List', buttontext: 'View', doc: data?.packingDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata2.push({ status: false, text: 'Packing List', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PackingListInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }
  }

  clicktable3(data: any) {
    this.pipoArrayListdata3 = [];
    console.log(data, 'sdfsdfdf')
    if (data?.pipo) {
      this.pipoArrayListdata3.push({ status: true, text: 'PIPO', buttontext: 'View', doc: data?.pipo[0]?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata3.push({ status: false, text: 'PIPO', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PIPO', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.doc) {
      this.pipoArrayListdata3.push({ status: true, text: 'SB', buttontext: 'View', doc: data?.doc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata3.push({ status: false, text: 'SB', buttontext: 'Upload', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/Shippingbill', popup_close: 'pdf_upload' })
    }

    if (data?.blCopyDoc) {
      this.pipoArrayListdata3.push({ status: true, text: 'BL', buttontext: 'View', doc: data?.blCopyDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata3.push({ status: false, text: 'BL', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/AirwayBlCopy', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.commercialDoc) {
      this.pipoArrayListdata3.push({ status: true, text: 'Commercial Invoice', buttontext: 'View', doc: data?.commercialDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata3.push({ status: false, text: 'Commercial Invoice', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/CommercialInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }

    if (data?.packingDoc) {
      this.pipoArrayListdata3.push({ status: true, text: 'Packing List', buttontext: 'View', doc: data?.packingDoc, popup_close: 'pdf_view' })
    } else {
      this.pipoArrayListdata3.push({ status: false, text: 'Packing List', url: this.documentService?.AppConfig?.FRONT_END_URL + 'home/upload-documents/Export/PackingListInvoices', buttontext: 'Upload', popup_close: 'pdf_upload' })
    }
  }

  EDMPS_Search(value: any) {
    this.FILTER_EDPMS_DATA = this.GET_EDMPS.filter((item: any) => item?.sbNo?.includes(value));
    if (this.FILTER_EDPMS_DATA.length == 0) {
      this.FILTER_EDPMS_DATA = this.GET_EDMPS;
    }
  }

  EDMPS_Search2(value: any) {
    this.FILTER_EDPMS_CLEARED_DATA = this.GET_EDMPS_CLEARED.filter((item: any) => item?.sbNo?.includes(value));
    if (this.FILTER_EDPMS_CLEARED_DATA.length == 0) {
      this.FILTER_EDPMS_CLEARED_DATA = this.GET_EDMPS_CLEARED;
    }
  }

  onTabChanged(event) {
    console.log(event, 'afasfaasfasfsa')
    if (event?.tab?.textLabel == 'Previous Data') {
      this.getData()
    }
  }

  async getData() {
    this.documentService.Inner_loading = true;
    await this.documentService.getBlcopyref().subscribe((res: any) => {
      this.blMaster = res?.data;
    }, err => {
      console.log(err)
    })

    await this.documentService.getBoe(1).subscribe((res: any) => {
      this.masterSB = res?.data;
      console.log('getMaster:', res);
      this.documentService.getIDPMSbyLimit(this.LIMIT).subscribe(async (res: any) => {
        this.SB_NO_LIST = [];
        this.GET_EDMPS = this.addSBdata(res?.data);
        this.GET_EDMPS?.forEach(element => {
          element["isActive"] = false;
        });
        var temp: any = [];
        this.GET_EDMPS.forEach(element => {
          if (this.SB_NO_LIST.includes(element?.sbNo) == false) {
            temp.push(element?.sbNo)
          }
        });
        temp.forEach(element => {
          this.SB_NO_LIST.push({ value: element })
        });

        this.FILTER_EDPMS_DATA = this.GET_EDMPS;

        await this.GET_EDMPS?.forEach(element => {
          this.AD_CODE_PREVIOUS_BUCKET_LIST[element["adCode"]] = [];
        });
        this.AD_CODE_PREVIOUS_BUCKET_LIST_KEY = Object.keys(this.AD_CODE_PREVIOUS_BUCKET_LIST);
        await this.GET_EDMPS?.forEach(element => {
          element["isActive"] = false;
          this.AD_CODE_PREVIOUS_BUCKET_LIST[element["adCode"]].push(element);
        });

        console.log(this.GET_EDMPS, this.SB_NO_LIST,this.AD_CODE_PREVIOUS_BUCKET_LIST_KEY,this.AD_CODE_PREVIOUS_BUCKET_LIST, 'getEDPMS')

        this.pageSizeOptionsList = [];
        let lenforloop: number = parseInt(res?.TotalLength) / 10;
        for (let index = 0; index < lenforloop; index++) {
          this.pageSizeOptionsList.push(10 * (index + 1))
        }
        console.log(res, this.GET_EDMPS, this.SB_NO_LIST, 'getEDPMS')
      })
    }, (err: any) => {
      console.log(err);
    });

    await this.documentService.getPipo().subscribe((res: any) => {
      this.masterPIPO = res?.data;
      console.log('getPipo:', res);
    }, err => {
      console.log(err);
    });

    await this.documentService.getIrAdvice('').subscribe((res: any) => {
      this.masterIR = res?.data;
      console.log('getIrAdvice:', res);
    }, err => {
      console.log(err);
    });
    await this.documentService.Hide_InnerLoader();
  }

  async PAGINATION_EVENT(event: any) {
    await this.documentService.getIDPMSbyLimit(event?.pageSize).subscribe(async (res: any) => {
      console.log(event, res, 'PAGINATION_EVENT')
      this.SB_NO_LIST = [];
      this.GET_EDMPS = this.addSBdata(res?.data);
      var temp: any = [];
      this.GET_EDMPS.forEach(element => {
        if (this.SB_NO_LIST.includes(element?.sbNo) == false) {
          temp.push(element?.sbNo)
        }
      });
      temp.forEach(element => {
        this.SB_NO_LIST.push({ value: element })
      });
      this.FILTER_EDPMS_DATA = this.GET_EDMPS;
      await this.GET_EDMPS?.forEach(element => {
        this.AD_CODE_PREVIOUS_BUCKET_LIST[element["adCode"]] = [];
      });
      this.AD_CODE_PREVIOUS_BUCKET_LIST_KEY = Object.keys(this.AD_CODE_PREVIOUS_BUCKET_LIST);
      await this.GET_EDMPS?.forEach(element => {
        element["isActive"] = false;
        this.AD_CODE_PREVIOUS_BUCKET_LIST[element["adCode"]].push(element);
      });

      console.log(this.GET_EDMPS, this.SB_NO_LIST,this.AD_CODE_PREVIOUS_BUCKET_LIST_KEY,this.AD_CODE_PREVIOUS_BUCKET_LIST, 'getEDPMS')

    })
  }
  async PAGINATION_EVENT2(event: any) {
    this.documentService.getclearedIDPMS(event?.pageSize).subscribe((cleareddata: any) => {
      this.GET_EDMPS_CLEARED = this.addSBdata(cleareddata?.data);
      this.GET_EDMPS_CLEARED?.forEach(element => {
        element["isActive"] = false;
      });
      this.FILTER_EDPMS_CLEARED_DATA = this.GET_EDMPS_CLEARED;
      this.SB_NO_LIST2 = [];
      var temp: any = [];
      this.GET_EDMPS_CLEARED.forEach(element => {
        if (this.SB_NO_LIST2.includes(element?.sbNo) == false) {
          temp.push(element?.sbNo)
        }
      });
      temp.forEach(element => {
        this.SB_NO_LIST2.push({ value: element })
      });
      console.log(cleareddata, 'getclearedEDPMS')
    })
  }

  ActiveRemove(index: any, data) {
    data?.forEach((element, i) => {
      if (i == index) {
        element["isActive"] = true;
      } else {
        element["isActive"] = false;
      }
    });
  }
}
