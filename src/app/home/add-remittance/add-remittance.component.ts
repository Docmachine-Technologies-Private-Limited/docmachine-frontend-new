import { Component, OnInit } from '@angular/core';
import { WindowInformationService } from 'src/app/service/window-information.service';

@Component({
  selector: 'app-add-remittance',
  templateUrl: './add-remittance.component.html',
  styleUrls: ['./add-remittance.component.scss']
  
})
export class AddRemittanceComponent implements OnInit {

  constructor(
    public wininfo: WindowInformationService  
  ) { }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content_top_common')   
  }

}
