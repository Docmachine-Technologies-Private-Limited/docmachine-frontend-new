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
        const getAllFields = form?.getFields();
        console.log(form, getAllFields, 'formlist');
        // textField.enableReadOnly();

        if (filldata != undefined && filldata != null && filldata != '') {
          getAllFields.forEach(element => {
            const elementvalue: any = element?.acroField?.dict?.values();
            if (elementvalue[0]?.encodedName == '/Tx') {
              element?.setFontSize(11);
              element?.enableReadOnly();
              const [widget]: any = element?.acroField?.getWidgets();
              widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
              // element?.enableCombing(); // trying to restore combing
            }
          });
          
          getAllFields[0]?.setText('');
          getAllFields[1]?.setText('');
          getAllFields[2]?.setText('');
          getAllFields[3]?.setText('');
          getAllFields[4]?.setText('');
          getAllFields[5]?.setText('');
          getAllFields[6]?.setText('');
          getAllFields[7]?.setText('');
          getAllFields[8]?.setText(filldata[5][0]?.teamName);
          getAllFields[9]?.setText(filldata[7]?.BRANCH_NAME);
       
          let remitancedata:any={
           Currency: filldata[1][0]?.currency,
           CurrencyAmount:[],
           ExchangeRate:[],
           INREquivalentAmount:[]
          }
          filldata[7]?.pipoTerm?.forEach(element => {
            remitancedata?.CurrencyAmount.push(element?.remittanceAmount);
          });
          getAllFields[10]?.setText(remitancedata?.Currency);
          getAllFields[11]?.setText(remitancedata?.CurrencyAmount?.join(','));
          getAllFields[12]?.setText('');
          getAllFields[13]?.setText('');
          getAllFields[14]?.setText(filldata[5][0]?.teamName+'\n'+filldata[5][0]?.adress);
          
          let splitcustomerid:any=filldata[7]?.CustomerID?.split('')
          getAllFields[15]?.setText(splitcustomerid[0]);
          getAllFields[16]?.setText(splitcustomerid[1]);
          getAllFields[17]?.setText(splitcustomerid[2]);
          getAllFields[18]?.setText(splitcustomerid[3]);
          getAllFields[19]?.setText(splitcustomerid[4]);
          getAllFields[20]?.setText(splitcustomerid[5]);
          getAllFields[21]?.setText(splitcustomerid[6]);
          getAllFields[22]?.setText(splitcustomerid[7]);
          getAllFields[23]?.setText(splitcustomerid[8]);
          getAllFields[24]?.setText(splitcustomerid[9]);
          
          let splitPANNo:any=filldata[7]?.PANNo?.split('')
          getAllFields[25]?.setText(splitPANNo[0]);
          getAllFields[26]?.setText(splitPANNo[1]);
          getAllFields[27]?.setText(splitPANNo[2]);
          getAllFields[28]?.setText(splitPANNo[3]);
          getAllFields[29]?.setText(splitPANNo[4]);
          getAllFields[30]?.setText(splitPANNo[5]);
          getAllFields[31]?.setText(splitPANNo[6]);
          getAllFields[32]?.setText(splitPANNo[7]);
          getAllFields[33]?.setText(splitPANNo[8]);
          getAllFields[34]?.setText(splitPANNo[9]);
          
          getAllFields[35]?.uncheck();
          getAllFields[36]?.uncheck();
          getAllFields[37]?.uncheck();
          getAllFields[38]?.uncheck();
          getAllFields[39]?.uncheck();
          
          let splitDebitAccount:any=filldata[0]?.accNumber?.split('');
          if (splitDebitAccount!=undefined) {
            getAllFields[40]?.setText(splitDebitAccount[0]);
            getAllFields[41]?.setText(splitDebitAccount[1]);
            getAllFields[42]?.setText(splitDebitAccount[2]);
            getAllFields[43]?.setText(splitDebitAccount[3]);
            getAllFields[44]?.setText(splitDebitAccount[4]);
            getAllFields[45]?.setText(splitDebitAccount[5]);
            getAllFields[46]?.setText(splitDebitAccount[6]);
            getAllFields[47]?.setText(splitDebitAccount[7]);
            getAllFields[48]?.setText(splitDebitAccount[8]);
            getAllFields[49]?.setText(splitDebitAccount[9]);
            getAllFields[50]?.setText(splitDebitAccount[10]);
            getAllFields[51]?.setText(splitDebitAccount[11]);
            getAllFields[52]?.setText(splitDebitAccount[12]);
            getAllFields[53]?.setText(splitDebitAccount[13]);   
          }
                   
          let splitDebitChargesAccount:any=filldata[4]?.accNumber?.split('')
          if (splitDebitChargesAccount!=undefined) {
            getAllFields[54]?.setText(splitDebitChargesAccount[0]);
            getAllFields[55]?.setText(splitDebitChargesAccount[1]);
            getAllFields[56]?.setText(splitDebitChargesAccount[2]);
            getAllFields[57]?.setText(splitDebitChargesAccount[3]);
            getAllFields[58]?.setText(splitDebitChargesAccount[4]);
            getAllFields[59]?.setText(splitDebitChargesAccount[5]);
            getAllFields[60]?.setText(splitDebitChargesAccount[6]);
            getAllFields[61]?.setText(splitDebitChargesAccount[7]);
            getAllFields[62]?.setText(splitDebitChargesAccount[8]);
            getAllFields[63]?.setText(splitDebitChargesAccount[9]);
            getAllFields[64]?.setText(splitDebitChargesAccount[10]);
            getAllFields[65]?.setText(splitDebitChargesAccount[11]);
            getAllFields[66]?.setText(splitDebitChargesAccount[12]);
            getAllFields[67]?.setText(splitDebitChargesAccount[13]);   
          }
                   
          getAllFields[68]?.setText('');
          getAllFields[69]?.setText('');
                    
          getAllFields[70]?.setText(filldata[2]?.benneName);
          getAllFields[71]?.setText(filldata[2]?.beneAdrs);
          getAllFields[72]?.setText(filldata[2]?.beneAccNo+'\n'+filldata[2]?.iban);
          getAllFields[73]?.setText(filldata[2]?.beneBankName+''+filldata[2]?.beneBankAdress);
          
          let spliSwiftCode:any=filldata[2]?.beneBankSwiftCode?.split('');
          if (spliSwiftCode!=undefined) {
            getAllFields[74]?.setText(spliSwiftCode[0]);
            getAllFields[75]?.setText(spliSwiftCode[1]);
            getAllFields[76]?.setText(spliSwiftCode[2]);
            getAllFields[77]?.setText(spliSwiftCode[3]);
            getAllFields[78]?.setText(spliSwiftCode[4]);
            getAllFields[79]?.setText(spliSwiftCode[5]);
            getAllFields[80]?.setText(spliSwiftCode[6]);
            getAllFields[81]?.setText(spliSwiftCode[7]);
            getAllFields[82]?.setText(spliSwiftCode[8]);
            getAllFields[83]?.setText(spliSwiftCode[9]);
            getAllFields[84]?.setText(spliSwiftCode[10]); 
          }        
          getAllFields[85]?.setText(filldata[2]?.sortCode);
          getAllFields[86]?.setText(filldata[2]?.interBankName);
          
          let spliIntermediarySwiftCode:any=filldata[2]?.interBankSwiftCode?.split('')
          if (spliIntermediarySwiftCode!=undefined) {
            getAllFields[87]?.setText(spliIntermediarySwiftCode[0]);
            getAllFields[88]?.setText(spliIntermediarySwiftCode[1]);
            getAllFields[89]?.setText(spliIntermediarySwiftCode[2]);
            getAllFields[90]?.setText(spliIntermediarySwiftCode[3]);
            getAllFields[91]?.setText(spliIntermediarySwiftCode[4]);
            getAllFields[92]?.setText(spliIntermediarySwiftCode[5]);
            getAllFields[93]?.setText(spliIntermediarySwiftCode[6]);
            getAllFields[94]?.setText(spliIntermediarySwiftCode[7]);
            getAllFields[95]?.setText(spliIntermediarySwiftCode[8]);
            getAllFields[96]?.setText(spliIntermediarySwiftCode[9]);
            getAllFields[97]?.setText(spliIntermediarySwiftCode[10]);
          }
          let purppose:any={Code:[],Description:[]}
          filldata[8]?.forEach(element => {
            purppose?.Code?.push(element?.RBI_Purpose_Code?.join(','))
            purppose?.Description?.push(element?.Purpose?.join(','))
          });
          getAllFields[98]?.uncheck();
          getAllFields[99]?.uncheck();
          getAllFields[103]?.setText('');
          getAllFields[104]?.setText('');
          getAllFields[105]?.setText('');
          getAllFields[106]?.setText(purppose?.Code?.join(','));
          getAllFields[107]?.setText(purppose?.Description?.join(','));
          getAllFields[108]?.setText('');
         
          getAllFields[109]?.setText('');
          getAllFields[110]?.setText('');
          getAllFields[111]?.setText('');
          getAllFields[112]?.setText('');
          getAllFields[113]?.setText('');
          getAllFields[114]?.setText('');
          getAllFields[115]?.setText('');
          getAllFields[116]?.setText('');
          getAllFields[117]?.setText('');
          getAllFields[118]?.setText();
          getAllFields[119]?.setText('');
          getAllFields[120]?.setText('');
          getAllFields[121]?.setText('');
          getAllFields[122]?.setText('');
          getAllFields[123]?.setText('');
          getAllFields[124]?.setText('');
          getAllFields[125]?.setText('');
          getAllFields[126]?.setText('');
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
