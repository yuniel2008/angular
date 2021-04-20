import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginSystemComponent } from './login-system/login-system.component';
import { LoginAplicationsComponent } from './login-aplications/login-aplications.component';


@NgModule({
  declarations: [
    LoginSystemComponent,
    LoginAplicationsComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
