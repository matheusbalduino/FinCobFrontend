import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root',
})
export class FinanceiroService{

  constructor(private http: HttpClient){}

  obterDadosPessoa(){
    this.http.get("url",)
  }

}
