import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../inward.json';

@Component({
  selector: 'app-inward-remmitance',
  templateUrl: './inward-remmitance.component.html',
  styleUrls: ['./inward-remmitance.component.scss']
})
export class InwardRemmitanceComponent implements OnInit {
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public select = false;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = "";
  public allTransactions: any = [];
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  myRadio: any;
  purposeSelect = false;
  selectPurpose = false


  piPoForm = new FormGroup({
    pi_poNo: new FormControl(""),
    benneName: new FormControl(""),
    currency: new FormControl(""),
    amount: new FormControl(""),
    incoterm: new FormControl(""),
    lastDayShipment: new FormControl(""),
    paymentTerm: new FormControl(""),
    pcRefNo: new FormControl(""),
  });
  url: any;
  file: any;
  purposeCode: any;
  detail: any;
  jsondata: any;
  purposeRows: any[];
  dataJson: any;
  pgNumber = 0;
  pcNumber = 0;
  selectedPipo: boolean = false;
  selectedRowSb: boolean = false;
  item3: any;
  selectedSb: boolean;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log("hello")
  }

  ngOnInit(): void {
    //window.location.reload();
    console.log(data['default'])
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose)
    this.dataJson = this.jsondata
    this.purposeFun()

    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.showInvoice = false;
      console.log("hello")
    });
    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        console.log(res), (this.item1 = res.data);
      },
      (err) => console.log(err)
    );

    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response", res), (this.item3 = res.data);
      },
      (err) => console.log(err)
    );
  }

  searchData(e) {
    console.log(e)

    this.jsondata = []
    for (let data of this.dataJson) {
      if (data.groupname.toLowerCase().includes(e.toLowerCase())) {
        this.jsondata.push(data)
      }
      else {
        let purpose:any = []
        for (let value of data.purpose) {
          if (value.code.toLowerCase().includes(e.toLowerCase())
            || value.description.toLowerCase().includes(e.toLowerCase())) {
            purpose.push({
              "code": value.code,
              "description": value.description
            })
          }
        }
        if (purpose.length > 0) {
          this.jsondata.push({
            "groupname": data.groupname,
            "purpose": purpose
          })
        }
      }

    }
    console.log(this.jsondata.length)
    this.pgNumber = this.jsondata.length
    this.pcNumber = 0;
    for (let data of this.jsondata) {
      console.log(data.purpose.length)
      this.pcNumber = this.pcNumber + data.purpose.length
    }
    console.log(this.pcNumber)
    // console.log(this.jsondata)
    this.purposeFun()
  }

  purposeFun() {
    this.purposeRows = [];
    for (let data of this.jsondata) {
      for (let j = 0; j < data.purpose.length; j++) {
        let columns = [
          {
            text: data.groupname,
            rowSpan: data.purpose.length
          },
          {
            text: data.purpose[j].code,
            rowSpan: 1
          },
          {
            text: data.purpose[j].description,
            rowSpan: 1
          },
        ]
        if (j != 0) {
          columns.splice(0, 1);
        }
        this.purposeRows.push(columns);
      }

      //console.log(this.purposeRows)
    }

  }

  getTransactions(selectedRowValues) {
    console.log("hello111")
    console.log(selectedRowValues)
    console.log(this.file)
    if (this.purposeCode == 'P0103') {
      this.documentService.getPipoInwardTask({ pi_poNo: selectedRowValues.pi_poNo }).subscribe(
        (res: any) => {
          this.allTransactions = res.task;
          console.log("ALL TRANSACTIONS", this.allTransactions);
        },
        (err) => console.log(err)
      );
    }
    else if (this.purposeCode == 'P0102') {
      this.documentService.getSbTask({ sbno: selectedRowValues.sbno }).subscribe(
        (res: any) => {
          this.allTransactions = res.task;
          console.log("ALL TRANSACTIONS", this.allTransactions);
        },
        (err) => console.log(err)
      );
    }

  }

  getInvoices(selectedRowValues, i) {
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    this.lastIndex = i;
    this.getTransactions(selectedRowValues)
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  onExport() {
    this.export = !this.export;
  }

  onImport() {
    this.import = !this.import;
  }
  exBill() {
    this.Ax1 = !this.Ax1;
  }
  withBill() {
    this.Ax2 = !this.Ax2;
  }

  onNewTrans() {
    this.step1 = !this.step1;
  }

  toggleStep1() {
    this.step1 = false;
    this.showPdf = false;
  }

  // getTrasactions() {
  //   const data: any = this.documentService.getTask();
  //   this.allTransactions = data.task;
  // }

  viewTask(data) {
    console.log(data)
    if (!data.completed) {
      console.log(data.bank)
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;

      if (this.purposeCode == 'P0103') {
        if (this.myRadio == 'axisBank') {
          this.router.navigate(['home/inwardRemmitancep0103', { sbno: data.pi_poNo, file: data.file, detail: this.detail }]);
        }
        else if (this.myRadio == 'yesBank') {
          this.router.navigate(['home/inwardRemmitancep0103', { sbno: data.pi_poNo, file: data.file, detail: this.detail }]);
        }

      }
      if (this.purposeCode == 'P0103') {
        if (this.myRadio == 'axisBank') {
          this.router.navigate(['home/requestLetter', { sbno: data.sbno, file: data.file, detail: this.detail }]);
        }
        else if (this.myRadio == 'yesBank') {
          this.router.navigate(['home/requestLetter', { sbno: data.sbno, file: data.file, detail: this.detail }]);
        }

      }




    } else {
      this.router.navigateByUrl(`/home/completed-task/${data._id}`);
    }

  }

  showThisPdf(sbno) {
    this.documentService.task = ''
    this.documentService.draft = false;
    console.log("hello1")
    if (this.purposeCode == "P0102") {
      if (this.myRadio == 'axisBank') {
        this.router.navigate(['home/requestLetter', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
      }
      else if (this.myRadio == 'yesBank') {
        this.router.navigate(['home/requestLetter', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
      }
    }
    else if (this.purposeCode == "P0103") {
      if (this.myRadio == 'axisBank') {
        this.router.navigate(['home/inwardRemmitancep0103', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
      }
      else if (this.myRadio == 'yesBank') {
        this.router.navigate(['home/inwardRemmitancep0103', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
      }
    }



  }

  purposeClick(e, f) {
    console.log(e)
    console.log(f)
    if (e.startsWith("P0") || e.startsWith("P1")) {
      if (e == "P0103") {
        this.purposeSelect = true
        this.selectPurpose = true
        this.selectedPipo = true
      }
      if (e == "P0102") {
        this.purposeSelect = true
        this.selectPurpose = true
        this.selectedSb = true
      }



      this.purposeCode = e
      this.detail = f

    }
    // this.select = true;
    // this.purposeCode = e
    // this.detail = f
  }

  onChange() {
    this.purposeCode = ''
    this.detail = ''
    this.purposeSelect = false
  }



}

