import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../service/document.service';
@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['../../../sass/application.scss', './manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {
  item2: any;

  constructor( private documentService: DocumentService, public router: Router,  private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getBene(1)
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
  

}
