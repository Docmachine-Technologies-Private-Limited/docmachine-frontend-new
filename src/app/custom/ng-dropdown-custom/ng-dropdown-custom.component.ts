import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import $, { event } from 'jquery'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ng-dropdown-custom',
  templateUrl: './ng-dropdown-custom.component.html',
  styleUrls: ['./ng-dropdown-custom.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgDropdownCustomComponent)
  }]
})
export class NgDropdownCustomComponent implements OnInit,ControlValueAccessor {
@Input('placeHolderText') placeHolderText:any=''
@Input('items') items:any=[];
@Output('modelChanges') modelChanges:any= new EventEmitter<any>();
@Input('bindLabel') bindLabel:any='';
@Input('bindValue') bindValue:any='';
@Input('multiple') multiple:any=[];
@Input('width') width:any='';
@Input('class') class:any=''
@Input('popup-close') popup_close:any=''
@Input('height') height:any=[];
@Input('value') value:any='';
@Input('selectedItems') selectedItems:any='';
@Output('NgModal') NgModal:any= new EventEmitter<any>();
@Input('id') id:any='';
@Input('disabled') disabled:any=false;
LABLE_BIND_LIST:any=[];
FILTER_DROPDOWN:any=[];
constructor() { }
  ngOnInit(): void {
    this.id=this.randomNameGenerator();
    this.LABLE_BIND_LIST[this.id.toString()]={
      bindLabel:this.bindLabel,
      bindValue:this.bindValue
    }
  }
  
  dropdownShow($event){
    this.FILTER_DROPDOWN=this.items;
    $('#'+$($event.target).parent().attr('id')).addClass('custom-dropdown-active');
  }
  dropdownHide($event,val,inputid){
    var uq_id:any=$($event.target).parent().parent().attr('id')
    $('.custom-dropdown').removeClass('custom-dropdown-active');
    if (this.LABLE_BIND_LIST[uq_id]?.bindValue!='') {
      $(inputid).val(val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.modelChanges.emit(this.LABLE_BIND_LIST[uq_id]?.bindValue!=''?val[this.LABLE_BIND_LIST[uq_id]?.bindValue]:val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.NgModal.emit(this.LABLE_BIND_LIST[uq_id]?.bindValue!=''?val[this.LABLE_BIND_LIST[uq_id]?.bindValue]:val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.value=this.LABLE_BIND_LIST[uq_id]?.bindValue!=''?val[this.LABLE_BIND_LIST[uq_id]?.bindValue]:val;
      this.selectedItems=val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
    } else if (this.LABLE_BIND_LIST[uq_id]?.bindValue=='') {
      $(inputid).val(val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.modelChanges.emit(val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.NgModal.emit(val[this.LABLE_BIND_LIST[uq_id]?.bindLabel]);
      this.value=val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
      this.selectedItems=val[this.LABLE_BIND_LIST[uq_id]?.bindLabel];
    }
  }
  filterdropdown($event:any,val:any){
    var uq_id:any=$($event.target).parent().attr('id')
    this.FILTER_DROPDOWN=this.items.filter((item:any)=>item[this.LABLE_BIND_LIST[uq_id]?.bindLabel]?.toLowerCase()?.indexOf(val.toLowerCase())!=-1);
    if (this.FILTER_DROPDOWN.length==0) {
      this.FILTER_DROPDOWN=this.items;
    }
  }
  clearInput(inputid){
    $(inputid).val('');
    this.modelChanges.emit('');
    this.NgModal.emit('');
    this.value='';
    this.selectedItems='';
  }
 onChange: (_: any) => void = (_: any) => {};
 onTouched: () => void = () => {};
 updateChanges() {
     this.onChange(this.value);
 }
 /**
  * Writes a new item to the element.
  * @param value the value
  */
 writeValue(value: any): void {
//  console.log(value,'sdfsdfdsfsdf')
    //  this.value = value;
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
}
