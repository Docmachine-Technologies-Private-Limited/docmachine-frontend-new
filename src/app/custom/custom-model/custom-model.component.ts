import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomModelComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CustomModelComponent implements OnInit {
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
  @Output('footerbutton') FOOTER_BUTTON_EVENT = new EventEmitter<any>();
  @Output('headerbutton') headerbutton = new EventEmitter<any>();
  @ViewChild('PopUpOpenClose') PopUpOpenClose: ElementRef;
  @Input('buttondisabled') buttondisabled: boolean = false;
  @Input('HeaderEventButton') HeaderEventButton: any = '';
  @Input('minimizedisabled') minimizedisabled: boolean = true;
  @Input('removebg') removebg: boolean = true;
  @Input('RemoveBgTop') RemoveBgTop: boolean = true;
  @Input('HIDDEN_SHOW') HIDDEN_SHOW: boolean = false;
  @Input('ModalTitleStyle') ModalTitleStyle: any = '';
  
  toggleminimize: boolean = false;
  footerbuttontext: any = [];

  constructor() { }

  ngOnInit(): void {
    this.footerbuttontext[this.id] = this.condition;
  }

  get displayHidden() {
    return $('.upload-modal#' + this.id).css('display', 'none');
  }

  get displayHide() {
    return $('.upload-modal#' + this.id).css('display', 'none');
  }
  
  get displayShow() {
    return $('.PopupOpen#' + this.id).click()
  }

  ClosePopup() {
    this.displayHidden
    this.ModelChange.emit('null');
  }

  OKBUTTON() {
    console.log(this.condition, 'FOOTER_BUTTON_EVENT')
    if (this.condition == true) {
      this.FOOTER_BUTTON_EVENT.emit(this.condition);
      this.displayHidden
    } else {
      this.FOOTER_BUTTON_EVENT.emit(false);
    }
  }

  HEADERBUTTON(PopUpOpenClose: any) {
    if (this.condition == true) {
      this.headerbutton.emit(this.condition);
      PopUpOpenClose.style.display = "none";
    } else {
      this.headerbutton.emit(false);
    }
  }
}
