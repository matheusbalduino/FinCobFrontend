import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";


export abstract class BaseService {

  protected UrlServiceV1:string = environment.baseUrl;
  protected UrlServiceV2:string = environment.userUrl;

  protected ObterHeaderJson(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  protected ObterHeaderCsv():any{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'text/csv');
    return {headers:headers,responseType:'text'};
  }

  protected extractData(response:any){
    return response || {};
  }

  protected serviceError(response: Response | any){
    let customError:string[] = [];

    if(response instanceof HttpErrorResponse)
    {
      if(response.statusText === "Unknow Error"){
        customError.push("Ocorreu um erro desconhecido")
      response.error.errors;
      }

    }

    console.error(response)
    return throwError(response)
  }

}
