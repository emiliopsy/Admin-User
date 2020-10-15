import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/@models/user.model';
import { EditService } from 'src/app/services/edit.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: User;
  constructor(
    private headerService: HeaderService,
    private editService: EditService,

  ) {

  }

  ngOnInit(): void {
    this.headerService.title.next("Editar")
    this.editService.usaerData.subscribe(res => {
      this.user = res
      console.log("this.user", this.user);
    })
  }

}
