import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'federal-bank-import-letter-head',
  templateUrl: './import-letter-head.component.html',
  styleUrls: ['./import-letter-head.component.scss']
})
export class FederalBankImportLetterHeadComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetail().then((status: any) => {
      this.userService.getTeambyId(status?.result?.companyId).subscribe((res: any) => {
        console.log(res, 'getTeamByUser');
        if (res?.data[0]?.letterHead != '' && res?.data[0]?.letterHead != undefined) {
          $('.hdf-bank').css('background-image', 'url(' + res?.data[0]?.letterHead + ')')
        }
      })
    });
  }

}
