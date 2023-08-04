import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'federal-bank-exportletterhead',
  templateUrl: './exportletterhead.component.html',
  styleUrls: ['./exportletterhead.component.scss']
})
export class FederalBankExportletterheadComponent implements OnInit,OnChanges {
  @Input('data') data: any = [];

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

  
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue;
    console.log(changes, 'FederalBankExportletterheadComponent')
  }
}
