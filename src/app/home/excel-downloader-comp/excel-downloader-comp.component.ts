import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashBoardService } from 'src/app/service/dashboard.service';
import { DocumentService } from 'src/app/service/document.service';
import { UserService } from 'src/app/service/user.service';
import * as xlsx from 'xlsx';
import $ from 'jquery';
import { ShippingbillDataService } from 'src/app/service/homeservices/shippingbill.service';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-excel-downloader-comp',
  templateUrl: './excel-downloader-comp.component.html',
  styleUrls: ['./excel-downloader-comp.component.scss']
})
export class ExcelDownloaderCompComponent implements OnInit {
  @ViewChild('pagecontent') PARENT_DIV: ElementRef;

  TABLE_LIST_PIPO:any=[];
  tabledata:any=[];
  ALL_CHECKED:any=[];
  CHANGE_CHECK_BOX:any=[];
  checkedall:any;
  CHANGED_TABLE_NAME:string='';
  PARENT_DATA_EXCEL:any=[];
  COUNT:any=[];
  TYPE_OF_VIEW:string='Import';
  userDataListener:any=[];
  buyer: string = '';
  location:any = '';
  commodity:any = '';
  page: number = 0
  limit: number = 10
  DATA_CREATE:any=[];

  public item: any;
  public item1 = [];
  item4: any;
  recievedAmount;
  amount;
  commision;
  Comoval: any = 'Commodity';
  Locval: any = 'Location';
  nameSearch: string = 'Commodity';
  origin: any = [];
  item5: any=[];
  Originval: any = 'origin';
  item3: any=[];
  pipoValue: any = 'Select PI/PO';
  public item6 = [];

  constructor(public documentService: DocumentService,
    public dashboardService: DashBoardService,
    public shippingBillService: ShippingbillDataService,
    public wininfo: WindowInformationService,
    public userService: UserService) {
      this.userDataListener = this.userService.userDataListener$;
      this.TYPE_OF_VIEW=this.dashboardService.DASH_BOARD_TYPES!=''?this.capitalizeFirstLetter(this.dashboardService.DASH_BOARD_TYPES):'Export'
    }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'#page-content')
    this.dashboardService.getDashboardDataAll().subscribe((res:any)=>{
      console.log('getDashboardDataAll',res,this.userDataListener);
      this.PARENT_DATA_EXCEL=res[this.TYPE_OF_VIEW];
      this.TABLE_LIST_PIPO=Object.keys(this.PARENT_DATA_EXCEL)
      for (let index = 0; index <this.TABLE_LIST_PIPO.length; index++) {
        this.DATA_CREATE[this.TABLE_LIST_PIPO[index]]=[];
        this.COUNT[this.TABLE_LIST_PIPO[index]]=0;
      }
      this.getPipoData();
      this.getShippingBillExcel();
      this.getInwardAdivce();
      console.log(this.DATA_CREATE,'dasdasdasdasdsdasdasdas')
      // for (let index = 0; index < this.TABLE_LIST_PIPO.length; index++) {
      //   this.CHANGE_CHECK_BOX[this.TABLE_LIST_PIPO[index]]=false;
      //   this.ALL_CHECKED[this.TABLE_LIST_PIPO[index]]=false;
      // }
    })
    // this.Controller_of_width(280,'#page-content');
  }
  getPipoData() {
    this.documentService.getPipos(this.page, this.limit, this.commodity, this.location, this.buyer,'export').subscribe((res: any) => {
      console.log("res",res.docs)
      var temp:any=[];
      for (let index = 0; index <res.docs.length; index++) {
        temp.push({
          "Invoice No":res.docs[index]['pi_poNo'],
          "Invoice Date":res.docs[index]['purchasedate'],
          "Consignee Name":res.docs[index]['buyerName'],
          "BRANCH":res.docs[index]['location'],
          "Commodity":res.docs[index]['commodity'][0],
          "Amount":res.docs[index]['amount'],
          "Payment Term":res.docs[index]['paymentTerm'][0]['type']
        })
        if ((index+1)==res.docs.length) {
          this.DATA_CREATE['PIPO']=temp;
          this.COUNT['PIPO']=temp.length
        }
      }
    })
  }
  getShippingBillExcel(){
    this.shippingBillService.getShippingBillList().then((res: any) => {
      this.shippingBillService.shippingbills$.subscribe((data: any) => {
        var temp:any=[];
          for (let index = 0; index <data.length; index++) {
            temp.push({
              "SB DATE":data[index]['sbdate'],
              "SB NUMBER":data[index]['sbno'],
              "AD CODE":data[index]['adCode'],
              "AD BILL NO":data[index]['adBillNo'],
              "BUYER NAME":data[index]['buyerName'],
              "COMPANY NAME":data[index]['consigneeName'],
              "ORIGIN":data[index]['exporterLocationCode'],
              "DESTINATION":data[index]['countryOfFinaldestination'],
              "CURRENCY":data[index]['fobCurrency'],
              "SB AMOUNT":data[index]['fobValue'],
              "FIRX NUMBER":data[index]['firxNumber'],
              "FIRX DATE":data[index]['firxDate'],
              "FIRX CURRENCY":data[index]['firxCurrency'],
              "FIRX AMOUNT":data[index]['firxAmount'],
              "FIRX COMMISION":data[index]['firxCommision'],
              "FIRX RECIEVED AMOUNT":data[index]['firxRecAmo'],
              "AVAILABLE BALANCE":data[index]['balanceAvai']
        });
        if ((index+1)==data.length) {
          this.DATA_CREATE['Shipping bill']=temp;
          this.COUNT['Shipping bill']=temp.length
        }
      }
    });
    });
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  excelgenrator(tablename:string){
    if (this.DATA_CREATE[tablename].length!=0) {
      var wb: xlsx.WorkBook= xlsx.utils.book_new();
      this.tabledata=this.DATA_CREATE[tablename];
      const workSheet = xlsx.utils.json_to_sheet(this.tabledata)
      xlsx.utils.book_append_sheet(wb, workSheet,tablename);
      xlsx.writeFile(wb, tablename+'.xlsx');
    }else{
      alert('data not found...');
    }
  }
  // INPUT_CHECKED(key:string,value:any){
  //   this.ALL_CHECKED[key]=(this.PARENT_DATA_EXCEL[key]).length!=0?value:false;
  //   this.CHANGE_CHECK_BOX[key]=(this.PARENT_DATA_EXCEL[key]).length!=0?true:false;
  // }
  // INPUT_CHECKED_ALL(condition){
  //  if (condition) {
  //   for (let index = 0; index < this.TABLE_LIST_PIPO.length; index++) {
  //     this.CHANGE_CHECK_BOX[this.TABLE_LIST_PIPO[index]]=(this.PARENT_DATA_EXCEL[this.TABLE_LIST_PIPO[index]]).length!=0?true:false;
  //     this.ALL_CHECKED[this.TABLE_LIST_PIPO[index]]=(this.PARENT_DATA_EXCEL[this.TABLE_LIST_PIPO[index]]).length!=0?true:false;;
  //   }
  //  }else{
  //   for (let index = 0; index < this.TABLE_LIST_PIPO.length; index++) {
  //     this.CHANGE_CHECK_BOX[this.TABLE_LIST_PIPO[index]]=false;
  //     this.ALL_CHECKED[this.TABLE_LIST_PIPO[index]]=false;
  //   }
  //  }
  // }

  Controller_of_width(fixed_width,id_or_className){
    var pixels = fixed_width;
    var screenWidth = window.screen.width;
    var percentage = ( screenWidth - pixels );
    $(id_or_className).css('width',percentage+'px');

    $(window).resize(function() {
      var winWidth = document.body.clientWidth;
      var percentage = ( winWidth - pixels );
      $(id_or_className).css('width',percentage+'px');
    });
  }
  getInwardAdivce() {
    this.documentService.getIrAdvice(1).subscribe(
      (res: any) => {
        (this.item = res.data);
        for (let value of this.item) {
          if (value['file'] == 'export') {
            this.item1.push(value);
          }
        }
        this.item1.forEach((element, i) => {
          let amount = element.amount
          let commision = parseFloat(element.commision)
          let exchangeRate = parseFloat(element.exchangeRate)
          this.item1[i].recUSD = (amount - commision).toFixed(2);
          let cv = (
            parseFloat(this.item1[i].recUSD) * exchangeRate
          ).toFixed(2);
          this.item1[i].convertedAmount = cv != "NaN" ? cv: null;
        });
      },
      (err) => console.log(err)
    );
    this.userService.getTeam().subscribe(
      (data) => {
        this.location = data['data'][0]['location'];
        this.commodity = data['data'][0]['commodity'];
        this.location = this.location.filter(
          (value, index) => this.location.indexOf(value) === index
        );
        this.commodity = this.commodity.filter(
          (value, index) => this.commodity.indexOf(value) === index
        );
      },
      (error) => {
        console.log('error');
      }
    );

    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        this.item5 = res.data;
        this.merging();
        this.item5.forEach((element, i) => {
          this.origin[i] = element.countryOfFinaldestination;
        });
        this.origin = this.origin.filter(
          (value, index) => this.origin.indexOf(value) === index
        );
      },
      (err) => console.log(err)
    );

    this.documentService.getPipo().subscribe(
      (res: any) => {
        (this.item3 = res.data);
      },
      (err) => console.log(err)
    );
  }
  merging() {
    let filterForexData = [];
    if (this.item5 && this.item5.length) {
      for (let irData of this.item1) {
        for (let shippingdata of this.item5) {
          for (let i = 0; i <= irData.sbNo.length; i++) {
            if (irData.sbNo[i] == shippingdata.sbno) {
              const newVal = { ...irData };
              let sbBalance = shippingdata.fobValue;
              let irAmount = irData.amount
              let availableBalance = irAmount - sbBalance;
              if (availableBalance <= 0) {
                newVal['BalanceAvail'] = 0;
              } else {
                newVal['BalanceAvail'] = availableBalance.toFixed(2);
              }
              filterForexData.push(newVal);
            }
          }
        }
      }
      for (let irData of this.item1) {
        if(irData.sbNo.length == 0){
          const newVal = { ...irData };
          let availableBal = irData.amount
          newVal['BalanceAvail'] = availableBal.toFixed(2);
          filterForexData.push(newVal);
        }
      }

    } else {
      for (let ir of this.item1) {
        const newVal = { ...ir };
        let availableBal = ir.amount
        newVal['BalanceAvail'] = availableBal.toFixed(2);
        filterForexData.push(newVal);
      }
    }
    var temp:any=[];
    for (let index = 0; index <filterForexData.length; index++) {
        temp.push({
          "TT DATE":filterForexData[index]['date'],
          "PI/PO No.":this.getPipoNumbers(filterForexData[index]['pipo']),
          "SB Number":filterForexData[index]['sbno'],
          "Party Name":filterForexData[index]['partyName'],
          "TT Amount USD":filterForexData[index]['amount'],
          "From":filterForexData[index]['origin'],
          "Branch":filterForexData[index]['location'],
          "Description":filterForexData[index]['commodity'],
          "Recieved Date":filterForexData[index]['recievedDate'],
          "Commission/Bank Charges":filterForexData[index]['commision'],
          "Recieved Amount USD":filterForexData[index]['recUSD'],
          "Conversion Date":filterForexData[index]['conversionDate'],
          "Conversion Rate":filterForexData[index]['exchangeRate'],
          "Converted Amount":filterForexData[index]['convertedAmount'],
          "FIRX Number/ID":filterForexData[index]['billNo'],
          "Available Balance":filterForexData[index]['BalanceAvail']
        });
        if ((index+1)==filterForexData.length) {
          this.DATA_CREATE['Inward Remittances']=temp;
          this.COUNT['Inward Remittances']=temp.length
        }
    }
  }
  getPipoNumbers(data:any) {
    return data.map((x:any) => {
      return x.pi_poNo;
    });
  }
}
