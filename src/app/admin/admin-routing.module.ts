import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: "list",
        component:ListComponent,
      },
      {
        path: "create",
        component:CreateComponent,
      },
      {
        path: "edit",
        component:EditComponent,
      },
      {
        path:"",
        redirectTo:"list",
        pathMatch:"full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
