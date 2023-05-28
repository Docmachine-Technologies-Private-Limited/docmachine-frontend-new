import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import { SocketIoService } from './service/SocketIo/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  userData: any = [];
  userActivity;
  userInactive: Subject<any> = new Subject();
  DelayTime: any = '';




  WithoutAuthorization: any = ['RoleVerifyEmail','verifyEmail', 'updatePassword', 'membersignin', 'signup', 'forgotpassword', 'resetOTP', '2FA', 'notVerified', 'authorization', 'newUser'];
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
    public authGuard: AuthGuard) {
    this.translate.setDefaultLang('en');
    let token = this.authGuard.loadFromLocalStorage();

    this.setTimeoutNew();
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        var splitUrl: any = event?.url?.split('/')
        if (this.CheckIng(this.WithoutAuthorization, splitUrl[1]).length != 0) {
          console.log(event, event, 'ygffyfggfgffg')
        } else {
          let token = this.authGuard.loadFromLocalStorage();
          if (token == null) {
            this.authservice.logout();
            this.router.navigate(['/login']);
          } else {
            this.userService.getUserDetail().then((user: any) => {
              this.userData = user?.result
              let token = this.authGuard.loadFromLocalStorage();
              var session: any = JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
              if (this.authGuard.getLocalStorage('PERMISSION') == null || this.userData?.role != session?.role) {
                this.authservice.logout();
                this.router.navigate(['/login']);
              }
              if (token != null) {
                const jwtToken: any = jwt_decode.default(token);
                const timeout = jwtToken.exp - new Date().getTime();
                setTimeout(() => {
                  this.authservice.logout();
                  this.router.navigate(['/login']);
                  this.toastr?.warning('Your token expired....')
                }, timeout);
                console.log('AppConfig', AppConfig, jwtToken.exp, timeout);
              }
            });
          }
        }
      }
    });
    this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      let token = this.authGuard.loadFromLocalStorage();
      var session: any = JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
      if (this.authGuard.getLocalStorage('PERMISSION') == null || this.userData?.role != session?.role && !token) {
        this.authservice.logout();
        this.router.navigate(['/login']);
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
      var session: any = JSON.parse(this.authGuard.getLocalStorage('PERMISSION'));
      if (this.authGuard.getLocalStorage('PERMISSION') == null || this.userData?.role != session?.role && !token) {
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
      // this.socketioservice?.socket.emit('received', JSON.stringify(this.userData));
    });
    // this.socketioservice?.socket.on('data1', (res) => {
    //   console.log(res,'socket data1')
    // })

    // this.socketioservice?.socket.on('data2', (res) => {
    //   console.log(res,'socket data2')
    // })
  };

  setTimeoutNew() {
    this.userActivity = setTimeout(() => {
      this.userInactive.next(undefined);
      this.authservice.logout();
      this.router.navigate(['/login']);
    }, 7200000);
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
  ngOnDestroy(): void {
    confirm('dgsdfjgfjfdgfdsjhgsdfjfdsg')
  }
  doBeforeUnload(event) {
    console.log(window.event, 'window.event')
  }

  getTokenExpirationDate(token: string): any {
    const decodedToken: any = jwt_decode.default(token);
    if (decodedToken.exp === undefined) { return null; }
    const date = new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }
}
