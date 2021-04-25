import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemComponent} from '../system.component';
import {SystemHomePageComponent} from '../system-home-page/system-home-page.component';
import {SystemUserComponent} from '../system-user/system-user.component';
import {ListUserComponent} from '../system-user/list-user/list-user.component';
import {NewUserComponent} from '../system-user/new-user/new-user.component';
import {UpdateUserComponent} from '../system-user/update-user/update-user.component';
import {ChangePasswordComponent} from '../system-user/change-password/change-password.component';
import {ViewUserComponent} from '../system-user/view-user/view-user.component';
import {SystemLogComponent} from '../system-log/system-log.component';
import {ListLogComponent} from '../system-log/list-log/list-log.component';
import {ViewLogComponent} from '../system-log/view-log/view-log.component';
import {SystemActionsComponent} from '../system-actions/system-actions.component';
import {ListActionsComponent} from '../system-actions/list-actions/list-actions.component';
import {ViewActionsComponent} from '../system-actions/view-actions/view-actions.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'country',
        pathMatch: 'full'
      },
      {
        path: 'country',
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
export class SystemNomenclatorsRoutingModule { }
