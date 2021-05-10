import { DocumentService } from './../../../service/document.service';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request-letter',
  templateUrl: './request-letter.component.html',
  styleUrls: ['../../../../sass/application.scss', './request-letter.component.scss']
})
export class RequestLetterComponent implements OnInit {
item: any;
  item2: any;
  public data1;
  public data2;
  public data3;
  public contentDataURL1;
  public contentDataURL2;
  public contentDataURL3;

  constructor(private route:ActivatedRoute, private documentService: DocumentService, private userService: UserService) { }
  public boeNumber
  ngOnInit(): void {
    this.boeNumber = this.route.snapshot.params['boeNumber'];
    console.log(this.boeNumber)

    this.documentService.getBoeByBoe(this.boeNumber)
              .subscribe(
                  data => {
                      console.log("king123")
                      console.log(data['data'])
                      this.item= data['data']
                      //this.router.navigate(['/login'], { queryParams: { registered: true }});
                  },
                  error => {
                      console.log("error")
                  });

    this.userService.getBene(this.boeNumber)
    .subscribe(
        data => {
            console.log("king123")
            console.log(data['data'])
            this.item2= data['data']
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        error => {
            console.log("error")
        });
  }

  public downloadPDF(data) {
    const link: any = document.createElement('a');
    link.id = 'dwnldLnk';
    link.style = 'display:none;';
    document.body.appendChild(link);
    const dlnk: any = document.getElementById('dwnldLnk');
    dlnk.href = data.file;
    dlnk.download = data.filename;
    dlnk.click();
    // this.downloading = false;
    // this.backupClicked = false;
  }

  exportAsPDF(div_id) {
    const height = Math.round($('#mainId').outerHeight() * 0.0104166667 * 10 ) / 10;
    console.log($('#mainId').html());
    this.documentService.getPDF({data: $('#mainId').html(), filename: 'Final Report', format: {
        paperWidth: 7, paperHeight: height + 5,
        marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0
      }, template: './app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs'
    }).subscribe((data) => {
      if (data && data.success) {
        console.log(data)
        this.downloadPDF(data)
      }
    });
    
  }


}
