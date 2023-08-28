import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tally-api-connector',
  templateUrl: './tally-api-connector.component.html',
  styleUrls: ['./tally-api-connector.component.scss']
})
export class TallyApiConnectorComponent implements OnInit {
  COMPANY_INFO: any = [];
  constructor(public userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getTeam().subscribe((res: any) => this.COMPANY_INFO = res?.data[0]);
  }

  copyInputMessage(inputElement: any, value: any) {
    if (this.COMPANY_INFO?.AuthorizationTallyToken == value) {
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
    } else {
      this.toastr.error("Please check your invite id is different copy you...")
    }
  }

  downloadExe() {
    if (this.COMPANY_INFO?.AuthorizationTallyToken != undefined && this.COMPANY_INFO?.AuthorizationTallyToken != null && this.COMPANY_INFO?.AuthorizationTallyToken != "") {
      var link: any = document.createElement("a");
      link.download = "bharathexim.exe";
      link.href = "../../../assets/EXE_FILE_TALLY/Bharathexim (1).exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      this.toastr.error("You don't have any invite id..\n please genrate new invite id..")
    }
  }

  genrateInviteId() {
    this.userService.updateTeam({ AuthorizationTallyToken: this.generate_token(32) }).subscribe((res: any) => this.ngOnInit());
  }
  generate_token(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b: any = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  }
}
