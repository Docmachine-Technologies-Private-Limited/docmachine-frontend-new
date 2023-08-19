import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import $ from 'jquery'
declare var kendo: any;

@Component({
  selector: 'lc-insurance-format',
  templateUrl: './lc-insurance-format.component.html',
  styleUrls: ['./lc-insurance-format.component.scss'],
  host: { '(mouseover)': 'onClick($event)' },
})
export class LcInsuranceFormatComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  @Input('Moredata') Moredata: any = [];
  @Input('pipodata') pipodata: any = [];
  @Input('bankdata') bankdata: any = [];
  @Output('TableEvent') TableEvent: any = new EventEmitter();
  today: any = new Date();
  timeout: any = ''
  @Output('url') url = new EventEmitter();

  constructor() {
  }

  async ngOnInit() {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0');
    var yyyy = this.today.getFullYear();
    this.today = yyyy + "-" + mm + "-" + dd;
    console.log(this.data, 'adasdsadasdsadsa');

    this.timeout = setTimeout(() => {
      $(document).ready(async () => {
        if ($("#federal-bank-letter-head-2")[0] != undefined) {
          await kendo.drawing.drawDOM($("#federal-bank-letter-head-2")[0], {
            forcePageBreak: ".page-break",
            paperSize: "A4",
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.6,
            height: 500,
            multiPage: true
          }).then(async function (group) { return await kendo.drawing.exportPDF(group, {}); }).done(async (pdfdata) => {
            await this.url.emit(pdfdata);
          });
        }
      });
    }, 1000);
  }

  genratedPdf() {
    $('.lc-insurance-panel .position-btn-right').css('display', 'none');
    $(document).ready(async () => {
      if ($("#federal-bank-letter-head-2")[0] != undefined) {
        await kendo.drawing.drawDOM($("#federal-bank-letter-head-2")[0], {
          forcePageBreak: ".page-break",
          paperSize: "A4",
          margin: { top: "1cm", bottom: "1cm" },
          scale: 0.6,
          height: 500,
          multiPage: true
        }).then(async function (group) {
          return await kendo.drawing.exportPDF(group, {});
        }).done(async (pdfdata) => {
          console.log(pdfdata, "asdffsdfsdf")
          await this.url.emit(pdfdata);
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    console.log(changes, "ngOnChanges")
    this.Moredata = changes?.Moredata?.currentValue != undefined ? changes?.Moredata?.currentValue : this.Moredata;
    if (changes?.data?.currentValue != undefined) {
      this.data = changes?.data?.currentValue;
    }
  }

  popupevent(val: any) {
    this.TableEvent.emit({ value: val })
  }

  ConvertNumberToWords(number: any, currentValue: any = '') {
    const amount = number;
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    var words_string = "";
    if (number != undefined && number != null && number != '') {
      number = number.toString();
      var atemp = number.split(".");
      var number = atemp[0].split(",").join("");
      var n_length = number.length;
      if (n_length <= 9) {
        var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j]);
              n_array[i] = 0;
            }
          }
        }
        var value: any = "";
        for (var i = 0; i < 9; i++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            value = n_array[i] * 10;
          } else {
            value = n_array[i];
          }
          if (value != 0) {
            words_string += words[value] + " ";
          }
          if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
            words_string += "Crores ";
          }
          if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
            words_string += "Lakhs ";
          }
          if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
            words_string += "Thousand ";
          }
          if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
            words_string += "Hundred and ";
          } else if (i == 6 && value != 0) {
            words_string += "Hundred ";
          }
        }
        words_string = (currentValue + " " + amount + " ( " + currentValue + " " + words_string.split("  ").join(" ") + " ONLY/-)")?.toString()?.toLocaleUpperCase();
      }
    }
    return words_string;
  }
  onClick(event) {
    $('.lc-insurance-panel .position-btn-right').css('display', 'block')
    setTimeout(() => {
      $('.lc-insurance-panel .position-btn-right').css('display', 'none')
    }, 20000);
  }
}
