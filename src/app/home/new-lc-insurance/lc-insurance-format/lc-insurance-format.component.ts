import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lc-insurance-format',
  templateUrl: './lc-insurance-format.component.html',
  styleUrls: ['./lc-insurance-format.component.scss']
})
export class LcInsuranceFormatComponent implements OnInit {
  dynamicFormGroup: FormGroup;
  fields: any = [];
  constructor() { }

  async ngOnInit() {
    for (let index = 0; index < 30; index++) {
      this.fields.push({ fieldName: 'lc_insurance_' + (index + 1), value: '' })
    }
    this.dynamicFormGroup = await new FormGroup({
      'lc_insurance_1': new FormControl('', []),
      'lc_insurance_2': new FormControl('', []),
      'lc_insurance_3': new FormControl('', []),
      'lc_insurance_4': new FormControl('', []),
      'lc_insurance_5': new FormControl('', []),
      'lc_insurance_6': new FormControl('', []),
      'lc_insurance_7': new FormControl('', []),
      'lc_insurance_8': new FormControl('', []),
      'lc_insurance_9': new FormControl('', []),
      'lc_insurance_10': new FormControl('', []),
      'lc_insurance_11': new FormControl('', []),
      'lc_insurance_12': new FormControl('', []),
      'lc_insurance_13': new FormControl('', []),
      'lc_insurance_14': new FormControl('', []),
      'lc_insurance_15': new FormControl('', []),
      'lc_insurance_16': new FormControl('', []),
      'lc_insurance_17': new FormControl('', []),
      'lc_insurance_18': new FormControl('', []),
      'lc_insurance_19': new FormControl('', []),
      'lc_insurance_20': new FormControl('', []),
      'lc_insurance_21': new FormControl('', []),
      'lc_insurance_22': new FormControl('', []),
      'lc_insurance_23': new FormControl('', []),
      'lc_insurance_24': new FormControl('', []),
      'lc_insurance_25': new FormControl('', []),
      'lc_insurance_26': new FormControl('', []),
      'lc_insurance_27': new FormControl('', []),
      'lc_insurance_28': new FormControl('', []),
      'lc_insurance_29': new FormControl('', []),
      'lc_insurance_30': new FormControl('', []),
    });
    console.log(this.dynamicFormGroup, 'dynamicFormGroup')
  }
}
