import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DocumentService } from "../../../service/document.service";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../../inward.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../service/user.service";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as XLSX from 'xlsx';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-bill-lodgement',
  templateUrl: './bill-lodgement.component.html',
  styleUrls: ['./bill-lodgement.component.scss']
})

export class BillLodgementComponent implements OnInit, OnDestroy {
  @ViewChild('table1') table: ElementRef;
  public item1;
  public itemArray;
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
  public itemArray1 = [];
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
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
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
  Task: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  isGenerate: boolean = false;
  isProceed: boolean = false;
  advanceRef: any = '';
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
  bgColor: boolean;
  newDone: boolean;
  arrayPipo: any = [];
  myArr: any = [];
  str: string;
  dateArray: any = [];
  buyerAds: any;
  amArr: any = [];
  pipo = false;
  ship = false;
  nameSearch : string ='';
  nameSearch1 : string ='';
  nameSearch2 : string = '';
  nameSearch3 : string = '';
  item6: any;
  item7: any;
  item: any;
  public buyerDetail: any = [];
  startDate : any = '';
  endDate: any = '';


  advanceForm = new FormGroup({
    advance: new FormArray([this.initCourse()], Validators.required)
  });
  sbDataArray: any = [];
  invoiceArr: any[];
  filterToggle = false;
  constructor(
    public documentService: DocumentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private confirmDialogService: ConfirmDialogService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) {
    console.log("hello")
    // this.onAddCourse("e")
  }

  ngOnInit(): void {
    //window.location.reload();
    this.redirectid = this.route.snapshot.paramMap.get('pipo')
    this.redirectindex = this.route.snapshot.paramMap.get('index')
    this.redirectpage = this.route.snapshot.paramMap.get('page')
    console.log("pipoId",this.redirectid);

    console.log(data['default'])
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose)
    this.dataJson = this.jsondata

    //Shipping bill API
    // this.documentService.getMaster(1).subscribe(
    //   (res: any) => {
    //     console.log(res,"SHIPPING DATA"), (this.item2 = res.data);
    //     console.log("shipping bill",this.item2)
    //   },
    //   (err) => console.log(err)
    // );
    //PI/PO API
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('HEre Response', res);
        (this.item = res.data),
        console.log("pipo",this.item)
        },
      (err) => console.log(err)
    );


    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log("Benne Detail4", this.buyerDetail);
      },
      (err) => console.log("Error", err)
    );




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

  searchData1(a) {
    console.log("hello",a)
    console.log(a.length)
    if (a.length > 0) {
      let arr = []
      for (let value of this.item1) {
        console.log("value of buyername****", value);
        console.log("value of buyername", value.buyerName);
        if (value.buyerName.includes(a) || value.sbno.includes(a)) {
          console.log("shaile***************",value.buyerName)
          arr.push(value)
        }

      }
      this.itemArray = arr
      this.filterToggle = true
      console.log("shaile***************", this.itemArray)
    }
    else {
      this.filterToggle = false
      console.log("else")
    }

  }

  fireEvent() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    console.log(wb)
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    console.log(wb)
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');

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

  hello() {
    // for (let value of this.sbArray) {
    //   this.onAddCourse(value)
    // }
    for (var i = 1; i < this.sbArray.length; i++) {
      //binary += String.fromCharCode(bytes[i]);
      this.onAddCourse(i)
    }
    console.log()
    console.log("ssjskskssk")
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



  initCourse() {
    return this.formBuilder.group({
      value: new FormArray([this.initCourse1()], Validators.required)
    });
  }

  initCourse1() {
    return this.formBuilder.group({
      valueInternal: ['', Validators.required],
      sb: ['', Validators.required]
    });
  }



  getCourses(form) {

    return form.get('advance').controls;
  }



  // getProducts(form) {
  //   return form.get('products').controls;
  // }

  onAddCourse(e) {

    // if (e.controls.bankDetails.invalid) {
    //   //this.submitted1 = true
    //   this.toastr.error('You can add another bank after filling first one!');
    //   console.log("2")
    //   //this.isDisabled = false;
    //   return;
    // }
    console.log("fffff")
    // this.currencyName.push('')
    // this.bankName.push('')
    const control = this.advanceForm.controls.advance as FormArray;
    control.push(this.initCourse());
    //this.isDisabled = false;
  }

  onAddCourse1(e) {

    // if (e.controls.bankDetails.invalid) {
    //   //this.submitted1 = true
    //   this.toastr.error('You can add another bank after filling first one!');
    //   console.log("2")
    //   //this.isDisabled = false;
    //   return;
    // }
    console.log("fffff")
    console.log(e)
    // this.currencyName.push('')
    // this.bankName.push('') .controls.contacts
    console.log(this.advanceForm.controls.advance['controls'][e].controls.value)
    // console.log(this.advanceForm.controls.advance[e].controls.value)
    // console.log(this.advanceForm.controls.advance[e])
    const control = this.advanceForm.controls.advance['controls'][e].controls.value as FormArray;
    control.push(this.initCourse1());
    //this.isDisabled = false;
  }

  removeAddress(i) {
    // console.log(i)
    // //console.log(this.control)
    let control1 = this.advanceForm.controls.advance as FormArray;
    // console.log(control1)
    // console.log(control1.length)
    // console.log(this.bankName)
    // console.log(this.currencyName)
    control1.removeAt(i);
    // this.bankName.splice(i, 1)
    // this.currencyName.splice(i, 1)
    // console.log(this.bankName)
    // console.log(this.currencyName)
    // console.log(control1.length)
  }

  onSubmit() {
    console.log(this.advanceForm.value);
  }

  async generateDoc1() {
    //console.log(code, j)
    this.generate = true
    this.isGenerate = true;

    let generateDoc2: any = [];
    let pipoValue
    let value
    let buyerValue
    for (let item of this.itemArray) {

      for (let sb of this.sbArray) {
        if (item.sbno === sb) {
          pipoValue = item
          value = item.pipo
          buyerValue = item.buyerName
          this.dateArray.push(item.sbdate)
          this.sbDataArray.push(item)
          console.log('value', value)
          generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            item.doc
          ))
        }
      }
    }
    let mainArr = []

    let invoicearray = []
    this.Question5 = 'no'
    this.sbDataArray.forEach((value, index) => {
      for (let a of value.pipo) {
        this.arrayPipo.push(a)
      }
    });
    if (this.Question6 == 'yes') {
      let adArr = []
      for (let x of this.advanceForm.value.advance) {
        for (let z of x.value) {
          adArr.push(z)
        }
      }
      console.log(adArr)

      this.sbDataArray.forEach((value, index) => {
        this.userService.getManyPipo(value.pipo)
          .subscribe(
            data => {
              console.log("king123")
              console.log(data)
              for (let item of data['data']) {
                console.log(item)
                const newVal = { ...value };
                newVal['pipoValue'] = item
                mainArr.push(newVal)
                console.log('fggfgfgf', mainArr)
              }
              //this.getBeneDetaile()
              //this.router.navigate(['/login'], { queryParams: { registered: true }});
            },
            error => {
              console.log("error")
            });

      });
      setTimeout(() => {
        console.log('sjjssjjsjsjsjsjsjsjsjsjsjssjsjjsjsjsjsjsjs')
        console.log(mainArr)
        console.log(this.advanceForm.value);


        mainArr.forEach((value1, index) => {
          console.log('shshsh')
          console.log(this.advanceForm.value.advance)
          for (let a of adArr) {
            if (a.sb == value1.sbno) {
              const newVal = { ...value1 };
              newVal['advance'] = a.valueInternal
              invoicearray.push(newVal)
            }

          }
          console.log('aajsjss')
        });
        let amountArr = []
        for (let item of invoicearray) {
          amountArr.push(item.pipoValue.amount)
        }
        console.log(amountArr)
        this.amArr = amountArr
        console.log('111111111111111111111111111111111111111111111111111111111111111')
        console.log(invoicearray)
        this.invoiceArr = invoicearray
        this.Question5 = 'yes'
      }, 8000);

    }


    console.log('Rajuuuuu', pipoValue)
    //this.arrayPipo = value
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


    }
    console.log(buyerValue)
    const data: any = await this.userService.getBuyerByName(
      buyerValue
    );
    console.log('shshhss', data.data)
    this.buyerAds = data.data.buyerAdrs

    console.log('89999999999999999999999999999', this.buyerAds)
    this.mainDoc3 = generateDoc3
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

    //let date = ['31-JAN-21', '29-AUG-21', '01-FEB-20'];
    // const myArray = date[0].split('-');
    // console.log(myArray);
    // let str = '';
    for (let value of this.dateArray) {
      this.getProper(value);
    }
    this.myArr.sort(function (a, b) {
      a = a.split('-').reverse().join('');
      b = b.split('-').reverse().join('');
      return a > b ? 1 : a < b ? -1 : 0;

      // return a.localeCompare(b);         // <-- alternative

    });
    console.log('Datesss', this.myArr);
    console.log(this.myArr[0])
    console.log(this.myArr[this.myArr.length - 1])

    console.log(this.generate1)
    console.log(this.c)
    this.fillForm(pipoValue)
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
  }

  getProper(a) {
    const myArray = a.split('-');
    myArray.forEach((value, index) => {
      if (index == 0) {
        this.str = value + '.';
      } else if (index == 1) {
        if (value.toUpperCase() == 'JAN') {
          this.str = this.str + '01.';
        } else if (value.toUpperCase() == 'FEB') {
          this.str = this.str + '02.';
        } else if (value.toUpperCase() == 'MAR') {
          this.str = this.str + '03.';
        } else if (value.toUpperCase() == 'APR') {
          this.str = this.str + '04.';
        } else if (value.toUpperCase() == 'MAY') {
          this.str = this.str + '05.';
        } else if (value.toUpperCase() == 'JUN') {
          this.str = this.str + '06.';
        } else if (value.toUpperCase() == 'JUL') {
          this.str = this.str + '07.';
        } else if (value.toUpperCase() == 'AUG') {
          this.str = this.str + '08.';
        } else if (value.toUpperCase() == 'SEP') {
          this.str = this.str + '09.';
        } else if (value.toUpperCase() == 'OCT') {
          this.str = this.str + '10.';
        } else if (value.toUpperCase() == 'NOV') {
          this.str = this.str + '11.';
        } else if (value.toUpperCase() == 'DEC') {
          this.str = this.str + '12.';
        }
      } else if (index == 2) {
        this.str = this.str + '20' + value;
      }
    });
    this.myArr.push(this.str);
    this.str = '';
    console.log(this.str);
  }

  searchData(a, i) {
    console.log(i)
    console.log(a)
    var reg = /^\d+$/;
    let x = reg.test(a)
    console.log(x)
    if (x) {
      this.amArr[i] = this.amArr[i] - a;
      this.invoiceArr[i].pipoValue['damage'] = a
      this.invoiceArr[i].pipoValue['realized'] = this.amArr[i]
    }
    console.log(this.invoiceArr)



    console.log(a)
    console.log(this.amArr)
  }

  async fillForm(a) {
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
    text6.setText(this.item5.teamName)
    text6.addToPage(firstpage, {
      x: 18,
      y: 684,
      width: 295,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text7 = form.createTextField('favorite6')
    text7.setText(this.item5.adress)
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
    text12.setText(a.buyerName)
    text12.addToPage(firstpage, {
      x: 320,
      y: 684,
      width: 255,
      height: 14,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text13 = form.createTextField('favorite12')
    text13.setText(this.buyerAds)
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
    text41.setText(`${this.myArr[0]}  to  ${this.myArr[this.myArr.length - 1]}`)
    // console.log(this.myArr[0])
    // console.log(this.myArr[this.myArr.length - 1])
    text41.addToPage(firstpage, {
      x: 388,
      y: 126,
      width: 188,
      height: 18,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })


    // const texta41 = form.createTextField('favorite404')
    // texta41.setText(`${this.myArr.length}`)
    // // console.log(this.myArr[0])
    // // console.log(this.myArr[this.myArr.length - 1])
    // texta41.addToPage(firstpage, {
    //   x: 266,
    //   y: 106,
    //   width: 188,
    //   height: 18,
    //   borderWidth: 0,
    //   // backgroundColor: rgb(255, 255, 255)
    // })

    //table1
    const text421 = form.createTextField('favorite411')
    text421.setText(`${this.myArr.length}`)
    text421.addToPage(firstpage, {
      x: 228,
      y: 108,
      width: 10,
      height: 16,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

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
    text60.setText(this.charge[0])
    text60.addToPage(firstpage, {
      x: 135,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text61 = form.createTextField('favorite60')
    text61.setText(this.charge[1])
    text61.addToPage(firstpage, {
      x: 167,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text62 = form.createTextField('favorite61')
    text62.setText(this.charge[2])
    text62.addToPage(firstpage, {
      x: 201,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text63 = form.createTextField('favorite62')
    text63.setText(this.charge[3])
    text63.addToPage(firstpage, {
      x: 235,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text64 = form.createTextField('favorite63')
    text64.setText(this.charge[4])
    text64.addToPage(firstpage, {
      x: 266,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text65 = form.createTextField('favorite64')
    text65.setText(this.charge[5])
    text65.addToPage(firstpage, {
      x: 300,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text66 = form.createTextField('favorite65')
    text66.setText(this.charge[6])
    text66.addToPage(firstpage, {
      x: 331,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text67 = form.createTextField('favorite66')
    text67.setText(this.charge[7])
    text67.addToPage(firstpage, {
      x: 363,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text68 = form.createTextField('favorite67')
    text68.setText(this.charge[8])
    text68.addToPage(firstpage, {
      x: 397,
      y: 10,
      width: 34,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text69 = form.createTextField('favorite68')
    text69.setText(this.charge[9])
    text69.addToPage(firstpage, {
      x: 434,
      y: 10,
      width: 30,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text70 = form.createTextField('favorite69')
    text70.setText(this.charge[10])
    text70.addToPage(firstpage, {
      x: 469,
      y: 10,
      width: 27,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text71 = form.createTextField('favorite70')
    text71.setText(this.charge[11])
    text71.addToPage(firstpage, {
      x: 501,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text72 = form.createTextField('favorite71')
    text72.setText(this.charge[12])
    text72.addToPage(firstpage, {
      x: 534,
      y: 10,
      width: 28,
      height: 25,
      borderWidth: 0,
      // backgroundColor: rgb(255, 255, 255)
    })

    const text73 = form.createTextField('favorite72')
    text73.setText(this.charge[13])
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
    this.newTask[0].generateDoc1 = x
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
    console.log(this.invoiceArr)
    if (this.documentService.draft) {
      this.documentService.updateExportTask({ task: this.newTask, completed: 'yes', fileType: 'BL' }, this.documentService.task._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(data);
          this.documentService.draft = false
          this.documentService.task.id = ''
          this.isDoneAll = true
          this.userService.updateManyPipo(this.arrayPipo, 'billUnder', this.newTask[0].generateDoc1)
            .subscribe(
              data => {
                console.log("king123")
                console.log(data);
                if (this.Question5 == 'yes') {
                  this.userService.updateManyPipo(this.arrayPipo, 'invoiceReduction', this.invoiceArr)
                    .subscribe(
                      data1 => {
                        console.log("king123")
                        console.log(data1);
                        this.toastr.success('Task saved as completed successfully!');
                        this.router.navigate([
                          'home/pipoDocExport',
                              {
                                id: this.redirectid,
                                page: this.redirectpage,
                                index: this.redirectindex,
                              },
                           ]);
                        //this.router.navigate(["/home/advance-outward-remittance"]);
                      },
                      error => {
                        // this.toastr.error('Invalid inputs, please check!');
                        console.log("error")
                      });
                }
                else {
                  this.toastr.success('Task saved as completed successfully!');
                  this.router.navigate(["/home/dashboardTask"]);
                }

                // this.toastr.success('Task saved as completed successfully!');
                // this.router.navigate(["/home/dashboardTask"]);
                //this.router.navigate(["/home/advance-outward-remittance"]);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
          //this.router.navigate(["/home/dashboardTask"]);
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
          //this.toastr.success('Task saved successfully!');
          console.log("Transaction Saved");
          this.userService.updateManyPipo(this.arrayPipo, 'billUnder', this.newTask[0].generateDoc1)
            .subscribe(
              data => {
                console.log("king123")
                console.log(data)
                if (this.Question5 == 'yes') {
                  this.userService.updateManyPipo(this.arrayPipo, 'invoiceReduction', this.invoiceArr)
                    .subscribe(
                      data1 => {
                        console.log("king123")
                        console.log(data1);
                        this.toastr.success('Task saved as completed successfully!');
                        this.router.navigate([
                          'home/pipoDocExport',
                              {
                                id: this.redirectid,
                                page: this.redirectpage,
                                index: this.redirectindex,
                              },
                           ]);
                        //this.router.navigate(["/home/advance-outward-remittance"]);
                      },
                      error => {
                        // this.toastr.error('Invalid inputs, please check!');
                        console.log("error")
                      });
                }
                else {
                  this.toastr.success('Task saved as completed successfully!');
                  this.router.navigate(["/home/dashboardTask"]);
                }
                //this.router.navigate(["/home/advance-outward-remittance"]);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });
          //this.router.navigate(["/home/dashboardTask"]);

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

    this.newBankArray = []
    this.bankArray.forEach((value, index) => {
      console.log('shshsh')
      if (value.bank == a) {
        this.newBankArray.push(value)
      }

    });
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

  private getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1) {
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  showPreview() {
    this.bgColor = true
    this.newDone = true
  }
  hidePreview() {
    this.bgColor = false
    this.newDone = false
  }

  removepipo(i) {
    this.itemArray.splice(i, 1)
  }

  removeshipping(i) {
    this.itemArray1.splice(i, 1)
  }

  addTofilter(event ,id){
    let removeArray =[];
     this.pipo=true;
     this.ship=false;
     this.itemArray1 = []
    if(event.target.checked){
      for(let element of this.item ){
        if(element._id == id){
          this.itemArray.push(element)
        }
      }

    }
    else{
    if(this.itemArray.length){
      this.itemArray.forEach(element => {
        if(element._id != id){
          removeArray.push(element);
        }
      });
      this.itemArray=removeArray;
    }
    }
  console.log("test",this.itemArray);
  }

  addTofilter1(event ,id){
    let removeArray  = []
      this.ship = true;
      this.pipo = false;
      this.itemArray=[];
    if(event.target.checked){
      for(let element of this.item1 ){
        if(element._id == id){
          this.itemArray.push(element)
        }
      }


    }
    else{
      if(this.itemArray1.length){
        this.itemArray1.forEach(element => {
          if(element._id != id){
            removeArray.push(element);
          }
        });
        this.itemArray1=removeArray;
      }
      }
  console.log("test2",this.itemArray);
  }

  goBack(){
    this.isGenerate = false;
    window.location.reload();
  }

  // getMaster() {
  //   let arrayMain = []
  //   this.documentService.getMaster(1).subscribe(
  //     (res: any) => {
  //       console.log(res), (this.item4 = res.data);
  //       console.log("hello the********",this.item4)

  //       // *****start shipping bill and pipo marging code***/
  //       let pipoindex = 0 ;
  //       let filtershippingdata = [];
  //       let completedpipo = [];


  //       for (let pipo of this.item1){
  //         let currentpipo = this.item1[pipoindex]

  //         this.item1[pipoindex].shippingdata = []
  //         for(let shippingdata of this.item4){


  //           if(pipo.pi_poNo == shippingdata.pipo[0]){


  //             const newVal = { ...pipo };
  //               newVal['sbno'] = shippingdata.sbno
  //               newVal['sbdate'] = shippingdata.sbdate
  //               newVal['portCode'] = shippingdata.portCode
  //               newVal['region'] = shippingdata.countryOfFinaldestination
  //               newVal['fobValue'] = shippingdata.fobValue



  //             filtershippingdata.push(newVal);

  //             if(completedpipo.indexOf(pipoindex)== -1){
  //               completedpipo.push(pipoindex)
  //             }
  //             console.log("cheching shipping data",currentpipo);

  //           }
  //         }
  //         pipoindex = pipoindex + 1;

  //       }
  //       console.log("filtershiping data",filtershippingdata);
  //       console.log("completed pipo data",completedpipo);


  //       for(let i = completedpipo.length-1; i>=0; i--){
  //         this.item1.splice(completedpipo[i],1)
  //       }
  //       for( let pipo of filtershippingdata){
  //         this.item1.push(pipo)
  //       }
  //       console.log("*******************final",this.item1);

  //       // *****end shipping bill and pipo marging code******/

  //       console.log("Hello There", arrayMain);
  //       if (arrayMain.length > 0) {

  //       }

  //     },
  //     (err) => console.log(err)
  //   );
  // }

}

