import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
DocumentService
@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['../../../sass/application.scss', './dashboard-task.component.scss']
})
export class DashboardTaskComponent implements OnInit {
  item: any;
  item1: any = [];
  playerName: any;
  nt:boolean;
  nt2:boolean;
  nt3:boolean;
  nt4:boolean;

  constructor(public documentService: DocumentService) { }

  ngOnInit(): void {
    console.log("hjdhjhjhj")
    this.item1 = []
    this.documentService.getTypeExportTask({ fileType: 'BL' }).subscribe(
      (res: any) => {
        console.log("hjdhjhjhj")
        console.log("ALL TRANSACTIONS", res);
        this.item = res.data

        for (let value of this.item) {

          if (!value.task[0].bankRef && value.completed == 'yes') {
            this.item1.push(value)
          }

        }
        console.log(this.item1)
      },
      (err) => console.log(err)
    );
  }
  public manage1Task() {
    this.nt = !this.nt;
  }
  public manage2Task() {
    this.nt2 = !this.nt2;
  }
  public manage3Task(){
    this.nt3 = !this.nt3;
  }
  public manage4Task(){
    this.nt4 = !this.nt4;
  }
  onSubmit(a, b) {
    console.log(a.target.player.value)
    console.log(b)
    b.task[0].bankRef = a.target.player.value
    b.completed = 'yes'
    console.log(b)
    this.documentService.updateExportTask(b, b._id).subscribe(
      (data) => {
        console.log("king123");
        console.log(data);
        this.ngOnInit()
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      (error) => {
        console.log("error");
      }
    );
  }

}
