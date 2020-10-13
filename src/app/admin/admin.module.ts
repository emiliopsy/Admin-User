import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from '../@componets/header/header.component';
import { SideMenuComponent } from '../@componets/side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AdminComponent,
    ListComponent,
    CreateComponent,
    HeaderComponent,
    SideMenuComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    TableModule,
    ProgressSpinnerModule
  ]
})
export class AdminModule { }