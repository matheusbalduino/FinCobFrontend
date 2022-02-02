import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from "./interfaces/User";
import { BaseService } from "./layouts/default/services/base.service";

@Injectable({
  providedIn:'root'
})
export class TokenService extends BaseService{

  constructor(private http: HttpClient){ super(); }

  obterToken():Observable<User>{
    return this.http.post(this.UrlServiceV2 + "User/login",null, this.ObterHeaderJson()).pipe(
      map(this.extractData),
      catchError(this.serviceError)
    )
  }
}
