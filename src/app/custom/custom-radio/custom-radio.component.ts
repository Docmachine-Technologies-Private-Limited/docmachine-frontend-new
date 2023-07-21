import { Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioButtonItem {
  name: string;
  value: string;
  fieldName:string
}

export const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomRadioComponent),
  multi: true,
};

let nextUniqueId = 0;

@Component({
  selector: 'custom-radio-button',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  providers: [RADIO_VALUE_ACCESSOR],
})
export class CustomRadioComponent  implements ControlValueAccessor, OnInit,OnChanges {
  private _name: string = `group-${nextUniqueId++}`;
  @Input() items: any=[];

  get name(): string { return this._name; }
  set name(value: string) {
    this._name = value;
  }

  private innerValue: string | number | boolean;
  get value(): string | number | boolean {
    return this.innerValue;
  }

  set value(v: string | number | boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.change(v,-1);
    }
  }

  onChange: Function;
  onTouched: Function;

  writeValue(value: string | number | boolean) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value: string | number | boolean,index:any) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched(value);
    this.removeAllToggle(index)
  }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      this.items?.forEach(element => {
         element['isToggle']=false;
      });
  }
  
  removeAllToggle(index:any){
    this.items?.forEach((element,i) => {
      if (i!=index) {
        element['isToggle']=false;
      }
   });
  }
}
