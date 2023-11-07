import { Component, EventEmitter, forwardRef, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import $ from 'jquery'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgInputComponent)
  }]
})
export class NgInputComponent implements OnInit, ControlValueAccessor {
  @Input('item') item: any = {};
  @Input('disabled') disabled: boolean = false;
  @Input('ButtonProps') ButtonProps: any = {
    Text1: '',
    Text2: '',
    Active: false
  };
  @Input('required') required: boolean = false;
  @Output('event') event: any = new EventEmitter();
  @Output('AddButtonEvent') AddButtonEvent: any = new EventEmitter();
  @Output('RemoveButtonEvent') RemoveButtonEvent: any = new EventEmitter();


  onChange: any = () => { };
  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.ButtonProps, "ButtonProps")
    if (this.item?.value != undefined && this.item?.value != null && this.item?.value != '') {
      this.event.emit(this.item?.value);
    }
  }

  checked: any = '';
  writeValue(checked: any) {
    this.checked = checked;
  }

  onModelChange(e: boolean, value: any) {
    this.checked = value;
    this.onChange(value);
    this.event.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item = changes?.item?.currentValue;
    if (this.item?.value != undefined && this.item?.value != null && this.item?.value != '') {
      this.event.emit(this.item?.value);
    }
    if (changes?.ButtonProps?.currentValue != undefined && changes?.ButtonProps?.currentValue != null && changes?.ButtonProps?.currentValue != '') {
      this.ButtonProps = changes?.ButtonProps?.currentValue
    }
    console.log(changes, "ng-input-ngOnChanges")
  }

}
