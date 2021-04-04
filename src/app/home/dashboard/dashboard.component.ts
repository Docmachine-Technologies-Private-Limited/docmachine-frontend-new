import { DocumentService } from './../../service/document.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../sass/application.scss','./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public item;
  public user;
  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getMaster(this.user)
            .subscribe(
                data => {
                    console.log("king123")
                    console.log(data['data'])
                    this.item = data['data']
                    //this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    console.log("error")
                });
    
  }

}
