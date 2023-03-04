import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../service/document.service';
import { UserService } from '../service/user.service';
import $ from 'jquery'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PDFVIEWERComponent implements OnInit {

  title = 'angular-pdf-viewer-app';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  @Input('src') src:any='';
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
  zoomScales = ['FitH','FitW'];
  pdfQuery = '';
  totalPages: number;
  BASE_64_URL:any='';
  loader: boolean=false;
  URL_IFRAME:any='';
  
  constructor( private userService: UserService,
    public sanitizer: DomSanitizer,
  public documentService: DocumentService){
  }
  SRC_UPDATE:any='';
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
    this.SRC_UPDATE=this.src+'#toolbar=0'
    this.URL_IFRAME=this.sanitizer.bypassSecurityTrustResourceUrl(this.SRC_UPDATE)
  }
  zoomIn(url:any) {
    this.zoom += 100;
    this._isLoading$.next(true);
    this.cleanup();
    this.URL_IFRAME = this.bypassAndSanitize(url+'&zoom='+this.zoom);
    setTimeout(() => {
      this._isLoading$.next(false);
    }, 150);
  }

  zoomOut(url) {
    if (this.zoom > 100)
      this.zoom -= 100;
      this._isLoading$.next(true);
      this.cleanup();
      this.URL_IFRAME = this.bypassAndSanitize(url+'&zoom='+this.zoom);
      setTimeout(() => {
        this._isLoading$.next(false);
      }, 150);
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
    var link = document.createElement('a');
    link.href = pdf;
    link.download = 'samplePDFFile.pdf';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
  printPdf(pdf){
    const iframe:any = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdf;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
  fitScreen(value:any){
    console.log(value)
    this._isLoading$.next(true);
    this.cleanup();
    this.URL_IFRAME = this.bypassAndSanitize(this.SRC_UPDATE+'&view='+value);
    setTimeout(() => {
      this._isLoading$.next(false);
    }, 150);
  }
  Newsrc: SafeResourceUrl;
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  cleanup() {
    this.URL_IFRAME = null;
  }

  bypassAndSanitize(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
