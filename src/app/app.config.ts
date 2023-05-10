import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AuthGuard } from './service/authguard.service';

@Injectable()
export class AppConfig {
    public apiUrl = '';
    // public DEV_STAGGING_LIVE:any=['①']
    public DEV_STAGGING_LIVE:any=['②']
    constructor(@Inject(PLATFORM_ID) public platformId: Object,public authGuard: AuthGuard) {
      console.log(platformId,'pllllllllllllllllllllllllll')
        if (isPlatformBrowser(this.platformId)) {
            this.getConstantsAtServer();
        }
        if (isPlatformServer(this.platformId)) {
            this.getConstantsAtServer();
        }
    }

    public getConstantsAtServer() {
         this.apiUrl = `https://stagingbackend.bharathexim.com/v1`;
        // this.apiUrl = `https://dockerapi.bharathexim.com/v1`;
        // this.apiUrl = `https://devappapi.bharathexim.com/v1`;
        // this.apiUrl = `http://localhost:8081/v1`;
    }


    public getConstants() {
         this.apiUrl = `http://localhost:8081/v1`;
         // this.apiUrl = `https://stagingapi.bharathexim.com/v1`;
        //  this.apiUrl = `https://devappapi.bharathexim.com/v1`;
    }
}
