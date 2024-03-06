import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControllerService {
  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();
  multiStepForm: FormGroup;
  FORM_CREATE_LIST: any = [];
  FORM_CREATE_BOOLEAN: boolean = false;
  stepDetails: { step: number; description: string;}[] = []
  TitleDesciption:{
    Title: string; description: string;
    condition:boolean;
  }[]=[];
  
  get stepForm(): FormGroup {
    return this.multiStepForm;
  }

  constructor(public fb: FormBuilder) {
  }

  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
  }

  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);
  }

}
 