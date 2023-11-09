import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument } from 'pdf-lib';
import { UserService } from '../../../../../../service/user.service';
import { DocumentService } from '../../../../../../service/document.service';
import { DateFormatService } from '../../../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from '../../../../Export/new-export-bill-lodgement/export-bill-lodgemet-data';
import { AprrovalPendingRejectTransactionsService } from '../../../../../../service/aprroval-pending-reject-transactions.service';
import { StorageEncryptionDecryptionService } from '../../../../../../Storage/storage-encryption-decryption.service';
import { MergePdfListService } from '../../../../../merge-pdf-list.service';
import moment from 'moment';

@Component({
  selector: 'app-new-advance-import-payments',
  templateUrl: './new-advance-import-payments.component.html',
  styleUrls: ['./new-advance-import-payments.component.scss', '../../../../commoncss/common.component.scss']
})
export class NewAdvanceImportPaymentsComponent implements OnInit {
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

      this.validator.PIPO_LIST = [];
      setTimeout(() => {
        this.validator.buildForm({
          BenneName: {
            type: "benne",
            value: "",
            label: "Select Beneficiary",
            rules: {
              required: true,
            }
          },
        }, 'Invoice_IMPORT_TRANSACTION');
      }, 200);
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.validator.buildForm({
        BankDebit: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          Banklabel: "To Debit Account no. & Account Type*",
          TypeOfCurrency: "INR",
          Banklabel2: "To Debit Charges Account no. & Account Type*",
          fieldName2: "BankCharges",
          rules: {
            required: true,
          }
        },
        BankCharges: {
          type: "xyzzzz",
          value: "",
          label: "",
          rules: {
            required: true,
          }
        },
        forwardCall: {
          type: "button",
          value: "",
          text: "Select FWC",
          rules: {
            required: false,
          }
        },
        paymentTerm: {
          type: "formGroup",
          label: "",
          GroupLabel: ['PI/PO 1'],
          AddNewRequried: false,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "PIPO_LIST",
                value: this.validator.PIPO_LIST[0],
                label: "Select",
                name: 'PIPO_LIST',
                rules: {
                  required: true,
                },
                Inputdisabled: true,
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item.form['value'][item?.fieldName][item?.OptionfieldIndex]["RemittanceAmount"] = (currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["RemittanceAmount"]?.setValue(currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, "callback")
                },
              },
              {
                type: "text",
                value: this.validator.PIPO_LIST[0]?.paymentTerm[0]?.BalanceAmount,
                label: "Available Amount",
                name: 'amount',
                rules: {
                  required: true,
                },
                disabled: true,
              },
              {
                type: "currency",
                value: this.validator.PIPO_LIST[0]?.currency,
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "TextValiadtion",
                value: this.validator.PIPO_LIST[0]?.paymentTerm[0]?.BalanceAmount,
                label: "Remittance amount",
                name: 'RemittanceAmount',
                EqualName: "amount",
                rules: {
                  required: true,
                },
                errormsg: 'Remittance amount should be lesser than  or equal to the available amount.',
              },
            ]
          ]
        },
      }, 'IMPORT_TRANSACTION');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  ToForwardContract_Selected: any = []
  ToHSCode_Selected: any = [];
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
    } else {
      this.ToForwardContract_Selected[0] = '';
    }
  }

  ALL_DATA_HSCODE_FORWARD: any = {};
  DoneButton() {
    let temp2: any = [];
    this.ToHSCode_Selected.forEach(element => {
      temp2.push(element?.hscode);
    });
    this.ALL_DATA_HSCODE_FORWARD = {
      HS_CODE: temp2?.join(','),
      FORWARD_CONTRACT: this.ToForwardContract_Selected
    };
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
    console.log(url,"sadsdasdasdsdas")
  }

  setSelectedBankDetails(bank: any) {
    this.BankId = bank?.BankUniqueId;
    this.SELECT_BUYER_DETAILS = bank;
    console.log(bank, "setSelectedBankDetails")
    this.fillForm(null);
  }

  BENEFICIARY_DETAILS: any = [];
  PIPO_LIST: any = [];
  BENEFICIARY_CALLBACK(value: any) {
    this.BENEFICIARY_DETAILS = this.validator.BENEFICIARY_DETAILS_LIST.filter((item: any) => item?._id == value?.id);
    this.documentService.filterAnyTable({
      benneName: value?.value,
      "paymentTerm": { $elemMatch: { type: { value:  "Advance Payment" } } }
    }, 'pi_po').subscribe((res: any) => {
      res?.data.forEach(element => {
        element['ischecked'] = false;
        element['isDisabled'] = false;
        let filterDirectImports=element?.paymentTerm?.filter((item:any)=>item?.type?.value==="Advance Payment")
        filterDirectImports.forEach((paymentTermelement:any) => {
          paymentTermelement['BalanceAmount'] = paymentTermelement?.BalanceAmount != '-1' && paymentTermelement?.BalanceAmount != undefined ? paymentTermelement['BalanceAmount'] : paymentTermelement?.amount
          if (paymentTermelement['BalanceAmount'] == '0' && paymentTermelement['BalanceAmount'] == 0) {
            element['isDisabled'] = true;
            element['ischecked'] = true;
          }
        });
        element["paymentTerm"]=filterDirectImports;
      });

      this.PIPO_LIST = res?.data
      console.log(value, res, this.BENEFICIARY_DETAILS, "BENEFICIARY_CALLBACK")
    });
  }

  PIPO_LIST_CHECKED(value: any, index: any) {
    this.validator.PIPO_LIST = [value]
    this.validator.BOE_LIST = value?.boeRef
    this.documentService.filterAnyTable({
      Currency: value?.currency,
    }, 'ForwardContract').subscribe((res: any) => {
      this.ForwardContractDATA = res?.data;
      console.log(res, 'ForwardContractDATA')
    });
    this.response(null);
    this.PIPO_LIST.forEach((element, i) => {
      if (i != index) {
        element['ischecked'] = false;
      } else {
        element['ischecked'] = true;
      }
    });
  }

  getORMRef(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.billNo)
    });
    return advicelist?.join(',')
  }

  SELECTED_PIPO_ORM_DETAILS: any = [];
  PIPO_CALLBACK(value: any, panel: any) {
    this.SELECTED_PIPO_ORM_DETAILS = value;
    this.validator.BOE_LIST = value?.boeRef
    panel?.displayShow
  }
  formvalue: any = [];

  SubmitButton(formvalue: any) {
    this.FormValue(formvalue);
    this.formvalue = formvalue?.value
    console.log(formvalue, "SubmitButton")
  }

  async fillForm(filldata: any) {
    console.log(filldata, "sdfsdfsdfdsfd")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Remittance_Advance_Against_Imports_Edit.pdf'
        console.log(filldata, 'filldata')
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form: any = pdfDoc.getForm()
        const getAllFields = form?.getFields();
        getAllFields?.forEach(element => {
          const elementvalue: any = element?.acroField?.dict?.values();
          if (elementvalue[0]?.encodedName == '/Tx') {
            element?.setFontSize(11);
            element?.enableReadOnly();
            const [widget]: any = element?.acroField?.getWidgets();
            widget?.getOrCreateBorderStyle()?.setWidth(0);
          }
        });
        getAllFields[17]?.setText(this.validator.COMPANY_INFO[0]?.teamName + '\n' + this.validator.COMPANY_INFO[0]?.adress);
        getAllFields[18]?.setText(this.BENEFICIARY_DETAILS[0]?.benneName + '\n' + this.BENEFICIARY_DETAILS[0]?.beneAdrs);
        getAllFields[19]?.setText(this.BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + this.BENEFICIARY_DETAILS[0]?.beneBankAdress);
        getAllFields[20]?.setText('');
        getAllFields[21]?.setText(this.BENEFICIARY_DETAILS[0]?.beneAccNo + '\n' + this.BENEFICIARY_DETAILS[0]?.iban);
        getAllFields[22]?.setText(this.BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);
        getAllFields[23]?.setText(this.BENEFICIARY_DETAILS[0]?.sortCode);
        getAllFields[24]?.setText('');
        getAllFields[25]?.setText(this.BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);

        if (filldata != undefined && filldata != null && filldata != '') {
          getAllFields[0]?.setText('');
          getAllFields[1]?.setText('');
          getAllFields[2]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + filldata?.paymentTerm[0]?.RemittanceAmount);

          var today: any = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0');
          var yyyy = today.getFullYear();
          today = yyyy + "-" + mm + "-" + dd;
          today = today?.split("-")
          getAllFields[3]?.setText(today[2]?.split('')[0]);
          getAllFields[4]?.setText(today[2]?.split('')[1]);
          getAllFields[5]?.setText(today[1]?.split('')[0]);
          getAllFields[6]?.setText(today[1]?.split('')[1]);
          getAllFields[7]?.setText(today[0]?.split('')[2]);
          getAllFields[8]?.setText(today[0]?.split('')[3]);

          getAllFields[9]?.setText(filldata?.paymentTerm[0]?.RemittanceAmount != undefined ? filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount) : '-');
          getAllFields[10]?.setText('');
          getAllFields[11]?.uncheck()
          getAllFields[12]?.uncheck()
          getAllFields[13]?.setText('-');
          getAllFields[14]?.setText('-');
          getAllFields[15]?.uncheck();
          getAllFields[16]?.uncheck();

          getAllFields[26]?.uncheck();
          getAllFields[27]?.uncheck();
          getAllFields[28]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.commodity?.join(','));
          getAllFields[29]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.HSCODE);

          getAllFields[30]?.setText(filldata?.BankDebit?.accNumber?.split('')[0]);
          getAllFields[31]?.setText(filldata?.BankDebit?.accNumber?.split('')[1]);
          getAllFields[32]?.setText(filldata?.BankDebit?.accNumber?.split('')[2]);
          getAllFields[33]?.setText(filldata?.BankDebit?.accNumber?.split('')[3]);
          getAllFields[34]?.setText(filldata?.BankDebit?.accNumber?.split('')[4]);
          getAllFields[35]?.setText(filldata?.BankDebit?.accNumber?.split('')[5]);
          getAllFields[36]?.setText(filldata?.BankDebit?.accNumber?.split('')[6]);
          getAllFields[37]?.setText(filldata?.BankDebit?.accNumber?.split('')[7]);
          getAllFields[38]?.setText(filldata?.BankDebit?.accNumber?.split('')[8]);
          getAllFields[39]?.setText(filldata?.BankDebit?.accNumber?.split('')[9]);
          getAllFields[40]?.setText(filldata?.BankDebit?.accNumber?.split('')[10]);
          getAllFields[41]?.setText(filldata?.BankDebit?.accNumber?.split('')[11]);
          getAllFields[42]?.setText(filldata?.BankDebit?.accNumber?.split('')[12]);
          getAllFields[43]?.setText(filldata?.BankDebit?.accNumber?.split('')[13]);

          getAllFields[44]?.setText(filldata?.BankCharges?.accNumber?.split('')[0]);
          getAllFields[45]?.setText(filldata?.BankCharges?.accNumber?.split('')[1]);
          getAllFields[46]?.setText(filldata?.BankCharges?.accNumber?.split('')[2]);
          getAllFields[47]?.setText(filldata?.BankCharges?.accNumber?.split('')[3]);
          getAllFields[48]?.setText(filldata?.BankCharges?.accNumber?.split('')[4]);
          getAllFields[49]?.setText(filldata?.BankCharges?.accNumber?.split('')[5]);
          getAllFields[50]?.setText(filldata?.BankCharges?.accNumber?.split('')[6]);
          getAllFields[51]?.setText(filldata?.BankCharges?.accNumber?.split('')[7]);
          getAllFields[52]?.setText(filldata?.BankCharges?.accNumber?.split('')[8]);
          getAllFields[53]?.setText(filldata?.BankCharges?.accNumber?.split('')[9]);
          getAllFields[54]?.setText(filldata?.BankCharges?.accNumber?.split('')[10]);
          getAllFields[55]?.setText(filldata?.BankCharges?.accNumber?.split('')[11]);
          getAllFields[56]?.setText(filldata?.BankCharges?.accNumber?.split('')[12]);
          getAllFields[57]?.setText(filldata?.BankCharges?.accNumber?.split('')[13]);

          if (this.ToForwardContract_Selected?.length != 0 && this.ToForwardContract_Selected != undefined) {
            let booking_date: any = this.ToForwardContract_Selected[0]?.BookingDate?.split('-');
            let due_date: any = this.ToForwardContract_Selected[0]?.ToDate?.split('-');
            getAllFields[58]?.setText(this.ToForwardContract_Selected[0]?.ForwardRefNo);

            if (booking_date != undefined) {
              getAllFields[59]?.setText(booking_date[2]?.split('')[0]);
              getAllFields[60]?.setText(booking_date[2]?.split('')[1]);
              getAllFields[61]?.setText(booking_date[1]?.split('')[0]);
              getAllFields[62]?.setText(booking_date[1]?.split('')[1]);
              getAllFields[63]?.setText(booking_date[0]?.split('')[0]);
              getAllFields[64]?.setText(booking_date[0]?.split('')[1]);
              getAllFields[65]?.setText(booking_date[0]?.split('')[2]);
              getAllFields[66]?.setText(booking_date[0]?.split('')[3]);
            }

            getAllFields[67]?.setText(this.ToForwardContract_Selected[0]?.BookingAmount);

            if (due_date != undefined) {
              getAllFields[68]?.setText(due_date[2]?.split('')[0]);
              getAllFields[69]?.setText(due_date[2]?.split('')[1]);
              getAllFields[70]?.setText(due_date[1]?.split('')[0]);
              getAllFields[71]?.setText(due_date[1]?.split('')[1]);
              getAllFields[72]?.setText(due_date[0]?.split('')[0]);
              getAllFields[73]?.setText(due_date[0]?.split('')[1]);
              getAllFields[74]?.setText(due_date[0]?.split('')[2]);
              getAllFields[75]?.setText(due_date[0]?.split('')[3]);
            }

            getAllFields[76]?.setText(this.ToForwardContract_Selected[0]?.UtilizedAmount);
            getAllFields[77]?.setText(this.ToForwardContract_Selected[0]?.NetRate);
          }
          getAllFields[80]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.HSCODE);
          getAllFields[81]?.setText('');
          getAllFields[82]?.setText('');
          getAllFields[83]?.setText('');
          getAllFields[84]?.setText('');
          getAllFields[85]?.setText(moment(new Date()).format('DD-MM-YYYY'));
          getAllFields[86]?.setText('');
          getAllFields[87]?.uncheck();
          getAllFields[88]?.uncheck()
          getAllFields[89]?.uncheck();
          getAllFields[90]?.uncheck();
          getAllFields[91]?.uncheck();
          getAllFields[92]?.uncheck();
          getAllFields[93]?.setText(moment(new Date()).format('DD-MM-YYYY'));
          getAllFields[94]?.setText('');
          getAllFields[95]?.setText('');
          getAllFields[96]?.setText('');
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
        this.PREVIWES_URL = ''
        setTimeout(() => {
          this.PREVIWES_URL = x1;
          this.VISIBLITY_PDF = true;
          setTimeout(() => {
            resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL })
            this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL });
          }, 200);
        }, 200);
      }
    })
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
    console.log(changes)
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
    return words_string?.toUpperCase();
  }

  TITLE_CHANGED: string = 'ADVANCE OUTWARD REMITTANCE'

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.PREVIWES_URL != '' ? this.PREVIWES_URL : this.exportbilllodgementdata.PREVIWES_URL,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse1: any) => {
        temp[1] = pdfresponse1?.url;
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.LETTER_HEAD_URL,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse2: any) => {
          temp[0] = pdfresponse2?.url;
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
  SELECTED_PIPO_URL_LIST: any = []
  SELECTED_PREVIEWS_URL: any = ''
  ForwardContractDATA: any = [];
  Send_for_Approval_button: boolean = false;
  async FormValue(fromValue: any) {
    console.log(fromValue?.value, "FormValue");
    if (fromValue?.status != "INVALID") {
      this.ExportBillLodgement_Form = fromValue?.value;
      this.PREVIEWS_URL_LIST = ''
      this.alldocuments = [];
      this.SELECTED_PIPO_URL_LIST = []
      this.Send_for_Approval_button = false;
      this.fillForm(fromValue?.value).then(async (res: any) => {
        await this.getS3Url().then(async (res: any) => {
          await res?.forEach(element => {
            this.alldocuments.push(element)
          });
          await this.OTHER_DOCUMENTS?.forEach(element => {
            this.alldocuments.push(element?.pdf)
          });
          this.ExportBillLodgement_Form?.paymentTerm?.forEach((paymentTermelement, index) => {
            this.SELECTED_PIPO_URL_LIST.push({ name: 'pipo-' + (index + 1), pdf: paymentTermelement?.PIPO_LIST?.doc })
            this.alldocuments.push(paymentTermelement?.PIPO_LIST?.doc);
          });
          var fitertemp: any = this.alldocuments.filter(n => n);
          this.SELECTED_PREVIEWS_URL = '';
          await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
            this.PREVIEWS_URL_LIST = merge?.pdfurl;
            this.SELECTED_PREVIEWS_URL = merge?.pdfurl
            this.Send_for_Approval_button = true;
            console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'FormValuePreviewSlideToggle')
          });
        });
      })
    }
  }

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
        const element = this.ExportBillLodgement_Form?.paymentTerm[index];
        pipo_id.push(element?.PIPO_LIST?._id)
        pipo_name.push(element?.PIPO_LIST?.pipo_no)
      }

      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'Advance-Outward-Remittance',
        deleteflag: '-1',
        userdetails: this.validator.userData,
        status: 'pending',
        documents: this.alldocuments,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.validator.userData?.sideMenu
      }
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id || res == undefined) {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.validator.userData['RoleCheckbox'], approval_data, () => {
            var data: any = {
              data: {
                formdata: this.ExportBillLodgement_Form,
                documents: this.alldocuments,
                pipo_1: pipo_id,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
                ALL_DATA_HSCODE_FORWARD: this.ALL_DATA_HSCODE_FORWARD
              },
              TypeTransaction: 'Advance-Outward-Remittance',
              fileType: this.validator.userData?.sideMenu,
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
                console.log(data, this.ExportBillLodgement_Form?.paymentTerm);

                for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
                  const element: any = this.ExportBillLodgement_Form?.paymentTerm[index];
                  const sum = parseFloat(element?.PIPO_LIST?.paymentTerm[0].BalanceAmount) - parseFloat(element?.RemittanceAmount);
                  element.PIPO_LIST.paymentTerm[0].BalanceAmount = sum;
                  this.documentService.AnyUpdateTable({
                    _id: element?.PIPO_LIST?._id,
                    "paymentTerm.type.value": "Advance Payment"
                  }, { "paymentTerm.$.BalanceAmount": sum }, 'pi_po').subscribe((res: any) => { })

                  this.userService.updatePipo({ balanceAmount: sum }, element?.PIPO_LIST?._id).subscribe((data) => {
                    console.log('king123');
                    console.log(data);
                    if ((index + 1) == this.ExportBillLodgement_Form?.paymentTerm.length) {
                      var updateapproval_data: any = {
                        RejectData: {
                          tableName: 'pi_po',
                          id: approval_data?.id,
                          TransactionId: res1._id,
                          data: this.ExportBillLodgement_Form,
                          pipo_id: pipo_id,
                          pipo_name: pipo_name
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                      });
                    }
                  }, (error) => {
                    console.log('error');
                  }
                  );
                }
              }, (error) => {
                console.log('error');
              });
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
    console.log(UniqueId, approval_data, this.ExportBillLodgement_Form, 'uiiiiiiiiiiiiii')
  }

  getStatusCheckerMaker(id: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }
}
