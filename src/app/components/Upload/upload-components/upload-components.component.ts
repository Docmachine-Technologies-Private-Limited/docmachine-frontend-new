import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../model/shippingBill.model';
import { UserService } from '../../../service/user.service';
import { DocumentService } from '../../../service/document.service';
import { DateFormatService } from '../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'upload-components',
  templateUrl: './upload-components.component.html',
  styleUrls: ['./upload-components.component.scss']
})
export class UploadComponentsComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup?: any | FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  INDEX: number = 0;
  MAX_DATA_SIZE: number = 2;
  @Input('data') data: any = [];
  @Output('SubmitEvent') SubmitEvent: any = new EventEmitter();

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public userService: UserService) { }

  async ngOnInit() {
    this.CURRENCY_LIST = this.documentService.getCurrencyList();
    await this.userService.getBuyer(1).subscribe((res: any) => {
      res.data?.forEach(element => {
        if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
          this.ConsigneeNameList.push({ value: element?.ConsigneeName })
        }
        this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
      });
      console.log('Benne Detail111', this.ConsigneeNameList, this.BUYER_DETAILS);
    }, (err) => console.log('Error', err));
    await this.documentService.getMaster(1).subscribe((res: any) => {
      console.log('Master Data File', res);
      res.data.forEach((element, i) => {
        element?.pipo.forEach((ele, j) => {
          this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id });
        });
      });
    }, (err) => console.log(err));
    await this.pipoDataService.getPipoList('export').then(async (data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        this.PIPO_DATA = data;
        console.log(data, 'data2222..................')
      });
    });
    await this.buildForm(this.data);
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR = false;
      // this.SubmitEvent.emit(e);
    } else {
      this.SUBMIT_ERROR = true
    }
  }

  async buildForm(model: any) {
    this.fields = [];
    const formGroupFields = await this.getFormControlsFields(model);
    this.dynamicFormGroup = await new FormGroup(formGroupFields);
    console.log(this.dynamicFormGroup, 'dynamicFormGroup')
  }

  async getFormControlsFields(model: any) {
    const formGroupFields = {};
    for (let field of Object.keys(model)) {
      let id: any = field;
      const fieldProps = model[field];
      if (fieldProps?.type != "formArray") {
        formGroupFields[field] = await new FormControl(fieldProps.value, Validators.required);
        this.fields.push({ ...fieldProps, fieldName: field });
      } else {
        var temp: any = [];
        var tempFormGroup: any = [];
        let count: number = 0;
        fieldProps?.formGroup.forEach(element => {
          for (let field2 of Object.keys(element)) {
            temp.push({ ...element[field2], fieldName: field2, index: count });
            tempFormGroup.push(new FormGroup({ [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false }, Validators.required) }));
            count++;
          }
        });
        fieldProps['NewformGroup'] = temp;
        formGroupFields[field] = await new FormArray(tempFormGroup);
        this.fields.push({ ...fieldProps, fieldName: field });
        console.log(id, fieldProps, tempFormGroup, this.fields, 'hghjgjhghjgjh')
      }
    }
    console.log(this.fields, 'hghjgjhghjgjh')
    return formGroupFields;
  }

  setFormValue(value: any, index: any, name1: any, name2: any) {
    this.dynamicFormGroup.controls[name1]?.controls[index]?.controls[name2]?.setValue(value)
  }

}
