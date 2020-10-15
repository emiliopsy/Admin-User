import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../@models/user.model';
import { Observable, } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DsUsuariosDemo, Request, Ttusuarios } from '../@models/request.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this._http.put<User[]>(`${environment.GetUserUrl}`, {})
      .pipe(
        tap((response: any) => console.log("response", response)),
        map((resp: any) => {
          return resp.response.dsUsuariosDemo.ttusuarios;
        })
      )
  }


  addUser(user: User) {
    let body = {
      request: new Request({
        pcaccion: "create",
        dsUsuariosDemo: new DsUsuariosDemo({
          dsUsuariosDemo: new Ttusuarios({
            ttusuarios: [user],
          })
        })
      })
    }

    console.log("body", body);

    return this._http.put<User[]>(`${environment.GestionarUsuarios}`,body)
      .pipe(
        tap((response: any) => console.log("response", response)),
        map((resp: any) => {
          return resp;
        })
      )
  }
}
