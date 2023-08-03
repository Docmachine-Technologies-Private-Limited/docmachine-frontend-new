import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument, rgb } from 'pdf-lib';

@Component({
  selector: 'hdfc-bank-remittance-advance-against',
  templateUrl: './remittanceadvanceagainst.component.html',
  styleUrls: ['./remittanceadvanceagainst.component.scss']
})
export class hdfcbankREMITTANCEADVANCEAGAINSTComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fillForm(this.data)
  }

  async fillForm(filldata: any) {
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'H_B_L_7') {
        formUrl = './../../assets/pdf/FedralBank/Remittance_Advance_Against_Imports_Edit.pdf'
        console.log(filldata, 'filldata')
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes)
        const form: any = pdfDoc.getForm()
        console.log(form?.getFields(), 'form')
        const getAllFields = form?.getFields();
        // if (filldata != undefined && filldata != null && filldata != '') {
        //   getAllFields[0]?.setText('Helllo Abhishek');
        //   getAllFields[1]?.setText('Helllo Abhishek');
        //   getAllFields[2]?.setText('Helllo Abhishek');
        //   getAllFields[3]?.setText('Helllo Abhishek');
        //   getAllFields[4]?.setText('Helllo Abhishek');
        //   getAllFields[5]?.setText('Helllo Abhishek');
        //   getAllFields[6]?.setText('Helllo Abhishek');
        //   getAllFields[7]?.setText('Helllo Abhishek');
        //   getAllFields[8]?.setText('Helllo Abhishek');
        //   getAllFields[9]?.setText('Helllo Abhishek');
        //   getAllFields[10]?.setText('Helllo Abhishek');
        //   getAllFields[11]?.check()
        //   getAllFields[12]?.check()
        //   getAllFields[13]?.setText('Helllo Abhishek');
        //   getAllFields[14]?.setText('Helllo Abhishek');
        //   getAllFields[15]?.check();
        //   getAllFields[16]?.check();
        //   getAllFields[17]?.setText('Helllo Abhishek');
        //   getAllFields[18]?.setText(filldata[2]?.benneName + '\n' + filldata[2]?.beneAdrs);
        //   getAllFields[19]?.setText(filldata[2]?.beneBankName + '\n' + filldata[2]?.beneBankAdress);
        //   getAllFields[20]?.setText('Helllo Abhishek');
        //   getAllFields[21]?.setText(filldata[2]?.beneBankName + '\n' + filldata[2]?.iban);
        //   getAllFields[22]?.setText('Helllo Abhishek');
        //   getAllFields[23]?.setText('Helllo Abhishek');
        //   getAllFields[24]?.setText('Helllo Abhishek');
        //   getAllFields[25]?.setText('Helllo Abhishek');
        //   getAllFields[26]?.check();
        //   getAllFields[27]?.check();
        //   getAllFields[28]?.setText('Helllo Abhishek');
        //   getAllFields[29]?.setText('Helllo Abhishek');
        //   getAllFields[30]?.setText('Helllo Abhishek');
        //   getAllFields[31]?.setText('Helllo Abhishek');
        //   getAllFields[32]?.setText('Helllo Abhishek');
        //   getAllFields[33]?.setText('Helllo Abhishek');
        //   getAllFields[34]?.setText('Helllo Abhishek');
        //   getAllFields[35]?.setText('Helllo Abhishek');
        //   getAllFields[36]?.setText('Helllo Abhishek');
        //   getAllFields[37]?.setText('Helllo Abhishek');
        //   getAllFields[38]?.setText('Helllo Abhishek');
        //   getAllFields[39]?.setText('Helllo Abhishek');
        //   getAllFields[40]?.setText('Helllo Abhishek');
        //   getAllFields[41]?.setText('Helllo Abhishek');
        //   getAllFields[42]?.setText('Helllo Abhishek');
        //   getAllFields[43]?.setText('Helllo Abhishek');
        //   getAllFields[44]?.setText('Helllo Abhishek');
        //   getAllFields[45]?.setText('Helllo Abhishek');
        //   getAllFields[46]?.setText('Helllo Abhishek');
        //   getAllFields[47]?.setText('Helllo Abhishek');
        //   getAllFields[48]?.setText('Helllo Abhishek');
        //   getAllFields[49]?.setText('Helllo Abhishek');
        //   getAllFields[50]?.setText('Helllo Abhishek');
        //   getAllFields[51]?.setText('Helllo Abhishek');
        //   getAllFields[52]?.setText('Helllo Abhishek');
        //   getAllFields[53]?.setText('Helllo Abhishek');
        //   getAllFields[54]?.setText('Helllo Abhishek');
        //   getAllFields[55]?.setText('Helllo Abhishek');
        //   getAllFields[56]?.setText('Helllo Abhishek');
        //   getAllFields[57]?.setText('Helllo Abhishek');
        //   getAllFields[58]?.setText('Helllo Abhishek');
        //   getAllFields[59]?.setText('Helllo Abhishek');
        //   getAllFields[60]?.setText('Helllo Abhishek');
        //   getAllFields[61]?.setText('Helllo Abhishek');
        //   getAllFields[62]?.setText('Helllo Abhishek');
        //   getAllFields[63]?.setText('Helllo Abhishek');
        //   getAllFields[64]?.setText('Helllo Abhishek');
        //   getAllFields[65]?.setText('Helllo Abhishek');
        //   getAllFields[67]?.setText('Helllo Abhishek');
        //   getAllFields[68]?.setText('Helllo Abhishek');
        //   getAllFields[69]?.setText('Helllo Abhishek');
        //   getAllFields[70]?.setText('Helllo Abhishek');
        //   getAllFields[71]?.setText('Helllo Abhishek');
        //   getAllFields[72]?.setText('Helllo Abhishek');
        //   getAllFields[73]?.setText('Helllo Abhishek');
        //   getAllFields[74]?.setText('Helllo Abhishek');
        //   getAllFields[75]?.setText('Helllo Abhishek');
        //   getAllFields[76]?.setText('Helllo Abhishek');
        //   getAllFields[77]?.setText('Helllo Abhishek');
        //   getAllFields[78]?.setText('Helllo Abhishek');
        //   getAllFields[79]?.setText('Helllo Abhishek');
        //   getAllFields[80]?.setText('Helllo Abhishek');
        //   getAllFields[81]?.setText('Helllo Abhishek');
        //   getAllFields[82]?.setText('Helllo Abhishek');
        //   getAllFields[83]?.setText('Helllo Abhishek');
        //   getAllFields[84]?.setText('Helllo Abhishek');
        //   getAllFields[85]?.setText('Helllo Abhishek');
        //   getAllFields[86]?.setText('Helllo Abhishek');
        //   getAllFields[87]?.check();
        //   getAllFields[88]?.check()
        //   getAllFields[89]?.check();
        //   getAllFields[90]?.check();
        //   getAllFields[91]?.check();
        //   getAllFields[92]?.check();
        //   getAllFields[93]?.setText('Helllo Abhishek');
        //   getAllFields[94]?.setText('Helllo Abhishek');
        //   getAllFields[95]?.setText('Helllo Abhishek');
        //   getAllFields[96]?.setText('Helllo Abhishek');
        // }
        // const pdfBytes = await pdfDoc.save()
        // console.log(pdfDoc, "pdf")
        // console.log(pdfBytes, "pdfBytes")
        // var base64String = this._arrayBufferToBase64(pdfBytes)
        // const x = 'data:application/pdf;base64,' + base64String;
        // const url = window.URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
        // console.log(url, 'dsjkfhsdkjfsdhfksfhsd')
        // const mergedPdf = await PDFDocument.create();
        // const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        // copiedPages.forEach((page) => {
        //   mergedPdf.addPage(page);
        // });
        // const mergedPdfFile = await mergedPdf.save();
        // const mergedPdfload = await PDFDocument.load(mergedPdfFile);
        // const mergedPdfFileload = await mergedPdfload.save();
        // var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
        // const x1 = 'data:application/pdf;base64,' + base64String1;
        // console.log(x1, 'ghjhgjgjhgjhgjhgjhgj')
        this.PREVIWES_URL = ''
        setTimeout(() => {
          // this.PREVIWES_URL = x1;
          this.VISIBLITY_PDF = true;
          console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
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
    this.BankId = changes?.BankId?.currentValue
    console.log(changes, 'asdasdasdasdasdasds')
    setTimeout(() => {
      this.fillForm(this.data);
    }, 200);
  }
}
