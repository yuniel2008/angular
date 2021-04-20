import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginSystemComponent} from './login-system/login-system.component';
import {LoginAplicationsComponent} from './login-aplications/login-aplications.component';

const routes: Routes = [
  {
    path: 'system',
    component: LoginSystemComponent
  },
  {
    path: 'aplications',
    component: LoginAplicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
