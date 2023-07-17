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
  }],
  host: { '(document:click)': 'onClick($event)' },
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
  @ViewChild('PopUpOpenClose') PopUpOpenClose: ElementRef;

  footerbuttontext: any = [];
  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    this.footerbuttontext[this.id] = this.condition;
  }

  get displayHidden() {
    return $('.tooltips-modal#' + this.id).css('display', 'none')
  }

  get displayShow() {
    return $('.tooltips-modal#' + this.id).css('display', 'block')
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

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target))
      this.displayHidden;
  }
}
