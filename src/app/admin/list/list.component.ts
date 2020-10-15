import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/@models/user.model';
import { EditService } from 'src/app/services/edit.service';
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
  reloadtable: Boolean = false;

  items: MenuItem[];


  constructor(
    private headerService: HeaderService,
    private userService: UserService,
    private router: Router,
    private editService: EditService,
  ) {

  }

  ngOnInit(): void {
    this.headerService.title.next("Usuarios");
    this.getUserData();
    this.items = [
      { label: 'Editar', icon: 'pi pi-pencil', command: (val) => { console.log("val", val) } },
      { label: 'Borrar', icon: 'pi pi-trash' },
    ];
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

  deleteUser(user) {
    // this.refres()
    console.log("borar usuario", user);
    this.userService.deletUser(user).subscribe(resp => {
      // this.refresDone()
      console.log("res", resp.response.pcErr);
      if (resp.response.pcErr) {
        console.log("resp.response.pcErr", resp.response.pcErr);
      } else {
        console.log("Se borro el susario exitosamente");
        this.uddateTable(user)
      }
    }, (eror => { this.handdleError(eror); }))
  }

  handdleError(error) {
    // this.refresDone()
    console.log("error", error);
  }


  uddateTable(user) {
    this.users.splice(this.users.findIndex(x => x == user), 1)
    this.users = [...this.users];
  }

  refres() {
    this.reloadtable = true;
    this.loanding = !this.loanding

  }
  refresDone() {
    this.reloadtable = false;
    this.loanding = !this.loanding
  }



  editUser(user: User) {
    console.log("editar usuario", user);
    this.editService.usaerData.next(user);
    this.router.navigateByUrl("/admin/edit");

  }


}
