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
  selector: '[NgDropdownPopupController]'
})
export class NgDropdownPopupControllerDirective {
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
      this.renderer.removeClass(this.elementRef.nativeElement,'custom-dropdown-active');
    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elementRef.nativeElement,'custom-dropdown-active');
    }
  }
}
