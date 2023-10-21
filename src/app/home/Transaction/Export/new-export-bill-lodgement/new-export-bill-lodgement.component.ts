import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument } from 'pdf-lib';
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
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import $ from 'jquery'

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
    console.log(data, this.exportbilllodgementdata.SELECTED_SHIPPING_BILL, "SubmitButton")
  }

  async fillForm(sbdata: any) {
    console.log(sbdata, "sdfsdfsdfdsfd")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
      }
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const doc = new jsPDF()

      const form: any = pdfDoc?.getForm()
      const getAllFields = form?.getFields();
      getAllFields?.forEach(element => {
        const elementvalue: any = element?.acroField?.dict?.values();
        if (elementvalue[0]?.encodedName == '/Tx') {
          element.setFontSize(8)
          element?.enableReadOnly();
          const [widget]: any = element?.acroField?.getWidgets();
          widget?.getOrCreateBorderStyle()?.setWidth(0);
        }
      });

      getAllFields[0]?.setText(this.validator.COMPANY_INFO[0]?.BranchName);
      getAllFields[1]?.setText('');
      getAllFields[2]?.setText('');
      getAllFields[3]?.setText('');
      getAllFields[4]?.setText('');
      getAllFields[5]?.setText(this.validator.COMPANY_INFO[0]?.teamName);
      getAllFields[6]?.setText(this.validator.COMPANY_INFO[0]?.adress);
      getAllFields[7]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[9]?.setText('');
      getAllFields[10]?.setText('');
      getAllFields[11]?.setText('');
      getAllFields[12]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName);
      getAllFields[13]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs);
      getAllFields[14]?.setText('');
      getAllFields[15]?.setText('');
      getAllFields[16]?.setText('');
      getAllFields[17]?.setText('');
      getAllFields[18]?.setText('');
      getAllFields[19]?.uncheck();
      getAllFields[20]?.uncheck();
      getAllFields[21]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
      getAllFields[22]?.uncheck()
      getAllFields[23]?.uncheck()
      console.log(sbdata, this.ExportBillLodgement_Form, "TRANSACTION_SELECTED_COMMERICAIL_DATA");

      if (this.ExportBillLodgement_Form?.Sight?.bool == true) {
        getAllFields[35]?.check();
        getAllFields[36]?.uncheck();

      } else if (this.ExportBillLodgement_Form?.Usance?.bool == true) {
        getAllFields[35]?.uncheck();
        getAllFields[36]?.check();
        getAllFields[37]?.setText(this.ExportBillLodgement_Form?.Usancedays);
        getAllFields[38]?.setText(this.ExportBillLodgement_Form?.Usancefrom);
      }

      let CommercialNumberList: any = [];
      let FIRX_DATE_NO: any = {
        NUMBER: [],
        DATE: [],
        CURRENCY: [],
        AMOUNT: [],
        RECIVCED_AMOUNT: [],
        USED_AMOUNT: []
      };
      let dataTable: any = []
      if (sbdata != null) {
        sbdata?.firxdetails?.forEach(element => {
          element?.FirxUsed_Balance?.split(',').forEach(FirxUsed_Balance => {
            FIRX_DATE_NO?.AMOUNT?.push(FirxUsed_Balance)
          });
        });
        let TOTAL_SUM_FIREX: any = FIRX_DATE_NO?.AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
        sbdata?.COMMERICAIL_DATA?.forEach(element => {
          CommercialNumberList.push(element?.commercialNumber)
          element?.MatchOffData?.forEach(IRM_REF_Element => {
            FIRX_DATE_NO?.NUMBER?.push(IRM_REF_Element?.billNo)
            FIRX_DATE_NO?.DATE?.push(IRM_REF_Element?.date)
            FIRX_DATE_NO?.CURRENCY?.push(IRM_REF_Element?.currency)
            FIRX_DATE_NO?.RECIVCED_AMOUNT?.push(IRM_REF_Element?.amount)
            FIRX_DATE_NO?.USED_AMOUNT?.push(IRM_REF_Element?.InputValue)
            dataTable.push([IRM_REF_Element?.date, IRM_REF_Element?.billNo, IRM_REF_Element?.amount,
            IRM_REF_Element?.InputValue, element?.commercialNumber, element?.sbNo])
          });
        });

        getAllFields[24]?.setText(CommercialNumberList?.join(","));
        getAllFields[25]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
        getAllFields[26]?.uncheck()
        getAllFields[27]?.uncheck()
        getAllFields[28]?.setText(FIRX_DATE_NO?.NUMBER?.slice(0, 3)?.join(','));
        getAllFields[29]?.setText(FIRX_DATE_NO?.DATE?.slice(0, 3)?.join(','));
        getAllFields[30]?.setText(FIRX_DATE_NO?.CURRENCY?.slice(0, 3)?.join(','));


        getAllFields[39]?.setText('');

        getAllFields[31]?.setText(!isNaN(TOTAL_SUM_FIREX) ? TOTAL_SUM_FIREX.toString() : '0');
        getAllFields[32]?.setText(sbdata?.fobCurrency);
        getAllFields[33]?.setText(sbdata?.fobValue != undefined ? this.ConvertNumberToWords(sbdata?.fobValue).toUpperCase() : '0');
        getAllFields[34]?.setText(sbdata?.fobValue?.toString());

        getAllFields[40]?.setText(sbdata?.pipo[0]?.HSCODE);
        getAllFields[41]?.setText('');
        getAllFields[42]?.setText(sbdata?.countryOfFinaldestination);
        getAllFields[43]?.setText(sbdata['blcopydetails'] != undefined ? sbdata['blcopydetails'][0]?.airwayBlCopyNumber : '');
        getAllFields[44]?.setText(sbdata?.sbno.toString());
        getAllFields[45]?.setText(sbdata?.portCode);
        getAllFields[46]?.setText(sbdata?.sbdate);
        getAllFields[47]?.setText('');
        getAllFields[48]?.setText('');
        getAllFields[49]?.setText('');
        getAllFields[50]?.setText('');
        getAllFields[51]?.setText('');
        getAllFields[52]?.setText('');
        getAllFields[53]?.setText('');
        getAllFields[54]?.setText('');
        getAllFields[55]?.setText('');
        getAllFields[56]?.setText('');
        getAllFields[57]?.setText('');
        getAllFields[58]?.setText('');
        getAllFields[59]?.setText('');
        getAllFields[60]?.setText('');
        getAllFields[61]?.setText('');
        getAllFields[62]?.setText('');
        getAllFields[63]?.setText('');
        getAllFields[64]?.setText('');

        // // OD/CC/CA
        getAllFields[65]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
        getAllFields[66]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
        getAllFields[67]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
        getAllFields[68]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
        getAllFields[69]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
        getAllFields[70]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
        getAllFields[71]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
        getAllFields[72]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
        getAllFields[73]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
        getAllFields[74]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
        getAllFields[75]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
        getAllFields[76]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
        getAllFields[77]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);

        getAllFields[78]?.setText('');
        getAllFields[79]?.uncheck();
        getAllFields[80]?.uncheck();
        getAllFields[81]?.uncheck();
        getAllFields[82]?.uncheck();
        getAllFields[83]?.uncheck();
        getAllFields[84]?.setText("");
        getAllFields[85]?.uncheck();
        getAllFields[86]?.uncheck();
        getAllFields[87]?.uncheck();
        getAllFields[88]?.setText(this.getCurrentDate().toString());
        getAllFields[89]?.uncheck();
        getAllFields[90]?.uncheck();
        getAllFields[91]?.uncheck();
        getAllFields[92]?.uncheck();
        getAllFields[93]?.uncheck();
        getAllFields[94]?.uncheck();
        getAllFields[95]?.setText(this.getCurrentDate().toString());
        getAllFields[96]?.setText('');
        getAllFields[97]?.setText('');
        getAllFields[98]?.setText('');
        getAllFields[99]?.setText('');
        getAllFields[100]?.setText('');
        if (FIRX_DATE_NO?.DATE[0] != undefined) {
          getAllFields[101]?.setText(FIRX_DATE_NO?.DATE[0]);
          getAllFields[102]?.setText(FIRX_DATE_NO?.NUMBER[0]);
          getAllFields[103]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[0]?.toString());
          getAllFields[104]?.setText(FIRX_DATE_NO?.USED_AMOUNT[0]?.toString());
        }
        if (FIRX_DATE_NO?.DATE[1] != undefined) {
          getAllFields[105]?.setText(FIRX_DATE_NO?.DATE[1]);
          getAllFields[106]?.setText(FIRX_DATE_NO?.NUMBER[1]);
          getAllFields[107]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[1]?.toString());
          getAllFields[108]?.setText(FIRX_DATE_NO?.USED_AMOUNT[1]?.toString());
        }
        if (FIRX_DATE_NO?.DATE[2] != undefined) {
          getAllFields[109]?.setText(FIRX_DATE_NO?.DATE[2]);
          getAllFields[110]?.setText(FIRX_DATE_NO?.NUMBER[2]);
          getAllFields[111]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[2]?.toString());
          getAllFields[112]?.setText(FIRX_DATE_NO?.USED_AMOUNT[2]?.toString());
        }
        getAllFields[113]?.setText('');
      }
      await pdfDoc.save();

      let text = "ANNEXURE – REMITTANCE RECEIVED";
      var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
      doc.text(text, pageWidth / 2, 20, { align: 'center' });

      autoTable(doc, {
        margin: { top: 30, left: 10, bottom: 30 },
        head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
        body: dataTable,
      })
      // this.addWaterMark(doc);
      let tableuri = doc.output("arraybuffer");
      console.log(tableuri, "tableuri")
      const loadmergedPdf = await PDFDocument.load(tableuri);

      const mergedPdf = await PDFDocument.create();
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page, index) => {
        if ((index + 1) != copiedPages?.length) {
          mergedPdf.addPage(page);
        }
      });
      if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
        const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
        copiedPages3.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }
      const mergedPdfFile = await mergedPdf.save();
      const mergedPdfload = await PDFDocument.load(mergedPdfFile);
      const mergedPdfFileload = await mergedPdfload.save();
      var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
      const x1 = 'data:application/pdf;base64,' + base64String1;
      this.PREVIWES_URL = '';
      if (sbdata != undefined && sbdata != null) {
        sbdata["PREVIWES_URL"] = ''
        this.exportbilllodgementdata.PREVIWES_URL = '';
      }
      setTimeout(() => {
        this.PREVIWES_URL = x1;
        this.VISIBLITY_PDF = true;
        if (sbdata != undefined && sbdata != null) {
          this.exportbilllodgementdata.PREVIWES_URL = this.PREVIWES_URL;
          sbdata["PREVIWES_URL"] = this.PREVIWES_URL;
        }
      }, 200);
    }
  }

  addWaterMark(doc: any) {
    var totalPages = doc.internal.getNumberOfPages();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var img1 = new Image();
    img1.src = this.validator.COMPANY_INFO[0]?.letterHead;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.addImage(img1, 'PNG', 0, 0, pageWidth, pageHeight);
    }
    return doc;
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
          HideShowInput: ["AgainstAdvanceReceipt", "UnderLC", "Sight", "Usancedays", "Usancefrom", "Usance", "WithScrutiny", "BuyerRemitterDifferent", "InvoiceReduction", "WithDiscount"]
        },
        // UnderLC: {
        //   type: "yesnocheckbox",
        //   value: '',
        //   label: "Under LC?",
        //   rules: {
        //     required: true,
        //   },
        //   YesNo: '',
        //   HideShowInput: ["Sight", "Usance"]
        // },
        Sight: {
          type: "yesnocheckbox",
          value: '',
          label: "Sight?",
          rules: {
            required: true,
          },
          YesNo: '',
          HideShowInput: ["Usance"]
        },
        Usance: {
          type: "yesnocheckbox",
          value: '',
          label: "Usance?",
          rules: {
            required: true,
          },
          YesNo: '',
          HideShowInput: ["Sight"]
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
        // WithDiscount: {
        //   type: "yesnocheckbox",
        //   value: '',
        //   label: "With Discount?",
        //   rules: {
        //     required: true,
        //   },
        //   YesNo: ''
        // },
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

  AllCreateTransaction() {
    for (let index = 0; index < this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.length; index++) {
      if (this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]?.COMMERICAIL_DATA?.length != 0) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]['ALL_RELATED_DOCUMENTS'] = [];
        this.OTHER_DOCUMENTS[0] = {
          name: 'Shipping Bill',
          pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]?.doc
        }
        this.OTHER_DOCUMENTS[1] = {
          name: 'blCopy',
          pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]?.blCopyDoc
        }
        this.OTHER_DOCUMENTS[2] = {
          name: 'Commercial',
          pdf: this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]?.commercialDoc
        }
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION['SB_INDEX_' + index]['ALL_RELATED_DOCUMENTS'] = this.OTHER_DOCUMENTS;
      } else {
        this.toastr.error("Please select atleast one commercial no.")
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

  PREVIOUD_BTN: boolean = true;
  async FormValueSingle(event: any, fromValue: any, sbdata: any, bool: any) {
    console.log(fromValue, sbdata, "FormValue");
    if (fromValue?.status != "INVALID") {
      this.ExportBillLodgement_Form = fromValue?.value;
      if (bool == true) {
        this.PREVIEWS_URL_LIST = ''
        this.alldocuments = [];
        if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
          await this.fillFormSingle(this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION).then(async (res: any) => {
            await this.getS3Url2().then(async (res: any) => {
              await res?.forEach(element => {
                this.alldocuments.push(element)
              });
              if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                this.exportbilllodgementdata.ALL_RELATED_DOCUMENTS = [];
                this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(element => {
                  sbdata[element]?.ALL_RELATED_DOCUMENTS?.forEach(sbelement => {
                    this.alldocuments.push(sbelement?.pdf)
                    this.exportbilllodgementdata.ALL_RELATED_DOCUMENTS.push(sbelement);
                  });
                });
              } else {
                sbdata?.ALL_RELATED_DOCUMENTS?.forEach(element => {
                  this.alldocuments.push(element?.pdf)
                });
              }
              var fitertemp: any = this.alldocuments.filter(n => n);
              await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
                if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
                  this.PREVIEWS_URL_LIST = merge?.pdfurl;
                  this.SELECTED_PREVIEWS_URL = ''
                  setTimeout(() => {
                    this.SELECTED_PREVIEWS_URL = merge?.pdfurl
                    this.PREVIOUD_BTN = false;
                  }, 500);
                }
              });
            });
          });
        }
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
          formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
        }
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form: any = pdfDoc?.getForm()
        const getAllFields = form?.getFields();
        getAllFields?.forEach(element => {
          const elementvalue: any = element?.acroField?.dict?.values();
          if (elementvalue[0]?.encodedName == '/Tx') {
            element.setFontSize(8)
            element?.enableReadOnly();
            const [widget]: any = element?.acroField?.getWidgets();
            widget?.getOrCreateBorderStyle()?.setWidth(0);
          }
        });

        getAllFields[0]?.setText('');
        getAllFields[1]?.setText('');
        getAllFields[2]?.setText('');
        getAllFields[3]?.setText('');
        getAllFields[4]?.setText('');
        getAllFields[5]?.setText(this.validator.COMPANY_INFO[0]?.teamName);
        getAllFields[6]?.setText(this.validator.COMPANY_INFO[0]?.adress);
        getAllFields[7]?.setText('');
        getAllFields[8]?.setText('');
        getAllFields[8]?.setText('');
        getAllFields[9]?.setText('');
        getAllFields[10]?.setText('');
        getAllFields[11]?.setText('');
        getAllFields[12]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerName);
        getAllFields[13]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerAdrs);
        getAllFields[14]?.setText('');
        getAllFields[15]?.setText('');
        getAllFields[16]?.setText('');
        getAllFields[17]?.setText('');
        getAllFields[18]?.setText('');
        getAllFields[19]?.uncheck();
        getAllFields[20]?.uncheck();
        getAllFields[21]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '\n' + this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
        getAllFields[22]?.uncheck()
        getAllFields[23]?.uncheck()
        console.log(sbdata, "TRANSACTION_SELECTED_COMMERICAIL_DATA");
        if (this.ExportBillLodgement_Form?.Sight?.bool == true) {
          getAllFields[35]?.check();
          getAllFields[36]?.uncheck();

        } else if (this.ExportBillLodgement_Form?.Usance?.bool == true) {
          getAllFields[35]?.uncheck();
          getAllFields[36]?.check();
          getAllFields[37]?.setText(this.ExportBillLodgement_Form?.Usancedays);
          getAllFields[38]?.setText(this.ExportBillLodgement_Form?.Usancefrom);
        }
        let CommercialNumberList: any = [];
        let FIRX_DATE_NO: any = {
          NUMBER: [],
          DATE: [],
          CURRENCY: [],
          AMOUNT: [],
          RECIVCED_AMOUNT: [],
          USED_AMOUNT: [],
          TOTAL_SB_NO: [],
          TOTAL_SB_AMOUNT: [],
          TOTAL_SB_CURRENCY: [],
          TOTAL_SB_PORT_CODE: [],
          TOTAL_SB_DATE: [],
          TOTAL_SB_COUNTRY_FINAL_DESTINATION: [],
          blcopydetails: []
        };
        let dataTable: any = []
        let SbdataTable: any = []
        if (this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.length != 0) {
          let hscodelist: any = [];
          this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(sbelement => {
            sbdata[sbelement]?.firxdetails?.forEach(element => {
              element?.FirxUsed_Balance?.split(',').forEach(FirxUsed_Balance => {
                FIRX_DATE_NO?.AMOUNT?.push(FirxUsed_Balance)
              });
            });
            FIRX_DATE_NO?.TOTAL_SB_NO?.push(sbdata[sbelement]?.sbno);
            FIRX_DATE_NO?.TOTAL_SB_AMOUNT?.push(sbdata[sbelement]?.fobValue);
            FIRX_DATE_NO?.TOTAL_SB_CURRENCY?.push(sbdata[sbelement]?.fobCurrency);
            FIRX_DATE_NO?.TOTAL_SB_PORT_CODE?.push(sbdata[sbelement]?.portCode);
            FIRX_DATE_NO?.TOTAL_SB_DATE?.push(sbdata[sbelement]?.sbdate);
            FIRX_DATE_NO?.TOTAL_SB_COUNTRY_FINAL_DESTINATION?.push(sbdata[sbelement]?.countryOfFinaldestination);
            FIRX_DATE_NO?.blcopydetails?.push(sbdata[sbelement]['blcopydetails'][0]?.airwayBlCopyNumber);
            hscodelist.push(sbdata[sbelement]?.pipo[0]?.HSCODE)
            SbdataTable.push([sbdata[sbelement]?.sbdate, sbdata[sbelement]?.sbno, sbdata[sbelement]?.fobValue])
          });

          let TOTAL_SUM_FIREX: any = FIRX_DATE_NO?.AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
          let TOTAL_SB_SUM: any = FIRX_DATE_NO?.TOTAL_SB_AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
          this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(sbelement => {
            sbdata[sbelement]?.COMMERICAIL_DATA?.forEach(element => {
              CommercialNumberList.push(element?.commercialNumber)
              element?.MatchOffData?.forEach(IRM_REF_Element => {
                FIRX_DATE_NO?.NUMBER?.push(IRM_REF_Element?.billNo)
                FIRX_DATE_NO?.DATE?.push(IRM_REF_Element?.date)
                FIRX_DATE_NO?.CURRENCY?.push(IRM_REF_Element?.currency)
                FIRX_DATE_NO?.RECIVCED_AMOUNT?.push(IRM_REF_Element?.amount)
                FIRX_DATE_NO?.USED_AMOUNT?.push(IRM_REF_Element?.InputValue)
                dataTable.push([IRM_REF_Element?.date, IRM_REF_Element?.billNo, IRM_REF_Element?.amount,
                IRM_REF_Element?.InputValue, element?.commercialNumber, element?.sbNo])
              });
            });
          });

          getAllFields[24]?.setText(CommercialNumberList?.join(","));
          getAllFields[25]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
          getAllFields[26]?.uncheck()
          getAllFields[27]?.uncheck()
          getAllFields[28]?.setText("As per Annexure Attached");
          getAllFields[29]?.setText("As per Annexure Attached");
          getAllFields[30]?.setText("As per Annexure Attached");

          getAllFields[39]?.setText('');

          getAllFields[31]?.setText("As per Annexure Attached");
          getAllFields[32]?.setText("As per Annexure Attached");
          getAllFields[33]?.setText("As per Annexure Attached");
          getAllFields[34]?.setText("As per Annexure Attached");

          getAllFields[40]?.setText("As per Shiiping bill Attached");
          getAllFields[41]?.setText('');
          getAllFields[42]?.setText("Refer Shipping Bill attached");
          getAllFields[43]?.setText("As per Annexure Attached");
          getAllFields[44]?.setText("As per Annexure Attached");
          getAllFields[45]?.setText("As per Annexure Attached");
          getAllFields[46]?.setText("As per Annexure Attached");
          getAllFields[47]?.setText('');
          getAllFields[48]?.setText('');
          getAllFields[49]?.setText('');
          getAllFields[50]?.setText('');
          getAllFields[51]?.setText('');
          getAllFields[52]?.setText('');
          getAllFields[53]?.setText('');
          getAllFields[54]?.setText('');
          getAllFields[55]?.setText('');
          getAllFields[56]?.setText('');
          getAllFields[57]?.setText('');
          getAllFields[58]?.setText('');
          getAllFields[59]?.setText('');
          getAllFields[60]?.setText('');
          getAllFields[61]?.setText('');
          getAllFields[62]?.setText('');
          getAllFields[63]?.setText('');
          getAllFields[64]?.setText('');

          // // OD/CC/CA
          getAllFields[65]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[0]);
          getAllFields[66]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[1]);
          getAllFields[67]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[2]);
          getAllFields[68]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[3]);
          getAllFields[69]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[4]);
          getAllFields[70]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[5]);
          getAllFields[71]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[6]);
          getAllFields[72]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[7]);
          getAllFields[73]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[8]);
          getAllFields[74]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[9]);
          getAllFields[75]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[10]);
          getAllFields[76]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[11]);
          getAllFields[77]?.setText(this.SELECT_BUYER_DETAILS?.accNumber?.split('')[12]);

          getAllFields[78]?.setText('');
          getAllFields[79]?.uncheck();
          getAllFields[80]?.uncheck();
          getAllFields[81]?.uncheck();
          getAllFields[82]?.uncheck();
          getAllFields[83]?.uncheck();
          getAllFields[84]?.setText("");
          getAllFields[85]?.uncheck();
          getAllFields[86]?.uncheck();
          getAllFields[87]?.uncheck();
          getAllFields[88]?.setText(this.getCurrentDate().toString());
          getAllFields[89]?.uncheck();
          getAllFields[90]?.uncheck();
          getAllFields[91]?.uncheck();
          getAllFields[92]?.uncheck();
          getAllFields[93]?.uncheck();
          getAllFields[94]?.uncheck();
          getAllFields[95]?.setText(this.getCurrentDate().toString());
          getAllFields[96]?.setText('');
          getAllFields[97]?.setText('');
          getAllFields[98]?.setText('');
          getAllFields[99]?.setText('');
          getAllFields[100]?.setText('');
          // if (FIRX_DATE_NO?.DATE[0] != undefined) {
          //   getAllFields[101]?.setText(FIRX_DATE_NO?.DATE[0]);
          //   getAllFields[102]?.setText(FIRX_DATE_NO?.NUMBER[0]);
          //   getAllFields[103]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[0]?.toString());
          //   getAllFields[104]?.setText(FIRX_DATE_NO?.USED_AMOUNT[0]?.toString());
          // }
          // if (FIRX_DATE_NO?.DATE[1] != undefined) {
          //   getAllFields[105]?.setText(FIRX_DATE_NO?.DATE[1]);
          //   getAllFields[106]?.setText(FIRX_DATE_NO?.NUMBER[1]);
          //   getAllFields[107]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[1]?.toString());
          //   getAllFields[108]?.setText(FIRX_DATE_NO?.USED_AMOUNT[1]?.toString());
          // }
          // if (FIRX_DATE_NO?.DATE[2] != undefined) {
          //   getAllFields[109]?.setText(FIRX_DATE_NO?.DATE[2]);
          //   getAllFields[110]?.setText(FIRX_DATE_NO?.NUMBER[2]);
          //   getAllFields[111]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[2]?.toString());
          //   getAllFields[112]?.setText(FIRX_DATE_NO?.USED_AMOUNT[2]?.toString());
          // }
          getAllFields[113]?.setText('');
        }
        await pdfDoc.save();

        const doc = new jsPDF()
        let SBtext = "ANNEXURE – SHIPPING BILL RECEIVED";
        var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        doc.text(SBtext, pageWidth / 2, 20, { align: 'center' });

        autoTable(doc, {
          margin: { top: 30, left: 10, bottom: 30 },
          head: [['SB Date', 'SB No.', 'SB Amount']],
          body: SbdataTable,
        })
        let SBtableuri = doc.output("arraybuffer");
        console.log(SBtableuri, "SBtableuri")
        const SBloadmergedPdf = await PDFDocument.load(SBtableuri);
        const doc1 = new jsPDF()
        let text = "ANNEXURE – REMITTANCE RECEIVED";
        var pageWidth = doc1.internal.pageSize.width || doc1.internal.pageSize.getWidth();
        doc1.text(text, pageWidth / 2, 20, { align: 'center' });

        autoTable(doc1, {
          margin: { top: 30, left: 10, bottom: 30 },
          head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
          body: dataTable,
        })
        let tableuri = doc1.output("arraybuffer");
        console.log(tableuri, "tableuri")
        const loadmergedPdf = await PDFDocument.load(tableuri);

        const mergedPdf = await PDFDocument.create();
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page, index) => {
          if ((index + 1) != copiedPages?.length) {
            mergedPdf.addPage(page);
          }
        });

        const copiedPages2 = await mergedPdf.copyPages(SBloadmergedPdf, SBloadmergedPdf.getPageIndices());
        copiedPages2.forEach((page) => {
          mergedPdf.addPage(page);
        });

        if (this.exportbilllodgementdata.IS_AGAINST_ADVANCE_YES_NO == true) {
          const copiedPages3 = await mergedPdf.copyPages(loadmergedPdf, loadmergedPdf.getPageIndices());
          copiedPages3.forEach((page) => {
            mergedPdf.addPage(page);
          });
        }

        const mergedPdfFile = await mergedPdf.save();
        const mergedPdfload = await PDFDocument.load(mergedPdfFile);
        const mergedPdfFileload = await mergedPdfload.save();
        var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
        const x1 = 'data:application/pdf;base64,' + base64String1;
        this.PREVIWES_URL = ''
        this.exportbilllodgementdata.PREVIWES_URL = '';
        setTimeout(async () => {
          this.PREVIWES_URL = x1;
          this.exportbilllodgementdata.PREVIWES_URL = x1;
          this.VISIBLITY_PDF = true;
          console.log(x1, "ANNEXURE_REMITTANCE_RECEIVED")
          await resolve(x1)
        }, 200);
      }
    })
  }

  async SendApproval(Status: string, UniqueId: any, event: any) {
    var UpdatedUrl: any = [];
    if (UniqueId != null) {
      var approval_data: any = {};
      delete this.USER_DATA?.members_list
      delete this.USER_DATA?.LoginToken
      let mergePdf_List: any = [];
      if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
        for (let index = 0; index < this.alldocuments.length; index++) {
          const element = this.alldocuments[index];
          mergePdf_List.push(element)
        }
      } else {
        for (let index = 0; index < this.exportbilllodgementdata.SELECTED_SHIPPING_BILL?.FORM_URL_LIST.length; index++) {
          const element = this.exportbilllodgementdata.SELECTED_SHIPPING_BILL?.FORM_URL_LIST[index];
          mergePdf_List.push(element)
        }
      }
      let extradata2: any = [];
      if (this.ExportBillLodgement_Form?.SingleMultiple?.bool == true) {
        this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS?.forEach(element => {
          this.exportbilllodgementdata.SELECTED_SHIPPING_BILL_TRANSACTION[element]?.COMMERICAIL_DATA?.forEach(commercialelement => {
            extradata2.push(commercialelement?._id)
          });
        });
      } else {
        this.SELECTED_SB_DATA?.COMMERICAIL_DATA?.forEach(commercialelement => {
          extradata2.push(commercialelement?._id)
        });
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
      } else {
        approval_data = {
          id: 'EDD' + '_' + this.randomId(5),
          tableName: 'Export-Direct-Dispatch',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: mergePdf_List,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
          commercialRef: extradata2
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
              if (this.ExportBillLodgement_Form['AgainstAdvanceReceipt']?.bool == true) {
                var data: any = {
                  data: this.ExportBillLodgement_Form,
                  TypeTransaction: 'Export-Direct-Dispatch',
                  fileType: 'Export',
                  UserDetails: approval_data?.id,
                  pipo: pipo_id,
                  commercialRef: extradata2
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
                    fileType: 'Export',
                    UserDetails: approval_data?.id,
                    pipo: pipo_id
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
                      TypeTransaction: 'Export-Direct-Dispatch',
                      fileType: 'Export',
                      UserDetails: approval_data?.id,
                      pipo: pipo_id
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