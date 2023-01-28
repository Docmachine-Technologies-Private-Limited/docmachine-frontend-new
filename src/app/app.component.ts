import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import '../sass/application.scss';
import { AuthGuard } from './service/authguard.service';
import { DocumentService } from './service/document.service';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private router: Router,public doc:DocumentService,
    public authGuard: AuthGuard) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
  }
  ngOnInit(): void {
    if (this.authGuard.getLocalStorage('PERMISSION')==null) {
      this.router.navigate(['/login']);
    }
  };

}
