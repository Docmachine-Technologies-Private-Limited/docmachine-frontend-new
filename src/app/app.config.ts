import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class AppConfig {
    public apiUrl = '';

    constructor(@Inject(PLATFORM_ID) public platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            this.getConstants();
        }
        if (isPlatformServer(this.platformId)) {
            // Server only code.
            this.getConstantsAtServer();
        }
    }

    public getConstantsAtServer() {
        this.apiUrl = `http://localhost:3000/v1`;
    }

    public getConstants() {
                this.apiUrl = `http://betabharathexim-env.eba-vkbawzpw.ap-south-1.elasticbeanstalk.com/v1`;
    }
}
