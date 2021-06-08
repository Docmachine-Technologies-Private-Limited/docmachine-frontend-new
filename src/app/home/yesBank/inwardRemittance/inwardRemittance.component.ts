import { UserService } from "./../../../service/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-axisbank",
  templateUrl: "./inwardRemittance.component.html",
  styleUrls: [
    "../../../../sass/application.scss",
    "./inwardRemittance.component.scss",
  ],
})
export class InwardRemittanceComponent implements OnInit, OnDestroy {
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

  constructor(
    private route: ActivatedRoute,
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
  };

  async ngOnInit(): Promise<void> {
    await this.getUserDetail();
    this.getPipoDetaile();

    await this.getBeneDetaile();

    this.newTask.pi_poNo = this.item2.pi_poNo;
    this.newTask.pipoDetail = this.item2;
    this.newTask.beneDetail = this.benneDetail;
    this.newTask.completed = false;

    console.log("DRAFT ", this.item2.completed);
  }

  getPipoDetaile() {
    if (this.documentService.pdfData.length !== 0) {
      this.item2 = this.documentService.pdfData;
    }
  }

  async getUserDetail() {
    const data: any = await this.userService.getUserDetail();
    this.applicant = data.result;
  }

  async getBeneDetaile() {
    const data: any = await this.userService.getBeneByName(
      this.item2.benneName
    );
    this.benneDetail = data.data;
  }

  public downloadPDF(data) {
    const link: any = document.createElement("a");
    link.id = "dwnldLnk";
    link.style = "display:none;";
    document.body.appendChild(link);
    const dlnk: any = document.getElementById("dwnldLnk");
    dlnk.href = data.file;
    dlnk.download = data.filename;
    dlnk.click();
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
          this.downloadPDF(data);
          this.submitTask();
        }
      });
  }

  submitTask() {
    this.newTask.completed = true;
    console.log(this.newTask);
    if (this.item2.completed === false && this.item2.draft === undefined) {
      this.documentService.addTask(this.newTask).subscribe(
        (res) => {
          console.log("Transaction Saved");
          this.submitted = true;
        },
        (err) => console.log("Error saving the transaction")
      );
    } else if (this.item2.draft === true) {
      this.documentService.completeTask({ _id: this.item2._id }).subscribe(
        (res) => console.log("COMPLETED"),
        (err) => console.log("ERROR")
      );
    }
  }

  ngOnDestroy() {
    console.log(this.newTask);

    if (this.item2.completed === undefined && this.item2.draft === undefined) {
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
