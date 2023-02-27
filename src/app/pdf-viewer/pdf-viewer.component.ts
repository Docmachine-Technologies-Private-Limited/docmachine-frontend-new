import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DocumentService } from '../service/document.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PDFVIEWERComponent implements OnInit {

  title = 'angular-pdf-viewer-app';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  @Input('src') src:any=[];
  @Input('width') width:any='500px';
  @Input('height') height:any='500px';
  @Input('name') name:any='PDF Viewer';
  @Input('downloadShow') downloadShow:boolean=true;
  @Input('base64_src') base64_src:any='';

  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit', 'page-height'];
  pdfQuery = '';
  totalPages: number;
  BASE_64_URL:any='';
  loader: boolean=false;
  constructor( private userService: UserService,public documentService: DocumentService){
  }

  ngOnInit(){
    if (this.base64_src!='') {
      this.userService.mergePdf(this.base64_src).subscribe(
        (res: any) => {
          console.log('res', res);
          res.arrayBuffer().then((data:any)=>{
            this.BASE_64_URL=data;
          })
        },(err) => console.log('Failed to fetch the pdf'));
    }

  }
  zoomIn() {
    this.zoom += 0.05;
  }

  zoomOut() {
    if (this.zoom > 0.05)
      this.zoom -= 0.05;
  }

  rotateDoc() {
    this.rotation += 90;
  }
  // Event handler when new PDF file is selected
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.src = e.target.result;
      };
      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  callBackFn(event) {
    console.log('callBackFn', event);
    this.totalPages = event._pdfInfo.numPages
  }
  pageRendered(event) {
    console.log('pageRendered', event);
    // setTimeout(()=> {this.loader=false},1500)
  }
  textLayerRendered(event) {
    console.log('textLayerRendered', event);
  }
  
  onError(event) {
    console.error('onError', event);
  }
  onProgress(event) {
    this.loader=true;
    console.log('onProgress', event);
  }

  downloadPdf(pdf){
      let blob = new Blob([pdf], {
        type: 'application/pdf'
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'samplePDFFile.pdf';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
  printPdf(pdf){
    var blob = new Blob([pdf], {type: 'application/pdf'});
    const blobUrl = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);
      iframe.contentWindow.print();
  }
}
