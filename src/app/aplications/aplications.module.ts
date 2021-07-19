import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationsRoutingModule } from './aplications-routing.module';
import { AplicationsComponent } from './aplications.component';
import {TemplatesModule} from '../templates/templates.module';
import { AplicationsHcComponent } from './aplications-hc/aplications-hc.component';
import { AplicationsHomePageComponent } from './aplications-home-page/aplications-home-page.component';

import {AuthGuardSystem} from '../autgard/authSystem.guard';


@NgModule({
  declarations: [
    AplicationsComponent,
    AplicationsHcComponent,
    AplicationsHomePageComponent
  ],
  imports: [
    CommonModule,
    AplicationsRoutingModule,
    TemplatesModule
  ],
  providers: [
    AuthGuardSystem
  ],
  })
export class AplicationsModule { }
