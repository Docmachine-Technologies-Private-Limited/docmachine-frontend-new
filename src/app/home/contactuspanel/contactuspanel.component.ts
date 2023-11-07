import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactuspanel',
  templateUrl: './contactuspanel.component.html',
  styleUrls: ['./contactuspanel.component.scss']
})
export class ContactuspanelComponent implements OnInit {
  VIEW_CHANGES: any = {
    TECHNICAL: false,
    PRODCUT: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  onChangesview(value: any, key: any) {
    for (const key in this.VIEW_CHANGES) {
      this.VIEW_CHANGES[key] = false;
    }
    this.VIEW_CHANGES[key] = value;
  }

}
