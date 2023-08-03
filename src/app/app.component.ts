import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AuthenticateService } from './service/authenticate.service';
import { AuthGuard } from './service/authguard.service';
import { DocumentService } from './service/document.service';
import { UserService } from './service/user.service';
import * as jwt_decode from 'jwt-decode';
import { StorageEncryptionDecryptionService } from './Storage/storage-encryption-decryption.service';
import { ToastrService } from 'ngx-toastr';
import { SocketIoService } from './service/SocketIo/socket-io.service';

import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { PipoDataService } from './service/homeservices/pipo.service';
import { UploadServiceValidatorService } from './components/Upload/service/upload-service-validator.service';
import { GlobalsAccessService } from './components/Upload/service/globals-access.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IdleService } from './service/idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  userData: any = [];
  userActivity: any = '';
  userInactive: Subject<any> = new Subject();
  DelayTime: any = '';
  isOnline: boolean = true;
  WithoutAuthorization: any = ['RoleVerifyEmail', 'verifyEmail', 'updatePassword', 'membersignin', 'signup', 'forgotpassword', 'resetOTP', '2FA', 'notVerified', 'authorization', 'newUser'];
  SET_TIMEOUT_TIME: any = new Date();

  constructor(
    private translate: TranslateService,
    private router: Router,
    public doc: DocumentService,
    private userService: UserService,
    public authservice: AuthenticateService,
    public sessionstorage: StorageEncryptionDecryptionService,
    public toastr: ToastrService,
    public elRef: ElementRef,
    public socketioservice: SocketIoService,
    public validator: PipoDataService,
    public Uploadvalidator: UploadServiceValidatorService,
    public globalsAccess: GlobalsAccessService,
    private deviceService: DeviceDetectorService,
    public idleservice: IdleService,
    public authGuard: AuthGuard) {
    this.translate.setDefaultLang('en');
    this.createOnline$().subscribe(isOnline => this.isOnline = isOnline);
    this.setTimeoutNew();
    // idleservice.callback(()=>this.logoutUser())
    // idleservice.wake$.subscribe(s => console.log('im awake!'));
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        var splitUrl: any = event?.url?.split('/')
        if (this.CheckIng(this.WithoutAuthorization, splitUrl[1]).length != 0) {
          console.log(event, event, 'ygffyfggfgffg')
        } else {
          let token = this.authGuard.loadFromLocalStorage();
          if (token == null) {
            this.logoutUser();
          } else {
            this.userService.getUserDetail().then((user: any) => {
              this.userData = user?.result
              let token = this.authGuard.loadFromLocalStorage();
              if (this.sessionstorage.get('PERMISSION') != null && this.sessionstorage.get('PERMISSION') != "") {
                var session: any = JSON.parse(this.sessionstorage.get('PERMISSION'));
                if ((this.userData?.role != session?.role || this.userData?.emailId != session?.emailId || !this.getTokenExit(this.userData?.LoginToken, token))) {
                  this.logoutUser();
                }
              } else {
                this.logoutUser();
              }
              if (token != null) {
                const jwtToken: any = jwt_decode.default(token);
                const timeout = jwtToken.exp - new Date().getTime();

                setTimeout(() => {
                  this.logoutUser();
                  this.toastr?.warning('Your token expired....')
                }, timeout);
              }
            });
          }
        }
        let token = this.authGuard.loadFromLocalStorage();
        if (token != null) {
          this.validator.getPipoListNo('export', '');
          this.doc.getPipoListNo('export', []);
          this.ngAfterViewInit();
        }
      }
    });
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      let token = this.authGuard.loadFromLocalStorage();
      if (this.sessionstorage.get('PERMISSION') != null && this.sessionstorage.get('PERMISSION') != "") {
        var session: any = JSON.parse(this.sessionstorage.get('PERMISSION'));
        if ((this.userData?.role != session?.role || this.userData?.emailId != session?.emailId || !this.getTokenExit(this.userData?.LoginToken, token))) {
          this.logoutUser();
        }
      } else {
        this.logoutUser();
      }
    }).catch((error: any) => {
      if (error.status == 401) {
        this.logoutUser();
      }
    });
  }

  CheckIng(data: any, value: any) {
    return value != '' && value != undefined && value != null ? data.filter((item: any) => item?.includes(value) == true) : []
  }

  ngOnInit(): void {
    this.socketioservice.connectionOn();
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      let token = this.authGuard.loadFromLocalStorage();
      if (this.sessionstorage.get('PERMISSION') != null && this.sessionstorage.get('PERMISSION') != "") {
        var session: any = JSON.parse(this.sessionstorage.get('PERMISSION'));
        if ((this.userData?.role != session?.role || this.userData?.emailId != session?.emailId || !this.getTokenExit(this.userData?.LoginToken, token))) {
          this.logoutUser();
        }
      } else {
        this.logoutUser();
      }
    }).catch((error: any) => {
      if (error.status == 401) {
        this.logoutUser();
      }
    });
  };

  setTimeoutNew() {
    this.SET_TIMEOUT_TIME=new Date();
    this.SET_TIMEOUT_TIME.setHours(120);
    // console.log(this.SET_TIMEOUT_TIME.getTime(),'asdhaskjdahsdkjasdjksad')
    // this.userActivity = setTimeout(() => {
    //   this.logoutUser();
    // }, this.SET_TIMEOUT_TIME.getTime());
  }

  addMinutes(minutes) {
    return new Date(new Date().getTime() + minutes * 60000);
  }

  // @HostListener('window:mousemove') refreshUserState() {
  //   console.log('restart active session 2hours')
  //   clearTimeout(this.userActivity);
  //   this.setTimeoutNew();
  // }

  // @HostListener('window:click') onclick() {
  //   console.log('restart active session 2hours')
  //   clearTimeout(this.userActivity);
  //   this.setTimeoutNew();
  // }

  getTokenExpirationDate(token: string): any {
    const decodedToken: any = jwt_decode.default(token);
    if (decodedToken.exp === undefined) { return null; }
    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  createOnline$() {
    return merge<any>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }

  reload() {
    window.location.reload()
  }

  getTokenExit(data: any, token: any) {
    let bool: boolean = false;
    data.forEach(element => {
      if (element?.token == token) {
        bool = true;
      }
    });
    return bool;
  }

  logoutUser() {
    this.userService.authToken = null;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(["login"]);
    this.userService.loginlogout(false).subscribe((res: any) => {
      console.log(res, 'loginlogout');
    })
  }

  ngAfterViewInit() {
    this.epicFunction();
  }

  epicFunction() {
    console.log('hello `Home` component', this.deviceService.getDeviceInfo());
  }

}
