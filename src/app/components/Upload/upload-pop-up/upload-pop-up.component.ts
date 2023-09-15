import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DocumentService } from '../../../service/document.service';

@Component({
  selector: 'upload-popup',
  templateUrl: './upload-pop-up.component.html',
  styleUrls: ['./upload-pop-up.component.scss']
})
export class UploadPopUpComponent implements OnInit {
  @Input('id') id: any = '';
  @Input('style') style: any = '';
  @Input('name') name: any = 'Upload Documents';
  @Input('url') url: any = '';
  @Input('maxFiles') maxFiles: any = 5;
  @Input('maxFilesize') maxFilesize: any = 5;
  @Input('timeout') timeout: any = 200000;
  @Input('acceptedFiles') acceptedFiles: any = 'image/*,application/pdf,.psd,.txt,.doc,.docx,.ppt,.pptx, .pps, .ppsx';
  @Input('UploadFilesNames') UploadFilesNames: any = 'Upload Files';
  @Output('event') event: any = new EventEmitter();
  public config: DropzoneConfigInterface;

  constructor(public documentService: DocumentService) { }

  ngOnInit(): void {
    let api_base = this.documentService.api_base;
    let headers: any = {
      Authorization: this.loadFromLocalStorage(),
      timeout: `${20000}`,
    };

    this.config = {
      url: `${api_base}/` + this.url,
      method: `POST`,
      maxFiles: this.maxFiles,
      maxFilesize: this.maxFilesize,
      headers: headers,
      timeout: this.timeout,
      autoProcessQueue: true,
      autoReset: null,
      errorReset: null,
      cancelReset: null,
      dictDefaultMessage: 'Drag a document here',
      acceptedFiles:this.acceptedFiles,
      previewTemplate:
        '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>',
    };
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    this.event.emit(args);
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any,panel:any,dropzonepanel:any): void {
    this.event.emit(args);
    setTimeout(() => {
      panel?.displayHidden;
      this.removeAll(dropzonepanel)
    }, 300);
    console.log(args, 'onUploadSuccess')
  }

  submit(e) {

  }
  removeAll(dropzonepanel: any) {
    console.log(dropzonepanel, 'sdfshdfjkdfhsdfkjhfksfd')
    dropzonepanel?.directiveRef?.dropzone()?.removeAllFiles();
    dropzonepanel?.directiveRef?.dropzone()?.removeAllFiles(true);
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    return token;
  }
}
