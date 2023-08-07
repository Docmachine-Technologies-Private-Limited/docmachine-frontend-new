import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PDFDocument} from 'pdf-lib';
import $ from 'jquery'
declare var kendo: any;

@Component({
  selector: 'federal-bank-direct-import-payment',
  templateUrl: './direct-import-payment.component.html',
  styleUrls: ['./direct-import-payment.component.scss']
})
export class FederalBankDirectImportPaymentComponent implements OnInit, OnChanges {
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
        formUrl = './../../assets/pdf/FedralBank/Direct_Import_Bills.pdf'
        console.log(filldata, 'filldata')
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form: any = pdfDoc.getForm()
        const getAllFields = form?.getFields();
        if (filldata != undefined && filldata != null && filldata != '') {
          getAllFields.forEach(element => {
            const elementvalue: any = element?.acroField?.dict?.values();
            if (elementvalue[0]?.encodedName == '/Tx') {
              element?.setFontSize(11);
              element?.enableReadOnly();
              const [widget]: any = element?.acroField?.getWidgets();
              widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
            }
          });
          getAllFields[0]?.setText('');
          getAllFields[1]?.setText('');
          getAllFields[2]?.setText(filldata[1][0]?.balanceAmount+' & '+filldata[1][0]?.currency);
          getAllFields[3]?.setText(filldata[1][0]?.balanceAmount?.toString());
          getAllFields[4]?.setText('');
          getAllFields[5]?.setText('');
          getAllFields[6]?.setText('');
          getAllFields[7]?.setText('');
          getAllFields[8]?.setText('');
          getAllFields[9]?.setText(filldata[1][0]?.balanceAmount!=undefined?this.ConvertNumberToWords(filldata[1][0]?.balanceAmount):'-');
          getAllFields[10]?.setText('');
          getAllFields[11]?.uncheck()
          getAllFields[12]?.uncheck()
          getAllFields[13]?.setText('-');
          getAllFields[14]?.setText('-');
          getAllFields[15]?.uncheck();
          getAllFields[16]?.uncheck();
          getAllFields[17]?.setText(filldata[5][0]?.teamName + '\n' + filldata[5][0]?.adress);
          getAllFields[18]?.setText(filldata[2]?.benneName + '\n' + filldata[2]?.beneAdrs);
          getAllFields[19]?.setText(filldata[2]?.beneBankName + '\n' + filldata[2]?.beneBankAdress);
          getAllFields[20]?.setText('');
          getAllFields[21]?.setText(filldata[2]?.beneAccNo + '\n' + filldata[2]?.iban);
          getAllFields[22]?.setText(filldata[2]?.beneBankSwiftCode);
          getAllFields[23]?.setText(filldata[2]?.sortCode);
          getAllFields[24]?.setText('');
          getAllFields[25]?.setText(filldata[2]?.beneBankSwiftCode);
          getAllFields[26]?.uncheck();
          getAllFields[27]?.uncheck();
          getAllFields[28]?.setText(filldata[1][0]?.commodity?.join(','));
          getAllFields[29]?.setText(filldata[6]?.HS_CODE);
          
          getAllFields[30]?.setText(filldata[0]?.accNumber?.split('')[0]);
          getAllFields[31]?.setText(filldata[0]?.accNumber?.split('')[1]);
          getAllFields[32]?.setText(filldata[0]?.accNumber?.split('')[2]);
          getAllFields[33]?.setText(filldata[0]?.accNumber?.split('')[3]);
          getAllFields[34]?.setText(filldata[0]?.accNumber?.split('')[4]);
          getAllFields[35]?.setText(filldata[0]?.accNumber?.split('')[5]);
          getAllFields[36]?.setText(filldata[0]?.accNumber?.split('')[6]);
          getAllFields[37]?.setText(filldata[0]?.accNumber?.split('')[7]);
          getAllFields[38]?.setText(filldata[0]?.accNumber?.split('')[8]);
          getAllFields[39]?.setText(filldata[0]?.accNumber?.split('')[9]);
          getAllFields[40]?.setText(filldata[0]?.accNumber?.split('')[10]);
          getAllFields[41]?.setText(filldata[0]?.accNumber?.split('')[11]);
          getAllFields[42]?.setText(filldata[0]?.accNumber?.split('')[12]);
          getAllFields[43]?.setText(filldata[0]?.accNumber?.split('')[13]);
          
          getAllFields[44]?.setText(filldata[4]?.accNumber?.split('')[0]);
          getAllFields[45]?.setText(filldata[4]?.accNumber?.split('')[1]);
          getAllFields[46]?.setText(filldata[4]?.accNumber?.split('')[2]);
          getAllFields[47]?.setText(filldata[4]?.accNumber?.split('')[3]);
          getAllFields[48]?.setText(filldata[4]?.accNumber?.split('')[4]);
          getAllFields[49]?.setText(filldata[4]?.accNumber?.split('')[5]);
          getAllFields[50]?.setText(filldata[4]?.accNumber?.split('')[6]);
          getAllFields[51]?.setText(filldata[4]?.accNumber?.split('')[7]);
          getAllFields[52]?.setText(filldata[4]?.accNumber?.split('')[8]);
          getAllFields[53]?.setText(filldata[4]?.accNumber?.split('')[9]);
          getAllFields[54]?.setText(filldata[4]?.accNumber?.split('')[10]);
          getAllFields[55]?.setText(filldata[4]?.accNumber?.split('')[11]);
          getAllFields[56]?.setText(filldata[4]?.accNumber?.split('')[12]);
          getAllFields[57]?.setText(filldata[4]?.accNumber?.split('')[13]);
          
          if (filldata[6]?.FORWARD_CONTRACT!=undefined) {
            let booking_date:any=filldata[6]?.FORWARD_CONTRACT[0]?.BookingDate?.split('-');
            let due_date:any=filldata[6]?.FORWARD_CONTRACT[0]?.ToDate?.split('-');
            getAllFields[58]?.setText(filldata[6]?.FORWARD_CONTRACT[0]?.ForwardRefNo);
            getAllFields[59]?.setText(booking_date[2]?.split('')[0]);
            getAllFields[60]?.setText(booking_date[2]?.split('')[1]);
            getAllFields[61]?.setText(booking_date[1]?.split('')[0]);
            getAllFields[62]?.setText(booking_date[1]?.split('')[1]);
            getAllFields[63]?.setText(booking_date[0]?.split('')[0]);
            getAllFields[64]?.setText(booking_date[0]?.split('')[1]);
            getAllFields[65]?.setText(booking_date[0]?.split('')[2]);
            getAllFields[66]?.setText(booking_date[0]?.split('')[3]);
            getAllFields[67]?.setText(filldata[6]?.FORWARD_CONTRACT[0]?.BookingAmount);
            
            getAllFields[68]?.setText(due_date[2]?.split('')[0]);
            getAllFields[69]?.setText(due_date[2]?.split('')[1]);
            getAllFields[70]?.setText(due_date[1]?.split('')[0]);
            getAllFields[71]?.setText(due_date[1]?.split('')[1]);
            getAllFields[72]?.setText(due_date[0]?.split('')[0]);
            getAllFields[73]?.setText(due_date[0]?.split('')[1]);
            getAllFields[74]?.setText(due_date[0]?.split('')[2]);
            getAllFields[75]?.setText(due_date[0]?.split('')[3]);
            
            getAllFields[76]?.setText(filldata[6]?.FORWARD_CONTRACT[0]?.UtilizedAmount);
            getAllFields[77]?.setText(filldata[6]?.FORWARD_CONTRACT[0]?.NetRate);
          }
          getAllFields[80]?.setText(filldata[6]?.HS_CODE);
          getAllFields[81]?.setText('');
          getAllFields[82]?.setText('');
          getAllFields[83]?.setText('');
          getAllFields[84]?.setText('');
          getAllFields[85]?.setText('');
          getAllFields[86]?.setText('');
          getAllFields[87]?.uncheck();
          getAllFields[88]?.uncheck()
          getAllFields[89]?.uncheck();
          getAllFields[90]?.uncheck();
          getAllFields[91]?.uncheck();
          getAllFields[92]?.uncheck();
          getAllFields[93]?.setText('');
          getAllFields[94]?.setText('');
          getAllFields[95]?.setText('');
          getAllFields[96]?.setText('');
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
          // this.modifyPdf();
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

  // async modifyPdf() {
  //   // Fetch an existing PDF document
  //   const url = './../../assets/pdf/FedralBank/Remittance_Advance_Against_Imports_Edit.pdf'
  //   const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
  //   const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  //   const pages = pdfDoc.getPages()
  //   const firstPage = pages[0]
  //   const {
  //     width,
  //     height
  //   } = firstPage.getSize()

  //   firstPage.drawText('Firmado por <?php echo $usuarionombre;?>, en fecha <?php echo $fechafirma;?>!', {
  //     x: 12,
  //     y: height / 2 - 300,
  //     size: 12,
  //     font: helveticaFont,
  //     color: rgb(0.95, 0.1, 0.1),
  //     rotate: degrees(90),
  //     //original ajustes.
  //     // x: 5,
  //     //y: height / 2 + 300,
  //     //size: 12,
  //     //font: helveticaFont,
  //     //color: rgb(0.95, 0.1, 0.1),
  //     //rotate: degrees(-90),
  //   })

  //   // Serialize the PDFDocument to bytes (a Uint8Array)
  //   const pdfBytes = await pdfDoc.save()
  //   var blob = new Blob([pdfBytes])
  //   var reader = new FileReader();
  //   reader.onload = function (event: any) {
  //     var base64: any = event.target.result
  //     var res = base64.replace("data:application/octet-stream;base64,", "");
  //     var sites = ['data:application/pdf;base64, ' + res]
  //     console.log(sites, 'asfsdfsdfsdf')
  //   };

  //   reader.readAsDataURL(blob);
  // }
  
  pipodata(){
    let data:any={
     Amount:[],
     Currency:[]
    };
    return data;
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