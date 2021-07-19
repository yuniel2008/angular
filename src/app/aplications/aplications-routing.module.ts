import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AplicationsComponent} from './aplications.component';
import {AuthGuardSystem} from '../autgard/authSystem.guard';
import {AplicationsHomePageComponent} from './aplications-home-page/aplications-home-page.component';
import {AplicationsHcComponent} from './aplications-hc/aplications-hc.component';
import {ListHcComponent} from './aplications-hc/list-hc/list-hc.component';
import {NewHcComponent} from './aplications-hc/new-hc/new-hc.component';
import {UpdateHcComponent} from './aplications-hc/update-hc/update-hc.component';
import {ViewHcComponent} from './aplications-hc/view-hc/view-hc.component';


const routes: Routes = [
  {
    path: '',
    component: AplicationsComponent,
    canActivate: [AuthGuardSystem],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: AplicationsHomePageComponent
      },
      {
        path: 'hc',
        component: AplicationsHcComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListHcComponent
          },
          {
            path: 'new',
            component: NewHcComponent
          },
          {
            path: 'update/:id',
            component: UpdateHcComponent
          },
          {
            path: 'view/:id',
            component: ViewHcComponent
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationsRoutingModule { }
