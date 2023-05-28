import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'ng-custom-tooltips',
  templateUrl: './ng-custom-tooltips.component.html',
  styleUrls: ['./ng-custom-tooltips.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => NgCustomTooltipsComponent)
  }]
})
export class NgCustomTooltipsComponent implements OnInit {
  @Input('name') name: any;
  @Input('width') width: any;
  @Input('height') height: any;
  @Input('maxwidth') maxwidth: any;
  @Input('maxheight') maxheight: any;
  @Input('minwidth') minwidth: any;
  @Input('minheight') minheight: any;
  @Input('customstyle') customstyle: any;
  @Input('modalbodyheight') modalbodyheight: any;
  @Input('modalbodystyle') modalbodystyle: any;
  @Input('FooterButton') FooterButton: boolean = false;
  @Input('EventButton') EventButton: boolean = false;
  @Input('FooterButtonText') FooterButtonText: any = 'Ok';
  @Input('id') id: any;
  @Output('ModelChange') ModelChange = new EventEmitter<any>();
  @Input('condition') condition: any = '';
  @Output('footerbutton') footerbutton = new EventEmitter<any>();
  @ViewChild('PopUpOpenClose')PopUpOpenClose:ElementRef;

  footerbuttontext: any = [];
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.footerbuttontext[this.id] = this.condition;
  }

  get displayHidden() {
    return $('upload-modal')
  }
  ClosePopup() {
    this.ModelChange.emit('null');
  }
  OKBUTTON(PopUpOpenClose: any) {
    if (this.condition == true) {
      this.footerbutton.emit(this.condition);
      PopUpOpenClose.style.display = "none";
    } else {
      this.footerbutton.emit(false);
    }
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    // var panel_id: any = $(event.target).attr('tooltips-close');
    // var ClassList: any = []
    // for (let index = 0; index < event?.target?.classList.length; index++) {
    //   ClassList.push(event?.target?.classList[index])
    // }
    // if (ClassList.length == 0) {
    //   ClassList = event.target.className.split(' ')
    // }
    // if (ClassList?.includes('Tooltips') == true || ClassList?.includes('ng-option-label') == true) {
    //   if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
    //     this.elementRef.nativeElement.style.display = 'flex';
    //   }
    // }
    // var btnClassList: any = []
    // for (let index = 0; index < event?.target?.classList.length; index++) {
    //   btnClassList.push(event?.target?.classList[index])
    // }
    // if (ClassList.length == 0) {
    //   btnClassList = event.target.className.split(' ')
    // }
    // if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
    //   if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
    //     this.elementRef.nativeElement.style.display = 'none';
    //   }
    // }
    // if ($(this.elementRef.nativeElement).attr('id') != panel_id) {
    //   this.elementRef.nativeElement.style.display = 'none';
    // }
  }
  @HostListener('document:click', ['$event'])
  onClick(event): void {
  // console.log(event.target,'event.target')
  // var panel_id: any = $(event.target).attr('tooltips-close');
  // var ClassList: any = []
  // for (let index = 0; index < event?.target?.classList.length; index++) {
  //   ClassList.push(event?.target?.classList[index])
  // }
  // if (ClassList.length == 0) {
  //   ClassList = event.target.className.split(' ')
  // }
  // if (ClassList?.includes('Tooltips') == true || ClassList?.includes('ng-option-label') == true) {
  //   if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
  //     this.elementRef.nativeElement.style.display = 'flex';
  //   }
  // }
  // var btnClassList: any = []
  // for (let index = 0; index < event?.target?.classList.length; index++) {
  //   btnClassList.push(event?.target?.classList[index])
  // }
  // if (ClassList.length == 0) {
  //   btnClassList = event.target.className.split(' ')
  // }
  // if (btnClassList.includes('close-tooltips') || btnClassList.includes('Tooltips-Close')) {
  //   if ($(this.elementRef.nativeElement).attr('id') === panel_id) {
  //     this.elementRef.nativeElement.style.display = 'none';
  //   }
  // }
  // if ($(this.elementRef.nativeElement).attr('id') != panel_id) {
  //   this.elementRef.nativeElement.style.display = 'none';
  // }
  }
}
