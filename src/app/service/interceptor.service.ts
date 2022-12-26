import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { DocumentService } from "./document.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public documentService: DocumentService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.documentService.loading=true;
    return next.handle(req).pipe(
      finalize(() => this.documentService.loading=false)
    );
  }
}
