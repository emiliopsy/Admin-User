import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidemenuService } from '../services/sidemenu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private sideMenu: SidemenuService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("sidenav", this.sidenav)
    this.sideMenu.setSidenav(this.sidenav);
  }

}
