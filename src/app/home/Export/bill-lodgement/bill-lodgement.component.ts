import { Component, OnDestroy, OnInit } from "@angular/core";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../../inward.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../service/user.service";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

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
  value: any;
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
    this.fillForm()
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
      generateDoc1: this.value,
      ir: this.Question5
    }
  }

  async fillForm() {
    const formUrl = './../../assets/billUnder.pdf'

    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes)

    const form = pdfDoc.getForm()
    const pages = pdfDoc.getPages()
    const firstpage = pages[0]

    const text1 = form.createTextField('favorite0')
    text1.setText('')
    text1.addToPage(firstpage, {
      x: 156,
      y: 752,
      width: 250,
      height: 12,
      borderWidth: 0,
      //backgroundColor: rgb(255, 255, 255)
    })


    const text2 = form.createTextField('favorite1')
    text2.setText("")
    text2.addToPage(firstpage, {
      x: 482,
      y: 752,
      width: 20,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const textf3 = form.createTextField('favorite2')
    textf3.setText("")
    textf3.addToPage(firstpage, {
      x: 510,
      y: 752,
      width: 20,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text4 = form.createTextField('favorite3')
    text4.setText("")
    text4.addToPage(firstpage, {
      x: 539,
      y: 752,
      width: 15,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text5 = form.createTextField('favorite4')
    text5.setText("")
    text5.addToPage(firstpage, {
      x: 570,
      y: 752,
      width: 12,
      height: 13,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //exporter

    const text6 = form.createTextField('favorite5')
    text6.setText("")
    text6.addToPage(firstpage, {
      x: 18,
      y: 684,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text7 = form.createTextField('favorite6')
    text7.setText("")
    text7.addToPage(firstpage, {
      x: 18,
      y: 665,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text8 = form.createTextField('favorite7')
    text8.setText("")
    text8.addToPage(firstpage, {
      x: 18,
      y: 646,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text9 = form.createTextField('favorite8')
    text9.setText("")
    text9.addToPage(firstpage, {
      x: 18,
      y: 628,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text10 = form.createTextField('favorite9')
    text10.setText("")
    text10.addToPage(firstpage, {
      x: 18,
      y: 612,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text11 = form.createTextField('favorite10')
    text11.setText("")
    text11.addToPage(firstpage, {
      x: 18,
      y: 594,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //buyer

    const text12 = form.createTextField('favorite11')
    text12.setText("")
    text12.addToPage(firstpage, {
      x: 320,
      y: 684,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text13 = form.createTextField('favorite12')
    text13.setText("")
    text13.addToPage(firstpage, {
      x: 320,
      y: 665,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text14 = form.createTextField('favorite13')
    text14.setText("")
    text14.addToPage(firstpage, {
      x: 320,
      y: 646,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text15 = form.createTextField('favorite14')
    text15.setText("")
    text15.addToPage(firstpage, {
      x: 320,
      y: 628,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text16 = form.createTextField('favorite15')
    text16.setText("")
    text16.addToPage(firstpage, {
      x: 320,
      y: 612,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text17 = form.createTextField('favorite16')
    text17.setText("")
    text17.addToPage(firstpage, {
      x: 320,
      y: 594,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //checkbox

    const checkbox1 = form.createCheckBox('check1')
    checkbox1.addToPage(firstpage, {
      x: 150,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const checkbox2 = form.createCheckBox('check2')
    checkbox2.addToPage(firstpage, {
      x: 369,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const checkbox3 = form.createCheckBox('check3')
    checkbox3.addToPage(firstpage, {
      x: 570,
      y: 575,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })



    //draw bank details

    const text18 = form.createTextField('favorite17')
    text18.setText("")
    text18.addToPage(firstpage, {
      x: 219,
      y: 553,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text19 = form.createTextField('favorite18')
    text19.setText("")
    text19.addToPage(firstpage, {
      x: 219,
      y: 538,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text20 = form.createTextField('favorite19')
    text20.setText("")
    text20.addToPage(firstpage, {
      x: 219,
      y: 521,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text21 = form.createTextField('favorite20')
    text21.setText("")
    text21.addToPage(firstpage, {
      x: 219,
      y: 506,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text22 = form.createTextField('favorite21')
    text22.setText("")
    text22.addToPage(firstpage, {
      x: 219,
      y: 491,
      width: 360,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text23 = form.createTextField('favorite22')
    text23.setText("")
    text23.addToPage(firstpage, {
      x: 219,
      y: 478,
      width: 360,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //checkbox

    const checkbox4 = form.createCheckBox('check4')
    checkbox4.addToPage(firstpage, {
      x: 245,
      y: 456,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const checkbox5 = form.createCheckBox('check5')
    checkbox5.addToPage(firstpage, {
      x: 453,
      y: 463,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //text

    const text24 = form.createTextField('favorite23')
    text24.setText("")
    text24.addToPage(firstpage, {
      x: 219,
      y: 412,
      width: 360,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text25 = form.createTextField('favorite24')
    text25.setText("")
    text25.addToPage(firstpage, {
      x: 219,
      y: 390,
      width: 360,
      height: 16,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //checkbox

    const checkbox6 = form.createCheckBox('check6')
    checkbox6.addToPage(firstpage, {
      x: 389,
      y: 375,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const checkbox7 = form.createCheckBox('check7')
    checkbox7.addToPage(firstpage, {
      x: 550,
      y: 375,
      width: 8,
      height: 8,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    // firx

    const text26 = form.createTextField('favorite25')
    text26.setText("")
    text26.addToPage(firstpage, {
      x: 128,
      y: 348,
      width: 187,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text27 = form.createTextField('favorite26')
    text27.setText("")
    text27.addToPage(firstpage, {
      x: 128,
      y: 324,
      width: 187,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text28 = form.createTextField('favorite27')
    text28.setText("")
    text28.addToPage(firstpage, {
      x: 421,
      y: 348,
      width: 160,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text29 = form.createTextField('favorite28')
    text29.setText("")
    text29.addToPage(firstpage, {
      x: 421,
      y: 324,
      width: 160,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //bill details

    const text30 = form.createTextField('favorite29')
    text30.setText("")
    text30.addToPage(firstpage, {
      x: 128,
      y: 287,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text31 = form.createTextField('favorite30')
    text31.setText("")
    text31.addToPage(firstpage, {
      x: 128,
      y: 266,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })


    const text32 = form.createTextField('favorite31')
    text32.setText("")
    text32.addToPage(firstpage, {
      x: 388,
      y: 287,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })


    const text33 = form.createTextField('favorite32')
    text33.setText("")
    text33.addToPage(firstpage, {
      x: 388,
      y: 266,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //checkbox

    const checkbox8 = form.createCheckBox('check8')
    checkbox8.addToPage(firstpage, {
      x: 141,
      y: 251,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const checkbox9 = form.createCheckBox('check9')
    checkbox9.addToPage(firstpage, {
      x: 288,
      y: 251,
      width: 5,
      height: 5,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text01 = form.createTextField('favorite01')
    text01.setText("")
    text01.addToPage(firstpage, {
      x: 393,
      y: 253,
      width: 30,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text02 = form.createTextField('favorite02')
    text02.setText("")
    text02.addToPage(firstpage, {
      x: 453,
      y: 242,
      width: 60,
      height: 10,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    // description of goods

    const text34 = form.createTextField('favorite33')
    text34.setText("")
    text34.addToPage(firstpage, {
      x: 128,
      y: 211,
      width: 250,
      height: 20,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text35 = form.createTextField('favorite34')
    text35.setText("")
    text35.addToPage(firstpage, {
      x: 128,
      y: 190,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text36 = form.createTextField('favorite35')
    text36.setText("")
    text36.addToPage(firstpage, {
      x: 448,
      y: 211,
      width: 132,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text37 = form.createTextField('favorite36')
    text37.setText("")
    text37.addToPage(firstpage, {
      x: 388,
      y: 190,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text38 = form.createTextField('favorite37')
    text38.setText("")
    text38.addToPage(firstpage, {
      x: 275,
      y: 170,
      width: 300,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text39 = form.createTextField('favorite38')
    text39.setText("")
    text39.addToPage(firstpage, {
      x: 275,
      y: 146,
      width: 300,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text40 = form.createTextField('favorite39')
    text40.setText("")
    text40.addToPage(firstpage, {
      x: 128,
      y: 126,
      width: 140,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text41 = form.createTextField('favorite40')
    text41.setText("")
    text41.addToPage(firstpage, {
      x: 388,
      y: 126,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //table1

    const text42 = form.createTextField('favorite41')
    text42.setText("")
    text42.addToPage(firstpage, {
      x: 97,
      y: 62,
      width: 45,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text43 = form.createTextField('favorite42')
    text43.setText("")
    text43.addToPage(firstpage, {
      x: 148,
      y: 62,
      width: 50,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text44 = form.createTextField('favorite43')
    text44.setText("")
    text44.addToPage(firstpage, {
      x: 206,
      y: 62,
      width: 65,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text45 = form.createTextField('favorite44')
    text45.setText("")
    text45.addToPage(firstpage, {
      x: 276,
      y: 62,
      width: 41,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text46 = form.createTextField('favorite45')
    text46.setText("")
    text46.addToPage(firstpage, {
      x: 320,
      y: 62,
      width: 45,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text47 = form.createTextField('favorite46')
    text47.setText("")
    text47.addToPage(firstpage, {
      x: 370,
      y: 62,
      width: 33,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text48 = form.createTextField('favorite47')
    text48.setText("")
    text48.addToPage(firstpage, {
      x: 408,
      y: 62,
      width: 80,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text49 = form.createTextField('favorite48')
    text49.setText("")
    text49.addToPage(firstpage, {
      x: 492,
      y: 62,
      width: 50,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text50 = form.createTextField('favorite49')
    text50.setText("")
    text50.addToPage(firstpage, {
      x: 547,
      y: 62,
      width: 33,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text51 = form.createTextField('favorite50')
    text51.setText("")
    text51.addToPage(firstpage, {
      x: 97,
      y: 51,
      width: 45,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text52 = form.createTextField('favorite51')
    text52.setText("")
    text52.addToPage(firstpage, {
      x: 148,
      y: 51,
      width: 50,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text53 = form.createTextField('favorite52')
    text53.setText("")
    text53.addToPage(firstpage, {
      x: 206,
      y: 51,
      width: 65,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text54 = form.createTextField('favorite53')
    text54.setText("")
    text54.addToPage(firstpage, {
      x: 276,
      y: 51,
      width: 41,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text55 = form.createTextField('favorite54')
    text55.setText("")
    text55.addToPage(firstpage, {
      x: 320,
      y: 51,
      width: 45,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text56 = form.createTextField('favorite55')
    text56.setText("")
    text56.addToPage(firstpage, {
      x: 370,
      y: 51,
      width: 33,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text57 = form.createTextField('favorite56')
    text57.setText("")
    text57.addToPage(firstpage, {
      x: 408,
      y: 51,
      width: 80,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text58 = form.createTextField('favorite57')
    text58.setText("")
    text58.addToPage(firstpage, {
      x: 492,
      y: 51,
      width: 50,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text59 = form.createTextField('favorite58')
    text59.setText("")
    text59.addToPage(firstpage, {
      x: 547,
      y: 51,
      width: 33,
      height: 9,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    //table2


    const text60 = form.createTextField('favorite59')
    text60.setText("")
    text60.addToPage(firstpage, {
      x: 135,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text61 = form.createTextField('favorite60')
    text61.setText("")
    text61.addToPage(firstpage, {
      x: 167,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text62 = form.createTextField('favorite61')
    text62.setText("")
    text62.addToPage(firstpage, {
      x: 201,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text63 = form.createTextField('favorite62')
    text63.setText("")
    text63.addToPage(firstpage, {
      x: 235,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text64 = form.createTextField('favorite63')
    text64.setText("")
    text64.addToPage(firstpage, {
      x: 266,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text65 = form.createTextField('favorite64')
    text65.setText("")
    text65.addToPage(firstpage, {
      x: 300,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text66 = form.createTextField('favorite65')
    text66.setText("")
    text66.addToPage(firstpage, {
      x: 331,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text67 = form.createTextField('favorite66')
    text67.setText("")
    text67.addToPage(firstpage, {
      x: 363,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text68 = form.createTextField('favorite67')
    text68.setText("")
    text68.addToPage(firstpage, {
      x: 397,
      y: 10,
      width: 34,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text69 = form.createTextField('favorite68')
    text69.setText("")
    text69.addToPage(firstpage, {
      x: 434,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text70 = form.createTextField('favorite69')
    text70.setText("")
    text70.addToPage(firstpage, {
      x: 469,
      y: 10,
      width: 27,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text71 = form.createTextField('favorite70')
    text71.setText("")
    text71.addToPage(firstpage, {
      x: 501,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text72 = form.createTextField('favorite71')
    text72.setText("")
    text72.addToPage(firstpage, {
      x: 534,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text73 = form.createTextField('favorite72')
    text73.setText("")
    text73.addToPage(firstpage, {
      x: 565,
      y: 10,
      width: 15,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const pdfBytes = await pdfDoc.save()
    console.log(pdfBytes, "pdf")
    console.log(pdfBytes, "pdf")
    var base64String = this._arrayBufferToBase64(pdfBytes)

    console.log(base64String);
    const x = 'data:application/pdf;base64,' + base64String;
    console.log(x);
    this.value = this.sanitizer.bypassSecurityTrustResourceUrl(x);
    // const link: any = document.createElement("a");
    // link.id = "dwnldLnk";
    // link.style = "display:none;";
    // document.body.appendChild(link);
    // const dlnk: any = document.getElementById("dwnldLnk");
    // dlnk.href = x;
    // dlnk.download = 'file.pdf';
    // dlnk.click();
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
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
