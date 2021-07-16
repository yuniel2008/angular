import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginSystemComponent} from './login-system/login-system.component';
import {RecoveryPasswodComponent} from '../common-views/recovery-passwod/recovery-passwod.component';

const routes: Routes = [
  {
    path: 'system',
    component: LoginSystemComponent
  },
  {
    path: 'recovery_password',
    component: RecoveryPasswodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
