import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const AUTH_TOKEN = sessionStorage.getItem("token");

    var authReq = req.clone({setHeaders:{Authorization: 'Bearer '+ AUTH_TOKEN}})

    return next.handle(authReq);
  }

}
