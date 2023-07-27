import { Component, Directive, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import $ from 'jquery'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ng-custom-dropdown',
  templateUrl: './ng-custom-dropdown.component.html',
  styleUrls: ['./ng-custom-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgCustomDropdownComponent)
  }]
})
export class NgCustomDropdownComponent implements OnInit, ControlValueAccessor {
  @Input('placeholder') placeHolderText: any = ''
  @Input('items') items: any = [];
  @Output('modelChanges') modelChanges: any = new EventEmitter<any>();
  @Input('bindLabel') bindLabel: any = 'demo';
  @Input('bindValue') bindValue: any = '';
  @Input('multiple') multiple: any = [];
  @Input('width') width: any = '';
  @Input('class') class: any = ''
  @Input('popup-close') popup_close: any = ''
  @Input('height') height: any = [];
  @Input('value') value: any = '';
  @Input('selectedItems') selectedItems: any = '';
  @Output('keyEvent') keyEvent: any = new EventEmitter<any>();
  @Input('id') id: any = '';
  @Input('disabled') disabled: any = false;
  arryavalue: any = [];
  LABLE_BIND_LIST: any = [];
  FILTER_DROPDOWN: any = [];
  onChange: any = () => { };
  onTouch: any = () => { };
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.id = this.randomNameGenerator();
    this.LABLE_BIND_LIST[this.id.toString()] = {
      bindLabel: this.bindLabel,
      bindValue: this.bindValue,
    }
  }

  dropdownShow($event) {
    this.FILTER_DROPDOWN = this.items;
    $('#' + $($event.target).parent().attr('id')).addClass('custom-dropdown-active');
  }
  dropdownHide($event, val, inputid) {
    var uq_id: any = $($event.target).parent().parent().attr('id')
    $('.custom-dropdown').removeClass('custom-dropdown-active');
    if (this.LABLE_BIND_LIST[uq_id]?.bindValue != '') {
      this.selectedItems = val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
      this.arryavalue = val;
      if (this.LABLE_BIND_LIST[uq_id]?.GET_ARRAY_VALUES == true) {
        this.value = val;
        this.modelChanges.emit(this.value);
        this.onChange(this.value);
      } else {
        this.value = this.LABLE_BIND_LIST[uq_id]?.bindValue != '' ? val[this.LABLE_BIND_LIST[uq_id]?.bindValue] : val;
        this.modelChanges.emit(this.value);
        this.onChange(this.value);
      }
    } else if (this.LABLE_BIND_LIST[uq_id]?.bindValue == '') {
      this.selectedItems = val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
      this.arryavalue = val;
      if (this.LABLE_BIND_LIST[uq_id]?.GET_ARRAY_VALUES == true) {
        this.value = val;
        this.modelChanges.emit(this.value);
        this.onChange(this.value);
      } else {
        this.value = val;
        this.modelChanges.emit(this.value);
        this.onChange(this.value);
      }
    }
  }
  
  filterdropdown($event: any, val: any) {
    var uq_id: any = $($event.target).parent().attr('id')
    this.FILTER_DROPDOWN = this.items.filter((item: any) => item[this.LABLE_BIND_LIST[uq_id]?.bindLabel]?.toLowerCase()?.indexOf(val.toLowerCase()) != -1);
    this.keyEvent.emit(val);
    if (this.FILTER_DROPDOWN.length == 0) {
      this.FILTER_DROPDOWN = this.items;
    }
  }
  
  filterdropdownKeyPress($event: any, val: any) {
    this.keyEvent.emit(val);
    this.modelChanges.emit(val);
    this.onChange(val);
    if (this.FILTER_DROPDOWN.length == 0) {
      this.FILTER_DROPDOWN = this.items;
    }
  }
  
  clearInput(inputid) {
    $(inputid).val('');
    this.modelChanges.emit('');
    this.value = '';
    this.selectedItems = '';
    this.onChange('');
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  updateChanges() {
    this.onChange(this.value);
  }
  
  writeValue(value: any): void {
    this.updateChanges();
  }
  
  randomNameGenerator() {
    return Math.floor(Math.random() * 1000000000);
  };

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'custom-dropdown-active');
    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'custom-dropdown-active');
    }
  }
}
