import { Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appFilterToggle]'
})
export class FilterToggleDirective {
  @Input() defaultColor : string;
  @Input() highlightColor : string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;

 constructor(private elementRef: ElementRef ,private renderer : Renderer2){

 }

 ngOnInit(){
   this.backgroundColor = this.defaultColor;
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
 }



 @HostListener('mouseenter') mouseover(eventData: Event){
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
   this.backgroundColor =this.highlightColor;
 }

 @HostListener('mouseleave') mouseleave(eventData: Event){
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
   this.backgroundColor = this.defaultColor;
 }
 @HostListener('document:mousedown', ['$event'])
 onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {

    }
 }
 @HostListener('document:click', ['$event'])
 onClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target) && ['fi_icon','btn btn-secondary'].includes(event.target.className)==false) {
      this.elementRef.nativeElement.style.display = 'none';
    }else{
      if (['fi_icon','btn btn-secondary'].includes(event.target.className)==true) {
        this.elementRef.nativeElement.style.display = 'block';
      }
    }
 }
}
