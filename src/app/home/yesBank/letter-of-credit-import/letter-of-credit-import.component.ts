import { UserService } from "./../../../service/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-letter-of-credit-import',
  templateUrl: './letter-of-credit-import.component.html',
  styleUrls: ['../../../../sass/application.scss', './letter-of-credit-import.component.scss']
})
export class LetterOfCreditImportComponent implements OnInit, OnDestroy {
  item: any;
  item2: any = [];
  public data1;
  public data2;
  public data3;
  public contentDataURL1;
  public contentDataURL2;
  public contentDataURL3;
  public applicant: any = [];
  public benneDetail: any = [];
  public submitted = false;
  data5: any;
  data6: any;
  data4: any;
  id: any;
  data8: any;
  data7: any;
  data9: any;
  done: boolean = false;
  doc: any;
  item3: any;
  letterHead: any;
  file: string;
  arr: any;
  words: any;
  amount: any;
  pipoValue: any = [];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private documentService: DocumentService,
    private userService: UserService,
    private router: Router
  ) {
    router.events.subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === "popstate") {
        // Perform actions
        console.log("Pressed Back");
      }
    });
  }

  newTask = {
    pi_poNo: "",
    pipoDetail: [],
    beneDetail: [],
    completed: false,
    url1: "",
    url2: "",
    file: "",
    bank: "yesBank",
    ca: false
  };

  async ngOnInit(): Promise<void> {

    this.file = this.route.snapshot.paramMap.get('file');
    this.id = this.route.snapshot.params['boeNumber'];
    this.amount = this.route.snapshot.params['amount']
    console.log(this.route.snapshot.params['pipo'])
    this.words = this.route.snapshot.params['pipo']
    console.log(this.words)
    console.log(this.id)
    this.pipoValue = this.words.split(',')
    console.log(this.words[0])
    console.log(this.pipoValue)
    this.id = this.pipoValue[0]
    console.log(this.id)
    console.log(this.file)
    this.newTask.file = this.file;

    // this.id = this.route.snapshot.paramMap.get('pipo');
    // this.file = this.route.snapshot.paramMap.get('file')
    // console.log(this.id)
    // console.log(this.file)
    // this.newTask.file = this.file;
    await this.getUserDetail();
    this.getPipoDetaile();
    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'][0])
          this.item3 = data['data'][0]
          console.log(this.item3)
          if (data['data'] && data['data'][0] && data['data'][0].file && data['data'][0].file[0]) {
            this.letterHead = data['data'][0].file[0]["Letter Head"]
          }
          console.log(this.item3.gst)
          this.arr = this.item3.gst.split('');
          console.log(this.arr)
          //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })

        },
        error => {
          console.log("error")
        });




    console.log("DRAFT ", this.item2);
    console.log("DRAFT ", this.newTask);
  }

  getPipoDetaile() {
    this.documentService.getPipoByPipoNo(this.id)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          console.log(data['data'][0])
          this.item2 = data['data'][0]
          this.doc = this.sanitizer.bypassSecurityTrustResourceUrl(
            data['data'][0]['doc']
          );
          this.getBeneDetaile()
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        error => {
          console.log("error")
        });
    console.log("pipo", this.item2)
  }

  async getUserDetail() {
    const data: any = await this.userService.getUserDetail();
    this.applicant = data.result;
    console.log("applicant", this.applicant)
  }

  async getBeneDetaile() {
    console.log("inside")
    console.log(this.item2)
    const data: any = await this.userService.getBeneByName(
      this.item2.benneName
    );
    this.benneDetail = data.data;
    this.newTask.pi_poNo = this.item2.pi_poNo;
    this.newTask.pipoDetail = this.item2;
    this.newTask.beneDetail = this.benneDetail;
    this.newTask.completed = false;
    console.log("bene", this.benneDetail)
  }

  public downloadPDF() {
    console.log("DATA", this.data4)
    const link: any = document.createElement("a");
    link.id = "dwnldLnk";
    link.style = "display:none;";
    document.body.appendChild(link);
    const dlnk: any = document.getElementById("dwnldLnk");
    dlnk.href = this.data4.file;
    console.log(dlnk)
    console.log(dlnk.href)
    dlnk.download = this.data4.filename;
    dlnk.click();

    //this.submitTask()
    // this.downloading = false;
    // this.backupClicked = false;
    // console.log("DLINK", dlnk);
  }

  exportAsPDF(div_id) {
    const height = Math.round($("#mainId").outerHeight() * 0.0104166667 * 10) / 10;
    //console.log($("#mainId").html());
    console.log(height)
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height - 15,
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
          this.newTask.url1 = this.data5;
          this.done = true
          //this.downloadPDF(data);
        }
      });
  }

  edit() {
    this.done = false;
  }

  async submitTask() {
    this.newTask.completed = true;
    console.log(this.newTask);

    console.log(this.documentService.draft)
    if (this.documentService.draft === false) {
      console.log("shshsh")
      this.documentService.addTask(this.newTask).subscribe(
        (res) => {
          console.log("Transaction Saved");
          this.submitted = true;
          this.userService.updateManyPipo(this.pipoValue, 'lcIssuance1', this.newTask.url1)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)
                this.router.navigate(["/home/lc-isurance"]);
                //this.toastr.success('PI/PO updated successfully.');
                // this.docTog = false
                // this.toggle = false
                // this.toggle2 = false
                // this.toastr.success('Company details updated successfully.');
                // this.router.navigate(['/home/dashboardNew']);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });

        },
        (err) => console.log("Error saving the transaction")
      );
    } else if (this.documentService.draft === true) {
      console.log("hhhh")
      this.documentService.completeTask({ _id: this.documentService.task._id, task: this.newTask }).subscribe(
        (res) => {
          console.log("COMPLETED");
          this.userService.updateManyPipo(this.pipoValue, 'lcIssuance1', this.newTask.url1)
            .subscribe(
              data => {
                //this.pipoData[`${this.pipoDoc}`] = args[1].data
                console.log("king123")
                console.log(data)
                this.router.navigate(["/home/lc-isurance"]);
                //this.toastr.success('PI/PO updated successfully.');
                // this.docTog = false
                // this.toggle = false
                // this.toggle2 = false
                // this.toastr.success('Company details updated successfully.');
                // this.router.navigate(['/home/dashboardNew']);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });

        },
        (err) => console.log("ERROR")
      );
    }


  }

  ngOnDestroy() {
    //console.log(this.data5)
    console.log(this.newTask)
    console.log(this.documentService.draft)
    console.log(this.submitted)
    if (this.documentService.draft === false && this.submitted === false) {
      console.log()
      this.documentService.addTask(this.newTask).subscribe(
        (res) => {
          console.log("Saved as draft");
          // window.alert("Transcation Saved as draft");
        },
        (err) => console.log("Cant save as draft")
      );
    }


  }
}

