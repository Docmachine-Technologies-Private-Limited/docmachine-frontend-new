import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';


import '../sass/application.scss';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading:boolean = true
  constructor(
    private translate: TranslateService,
    private router: Router) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }
  ngOnInit(): void {};

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.loading = false
      },700);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        this.loading = false
      },700);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        this.loading = false
      },700);
    }
  }
}
