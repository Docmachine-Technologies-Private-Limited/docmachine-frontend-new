import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery'
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-letterhead',
  templateUrl: './letterhead.component.html',
  styleUrls: ['./letterhead.component.scss']
})
export class LetterheadComponent implements OnInit {
  @Input('data') data: any = [];
  TOTAL_SUM_FIREX: any = 0;
  TOTAL_SUM_FIREX_COMMISION: any = 0
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: []
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetail().then((status: any) => {
      this.userService.getTeambyId(status?.result?.companyId).subscribe((res: any) => {
        console.log(res, 'getTeamByUser');
        if (res?.data[0]?.letterHead != '' && res?.data[0]?.letterHead != undefined) {
          $('.hdf-bank').css('background-image', 'url(' + res?.data[0]?.letterHead + ')')
        }
      })
    });

    this.data[0]?.forEach(element => {
      this.TOTAL_SUM_FIREX += this.data[1]['SB_' + element?.sbno]?.reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.Used_Balance) }, 0);
      this.TOTAL_SUM_FIREX_COMMISION += this.data[1]['SB_' + element?.sbno]?.reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.commision) }, 0);
      this.CURRENCY = element?.currency;
      this.data[1]['SB_' + element?.sbno]?.forEach(element => {
        this.FIRX_DATE_NO?.NUMBER?.push(element?.irDataItem?.billNo)
        this.FIRX_DATE_NO?.DATE?.push(element?.irDataItem?.date)
      });
    });
    console.log(this.data, this.TOTAL_SUM_FIREX, 'LetterheadComponent')
  }
  PARSE_FLOAT_AMOUNT(amount1: any, amount2: any) {
    return !isNaN(parseFloat(amount1)) ? parseFloat(amount1) - parseFloat(amount2) : 0
  }
  clicktrick() {
    this.TICK_MARKS = !this.TICK_MARKS
  }
  ARRAY_TO_STRING(arr: any) {
    return arr.join(',')
  }
}
