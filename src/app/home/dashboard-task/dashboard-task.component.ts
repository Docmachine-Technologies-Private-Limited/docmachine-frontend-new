import { Component, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import {
  ChartComponent
} from "ng-apexcharts";

import { DocumentService } from '../../service/document.service';
import { DashBoardService } from '../../service/dashboard.service';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { UserService } from "../../service/user.service";
import { WindowInformationService } from '../../service/window-information.service';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
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
  isImport: boolean = false;
  public pipoChartOptions;
  public inwardChartOptions;
  public OutwardChartOptions;
  public shippingBillChartOptions;
  public PartialPendingrealisationChartOptions;
  public FullPendingrealisationChartOptions;
  public orderPendingForShipmentChartOptions;
  public packingCreditAvailedChartOptions;
  public totalBillLodgedChartOptions;
  public edpmsChartOptions;
  public BOEChartOptions: any = []
  sbChartNoData: Boolean = true;
  inwardChartNoData: Boolean = true;
  sbChart;
  BOEChart: any
  pipoChart;
  inwardChart;
  OutwardChart;
  orderShipmentChart;
  PartialPendingrealisationChart;
  FullPendingrealisationChart;
  EDPMSChart;
  packingCreditAvailedChart;
  totalBillLodgedChart;
  userData: any;
  BOE_DATA: any = [];
  BOE_PENDING_DATA: any = [];
  BOE_SUBMISSION_DATA: any = [];
  @ViewChild("chart") chart: ChartComponent;

  ORDER_PENDING_SHIPMENT_SHOW_CHART: boolean = false;
  ORDER_PENDING_SHIPMENT_SHOW_CHART_OPTIONS: any;

  TOTAL_BILL_LODGEMENT_SHOW_CHART: boolean = false;
  TOTAL_BILL_LODGEMENT_SHOW_CHART_OPTIONS: any;
  billLoedgmentPartial: any = [];
  billLoedgmentFull: any = [];
  constructor(public documentService: DocumentService, public dashboardService: DashBoardService,
    public userService: UserService, public wininfo: WindowInformationService) {
  }

  async ngOnInit() {
    this.userData = await this.userService.getUserDetail();
    console.log("userData", this.userData, this.documentService.EXPORT_IMPORT)
    this.item1 = []

    await this.documentService.getTypeExportTask({ fileType: 'BL' }).subscribe((res: any) => {
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

    await this.getDashboardData()
    await this.ChartMethod()
    await this.getOrderShipmentData()
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
    return new Promise(async (resolve, reject) => {
      await this.dashboardService.getDashboardData().subscribe((res: any) => {

        // Import data..
        this.pipoCurrencyImportData = res?.pipo?.import?.currencyWise;
        this.pipoBuyerImportData = res?.pipo?.import?.buyerWise;
        this.BOE_DATA = res?.BOE_DEATILS;
        this.BOE_PENDING_DATA = res?.Pending_BOE_Submission;
        this.BOE_SUBMISSION_DATA = res?.BOE_Submission;
        this.billLoedgmentPartial = res?.billLoedgmentPartial;
        this.billLoedgmentFull = res?.billLoedgmentFully

        console.log("pipoBuyerImportData", res, this.pipoBuyerImportData)
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
        this.inwardCurrencyImportData = this.inwardCurrencyImportData?.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        });

        this.inwardBuyerImportData = this.inwardBuyerImportData?.filter(data => {
          if (data._id) {
            return data
          }
        });

        this.SBCurrrenycyImportData = res?.ShippingBill?.currencyWise;
        this.SBbuyerImportData = res?.ShippingBill?.import?.buyerWise;
        this.SBbuyerImportData = this.SBbuyerImportData?.filter(data => {
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
        this.pipoCurrencyExportData = this.pipoCurrencyExportData?.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.pipoBuyerExportData = this.pipoBuyerExportData?.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.inwardCurrencyExportData = res?.inward?.export?.currencyWise;
        this.inwardBuyerExportData = res?.inward?.export?.buyerWise;
        this.inwardCurrencyExportData = this.inwardCurrencyExportData?.filter(data => {
          if (data._id !== null && data._id !== '') {
            return data
          }
        })

        this.inwardBuyerExportData = this.inwardBuyerExportData?.filter(data => {
          if (data._id) {
            return data
          }
        })

        this.SBCurrencyExportData = res?.ShippingBill?.currencyWise;
        this.SBbuyerExportData = res?.ShippingBill?.export?.buyerWise;

        this.SBbuyerExportData = this.SBbuyerExportData?.filter(data => {
          if (data._id) {
            return data
          }
        })

        this.shipmentPendingExport = res?.sbPendingData?.export;
        this.shipmentSubmitExport = res?.docSubmitedAndNoAwaitedData?.export;
        this.shipmentSubmitExport = this.shipmentSubmitExport?.map(data => {
          let conut = data?.blcopyrefNumber?.filter(x => !x)?.length
          return { ...data, awaitSubmit: conut }
        })

        if (this.documentService.EXPORT_IMPORT['import'] == true) {
          this.EDPMSData = res?.IDPMSData;
          this.inwardRemitanceExportData = res?.inwardRemittances?.import;
          this.OrderPendingforShipment(res?.Orderpendingforshipment?.import?.ImportData)
          this.TotalBillLodgement(res?.billLoedgmentData?.import?.ImportData)
        } else {
          this.EDPMSData = res?.EDPMSData;
          this.inwardRemitanceExportData = res?.inwardRemittances?.export;
          this.OrderPendingforShipment(res?.Orderpendingforshipment?.export?.ImportData)
          this.TotalBillLodgement(res?.billLoedgmentData?.export?.ImportData)
        }

        if (this.documentService.EXPORT_IMPORT['import'] == true) {
          this.isImport = true;
          setTimeout(() => {
            this.ChartMethod()
            setTimeout(() => {
              this.handleImportData();
            }, 200)
          }, 200)
        } else {
          this.isImport = false;
          setTimeout(() => {
            this.ChartMethod()
            setTimeout(() => {
              this.handleExportData()
            }, 200)
          }, 200)
        }
        this.documentService.EXPORT_IMPORT['callback'] = () => {
          if (this.documentService.EXPORT_IMPORT['import'] == true) {
            this.EDPMSData = res?.IDPMSData;
            this.inwardRemitanceExportData = res?.inwardRemittances?.import;
            this.OrderPendingforShipment(res?.Orderpendingforshipment?.import?.ImportData)
            this.TotalBillLodgement(res?.billLoedgmentData?.import?.ImportData)
          } else {
            this.EDPMSData = res?.EDPMSData;
            this.inwardRemitanceExportData = res?.inwardRemittances?.export;
            this.OrderPendingforShipment(res?.Orderpendingforshipment?.export?.ImportData)
            this.TotalBillLodgement(res?.billLoedgmentData?.export?.ImportData)
          }
          if (this.documentService.EXPORT_IMPORT['import'] == true) {
            this.isImport = true;
            setTimeout(() => {
              this.ChartMethod()
              setTimeout(() => {
                this.handleImportData();
              }, 200)
            }, 200)
          } else {
            this.isImport = false;
            setTimeout(() => {
              this.ChartMethod()
              setTimeout(() => {
                this.handleExportData()
              }, 200)
            }, 200)
          }
        }
        console.log("this.documentService.EXPORT_IMPORT", this.documentService.EXPORT_IMPORT)
      },
        (err) => console.log(err)
      );
    })
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

  ChartMethod() {
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
            console.log(tooltipData?.convertData[i].amount, "tooltipData")
            toolTipText += `${tooltipData?.convertData[i].currency} :${w?.config?.currencyFormat(tooltipData?.convertData[i].amount, tooltipData?.convertData[i].currency)}  <br>`

          }
          return "<div>" + toolTipText + "</div>";
        }
      },

      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        height: 50,
      }
    }

    this.OutwardChartOptions = {
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
            toolTipText += `${tooltipData?.convertData[i].currency} :${w?.config?.currencyFormat(tooltipData?.convertData[i].amount, tooltipData?.convertData[i].currency)}  <br>`

          }
          return "<div>" + toolTipText + "</div>";
        }
      },

      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
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
          console.log(w, 'sdfhsdfkjdfsdfsdfd')
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
        height: 50,
      }
    }

    this.BOEChartOptions = {
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
          let tooltipData = w?.config?.chartData
          let toolTipText = ''
          toolTipText = `${tooltipData[seriesIndex].currency} :${w?.config?.currencyFormat(tooltipData[seriesIndex].amount, tooltipData[seriesIndex].currency)}  <br>`
          return "<div>" + toolTipText + "</div>";
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        height: 50,
      }
    }

    this.PartialPendingrealisationChartOptions = {
      series: [
        {
          name: "Full",
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

    this.FullPendingrealisationChartOptions = {
      series: [
        {
          name: "Full",
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
      chart: {
        width: 270,
        type: "donut"
      },
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

    if (document.querySelector('#pipiChart') != null && document.querySelector('#pipiChart') != undefined) {
      this.pipoChart = new ApexCharts(document.querySelector('#pipiChart'), this.pipoChartOptions);
      this.pipoChart.render();
    }
    if (document.querySelector('#SBChart') != null && document.querySelector('#SBChart') != undefined) {
      this.sbChart = new ApexCharts(document.querySelector('#SBChart'), this.shippingBillChartOptions);
      this.sbChart.render();
    }
    if (document.querySelector('#BOEChart') != null && document.querySelector('#BOEChart') != undefined) {
      console.log(document.querySelector('#BOEChart'), 'document.querySelector')
      this.BOEChart = new ApexCharts(document.querySelector('#BOEChart'), this.BOEChartOptions);
      this.BOEChart.render();
    }

    if (document.querySelector('#OutwardChart') != null && document.querySelector('#OutwardChart') != undefined) {
      this.OutwardChart = new ApexCharts(document.querySelector('#OutwardChart'), this.OutwardChartOptions);
      this.OutwardChart.render();
    }

    if (document.querySelector('#inwardChart') != null && document.querySelector('#inwardChart') != undefined) {
      this.inwardChart = new ApexCharts(document.querySelector('#inwardChart'), this.inwardChartOptions);
      this.inwardChart.render();
    }
    this.EDPMSChart = new ApexCharts(document.querySelector('#EdpmsChart'), this.edpmsChartOptions);
    this.EDPMSChart.render();

    // this.orderShipmentChart = new ApexCharts(document.querySelector('#orderShipmentChart'), this.orderPendingForShipmentChartOptions);
    // this.orderShipmentChart.render();

    // this.PartialPendingrealisationChart = new ApexCharts(document.querySelector('#PartialPendingRealisationChart'), this.PartialPendingrealisationChartOptions);
    // this.PartialPendingrealisationChart.render();

    // this.FullPendingrealisationChart = new ApexCharts(document.querySelector('#FullPendingRealisationChart'), this.FullPendingrealisationChartOptions);
    // this.FullPendingrealisationChart.render();

    this.packingCreditAvailedChart = new ApexCharts(document.querySelector('#PackingCreditAvailedChart'), this.packingCreditAvailedChartOptions);
    this.packingCreditAvailedChart.render();

    // this.totalBillLodgedChart = new ApexCharts(document.querySelector('#TotalBillLodgedChart'), this.totalBillLodgedChartOptions);
    // this.totalBillLodgedChart.render();
  }

  handleImportData = () => {
    this.pipoChart.updateOptions({
      series: this.pipoBuyerImportData?.map(data => data.totalItems),
      labels: this.pipoBuyerImportData?.map(data => data._id),
      chartData: this.pipoBuyerImportData
    });

    this.BOEChart.updateOptions({
      series: this.BOE_DATA?.data?.map(data => data?.InvoiceAmountSum),
      labels: this.BOE_DATA?.data?.map(data => data?._id),
      chartData: this.BOE_DATA?.convertData
    });

    this.OutwardChart?.updateOptions({
      series: this.inwardBuyerImportData?.map(data => data.totalItems),
      labels: this.inwardBuyerImportData?.map(data => data._id),
      chartData: this.inwardBuyerImportData
    });

    this.EDPMSChart.updateOptions({
      series: [this.EDPMSData.pendingData, this.EDPMSData.uploadData],
      labels: ["Pending", "Uploaded"],
    });

    let sampleDataforSPI = [
      { _id: 'BOE for Tata consultancy', toTalcount: 5, toTalAmount: 1000 },
      { _id: 'Pending from D8amatiks', toTalcount: 9, toTalAmount: 500 },
      { _id: 'BOE from SLBT', toTalcount: 3, toTalAmount: 6000 }
    ]
    this.shipmentPending = this.shipmentPendingImport
    let sampleDataforSS = [
      { _id: 'BOE for Tata consultancy', toTalcount: 5, awaitSubmit: 2 },
      { _id: 'Pending from D8amatiks', toTalcount: 9, awaitSubmit: 6 },
      { _id: 'BOE from SLBT', toTalcount: 3, awaitSubmit: 1 }
    ]
    this.shipmentSubmit = sampleDataforSS
    if (this.inwardRemitanceExportData?.totalCount > 0) {
      let proBarValue = this.calculatePercentage(this.inwardRemitanceExportData?.importInwardData[0]?.pendingCount, this.inwardRemitanceExportData?.totalCount)
      if (proBarValue) {
        this.progressBarvalue = proBarValue
        this.inwardRemitanceAmount = this.inwardRemitanceExportData?.importInwardData[0]?.toTalAmount
        this.inwardRemitanceTotalCount = this.inwardRemitanceExportData?.totalCount
        this.inwardRemitancePendingCount = this.inwardRemitanceExportData?.importInwardData[0]?.pendingCount
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

  handleExportData = () => {
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

    this.inwardChart?.updateOptions({
      series: this.inwardBuyerExportData?.map(data => data.totalItems),
      labels: this.inwardBuyerExportData?.map(data => data._id),
      chartData: this.inwardBuyerExportData
    });

    this.EDPMSChart.updateOptions({
      series: [this.EDPMSData.pendingData, this.EDPMSData.uploadData],
      labels: ["Pending", "Uploaded"],
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

  handleOrderShipmentExport() {
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

  OrderPendingforShipment(data: any) {
    var dataPointsAmount: any = [];
    var dataPointsInovice: any = [];
    var dataPointsCurrency: any = [];
    data?.forEach(element => {
      dataPointsAmount?.push(element?.totalAmount)
      dataPointsInovice?.push(element?.totalItems)
      dataPointsCurrency?.push(element?._id)
    });
    this.ORDER_PENDING_SHIPMENT_SHOW_CHART = true;
    setTimeout(() => {
      var options = {
        series: [{
          name: 'No of Invoice',
          type: 'column',
          data: dataPointsInovice
        }, {
          name: 'Amount',
          type: 'line',
          data: dataPointsAmount
        }],
        chart: {
          height: 230,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: dataPointsCurrency,
        yaxis: [{
          title: {
            text: 'No of Invoice',
          },
        }, {
          opposite: true,
          title: {
            text: 'Amount'
          }
        }]
      };

      var chart: any = new ApexCharts(document.querySelector("#ORDER_PENDING_SHIPMENT_SHOW_CHART_OPTIONS"), options);
      chart?.render();

      console.log(data, dataPointsAmount, dataPointsInovice,dataPointsCurrency, "newChart")
    }, (150 * data?.length));
  }

  TotalBillLodgement(data: any) {
    var dataPointsAmount: any = [];
    var dataPointsInovice: any = [];
    var dataPointsCurrency: any = [];
    data?.forEach(element => {
      dataPointsAmount?.push(element?.totalAmount)
      dataPointsInovice?.push(element?.totalItems)
      dataPointsCurrency?.push(element?._id)
    });
    this.TOTAL_BILL_LODGEMENT_SHOW_CHART = true;
    setTimeout(() => {
      var options = {
        series: [{
          name: 'No of Bill Ref.',
          type: 'column',
          data: dataPointsInovice
        }, {
          name: 'Amount',
          type: 'line',
          data: dataPointsAmount
        }],
        chart: {
          height: 230,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: dataPointsCurrency,
        yaxis: [{
          title: {
            text: 'No of Bill Ref.',
          },
        }, {
          opposite: true,
          title: {
            text: 'Amount'
          }
        }]
      };

      var chart: any = new ApexCharts(document.querySelector("#TOTAL_BILL_LODGEMENT_SHOW_CHART_OPTIONS"), options);
      chart?.render();

      console.log(data, dataPointsAmount, dataPointsInovice,dataPointsCurrency, "newChart")
    }, (150 * data?.length));
  }
}
