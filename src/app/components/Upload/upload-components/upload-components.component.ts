import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../service/user.service';
import { DocumentService } from '../../../service/document.service';
import { DateFormatService } from '../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../service/upload-service-validator.service';

@Component({
  selector: 'upload-components',
  templateUrl: './upload-components.component.html',
  styleUrls: ['./upload-components.component.scss']
})
export class UploadComponentsComponent implements OnInit {
  SUBMIT_ERROR: boolean = false;
  @Input('id') id: any = '';
  @Input('AddNewRequried') AddNewRequried: boolean = false;
  @Output('SubmitEvent') SubmitEvent: any = new EventEmitter();

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {

  }

  onSubmit(event: any, e: any,type:any) {
    console.log(e, 'value')
    event.preventDefault();
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR = false;
      if (type=='') {
        
      }
      this.SubmitEvent.emit(e);
    } else {
      this.SUBMIT_ERROR = true;
    }
  }

  setFormValue(value: any, index: any, name1: any, name2: any) {
    this.validator.dynamicFormGroup[this.id]?.controls[name1]?.controls[index]?.controls[name2]?.setValue(value)
  }

  addFormArray(key1: any, index: any, data: any, GroupLabel: any) {
    this.validator.buildNewFormArray(key1, index, data['formGroup'][0], this.id, GroupLabel, data).then((res: any) => {
      res?.forEach(element => {
        this.validator.dynamicFormGroup[this.id]?.controls[key1].push(element)
      });
    })
  }

  removeFormArray(key1: any, index: any, labelIndex: any, data: any) {
    this.validator.removeFormArray(key1, index, labelIndex, this.id, data).then((res: any) => { })
  }

  AUTOFILL_INPUT_NAME_LIST: any = [];
  ORM_SELECTION(event: any, index: any, data: any, AUTOFILL_INPUT_NAME_LIST: any) {
    console.log('ORM_SELECTION', data)
    if (event.target.checked) {
      this.validator.ORM_SELECTION_DATA = data;
      AUTOFILL_INPUT_NAME_LIST.forEach(element => {
        this.validator.dynamicFormGroup[this.id]?.controls[element?.input]?.setValue(this.validator.ORM_SELECTION_DATA[element?.key]);
      });
    } else {
      this.validator.ORM_SELECTION_DATA = []
      event.target.checked = false;
    }
  }

  dump(data: any) {
    this.AUTOFILL_INPUT_NAME_LIST = data;
  }

  autofillCommerical(Commericaldata: any, AUTOFILL_INPUT_NAME_LIST: any) {
    console.log('ORM_SELECTION', Commericaldata)
    AUTOFILL_INPUT_NAME_LIST.forEach(element => {
      this.validator.dynamicFormGroup[this.id]?.controls[element?.name]?.controls[element?.index]?.controls[element?.input]?.setValue(Commericaldata?.data[element?.key])
    });
  }
}