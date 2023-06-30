import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";
import { sampleData, displayDate } from "./events-utc";

@Component({
  selector: 'custom-kendo-scheduler',
  templateUrl: './custom-kendo-scheduler.component.html',
  styleUrls: ['./custom-kendo-scheduler.component.scss']
})
export class CustomKendoSchedulerComponent implements OnInit {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
  constructor() { }

  ngOnInit(): void {
  }

}
