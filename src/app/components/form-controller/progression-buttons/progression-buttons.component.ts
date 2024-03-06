import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControllerService } from '../form/form.service';

@Component({
  selector: 'app-progression-buttons',
  templateUrl: './progression-buttons.component.html',
  styleUrls: ['./progression-buttons.component.scss']
})
export class ProgressionButtonsComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number;
  @Input("ButtonDisabled") ButtonDisabled: boolean = false;
  @Input("FormGroupName") FormGroupName: any;
  @Input("Condition") Condition: boolean = false;
  @Output("onSubmit") onSubmit:any= new EventEmitter();

  constructor(public formService: FormControllerService) { }

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;
    this.formService.activeStep$.subscribe(step => this.activeStep$ = step);
    console.log(this.stepForm, "FormGroupName")
  }

  nextStep() {
    this.formService.goToNextStep(this.activeStep$);
    console.log(this.activeStep$, this.Condition, "Condition")
  }

  goBack() {
    this.formService.goBackToPreviousStep(this.activeStep$);
  }

  confirmAndSubmitForm() {
    this.onSubmit.emit({value:this.formService.stepForm,RawValue:this.formService.stepForm?.getRawValue()})
  }
}
