import { Injectable } from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { UserService } from "../service/user.service";

@Injectable({
  providedIn: 'root'
})
export class MergePdfListService {

  constructor(private userService: UserService) { }
  
  mergeAllPDF = async (doc: any) => {
   return new Promise(async (resolve, reject) => {
    const pdfDoc = await PDFDocument.create();
    // this.userService.mergeListPdf(doc).subscribe((result:any) =>console.log(result,'mergeListPdf'))
    Promise.all(this.DOC_QUEUE(doc)).then((values:any) => {
      console.log(values);
      var appendAllFiles = async (pdflist, currentfile) => {
        if (currentfile < values.length) {
          await appendEachFile(pdflist[currentfile]);
          console.log('Inside file', currentfile);
          await appendAllFiles(pdflist, currentfile + 1);
        } else {
          const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
          var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
          var merge = 'data:application/pdf;base64,' + data_pdf 
          resolve(merge)
        }
      };
      var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
        if (currentpage < docLength) {
          console.log('Inside Page', currentpage, 'total pages', docLength);
          const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
          pdfDoc.addPage(donorPage);
          await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
        }
      };
      var appendEachFile = async (bytes) => {
        const donorPdfDoc = await PDFDocument.load(bytes);
        const docLength = donorPdfDoc.getPageCount();
        console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
        await appendEachPage(donorPdfDoc, 0, docLength);
      };
      // download all the pdfs
      let downloadAllFiles =async () => {
        var promises:any = [];
        for (var i = 0; i < values.length; i++) {
          if (values[i]!='' && values[i]!=undefined) {
          await promises.push(values[i]);
          }
        }
        Promise.all(promises).then(async (pdfList) => {
        await appendAllFiles(pdfList, 0);
          console.log('pdfList2', pdfList);
        });
      };
      downloadAllFiles();
    });
   });
  }
  mergeallpdf = async (editabledpdf,doc: any) => {
    return new Promise(async (resolve, reject) => {
     const pdfDoc = await PDFDocument.create();
     Promise.all(this.DOC_QUEUE(doc)).then((values:any) => {
       console.log(values);
       var appendAllFiles = async (pdflist, currentfile) => {
         if (currentfile < values.length) {
           await appendEachFile(pdflist[currentfile]);
           console.log('Inside file', currentfile);
           await appendAllFiles(pdflist, currentfile + 1);
         } else {
           const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
           var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
           var merge = 'data:application/pdf;base64,' + data_pdf 
           resolve(merge)
         }
       };
       var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
         if (currentpage < docLength) {
           console.log('Inside Page', currentpage, 'total pages', docLength);
           const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
           pdfDoc.addPage(donorPage);
           await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
         }
       };
       var appendEachFile = async (bytes) => {
         const donorPdfDoc = await PDFDocument.load(bytes);
         const docLength = donorPdfDoc.getPageCount();
         console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
         await appendEachPage(donorPdfDoc, 0, docLength);
       };
       // download all the pdfs
       let downloadAllFiles =async () => {
         var promises:any = [];
         for (var i = 0; i < values.length; i++) {
           if (values[i]!='' && values[i]!=undefined) {
           await promises.push(values[i]);
           }
         }
         Promise.all(promises).then(async (pdfList) => {
         await appendAllFiles(pdfList, 0);
           console.log('pdfList2', pdfList);
         });
       };
       downloadAllFiles();
     });
    });
   }
  DOC_QUEUE(doc:any){
    var temp:any=[];
    for (let index = 0; index < doc.length; index++) {
    if (doc[index]!=undefined && doc[index]!=null) {
      temp.push(this.promise_q(doc[index]))
    }
    }
    return temp;
  }
  promise_q(data:any){
    return new Promise(async (resolve,reject)=>{
      await this.userService.mergePdf(data).subscribe((res: any) => {
        resolve(res.arrayBuffer());
      },(err) => reject('Failed to fetch the pdf'));
    })
   }
  downloadAsSingleFile = async (filename, pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    var merge = 'data:application/pdf;base64,' + data_pdf //this.value
    this.blobToSaveAs(filename, merge)
  };

  blobToSaveAs(fileName: string, exportText: any) {
    try {
      const linkSource = exportText;
      const downloadLink = document.createElement("a");
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }
  _multiple_merge_pdf(doclist:any){
    return new Promise(async (resolve, reject) => {
    console.log(doclist,'_multiple_merge_pdf')
      this.userService.MultipleMergePdf(doclist).subscribe((res)=>{resolve(res)},error=>reject(error))
    })
  }
}
