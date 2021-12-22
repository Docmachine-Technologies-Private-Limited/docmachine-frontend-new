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
        if (window.location.hostname === 'localhost') {
            this.apiUrl = `http://localhost:3000/v1`;
        } else if (window.location.hostname.indexOf('beta') === 0) {
            this.apiUrl = window.location.protocol + '//api.' + window.location.hostname + '/v1';
        }
        else if (window.location.hostname.indexOf('demo') === 0) {
            this.apiUrl = window.location.protocol + '//api.' + window.location.hostname + '/v1';
        }
        else if (window.location.hostname.indexOf('live') === 0) {
            this.apiUrl = window.location.protocol + '//api.' + window.location.hostname + '/v1';
        }

        // else if (window.location.hostname.indexOf('qa') > -1) {
        //     this.apiUrl = window.location.protocol + '//' + window.location.hostname + ':9000/api';
        // } else if (window.location.hostname.indexOf('beta') > -1) {
        //     this.apiUrl = window.location.protocol + '//beta.api.wrked.com/v1';
        // } else if (window.location.hostname.indexOf('prod') > -1) {
        //     this.apiUrl = window.location.protocol + '//' + window.location.hostname + ':9000/api';
        // }
    }
}