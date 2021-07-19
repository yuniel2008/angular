import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationsRoutingModule } from './aplications-routing.module';
import { AplicationsComponent } from './aplications.component';
import {TemplatesModule} from '../templates/templates.module';
import { AplicationsHcComponent } from './aplications-hc/aplications-hc.component';
import { AplicationsHomePageComponent } from './aplications-home-page/aplications-home-page.component';

import {AuthGuardSystem} from '../autgard/authSystem.guard';
import { ListHcComponent } from './aplications-hc/list-hc/list-hc.component';
import { NewHcComponent } from './aplications-hc/new-hc/new-hc.component';
import { ViewHcComponent } from './aplications-hc/view-hc/view-hc.component';
import { UpdateHcComponent } from './aplications-hc/update-hc/update-hc.component';
import {HcService} from './aplications-hc/hc.service';
import {CommonComponetModule} from '../common-componet/common-componet.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MunicipalityService} from '../system/system-nomenclators/nomenclators-municipality/municipality.service';


@NgModule({
  declarations: [
    AplicationsComponent,
    AplicationsHcComponent,
    AplicationsHomePageComponent,
    ListHcComponent,
    NewHcComponent,
    ViewHcComponent,
    UpdateHcComponent
  ],
  imports: [
    CommonModule,
    AplicationsRoutingModule,
    TemplatesModule,
    CommonComponetModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AuthGuardSystem,
    HcService,
    MunicipalityService
  ],
  })
export class AplicationsModule { }
