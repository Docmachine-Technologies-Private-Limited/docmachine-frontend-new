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
import { CustomdropdownservicesService } from './customdropdownservices.service';
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDropdownComponent),
  multi: true,
};

enum DropdownMouseState {
  inside,
  outside,
}

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CustomDropdownComponent implements OnInit,ControlValueAccessor {
  showMenu: boolean;
  isDisabled: boolean;
  selectedItem:any;

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

  @Input('labeltype') labeltype:any=[];
  @Input('prod') prod:any=[];
  @Output('event') event:EventEmitter<any> = new EventEmitter();


  selectedIndex:any=-1;
  value:any;

  FILTER_DATA_INUPUT:any=[];
  private _data:any = new BehaviorSubject<any>([]);

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false; // hide the dropdown...
    }
  }

  constructor(public customdrop:CustomdropdownservicesService) {
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
    this.selectedItem=this.setvalue;
    console.log(this._data.value,'this._data.value')
    this.FILTER_DATA_INUPUT=this._data.value;
 }
async Object_to_Array(data:any){
  return Object.keys(data)
}
  valueChange(item:any) {
    this.selectedItem = item.value;
    this.propagateChange(item);
    this.showMenu = false;
    this.value=item;
    this.event.emit(item);
  }

  instanceOfIDropdownItem(object: any):any {
    return object.Value !== undefined;
  }

  public Clear() {
    this.selectedItem = '';
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
 async dropdown_controller(key:string,dropId:any,event:any,inputid:any){
    this.Clear();
    inputid.value='';
    this.FILTER_DATA_INUPUT=await this._data.value
    window.addEventListener("resize",()=>{
      this.showMenu=false;
      var BoundingClientRect = $(inputid)[0].getBoundingClientRect();
      dropId.style.top=(window.scrollY+BoundingClientRect.top+BoundingClientRect.height+10)+'px';
      dropId.style.width=inputid.style.width+'px';
    });
    var BoundingClientRect = $(inputid)[0].getBoundingClientRect();
    dropId.style.top=(window.scrollY+BoundingClientRect.top+BoundingClientRect.height+10)+'px'
    dropId.style.width=event.target.clientWidth+'px';
    var height = BoundingClientRect.top + 195;
    var height_minus = BoundingClientRect.top - 195;
    if (height >= $(window).height()) {
      dropId.style.top=height_minus+'px'
      dropId.style.width=event.target.clientWidth+'px';
    }
    $('body,div').scroll((e:any)=> {
      if (e.currentTarget.className!='dropappend') {
        this.showMenu=false;
      }
    });
    $(document).on("focusout",inputid,(e:any)=>{
      this.showMenu=false;
  });
  }
  async filterInput(key:string,val:any){
    if(val.value){
      this.FILTER_DATA_INUPUT=this.FILTER_DATA_INUPUT=await this._data.value.filter((item:any)=>(item[key].toLowerCase()).includes((val.value).toLowerCase()));
    }else {
      this.FILTER_DATA_INUPUT=this.FILTER_DATA_INUPUT=await this._data.value;
    }
  }
}
