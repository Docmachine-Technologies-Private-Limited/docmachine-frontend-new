import { Component, HostListener } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../environments/environment';
import '../sass/application.scss';
import { AuthGuard } from './service/authguard.service';
import { DocumentService } from './service/document.service';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userData: any = [];
  userActivity;
  userInactive: Subject<any> = new Subject();
  
  constructor(
    private translate: TranslateService,
    private router: Router,public doc:DocumentService,
    private userService: UserService,
    public authGuard: AuthGuard) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this.setTimeout();
    this.userInactive.subscribe(() => console.log('user has been inactive for 3s'));
  }
  ngOnInit(): void {
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      console.log("userData", this.userData)
      var session:any=JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
      if (this.authGuard.getLocalStorage('PERMISSION')==null || this.userData?.role!=session?.role) {
        this.router.navigate(['/login']);
      }
    });
  };
  setTimeout() {
    this.userActivity = setTimeout(() => {this.userInactive.next(undefined); this.router.navigate(['/login'])}, 7200000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    console.log('restart active session 2hours')
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
  @HostListener('window:click') onclick() {
    console.log('restart active session 2hours')
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
