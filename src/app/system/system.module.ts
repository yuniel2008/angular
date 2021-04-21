import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SystemHomePageComponent } from './system-home-page/system-home-page.component';
import {TemplatesModule} from '../templates/templates.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SystemUserComponent } from './system-user/system-user.component';
import { ListUserComponent } from './system-user/list-user/list-user.component';
import { NewUserComponent } from './system-user/new-user/new-user.component';
import { UpdateUserComponent } from './system-user/update-user/update-user.component';
import { ViewUserComponent } from './system-user/view-user/view-user.component';
import {UserService} from './system-user/user.service';
import {CommonComponetModule} from '../common-componet/common-componet.module';
import { ChangePasswordComponent } from './system-user/change-password/change-password.component';


@NgModule({
  declarations: [
    SystemComponent,
    SystemHomePageComponent,
    SystemUserComponent,
    ListUserComponent,
    NewUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SystemRoutingModule,
    TemplatesModule,
    FontAwesomeModule,
    CommonComponetModule
  ],
  providers: [
    UserService
  ],
})
export class SystemModule { }
