import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemNomenclatorsRoutingModule } from './system-nomenclators-routing.module';
import {SystemNomenclatorsComponent} from './system-nomenclators.component';
import { NomenclatorsCountryComponent } from './nomenclators-country/nomenclators-country.component';
import { ListCountryComponent } from './nomenclators-country/list-country/list-country.component';
import { NewCountryComponent } from './nomenclators-country/new-country/new-country.component';
import { UpdateCountryComponent } from './nomenclators-country/update-country/update-country.component';
import { ViewCountryComponent } from './nomenclators-country/view-country/view-country.component';
import {CountryService} from './nomenclators-country/country.service';
import {CommonComponetModule} from '../../common-componet/common-componet.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SystemNomenclatorsComponent,
    NomenclatorsCountryComponent,
    ListCountryComponent,
    NewCountryComponent,
    UpdateCountryComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    SystemNomenclatorsRoutingModule,
    CommonComponetModule,
    ReactiveFormsModule,
  ],
  providers: [
   CountryService
  ]
})
export class SystemNomenclatorsModule { }
