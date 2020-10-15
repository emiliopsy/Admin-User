import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  usaerData: BehaviorSubject<User>

  constructor() {
    this.usaerData = new BehaviorSubject(null)
  }


}
