import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  public url = environment.appURL;

  constructor(private http: HttpClient) { }

  queryOne (renavam): Observable<Object> {
    return this.http.get(`${this.url}/queryOne/${renavam}`, {});
  }

  getAll () {
    return this.http.get(`${this.url}/getAll`, {});
  }

}
