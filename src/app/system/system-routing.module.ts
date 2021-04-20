import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemComponent} from './system.component';
import {SystemHomePageComponent} from './system-home-page/system-home-page.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
