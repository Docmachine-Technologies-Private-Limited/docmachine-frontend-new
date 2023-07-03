import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../service/document.service';
import { UserService } from '../../service/user.service';
import { WindowInformationService } from '../../service/window-information.service';

@Component({
  selector: 'app-idpms-recon-table',
  templateUrl: './idpms-recon-table.component.html',
  styleUrls: ['./idpms-recon-table.component.scss']
})
export class IdpmsReconTableComponent implements OnInit {

  masterTeam;
  bankAccounts:any = [];
  bankSelection = "";
  edpmsData;
  constructor(private userService: UserService, private documentService: DocumentService,
    private router: Router,
    public wininfo: WindowInformationService) { }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270,'.content-wrap')
    this.userService.getTeam()
      .subscribe((res: any) => {
        this.masterTeam = res?.data[0]?.bankDetails;
        this.masterTeam.forEach( (acc:any) => this.bankAccounts.push(acc?.bank));
        console.log('banks:', this.bankAccounts);
      }, err => {
        console.log(err);
       });

    this.documentService.getEDPMS().subscribe( (res: any) => {
      this.edpmsData = res?.data;
      console.log("Edpms Data", this.edpmsData)
    }, err => {
      console.log(err)
    });
  }

  chooseBank() {
    if(this.bankSelection && this.bankSelection !== "") {
      console.log(this.bankSelection, ' is selected');
    }
  }

  actionEvent(act, sbNo) {
    if(act === 'Upload Documents') {
      this.router.navigateByUrl('/home/upload;file=export;document=pipo');
    } else if (act === 'Create Documents') {
      this.router.navigate(['/home/bill-lodgement', {sbNo: sbNo}]);
    }
  }

  openNew(){
    this.router.navigateByUrl('/home/edpms-recon');
  }
}
