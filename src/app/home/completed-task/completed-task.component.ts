import { UserService } from "./../../service/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['../../../sass/application.scss', './completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  id: any;
  url: any;
  data4: any;
  durl: any;
  data5: any;
  pipoUrl: any;
  url1: any;
  url2: any;
  item: any;
  data3: any;
  durl1: any;
  value1: any;
  value2: any;

  constructor(private route: ActivatedRoute, private documentService: DocumentService, private sanitizer: DomSanitizer, public router: Router,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.documentService.getOneTask({ id: this.id }).subscribe(
      (res: any) => {

        console.log("ALL TRANSACTIONS", res);
        console.log("PIPO NO", res['task'][0]);
        this.item = res['task'][0]
        this.data3 = res['task'][0]['url1']
        this.data4 = res['task'][0]['url2']
        this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl(
          res['task'][0]['url1']
        );

        this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl(
          res['task'][0]['url2']
        );
        this.value1 = res['task'][0]['boeDetails'];
        this.value2 = res['task'][0]['pipoDetail'];
        console.log(this.value1)
        console.log(this.value2)
        if (res['task'][0]['pipoDetail'] === undefined) {
          console.log("shhshshsh888")
          this.data5 = res['task'][0]['boeDetails']['doc']
        }

        else if (res['task'][0]['boeDetails'] === undefined) {
          console.log("shhshshsh888")
          this.data5 = res['task'][0]['pipoDetail']['doc']
        }

        console.log(this.data5)
        this.pipoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.data5
        );
      },
      (err) => console.log(err)
    );

  }

  public downloadPDF() {
    if (!this.data4) {
      this.durl = this.data3.replace('application/pdf', 'application/octet-stream')
      console.log("DATA")
      const link: any = document.createElement("a");
      link.id = "dwnldLnk";
      link.style = "display:none;";
      document.body.appendChild(link);
      const dlnk: any = document.getElementById("dwnldLnk");
      dlnk.href = this.durl;
      console.log(dlnk)
      console.log(dlnk.href)
      dlnk.download = "finalReport.pdf";
      dlnk.click();
    }
    else {
      this.durl = this.data3.replace('application/pdf', 'application/octet-stream')
      console.log("DATA")
      const link: any = document.createElement("a");
      link.id = "dwnldLnk";
      link.style = "display:none;";
      document.body.appendChild(link);
      const dlnk: any = document.getElementById("dwnldLnk");
      dlnk.href = this.durl;
      console.log(dlnk)
      console.log(dlnk.href)
      dlnk.download = "fwb.pdf";
      dlnk.click();

      this.durl1 = this.data4.replace('application/pdf', 'application/octet-stream')
      console.log("DATA")
      const link1: any = document.createElement("a");
      link1.id = "dwnldLnk";
      link1.style = "display:none;";
      document.body.appendChild(link1);
      const dlnk1: any = document.getElementById("dwnldLnk");
      dlnk1.href = this.durl1;
      dlnk1.download = "advanceRemitance.pdf";
      dlnk1.click();

    }


    //this.submitTask()
    // this.downloading = false;
    // this.backupClicked = false;
  }

  public done() {
    if (this.item.boeNumber) {
      this.router.navigateByUrl("/home/direct-import-payment");
    }
    else if (this.item.pi_poNo) {
      this.router.navigateByUrl("/home/advance-outward-remittance");
    }
  }

}