import { Component, ElementRef, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import $ from 'jquery'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ng-dropdown-custom',
  templateUrl: './ng-dropdown-custom.component.html',
  styleUrls: ['./ng-dropdown-custom.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgDropdownCustomComponent)
  }],
  host: { '(document:click)': 'onClick($event)' },
})
export class NgDropdownCustomComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input('placeHolderText') placeHolderText: any = ''
  @Input('items') items: any = [];
  @Output('ngModelDropDownChange') ngModelDropDownChanges: any = new EventEmitter<any>();
  @Output('modelChanges') modelChanges: any = new EventEmitter<any>();
  @Input('bindLabel') bindLabel: any = 'demo';
  @Input('bindValue') bindValue: any = '';
  @Input('multiple') multiple: any = [];
  @Input('width') width: any = '';
  @Input('class') class: any = 'li-dropdown'
  @Input('popup-close') popup_close: any = ''
  @Input('height') height: any = [];
  @Input('value') value: any = '';
  @Input('selectedItems') selectedItems: any = '';
  @Input('ngModelDropDown') ngModelDropDown: any = [];
  @Output('NgModal') NgModal: any = new EventEmitter<any>();
  @Output('keyEvent') keyEvent: any = new EventEmitter<any>();
  @Input('GET_ARRAY_VALUES') GET_ARRAY_VALUES: boolean = false;
  @Input('id') id: any = '';
  @Input('disabled') disabled: any = false;
  arryavalue: any = [];
  LABLE_BIND_LIST: any = [];
  FILTER_DROPDOWN: any = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.id = this.randomNameGenerator();
    this.LABLE_BIND_LIST[this.id.toString()] = {
      bindLabel: this.bindLabel,
      bindValue: this.bindValue,
      GET_ARRAY_VALUES: this.GET_ARRAY_VALUES
    }
    this.ngModelDropDown[this.bindLabel] = ''
    if (this.selectedItems != '' && this.selectedItems != null && this.selectedItems != undefined) {
      this.ngModelDropDown = this.selectedItems;
      this.modelChanges.emit(this.ngModelDropDown);
      this.ngModelDropDownChanges.emit(this.ngModelDropDown);
    }
    if (this.value != '' && this.value != null && this.value != undefined) {
      console.log(this.value, this.LABLE_BIND_LIST[this.id.toString()]?.bindLabel, "ngModelDropDown")
      this.selectedItems = this.LABLE_BIND_LIST[this.id.toString()]?.bindLabel != '' ?
        this.value[this.LABLE_BIND_LIST[this.id.toString()]?.bindLabel] : this.value[this.LABLE_BIND_LIST[this.id.toString()]?.bindValue]
      this.ngModelDropDown = this.value;
      this.modelChanges.emit(this.ngModelDropDown);
      this.ngModelDropDownChanges.emit(this.ngModelDropDown);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "NgDropdownCustomComponent")
    this.selectedItems = changes?.value?.currentValue != null ? this.LABLE_BIND_LIST[this.id.toString()]?.bindLabel != '' ?
      changes?.value?.currentValue[this.LABLE_BIND_LIST[this.id.toString()]?.bindLabel] :
      changes?.value?.currentValue[this.LABLE_BIND_LIST[this.id.toString()]?.bindValue] : ''
  }

  dropdownShow($event) {
    this.FILTER_DROPDOWN = this.items;
    $('#' + $($event.target).parent().attr('id')).addClass('custom-dropdown-active');
  }

  dropdownHide($event, val, inputid) {
    var uq_id: any = $($event.target).parent().parent().attr('id')
    $('.custom-dropdown').removeClass('custom-dropdown-active');
    if (this.LABLE_BIND_LIST[uq_id]?.bindValue != '') {
      this.NgModal.emit(this.LABLE_BIND_LIST[uq_id]?.bindValue != '' ? val[this.LABLE_BIND_LIST[uq_id]?.bindValue] : val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.selectedItems = val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
      this.arryavalue = val;
      if (this.LABLE_BIND_LIST[uq_id]?.GET_ARRAY_VALUES == true) {
        this.value = val;
        this.ngModelDropDown = this.value;
        this.modelChanges.emit(this.ngModelDropDown);
        this.ngModelDropDownChanges.emit(this.ngModelDropDown);
      } else {
        this.value = this.LABLE_BIND_LIST[uq_id]?.bindValue != '' ? val[this.LABLE_BIND_LIST[uq_id]?.bindValue] : val;
        this.ngModelDropDown = val
        this.modelChanges.emit(this.ngModelDropDown);
        this.ngModelDropDownChanges.emit(this.ngModelDropDown);
      }
    } else if (this.LABLE_BIND_LIST[uq_id]?.bindValue == '') {
      this.NgModal.emit(val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.selectedItems = val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
      this.arryavalue = val;
      if (this.LABLE_BIND_LIST[uq_id]?.GET_ARRAY_VALUES == true) {
        this.value = val;
        this.ngModelDropDown = this.value;
        this.modelChanges.emit(this.ngModelDropDown);
        this.ngModelDropDownChanges.emit(this.ngModelDropDown);
      } else {
        this.value = val;
        this.ngModelDropDown = val
        this.modelChanges.emit(this.ngModelDropDown);
        this.ngModelDropDownChanges.emit(this.ngModelDropDown);
      }
    }
  }

  filterdropdown($event: any, val: any) {
    this.keyEvent.emit(val);
  }

  filterdropdownKeyPress($event: any, val: any) {
    this.keyEvent.emit(val);
    this.modelChanges.emit(val);
    if (this.FILTER_DROPDOWN.length == 0) {
      this.FILTER_DROPDOWN = this.items;
    }
  }

  clearInput(inputid) {
    $(inputid).val('');
    this.modelChanges.emit('');
    this.value = '';
    this.selectedItems = '';
    this.ngModelDropDownChanges.emit('');
  }

  onChange: (_: any) => void = (_: any) => {
    if (this.selectedItems != '') {
      this.ngModelDropDown = this.selectedItems;
      this.modelChanges.emit(this.ngModelDropDown);
    }
  };
  onTouched: () => void = () => {
    if (this.selectedItems != '') {
      this.ngModelDropDown = this.selectedItems;
      this.modelChanges.emit(this.ngModelDropDown);
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

  get displayHidden() {
    return $('.custom-dropdown#' + this.id).removeClass('custom-dropdown-active');
  }

  get displayShow() {
    return $('.custom-dropdown#' + this.id).addClass('custom-dropdown-active');
  }

  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target))
      this.displayHidden;
  }
}
