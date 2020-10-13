import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../@models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${environment.BaseUrl}/users`)
      .pipe(
        map(users => { return this.castUser(users) })
      )
  }

  castUser(users: Array<any>): Array<User> {
    return users.map(user => {
      return new User({
        id: user.id,
        name: user.name,
        lastName: user.username,
        email: user.email,
        photo: "",
        direcction: user.address.street,
        phone: user.phone,
      })
    })
  }

}
