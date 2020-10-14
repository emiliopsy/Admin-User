import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../@models/user.model';
import { Observable, } from 'rxjs';
import { map, tap } from 'rxjs/operators';



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
          return this.castUser(resp.response.dsUsuariosDemo.ttusuarios)
        })
      )
  }

  castUser(users: Array<any>): Array<User> {
    return users.map(user => {
      return new User({
        nrousu: user.nrousu,
        usuario: user.usuario,
        activo: user.activo,
        clave: user.clave,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        direccion: user.direccion,
        telefono: user.telefono,
        imagen64: user.imagen64,
      })
    })
  }

}
