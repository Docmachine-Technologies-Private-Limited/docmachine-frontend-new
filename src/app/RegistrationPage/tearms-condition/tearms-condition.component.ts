import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'tearms-condition',
  templateUrl: './tearms-condition.component.html',
  styleUrls: ['./tearms-condition.component.scss']
})
export class TearmsConditionComponent implements OnInit {
  CURREENT_DATE: any = moment(new Date()).format('DD-MM-YYYY')

  constructor() { }

  ngOnInit(): void {
  }

}
