import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[Minimize_Maximize_PopUp]'
})
export class PopupOpenDirective {
  constructor(private elementRef: ElementRef) {
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
    var panel_id:any= $(event.target).attr('popup-close');
    if ($(this.elementRef.nativeElement).hasClass('maximum-size-modal') &&
        ['close full-screen','full-screen-img'].includes(event.target.className) && 
        $(this.elementRef.nativeElement).attr('id')===panel_id) {
        $(this.elementRef.nativeElement).removeClass('maximum-size-modal');
        return;
    }
    if (['close full-screen','full-screen-img'].includes(event.target.className) == true &&
         $(this.elementRef.nativeElement).attr('id')===panel_id) {
         $(this.elementRef.nativeElement).addClass('maximum-size-modal');
   }
  }
}
