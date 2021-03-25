import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../sass/application.scss','./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public item;
  constructor() { }

  ngOnInit(): void {
    this.item = [{
      "sbno":"7551320",
      "sbdate":"29-DEC-20",
      "mawbno":"09882244646",
      "mawbdate":"",
      "hawbno": "",
      "hawbdate":"",
      "invoices": [
        {
          "sno":"1",
          "invoiceno":"90002102883",
          "amount": "7800",
          "currency":"USD"
        },
        {
          "sno":"2",
          "invoiceno":"90002102883",
          "amount": "11133",
          "currency":"USD"
        }
      ],
      "fob":"1377375.75",
      "freight":"0",
      "insurence": "0",
      "discount":"0",
      "com":"0",
      "countryofdischarge":"india"
      
    },
    {
      "sbno":"7551320",
      "sbdate":"29-DEC-20",
      "mawbno":"09882244646",
      "mawbdate":"",
      "hawbno": "",
      "hawbdate":"",
      "invoices": [
        {
          "sno":"1",
          "invoiceno":"90002102883",
          "amount": "7800",
          "currency":"USD"
        },
        {
          "sno":"2",
          "invoiceno":"90002102883",
          "amount": "11133",
          "currency":"USD"
        }
      ],
      "fob":"1377375.75",
      "freight":"0",
      "insurence": "0",
      "discount":"0",
      "com":"0",
      "countryofdischarge":"india"
      
    },
    {
      "sbno":"7551320",
      "sbdate":"29-DEC-20",
      "mawbno":"09882244646",
      "mawbdate":"",
      "hawbno": "",
      "hawbdate":"",
      "invoices": [
        {
          "sno":"1",
          "invoiceno":"90002102883",
          "amount": "7800",
          "currency":"USD"
        },
        {
          "sno":"2",
          "invoiceno":"90002102883",
          "amount": "11133",
          "currency":"USD"
        }
      ],
      "fob":"1377375.75",
      "freight":"0",
      "insurence": "0",
      "discount":"0",
      "com":"0",
      "countryofdischarge":"india"
      
    }]
  }

}
