import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';

@Component({
  selector: 'federal-bank-exportletterhead',
  templateUrl: './exportoldletterhead.component.html',
  styleUrls: ['./exportoldletterhead.component.scss']
})
export class OldFederalBankExportletterheadComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  LETTER_HEAD_IMAGE: any = '';
  PREVIWES_URL: any = ''
  VISIBLITY_PDF: boolean = false;
  @Output('url') url = new EventEmitter();
  constructor(public validator: UploadServiceValidatorService) { }
  
  ngOnInit(): void {
    this.PREVIWES_URL = ''
    this.VISIBLITY_PDF = false;
    setTimeout(() => {
      this.VISIBLITY_PDF = true;
      this.PREVIWES_URL = this.createLetterHead(this.validator.COMPANY_INFO[0]?.letterHead)
      this.url.emit(this.PREVIWES_URL);
    }, 200);
  }

  createLetterHead(letterHead: any) {
    const doc: any = new jsPDF()
    this.addWaterMark(doc, letterHead);
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var strArr1 = doc.splitTextToSize(`The Manager\n${this.data[2]?.bank}\n${this.data[2]?.bicAddress}`,200)
    doc.text(strArr1, 10, 40, { align: 'left' });
    doc.text("Date : "+moment(new Date()).format('DD-MM-YYYY'), pageWidth - 75, 40, { align: 'left' });
    doc.text("Dear Sir/Madam,", 10, 70, { align: 'left' });
    doc.text("Sub: RE- Submission Export documents against remittance received ;", 10, 80, { align: 'left' });
    doc.text("Ref: Cash Credit account no: "+this.data[2]?.accNumber, 10, 87, { align: 'left' });
    var strArr2 = doc.splitTextToSize(`Inviting reference to your email dated __________,we hereby submit the requisite documents for the following shipments received.Kindly issue the EBRC, which is currently showing pending in your records.`, 200)
    doc.text(strArr2, 10, 100, { align: 'left' });
    autoTable(doc, {
      margin: { top: 120, left: 10, bottom: 20 },
      head: [['SI No.', 'Date', 'Customer Name', 'CNY', 'Amount', 'Shipping Bill No.', 'Advance/Against Invoice', 'Reference No.']],
      body: [['', '', '', '', '', '']],
    })
    var strArr3 = doc.splitTextToSize(`Kindly have the same adjusted and close the pending EDPMS entries reflecting in our AD CODE.`, pageWidth-10)
    doc.text(strArr3, 10, 190, { align: 'left' });
    var strArr4 = doc.splitTextToSize(`Thanking You,\n${this.validator.COMPANY_INFO[0]?.teamName}\n${this.validator.COMPANY_INFO[0]?.adress}`, 200)
    doc.text(strArr4, 10, 210, { align: 'left' });
    doc.text("Authorized Signatory", 10, 250, { align: 'left' });

    let tableuri = doc.output("arraybuffer");
    console.log(tableuri, "tableuri")
    return 'data:application/pdf;base64,' + this._arrayBufferToBase64(tableuri)
  }

  addWaterMark(doc: any, letterHead: any) {
    var totalPages = doc.internal.getNumberOfPages();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var img1 = new Image();
    img1.setAttribute
    img1.src = letterHead;
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

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue;
    console.log(changes, 'asdasdasdasdasdasds');
  }
}
