import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lc-insurance-format',
  templateUrl: './lc-insurance-format.component.html',
  styleUrls: ['./lc-insurance-format.component.scss']
})
export class LcInsuranceFormatComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('pipodata') pipodata: any = [];
  @Input('bankdata') bankdata: any = [];

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
}
