import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemComponent} from './system.component';
import {SystemHomePageComponent} from './system-home-page/system-home-page.component';
import {SystemUserComponent} from './system-user/system-user.component';
import {ListUserComponent} from './system-user/list-user/list-user.component';
import {NewUserComponent} from './system-user/new-user/new-user.component';
import {UpdateUserComponent} from './system-user/update-user/update-user.component';
import {ViewUserComponent} from './system-user/view-user/view-user.component';
import {ChangePasswordComponent} from './system-user/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: SystemHomePageComponent
      },
      {
        path: 'user',
        component: SystemUserComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListUserComponent
          },
          {
            path: 'new',
            component: NewUserComponent
          },
          {
            path: 'update/:id',
            component: UpdateUserComponent
          },
          {
            path: 'updatePassword/:id',
            component: ChangePasswordComponent
          },
          {
            path: 'view/:id',
            component: ViewUserComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
