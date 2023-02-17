import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class AppConfig {
    public apiUrl = '';

    constructor(@Inject(PLATFORM_ID) public platformId: Object) {
      console.log(platformId,'pllllllllllllllllllllllllll')
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            // this.getConstants();
            this.getConstantsAtServer();
        }
        if (isPlatformServer(this.platformId)) {
            // Server only code.
            this.getConstantsAtServer();
        }
    }

    public getConstantsAtServer() {
        // this.apiUrl = `https://stagingapi.bharathexim.com/v1`;
        this.apiUrl = `https://demoapi.bharathexim.com/v1`;
        // this.apiUrl = `http://localhost:8080/v1`;
        // this.apiUrl = `https://devappapi.bharathexim.com/v1`;
    }


    public getConstants() {
         this.apiUrl = `http://localhost:8080/v1`;
         // this.apiUrl = `https://stagingapi.bharathexim.com/v1`;
        //  this.apiUrl = `https://devappapi.bharathexim.com/v1`;
    }
}
