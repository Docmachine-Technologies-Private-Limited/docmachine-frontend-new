import { Component, OnInit } from '@angular/core';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-approval-panel',
  templateUrl: './approval-panel.component.html',
  styleUrls: ['./approval-panel.component.scss']
})
export class ApprovalPanelComponent implements OnInit {

  constructor(public wininfo: WindowInformationService) { }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')
  }

}
