import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from "@angular/common/http";
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
    return next.handle(req).pipe(
      finalize(() => setTimeout(()=> {this.documentService.loading=false},1500))
    );
    // return next.handle(req).pipe(map((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //   console.log()
    //     setTimeout(()=> {this.documentService.loading=false},1500)
    //   }
    //   return event;
    // }));
  }
}
