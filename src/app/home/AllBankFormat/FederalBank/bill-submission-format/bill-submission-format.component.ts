import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument, rgb } from 'pdf-lib';
import $ from 'jquery'
declare var kendo: any;

@Component({
  selector: 'federal-bank-bill-submission-format',
  templateUrl: './bill-submission-format.component.html',
  styleUrls: ['./bill-submission-format.component.scss']
})
export class FederalBankBillSubmissionFormatComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();
  TOTAL_SUM_FIREX: any = 0;
  TOTAL_SUM_FIREX_COMMISION: any = 0
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: []
  }
  TOTAL_PIPO_AMOUNT: any = 0;
  SB_NO: any = '';
  FILETR_AMOUNT: any = [];
  SELECT_BUYER_DETAILS: any = '';

  constructor() { }

  ngOnInit(): void {
    this.fillForm(this.data)
  }

  async fillForm(filldata: any) {
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
      }
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form: any = pdfDoc.getForm()
      console.log(form?.getFields(), 'form')
      const getAllFields = form?.getFields();
      getAllFields.forEach(element => {
        const elementvalue: any = element?.acroField?.dict?.values();
        if (elementvalue[0]?.encodedName == '/Tx') {
          element?.setFontSize(11);
          element?.enableReadOnly();
          const [widget] :any = element?.acroField?.getWidgets();
          widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
          element?.enableCombing(); // trying to restore combing
        }
      });
      
      getAllFields[0]?.setText('');
      getAllFields[1]?.setText('');
      getAllFields[2]?.setText('');
      getAllFields[3]?.setText('');
      getAllFields[4]?.setText('');
      getAllFields[5]?.setText(filldata[3]?.teamName);
      getAllFields[6]?.setText(filldata[3]?.adress);
      getAllFields[7]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[9]?.setText('');
      getAllFields[10]?.setText('');
      getAllFields[11]?.setText('');
      getAllFields[12]?.setText(this.SELECT_BUYER_DETAILS?.buyerName);
      getAllFields[13]?.setText(this.SELECT_BUYER_DETAILS?.buyerAdrs);
      getAllFields[14]?.setText('');
      getAllFields[15]?.setText('');
      getAllFields[16]?.setText('');
      getAllFields[17]?.setText('');
      getAllFields[18]?.setText('');
      getAllFields[19]?.check()
      getAllFields[20]?.check()
      getAllFields[21]?.setText(filldata[2][0]?.bank);
      getAllFields[22]?.setText(filldata[2][0]?.bicAddress);
      getAllFields[23]?.setText(filldata[0][0] != undefined ? filldata[0][0]['commercialdetails'][0]?.commercialNumber : '');
      getAllFields[24]?.check()
      getAllFields[25]?.check()
      getAllFields[26]?.setText(this.SELECT_BUYER_DETAILS?.buyerbank + '' + this.SELECT_BUYER_DETAILS?.buyerbankaddress);
      getAllFields[29]?.setText(this.FIRX_DATE_NO?.NUMBER.join(','));
      getAllFields[30]?.setText(this.FIRX_DATE_NO?.DATE.join(','));
      getAllFields[31]?.setText(this.CURRENCY);
      getAllFields[32]?.setText(!isNaN(this.TOTAL_SUM_FIREX) ? this.TOTAL_SUM_FIREX.toString() : '0');
      getAllFields[33]?.setText(filldata[0][0]?.invoices[0]?.currency);
      getAllFields[34]?.setText(filldata[0][0]?.invoices[0]?.amount);
      if (filldata[0][0]?.balanceAvai!=undefined) {
        if (filldata[0][0]?.balanceAvai> (this.TOTAL_SUM_FIREX+this.TOTAL_SUM_FIREX_COMMISION)) {
          getAllFields[35]?.check();
          getAllFields[36]?.uncheck();
          getAllFields[27]?.check()
          getAllFields[28]?.uncheck()
        } else {
          getAllFields[36]?.check();
          getAllFields[35]?.uncheck();
          getAllFields[27]?.uncheck()
          getAllFields[28]?.check()
        }
      }
      getAllFields[37]?.setText(filldata[0][0]?.invoices[0]?.amount != undefined ? this.ConvertNumberToWords(filldata[0][0]?.invoices[0]?.amount) : '0');
      getAllFields[38]?.setText('');
      getAllFields[39]?.setText('');
      getAllFields[40]?.setText('');
      getAllFields[41]?.setText('');
      getAllFields[42]?.setText('');
      getAllFields[43]?.setText(filldata[0][0]?.countryOfFinaldestination);
      getAllFields[44]?.setText(filldata[0][0] != undefined ? filldata[0][0]['blcopydetails'][0]?.airwayBlCopyNumber : '');
      getAllFields[45]?.setText(this.SB_NO?.toString());
      getAllFields[46]?.setText(filldata[0][0]?.portCode);
      getAllFields[47]?.setText(filldata[0][0]?.sbdate);

      getAllFields[48]?.setText('');
      getAllFields[49]?.setText('');
      getAllFields[50]?.setText('');
      getAllFields[51]?.setText('');
      getAllFields[52]?.setText('');
      getAllFields[53]?.setText('');
      getAllFields[54]?.setText('');
      getAllFields[55]?.setText('');
      
      //  OD/CC/CA
      getAllFields[67]?.setText(filldata[2][0]?.accNumber?.split('')[0]);
      getAllFields[68]?.setText(filldata[2][0]?.accNumber?.split('')[1]);
      getAllFields[69]?.setText(filldata[2][0]?.accNumber?.split('')[2]);
      getAllFields[70]?.setText(filldata[2][0]?.accNumber?.split('')[3]);
      getAllFields[71]?.setText(filldata[2][0]?.accNumber?.split('')[4]);
      getAllFields[72]?.setText(filldata[2][0]?.accNumber?.split('')[5]);
      getAllFields[73]?.setText(filldata[2][0]?.accNumber?.split('')[6]);
      getAllFields[74]?.setText(filldata[2][0]?.accNumber?.split('')[7]);
      getAllFields[75]?.setText(filldata[2][0]?.accNumber?.split('')[8]);
      getAllFields[76]?.setText(filldata[2][0]?.accNumber?.split('')[9]);
      getAllFields[78]?.setText(filldata[2][0]?.accNumber?.split('')[10]);
      getAllFields[79]?.setText(filldata[2][0]?.accNumber?.split('')[11]);
      getAllFields[80]?.setText(filldata[2][0]?.accNumber?.split('')[12]);
      // getAllFields[81]?.setText(filldata[2][0]?.accNumber?.split('')[13]);
      getAllFields[89]?.setText();
      // End 
      
      // getAllFields[90]?.setText(this.FIRX_DATE_NO?.NUMBER.join(','));
      // getAllFields[91]?.setText(this.TOTAL_SUM_FIREX.toString());
      // getAllFields[92]?.setText(this.SB_NO?.toString());
      // getAllFields[93]?.setText('');
      // getAllFields[94]?.setText('');
      // getAllFields[95]?.setText('');
      getAllFields[96]?.setText('');
      getAllFields[97]?.setText('');
      getAllFields[98]?.setText('');
      getAllFields[99]?.setText('');
      getAllFields[100]?.setText('');
      getAllFields[101]?.setText('');
      getAllFields[102]?.setText(this.FIRX_DATE_NO?.DATE.join(','));
      getAllFields[103]?.setText(this.FIRX_DATE_NO?.NUMBER?.join(','));
      getAllFields[104]?.setText(this.TOTAL_SUM_FIREX?.toString());
      getAllFields[105]?.setText(this.SB_NO?.toString());
      getAllFields[106]?.setText('');
      getAllFields[107]?.setText('');
      getAllFields[108]?.setText('');
      getAllFields[109]?.setText('');
      getAllFields[110]?.setText('');
      getAllFields[111]?.setText('');
      getAllFields[112]?.setText('');
      getAllFields[113]?.setText('');

      const pdfBytes = await pdfDoc.save()
      console.log(pdfDoc, "pdf")
      console.log(pdfBytes, "pdfBytes")
      var base64String = this._arrayBufferToBase64(pdfBytes)
      const x = 'data:application/pdf;base64,' + base64String;
      const url = window.URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
      console.log(url, 'dsjkfhsdkjfsdhfksfhsd')
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
      console.log(x1, 'ghjhgjgjhgjhgjhgjhgj')
      this.PREVIWES_URL = '';
      setTimeout(() => {
        this.PREVIWES_URL = x1;
        this.VISIBLITY_PDF = true;
        console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
        $(document).ready(() => {
          kendo.pdf.defineFont({
            "DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
            "DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
            "DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
            "DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
            "WebComponentsIcons": "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
          });
          kendo.drawing.drawDOM($("#federal-bank-letter-head"), {
            paperSize: "A4",
            margin: [-10, 0, 0, 0],
            scale: 0.7,
          }).then(function (group) {
            return kendo.drawing.exportPDF(group, {
              paperSize: "A4",
              margin: [-10, 0, 0, 0],
            });
          }).done(async (pdfdata) => {
            this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: pdfdata });
          });
        });
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

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue;
    console.log(changes, 'asdasdasdasdasdasds')
    this.BankId = changes?.data?.currentValue[2][0]?.BankUniqueId;
    this.SB_NO = changes?.data?.currentValue[5];
    this.FILETR_AMOUNT = this.data[0].filter((item: any) => item?.sbno?.includes(this.SB_NO))
    this.TOTAL_PIPO_AMOUNT = this.FILETR_AMOUNT[0]?.invoices[0]?.amount
    this.TOTAL_SUM_FIREX = this.data[1]['SB_' + this.SB_NO]?.reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.Used_Balance) }, 0);
    this.TOTAL_SUM_FIREX_COMMISION = this.data[1]['SB_' + this.SB_NO]?.reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.commision) }, 0);
    this.CURRENCY = this.FILETR_AMOUNT[0]?.currency;
    this.data[1]['SB_' + this.SB_NO]?.forEach(element => {
      this.FIRX_DATE_NO?.NUMBER?.push(element?.irDataItem?.billNo)
      this.FIRX_DATE_NO?.DATE?.push(element?.irDataItem?.date)
    });
    this.SELECT_BUYER_DETAILS = changes?.data?.currentValue[6]
    setTimeout(() => {
      this.fillForm(this.data);
    }, 200);
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

}
