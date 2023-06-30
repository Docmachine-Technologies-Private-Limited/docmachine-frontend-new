import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-table-expansion-panel',
  templateUrl: './custom-table-expansion-panel.component.html',
  styleUrls: ['./custom-table-expansion-panel.component.scss']
})
export class CustomTableExpansionPanelComponent implements OnInit {
  @Input('items') items: any = []
  OBJECT_KEYS: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
