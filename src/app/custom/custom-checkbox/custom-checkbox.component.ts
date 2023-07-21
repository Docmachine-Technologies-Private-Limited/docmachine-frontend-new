import { Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() items: any = [];
  onChange: any = () => { };
  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  constructor() { }

  ngOnInit() { }

  checked: boolean = false;
  writeValue(checked: any) {
    this.checked = checked;
  }

  onModelChange(e: boolean,i:any,value:any) {
    this.checked = value;
    this.onChange(value);
    this.removeAllToggle(i)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.items?.forEach(element => {
      element['isToggle'] = false;
    });
  }

  removeAllToggle(index: any) {
    this.items?.forEach((element, i) => {
      if (i != index) {
        element['isToggle'] = false;
      }
    });
    console.log(this.items,'sdfasdfsdfsdfsdfsdfds')
  }
}
