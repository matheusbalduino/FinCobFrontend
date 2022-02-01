import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseService } from "./base.service";
import { catchError, map} from "rxjs/operators";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FinanceiroCobranca } from "src/app/interfaces/FinanceiroCobranca";

@Injectable()
export class FinanceiroService extends BaseService{

  constructor(private http: HttpClient){
    super();
  }


  obterDadosPessoa(boleto:string, codigo:string):Observable<FinanceiroCobranca>{
    var url = this.UrlServiceV1 + "ObterPessoa" + "?boleto=" + boleto

    if(codigo){
      console.log(codigo)
      var url = this.UrlServiceV1 + "ObterPessoa" + "?boleto=" + boleto + "&codigo=" + codigo
    }

    return this.http.get(url ,this.ObterHeaderJson())
    .pipe(
      map(this.extractData),
      catchError(this.serviceError)
    );
  }

  obterLotes():Observable<string[]>{

    return this.http.get<string[]>(this.UrlServiceV1 + "Lotes", this.ObterHeaderJson())

  }

  obterLote(lote:string):Observable<FinanceiroCobranca[]>{
    return this.http.get(this.UrlServiceV1+"ObterLote"+"?lote="+lote, this.ObterHeaderJson()).pipe(
      map(this.extractData),
      catchError(this.serviceError)
    )
  }

  download(lote:string){

    return this.http.get(this.UrlServiceV1 + "DownloadLote?lote=" + lote, this.ObterHeaderCsv())
    .pipe(
      map(this.extractData),
      catchError(this.serviceError)
    )
  }

}
