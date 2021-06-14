import { UserService } from "./../../../service/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-inward-remittance-boe',
  templateUrl: './inward-remittance-boe.component.html',
  styleUrls: ["../../../../sass/application.scss",'./inward-remittance-boe.component.scss']
})
export class InwardRemittanceBoeComponent implements OnInit {
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
    boeNumber: "",
    boeDetail: [],
    beneDetail: [],
    completed: false,
    url : ""
  };

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['boeNumber'];
    console.log(this.id)
    await this.getUserDetail();
    this.getPipoDetaile();

    

    
     
    console.log("DRAFT ", this.item2);
    console.log("DRAFT ", this.newTask);
  }

  getPipoDetaile() {
    this.documentService.getBoeByBoe(this.id)
    .subscribe(
        data => {
            console.log("king123")
            console.log(data)
            console.log(data['data'])
            this.item2= data['data']
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
      this.item2.beneName
    );
    this.benneDetail = data.data;
    this.newTask.boeNumber = this.item2.boeNumber;
    this.newTask.boeDetail = this.item2;
    this.newTask.beneDetail = this.benneDetail;
    this.newTask.completed = false;
    console.log("bene", this.benneDetail)
  }

  public downloadPDF() {
     console.log("DATA",this.data4)
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
  }

  exportAsPDF(div_id) {
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
          this.newTask.url = this.data5;
          this.submitTask()
          //this.downloadPDF(data);
        }
      });
  }

  async submitTask() {
    this.newTask.completed = true;
    console.log(this.newTask);
    
      console.log("shshsh")
      if (this.documentService.draft === undefined) {
        console.log("shshsh")
        this.documentService.addTask(this.newTask).subscribe(
          (res) => {
            console.log("Transaction Saved");
            this.submitted = true;
          },
          (err) => console.log("Error saving the transaction")
        );
      } else if (this.documentService.draft === true) {
        console.log("hhhh")
        this.documentService.completeTask({ _id: this.documentService.task._id }).subscribe(
          (res) => console.log("COMPLETED"),
          (err) => console.log("ERROR")
        );
      }
    
  }

  ngOnDestroy() {
    console.log(this.newTask)
  
      if (!this.data5) {
        this.documentService.addTask(this.newTask).subscribe(
          (res) => {
            console.log("Saved as draft");
            window.alert("Transcation Saved as draft");
          },
          (err) => console.log("Cant save as draft")
        );
      }

    
  }

}
