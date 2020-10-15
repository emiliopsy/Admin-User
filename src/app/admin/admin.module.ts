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
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'primeng/button';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';


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
    ProgressSpinnerModule,
    ReactiveFormsModule,
    InputTextModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    MatSelectModule,
    FileUploadModule,
    ProgressBarModule


  ]
})
export class AdminModule { }
