import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lc-insurance-format',
  templateUrl: './lc-insurance-format.component.html',
  styleUrls: ['./lc-insurance-format.component.scss']
})
export class LcInsuranceFormatComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('pipodata') pipodata: any = [];
  @Input('bankdata') bankdata: any = [];
  @Output('TableEvent') TableEvent: any = new EventEmitter();

  constructor() {
  }

  async ngOnInit() {
    console.log(this.data, 'adasdsadasdsadsa');
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if (changes?.data?.currentValue != undefined) {
      this.data = changes?.data?.currentValue;
    }
  }

  popupevent(val: any) {
    this.TableEvent.emit({ value: val })
  }
}
