import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-status-progress-bar',
  templateUrl: './custom-status-progress-bar.component.html',
  styleUrls: ['./custom-status-progress-bar.component.scss']
})
export class CustomStatusProgressBarComponent implements OnInit {
  @Input('data') CustomStatusProgressBardata: any = [];
  @Input('width') width: any = [];
  @Input('height') height: any = [];
  @Input('Style') Style: any = [];
  @Output('event') event: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clickbutton(data:any) {
    this.event.emit(data);
  }
}
