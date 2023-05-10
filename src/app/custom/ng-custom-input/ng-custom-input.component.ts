import { Component, Directive, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import $ from 'jquery'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ng-custom-input',
  templateUrl: './ng-custom-input.component.html',
  styleUrls: ['./ng-custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgCustomInputComponent)
  }]
})
export class NgCustomInputComponent implements OnInit, ControlValueAccessor, OnChanges {
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

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
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
  onChange: (_: any) => void = (_: any) => {
    if (this.value != '') {
      this.ngInput = this.value;
      this.modelChanges.emit(this.ngInput);
    }
  };
  onTouched: () => void = () => {
    if (this.value != '') {
      this.ngInput = this.value;
      this.modelChanges.emit(this.ngInput);
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
  ngOnChanges(changes: SimpleChanges) {
    this.ngInput = changes;
    this.modelChanges.emit(this.ngInput);
    console.log(this.ngInput);
  }
}
