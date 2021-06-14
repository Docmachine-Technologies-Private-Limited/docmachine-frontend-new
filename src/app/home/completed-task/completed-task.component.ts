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

  constructor(private route: ActivatedRoute,private documentService: DocumentService, private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.documentService.getOneTask({ id: this.id }).subscribe(
      (res: any) => {
      
        console.log("ALL TRANSACTIONS", res);
        console.log("PIPO NO", res['task'][0]['url']);
        this.data4 = res['task'][0]['url']
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
          res['task'][0]['url']
        );
        this.data5 = res['task'][0]['pipoDetail']['doc']
        console.log(this.data5)
        this.pipoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          res['task'][0]['pipoDetail']['doc']
        );
      },
      (err) => console.log(err)
    );

  }

  public downloadPDF() {
    this.durl=this.data4.replace('application/pdf','application/octet-stream')
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
   //this.submitTask()
   // this.downloading = false;
   // this.backupClicked = false;
 }

}
