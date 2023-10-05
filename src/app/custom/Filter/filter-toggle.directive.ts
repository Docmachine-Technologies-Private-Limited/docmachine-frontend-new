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
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    var ClassList: any = []
    for (let index = 0; index < event?.target?.classList.length; index++) {
      ClassList.push(event?.target?.classList[index])
    }
    if (ClassList.length == 0) {
      ClassList = (typeof event?.target?.className)?.toLowerCase()!=="object"?event?.target?.className?.split(' '):[]
    }

    if (ClassList?.includes('filter-popup') == true) {
      this.elementRef.nativeElement.style.display = 'block';
    } else {
      this.getAllClassNameList().then((res: any) => {
        if (!this.checkvalue(res, ClassList)) {
          this.elementRef.nativeElement.style.display = 'none';
        }
      })
    }
  }
  getAllClassNameList() {
    return new Promise((resolve, reject) => {
      var temp: any = [];
      $(async function () {
        var doc: any = document.getElementById("filter_main") as any;
        doc = doc?.getElementsByTagName("*")
        await doc?.forEach(async (element) => {
          await element?.classList?.forEach(async (classelement) => {
            await temp.push(classelement)
          });
        });
        await resolve(temp);
      });
    })
  }
  checkvalue(array1, array2) {
    let bool: boolean = false;
    array2.forEach(element2 => {
      if (array1.includes(element2)) {
        bool = true;
      }
    });
    return bool;
  }
}
