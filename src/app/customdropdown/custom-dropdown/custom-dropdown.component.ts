import {
  Component,
  OnInit,
  Input,
  forwardRef,
  HostListener,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';

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
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CustomDropdownComponent implements OnInit,ControlValueAccessor {

  showMenu: boolean;
  isDisabled: boolean;
  selectedItem:any;
  propagateChange = (_: any) => {};

  state: DropdownMouseState;

  @Input()
  data: Array<any>;
  @Output("PopupShow") PopupShow: EventEmitter<any> = new EventEmitter();

  @Input('async-data')
  asyncData: Observable<any>;

  @Input()
  width: string;

  @ViewChild('dropdown', { static: false }) DROP_DOWN_PROPERTIES: ElementRef;

  @Input('label-text')
  label: string;

  @Input()
  FILTER_KEY: string;

  FILTER_DATA:any=[];

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false; // hide the dropdown...
    }
  }

  constructor(private renderer: Renderer2) {
    this.showMenu = false;
    this.isDisabled = false;
    this.state = DropdownMouseState.outside;
  }
  ngOnInit() {
    if (this.asyncData !== undefined) {
      this.asyncData.subscribe((data) => {
        this.data = data;
      });
    }
    this.FILTER_DATA=this.data;
  }

  valueChange(item:any) {
    this.selectedItem = item;
    this.propagateChange(item);
    this.showMenu = false;
    if ( this.PopupShow!=null &&  this.PopupShow!=undefined) {
      this.PopupShow.emit();
    }
  }

  get value(): any {
    return this.selectedItem;
  }

  set value(v: any) {
    if (v !== this.selectedItem) {
      let value = this.data.find((w) => w);
      this.selectedItem = v;
    }
  }

  instanceOfIDropdownItem(object: any) {
    return object !== undefined;
  }

  public Clear() {
    this.selectedItem = null;
    this.value = null;
  }

  /* Implament ControlValueAccessor */
  writeValue(value: any): void {
    if (value == null) {
      this.selectedItem = null;
    } else if (this.instanceOfIDropdownItem(value)) {
      this.selectedItem = value;
    } else {
      let item = this.data.find((w) => w == value);
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
  filterValue(searchvalue:any){
    this.selectedItem=''
    if (this.FILTER_KEY!=null && this.FILTER_KEY!=undefined) {
      if (searchvalue!=null && searchvalue!='') {
        this.FILTER_DATA=this.data.filter((e:any)=>(e[this.FILTER_KEY]).toLowerCase().includes(searchvalue.toLowerCase()));
      }else{
        this.selectedItem='';
        this.FILTER_DATA=this.data;
      }
    }else{
      if (searchvalue!=null && searchvalue!='') {
        this.FILTER_DATA=this.data.filter((e:any)=>e.toLowerCase().includes(searchvalue.toLowerCase()));
      }else{
        this.selectedItem='';
        this.FILTER_DATA=this.data;
      }
    }
  }
  public onclick(event) {
    this.renderer.setStyle(this.DROP_DOWN_PROPERTIES.nativeElement, "width",event.target.clientWidth+'px');
    this.renderer.setStyle(this.DROP_DOWN_PROPERTIES.nativeElement, "min-width",event.target.clientWidth+'px');
    this.renderer.setStyle(this.DROP_DOWN_PROPERTIES.nativeElement, "margin-left",'10px');

    // $(this.DROP_DOWN_PROPERTIES.nativeElement).css({
    //   width:event.target.clientWidth,
    //   minWidth:event.target.clientWidth,
    //   marginLeft: '10px'
    // })   
  }
}
