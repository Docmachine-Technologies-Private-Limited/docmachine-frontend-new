import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ng-custom-filter-popup',
  templateUrl: './ng-custom-filter-popup.component.html',
  styleUrls: ['./ng-custom-filter-popup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgCustomFilterPopupComponent)
  }],
  host: { '(document:click)': 'onClick($event)' },
})
export class NgCustomFilterPopupComponent implements OnInit, OnChanges {
  @Input('data') data: any = '';
  @Input('FormStyle') FormStyle: any = '';
  @Input('SHOW_HIDE') SHOW_HIDE: boolean = true;
  @Output('FilterEvent') FilterEvent: any = new EventEmitter();
  @Output('ResetEvent') ResetEvent: any = new EventEmitter();

  constructor(public validator: UploadServiceValidatorService,private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.data?.currentValue != undefined && changes?.data?.currentValue != '') {
      setTimeout(() => {
        this.validator.buildForm(changes?.data?.currentValue, 'NgCustomFilterPopup');
      }, 200);
    }
  }
  
  get ClosePopUp(){
    return $('#filter_main').css('display','none')
  }
  
  get ShowPopUp(){
    return $('#filter_main').css('display','none')
  }

  onSubmit(value: any) {
    console.log(value, "NgCustomFilterPopup")
    this.FilterEvent.emit(value);
  }
  
  Reset(){
    this.ResetEvent.emit("Done")
  }
  
  onClick(event: any) {
  //  console.log(this.elementRef.nativeElement,"this.elementRef.nativeElement.contains(event.target)")
    // if (this.elementRef.nativeElement.contains(event.target)){
    //   this.ShowPopUp;
    // }
  }
  
  
}
