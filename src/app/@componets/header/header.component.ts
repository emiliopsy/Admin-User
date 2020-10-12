import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title$ = this.headerService.title;

  constructor(private headerService: HeaderService,
    private sideMenu: SidemenuService
  ) { }



  ngOnInit(): void { }


  toggleRightSidenav() {
    this.sideMenu.toggle();
  }


}
