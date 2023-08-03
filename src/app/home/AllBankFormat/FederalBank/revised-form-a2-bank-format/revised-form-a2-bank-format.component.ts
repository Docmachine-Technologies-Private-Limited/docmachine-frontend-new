import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PDFDocument, rgb } from 'pdf-lib';
import $ from 'jquery'
declare var kendo: any;

@Component({
  selector: 'federal-bank-revised-form-a2-bank-format',
  templateUrl: './revised-form-a2-bank-format.component.html',
  styleUrls: ['./revised-form-a2-bank-format.component.scss']
})
export class FederalBankRevisedFormA2BANKFormatComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.fillForm(this.data)
  }

  async fillForm(filldata: any) {
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Revised_Form_A2_BLANK.pdf'
        console.log(filldata, 'filldata')
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form: any = pdfDoc.getForm()
        console.log(form?.getFields(), 'form')
        const getAllFields = form?.getFields();
        if (filldata != undefined && filldata != null && filldata != '') {
          getAllFields[0]?.setText('Helllo Abhishek');
          getAllFields[1]?.setText('Helllo Abhishek');
          getAllFields[2]?.setText('Helllo Abhishek');
          getAllFields[3]?.setText('Helllo Abhishek');
          getAllFields[4]?.setText('Helllo Abhishek');
          getAllFields[5]?.setText('Helllo Abhishek');
          getAllFields[6]?.setText('Helllo Abhishek');
          getAllFields[7]?.setText('Helllo Abhishek');
          getAllFields[8]?.setText('Helllo Abhishek');
          getAllFields[9]?.setText('Helllo Abhishek');
          getAllFields[10]?.setText('Helllo Abhishek');
          getAllFields[11]?.check()
          getAllFields[12]?.check()
          getAllFields[13]?.setText('Helllo Abhishek');
          getAllFields[14]?.setText('Helllo Abhishek');
          getAllFields[15]?.check();
          getAllFields[16]?.check();
          getAllFields[17]?.setText('Helllo Abhishek');
          getAllFields[18]?.setText(filldata[2]?.benneName + '\n' + filldata[2]?.beneAdrs);
          getAllFields[19]?.setText(filldata[2]?.beneBankName + '\n' + filldata[2]?.beneBankAdress);
          getAllFields[20]?.setText('Helllo Abhishek');
          getAllFields[21]?.setText(filldata[2]?.beneBankName + '\n' + filldata[2]?.iban);
          getAllFields[22]?.setText('Helllo Abhishek');
          getAllFields[23]?.setText('Helllo Abhishek');
          getAllFields[24]?.setText('Helllo Abhishek');
          getAllFields[25]?.setText('Helllo Abhishek');
          getAllFields[26]?.check();
          getAllFields[27]?.check();
          getAllFields[28]?.setText('Helllo Abhishek');
          getAllFields[29]?.setText('Helllo Abhishek');
          getAllFields[30]?.setText('Helllo Abhishek');
          getAllFields[31]?.setText('Helllo Abhishek');
          getAllFields[32]?.setText('Helllo Abhishek');
          getAllFields[33]?.setText('Helllo Abhishek');
          getAllFields[34]?.setText('Helllo Abhishek');
          getAllFields[35]?.setText('Helllo Abhishek');
          getAllFields[36]?.setText('Helllo Abhishek');
          getAllFields[37]?.setText('Helllo Abhishek');
          getAllFields[38]?.setText('Helllo Abhishek');
          getAllFields[39]?.setText('Helllo Abhishek');
          getAllFields[40]?.setText('Helllo Abhishek');
          getAllFields[41]?.setText('Helllo Abhishek');
          getAllFields[42]?.setText('Helllo Abhishek');
          getAllFields[43]?.setText('Helllo Abhishek');
          getAllFields[44]?.setText('Helllo Abhishek');
          getAllFields[45]?.setText('Helllo Abhishek');
          getAllFields[46]?.setText('Helllo Abhishek');
          getAllFields[47]?.setText('Helllo Abhishek');
          getAllFields[48]?.setText('Helllo Abhishek');
          getAllFields[49]?.setText('Helllo Abhishek');
          getAllFields[50]?.setText('Helllo Abhishek');
          getAllFields[51]?.setText('Helllo Abhishek');
          getAllFields[52]?.setText('Helllo Abhishek');
          getAllFields[53]?.setText('Helllo Abhishek');
          getAllFields[54]?.setText('Helllo Abhishek');
          getAllFields[55]?.setText('Helllo Abhishek');
          getAllFields[56]?.setText('Helllo Abhishek');
          getAllFields[57]?.setText('Helllo Abhishek');
          getAllFields[58]?.setText('Helllo Abhishek');
          getAllFields[59]?.setText('Helllo Abhishek');
          getAllFields[60]?.setText('Helllo Abhishek');
          getAllFields[61]?.setText('Helllo Abhishek');
          getAllFields[62]?.setText('Helllo Abhishek');
          getAllFields[63]?.setText('Helllo Abhishek');
          getAllFields[64]?.setText('Helllo Abhishek');
          getAllFields[65]?.setText('Helllo Abhishek');
          getAllFields[67]?.setText('Helllo Abhishek');
          getAllFields[68]?.setText('Helllo Abhishek');
          getAllFields[69]?.setText('Helllo Abhishek');
          getAllFields[70]?.setText('Helllo Abhishek');
          getAllFields[71]?.setText('Helllo Abhishek');
          getAllFields[72]?.setText('Helllo Abhishek');
          getAllFields[73]?.setText('Helllo Abhishek');
          getAllFields[74]?.setText('Helllo Abhishek');
          getAllFields[75]?.setText('Helllo Abhishek');
          getAllFields[76]?.setText('Helllo Abhishek');
          getAllFields[77]?.setText('Helllo Abhishek');
          getAllFields[78]?.setText('Helllo Abhishek');
          getAllFields[79]?.setText('Helllo Abhishek');
          getAllFields[80]?.setText('Helllo Abhishek');
          getAllFields[81]?.setText('Helllo Abhishek');
          getAllFields[82]?.setText('Helllo Abhishek');
          getAllFields[83]?.setText('Helllo Abhishek');
          getAllFields[84]?.setText('Helllo Abhishek');
          getAllFields[85]?.setText('Helllo Abhishek');
          getAllFields[86]?.setText('Helllo Abhishek');
          getAllFields[87]?.check();
          getAllFields[88]?.check()
          getAllFields[89]?.check();
          getAllFields[90]?.check();
          getAllFields[91]?.check();
          getAllFields[92]?.check();
          getAllFields[93]?.setText('Helllo Abhishek');
          getAllFields[94]?.setText('Helllo Abhishek');
          getAllFields[95]?.setText('Helllo Abhishek');
          getAllFields[96]?.setText('Helllo Abhishek');
        }
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
        this.PREVIWES_URL = ''
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
              console.log(pdfdata, 'sdfsfsdfdsfdffsd')
              this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: pdfdata });
            });
          });
        }, 200);
      }
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
    setTimeout(() => {
      this.BankId = changes?.data?.currentValue[0]?.BankUniqueId
      this.fillForm(this.data);
    }, 200);
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }
}
