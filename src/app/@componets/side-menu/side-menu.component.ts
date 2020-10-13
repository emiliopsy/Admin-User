import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  navigateTo(url: String) {
    console.log("navigate to ",url)
    this._router.navigateByUrl(`${url}`);

  }

}
