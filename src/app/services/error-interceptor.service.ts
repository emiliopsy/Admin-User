import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      "Authorization": "emilio Biasizo"
    });

    const clone = req.clone({ headers })

    return next.handle(clone)
      .pipe(
        retry(2),
        catchError(this.handleError),
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log("Ocurrio un error",error);
    return throwError(error)
  }
}
