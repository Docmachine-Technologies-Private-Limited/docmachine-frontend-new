import { Component, HostListener, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../environments/environment';
import '../sass/application.scss';
import { AuthenticateService } from './service/authenticate.service';
import { AuthGuard } from './service/authguard.service';
import { DocumentService } from './service/document.service';
import { UserService } from './service/user.service';
import * as jwt_decode from 'jwt-decode';
import { StorageEncryptionDecryptionService } from './Storage/storage-encryption-decryption.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userData: any = [];
  userActivity;
  userInactive: Subject<any> = new Subject();
  DelayTime: any = '';
  WithoutAuthorization: any = ['verifyEmail', 'updatePassword', 'membersignin','signup','forgotpassword','resetOTP'];
  constructor(
    private translate: TranslateService,
    private router: Router, public doc: DocumentService,
    private userService: UserService,
    public authservice: AuthenticateService,
    public sessionstorage: StorageEncryptionDecryptionService,
    public authGuard: AuthGuard) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this.DelayTime = new Date(new Date().getTime() + (1 * 60 * 1000));
    this.setTimeoutNew();
    router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        var splitUrl: any = event?.url?.split('/')
        // console.log(this.CheckIng(this.WithoutAuthorization, splitUrl[1]), splitUrl, 'CheckIng')
        if (this.CheckIng(this.WithoutAuthorization, splitUrl[1]).length != 0) {
          console.log(event, event, 'ygffyfggfgffg')
        } else {
          let token = this.authGuard.loadFromLocalStorage();
          if (token == null) {
            this.authservice.logout();
            this.router.navigate(['/login']);
          }
        }
      }
    });

    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     var splitUrl:any=event?.url?.split('/')
    //     console.log(this.CheckIng(this.WithoutAuthorization,splitUrl[1]),splitUrl,'CheckIng')
    //     if (this.CheckIng(this.WithoutAuthorization,splitUrl[1]).length!=0) {
    //       console.log(event,event, 'ygffyfggfgffg')
    //     } else {
    //       let token = this.authGuard.loadFromLocalStorage();
    //       if (token == null) {
    //         this.authservice.logout();
    //         this.router.navigate(['/login']);
    //       }
    //     }
    //   }
    // });

    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      // let val: any = jwt_decode.default(token);
      let token = this.authGuard.loadFromLocalStorage();
      var session: any = JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
      if (this.authGuard.getLocalStorage('PERMISSION') == null || this.userData?.role != session?.role && !token) {
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    });
  }
  CheckIng(data: any, value: any) {
    return data.filter((item: any) => item?.includes(value) == true)
  }

  ngOnInit(): void {
    // this.userService.getUserDetail().then((user: any) => {
    //   this.userData = user?.result
    //   console.log("AppComponentuserData", this.userData)
    //   let token = this.authGuard.loadFromLocalStorage();
    //   var session: any = JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
    //   if (this.authGuard.getLocalStorage('PERMISSION') == null || this.userData?.role != session?.role && !token) {
    //     this.authservice.logout();
    //     this.router.navigate(['/login']);
    //   }
    // }).catch((reserror) => {
    //   let token = this.authGuard.loadFromLocalStorage();
    //   let val: any = jwt_decode.default(token);
    //   if (reserror?.error == "Unauthorized") {
    //     this.authservice.logout();
    //     this.router.navigate(['/login']);
    //   }
    //   console.log("AppComponentuserData", reserror, val, Date.now(), token.exp * 1000)
    // });
  };
  setTimeoutNew() {
    this.userActivity = setTimeout(() => {
      this.userInactive.next(undefined);
      this.authservice.logout();
      this.router.navigate(['/login']);
    }, 7200000);
    // let token = this.authGuard.loadFromLocalStorage();
    // if (token != undefined && token != '' && token != null && this.authGuard.getLocalStorage('PERMISSION')!= null ) {
    //   const currentTime = new Date(new Date().getTime())
    //   let interval = setInterval(() => {
    //     this.sessionstorage.set('UserActive', { expTime: this.DelayTime.getTime(), ActualTime: currentTime.getTime(), status: currentTime.getTime() > this.DelayTime.getTime() })
    //     console.clear();
    //     console.log(this.sessionstorage.get('UserActive'))
    //     if (this.sessionstorage.get('UserActive')?.status) {
    //       this.userInactive.next(undefined);
    //       this.authservice.logout();
    //       this.router.navigate(['/login']);
    //       clearInterval(interval);
    //       this.sessionstorage.remove('UserActive')
    //     }
    //   },1000)
    // }
  }
  addMinutes(minutes) {
    return new Date(new Date().getTime() + minutes * 60000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    console.log('restart active session 2hours')
    clearTimeout(this.userActivity);
    this.setTimeoutNew();
  }
  @HostListener('window:click') onclick() {
    console.log('restart active session 2hours')
    clearTimeout(this.userActivity);
    this.setTimeoutNew();
  }
}
