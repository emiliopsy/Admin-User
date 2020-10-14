import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }



  login(user, pass) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })

    const body = new HttpParams()
      .set('j_username', user)
      .set('j_password', pass);

    return this._http.post(`${environment.AuthUrl}`, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true
    })
      .pipe(
        tap(result => { console.log("response", result) }),
        catchError(this.handleError),
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log("Loguin incorrecto", error);
    return throwError(error)
  }
}
