import { AuthGuard } from './../../service/authguard.service';
import { AuthenticateService } from './../../service/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../sass/application.scss', './sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mt: boolean;
  exp: boolean;
  inw: boolean;
  imp: any;
  out: any;
  others: boolean;
  nt: boolean;

  constructor(public router: Router, public authservice: AuthenticateService, public authGuard: AuthGuard) { }

  ngOnInit(): void {
    let token = this.authGuard.loadFromLocalStorage()
    if (!token) {
      this.router.navigate(['login']);
    }

  }
  public logout() {
    this.authservice.logout();
    this.router.navigate(['login']);
  }

  public manageTask() {
    this.mt = !this.mt;
  }

  public newTask() {
    this.nt = !this.nt
  }

  public export() {
    this.exp = !this.exp
  }

  public inward() {
    this.inw = !this.inw
  }

  public import() {
    this.imp = !this.imp;
  }

  public outward() {
    this.out = !this.out
  }

  public other() {
    this.others = !this.others
  }

}
