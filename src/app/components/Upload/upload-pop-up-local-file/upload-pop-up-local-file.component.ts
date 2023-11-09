import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DocumentService } from '../../../service/document.service';

@Component({
  selector: 'upload-pop-up-local-file',
  templateUrl: './upload-pop-up-local-file.component.html',
  styleUrls: ['./upload-pop-up-local-file.component.scss']
})
export class UploadPopUpLocalFileComponent implements OnInit {
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
  selectedFile: File

  constructor(public documentService: DocumentService) { }
  onFileChanged(event, panel: any) {
    this.selectedFile = event.target.files[0];
    const fileReader: any = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      console.log(JSON.parse(fileReader.result));
      this.onUploadSuccess({data:JSON.parse(fileReader.result),fileInfo:this.selectedFile}, panel)
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }


  ngOnInit(): void {

  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    this.event.emit(args);
    console.log('onUploadError:', args, args[1].message);
  }
  public onUploadSuccess(args: any, panel: any): void {
    this.event.emit(args);
    setTimeout(() => {
      panel?.displayHidden;
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
