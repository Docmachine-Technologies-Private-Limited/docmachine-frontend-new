import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DocumentService } from "../../../service/document.service";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-fbg-wavier",
  templateUrl: "./fbg-wavier.component.html",
  styleUrls: ["./fbg-wavier.component.scss"],
})
export class FbgWavierComponent implements OnInit {
  item: any;
  item2: any;
  public applicant: any = [];
  public benneDetail: any = [];
  public submitted = false;
  public pipoDetail: any = [];

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // this.getPipoDetail();
    this.pipoDetail = this.documentService.pdfData;
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
    console.log(height);
    console.log($("#mainId").html());
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: 13,
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
        }
      });
  }
}
