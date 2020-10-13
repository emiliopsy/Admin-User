import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private headerService: HeaderService) {

  }

  ngOnInit(): void {
    this.headerService.title.next("agregar usuario")
  }

}
