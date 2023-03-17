import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss']
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
  @Input('FooterButton') FooterButton:boolean=false;
  @Input('FooterButtonText') FooterButtonText:any='Ok';
  @Input('id') id: any;
  @Output('ModelChange') ModelChange = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }

  get displayHidden() {
    return $('upload-modal')
  }
  ClosePopup() {
    this.ModelChange.emit('null');
  }
}
