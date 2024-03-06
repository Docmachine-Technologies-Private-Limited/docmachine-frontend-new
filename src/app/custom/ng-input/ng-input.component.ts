import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class NgInputComponent implements OnInit,OnChanges, ControlValueAccessor {
  @Input('item') item: any = {};
  @Input('InputName') InputName: any = '';
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
  VALUE_STORE: any = []

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
    this.VALUE_STORE[this.InputName] = this.item.value;
    console.log(this.ButtonProps, this.VALUE_STORE, "ButtonProps")
    if (this.item?.value != undefined && this.item?.value != null && this.item?.value != '') {
      this.event.emit(this.VALUE_STORE[this.InputName]);
    }
  }

  checked: any = '';
  writeValue(checked: any) {
    this.checked = checked;
  }

  onModelChange(e: boolean, value: any) {
    this.checked = value;
    this.onChange(value);
    this.VALUE_STORE[this.InputName] = this.item.value;
    this.event.emit(this.VALUE_STORE[this.InputName]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item = changes?.item?.currentValue;
    this.InputName = changes?.InputName?.currentValue != undefined ? changes?.InputName?.currentValue : this.InputName;
    if (this.item?.value != undefined && this.item?.value != null && this.item?.value != '') {
      this.VALUE_STORE[this.InputName] = this.item.value;
      this.event.emit(this.VALUE_STORE[this.InputName]);
    }
    if (changes?.ButtonProps?.currentValue != undefined && changes?.ButtonProps?.currentValue != null && changes?.ButtonProps?.currentValue != '') {
      this.ButtonProps = changes?.ButtonProps?.currentValue
    }
    console.log(changes, this.VALUE_STORE, "ng-input-ngOnChanges")
  }

}
