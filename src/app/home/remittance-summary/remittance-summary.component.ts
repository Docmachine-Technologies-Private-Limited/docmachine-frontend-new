import { Component, OnInit } from '@angular/core';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-remittance-summary',
  templateUrl: './remittance-summary.component.html',
  styleUrls: ['./remittance-summary.component.scss']
})
export class RemittanceSummaryComponent implements OnInit {

  constructor(
    public wininfo: WindowInformationService
  ) { }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')   
  }

}
