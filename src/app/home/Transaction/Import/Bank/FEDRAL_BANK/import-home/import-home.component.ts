import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from "@angular/core";
import { DocumentService } from "../../../../../../service/document.service";
import { ActivatedRoute, Router } from "@angular/router";
import A2_JOSN from '../../../../../../../assets/JSON/A2.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../../../../service/user.service";
import { formatDate } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from "@angular/material/paginator";
import { WindowInformationService } from "../../../../../../service/window-information.service";
import { AprrovalPendingRejectTransactionsService } from "../../../../../../service/aprroval-pending-reject-transactions.service";
import { CustomConfirmDialogModelComponent } from "../../../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component";
import { PipoDataService } from "../../../../../../service/homeservices/pipo.service";
import { StorageEncryptionDecryptionService } from "../../../../../../Storage/storage-encryption-decryption.service";
import { MergePdfListService } from "../../../../../merge-pdf-list.service";
import $ from "jquery";
import { ImportHomeControllerData } from "../../../Controller/ImportHome-Controller";
import { filterAnyTablePagination } from "../../../../../../service/v1/Api/filterAnyTablePagination";
import { ImportBillLodgementControllerData } from '../../../Controller/Import-BillLodgement-Controller';
import { UploadServiceValidatorService } from "../../../../../../components/Upload/service/upload-service-validator.service";

@Component({
  selector: 'app-import-home',
  templateUrl: './import-home.component.html',
  styleUrls: ['./import-home.component.scss']
})
export class ImportHomeComponent implements OnInit, OnChanges {
  @ViewChildren('ngSelect') ngSelect: ElementRef;
  @Input('InwardDisposalData') InwardDisposalData: any = [];
  @Input('ForwardNo') ForwardNo: any = [];
  @Input('data') data: any = [];

  closeResult: string;
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public select = false;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = "";
  public Question1 = '';
  public Question2 = '';
  public Question3 = '';
  public Question4 = '';
  public Question5 = '';
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
  public allTransactions: any = [];
  SBBuyerName: string = 'BuyerName';
  PIPONumbersBuyerName: string = 'BuyerName';
  buyerName: any = [];
  selectSB = '';

  public generateIndex;
  lodgement1: any;
  lodgement2: any;
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  public buyerDetail: any = [];
  commoditydata: any;
  locationdata: any;
  nameSearch: string = '';
  nameSearch1: string = '';
  nameSearch2: string = '';
  nameSearch3: string = '';
  startDate: any = '';
  endDate: any = '';
  myRadio: any;
  myRadio1: any;
  myRadio2: any;
  myRadio3: any;
  myRadio4: any;
  myRadio5: any;
  myRadio6: any;
  purposeSelect = false;
  selectPurpose = false
  public selectedPurpose: any = [];
  url: any;
  file: any;
  purposeCode: any;
  detail: any;
  jsondata: any;
  purposeRows: any[];
  dataJson: any;
  pgNumber = 0;
  pcNumber = 0;
  selectedPipo: boolean = false;
  selectedRowSb: boolean = false;
  item3: any = [];
  selectedSb: boolean;
  proceed: boolean = true;
  c: any;
  pipoArray: any = [];
  sbArray: any = [];
  tryArray: any = [];
  bankReference: any;
  generate0: boolean = false;
  generate3: boolean = false;
  generate1: boolean = false;
  generate2: boolean = false;
  generate4: boolean = false;
  generate5: boolean = false;
  generate6: boolean = false;
  data4: any;
  data5: any;
  data6: any;
  data7: any = [];
  done: boolean;
  doc: any = [];
  generate: boolean;
  generatePurpose: any = [];
  sbPurpose: any = [];
  sbPurpose1: any = [];
  importPurpose: any = [];
  noImportPurpose: any = [];
  donePurpose: any = [];
  doneSbPurpose: any = [];
  doneImportPurpose: any = [];
  mailArray: any = [];
  mainDoc: any = [];
  mainDoc1: any = [];
  mainDoc2: any = [];
  mainDoc3: any = [];
  mainDoc4: any = [];
  doc1: boolean;
  data8: any = [];
  data9: any = [];
  dataImport: any = [];
  sbPurposeDone1: any = [];
  item4: any = [];
  bankRef: any;
  newTask: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  arr: any;
  item5: any = [];
  item6: any = [];
  item7 = [];
  isDoneAll: any;
  draftPipo: any = [];
  ir: string = 'no';
  draftSb: any = [];
  drafttry: any = [];
  bankArray: any = [];
  bankToggle: boolean;
  bankValue: any;
  bank: any = [];
  allBank: any = [];
  newBankArray: any = [];
  credit: any;
  charge: any = [];
  value: any;
  newDone = false;
  bgColor = false
  jstoday = '';
  today = new Date();
  buyerAds: any;
  itemArray: any = [];
  filterToggle: boolean;
  e: boolean;
  d: boolean;
  model = { option: 'Bank options' };
  model1 = { option: 'Bank options' };
  model2 = { option: 'Bank options' };
  selectedPdfs: any = [];
  selectedPdfs2: any;
  generateChecked: boolean = true;
  formerge: string | ArrayBuffer | Uint8Array;
  id: any;
  Inward_Remittance: any = [];

  default_value: any = [];
  old_data: any = [];
  INPUT_SERACH: any = [];
  Blcopyref: any = [];
  ThirdPartydata: any = [];
  Inward_Remittancefilter: any = [];
  SELECT_ThirdPartydata: any = '';
  SELECT_bankreferencenumber: any = [];
  Lodgement: any = [];
  selection: any = [];
  Select_A_bank: any = [];
  GetDownloadStatus: any = [];
  Export_Direct_Dispatch: any = []
  VISIBILITY: boolean = false;
  ForwardContractDATA: any = [];
  COMPANY_INFO: any = {};

  constructor(
    public documentService: DocumentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private modalService: NgbModal,
    public wininfo: WindowInformationService,
    public pipoDataService: PipoDataService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public sessionstorage: StorageEncryptionDecryptionService,
    public ExportBillLodgementData: ImportHomeControllerData,
    public filteranytablepagination: filterAnyTablePagination,
    public ImportBillLodgementControllerData: ImportBillLodgementControllerData,
    public validator: UploadServiceValidatorService,
    public pdfmerge: MergePdfListService) {
    console.log("hello")
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    console.log(this.jstoday)
    console.log(this.Lodgement, 'dcsdsdsadsadsdasdasdsadsad')
  }
  ThirdPartydataoldata: any = [];
  Blcopyrefoldata: any = [];
  buyer: string = '';
  location: string = '';
  commodity: string = '';
  page: number = 0
  limit: number = 1000;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filtervisible: boolean = false
  dataSource: any = [];
  OLD_dataSource: any = [];
  USER_DATA: any = [];
  STORE_URL: any = [];
  Inward_Remittance_MT103: any = [];
  Inward_Remittance_MT103_DATA: any = [];
  MT103_URL: any = '';
  MT103_ID: any = ''
  NEW_PURPOSE_CODE: any = [];
  GROUP_NAME_LIST: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "ngOnChanges")
    this.InwardDisposalData = changes?.data?.currentValue[0] != undefined ? changes?.data?.currentValue[0] : this.InwardDisposalData
    this.ForwardNo = changes?.data?.currentValue[1] != undefined ? changes?.data?.currentValue[1] : this.ForwardNo;
    this.ToForwardContract_Selected = this.ForwardNo;
    this.Inward_Remittance_MT103_DATA = this.InwardDisposalData;
    this.Inward_Remittance_MT103_DATA[0]['REMITANCE_AMOUNT'] = this.InwardDisposalData[0]?.Inward_amount_for_disposal
    this.Inward_Remittance_MT103 = this.InwardDisposalData;
    this.bank = [this.InwardDisposalData[0]?.BankName];
    this.MT103_URL = this.InwardDisposalData[0]?.file;
    this.PIPONumbersBuyerName = this.InwardDisposalData[0]?.BuyerName?.value
    this.filteranytablepagination.PaginationfilterAnyTable({
      currency: this.InwardDisposalData[0]?.currency,
      benneName: this.InwardDisposalData[0]?.BuyerName[0]
    }, { skip: 0, limit: 1000 }, 'pi_po').subscribe((res: any) => {
      console.log(res, 'resssssssssssssss');
      res?.data?.forEach(element => {
        element['AvailableAmount'] = element?.AvailableAmount != undefined && element?.AvailableAmount != '-1' ? element?.AvailableAmount : element?.amount
        element['UtilizedAmount'] = 0;
        element['SUM_AMOUNT'] = 0;
      });
      this.OLD_dataSource = res.data;
      this.dataSource = res.data
      console.log("res", this.dataSource)
    })

    this.filteranytablepagination.PaginationfilterAnyTable({
      benneName: this.InwardDisposalData[0]?.BuyerName[0]
    }, { skip: 0, limit: 1000 }, 'Beneficiary').subscribe((res: any) => {
      console.log(res, 'Beneficiary');
      this.BENEFICIARY_DETAILS = res?.data[0]
    })
    console.log(this.bank, 'sallBankallBankallBankallBankallBank')
  }
  async ngOnInit() {
    this.wininfo.set_controller_of_width(250, '.content_top_common')
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
    });
    console.log(this.USER_DATA, 'this.USER_DATA')
    this.redirectid = this.route.snapshot.paramMap.get('pipo')
    this.redirectindex = this.route.snapshot.paramMap.get('index')
    this.redirectpage = this.route.snapshot.paramMap.get('page')
    this.MT103_ID = this.route.snapshot.paramMap.get('MT103_ID');
    this.ToForwardContract_Selected = this.ForwardNo
    console.log("pipoId", this.redirectid);

    this.NEW_PURPOSE_CODE = A2_JOSN;
    this.NEW_PURPOSE_CODE.forEach(element => {
      this.Inward_Remittance.push(element?.RBI_Purpose_Code?.toString())
    });
    console.log(this.GROUP_NAME_LIST, this.NEW_PURPOSE_CODE, "GROUP_NAME_LIST")
    this.Inward_Remittancefilter = this.Inward_Remittance;
    this.old_data = this.default_value;

    this.Inward_Remittance_MT103_DATA = this.InwardDisposalData;
    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.showInvoice = false;
      console.log("hello")
    });
    // used details
    this.userService.getUserDetail().then((res: any) => {
      console.log('********USer Details', res);

      this.id = res.result.emailId;
      console.log('***********userId', this.id);
    });

    let date = ['27-JAN-21', '29-JAN-2021', '31-JAN-2021']
    const myArray = date[0].split(" ");

    this.userService.getTeam().subscribe((data: any) => {
      this.COMPANY_INFO = data?.data[0]
      console.log("king123")
      console.log(data['data'][0])
      this.item5 = data['data'][0]
      console.log("checking for location commodity", this.item5)
      this.commoditydata = this.item5.commodity;
      console.log("checking for commodity", this.commoditydata)
      this.locationdata = this.item5.location;
      console.log("checking for location", this.locationdata)
      this.arr = this.item5.gst.split('');
      this.bankArray = this.item5.bankDetails
      for (let value of this.bankArray) {
        this.allBank.push(value.bank)
      }
    },
      error => {
        console.log("error")
      });
    this.INPUT_SERACH = $('.search_box_new');
    console.log(this.mainDoc, 'dfsdfdfdfsd')
  }

  InputClick() {
    this.sessionstorage.set('MT102', JSON.stringify(this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]), 1)
    this.documentService.MT102_SUBJECT = (this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]);
  }

  removeSession() {
    this.sessionstorage.remove('MT102')
    this.documentService.MT102_SUBJECT = []
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  changeCheckbox(value) {
    let j = this.selectPIPO.indexOf(value)
    if (j == -1) {
      this.selectPIPO.push(value)
    }
    else {
      this.selectPIPO.splice(j, 1)
    }

    console.log(this.selectPIPO)
  }

  changeCheckbox1(value) {
    let j = this.sbArray.indexOf(value)
    if (j == -1) {
      this.sbArray.push(value)
    }
    else {
      this.sbArray.splice(j, 1)
    }

    if (this.sbArray.length > 0) {
      this.selectSB = this.sbArray.toString()
    }

    console.log(this.sbArray)
  }
  selectPIPO: any = [];
  selectPIPO_data: any = [];
  PIPO_SUM_AMOUNT: any = 0;

  changeCheckboxPIPO(event: any, value, data: any, index) {
    const FindIndex = this.selectPIPO_data.findIndex(item => item?._id === data?._id);
    if (event.target.checked == true) {
      if (parseFloat(this.Inward_Remittance_MT103_DATA[0]?.Inward_amount_for_disposal) > parseFloat(this.PIPO_SUM_AMOUNT)) {
        this.selectPIPO_data.push(data)
        this.selectPIPO.push(value);
        if (parseFloat(data['UtilizedAmount']) == 0) {
          data['UtilizedAmount'] = parseFloat(data?.amount);
        }
      } else {
        event.target.checked = false;
        this.toastr.error("Invoice amount should be equal or more than  remittance amount")
      }
    } else {
      data['UtilizedAmount'] = 0;
      data['AvailableAmount'] = parseFloat(data?.amount);
      data['UtilizedAmount'] = 0;
      this.selectPIPO.splice(FindIndex, 1);
      this.selectPIPO_data.splice(FindIndex, 1)
    }
    this.PIPO_SUM_AMOUNT = this.selectPIPO_data.reduce((a, b) => parseFloat(a) + parseFloat(b?.UtilizedAmount), 0);
    console.log(this.selectPIPO, this.Inward_Remittance_MT103_DATA[0],
      this.PIPO_SUM_AMOUNT, this.selectPIPO_data, 'selectPIPO')
  }

  CLEAR_TIMEOUT: any = null
  InputValidation(event: any, data: any) {
    clearTimeout(this.CLEAR_TIMEOUT)
    if (data['UtilizedAmount'] != '' && parseFloat(data['UtilizedAmount']) != 0) {
      if (parseFloat(data['UtilizedAmount']) < parseFloat(data?.AvailableAmount)) {
        this.PIPO_SUM_AMOUNT = this.selectPIPO_data.reduce((a, b) => parseFloat(a) + parseFloat(b?.UtilizedAmount), 0);
      } else {
        this.CLEAR_TIMEOUT = setTimeout(() => {
          data['UtilizedAmount'] = parseFloat(data?.AvailableAmount)
          this.toastr.error("Utilized Amount should be equal or more than Available Amount")
        }, 200);
      }
    }
  }

  AmountValidation(display: any) {
    console.log(parseFloat(this.Inward_Remittance_MT103_DATA[0]?.Inward_amount_for_disposal),
      parseFloat(this.PIPO_SUM_AMOUNT), parseFloat(this.Inward_Remittance_MT103_DATA[0]?.Inward_amount_for_disposal) == parseFloat(this.PIPO_SUM_AMOUNT), "hghghjghjfjhdjj")
    if (parseFloat(this.Inward_Remittance_MT103_DATA[0]?.Inward_amount_for_disposal) <= parseFloat(this.PIPO_SUM_AMOUNT)) {
      display?.displayHidden;
    } else {
      this.toastr.error("Invoice amount should be equal or more than  remittance amount")
    }
  }

  resetActive(data: any, i) {
    data?.forEach((element, index) => {
      if (i != index) {
        element['isActive'] = false
      }
    });
  }


  async generateDoc(code, j) {
    this.generate = true
    this.generatePurpose[j] = code;
    console.log(this.OLD_dataSource, 'item')
    this.itemArray = this.OLD_dataSource;
    console.log(this.itemArray)
    let generateDoc1: any = [];
    let pipoValue = this.itemArray[0]
    console.log(pipoValue)
    console.log("645 line", this.itemArray)
    for (let item of this.itemArray) {
      for (let pipo of this.selectPIPO) {
        if (item.pi_poNo === pipo) {
          if (item.doc) {
            generateDoc1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc  //item.doc is Profoma Invoice document
            ))
            this.STORE_URL.push(item.doc)
          }
          else {
            generateDoc1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc1 //item.doc1 is purchase order document
            ))
            this.STORE_URL.push(item.doc1)
          }
        }
      }
    }
    await this.fillForm(code)
    await this.showPreview(code)
  }

  replaceText(text: any, repl_text: any) {
    return (text.replace(repl_text, '')).trim()
  }

  PREVIWES_URL: any = '';
  TIMEOUT: any = ''
  VISIBLITY_PDF: boolean = false;
  BENEFICIARY_DETAILS: any = [];
  async fillForm(filldata: any) {
    console.log(filldata, "sdfsdfsdfdsfd")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.value?.indexOf(this.bankValue) != -1);
      console.log(bankformat, "bankformat")
      if (bankformat[0]?.BankUniqueId == "F_B_L_6") {
        this.ImportBillLodgementControllerData.BankFormatLoad().
          Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
            this.VISIBLITY_PDF = false;
            this.PREVIWES_URL = ''
            this.TIMEOUT = setTimeout(async () => {
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true;
              await resolve({ BankUrl: this.PREVIWES_URL })
              console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
            }, 200);
          })
      } else if (bankformat[0]?.BankUniqueId == "H_B_L_7") {
        this.ImportBillLodgementControllerData.BankFormatLoad().
          HDFC(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
            this.VISIBLITY_PDF = false;
            this.PREVIWES_URL = ''
            this.TIMEOUT = setTimeout(async () => {
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true;
              await resolve({ BankUrl: this.PREVIWES_URL })
              console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
            }, 200);
          })
      }
    })
  }

  ARRAY_BUFFER_PDF: any = [];
  ARRAY_BUFFER_PDF2: any = [];
  showPreview(id: any) {
    this.bgColor = true
    this.newDone = true
    this.ARRAY_BUFFER_PDF = [];
    this.ARRAY_BUFFER_PDF2 = [];
    if (this.formerge != null && this.formerge != '') {
      this.ARRAY_BUFFER_PDF2[0] = this.formerge;
      this.ARRAY_BUFFER_PDF2[1] = this.MT103_URL;
    } else {
      this.ARRAY_BUFFER_PDF2[0] = this.MT103_URL;
    }
    for (let index = 0; index < this.STORE_URL.length; index++) {
      this.ARRAY_BUFFER_PDF.push(this.STORE_URL[index]);
      this.ARRAY_BUFFER_PDF2.push(this.STORE_URL[index]);
    }
    this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '-1' }).subscribe((res: any) => {
      console.log(res, 'dsdsdsdsdsdsds');
      this.GetDownloadStatus = res[0];
      if (res.length == 0) {
        this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '2' }).subscribe((res: any) => {
          console.log(res, 'dsdsdsdsdsdsds');
          this.GetDownloadStatus = res[0];
        })
      }
    })
  }

  StringConverter(item) {
    // console.log(item,'itemmmmmmmmm')
    if (item.length == 0) {
      return ''
    } else {
      return item.toString();
    }
  }

  loadPopupPIPONumbers(inputid, hidden_props) {

  }

  sendFileDownload(fileName: any) {
    this.userService.mergePdfChecking({ listFile: fileName })
  }

  async getPdfFile(item: any) {
    let array = new Uint8Array(item);
    let blob = new Blob([array], { type: 'application/pdf' });
    var urlCreator = window.URL || window.webkitURL;
    let url = urlCreator.createObjectURL(blob);
    let fileName: string = new Date().toLocaleDateString();
    try {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.target = '_blank';
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evt);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  calculateAmount(amount1, amount2) {
    return !isNaN(parseFloat(amount1)) ? parseFloat(amount1) - parseFloat(amount2) : 0;
  }

  P102_PDF: any = ''
  change(e) {
    console.log(e.target.value);
    this.bankRef = e.target.value
  }


  hidePreview() {
    this.bgColor = false
    this.newDone = false
  }

  OLD_INPUT_VALUE: string = '';
  SELECTED_PURPOSE_CODE: boolean = false;
  setradio(a, input, event) {
    console.log(a)
    if (input == '') {
      event.target.checked = false
      alert('Please select pipo number');
      return;
    }
    this.bankToggle = true
    this.bankValue = a
    this.newBankArray = []
    var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.value?.indexOf(this.bankValue) != -1);
    console.log(this.newBankArray, bankformat, 'this.newBankArray')
    if (bankformat.length != 0 && bankformat[0]?.urlpdf != '') {
      this.bankArray.forEach((value, index) => {
        console.log('shshsh')
        if (value.bank == a) {
          this.newBankArray.push(value)
        }
      });
    } else {
      this.bankArray.forEach((value, index) => {
        console.log('shshsh')
        if (value.bank == a) {
          this.newBankArray.push(value)
        }
      });
    }
    console.log(a)
  }

  creditTo(a) {
    var n = a.accNumber
    this.credit = n.split("");
    console.log(this.credit)
  }

  chargesTo(a) {
    var n = a.accNumber
    this.charge = n.split("");
    console.log(this.charge)
    this.SELECTED_PURPOSE_CODE = false;
  }

  openToPdf(content2, pipo) {
    console.log("Line 2488", pipo, this.selectedPurpose, this.mainDoc)
    this.selectedPdfs = [];
    this.selectedPdfs[0] = this.value;
    this.selectedPdfs[1] = this.MT103_URL;
    for (let index = 0; index < this.ARRAY_BUFFER_PDF2.length; index++) {
      this.selectedPdfs.push(this.ARRAY_BUFFER_PDF2[index])
    }
    console.log('line no. 2493', this.selectedPdfs);
  }

  addPdfToSelectedPdf(value, e) {
    if (e.target.checked) {
      if (this.selectedPdfs.includes(value) === false) {
        this.selectedPdfs.push(value);
      }
    } else if (!e.target.checked) {
      this.selectedPdfs = this.selectedPdfs.filter((item) => item !== value);
    }
    console.log("line no. 2495", this.selectedPdfs);
  }

  PIPOFilter(data: any) {
    this.dataSource = this.OLD_dataSource?.filter((e) => e?.currency?.indexOf(data?.currency) != -1 &&
      e?.buyerName?.indexOf(data?.BuyerName?.value) != -1);
  }

  REMITTANCE_DATA: any = ''
  Remittancedata(data: any, i: any) {
    this.REMITTANCE_DATA = data;
    this.Inward_Remittance_MT103_DATA?.forEach((element, index) => {
      if (i != index) {
        element['Checked'] = false;
      } else {
        element['Checked'] = true;
      }
    });
    this.MT103_URL = data?.file;
    this.Inward_Remittance_MT103 = [data];
    console.log(this.REMITTANCE_DATA, 'REMITTANCE_DATA')
    this.bankRef = name;
  }
  ShowExportPage(event: any) {
    console.log(event, 'sfsdfsdfdsfsdfd')
    if (this.REMITTANCE_DATA != '') {
      this.VISIBILITY = true
    } else {
      this.VISIBILITY = false
    }
  }

  ArrayToString(array: any) {
    return array.length != 0 ? array.toString() : '';
  }

  ConvertNumberToWords(number: any) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    number = number.toString();
    var atemp = number.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
      var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      var value: any = "";
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + " ";
        }
        if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Crores ";
        }
        if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Lakhs ";
        }
        if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Thousand ";
        }
        if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
          words_string += "Hundred and ";
        } else if (i == 6 && value != 0) {
          words_string += "Hundred ";
        }
      }
      words_string = words_string.split("  ").join(" ");
    }
    return words_string;
  }

  async SendApproval(Status: string, UniqueId: any, code: any) {
    var temp_doc: any = [];
    var approval_data: any = [];
    var UpdatedUrl: any = [];
    if (this.PREVIWES_URL != '' && this.PREVIWES_URL != null) {
      temp_doc[0] = { name: 'Bank format', pdf: this.PREVIWES_URL };
      temp_doc[1] = { name: 'Inward_Remittance_MT103', pdf: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file };
    } else {
      temp_doc[0] = { name: 'Inward_Remittance_MT103', pdf: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file };
    }
    for (let index = 0; index < this.STORE_URL.length; index++) {
      temp_doc.push({ name: 'documents' + (index + 1), pdf: this.STORE_URL[index]?.changingThisBreaksApplicationSecurity })
    }
    for (let index = 0; index < temp_doc.length; index++) {
      if (temp_doc[index]?.pdf != '' && temp_doc[index]?.pdf != undefined) {
        if (temp_doc[index]?.pdf.indexOf('data:application/pdf;base64,') != -1) {
          await this.userService?.UploadS3Buket({
            fileName: temp_doc[index]?.name + '.pdf', buffer: temp_doc[index]?.pdf,
            type: 'application/pdf'
          }).subscribe((response: any) => {
            console.log(response, 'response')
            UpdatedUrl.push(response?.url)
          })
        } else {
          UpdatedUrl.push(temp_doc[index]?.pdf)
        }
      }
      if ((index + 1 == temp_doc.length)) {
        approval_data = {
          id: 'Import_Bill_Disposal' + '_' + this.randomId(5),
          tableName: 'Import-Bill-Disposal',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: UpdatedUrl?.reverse(),
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
        }
        var tempPipo: any = [];
        for (let index = 0; index < this.selectPIPO.length; index++) {
          var findPipo: any = this.item3.filter((item: any) => item?.pi_poNo.indexOf(this.selectPIPO[index]) != -1)
          tempPipo.push(findPipo[0]?._id)
        }
        var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
        updatedata['documents'] = UpdatedUrl?.reverse();
        updatedata['Url_Redirect'] = ({ file: 'export', document: 'blCopyref', SbRef: UniqueId });
        console.log(approval_data, this.mainDoc, this.selectPIPO, this.item3, updatedata, 'approval_data')

        if (Status == '' || Status == null || Status == 'Rejected') {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
            var data: any = {
              data: updatedata,
              TypeTransaction: 'Import-Bill-Disposal',
              fileType: this.USER_DATA?.sideMenu,
              UserDetails: approval_data?.id,
              pipo: tempPipo,
              UniqueId: approval_data?.id,
              MT103Ref: updatedata?._id
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              console.log(res1, 'addExportBillLodgment')
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ],
                "InwardRemittanceTracker": [
                  updatedata?._id
                ]
              }
              this.userService.updateManyPipo(tempPipo, 'import', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data);
                this.documentService.UpdateInward_Remittance(updatedata?._id, { Inward_amount_for_disposal: updatedata?.Inward_amount_for_disposal, pipoRef: tempPipo, SubmitDate: new Date().toLocaleTimeString() }).subscribe((res) => {
                  this.documentService.ForwardContract_update({
                    id: this.ToForwardContract_Selected[0]?._id, data:
                      { AvailableAmount: (parseInt(this.ToForwardContract_Selected[0]?.BookingAmount) - parseInt(this.ToForwardContract_Selected[0]?.UtilizedAmount)) }
                  }).subscribe((res) => {
                    this.router.navigate(['/home/dashboardTask'])
                  })
                })
              }, (error) => {
                console.log('error');
              });
            });
          });
        }
      }
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }

  checkapproval(name: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getApprovedData(name + '_' + this.randomId(5)).subscribe((res: any) => {
        console.log(res, 'dsdsdsdsdsdsds');
        if (res.length == 0) {
          resolve(true)
        } else {
          reject(false);
          this.CustomConfirmDialogModel.Confirm_DialogModel("Apporval Status", 'Already you send for Apporval');
        }
      })
    })
  }

  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };

  ToForwardContract_Selected: any = []
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
    } else {
      this.ToForwardContract_Selected[0] = '';
    }

  }

  ALL_DATA_HSCODE_FORWARD: any = {};
  DoneButton() {
    this.ALL_DATA_HSCODE_FORWARD = {
      FORWARD_CONTRACT: this.ToForwardContract_Selected
    };
    let pipoValue = this.itemArray[0];
    this.fillForm(pipoValue);
  }

}


