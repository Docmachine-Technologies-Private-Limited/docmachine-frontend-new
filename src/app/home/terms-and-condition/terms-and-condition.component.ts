import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent implements OnInit {
  CURREENT_DATE: any = moment(new Date()).format('DD-MM-YYYY')
  COMPANY_INFO: any = [];
  constructor(public userService: UserService) { }

  async ngOnInit() {
    await this.userService.getTeam().subscribe(async (data: any) => {
      this.COMPANY_INFO = data?.data[0];
      console.log(data, "COMPANY_INFO")
    });
  }

}
