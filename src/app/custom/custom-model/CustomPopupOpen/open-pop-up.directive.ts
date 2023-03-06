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
      var ClassList:any=[]
      for (let index = 0; index < event?.target?.classList.length; index++) {
         ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length==0) {
         ClassList=event.target.className.split(' ')
      }
      console.log(ClassList,'onClick')
      if (ClassList?.includes('PopupOpen')==true) {
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
