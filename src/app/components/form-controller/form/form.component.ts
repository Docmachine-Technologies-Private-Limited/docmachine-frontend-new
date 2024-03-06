import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControllerService } from './form.service';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../../Upload/service/upload-service-validator.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormControllerComponent implements OnInit, OnChanges {
  stepForm!: FormGroup;
  activeStep$: number;
  @Output("onSubmit") onSubmit:any= new EventEmitter();
  
  @Input("item") item: {
    FORM_CREATE_LIST: Array<any>; FORM_LIST: Object;
    StepItem: {
      step: number; description: string;
    }[]; TitleDesciption:{
      Title: string; description: string;
    }[];
  }

  constructor(public formService: FormControllerService,
    public validator: UploadServiceValidatorService,
    public documentService: DocumentService) {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "FormControllerComponent")
    let currentdata: any = changes?.item?.currentValue
    this.stepForm = this.formService.stepForm;
    this.formService.activeStep$.subscribe(step => this.activeStep$ = step);
    this.formService.FORM_CREATE_LIST = currentdata?.FORM_CREATE_LIST;
    let OBJECT_CREATE: any = [];
    this.formService.FORM_CREATE_BOOLEAN = false;
    if (Object.keys(currentdata?.FORM_LIST)?.length != 0) {
      this.formService.FORM_CREATE_LIST?.forEach((element, index) => {
        this.validator.buildForm({ ...currentdata?.FORM_LIST[element] }, element).then((res: any) => {
          OBJECT_CREATE[element] = res[element];
          if ((index + 1) == this.formService.FORM_CREATE_LIST?.length) {
            this.formService.multiStepForm = this.formService.fb.group(OBJECT_CREATE);
            console.log(this.formService.multiStepForm, this.formService.FORM_CREATE_LIST, "this.multiStepForm")
            this.formService.FORM_CREATE_BOOLEAN = true;
            this.formService.stepDetails = currentdata?.StepItem;
          }
        });
      });
    }
  }

  confirmAndSubmitForm(value) {
    this.onSubmit.emit(value)
  }
  
}


