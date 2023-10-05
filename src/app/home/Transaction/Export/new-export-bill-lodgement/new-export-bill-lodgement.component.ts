import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument } from 'pdf-lib';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from './export-bill-lodgemet-data';
import { AprrovalPendingRejectTransactionsService } from '../../../../service/aprroval-pending-reject-transactions.service';
import { StorageEncryptionDecryptionService } from '../../../../Storage/storage-encryption-decryption.service';
import { MergePdfListService } from '../../../merge-pdf-list.service';

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
  ExportBillLodgement_Form: any = [];
  GetDownloadStatus: any = [];

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
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.documentService.MT102_SUBJECT = this.sessionstorage.get('MT102') != '' ? JSON.parse(this.sessionstorage.get('MT102')) : '';
    console.log(this.exportbilllodgementdata, "exportbilllodgementdata")
    this.userService.getUserDetail().then((status: any) => {
      this.USER_DATA = status['result'];
      console.log(this.USER_DATA, this.USER_DATA?.sideMenu, 'USER_DETAILS');
    });
    this.response(null);
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  setSelectedBankDetails(bank: any) {
    this.BankId = bank?.BankUniqueId;
    this.SELECT_BUYER_DETAILS = bank;
    this.fillForm(null)
    console.log(bank, "setSelectedBankDetails")
  }

  async fillForm(filldata: any) {
    console.log(filldata, "fillForm")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
      }
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form: any = pdfDoc.getForm()
      const getAllFields = form?.getFields();
      getAllFields.forEach(element => {
        const elementvalue: any = element?.acroField?.dict?.values();
        if (elementvalue[0]?.encodedName == '/Tx') {
          element.setFontSize(8)
          element?.enableReadOnly();
          const [widget]: any = element?.acroField?.getWidgets();
          widget?.getOrCreateBorderStyle()?.setWidth(0);
        }
      });
      console.log(this.validator.COMPANY_INFO, "COMPANY_INFO")

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
      console.log(this.exportbilllodgementdata?.TRANSACTION_SELECTED_COMMERICAIL_DATA,
        this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL, "TRANSACTION_SELECTED_COMMERICAIL_DATA");

      let CommercialNumberList: any = [];
      let FIRX_DATE_NO: any = {
        NUMBER: [],
        DATE: [],
        CURRENCY: [],
        AMOUNT: [],
        RECIVCED_AMOUNT: []
      };
      this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.firxdetails?.forEach(element => {
        element?.FirxUsed_Balance?.split(',').forEach(FirxUsed_Balance => {
          FIRX_DATE_NO?.AMOUNT?.push(FirxUsed_Balance)
        });
      });
      let TOTAL_SUM_FIREX: any = FIRX_DATE_NO?.AMOUNT?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
      this.exportbilllodgementdata?.TRANSACTION_SELECTED_COMMERICAIL_DATA?.forEach(element => {
        CommercialNumberList.push(element?.commercialNumber)
        element?.IRM_REF?.forEach(IRM_REF_Element => {
          FIRX_DATE_NO?.NUMBER?.push(IRM_REF_Element?.billNo)
          FIRX_DATE_NO?.DATE?.push(IRM_REF_Element?.date)
          FIRX_DATE_NO?.CURRENCY?.push(IRM_REF_Element?.currency)
          FIRX_DATE_NO?.RECIVCED_AMOUNT?.push(IRM_REF_Element?.amount)
        });
      });
      getAllFields[24]?.setText(CommercialNumberList?.join(","));
      getAllFields[25]?.setText(this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbank + '' + this.exportbilllodgementdata?.SELECTED_BUYER_NAME?.buyerbankaddress);
      getAllFields[26]?.uncheck()
      getAllFields[27]?.uncheck()
      getAllFields[28]?.setText(FIRX_DATE_NO?.NUMBER.join(','));
      getAllFields[29]?.setText(FIRX_DATE_NO?.DATE.join(','));
      getAllFields[30]?.setText(FIRX_DATE_NO?.CURRENCY.join(','));

      getAllFields[35]?.uncheck();
      getAllFields[36]?.uncheck();
      getAllFields[37]?.setText('');
      getAllFields[38]?.setText('');
      getAllFields[39]?.setText('');

      if (filldata != null) {
        getAllFields[31]?.setText(!isNaN(TOTAL_SUM_FIREX) ? TOTAL_SUM_FIREX.toString() : '0');
        getAllFields[32]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.fobCurrency);
        getAllFields[33]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.fobValue != undefined ? this.ConvertNumberToWords(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.fobValue).toUpperCase() : '0');
        getAllFields[34]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.fobValue?.toString());

        getAllFields[40]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.pipo[0]?.HSCODE);
        getAllFields[41]?.setText('');
        getAllFields[42]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.countryOfFinaldestination);
        getAllFields[43]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL['blcopydetails'] != undefined ? this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL['blcopydetails'][0]?.airwayBlCopyNumber : '');
        getAllFields[44]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.sbno.toString());
        getAllFields[45]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.portCode);
        getAllFields[46]?.setText(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.sbdate);
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
        getAllFields[84]?.setText('');
        getAllFields[85]?.uncheck();
        getAllFields[86]?.uncheck();
        getAllFields[87]?.uncheck();
        getAllFields[88]?.setText('');
        getAllFields[89]?.uncheck();
        getAllFields[90]?.uncheck();
        getAllFields[91]?.uncheck();
        getAllFields[92]?.uncheck();
        getAllFields[93]?.uncheck();
        getAllFields[94]?.uncheck();
        getAllFields[95]?.setText('');
        getAllFields[96]?.setText('');
        getAllFields[97]?.setText('');
        getAllFields[98]?.setText('');
        getAllFields[99]?.setText('');
        getAllFields[100]?.setText('');
        if (FIRX_DATE_NO?.DATE[0] != undefined) {
          getAllFields[101]?.setText(FIRX_DATE_NO?.DATE[0]);
          getAllFields[102]?.setText(FIRX_DATE_NO?.NUMBER[0]);
          getAllFields[103]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[0]?.toString());
          getAllFields[104]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[0]?.toString());
        }
        if (FIRX_DATE_NO?.DATE[1] != undefined) {
          getAllFields[105]?.setText(FIRX_DATE_NO?.DATE[1]);
          getAllFields[106]?.setText(FIRX_DATE_NO?.NUMBER[1]);
          getAllFields[107]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[1]?.toString());
          getAllFields[108]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[1]?.toString());
        }
        if (FIRX_DATE_NO?.DATE[2] != undefined) {
          getAllFields[109]?.setText(FIRX_DATE_NO?.DATE[2]);
          getAllFields[110]?.setText(FIRX_DATE_NO?.NUMBER[2]);
          getAllFields[111]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[2]?.toString());
          getAllFields[112]?.setText(FIRX_DATE_NO?.RECIVCED_AMOUNT[2]?.toString());
        }
        getAllFields[113]?.setText('');
      }

      const pdfBytes = await pdfDoc.save()
      var base64String = this._arrayBufferToBase64(pdfBytes)
      const x = 'data:application/pdf;base64,' + base64String;

      const mergedPdf = await PDFDocument.create();
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
      const mergedPdfFile = await mergedPdf.save();
      const mergedPdfload = await PDFDocument.load(mergedPdfFile);
      const mergedPdfFileload = await mergedPdfload.save();
      var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
      const x1 = 'data:application/pdf;base64,' + base64String1;
      this.PREVIWES_URL = '';
      setTimeout(() => {
        this.PREVIWES_URL = x1;
        this.VISIBLITY_PDF = true;
      }, 200);
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

  HSCODE_LIST: any = [];
  ngOnChanges(changes: SimpleChanges): void {

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
          rules: {
            required: true,
          }
        },
        AgainstAdvanceReceipt: {
          type: "yesnocheckbox",
          value: '',
          label: "Against advance receipt?",
          rules: {
            required: true,
          },
          YesNo: '',
          HideShowInput: ["UnderLC", "DirectDispatch", "Sight", "Usance", "WithScrutiny"]
        },
        SHIPPING_BILL: {
          type: "PopupOpen",
          value: '',
          label: "Select PI/PO or shipping bill",
          rules: {
            required: true,
          },
          class: "PopupOpen",
          bindLabel: "value",
          item: [{ value: 'Shipping bill' }],
          id: "SHIPING_BILL_POPUP",
        },
        DirectDispatch: {
          type: "yesnocheckbox",
          value: '',
          label: "Direct Dispatch?",
          rules: {
            required: true,
          },
          YesNo: '',
          HideShowInput: ["AgainstAdvanceReceipt", "UnderLC", "Sight", "Usance", "WithScrutiny", "BuyerRemitterDifferent", "InvoiceReduction", "WithDiscount"]
        },
        UnderLC: {
          type: "yesnocheckbox",
          value: '',
          label: "Under LC?",
          rules: {
            required: true,
          },
          YesNo: '',
          HideShowInput: ["Sight", "Usance"]
        },
        Sight: {
          type: "yesnocheckbox",
          value: '',
          label: "Sight?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        Usance: {
          type: "yesnocheckbox",
          value: '',
          label: "Usance?",
          rules: {
            required: true,
          },
          YesNo: ''
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
        BuyerRemitterDifferent: {
          type: "yesnocheckbox",
          value: '',
          label: "Is Buyer remitter different?",
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
        WithDiscount: {
          type: "yesnocheckbox",
          value: '',
          label: "With Discount?",
          rules: {
            required: true,
          },
          YesNo: ''
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
        this.TITLE_CHANGED = "Export Bill Lodgement / Direct Dispatch"
      } else {
        this.TITLE_CHANGED = 'Export Bill Lodgement'
      }
    } else if (value?.id == "AgainstAdvanceReceipt") {
      if (value?.bool == true) {
        this.TITLE_CHANGED = "Export Bill Lodgement / Regularization"
      } else {
        this.TITLE_CHANGED = 'Export Bill Lodgement'
      }
    }
    console.log(value, "YesNoCheckBox")
  }

  CreateTransaction(ShippingBill) {
    if (this.exportbilllodgementdata?.TRANSACTION_SELECTED_COMMERICAIL_DATA?.length != 0) {
      this.fillForm(this.exportbilllodgementdata?.TRANSACTION_SELECTED_COMMERICAIL_DATA);
      this.OTHER_DOCUMENTS[0] = {
        name: 'Shipping Bill',
        pdf: this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.doc
      }
      this.OTHER_DOCUMENTS[1] = {
        name: 'blCopy',
        pdf: this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.blCopyDoc
      }
      this.OTHER_DOCUMENTS[2] = {
        name: 'Commercial',
        pdf: this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.commercialDoc
      }
      ShippingBill?.displayHidden;
    } else {
      this.toastr.error("Please select atleast one commercial no.")
    }
  }
  PREVIEWS_URL_LIST: any = '';
  alldocuments: any = [];
  async FormValue(value: any, PrviewPage: any) {
    console.log(value, "FormValue");
    if (value != false) {
      this.ExportBillLodgement_Form = value;
      this.PREVIEWS_URL_LIST = ''
      this.alldocuments = [];
      await this.getS3Url().then(async (res: any) => {
        await res?.forEach(element => {
          this.alldocuments.push(element)
        });
        await this.OTHER_DOCUMENTS?.forEach(element => {
          this.alldocuments.push(element?.pdf)
        });
        var fitertemp: any = this.alldocuments.filter(n => n)
        await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
          this.PREVIEWS_URL_LIST = merge?.pdfurl;
          console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'PreviewSlideToggle')
          PrviewPage?.displayShow;
        });
      });

    }
  }
  async SendApproval(Status: string, UniqueId: any, event: any) {
    var UpdatedUrl: any = [];
    if (UniqueId != null) {
      var approval_data: any = {};
      delete this.USER_DATA?.members_list
      delete this.USER_DATA?.LoginToken
      if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
        approval_data = {
          id: 'IRDR' + '_' + this.randomId(5),
          tableName: 'Inward-Remitance-Dispoal-Realization',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: this.alldocuments,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu
        }
      } else {
        approval_data = {
          id: 'EDD' + '_' + this.randomId(5),
          tableName: 'Export-Direct-Dispatch',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: this.alldocuments,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu
        }
      }
      var pipo: any = this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.pipo;
      var pipo_id: any = [];
      var pipo_name: any = [];
      (pipo != 'NF' ? pipo : []).forEach(element => {
        pipo_id.push(element?._id)
        pipo_name.push(element?.pi_poNo)
      });
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id) {
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
              this.ExportBillLodgement_Form['SbRef']=(UniqueId);
              this.ExportBillLodgement_Form['documents']=(UpdatedUrl?.reverse());
              this.ExportBillLodgement_Form['Url_Redirect']=({ file: 'export', document: 'blCopyref', SbRef: UniqueId })
              this.ExportBillLodgement_Form['extradata']=(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL)
              if (this.ExportBillLodgement_Form['AgainstAdvanceReceipt']?.bool == true) {
                var data: any = {
                  data: this.ExportBillLodgement_Form.value,
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
                  if (this.documentService.MT102_SUBJECT?.file == '' || this.documentService.MT102_SUBJECT?.file == undefined) {
                    this.userService.updateManyPipo(pipo_id, 'export', '', updatedData).subscribe((data) => {
                      console.log(data);
                      let sumfixAmount: any = parseInt(this.FIRX_AMOUNT(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.firxdetails?.FirxUsed_Balance?.split(','))) + parseInt(this.FIRX_AMOUNT(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.firxdetails?.firxCommision?.split(',')))
                      var updateapproval_data: any = {
                        RejectData: {
                          tableName: 'masterrecord',
                          id: approval_data?.id,
                          TransactionId: res1._id,
                          data: {
                            SbRef: UniqueId,
                            Total_FIRX_Amount: sumfixAmount
                          },
                          pipo_id: pipo_id,
                          pipo_name: pipo_name
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                        event?.displayHidden;
                        this.toastr.success('Successfully added Transaction of SB No. :' + this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.sbno);
                      });
                    }, (error) => {
                      console.log('error');
                    }
                    );
                  }
                  console.log('addExportBillLodgment', res1);
                })
              } else {
                if (this.documentService.MT102_SUBJECT != '' && this.documentService.MT102_SUBJECT != null) {
                  var changevalue: any = this.documentService.MT102_SUBJECT;
                  changevalue['pipo'] = pipo_id;
                  changevalue['SbRef'] = [this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?._id];
                  changevalue['Url_Redirect'] = { file: 'export', document: 'blCopyref', SbRef: UniqueId, pipo: pipo_name.toString() };
                  var data: any = {
                    data: changevalue,
                    TypeTransaction: 'Inward-Remitance-Dispoal-Realization',
                    fileType: 'Export',
                    UserDetails: approval_data?.id,
                    pipo: pipo_id
                  }
                  this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                    this.router.navigate(['/home/dashboardTask']);
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
                        let sumfixAmount: any = parseInt(this.FIRX_AMOUNT(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.firxdetails?.FirxUsed_Balance?.split(','))) + parseInt(this.FIRX_AMOUNT(this.exportbilllodgementdata?.SELECTED_SHIPPING_BILL?.firxdetails?.firxCommision?.split(',')))
                        var updateapproval_data: any = {
                          RejectData: {
                            tableName: 'masterrecord',
                            id: approval_data?.id,
                            TransactionId: res1._id,
                            data: {
                              SbRef: UniqueId,
                              Total_FIRX_Amount: sumfixAmount
                            },
                            pipo_id: pipo_id,
                            pipo_name: pipo_name
                          }
                        }
                        this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                          this.router.navigate(['/home/dashboardTask'])
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
        fileName: this.guid() + '.pdf', buffer: this.PREVIWES_URL,
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
}