import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-tooltips',
  templateUrl: './tooltips-custom-ng.component.html',
  styleUrls: ['./tooltips-custom-ng.component.scss']
})
export class TooltipsCustomNgComponent implements OnInit {
  @Input("DataText") DataText:any=''
  @Input("innerText") innerText:any=''
  
  constructor() { }

  ngOnInit(): void {
  }

}
