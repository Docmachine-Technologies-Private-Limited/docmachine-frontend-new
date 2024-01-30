import { Component, OnInit } from '@angular/core';
import { FormControllerService } from '../form/form.service';

@Component({
  selector: 'app-step-tracker-icons',
  templateUrl: './step-tracker-icons.component.html',
  styleUrls: ['./step-tracker-icons.component.scss']
})
export class StepTrackerIconsComponent implements OnInit {
  activeStep$: number;

  constructor(public formService: FormControllerService) { }

  ngOnInit(): void {
    this.formService.activeStep$.subscribe(activeStep => this.activeStep$ = activeStep);
  }

}
