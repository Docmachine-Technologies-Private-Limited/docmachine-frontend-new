import {
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appFilterToggle]'
})
export class FilterToggleDirective {
  @Input() defaultColor: string;
  @Input() highlightColor: string = 'pink';

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    var ClassList: any = []
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = event?.target?.className?.split(' ')
    }
    if (ClassList?.includes('filter-popup') == true) {
      this.elementRef.nativeElement.style.display = 'block';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}
