import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
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
  @Input('name') name: any = '';
  @Output('event') event: any = new EventEmitter();

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

  onModelChange(e: boolean, i: any, value: any, isToggle: boolean) {
    this.checked = value;
    this.onChange(value);
    this.event.emit(value);
    this.removeAllToggle(i)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.items?.forEach((element, index) => {
      element['isToggle'] = false;
      element['index'] = index;
    });
  }

  removeAllToggle(index: any) {
    this.items?.forEach((element, i) => {
      if (i != index) {
        element['isToggle'] = false;
      }
    });
  }
}
