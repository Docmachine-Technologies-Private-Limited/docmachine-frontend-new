import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';

@Component({
  selector: 'ng-custom-filter-popup',
  templateUrl: './ng-custom-filter-popup.component.html',
  styleUrls: ['./ng-custom-filter-popup.component.scss']
})
export class NgCustomFilterPopupComponent implements OnInit, OnChanges {
  @Input('data') data: any = '';
  @Input('FormStyle') FormStyle: any = '';
  @Output('FilterEvent') FilterEvent: any = new EventEmitter();
  @Output('ResetEvent') ResetEvent: any = new EventEmitter();

  constructor(public validator: UploadServiceValidatorService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.data?.currentValue != undefined && changes?.data?.currentValue != '') {
      setTimeout(() => {
        this.validator.buildForm(changes?.data?.currentValue, 'NgCustomFilterPopup');
      }, 200);
    }
  }

  onSubmit(value: any) {
    console.log(value, "NgCustomFilterPopup")
    this.FilterEvent.emit(value);
  }
  
  Reset(){
    this.ResetEvent.emit("Done")
  }
}
