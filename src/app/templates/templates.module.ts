import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemTemplateComponent } from './system-template/system-template.component';
import { AplicationsTemplateComponent } from './aplications-template/aplications-template.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UserService} from '../system/system-user/user.service';
import {LogService} from '../system/system-log/log.service';
import {ActionsService} from '../system/system-actions/actions.service';
import {AuthGuardSystem} from '../autgard/authSystem.guard';
import {SecurityService} from '../security/security.service';



@NgModule({
  declarations: [
    SystemTemplateComponent,
    AplicationsTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    SystemTemplateComponent,
    AplicationsTemplateComponent
  ],
  providers: [
    SecurityService
  ]
})
export class TemplatesModule { }
