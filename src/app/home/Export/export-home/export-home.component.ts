import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../../inward.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-export-home',
  templateUrl: './export-home.component.html',
  styleUrls: ['./export-home.component.scss']
})
export class ExportHomeComponent implements OnInit {
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
  public Question1 = '';
  public Question2 = '';
  public Question3 = '';
  public Question4 = '';
  public Question5 = '';
  public allTransactions: any = [];
  public generateIndex;
  lodgement1: any;
  lodgement2: any;
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  myRadio: any;
  myRadio1: any;
  myRadio2: any;
  myRadio3: any;
  myRadio4: any;
  myRadio5: any;
  myRadio6: any;
  purposeSelect = false;
  selectPurpose = false
  public selectedPurpose: any = [];
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
  proceed: boolean = true;
  c: any;
  pipoArray: any = [];
  sbArray: any = [];
  tryArray: any = [];
  bankReference: any;
  generate0: boolean = false;
  generate3: boolean = false;
  generate1: boolean = false;
  generate2: boolean = false;
  generate4: boolean = false;
  generate5: boolean = false;
  generate6: boolean = false;
  data4: any;
  data5: any;
  data6: any;
  data7: any = [];
  done: boolean;
  doc: any = [];
  generate: boolean;
  generatePurpose: any = [];
  sbPurpose: any = [];
  sbPurpose1: any = [];
  importPurpose: any = [];
  noImportPurpose: any = [];
  donePurpose: any = [];
  doneSbPurpose: any = [];
  doneImportPurpose: any = [];
  mailArray: any = [];
  mainDoc: any = [];
  mainDoc1: any = [];
  mainDoc2: any = [];
  mainDoc3: any = [];
  doc1: boolean;
  data8: any = [];
  data9: any = [];
  dataImport: any = [];
  sbPurposeDone1: any = [];
  item4: any;
  bankRef: any;
  newTask: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  arr: any;
  item5: any;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService
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
    this.documentService.getThird().subscribe(
      (res: any) => {
        console.log("HEre Response Third", res), (this.item4 = res.data);
      },
      (err) => console.log(err)
    );

    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'][0])
          this.item5 = data['data'][0]
          console.log(this.item5)
          this.arr = this.item5.gst.split('');
          console.log(this.arr)
          //this.letterHead = data['data'][0].file[0]["Letter Head"]
          //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });
  }

  changeCheckbox(value) {
    let j = this.pipoArray.indexOf(value)
    if (j == -1) {
      this.pipoArray.push(value)
    }
    else {
      this.pipoArray.splice(j, 1)
    }

    console.log(this.pipoArray)
  }

  changeCheckbox1(value) {
    let j = this.sbArray.indexOf(value)
    if (j == -1) {
      this.sbArray.push(value)
    }
    else {
      this.sbArray.splice(j, 1)
    }

    console.log(this.sbArray)
  }

  changeCheckbox2(value) {
    let j = this.tryArray.indexOf(value)
    if (j == -1) {
      this.tryArray.push(value)
    }
    else {
      this.tryArray.splice(j, 1)
    }

    console.log(this.tryArray)
  }

  searchData(e) {
    console.log(e)

    this.jsondata = []
    for (let data of this.dataJson) {
      if (data.groupname.toLowerCase().includes(e.toLowerCase())) {
        this.jsondata.push(data)
      }
      else {
        let purpose = []
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



  viewTask(data) {
    console.log(data)
    if (!data.completed) {
      console.log(data.bank)
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;

      // if (this.purposeCode == 'P0103') {
      //   if (this.myRadio == 'axisBank') {
      //     this.router.navigate(['home/inwardRemmitancep0103', { sbno: data.pi_poNo, file: data.file, detail: this.detail }]);
      //   }
      //   else if (this.myRadio == 'yesBank') {
      //     this.router.navigate(['home/inwardRemmitancep0103', { sbno: data.pi_poNo, file: data.file, detail: this.detail }]);
      //   }

      // }
      // if (this.purposeCode == 'P0103') {
      //   if (this.myRadio == 'axisBank') {
      //     this.router.navigate(['home/requestLetter', { sbno: data.sbno, file: data.file, detail: this.detail }]);
      //   }
      //   else if (this.myRadio == 'yesBank') {
      //     this.router.navigate(['home/requestLetter', { sbno: data.sbno, file: data.file, detail: this.detail }]);
      //   }

      // }




    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }

  }

  showThisPdf(sbno) {
    this.documentService.task = ''
    this.documentService.draft = false;
    console.log("hello1")
    // if (this.purposeCode == "P0102") {
    //   if (this.myRadio == 'axisBank') {
    //     this.router.navigate(['home/requestLetter', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
    //   }
    //   else if (this.myRadio == 'yesBank') {
    //     this.router.navigate(['home/requestLetter', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
    //   }
    // }
    // else if (this.purposeCode == "P0103") {
    //   if (this.myRadio == 'axisBank') {
    //     this.router.navigate(['home/inwardRemmitancep0103', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
    //   }
    //   else if (this.myRadio == 'yesBank') {
    //     this.router.navigate(['home/inwardRemmitancep0103', { sbno: sbno, file: this.purposeCode, detail: this.detail }]);
    //   }
    // }



  }
  generateDoc(code, j) {
    this.generate = true
    this.generatePurpose[j] = code;

    let generateDoc1: any = [];
    for (let item of this.item3) {
      for (let pipo of this.pipoArray) {
        if (item.pi_poNo === pipo) {
          generateDoc1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            item.doc
          ))
        }
      }
    }
    this.mainDoc[j] = generateDoc1
    console.log(this.doc)
    console.log(this.generate1)
    console.log(this.c)
  }

  generateDoc1(code, j) {
    console.log(code, j)
    this.generate = true
    this.sbPurpose[j] = code;
    if (this.Question5 == 'yes') {
      console.log("shdhshs")
      this.sbPurpose1[j] = code;
    }
    let generateDoc2: any = [];
    for (let item of this.item1) {
      for (let sb of this.sbArray) {
        if (item.sbno === sb) {
          generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            item.doc
          ))
        }
      }
    }
    this.mainDoc1[j] = generateDoc2

    let generateDoc3: any = [];
    if (this.Question2 == 'yes') {
      for (let item of this.item4) {
        for (let sb of this.tryArray) {
          if (item.thirdNumber === sb) {
            generateDoc3.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc
            ))
          }
        }
      }
      this.mainDoc3[j] = generateDoc3
    }

    console.log(this.mainDoc1[j])
    console.log(this.generate1)
    console.log(this.c)
  }

  generateDoc2(code, j) {
    console.log(code, j)
    this.generate = true
    if (this.Question4 == 'yes') {
      this.importPurpose[j] = code;
    }
    else if (this.Question4 == 'no') {
      this.noImportPurpose[j] = code;
    }



    let generateDoc2: any = [];
    for (let item of this.item4) {
      for (let sb of this.tryArray) {
        if (item.thirdNumber === sb) {
          generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            item.doc
          ))
        }
      }
    }

    console.log(this.importPurpose[j])
    console.log(this.sbPurpose[j])
    this.mainDoc2[j] = generateDoc2
    console.log(this.mainDoc2[j])
    console.log(this.generate1)
    console.log(this.c)
  }

  exportAsPDF(code, i) {
    this.donePurpose[i] = code;
    const height =
      Math.round($("#mainId").outerHeight() * 0.0104166667 * 10) / 10;
    console.log($("#mainId").html());
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        template:
          "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
      })
      .subscribe((data) => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
          console.log(this.data5)
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.data5
          );
          console.log(this.data6)
          this.data7[i] = this.data6
          //this.newTask.url1 = this.data5;
          this.done = true;
          //this.downloadPDF(data);
          this.zToggle[i] = true;
          this.newTask[i] = {
            pipoNumbers: this.pipoArray,
            pipoUrls: this.mainDoc[i],
            purposeCode: code,
            generateDoc1: this.data7[i]
          }
          console.log(this.newTask[i])
          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }
        }
      });


  }


  doneDox() {

    console.log(this.newTask)
    this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'IRD' }).subscribe(
      (res) => {
        this.toastr.success('Task saved successfully!');
        console.log("Transaction Saved");
        this.router.navigate(["/home/dashboardNew"]);

      },
      (err) => {
        this.toastr.error('Error!');
        console.log("Error saving the transaction")
      }
    );
  }

  exportAsPDF1(code, i) {
    console.log(code, i)
    this.doneSbPurpose[i] = code;
    const height =
      Math.round($("#mainId").outerHeight() * 0.0104166667 * 10) / 10;
    console.log($("#mainId").html());
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        template:
          "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
      })
      .subscribe((data) => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
          console.log(this.data5)
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.data5
          );
          console.log(this.data6)
          this.data8[i] = this.data6
          console.log(this.data8[i])
          //this.newTask.url1 = this.data5;
          this.done = true;
          console.log(this.sbPurpose1[i])
          console.log(code)
          if (this.sbPurpose1[i] == code) {
            const height1 =
              Math.round($("#mainId1").outerHeight() * 0.0104166667 * 10) / 10;
            console.log($("#mainId1").html());
            this.documentService
              .getPDF({
                data: $("#mainId1").html(),
                filename: "Final Report",
                format: {
                  paperWidth: 7,
                  paperHeight: height1 + 5,
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  marginRight: 0,
                },
                template:
                  "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
              })
              .subscribe((data) => {
                if (data && data.success) {
                  console.log(data);
                  this.data4 = data
                  this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
                  console.log(this.data5)
                  this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
                    this.data5
                  );

                  console.log(this.data6)
                  this.dataImport[i] = this.data6
                  this.sbPurposeDone1[i] = code
                  console.log(this.dataImport[i])
                  //this.newTask.url1 = this.data5;
                  this.done = true;

                  //this.downloadPDF(data);
                }
                this.newTask[i] = {
                  sbNumbers: this.sbArray,
                  sbUrls: this.mainDoc1[i],
                  tryNumbers: this.tryArray,
                  tryUrls: this.mainDoc3[i],
                  purposeCode: code,
                  generateDoc1: this.data8[i],
                  generateDoc2: this.dataImport[i]
                }
              });

            console.log(this.newTask[i])
          }
          else {
            this.sbPurposeDone1[i] = ''
            this.newTask[i] = {
              sbNumbers: this.sbArray,
              sbUrls: this.mainDoc1[i],
              tryNumbers: this.tryArray,
              tryUrls: this.mainDoc3[i],
              purposeCode: code,
              generateDoc1: this.data8[i]
            }
            console.log(this.newTask[i])
          }
          this.zToggle[i] = true;

          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }

          //this.downloadPDF(data);
        }
      });
  }

  exportAsPDF2(code, i) {
    console.log(code, i)
    this.doneImportPurpose[i] = code;
    const height =
      Math.round($("#mainId1").outerHeight() * 0.0104166667 * 10) / 10;
    console.log($("#mainId1").html());
    this.documentService
      .getPDF({
        data: $("#mainId1").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        template:
          "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
      })
      .subscribe((data) => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
          console.log(this.data5)
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.data5
          );
          console.log(this.data6)
          this.data9[i] = this.data6
          console.log(this.data9[i])
          //this.newTask.url1 = this.data5;
          this.done = true;
          //this.downloadPDF(data);
          this.zToggle[i] = true;
          this.newTask[i] = {
            tryNumbers: this.tryArray,
            tryUrls: this.mainDoc2[i],
            purposeCode: code,
            generateDoc1: this.data9[i]
          }
          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }
        }
      });
  }
  change(e) {
    console.log(e.target.value);
    this.bankRef = e.target.value
  }
  sendMail(j, code) {
    let val = {
      file: this.bankRef
    }
    this.documentService.exportEmail({ task: val }).subscribe(
      (res2) => {
        this.toastr.success('Message sent successfully!');
        console.log("Email Sent");
        if (this.Question4 == 'no') {
          this.mailArray[j] = code
          this.newTask[j] = {

            tryNumbers: this.tryArray,
            tryUrls: this.mainDoc2[j],
            purposeCode: code,
            bankRef: this.bankRef
          }
          this.zToggle[j] = true;
          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }
        }
        else {
          this.mailArray[j] = code
          this.newTask[j] = {
            purposeCode: code,
            bankRef: this.bankRef
          }
          this.zToggle[j] = true;
          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }
        }


        //this.router.navigate(["/home/advance-outward-remittance"]);
      },
      (err) => console.log("ERROR")
    );
  }

  purposeClick(e, f) {
    console.log(e)
    console.log(f)
    if (e.startsWith("P0") || e.startsWith("P1")) {
      if (e == "P0102" || e == "P0103" || e == "P0104" || e == "P0105" || e == "P0107" || e == "P0801" || e == "P0802" || e == "P0803" || e == "P01P0804" || e == "P0805" || e == "P0806" || e == "P1003" || e == "P1004" || e == "P1005" || e == "P1006" || e == "P1007" || e == "P1008" || e == "P1009" || e == "P1011" || e == "P1012" || e == "P1013" || e == "P1019") {
        if (this.selectedPurpose.includes(e)) {
          this.toastr.warning(`This purpose code already added`);
        }
        else if (!this.selectedPurpose.includes(e)) {
          this.selectedPurpose.push(e)
          this.toastr.info(`Purpose code added`);
        }

      }
      else {
        this.toastr.warning(`You can't add this purpose code`);
      }

    }
    else {
      this.toastr.error(`Click on purpose code`);
    }

    // this.select = true;
    // this.purposeCode = e
    // this.detail = f
  }

  removeClick(i) {
    this.selectedPurpose.splice(i, 1)
  }

  onChange() {
    this.purposeCode = ''
    this.detail = ''
    this.purposeSelect = false
  }

  proceedClick() {
    console.log("gggg")
    this.proceed = false
    this.c = this.selectedPurpose[0];
    for (let value of this.selectedPurpose) {
      this.generatePurpose.push('')
      this.donePurpose.push('');
      this.sbPurpose.push('');
      this.doneSbPurpose.push('');
      this.importPurpose.push('');
      this.noImportPurpose.push('');
      this.doneImportPurpose.push('');
      this.zToggle.push(false)
      this.mailArray.push('')
    }
    this.z = this.selectedPurpose.length
  }

  tabClick(a, i) {
    this.c = a
    this.Question1 = '';
    this.Question2 = '';
    this.Question3 = '';
    this.Question4 = '';
    this.Question5 = '';
    this.pipoArray = [];
    this.sbArray = [];
    this.tryArray = [];
    let allTrue = true;
    for (let value of this.zToggle) {
      allTrue = allTrue && value;
    }
    if (allTrue) {
      this.isDone = true;
    }

  }

  onClass(e) {
    if (e == "P0102" || e == "P0103" || e == "P0104" || e == "P0105" || e == "P0107" || e == "P0801" || e == "P0802" || e == "P0803" || e == "P01P0804" || e == "P0805" || e == "P0806" || e == "P1003" || e == "P1004" || e == "P1005" || e == "P1006" || e == "P1007" || e == "P1008" || e == "P1009" || e == "P1011" || e == "P1012" || e == "P1013" || e == "P1019") {
      return "class1"
    }
    else {
      return "class2"
    }
  }

  edit() {

  }
  downloadPDF() {

  }

}


