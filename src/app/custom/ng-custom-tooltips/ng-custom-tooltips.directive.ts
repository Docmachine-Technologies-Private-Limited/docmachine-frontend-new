import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';
import $ from 'jquery'

@Directive({
  selector: '[NgCustomTooltips]',
  host: {
    '(mouseenter)': 'onMouseEnter(this)',
    '(mouseleave)': 'onMouseLeave(this)'
  }
})
export class NgCustomTooltipsDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  
  console.log('fgdfkgfdkjghdfgkfd')
  }
  @HostListener('mouseenter', ['$event']) mouseover(event:any) {
    if (event!=undefined) {
      var panel_id:any= $(event.target).attr('tooltips-close');
      var ClassList:any=[]
      for (let index = 0; index < event?.target?.classList.length; index++) {
         ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length==0) {
         ClassList=event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips')==true || ClassList?.includes('ng-option-label')==true) {
         if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
              this.elementRef.nativeElement.style.display='flex';
         }
       }
       var btnClassList:any=[]
       for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
       }
       if (ClassList.length==0) {
        btnClassList=event.target.className.split(' ')
       }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
          if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
            this.elementRef.nativeElement.style.display='none';
          }
      }
    }
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event:any) {
    if (event!=undefined) {
      var panel_id:any= $(event.target).attr('tooltips-close');
      var ClassList:any=[]
      for (let index = 0; index < event?.target?.classList.length; index++) {
         ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length==0) {
         ClassList=event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips')==true || ClassList?.includes('ng-option-label')==true) {
         if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
              this.elementRef.nativeElement.style.display='flex';
         }
       }
       var btnClassList:any=[]
       for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
       }
       if (ClassList.length==0) {
        btnClassList=event.target.className.split(' ')
       }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
          if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
            this.elementRef.nativeElement.style.display='none';
          }
      }
    }
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (event!=undefined) {
      var panel_id:any= $(event.target).attr('tooltips-close');
      var ClassList:any=[]
      for (let index = 0; index < event?.target?.classList.length; index++) {
         ClassList.push(event?.target?.classList[index])
      }
      if (ClassList.length==0) {
         ClassList=event.target.className.split(' ')
      }
      if (ClassList?.includes('Tooltips')==true || ClassList?.includes('ng-option-label')==true) {
         if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
              this.elementRef.nativeElement.style.display='flex';
         }
       }
       var btnClassList:any=[]
       for (let index = 0; index < event?.target?.classList.length; index++) {
        btnClassList.push(event?.target?.classList[index])
       }
       if (ClassList.length==0) {
        btnClassList=event.target.className.split(' ')
       }
      if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
          if ($(this.elementRef.nativeElement).attr('id')===panel_id) {
            this.elementRef.nativeElement.style.display='none';
          }
      }
      if ($(this.elementRef.nativeElement).attr('id')!=panel_id) {
        this.elementRef.nativeElement.style.display='none';
      }
    }
  }
  onMouseEnter(event:any) {console.log('',event) }
  onMouseLeave(event:any) {console.log('',event) }
}
