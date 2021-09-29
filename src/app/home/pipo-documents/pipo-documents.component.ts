
import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-pipo-documents',
  templateUrl: './pipo-documents.component.html',
  styleUrls: ["../../../sass/application.scss", './pipo-documents.component.scss']
})
export class PipoDocumentsComponent implements OnInit {
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice = false;
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
  url: any;
  file: any;
  doc: string;
  pipo: boolean;
  boe: boolean;
  sb: boolean;
  docu: any;
  pipoNo: any;
  toggle: boolean = false;

  piPoForm = new FormGroup({
    pi_poNo: new FormControl("", [
      Validators.required,
      Validators.minLength(4)]),
    benneName: new FormControl("", Validators.required),
    currency: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    incoterm: new FormControl("", Validators.required),
    lastDayShipment: new FormControl("", Validators.required),
    paymentTerm: new FormArray([this.initCourse()], Validators.required),
    pcRefNo: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    dueDate: new FormControl("", Validators.required),
  });
  pipoData: any;
  payTerm: any;
  benneDetail: any;
  documentType: any;
  beneValue: any;

  constructor(
    private formBuilder: FormBuilder,
    public documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.documentService.getPipo().subscribe(
        (res: any) => {
          console.log("HEre Response", res), (this.item1 = res.data);
        },
        (err) => console.log(err)
      );

      this.showInvoice = false;
      console.log("hello")
    });

    this.userService.getBene(1).subscribe(
      (res: any) => {
        (this.benneDetail = res.data),
          console.log("Benne Detail", this.benneDetail);
      },
      (err) => console.log("Error", err)
    );




  }

  getTransactions(selectedRowValues) {
    this.documentService.getTask({ pi_poNo: selectedRowValues, file: "advance" }).subscribe(
      (res: any) => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      },
      (err) => console.log(err)
    );
  }

  toggleClick() {
    this.toggle = true
  }

  initCourse() {
    console.log('hdhdhdh')
    return this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(11)]],
      type: ['', [Validators.required]],
      amount: ['', Validators.required]
    });
  }

  getCourses(form) {
    return form.get('paymentTerm').controls;
  }

  clickBene(value) {
    console.log('hhddh')
    this.beneValue = value
  }

  getInvoices(selectedRowValues, i) {
    console.log("SELECTED", selectedRowValues);
    console.log("INDEX", i);
    console.log(selectedRowValues.doc);
    this.pipoData = selectedRowValues
    this.payTerm = this.pipoData.paymentTerm
    console.log(this.pipoData)
    console.log(this.pipoData.paymentTerm)
    this.documentType = this.pipoData.document
    this.lastIndex = i;
    this.pipoNo = selectedRowValues.pi_poNo
    this.beneValue = this.pipoData.benneName
    //this.docu = selectedRowValues.doc;
    this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(
      selectedRowValues.doc
    );
    return (
      (this.selectedRow = selectedRowValues),
      (this.showInvoice = true),
      (this.tableWidth = "30%"),
      (this.greaterAmount = parseInt(this.selectedRow.amount))
    );
  }

  pipoClick() {
    console.log("upload")
    this.router.navigate(['home/upload', { file: 'import', document: 'pipo' }]);
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

  // onAddCourse(a) {
  //   console.log(a)
  //   if (a === 1) {
  //     console.log(a)
  //     let control = this.loginForm.controls.bankDetails as FormArray;
  //     control.push(this.initCourse());
  //     if (this.i >= this.details.length) {
  //       this.details.push([])
  //     }
  //     this.i++
  //   }
  //   else {
  //     console.log(a)

  //     if (a.controls.bankDetails.invalid) {
  //       this.submitted1 = true
  //       this.toastr.error('You can add another bank after filling first one!');
  //       console.log("2")
  //       this.isDisabled = false;
  //       return;
  //     }

  //     const control = this.loginForm.get('bankDetails') as FormArray;
  //     control.push(this.initCourse());
  //     if (this.i >= this.details.length) {
  //       this.details.push([])
  //     }
  //     this.z++
  //     this.i++
  //   }


  // }

  viewTask(data) {
    console.log(data)
    if (!data.completed) {
      this.documentService.task = data
      this.documentService.draft = true;
      //data.pipoDetail["_id"] = data._id;
      this.documentService.pdfData = data.pipoDetail;
      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
      } else {
        console.log(this.selectedDoc);
        this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);

      }

    } else {
      this.router.navigateByUrl(`/home/completedTask/${data._id}`);
    }

  }

  showThisPdf(piPo) {
    this.documentService.draft = false;
    if (parseInt(this.selectedRow.amount) < 200000) {
      this.documentService.pdfData = this.selectedRow;
      this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
    } else {
      console.log(this.selectedDoc);


      this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);

    }
  }
}
