import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AplicationsComponent} from './aplications.component';
import {AuthGuardSystem} from '../autgard/authSystem.guard';
import {AplicationsHomePageComponent} from './aplications-home-page/aplications-home-page.component';


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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationsRoutingModule { }
