import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginSystemComponent } from './login-system/login-system.component';
import { LoginAplicationsComponent } from './login-aplications/login-aplications.component';
import {SecurityService} from './security.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginSystemComponent,
    LoginAplicationsComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SecurityRoutingModule,
    FontAwesomeModule,
    AlertModule
  ],
  providers: [
   SecurityService
  ],
})
export class SecurityModule { }
