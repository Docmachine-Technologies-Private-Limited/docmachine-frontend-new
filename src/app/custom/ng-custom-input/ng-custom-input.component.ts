import { Component,EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import $ from 'jquery'
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

export const CUSTOMINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgCustomInputComponent),
  multi: true,
};

export const CUSTOMINPUT_VALUE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgCustomInputComponent),
  multi: true,
};

@Component({
  selector: 'ng-custom-input',
  templateUrl: './ng-custom-input.component.html',
  styleUrls: ['./ng-custom-input.component.scss'],
  providers: [CUSTOMINPUT_VALUE_VALIDATOR,CUSTOMINPUT_VALUE_ACCESSOR]
})

export class NgCustomInputComponent implements OnInit, ControlValueAccessor,Validator {
  @Input('placeHolderText') placeHolderText: any = ''
  @Input('type') type: any = [];
  @Output('ngInputChange') ngInputChanges: any = new EventEmitter<any>();
  @Output('InputChanges') modelChanges: any = new EventEmitter<any>();
  @Input('width') width: any = '';
  @Input('class') class: any = ''
  @Input('height') height: any = [];
  @Input('value') value: any = '';
  @Input('ngInput') ngInput: any = '';
  @Input('id') id: any = '';
  @Input('disabled') disabled: any = false;
  @ViewChild('nginputcustom') input;
  @Input('label') label;
  
  constructor() { }
  ngOnInit(): void {
    this.id = this.randomNameGenerator();
    if (this.value != '') {
      this.ngInput = this.value;
      this.modelChanges.emit(this.ngInput);
      this.ngInputChanges.emit(this.ngInput);
    }
  }

  clearInput(inputid) {
    $(inputid).val('');
    this.modelChanges.emit('');
    this.value = '';
    this.ngInputChanges.emit('');
  }
  set ngInputValue(value:any){
    if (value != '') {
      this.ngInput = value;
      this.modelChanges.emit(this.ngInput);
      this.ngInputChanges.emit(this.ngInput);
      this.onChange;
      this.onTouched();
    }
  }
  onChange: (_: any) => void = (_: any) => {
    if (this.value != '') {
      this.ngInput = this.value;
      this.modelChanges.emit(this.ngInput);
      this.ngInputChanges.emit(this.ngInput);
    }
  };
  onTouched: () => void = () => {
    if (this.value != '') {
      this.ngInput = this.value;
      this.modelChanges.emit(this.ngInput);
      this.ngInputChanges.emit(this.ngInput);
    }
  };
  updateChanges() {
    this.onChange(this.value);
  }
  /**
   * Writes a new item to the element.
   * @param value the value
   */
  writeValue(value: any): void {
    this.updateChanges();
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  randomNameGenerator() {
    return Math.floor(Math.random() * 1000000000);
  };


  KeysChanges(changes:any) {
    this.ngInput = changes;
    this.modelChanges.emit(this.ngInput);
    this.ngInputChanges.emit(this.ngInput);
  }
  datechanges(changes:any){
    this.ngInput = changes;
    this.modelChanges.emit(this.ngInput);
    this.ngInputChanges.emit(this.ngInput);
  }
  // Validator Interface
  public validate(c: FormControl) {
    return c.errors;
  }
}
