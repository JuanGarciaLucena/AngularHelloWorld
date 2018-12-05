import { Prueba } from './../model/prueba';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private url : string = "http://localhost:8080/"

  constructor(private _http : HttpClient) { }

  insertPrueba(prueba : Prueba) : Observable<any> {

    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      });
    
    return this._http.post(this.url + "/insertPrueba", JSON.stringify(prueba), {headers: headers});
  }

  
}
