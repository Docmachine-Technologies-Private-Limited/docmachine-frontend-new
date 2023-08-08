import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument, rgb } from 'pdf-lib';

@Component({
  selector: 'hdfc-bank-inward-remittance-disposal-format',
  templateUrl: './export-inward-remittance-disposal-format.component.html',
  styleUrls: ['./export-inward-remittance-disposal-format.component.scss']
})
export class hdfcbankInwardRemittanceDisposalFormatComponent implements OnInit, OnChanges {
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
        formUrl = './../../assets/pdf/FedralBank/Inward_Remittance_disposal_format.pdf'
      }
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form: any = pdfDoc.getForm()
      console.log(form?.getFields(), 'form')
      const getAllFields = form?.getFields();
      getAllFields[0]?.setText('Helllo Abhishek');
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
        this.VISIBLITY_PDF=true;
        console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
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
    this.data = changes?.currentValue;
    console.log(changes, 'asdasdasdasdasdasds')
    this.fillForm(this.data);
  }
}
