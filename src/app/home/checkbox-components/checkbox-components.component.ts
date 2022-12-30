import {
  Component,
  OnInit,
  Input,
  Output,
  forwardRef,
  HostListener,
  ViewChild,
  TemplateRef,
  EventEmitter
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { Observable,BehaviorSubject } from 'rxjs';
declare var $: any;
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponentsComponent),
  multi: true,
};

enum DropdownMouseState {
  inside,
  outside,
}

@Component({
  selector: 'app-checkbox-components',
  templateUrl: './checkbox-components.component.html',
  styleUrls: ['./checkbox-components.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CheckboxComponentsComponent implements OnInit {
  showMenu: boolean;
  isDisabled: boolean;
  selectedItem:any=[];

  propagateChange = (_: any) => {};

  state: DropdownMouseState;

  @Input('async-data')
  asyncdata:any=[];

  @Input()
  width: string='';

  @Input('labeltext')
  label: string='';

  @Input('autocomplete_on_off')
  INPUT_AUTOCOMPLETE:any;

  @Input('placeholdertext')
  inputplaceholder:any;

  @Input('setvalue')
  setvalue:any='';

  @Input('disabled')
  disabled:any=false;

  @Input('key')
  key:any='';

  @Input('Header')
  HEADER_DROP_DOWN:any=[];

  @Input('readOnly')
  readOnly:any=[];

  @Input('multiple')
  multiple:boolean=false;

  @Input('styles')
  styles:any=[];
  // styles:any={
  //   width:'',
  //   height:'',
  //   display:'',
  //   borderradius:'',
  //   backgroundcolor:'',
  //   boxshadow:'',
  //   border:'',
  //   fontfamily:'',
  //   fontsize:'',
  //   fontweight:'',
  //   bordercolor:'',
  //   borderwidth:'',
  //   borderstyle:'',
  //   margin:'',
  //   padding:'',
  //   outline:'',
  // };

  @Input('labeltype') labeltype:any=[];
  @Input('typeofcheckbox') typeofcheckbox:any=[];
  @Output('event') event:EventEmitter<any> = new EventEmitter();


  selectedIndex:any=[];
  value:any;

  FILTER_DATA_INUPUT:any=[];
  private _data:any = new BehaviorSubject<any>([]);

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false; // hide the dropdown...
    }
  }

  constructor() {
    this.showMenu = false;
    this.isDisabled = false;
    this.state = DropdownMouseState.outside;
  }
@Input()
set data(value:any) {
    this._data.next(value);
};
get data() {
  return this._data.getValue();
}
 async ngOnInit() {
    this.value=this.setvalue;
    this.FILTER_DATA_INUPUT=this._data.value;
    for (let index = 0; index < this.FILTER_DATA_INUPUT.length; index++) {
     this.selectedItem[this.FILTER_DATA_INUPUT[index]['value']]='';
     this.selectedIndex[this.FILTER_DATA_INUPUT[index]['value']]=-1;
    }
    this.selectedItem[this.key]=this.setvalue;
    $('.custom-dropdown').css(this.styles)
 }
async Object_to_Array(data:any){
  return Object.keys(data)
}
  valueChange(key:string,item:any) {
    this.selectedItem[key] = item.value;
    this.propagateChange(item);
    this.showMenu = false;
    if (this.multiple) {
      this.value=this.removeNullValue(this.selectedItem);
    }else{
      this.value=this.selectedItem[key];
    }
    console.log(this.value,'selectedItem')
    this.event.emit(this.value);
  }

  instanceOfIDropdownItem(object: any):any {
    return object.Value !== undefined;
  }

  public Clear(key:string) {
    this.selectedItem[key]='';
    this.value = '';
  }

  /* Implament ControlValueAccessor */
  writeValue(value: any): void {
    if (value == null) {
      this.selectedItem = null;
    } else if (this.instanceOfIDropdownItem(value.value)) {
      this.selectedItem = value.value;
    } else {
      let item = this.data.find((w:any) => w.Value == value);
      this.selectedItem = item;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  reactive(key:string,classname:string){
    if ($('.text-append .'+key).hasClass(classname)) {
      $('.text-append .'+key).removeClass(classname);
      this.selectedIndex[key]=-1;
      this.selectedItem[key]='';
    } else {
      $('.text-append .'+key).addClass(classname);
    }
    if (this.multiple) {
      this.value=this.removeNullValue(this.selectedItem);
    }else{
      this.value=this.selectedItem[key];
    }
    console.log(this.value)
  }
  removeNullValue(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj
  }

}
