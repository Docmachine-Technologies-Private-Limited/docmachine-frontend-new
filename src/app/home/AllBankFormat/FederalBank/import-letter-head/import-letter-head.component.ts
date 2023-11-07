import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import $ from 'jquery'
declare var kendo: any;
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';

@Component({
  selector: 'federal-bank-import-letter-head',
  templateUrl: './import-letter-head.component.html',
  styleUrls: ['./import-letter-head.component.scss']
})
export class FederalBankImportLetterHeadComponent implements OnInit, OnChanges {
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
      this.createLetterHead(this.validator.COMPANY_INFO[0]?.letterHead).then((res: any) => {
        this.PREVIWES_URL = res;
        this.url.emit(this.PREVIWES_URL);
      })
    }, 200);
  }

  createLetterHead(letterHead: any) {
    return new Promise((resolve, reject) => {
      const doc: any = new jsPDF()
      this.addWaterMark(doc, letterHead).then((Res) => {
        var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        var strArr1 = doc.splitTextToSize(`The Manager\n${this.data[0]?.BankDebit?.bank}\n${this.data[0]?.BankDebit?.bicAddress}`, 200)
        doc.text(strArr1, 10, 40, { align: 'left' });
        doc.text("Date : " + moment(new Date()).format('DD-MM-YYYY'), pageWidth - 75, 40, { align: 'left' });
        doc.text("Dear Sir/Madam,", 10, 70, { align: 'left' });
        doc.text("Sub: Foreign Outward remittance of", 10, 80, { align: 'left' });
        doc.text("Ref Cash Credit A/c No. " + this.data[0]?.BankCharges?.accNumber, 10, 87, { align: 'left' });
        var strArr2 = doc.splitTextToSize(`We request you to please transfer to the beneficiary, details of which are mentioned below, towards payment of import of Raw material.`, 200)
        doc.text(strArr2, 10, 98, { align: 'left' });
        doc.text("DEBIT ACCOUNT:  " + this.data[0]?.BankDebit?.accNumber, 10, 115, { align: 'left' });
        doc.text("NAME OF BENEFICIARY:  " + this.data[1]?.benneName, 10, 130, { align: 'left' });
        doc.text("NAME OF BANK:  " + this.data[1]?.beneBankName, 10, 140, { align: 'left' });
        doc.text("BRANCH:  ", 10, 150, { align: 'left' });
        doc.text("IBAN NO:  " + this.data[1]?.iban, 10, 160, { align: 'left' });
        doc.text("SWIFT/BIC CODE:  " + this.data[1]?.beneBankSwiftCode, 10, 170, { align: 'left' });

        var strArr3 = doc.splitTextToSize(`The related invoice and forms are enclosed herewith. Request you to please process the wire transfer at the earliest and share the remittance advice once completed.`, pageWidth - 10)
        doc.text(strArr3, 10, 180, { align: 'left' });
        var strArr4 = doc.splitTextToSize(`Thanking You,\n${this.validator.COMPANY_INFO[0]?.teamName}\n${this.validator.COMPANY_INFO[0]?.adress}`, 200)
        doc.text(strArr4, 10, 210, { align: 'left' });
        doc.text("Authorized Signatory", 10, 250, { align: 'left' });

        let tableuri = doc.output("arraybuffer");
        console.log(tableuri, "tableuri")
        resolve('data:application/pdf;base64,' + this._arrayBufferToBase64(tableuri))
      })
    });
  }

  addWaterMark(doc: any, letterHead: any) {
    return new Promise((resolve, reject) => {
      var totalPages = doc.internal.getNumberOfPages();
      var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
      var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      if (letterHead != undefined) {
        var img1 = new Image();
        img1.setAttribute
        img1.src = letterHead;
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.addImage(img1, 'PNG', 0, 0, pageWidth, pageHeight);
        }
      }
      resolve(doc)
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

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue != undefined ? changes?.data?.currentValue : this.data;
    console.log(changes, 'asdasdasdasdasdasds');
  }
}
