import { Component, OnDestroy, OnInit } from "@angular/core";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../../inward.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../service/user.service";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";

@Component({
  selector: 'app-bill-lodgement',
  templateUrl: './bill-lodgement.component.html',
  styleUrls: ['./bill-lodgement.component.scss']
})
export class BillLodgementComponent implements OnInit, OnDestroy {
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
  public Question5 = 'yes';
  public Question6 = '';
  public Question7 = '';
  public Question8 = '';
  public Question9 = '';
  public Question10 = '';
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
  mainDoc: any = [];
  mainDoc1: any;
  mainDoc2: any;
  mainDoc3: any;
  doc1: boolean;
  data8: any;
  data9: any = [];
  dataImport: any;
  sbPurposeDone1: any = [];
  item4: any;
  bankRef: any;
  newTask: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  isGenerate: boolean = false;
  isProceed: boolean = false;
  advanceRef: any;
  billOfCredit: any;
  lc: any;
  withDiscount: any;
  scrutiny: any;
  item5: any;
  arr: any = [];
  LcNumber: any = '';
  isDoneAll: boolean;
  bankArray: any = [];
  bankToggle: boolean;
  bankValue: any;
  bank: any = [];
  allBank: any = [];
  newBankArray: any = [];
  credit: any;
  charge: any;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private confirmDialogService: ConfirmDialogService
  ) {
    console.log("hello")
  }

  ngOnInit(): void {
    //window.location.reload();
    console.log(data['default'])
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose)
    this.dataJson = this.jsondata



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
          this.bankArray = this.item5.bankDetails
          for (let value of this.bankArray) {
            this.allBank.push(value.bank)
          }
          console.log(this.allBank)
          this.bank = this.allBank.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index;
          });
          console.log(this.bank)
          //this.letterHead = data['data'][0].file[0]["Letter Head"]
          //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });

    if (this.documentService.draft) {
      this.generate = true
      this.isGenerate = true;
      console.log(this.documentService.task)
      console.log(this.documentService.task.task[0])
      if (this.documentService.task.task[0].ir == 'yes') {
        console.log('hhghgghhg')
        this.Question5 == this.documentService.task.task[0].ir
      }
      else if (this.documentService.task.task[0].ir == 'no') {
        this.Question5 == this.documentService.task.task[0].ir
      }
      if (this.documentService.task.task[0].sbUrls) {
        let k = 0;
        let gene = []

        for (let value of this.documentService.task.task[0].sbUrls) {
          let r = value.changingThisBreaksApplicationSecurity
          gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(r))
          k++
        }
        this.mainDoc1 = gene
        this.sbArray = this.documentService.task.task[0].sbNumbers
      }
      if (this.documentService.task.task[0].tryUrls) {
        let h = 0;
        let gene = []
        for (let value of this.documentService.task.task[0].tryUrls) {
          gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            value.changingThisBreaksApplicationSecurity
          ))
          h++
        }
        this.mainDoc3 = gene
        this.tryArray = this.documentService.task.task[0].tryNumbers
      }
    }
    else {
      this.Question5 = '';
    }

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

  generateDoc1() {
    //console.log(code, j)
    this.generate = true
    this.isGenerate = true;

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
    this.mainDoc1 = generateDoc2
    console.log(this.mainDoc1)
    console.log(generateDoc2)
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

      this.mainDoc3 = generateDoc3
    }
    this.newTask[0] = {
      sbNumbers: this.sbArray,
      sbUrls: this.mainDoc1,
      tryNumbers: this.tryArray,
      tryUrls: this.mainDoc3,
      purposeCode: '',
      isLc: this.lc,
      LcNumber: this.LcNumber,
      withScrutiny: this.scrutiny,
      withDiscount: this.withDiscount,
      bankRef: '',
      advanceRef: this.advanceRef,
      ir: this.Question5
    }
    console.log(this.generate1)
    console.log(this.c)
  }

  onBack() {
    this.isGenerate = false;
    this.sbArray = []
    this.tryArray = []
  }


  doneDox() {
    console.log(this.newTask)
    if (this.documentService.draft) {
      this.documentService.updateExportTask({ task: this.newTask, completed: 'yes', fileType: 'BL' }, this.documentService.task._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(data);
          this.documentService.draft = false
          this.documentService.task.id = ''
          this.isDoneAll = true
          this.router.navigate(["/home/dashboardTask"]);
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log("error");
        }
      );
    }
    else {
      this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'BL' }).subscribe(
        (res) => {
          this.isDoneAll = true
          this.toastr.success('Task saved successfully!');
          console.log("Transaction Saved");
          this.router.navigate(["/home/dashboardTask"]);

        },
        (err) => {
          this.toastr.error('Error!');
          console.log("Error saving the transaction")
        }
      );
    }


  }

  exportAsPDF1() {
    if (this.Question7 == 'yes') {
      this.lc = 'lc'
    }
    else if (this.Question7 == 'no') {
      this.lc = 'nonLc'
    }

    this.scrutiny = this.Question8;
    this.withDiscount = this.Question9


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
          this.data8 = this.data6
          //this.newTask.url1 = this.data5;
          this.done = true;
          const height =
            Math.round($("#mainId").outerHeight() * 0.0104166667 * 10) / 10;
          console.log($("#mainId").html());
          this.documentService
            .getPDF({
              data: $("#mainId2").html(),
              filename: "Final Report",
              format: {
                paperWidth: 7,
                paperHeight: 15,
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
                this.billOfCredit = this.data6

                if (this.Question5 == 'yes') {
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
                        this.dataImport = this.data6
                        //this.newTask.url1 = this.data5;
                        this.done = true;
                        this.newTask[0] = {
                          sbNumbers: this.sbArray,
                          sbUrls: this.mainDoc1,
                          tryNumbers: this.tryArray,
                          tryUrls: this.mainDoc3,
                          purposeCode: '',
                          isLc: this.lc,
                          LcNumber: this.LcNumber,
                          withScrutiny: this.scrutiny,
                          withDiscount: this.withDiscount,
                          bankRef: '',
                          advanceRef: this.advanceRef,
                          generateDoc1: this.data8,
                          generateDoc2: this.billOfCredit,
                          generateDoc3: this.dataImport,
                          ir: this.Question5
                        }
                        //this.downloadPDF(data);
                      }
                    });


                  this.isProceed = true
                }
                else {
                  this.isProceed = true
                  this.newTask[0] = {
                    sbNumbers: this.sbArray,
                    sbUrls: this.mainDoc1,
                    tryNumbers: this.tryArray,
                    tryUrls: this.mainDoc3,
                    purposeCode: '',
                    isLc: this.lc,
                    LcNumber: this.LcNumber,
                    withScrutiny: this.scrutiny,
                    withDiscount: this.withDiscount,
                    advanceRef: this.advanceRef,
                    generateDoc1: this.data8,
                    generateDoc2: this.billOfCredit,
                    bankRef: '',
                    ir: this.Question5
                  }
                }
              }
            });

          //this.zToggle[i] = true;

          // let allTrue = true;
          // for (let value of this.zToggle) {
          //   allTrue = allTrue && value;
          // }
          // if (allTrue) {
          //   this.isDone = true;
          // }

          //this.downloadPDF(data);
        }
      });
  }


  sendMail() {
    let val = {
      file: this.bankRef
    }
    this.documentService.exportEmail({ task: val }).subscribe(
      (res2) => {
        this.toastr.success('Message sent successfully!');
        console.log("Email Sent");

        //this.router.navigate(["/home/advance-outward-remittance"]);
      },
      (err) => console.log("ERROR")
    );
  }

  change(e) {
    console.log(e.target.value);
    this.advanceRef = e.target.value
  }

  change1(e) {
    console.log(e.target.value);
    this.LcNumber = e.target.value
  }

  edit() {

  }

  // showDialog(): any {
  //   console.log('hhhhhh')
  //   this.confirmDialogService.confirmThis('Are you sure to delete ?', () => {
  //     alert('Yes clicked');
  //   }, () => {
  //     alert('No clicked');
  //   });
  // }
  downloadPDF() {

  }

  ngOnDestroy() {
    console.log("Inside draft");
    // if (!this.isDoneAll && this.generate) {
    //   this.confirmDialogService.confirmThis('Do you want to save this task?', () => {
    //     if (this.isProceed) {
    //       this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'BL' }).subscribe(
    //         (res) => {
    //           this.toastr.success('Saved the transaction as completed');
    //           console.log("Transaction Saved");
    //           //this.router.navigate(["/home/dashboardNew"]);

    //         },
    //         (err) => {
    //           this.toastr.error('Error!');
    //           console.log("Error saving the transaction")
    //         }
    //       );
    //     }
    //     else {
    //       this.documentService.addExportTask({ task: this.newTask, completed: 'no', fileType: 'BL' }).subscribe(
    //         (res) => {
    //           this.toastr.success('Saved the transaction in draft');
    //           console.log("Transaction Saved");
    //           //this.router.navigate(["/home/dashboardNew"]);

    //         },
    //         (err) => {
    //           this.toastr.error('Error!');
    //           console.log("Error saving the transaction")
    //         }
    //       );
    //     }

    //   }, () => {
    //     console.log("no");
    //   });
    // }

  }

  setradio(a) {
    console.log(a)
    this.bankToggle = true
    this.bankValue = a

    for (let value of this.bankArray) {
      if (value.bank == a) {
        this.newBankArray.push(value)
      }
    }
  }

  creditTo(a) {
    var n = a.accNumber
    this.credit = n.split("");
    console.log(this.credit)
  }

  chargesTo(a) {
    var n = a.accNumber
    this.charge = n.split("");
    console.log(this.charge)
  }






}
