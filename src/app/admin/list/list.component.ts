import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/@models/user.model';
import { HeaderService } from 'src/app/services/header.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  users: Array<User>
  haserror: Boolean = false;
  loanding: Boolean = true;
  tableHeaders: any;


  constructor(
    private headerService: HeaderService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.headerService.title.next("Usuarios");
    this.getUserData();
  }


  getUserData() {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.haserror = false;
        this.loanding = false;
        this.users = data
        console.log("data", data)
      }, (error) => { this.handleError(error) })
  }

  handleError(error) {
    this.haserror = true;
    this.loanding = false;
  }

}
