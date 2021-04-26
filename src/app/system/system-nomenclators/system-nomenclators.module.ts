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
import { NomenclatorsProvinceComponent } from './nomenclators-province/nomenclators-province.component';
import { ListProvinceComponent } from './nomenclators-province/list-province/list-province.component';
import { NewProvinceComponent } from './nomenclators-province/new-province/new-province.component';
import { UpdateProvinceComponent } from './nomenclators-province/update-province/update-province.component';
import { ViewProvinceComponent } from './nomenclators-province/view-province/view-province.component';
import {ProvinceService} from './nomenclators-province/province.service';


@NgModule({
  declarations: [
    SystemNomenclatorsComponent,
    NomenclatorsCountryComponent,
    ListCountryComponent,
    NewCountryComponent,
    UpdateCountryComponent,
    ViewCountryComponent,
    NomenclatorsProvinceComponent,
    ListProvinceComponent,
    NewProvinceComponent,
    UpdateProvinceComponent,
    ViewProvinceComponent
  ],
  imports: [
    CommonModule,
    SystemNomenclatorsRoutingModule,
    CommonComponetModule,
    ReactiveFormsModule,
  ],
  providers: [
   CountryService,
    ProvinceService
  ]
})
export class SystemNomenclatorsModule { }
