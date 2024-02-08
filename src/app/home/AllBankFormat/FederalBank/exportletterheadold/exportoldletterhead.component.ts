import { EventEmitter, Injectable,  Output } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class ExportletterheadService {
  LETTER_HEAD_IMAGE: any = '';
  PREVIWES_URL: any = ''
  VISIBLITY_PDF: boolean = false;
  @Output('url') url = new EventEmitter();
  constructor(public validator: UploadServiceValidatorService) { }

  createLetterHead() {
    return {
      Federal:(validator: any, data,sbdata: any)=>{
        return new Promise((resolve, reject) => {
          const doc: any = new jsPDF()
          console.log(data,sbdata,"createLetterHead")
          this.addWaterMark(doc, validator.COMPANY_INFO[0]?.letterHead);
          var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
          var strArr1 = doc.splitTextToSize(`The Manager\n${data?.Bank?.bank}\n${data?.Bank?.bicAddress}`, 200)
          doc.text(strArr1, 10, 40, { align: 'left' });
          doc.text("Date : " + moment(new Date()).format('DD-MM-YYYY'), pageWidth - 75, 40, { align: 'left' });
          doc.text("Dear Sir/Madam,", 10, 70, { align: 'left' });
          doc.text("Sub: RE- Submission Export documents against remittance received ;", 10, 80, { align: 'left' });
          doc.text("Ref: Cash Credit account no: " + data?.Bank?.accNumber, 10, 87, { align: 'left' });
          var strArr2 = doc.splitTextToSize(`Inviting reference to your email dated ${moment(new Date()).format('DD-MM-YYYY')},we hereby submit the requisite documents for the following shipments received.Kindly issue the EBRC, which is currently showing pending in your records.`, 200)
          doc.text(strArr2, 10, 100, { align: 'left' });
          let dataTable: any = []
          if (sbdata != null) {
            sbdata?.COMMERICAIL_DATA?.forEach(element => {
              element?.MatchOffData?.forEach(IRM_REF_Element => {
                dataTable.push([IRM_REF_Element?.date, IRM_REF_Element?.billNo, IRM_REF_Element?.amount,
                IRM_REF_Element?.InputValue, element?.commercialNumber, element?.sbNo])
              });
            });
          }
          if (dataTable?.length<10) {
            autoTable(doc, {
              margin: { top: 120, left: 10, bottom: 30 },
              head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
              body: dataTable,
            })
            var strArr3 = doc.splitTextToSize(`Kindly have the same adjusted and close the pending EDPMS entries reflecting in our AD CODE.`, pageWidth - 10)
            doc.text(strArr3, 10, 190, { align: 'left' });
            var strArr4 = doc.splitTextToSize(`Thanking You,\n${validator.COMPANY_INFO[0]?.teamName}`, 200)
            doc.text(strArr4, 10, 210, { align: 'left' });
            doc.text("Authorized Signatory", 10, 250, { align: 'left' });
          }else{
             let splitdata:any=dataTable?.splice(1,10)
            autoTable(doc, {
              margin: { top: 120, left: 10, bottom: 30 },
              head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
              body: splitdata,
            })
            doc.addPage();
            autoTable(doc, {
              margin: { top: 10, left: 10, bottom: 30 },
              head: [['Date', 'FIRX No.', 'Amount received', 'SB Setoff Amount', 'CI No.', 'SB No.']],
              body: dataTable,
            })
            var strArr3 = doc.splitTextToSize(`Kindly have the same adjusted and close the pending EDPMS entries reflecting in our AD CODE.`, pageWidth - 10)
            doc.text(strArr3, 10, 190, { align: 'left' });
            var strArr4 = doc.splitTextToSize(`Thanking You,\n${validator.COMPANY_INFO[0]?.teamName}`, 200)
            doc.text(strArr4, 10, 210, { align: 'left' });
            doc.text("Authorized Signatory", 10, 250, { align: 'left' });
          }
         
          let tableuri = doc.output("arraybuffer");
          console.log('data:application/pdf;base64,' + tableuri, "tableuri")
          resolve('data:application/pdf;base64,' + this._arrayBufferToBase64(tableuri))
        })
      }
    }
 
  }

  addWaterMark(doc: any, letterHead: any) {
    var totalPages = doc.internal.getNumberOfPages();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var img1 = new Image();
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
  
}
