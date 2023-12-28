import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from './export-bill-lodgemet-data';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { StorageEncryptionDecryptionService } from '../../../../Storage/storage-encryption-decryption.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';
import { ExportBillLodgementControllerData } from '../Controller/Export-Bill-Lodgement-Controller';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { ExportletterheadService } from '../../../AllBankFormat/FederalBank/exportletterheadold/exportoldletterhead.component';

@Component({
  selector: 'new-export-bill-lodgement',
  templateUrl: './new-export-bill-lodgement.component.html',
  styleUrls: ['./new-export-bill-lodgement.component.scss', '../../commoncss/common.component.scss']
})
export class NewExportBillLodgementComponent implements OnInit {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();
  OTHER_DOCUMENTS: any = [];
  SINGLE_TAB_MULITIPLE_TAB: any = '-1';

  TOTAL_SUM_FIREX: any = 0;
  TOTAL_SUM_FIREX_COMMISION: any = 0
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: [],
    AMOUNT: []
  }
  TOTAL_PIPO_AMOUNT: any = 0;
  SB_NO: any = '';
  FILETR_AMOUNT: any = [];
  SELECT_BUYER_DETAILS: any = '';
  LETTER_HEAD_URL: any = '';
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  INVOICE_LIST: any = {
    sno: '1',
    invoiceno: '',
    amount: '',
    currency: ''
  };
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  cicreate: any = [];
  GroupLabel: any = [];
  CI_INFO_SUM: any = {
    CI_SUM: 0,
    TOTAL_CI: 0,
    PIPO_AMOUNT: 0,
    REMAINING_AMOUNT: 0
  }
  USER_DATA: any = [];
  FORM_VALUE: any = null;
  ExportBillLodgement_Form: any = '';
  GetDownloadStatus: any = [];
  BUTTON_INDEX: any = ''
  selectedIndex: number = 0;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public exportbilllodgementdata: ExportBillLodgementData,
    public sessionstorage: StorageEncryptionDecryptionService,
    public pdfmerge: MergePdfListService,
    private actRoute: ActivatedRoute,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public ExportBillLodgementControllerData: ExportBillLodgementControllerData,
    public filteranytablepagination: filterAnyTablePagination,
    public ExportletterheadService:ExportletterheadService,
    public userService: UserService) {
    exportbilllodgementdata.clear();
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(async (params) => {
      this.exportbilllodgementdata.clear();
      this.PREVIWES_URL = ''
      this.VISIBLITY_PDF = false;
      if (params.get('file') == "NewBillLodgement") {
        this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO = false;
        this.TITLE_CHANGED = "New BillLodgement"
      } else if (params.get('file') == "ExportBillRegularization") {
        this.TITLE_CHANGED = "Export Bill Regularization"
        this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO = true;
      }
      this.documentService.MT102_SUBJECT = this.sessionstorage.get('MT102') != '' ? JSON.parse(this.sessionstorage.get('MT102')) : '';
      console.log(this.exportbilllodgementdata, "exportbilllodgementdata")
      this.userService.getUserDetail().then((status: any) => {
        this.USER_DATA = status['result'];
        console.log(this.USER_DATA, this.USER_DATA?.sideMenu, 'USER_DETAILS');
      });
      this.response(null);
    });

  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  setSelectedBankDetails(bank: any) {
    this.BankId = bank?.BankUniqueId;
    this.SELECT_BUYER_DETAILS = bank;
    console.log(bank, "setSelectedBankDetails")
    if (this.ExportBillLodgement_Form?.value?.SingleMultiple?.bool == true) {
      this.fillFormSingle(null);
    } else {
      this.fillForm(null);
    }
  }

  SubmitButton(formvalue: any, data: any) {
    formvalue.value['AgainstAdvanceReceipt'] = { bool: this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO }
    if (formvalue?.value?.SingleMultiple?.bool == true) {
      this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION;
      this.FormValueSingle(null, formvalue, data, true);
    } else {
      this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = data;
      this.FormValue(null, formvalue, null);
    }
    console.log(data, formvalue.value, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL, "SubmitButton")
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

  HSCODE_LIST: any = [];
  ngOnChanges(changes: SimpleChanges): void {

  }

  getCurrentDate() {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    return currentDate;
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


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.validator.buildForm({
        Bank: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          Banklabel: "Charges A/C No.*",
          TypeOfCurrency: "INR",
          rules: {
            required: true,
          }
        },
        SHIPPING_BILL: {
          type: "PopupOpen",
          value: '',
          label: "Select Shipping bill",
          rules: {
            required: true,
          },
          class: "PopupOpen",
          bindLabel: "value",
          item: [{ value: 'Shipping bill' }],
          id: "SHIPING_BILL_POPUP",
        },
        SingleMultiple: {
          type: "yesnocheckbox",
          value: '',
          label: "Do you need Single Covering Letter?",
          CoveringLetter: true,
          rules: {
            required: true,
          },
          YesNo: '',
        },
        DirectDispatch: {
          type: "yesnocheckbox",
          value: '',
          label: "Direct Dispatch?",
          rules: {
            required: true,
          },
          YesNo: '',
          YesButton: [
            { name: 'AgainstAdvanceReceipt', status: true },
            { name: 'UnderLC', status: false },
            { name: 'Sight', status: true },
            { name: 'Usancedays', status: true },
            { name: 'Usancefrom', status: true },
            { name: 'Usance', status: true },
            { name: 'WithScrutiny', status: true },
            { name: 'BuyerRemitterDifferent', status: true },
            { name: 'InvoiceReduction', status: true },
            { name: 'WithDiscount', status: true },
            { name: 'UnderLCData', status: false },
          ],
          NoButton: [
            { name: 'AgainstAdvanceReceipt', status: true },
            { name: 'UnderLC', status: true },
            { name: 'Sight', status: true },
            { name: 'Usancedays', status: true },
            { name: 'Usancefrom', status: true },
            { name: 'Usance', status: true },
            { name: 'WithScrutiny', status: true },
            { name: 'BuyerRemitterDifferent', status: true },
            { name: 'InvoiceReduction', status: true },
            { name: 'WithDiscount', status: true },
            { name: 'UnderLCData', status: true },
          ],
        },
        Sight: {
          type: "yesnocheckbox",
          value: '',
          label: "Sight?",
          rules: {
            required: true,
          },
          YesNo: '',
          YesButton: [
            { name: 'Usance', status: true },
            { name: 'Usancedays', status: true },
            { name: 'Usancefrom', status: true },
          ],
          NoButton: [
            { name: 'Usance', status: false },
            { name: 'Usancedays', status: false },
            { name: 'Usancefrom', status: false },
          ]
        },
        Usance: {
          type: "yesnocheckbox",
          value: '',
          label: "Usance?",
          rules: {
            required: true,
          },
          YesNo: '',
          YesButton: [
            { name: 'Sight', status: true }
          ],
          NoButton: [
            { name: 'Sight', status: false }
          ]
        },
        Usancedays: {
          type: "text",
          value: '',
          label: "days",
          rules: {
            required: true,
          },
        },
        Usancefrom: {
          type: "text",
          value: '',
          label: "from",
          rules: {
            required: true,
          },
        },
        WithScrutiny: {
          type: "yesnocheckbox",
          value: '',
          label: "With Discount?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        InvoiceReduction: {
          type: "yesnocheckbox",
          value: '',
          label: "Is Invoice reduction?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        YesNoUnderLCAsk: {
          type: "yesnocheckbox",
          value: '',
          label: "Under LC?",
          rules: {
            required: true,
          },
          YesNo: '',
          YesButton: [
            { name: 'UnderLCData', status: true }
          ],
          NoButton: [
            { name: 'UnderLCData', status: false }
          ]
        },
        UnderLCData: {
          type: "DropDown",
          value: '',
          items: [],
          bindLabel: "letterOfCreditNumber",
          label: "Select LC No.",
          rules: {
            required: true,
          },
          ButtonId: "UPLOAD_LC",
          Show: true,
          innerHTML: `<i class="fa fa-upload" aria-hidden="true"></i>`,
          style: ``
        },
      }, 'EXPORT_BILL_OF_EXCHANGE');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  TITLE_CHANGED: string = 'Export Bill Lodgement'
  YesNoCheckBox(value: any) {
    if (value?.id == "DirectDispatch") {
      if (value?.bool == true) {
        // this.TITLE_CHANGED = "Export Bill Lodgement / Direct Dispatch"
      } else {
        // this.TITLE_CHANGED = 'Export Bill Lodgement'
      }
    } else if (value?.id == "AgainstAdvanceReceipt") {
      if (value?.bool == true) {
        // this.TITLE_CHANGED = "Export Bill Lodgement / Regularization"
        this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO = true;
        if (this.exportbilllodgementdata.SELECTED_BUYER_NAME != '') {
          this.exportbilllodgementdata.getShippingBill(this.exportbilllodgementdata.SELECTED_BUYER_NAME, "dgdfds");
        }
      } else {
        // this.TITLE_CHANGED = 'Export Bill Lodgement'
        this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO = false;
        if (this.exportbilllodgementdata.SELECTED_BUYER_NAME != '') {
          this.exportbilllodgementdata.getShippingBill(this.exportbilllodgementdata.SELECTED_BUYER_NAME, "fdfsdfsd");
        }
      }
    } else if (value?.id == "SingleMultiple") {
      if (value?.bool == true) {
        this.SINGLE_TAB_MULITIPLE_TAB = "1";
      } else {
        this.SINGLE_TAB_MULITIPLE_TAB = "2";
      }
    } else if (value?.id == "YesNoUnderLCAsk") {
      if (value?.bool == true) {
        this.filteranytablepagination.PaginationfilterAnyTable({
          buyerName: this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.BuyerName
        }, { skip: 0, limit: 1000 }, 'LC').subscribe((res: any) => {
          console.log(res, 'Beneficiary');
          this.validator.DROP_DOWN_DATA = res?.data;
        });
      } else {
        this.validator.DROP_DOWN_DATA = [];
      }
    }
    console.log(value, "YesNoCheckBox")
  }

  CreateTransaction(ShippingBill, index) {
    if (this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]?.COMMERICAIL_DATA?.length != 0) {
      this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]['ALL_RELATED_DOCUMENTS'] = [];
      this.OTHER_DOCUMENTS[0] = {
        name: 'Shipping Bill',
        pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]?.doc
      }
      this.OTHER_DOCUMENTS[1] = {
        name: 'blCopy',
        pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]?.blCopyDoc
      }
      this.OTHER_DOCUMENTS[2] = {
        name: 'Commercial',
        pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]?.commercialDoc
      }
      this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[index]['ALL_RELATED_DOCUMENTS'] = this.OTHER_DOCUMENTS;
    } else {
      this.toastr.error("Please select atleast one commercial no.")
    }
  }

  AllCreateTransaction(panel: any) {
    this.OTHER_DOCUMENTS = [];
    for (let index = 0; index < this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.length; index++) {
      const element = this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS[index];
      if (this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.COMMERICAIL_DATA?.length != 0) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]['ALL_RELATED_DOCUMENTS'] = [];
        this.OTHER_DOCUMENTS[0] = {
          name: 'Shipping Bill',
          pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.doc
        }
        this.OTHER_DOCUMENTS[1] = {
          name: 'blCopy',
          pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.blCopyDoc
        }
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.COMMERICAIL_DATA?.forEach((commercialdetailselement, j) => {
          this.OTHER_DOCUMENTS[(2 + j)] = {
            name: 'Commercial-' + (j + 1),
            pdf: commercialdetailselement?.commercialDoc
          }
        });
        if ((index + 1) == this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.length) {
          console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, this.OTHER_DOCUMENTS, "OTHER_DOCUMENTS")
          this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]['ALL_RELATED_DOCUMENTS'] = this.OTHER_DOCUMENTS;
          panel?.displayHidden
        }
      } else {
        this.toastr.error("Please select atleast one commercial no.")
        break;
      }
    }
  }

  SELECTED_PREVIEWS_URL: any = ''
  async setPrevious(formvalue: any, data: any) {
    if (formvalue?.status != "INVALID") {
      if (formvalue?.value?.SingleMultiple?.bool == true) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = data;
        this.FormValueSingle(null, formvalue, data, false);
      } else {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = data;
        this.FormValue(null, formvalue, data);
      }
      console.log(data, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL, "setPrevious")
    }
  }


  FIRX_AMOUNT(amountarray: any): any {
    return parseFloat(amountarray?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
  }

  getStatusCheckerMaker(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.PREVIWES_URL != '' ? this.PREVIWES_URL : this.exportbilllodgementdata.PREVIWES_URL,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse1: any) => {
        temp[0] = pdfresponse1?.url;
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.LETTER_HEAD_URL,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse2: any) => {
          temp[1] = pdfresponse2?.url;
          reslove(temp);
        });
      });
    })
  }

  async getS3Url2() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.exportbilllodgementdata.PREVIWES_URL,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse1: any) => {
        temp[0] = pdfresponse1?.url;
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.LETTER_HEAD_URL,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse2: any) => {
          temp[1] = pdfresponse2?.url;
          reslove(temp);
        });
      });
    })
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }

  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };

  PREVIEWS_URL_LIST: any = '';
  alldocuments: any = [];
  SELECTED_SB_DATA: any = ''
  async FormValue(event: any, fromValue: any, sbdata: any) {
    console.log(fromValue?.value, sbdata, "FormValue");
    if (fromValue?.status != "INVALID") {
      this.ExportBillLodgement_Form = fromValue?.value;
      this.PREVIEWS_URL_LIST = ''
      this.alldocuments = [];
      this.SELECTED_SB_DATA = ''
      await this.getS3Url().then(async (res: any) => {
        await res?.forEach(element => {
          this.alldocuments.push(element)
        });
        await this.OTHER_DOCUMENTS?.forEach(element => {
          this.alldocuments.push(element?.pdf)
        });
        if (sbdata != undefined && sbdata != null) {
          sbdata["FORM_URL_LIST"] = this.alldocuments;
          if (this.ExportBillLodgement_Form?.SingleMultiple?.value == true) {
            this.fillFormSingle(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION);
          } else {
            this.SELECTED_SB_DATA = sbdata;
            this.fillForm(sbdata)
          }
        } else {
          this.fillForm(null)
        }
        var fitertemp: any = this.alldocuments.filter(n => n);
        if (sbdata != undefined && sbdata != null) {
          sbdata["PREVIEWS_URL_LIST"] = '';
        }
        this.SELECTED_PREVIEWS_URL = '';
        await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
          this.PREVIEWS_URL_LIST = merge?.pdfurl;
          if (sbdata != undefined && sbdata != null) {
            sbdata["PREVIEWS_URL_LIST"] = this.PREVIEWS_URL_LIST;
          }
          this.SELECTED_PREVIEWS_URL = merge?.pdfurl
          console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'FormValuePreviewSlideToggle')
        });
      });
    }
  }

  TIMEOUT: any = ''
  async fillForm(sbdata: any) {
    console.log(sbdata, "sdfsdfsdfdsfd")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        this.ExportBillLodgementControllerData.BankFormatLoad().
          FedralNotANNEXURE(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then(async(res: any) => {
            this.TIMEOUT = setTimeout(async () => {
              if (sbdata != undefined && sbdata != null) {
                this.exportbilllodgementdata.PREVIWES_URL = '';
              }
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true;
              if (sbdata != undefined && sbdata != null) {
                this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
              }
              this.LETTER_HEAD_URL=''
              await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                this.LETTER_HEAD_URL = letterhead;
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              })
              console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
            }, 200);
          })
      } else if (this.BankId == 'H_B_L_7') {
        this.PREVIWES_URL = ''
        if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
          this.ExportBillLodgementControllerData.BankFormatLoad().
            HDFCExportRegularization(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then((res: any) => {
              this.TIMEOUT = setTimeout(async() => {
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = '';
                }
                this.PREVIWES_URL = res;
                this.VISIBLITY_PDF = true;
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
                }
                this.LETTER_HEAD_URL=''
                await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                  this.LETTER_HEAD_URL = letterhead;
                  console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                })
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              }, 200);
            })
        } else {
          this.ExportBillLodgementControllerData.BankFormatLoad().
            HDFCExportLODGEMENT(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then((res: any) => {
              this.TIMEOUT = setTimeout(async() => {
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = '';
                }
                this.PREVIWES_URL = res;
                this.VISIBLITY_PDF = true;
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
                }
                this.LETTER_HEAD_URL=''
                await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                  this.LETTER_HEAD_URL = letterhead;
                  console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                })
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              }, 200);
            })
        }
      }
    }
  }


  PREVIOUD_BTN: boolean = true;
  async FormValueSingle(event: any, fromValue: any, sbdata: any, bool: any) {
    if (fromValue?.status != "INVALID") {
      this.ExportBillLodgement_Form = fromValue?.value;
      if (bool == true) {
        this.PREVIEWS_URL_LIST = ''
        this.alldocuments = [];
        console.log(fromValue, sbdata, "FormValueSingle");
        await this.fillFormSingle(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION).then(async (res: any) => {
          await this.getS3Url2().then(async (res: any) => {
            await res?.forEach(element => {
              this.alldocuments.push(element)
            });
            this.exportbilllodgementdata.ALL_RELATED_DOCUMENTS = [];
            this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(element => {
              sbdata[element]?.ALL_RELATED_DOCUMENTS?.forEach(sbelement => {
                this.alldocuments.push(sbelement?.pdf)
                this.exportbilllodgementdata.ALL_RELATED_DOCUMENTS.push(sbelement);
              });
            });
            var fitertemp: any = this.alldocuments.filter(n => n);
            await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
              this.PREVIEWS_URL_LIST = merge?.pdfurl;
              this.SELECTED_PREVIEWS_URL = ''
              setTimeout(() => {
                this.SELECTED_PREVIEWS_URL = merge?.pdfurl
                this.PREVIOUD_BTN = false;
              }, 500);
            });
          });
        });
      }
      console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, this.PREVIEWS_URL_LIST, 'FormValueSinglePreviewSlideToggle')
    }
  }

  ShippingBillTabChanged(tab: any, formvalue: any) {
    const id = tab?.tab?.content?.viewContainerRef?.element?.nativeElement?.id;
    if (id != '' && id != null && id != undefined) {
      this.BUTTON_INDEX = id;
      this.selectedIndex = tab?.index;
      if (formvalue?.value?.SingleMultiple?.bool == true) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION;
        this.FormValueSingle(null, formvalue, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, false);
        console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, "FormValueSingle")
      } else if (formvalue?.value?.SingleMultiple?.bool == false) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL = this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[id];
        this.FormValue(null, formvalue, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[id]);
        console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[id], "FormValue")
      }
    }
    console.log(tab, id, formvalue, formvalue?.value?.SingleMultiple?.bool, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[id], "ShippingBillTabChanged")
  }

  async fillFormSingle(sbdata: any) {
    return new Promise(async (resolve, reject) => {
      console.log(sbdata, "sdfsdfsdfdsfd")
      let formUrl: any = '';
      this.VISIBLITY_PDF = false;
      if (this.BankId != '') {
        if (this.BankId == 'F_B_L_6') {
          this.PREVIWES_URL = ''
          this.ExportBillLodgementControllerData.BankFormatLoad().
            FedralWithANNEXURE(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then((res: any) => {
              this.TIMEOUT = setTimeout(async() => {
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = '';
                }
                this.PREVIWES_URL = res;
                this.VISIBLITY_PDF = true;
                if (sbdata != undefined && sbdata != null) {
                  this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
                }
                this.LETTER_HEAD_URL=''
                await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                  this.LETTER_HEAD_URL = letterhead;
                  console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                })
                resolve(this.PREVIWES_URL)
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              }, 200);
            })
        } else if (this.BankId == 'H_B_L_7') {
          this.PREVIWES_URL = ''
          if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
            this.ExportBillLodgementControllerData.BankFormatLoad().
              HDFCExportRegularization(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then((res: any) => {
                this.TIMEOUT = setTimeout(async() => {
                  if (sbdata != undefined && sbdata != null) {
                    this.exportbilllodgementdata.PREVIWES_URL = '';
                  }
                  this.PREVIWES_URL = res;
                  this.VISIBLITY_PDF = true;
                  if (sbdata != undefined && sbdata != null) {
                    this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
                  }
                  resolve(this.PREVIWES_URL)
                  this.LETTER_HEAD_URL=''
                  await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                    this.LETTER_HEAD_URL = letterhead;
                    console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                  })
                  console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                }, 200);
              })
          } else {
            this.ExportBillLodgementControllerData.BankFormatLoad().
              HDFCExportLODGEMENT(this.validator, this.exportbilllodgementdata, sbdata, this.ExportBillLodgement_Form, this.SELECT_BUYER_DETAILS).then((res: any) => {
                this.TIMEOUT = setTimeout(async() => {
                  if (sbdata != undefined && sbdata != null) {
                    this.exportbilllodgementdata.PREVIWES_URL = '';
                  }
                  this.PREVIWES_URL = res;
                  this.VISIBLITY_PDF = true;
                  if (sbdata != undefined && sbdata != null) {
                    this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
                  }
                  resolve(this.PREVIWES_URL)
                  this.LETTER_HEAD_URL=''
                  await this.ExportletterheadService.createLetterHead().Federal(this.validator, this.ExportBillLodgement_Form, sbdata).then(async (letterhead) => {
                    this.LETTER_HEAD_URL = letterhead;
                    console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                  })
                  console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
                }, 200);
              })
          }
        }
      }
    })
  }

  async SendApproval(Status: string, UniqueId: any, event: any) {
    if (UniqueId != null) {
      var approval_data: any = {};
      delete this.USER_DATA?.members_list
      delete this.USER_DATA?.LoginToken
      let mergePdf_List: any = [];
      for (let index = 0; index < this.alldocuments.length; index++) {
        const element = this.alldocuments[index];
        mergePdf_List.push(element)
      }
      let extradata2: any = [];
      let SB_ID: any = [];
      if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(element => {
          this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.COMMERICAIL_DATA?.forEach(commercialelement => {
            extradata2.push(commercialelement?._id)
          });
          SB_ID?.push({ id: element?._id, status: element?.balanceAvai == '0' ? 'Cleared' : 'Pending' })
        });
      } else {
        this.SELECTED_SB_DATA?.COMMERICAIL_DATA?.forEach(commercialelement => {
          extradata2.push(commercialelement?._id)
        });
        SB_ID?.push({ id: this.SELECTED_SB_DATA?._id, status: this.SELECTED_SB_DATA?.balanceAvai == '0' ? 'Cleared' : 'Pending' })
      }
      if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
        approval_data = {
          id: 'IRDR' + '_' + this.randomId(5),
          tableName: 'Inward-Remitance-Dispoal-Realization',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: mergePdf_List,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
        }
      } else if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
        approval_data = {
          id: 'EB_Regularisation' + '_' + this.randomId(5),
          tableName: 'Export-Bill-Regularisation',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: mergePdf_List,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
          commercialRef: extradata2,
          SBRef: this.ExportBillLodgement_Form['SbRef']
        }
      } else if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == false) {
        approval_data = {
          id: 'EB_Lodgement' + '_' + this.randomId(5),
          tableName: 'Export-Bill-Lodgement',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: mergePdf_List,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
          commercialRef: extradata2,
          SBRef: this.ExportBillLodgement_Form['SbRef']
        }
      }
      var pipo: any = [];
      var pipo_id: any = [];
      var pipo_name: any = [];
      let Uniquekey: any = [];
      let extradata: any = [];
      if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(element => {
          Uniquekey.push(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?._id)
          pipo.push(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.pipo[0])
          extradata.push(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.sbno)
        });
      } else {
        Uniquekey.push(this.SELECTED_SB_DATA?._id)
        pipo.push(this.SELECTED_SB_DATA?.pipo[0])
        extradata.push(this.SELECTED_SB_DATA?.sbno)
      }
      (pipo != 'NF' ? pipo : []).forEach(element => {
        pipo_id.push(element?._id)
        pipo_name.push(element?.pi_poNo)
      });
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id) {
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
              if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                this.ExportBillLodgement_Form['SbRef'] = (Uniquekey);
                this.ExportBillLodgement_Form['Url_Redirect'] = ({ file: 'export', document: 'blCopyref', SbRef: Uniquekey })
              } else {
                this.ExportBillLodgement_Form['SbRef'] = (Uniquekey);
                this.ExportBillLodgement_Form['Url_Redirect'] = ({ file: 'export', document: 'blCopyref', SbRef: Uniquekey })
              }
              this.ExportBillLodgement_Form['documents'] = (mergePdf_List);
              if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
                var data: any = {
                  data: this.ExportBillLodgement_Form,
                  TypeTransaction: 'Export-Bill-Regularisation',
                  fileType: this.USER_DATA?.sideMenu,
                  UserDetails: approval_data?.id,
                  pipo: pipo_id,
                  commercialRef: extradata2,
                  SBRef: this.ExportBillLodgement_Form['SbRef']
                }
                this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                  let updatedData = {
                    "TransactionRef": [
                      res1._id,
                    ]
                  }
                  console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, extradata2, "this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION")
                  if (this.documentService.MT102_SUBJECT?.file == '' || this.documentService.MT102_SUBJECT?.file == undefined) {
                    var updateapproval_data: any = {
                      RejectData: {
                        tableName: 'masterrecord',
                        id: approval_data?.id,
                        TransactionId: res1._id,
                        data: {
                          SbRef: UniqueId,
                          Total_FIRX_Amount: "-1"
                        },
                        pipo_id: pipo_id,
                        pipo_name: pipo_name
                      }
                    }
                    this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                          this.router.navigate(['/home/dashboardTask']);
                          this.toastr.success(`SB No. ${extradata?.join(',')} sent for for lodgement approval`);
                        } else {
                          this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS = this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.filter((item: any) => item == this.BUTTON_INDEX)
                          this.toastr.success(`SB No. ${this.SELECTED_SB_DATA?.sbno} sent for for lodgement approval`);
                        }
                        SB_ID?.forEach(SBElement => {
                          this.documentService.updateMaster({ AMOUNT_STATUS: SBElement?.status }, SBElement?.id).subscribe((Res: any) => {
                          })
                        });
                        event?.displayHidden;
                      });
                    });
                  }
                  console.log('addExportBillLodgment', res1);
                })
              } else if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == false) {
                var data: any = {
                  data: this.ExportBillLodgement_Form,
                  TypeTransaction: 'Export-Bill-Lodgement',
                  fileType: this.USER_DATA?.sideMenu,
                  UserDetails: approval_data?.id,
                  pipo: pipo_id,
                  commercialRef: extradata2,
                  SBRef: this.ExportBillLodgement_Form['SbRef']
                }
                this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                  let updatedData = {
                    "TransactionRef": [
                      res1._id,
                    ]
                  }
                  console.log(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION, extradata2, "this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION")
                  if (this.documentService.MT102_SUBJECT?.file == '' || this.documentService.MT102_SUBJECT?.file == undefined) {
                    var updateapproval_data: any = {
                      RejectData: {
                        tableName: 'masterrecord',
                        id: approval_data?.id,
                        TransactionId: res1._id,
                        data: {
                          SbRef: UniqueId,
                          Total_FIRX_Amount: "-1"
                        },
                        pipo_id: pipo_id,
                        pipo_name: pipo_name
                      }
                    }
                    this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                          this.router.navigate(['/home/dashboardTask']);
                          this.toastr.success(`SB No. ${extradata?.join(',')} sent for for regularisation approval`);
                        } else {
                          this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS = this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.filter((item: any) => item == this.BUTTON_INDEX)
                          this.toastr.success(`SB No. ${this.SELECTED_SB_DATA?.sbno} sent for for regularisation approval`);
                        }
                        SB_ID?.forEach(SBElement => {
                          this.documentService.updateMaster({ AMOUNT_STATUS: SBElement?.status }, SBElement?.id).subscribe((Res: any) => {
                          })
                        });
                        event?.displayHidden;
                      });
                    });
                  }
                  console.log('addExportBillLodgment', res1);
                })
              } else {
                if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
                  var changevalue: any = this.documentService.MT102_SUBJECT;
                  if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                    changevalue['SbRef'] = Uniquekey;
                    changevalue['Url_Redirect'] = { file: 'export', document: 'blCopyref', SbRef: Uniquekey, pipo: pipo_name.toString() };
                  } else {
                    this.ExportBillLodgement_Form['SbRef'] = (UniqueId);
                    changevalue['SbRef'] = [this.SELECTED_SB_DATA?._id];
                    changevalue['Url_Redirect'] = { file: 'export', document: 'blCopyref', SbRef: UniqueId, pipo: pipo_name.toString() };
                  }
                  changevalue['pipo'] = pipo_id;

                  var data: any = {
                    data: changevalue,
                    TypeTransaction: 'Inward-Remitance-Dispoal-Realization',
                    fileType: this.USER_DATA?.sideMenu,
                    UserDetails: approval_data?.id,
                    pipo: pipo_id,
                    SBRef: this.ExportBillLodgement_Form['SbRef']
                  }
                  this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                    if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                      this.router.navigate(['/home/dashboardTask'])
                    }
                    event?.displayHidden;
                    this.sessionstorage.remove('MT102')
                    console.log('addExportBillLodgment', res1);
                  })
                } else {
                  if (this.ExportBillLodgement_Form['AgainstAdvanceReceipt']?.bool == false) {
                    var data: any = {
                      data: this.ExportBillLodgement_Form,
                      TypeTransaction: 'Export-Bill-Regularisation',
                      fileType: this.USER_DATA?.sideMenu,
                      UserDetails: approval_data?.id,
                      pipo: pipo_id,
                      SBRef: this.ExportBillLodgement_Form['SbRef']
                    }
                    this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                      let updatedData = {
                        "TransactionRef": [
                          res1._id,
                        ]
                      }
                      this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                        console.log('king123');
                        console.log(data);
                        var updateapproval_data: any = {
                          RejectData: {
                            tableName: 'masterrecord',
                            id: approval_data?.id,
                            TransactionId: res1._id,
                            data: {
                              SbRef: UniqueId,
                              Total_FIRX_Amount: "-1"
                            },
                            pipo_id: pipo_id,
                            pipo_name: pipo_name
                          }
                        }
                        this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                          if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                            this.router.navigate(['/home/dashboardTask'])
                          }
                          event?.displayHidden;
                        });
                      }, (error) => {
                        console.log('error');
                      }
                      );
                      console.log('addExportBillLodgment', res1);
                    })
                  }
                }
              }
            });
          }
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${res?.status} panel`)
        }
      });
    }
    console.log('Export-Direct-Dispatch' + UniqueId, UniqueId, pipo, approval_data, 'uiiiiiiiiiiiiii')
  }

}