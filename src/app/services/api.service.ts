import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private authUrl = environment.authUrl;

  constructor(private _http: HttpClient) {}

  getTypeRequest(url: string) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  postTypeRequest(url: string, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getTypeRequestAuth(url: string) {
    return this._http.get(`${this.authUrl}${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  postTypeRequestAuth(url: string, payload: any) {
    return this._http.post(`${this.authUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
 
}
