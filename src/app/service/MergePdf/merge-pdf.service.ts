import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class MergePdfService {

  constructor( private userService: UserService) { }
  
 async mergePdf(data){
   return new Promise(async(resolve,reejct)=>{
    try {
      await this.getPdfArrayBuffer(data).then((res: any) => {
        this.mergeAllPDFs(res).then(async (pdfdata: any) => {
          const pdfDataUri = await pdfdata.saveAsBase64({ dataUri: true });
          var data_pdf = await pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
          var merge = 'data:application/pdf;base64,' + data_pdf
           resolve(merge);
        });
      });
    } catch (error) {
      reejct(error)
      console.log(error, 'errror')
    }
   })
   
  }
  async getPdfArrayBuffer(data) {
    var promises: any = [];
    return new Promise(async (resolve, reject) => {
      for (let j = 0; j < data?.length; j++) {
        this.userService.mergePdfPromise(data[j]).then(async (res: any) => {
          await res.arrayBuffer().then(async (res1: any) => {
            promises.push(res1);
            if ((j + 1) == data.length) {
              resolve(promises)
            }
          })
        })
      }
    });
  }
  mergeAllPDFs = async (doc: any) => {
    return new Promise(async (resolve, reject) => {
      let urls = doc;
      const numDocs = urls.length;
      const pdfDoc = await PDFDocument.create();
      var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
        if (currentpage < docLength) {
          const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
          pdfDoc.addPage(donorPage);
          await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
        }
      };
      var appendEachFile = async (bytes) => {
        const donorPdfDoc = await PDFDocument.load(bytes);
        const docLength = donorPdfDoc.getPageCount();
        await appendEachPage(donorPdfDoc, 0, docLength);
      };
      var appendAllFiles = async (pdflist, currentfile) => {
        if (currentfile < numDocs) {
          await appendEachFile(pdflist[currentfile]);
          await appendAllFiles(pdflist, currentfile + 1);
        } else {
          await resolve(pdfDoc)
        }
      };
      let downloadAllFiles = async () => {
        var promises: any = [];
        for (var i = 0; i < urls.length; i++) {
          if (urls[i] != '' && urls[i] != undefined) {
            await promises.push(urls[i]);
          }
        }
        Promise.all(promises).then(async (pdfList) => {
          await appendAllFiles(pdfList, 0);
        });
      };
      downloadAllFiles();
    })
  }
}
