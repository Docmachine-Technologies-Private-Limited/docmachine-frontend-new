import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appOpenPopUp]'
})
export class OpenPopUpDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
 
  }
  

  ngOnInit() {
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {

    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
    var panel_id:any= $(event.target).attr('popup-close');
    var list:any=['fi_icon','PopupOpen','btn btn-primary PopupOpen','button white-btn table-btn PopupOpen'];
    if (list.includes(event.target.className)==true) {
       if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
            this.elementRef.nativeElement.style.display='flex'
       }
     }
    if (['close-popup','btn btn-primary mt-3 PopupClose'].includes(event.target.className)) {
        if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
            this.elementRef.nativeElement.style.display='none'
        }
    }
  }
}
