import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PhoneValidatorDirective),
  multi: true,
};

@Directive({
  selector: '[appPhoneValidator]',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class PhoneValidatorDirective  {

  constructor(private el: ElementRef) {
    console.log('constructed InputTextFilterDirective');
    // (el.nativeElement as HTMLInputElement).value = '';
  }
  @HostListener('click', ['$event'])
  onClick($event) {
    console.log('in change InputTextFilterDirective' ,$event);
  }
}
