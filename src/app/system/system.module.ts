import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SystemHomePageComponent } from './system-home-page/system-home-page.component';
import {TemplatesModule} from '../templates/templates.module';


@NgModule({
  declarations: [
    SystemComponent,
    SystemHomePageComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    TemplatesModule
  ]
})
export class SystemModule { }
