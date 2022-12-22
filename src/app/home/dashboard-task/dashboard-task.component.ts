import { Component, OnInit, ViewChild } from '@angular/core';

import ApexCharts from 'apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

import { DocumentService } from '../../service/document.service';
import { DashBoardService } from '../../service/dashboard.service';

import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { UserService } from "../../service/user.service";


@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['../../../sass/application.scss', './dashboard-task.component.scss']
})



export class DashboardTaskComponent implements OnInit {

  progressBarMode: ProgressBarMode = 'determinate';
  progressBarvalue = 0;
  bufferValue = 75;

  ospType: any = 'Day';
  ospData: any = ['Day', 'Week', 'Month', 'Financial Quarter', 'Year',];
  item: any;
  item1: any = [];
  playerName: any;
  nt: boolean;
  nt2: boolean;
  nt3: boolean;
  nt4: boolean;
  progress: 100
  pipoCurrencyImportData: any = [];
  pipoCurrencyExportData: any = [];

  pipoBuyerImportData: any = [];
  pipoBuyerExportData: any = [];

  inwardCurrencyImportData: any = [];
  inwardCurrencyExportData: any = [];

  inwardBuyerImportData: any = [];
  inwardBuyerExportData: any = [];

  SBCurrrenycyImportData: any = [];
  SBCurrencyExportData: any = [];


  SBbuyerImportData: any = [];
  SBbuyerExportData: any = [];

  inwardRemitanceImportData: any = [];
  inwardRemitanceExportData: any = [];
  inwardRemitanceAmount: any = 0;
  inwardRemitanceTotalCount: any = 0;
  inwardRemitancePendingCount: any = 0;

  shipmentPending: any[]
  shipmentPendingImport: any = [];
  shipmentPendingExport: any = [];


  shipmentSubmit: any[]
  shipmentSubmitImport: any = [];
  shipmentSubmitExport: any = [];


  EDPMSData: any = [];



  orderPendingShipment: any
  orderPendingShipmentImport: any = [];
  orderPendingShipmentExport: any = [];

  isImport:boolean = false;
  public pipoChartOptions;

  public inwardChartOptions;
  public shippingBillChartOptions;
  public PendingrealisationChartOptions;
  public orderPendingForShipmentChartOptions;
  public packingCreditAvailedChartOptions;
  public totalBillLodgedChartOptions;
  public edpmsChartOptions;


  sbChartNoData: Boolean = true;
  inwardChartNoData: Boolean = true;

  sbChart;
  pipoChart;
  inwardChart;
  orderShipmentChart;
  PendingrealisationChart;
  EDPMSChart;
  packingCreditAvailedChart;
  totalBillLodgedChart;
  userData: any;

  @ViewChild("chart") chart: ChartComponent;

  constructor(public documentService: DocumentService, public dashboardService: DashBoardService, public userService: UserService) {
    // this.ChartMethod()

  }

  async ngOnInit() {

    this.userData = await this.userService.getUserDetail();
    // this.userData = this.userData.result
    console.log("userData", this.userData, this.documentService.EXPORT_IMPORT)
    this.item1 = []

    this.documentService.getTypeExportTask({ fileType: 'BL' }).subscribe(
      (res: any) => {

        this.item = res.data

        for (let value of this.item) {

          if (!value.task[0].bankRef && value.completed == 'yes') {
            this.item1.push(value)
          }

        }
        console.log(this.item1)
      },
      (err) => console.log(err)
    );



    this.getDashboardData()
    this.ChartMethod()
    this.getOrderShipmentData()
  }
  public manage1Task() {
    this.nt = !this.nt;
  }
  public manage2Task() {
    this.nt2 = !this.nt2;
  }
  public manage3Task() {
    this.nt3 = !this.nt3;
  }
  public manage4Task() {
    this.nt4 = !this.nt4;
  }

  getDashboardData = () => {
    this.dashboardService.getDashboardData().subscribe(
      (res: any) => {
        // Import data..
        this.pipoCurrencyImportData = res?.pipo?.import?.currencyWise;
        this.pipoBuyerImportData = res?.pipo?.import?.buyerWise;
        console.log("pipoBuyerImportData", this.pipoBuyerImportData)
        this.pipoCurrencyImportData = this.pipoCurrencyImportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.pipoBuyerImportData = this.pipoBuyerImportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.inwardCurrencyImportData = res?.inward?.import?.currencyWise;
        this.inwardBuyerImportData = res?.inward?.import?.buyerWise;
        this.inwardCurrencyImportData = this.inwardCurrencyImportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        });
        this.inwardBuyerImportData = this.inwardBuyerImportData.filter(data => {
          if (data._id) {
            return data
          }
        });
        this.SBCurrrenycyImportData = res?.ShippingBill?.currencyWise;
        this.SBbuyerImportData = res?.ShippingBill?.import?.buyerWise;
        this.SBbuyerImportData = this.SBbuyerImportData.filter(data => {
          if (data._id) {
            return data
          }
        });
        this.inwardRemitanceImportData = res?.inwardRemittances?.import;
        this.shipmentPendingImport = res?.sbPendingData?.import;
        this.shipmentSubmitImport = res?.docSubmitedAndNoAwaitedData?.import;

        // Export data
        this.pipoCurrencyExportData = res?.pipo?.export?.currencyWise;
        this.pipoBuyerExportData = res?.pipo?.export?.buyerWise;
        this.pipoCurrencyExportData = this.pipoCurrencyExportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })
        this.pipoBuyerExportData = this.pipoBuyerExportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.inwardCurrencyExportData = res?.inward?.export?.currencyWise;
        this.inwardBuyerExportData = res?.inward?.export?.buyerWise;
        this.inwardCurrencyExportData = this.inwardCurrencyExportData.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })
        this.inwardBuyerExportData = this.inwardBuyerExportData.filter(data => {
          if (data._id) {
            return data
          }
        })
        this.SBCurrencyExportData = res?.ShippingBill?.currencyWise;
        this.SBbuyerExportData = res?.ShippingBill?.export?.buyerWise;

        this.SBbuyerExportData = this.SBbuyerExportData.filter(data => {
          if (data._id) {
            return data
          }
        })

        this.inwardRemitanceExportData = res?.inwardRemittances?.export;
        this.EDPMSData = res?.EDPMSData;
        this.shipmentPendingExport = res?.sbPendingData?.export;
        this.shipmentSubmitExport = res?.docSubmitedAndNoAwaitedData?.export;
        this.shipmentSubmitExport = this.shipmentSubmitExport.map(data => {
          let conut = data?.blcopyrefNumber?.filter(x => !x)?.length
          return { ...data, awaitSubmit: conut }
        })
        if (this.documentService.EXPORT_IMPORT['import'] == true) {
          this.handleImportData();
        } else {
          this.handleExportData()
        }
        this.documentService.EXPORT_IMPORT['callback'] = () => {
          if (this.documentService.EXPORT_IMPORT['import'] == true) {
            this.handleImportData();
          } else {
            this.handleExportData()
          }
        }
        console.log("this.documentService.EXPORT_IMPORT", this.documentService.EXPORT_IMPORT)
      },
      (err) => console.log(err)
    );
  }

  getOrderShipmentData = () => {
    this.dashboardService.getOrderShipment(this.ospType).subscribe((res: any) => {
      console.log("res", res)
      this.orderPendingShipment = res
      this.orderPendingShipmentImport = res?.import
      this.orderPendingShipmentExport = res?.export
      this.handleOrderShipmentExport()
    }, (err) => {

    })
  }

  ChartMethod = () => {
    // pipi chart
    this.pipoChartOptions = {
      chart: {
        width: '100%',
        type: "donut"
      },
      noData: {
        text: "No Data",
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 10,
        offsetY: 10,
        style: {
          color: '#999',
          fontSize: '14px',
          fontFamily: undefined,
        }
      },
      labels: [],
      colors: ["#06B175", "#114B72", "#FC5E5E", "#FC5E5E", "#51AEE5", '#d61e40', '#de18b0', '#3e93de', '#21db78'],
      dataLabels: {
        enabled: false
      },
      chartData: [],
      currencyFormat: this.currencyFormate,
      series: [],
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          let tooltipData = w?.config?.chartData[seriesIndex]
          let toolTipText = ''
          for (let i = 0; i < tooltipData?.convertData?.length; i++) {
            toolTipText += `${tooltipData?.convertData[i].currency} :${w?.config?.currencyFormat(tooltipData?.convertData[i].amount, tooltipData?.convertData[i].currency)}  <br>`
          }
          return "<div>" + toolTipText + "</div>";
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        // width: 30,
        height: 50,
      }
    }


    this.inwardChartOptions = {
      chart: {
        width: '100%',
        type: "donut"
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '8px',
            maxWidth: 30,
          },
        }
      },
      noData: {
        text: "No Data",
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#999',
          fontSize: '14px',
          fontFamily: undefined
        }
      },
      labels: [],
      colors: ["#FF962C", "#E6DF2A", "#39539E", "#DCA1DC", '#24f0ce', '#e6542c', '#ed5396', '#a524bf', '#a524bf'],
      dataLabels: {
        enabled: false
      },
      chartData: [],
      currencyFormat: this.currencyFormate,

      series: [],
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          let tooltipData = w?.config?.chartData[seriesIndex]
          let toolTipText = ''
          for (let i = 0; i < tooltipData?.convertData?.length; i++) {
            // toolTipText += `${tooltipData?.convertData[i].currency} :${tooltipData?.convertData[i].amount} <br> `
            toolTipText += `${tooltipData?.convertData[i].currency} :${w?.config?.currencyFormat(tooltipData?.convertData[i].amount, tooltipData?.convertData[i].currency)}  <br>`

          }
          return "<div>" + toolTipText + "</div>";
        }
      },

      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        // width: 30,
        height: 50,
      }
    }

    this.shippingBillChartOptions = {
      chart: {
        width: '100%',
        type: "donut"
      },
      noData: {
        text: "No Data",
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#999',
          fontSize: '14px',
          fontFamily: undefined
        }
      },
      labels: [],
      colors: ["#A973B8", "#DDC273", "#E07C97", "#DCA1DC", '#deed0e', '#1aeb2b', '#e35c36', '#4870db', '#24f0ce'],
      dataLabels: {
        enabled: false
      },
      chartData: [],
      currencyFormat: this.currencyFormate,
      series: [],
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          let tooltipData = w?.config?.chartData[seriesIndex]
          let toolTipText = ''
          for (let i = 0; i < tooltipData?.convertData?.length; i++) {
            // toolTipText += `${tooltipData?.convertData[i].currency} :${tooltipData?.convertData[i].amount}  <br>`
            toolTipText += `${tooltipData?.convertData[i].currency} :${w?.config?.currencyFormat(tooltipData?.convertData[i].amount, tooltipData?.convertData[i].currency)}  <br>`

          }
          return "<div>" + toolTipText + "</div>";
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        // width: 30,
        height: 50,
      }
    }


    this.PendingrealisationChartOptions = {
      series: [
        {
          name: "distibuted",
          data: [25, 70, 60, 30, 40, 80]
        }
      ],
      chart: {
        height: 180,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [

          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",

        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.orderPendingForShipmentChartOptions = {
      series: [],

      chart: {
        type: 'bar',
        height: 220,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          let data = series[0]
          return data[dataPointIndex]
        }
      },
      xaxis: {
        categories: ['Partial', 'Full'],
      }
    };

    this.packingCreditAvailedChartOptions = {
      series: [
        {
          name: "distibuted",
          data: [40, 60, 30, 70, 45, 80]
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [

          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",

        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.totalBillLodgedChartOptions = {
      series: [
        {
          name: "distibuted",
          data: [40, 60, 30, 70, 45, 80]
        }
      ],
      chart: {
        height: 200,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [

          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",

        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.edpmsChartOptions = {
      series: [],
      // series: [44, 55, 13, 43, 22],
      chart: {
        width: 270,
        type: "donut"
      },
      // labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      labels: [],

      colors: ["#51AEE5", "#4CC78A", "#E07C97", "#DCA1DC"],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },

            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            }
          }
        }
      ]
    };




    this.pipoChart = new ApexCharts(document.querySelector('#pipiChart'), this.pipoChartOptions);
    this.pipoChart.render();



    this.sbChart = new ApexCharts(document.querySelector('#SBChart'), this.shippingBillChartOptions);
    this.sbChart.render();


    this.inwardChart = new ApexCharts(document.querySelector('#inwardChart'), this.inwardChartOptions);
    this.inwardChart.render();
    console.log(this.edpmsChartOptions, 'this.edpmsChartOptions')
    this.EDPMSChart = new ApexCharts(document.querySelector('#EdpmsChart'), this.edpmsChartOptions);
    this.EDPMSChart.render();

    this.orderShipmentChart = new ApexCharts(document.querySelector('#orderShipmentChart'), this.orderPendingForShipmentChartOptions);
    this.orderShipmentChart.render();

    this.PendingrealisationChart = new ApexCharts(document.querySelector('#PendingRealisationChart'), this.PendingrealisationChartOptions);
    this.PendingrealisationChart.render();

    this.packingCreditAvailedChart = new ApexCharts(document.querySelector('#PackingCreditAvailedChart'), this.packingCreditAvailedChartOptions);
    this.packingCreditAvailedChart.render();

    this.totalBillLodgedChart = new ApexCharts(document.querySelector('#TotalBillLodgedChart'), this.totalBillLodgedChartOptions);
    this.totalBillLodgedChart.render();

    // this.edpmsChart.series = [this.EDPMSData.pendingData, this.EDPMSData.uploadData]
    // this.edpmsChart.labels = ['Pending', "Upload"]


  }



  handleImportData = () => {
    this.isImport = true
    // this.pipoChart.updateOptions({
    //   series: this.pipoBuyerImportData?.map(data => data.totalItems),
    //   labels: this.pipoBuyerImportData?.map(data => data._id),
    //   chartData: this.pipoBuyerImportData
    // });

    this.pipoChart.updateOptions({
      series: [44, 55, 41, 17],
      labels: ['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4'],
      // chartData: this.pipoBuyerImportData
    });

    // this.sbChart.updateOptions({
    //   series: this.SBbuyerImportData?.map(data => data.totalItems),
    //   labels: this.SBbuyerImportData?.map(data => data._id),
    //   chartData: this.SBbuyerImportData
    // });

    this.sbChart.updateOptions({
      series: [44, 55, 41, 17],
      labels: ['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4'],
    });

    this.inwardChart.updateOptions({
      series: [60, 15, 25, 51],
      labels: ['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4'],
    });

    // this.inwardChart.updateOptions({
    //   series: this.inwardBuyerImportData?.map(data => data.totalItems),
    //   labels: this.inwardBuyerImportData?.map(data => data._id),
    //   chartData: this.inwardBuyerImportData
    // });

    // this.EDPMSChart.updateOptions({
    //   series: [this.EDPMSData.pendingData, this.EDPMSData.uploadData],
    //   labels: ["Pending", "Upload"],
      
    // });

    this.EDPMSChart.updateOptions({
      series: [15, 80],
      labels: ["Pending", "Upload"],
    });

    // this.shipmentPending = this.shipmentPendingImport

    let sampleDataforSPI = [
      { _id: 'BOE for Tata consultancy', toTalcount: 5, toTalAmount: 1000 },
      { _id: 'Pending from D8amatiks', toTalcount: 9, toTalAmount: 500 },
      { _id: 'BOE from SLBT', toTalcount: 3, toTalAmount: 6000 }
    ]
    this.shipmentPending = sampleDataforSPI
    let sampleDataforSS = [
      { _id: 'BOE for Tata consultancy', toTalcount: 5, awaitSubmit: 2 },
      { _id: 'Pending from D8amatiks', toTalcount: 9, awaitSubmit: 6 },
      { _id: 'BOE from SLBT', toTalcount: 3, awaitSubmit: 1 }
    ]
    // this.shipmentSubmit = this.shipmentSubmitImport  
    this.shipmentSubmit = sampleDataforSS


    // if (this.inwardRemitanceImportData?.totalCount > 0) {
    //   let proBarValue = this.calculatePercentage(this.inwardRemitanceImportData?.importInwardData[0]?.pendingCount, this.inwardRemitanceImportData?.totalCount)
    //   if (proBarValue) {
    //     this.progressBarvalue = proBarValue
    //     this.inwardRemitanceAmount = this.inwardRemitanceImportData?.importInwardData[0]?.toTalAmount

    //     this.inwardRemitanceTotalCount = this.inwardRemitanceImportData?.totalCount
    //     this.inwardRemitancePendingCount = this.inwardRemitanceImportData?.importInwardData[0]?.pendingCount

    //   } else {
    //     this.progressBarvalue = 0
    //     this.inwardRemitanceAmount = 0
    //     this.inwardRemitanceTotalCount = 0
    //     this.inwardRemitancePendingCount = 0
    //   }
    // } else {
    //   this.progressBarvalue = 0
    //   this.inwardRemitanceAmount = 0
    //   this.inwardRemitanceTotalCount = 0
    //   this.inwardRemitancePendingCount = 0
    // }

    this.progressBarvalue = 80
    this.inwardRemitanceAmount = 15000
    this.inwardRemitanceTotalCount = 65000
    this.inwardRemitancePendingCount = 10
  }



  handleExportData = () => {
    this.isImport = false
    this.pipoChart.updateOptions({
      series: this.pipoBuyerExportData?.map(data => data.totalItems),
      labels: this.pipoBuyerExportData?.map(data => data._id),
      chartData: this.pipoBuyerExportData
    });

    this.sbChart.updateOptions({
      series: this.SBbuyerExportData?.map(data => data.totalItems),
      labels: this.SBbuyerExportData?.map(data => data._id),
      chartData: this.SBbuyerExportData
    });

    this.inwardChart.updateOptions({
      series: this.inwardBuyerExportData?.map(data => data.totalItems),
      labels: this.inwardBuyerExportData?.map(data => data._id),
      chartData: this.inwardBuyerExportData
    });


    this.inwardChart.updateOptions({
      series: this.inwardBuyerExportData?.map(data => data.totalItems),
      labels: this.inwardBuyerExportData?.map(data => data._id),
      chartData: this.inwardBuyerExportData
    });

    this.EDPMSChart.updateOptions({
      series: [this.EDPMSData.pendingData, this.EDPMSData.uploadData],
      labels: ["Pending", "Upload"],
      // chartData: this.inwardBuyerImportData
    });
    console.log(this.EDPMSData.pendingData, this.EDPMSData.uploadData, 'asdsadsadsadadasdasdsadsadsadsad')


    this.shipmentPending = this.shipmentPendingExport
    this.shipmentSubmit = this.shipmentSubmitExport
    console.log('inwardRemitanceExportData', this.inwardRemitanceExportData)

    if (this.inwardRemitanceExportData?.totalCount > 0) {
      let proBarValue = this.calculatePercentage(this.inwardRemitanceExportData?.exportInwardData[0]?.pendingCount, this.inwardRemitanceExportData?.totalCount)
      if (proBarValue) {
        this.progressBarvalue = proBarValue
        this.inwardRemitanceAmount = this.inwardRemitanceExportData?.exportInwardData[0]?.toTalAmount
        this.inwardRemitanceTotalCount = this.inwardRemitanceExportData?.totalCount
        this.inwardRemitancePendingCount = this.inwardRemitanceExportData?.exportInwardData[0]?.pendingCount
      } else {
        this.progressBarvalue = 0
        this.inwardRemitanceAmount = 0
        this.inwardRemitanceTotalCount = 0
        this.inwardRemitancePendingCount = 0
      }
    } else {
      this.progressBarvalue = 0
      this.inwardRemitanceAmount = 0
      this.inwardRemitanceTotalCount = 0
      this.inwardRemitancePendingCount = 0
    }

  }


  handleOrderShipmentImport() {

  }


  handleOrderShipmentExport() {
    // series:
    let chartData = [this.orderPendingShipmentExport.pendingCount, this.orderPendingShipmentExport.fullCount]
    console.log("chartData", chartData)
    this.orderShipmentChart.updateOptions({
      series: [{
        data: chartData,
      }],

    });
  }


  onSubmit(a, b) {
    console.log(a.target.player.value)
    console.log(b)
    b.task[0].bankRef = a.target.player.value
    b.completed = 'yes'
    console.log(b)
    this.documentService.updateExportTask(b, b._id).subscribe(
      (data) => {
        console.log("king123");
        console.log(data);
        this.ngOnInit()
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      (error) => {
        console.log("error");
      }
    );
  }
  calculatePercentage(partialValue, totalValue) {
    let value = (100 * partialValue) / totalValue;
    return Math.round(value)
  }

  currencyFormate(number, currencyType) {

    try {
      return number.toLocaleString('en-US', { style: 'currency', currency: currencyType });
    }
    catch (error) {
      var nf = Intl.NumberFormat();
      return nf.format(number)
    }
  }

  ospTypeChange(data) {
    console.log("change", this.ospType)
    this.getOrderShipmentData()
  }
}
