import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery'
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-import-letterhead',
  templateUrl: './ImportLetterhead.component.html',
  styleUrls: ['./ImportLetterhead.component.scss']
})
export class ImportLetterheadComponent implements OnInit {
  @Input('data') data: any = [];
  TOTAL_SUM_PIPO_SUM: any = 0;
  TOTAL_PIPO_NUMBER: any = ''
  TOTAL_PIPO_DATE: any = ''
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: []
  }
  CURRENT_DATE: any = new Date().toDateString()
  COMPANY_DETAILS: any = [];
  PIPO_AMOUNT_WORD: any = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetail().then((status: any) => {
      this.userService.getTeambyId(status?.result?.companyId).subscribe((res: any) => {
        console.log(res, 'getTeamByUser');
        this.COMPANY_DETAILS = res?.data[0];
        if (res?.data[0]?.letterHead != '' && res?.data[0]?.letterHead != undefined) {
          $('.hdf-bank').css('background-image', 'url(' + res?.data[0]?.letterHead + ')')
        }
      })
    });
    this.TOTAL_SUM_PIPO_SUM = this.data[3];
    var PIPO_NO: any = []
    var PIPO_DATE: any = []
    this.data[1]?.forEach(element => {
      this.CURRENCY = element?.currency;
      PIPO_NO.push(element?.pi_poNo)
      PIPO_DATE.push(element?.date)
      if (element?.pi_poNo == undefined || element?.pi_poNo == null || element?.pi_poNo == '') {
        element?.pipo?.forEach(pipoelement => {
          this.CURRENCY = pipoelement?.currency;
          PIPO_NO.push(pipoelement?.pi_poNo)
          PIPO_DATE.push(pipoelement?.date)
        });
      }
    });
    this.TOTAL_PIPO_NUMBER = PIPO_NO.join(',');
    this.TOTAL_PIPO_DATE = PIPO_DATE.join(',')
    this.PIPO_AMOUNT_WORD = this.toWords(this.TOTAL_SUM_PIPO_SUM)
    console.log(this.data, this.TOTAL_SUM_PIPO_SUM, 'ImportLetterhead')
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

  toWords(s) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1)
      x = s.length;
    if (x > 15)
      return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (let i = 0; i < x; i++) {
      if ((x - i) % 3 == 2) {
        if (n[i] == '1') {
          str += tn[Number(n[i + 1])] + ' ';
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tw[n[i] - 2] + ' ';
          sk = 1;
        }
      } else if (n[i] != 0) { // 0235
        str += dg[n[i]] + ' ';
        if ((x - i) % 3 == 0) str += 'hundred ';
        sk = 1;
      }
      if ((x - i) % 3 == 1) {
        if (sk)
          str += th[(x - i - 1) / 3] + ' ';
        sk = 0;
      }
    }

    if (x != s.length) {
      var y = s.length;
      str += 'point ';
      for (let i = x + 1; i < y; i++)
        str += dg[n[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ');
  }
  TICK_MARKED1: boolean = false;
  TICK_MARKED2: boolean = false;
  TICK_MARKED3: boolean = false;
  TICK_MARKED4: boolean = false;
  TICK_MARKED5: boolean = false;
  TICK_MARKED6: boolean = false;
  TICK_MARKED7: boolean = false;
  TICK_MARKED8: boolean = false;
  TICK_MARKED9: boolean = false;
  TICK_MARKED10: boolean = false;
  TICK_MARKED11: boolean = false;
  TICK_MARKED12: boolean = false;
  TICK_MARKED13: boolean = false;
  TICK_MARKED14: boolean = false;
  TICK_MARKED15: boolean = false;
  TICK_MARKED16: boolean = false;
  TICK_MARKED17: boolean = false;
  TICK_MARKED18: boolean = false;
  TICK_MARKED19: boolean = false;

  TickMark1() {
    this.TICK_MARKED1 = !this.TICK_MARKED1;
    this.TICK_MARKED2 = false;
  }
  TickMark2() {
    this.TICK_MARKED2 = !this.TICK_MARKED2;
    this.TICK_MARKED1 = false;
  }
  TickMark3() {
    this.TICK_MARKED3 = !this.TICK_MARKED3;
    this.TICK_MARKED4 = false;
  }
  TickMark4() {
    this.TICK_MARKED4 = !this.TICK_MARKED4;
    this.TICK_MARKED3 = false;
  }
  TickMark5() {
    this.TICK_MARKED5 = !this.TICK_MARKED5;
    this.TICK_MARKED6 = false;
  }
  TickMark6() {
    this.TICK_MARKED6 = !this.TICK_MARKED6;
    this.TICK_MARKED5 = false;
  }
  TickMark7() {
    this.TICK_MARKED7 = !this.TICK_MARKED7;
    this.TICK_MARKED8 = false;
  }
  TickMark8() {
    this.TICK_MARKED8 = !this.TICK_MARKED8;
    this.TICK_MARKED7 = false;
  }
  TickMark9() {
    this.TICK_MARKED9 = !this.TICK_MARKED9;
  }
  TickMark10() {
    this.TICK_MARKED10 = !this.TICK_MARKED10;
  }
  TickMark11() {
    this.TICK_MARKED11 = !this.TICK_MARKED11;
  }
  TickMark12() {
    this.TICK_MARKED12 = !this.TICK_MARKED12;
  }
  TickMark13() {
    this.TICK_MARKED13 = !this.TICK_MARKED13;
  }
  TickMark14() {
    this.TICK_MARKED14 = !this.TICK_MARKED14;
  }
  TickMark15() {
    this.TICK_MARKED15 = !this.TICK_MARKED15;
  }
  TickMark16() {
    this.TICK_MARKED16 = !this.TICK_MARKED16;
  }
  TickMark17() {
    this.TICK_MARKED17 = !this.TICK_MARKED17;
  }
  TickMark18() {
    this.TICK_MARKED18 = !this.TICK_MARKED18;
    this.TICK_MARKED19 = false;
  }
  TickMark19() {
    this.TICK_MARKED19 = !this.TICK_MARKED19;
    this.TICK_MARKED18 = false;
  }
}
