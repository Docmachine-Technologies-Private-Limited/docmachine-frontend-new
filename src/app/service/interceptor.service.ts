import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { catchError, finalize, map, Observable, throwError } from "rxjs";
import { DocumentService } from "./document.service";
import { Router } from "@angular/router";
import { AuthenticateService } from "./authenticate.service";
import { AuthGuard } from "./authguard.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(public documentService: DocumentService, private router: Router,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.documentService.loading = true;
    // req = req.clone({
    //   setHeaders: {
    //     "Permissions-Policy": "*",
    //     "Strict-Transport-Security": "max-age=31536000; includeSubdomains",
    //     "X-Frame-Options": "SAMEORIGIN",
    //     "X-Content-Type-Options": "nosniff",
    //     "X-Xss-Protection": "1; mode=block",
    //     "Content-Security-Policy": "script-src https: 'unsafe-inline' 'unsafe-eval';style-src https: 'unsafe-inline' 'unsafe-eval';img-src https: data:;font-src https: data:;"
    //   }
    // });
    return next.handle(req).pipe(
      finalize(() => setTimeout(() => { this.documentService.loading = false }, 500)));
  }
}
