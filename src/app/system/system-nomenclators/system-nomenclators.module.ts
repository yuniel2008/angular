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
import { NomenclatorsMunicipalityComponent } from './nomenclators-municipality/nomenclators-municipality.component';
import { ListMunicipalityComponent } from './nomenclators-municipality/list-municipality/list-municipality.component';
import { ViewMunicipalityComponent } from './nomenclators-municipality/view-municipality/view-municipality.component';
import { NewMunicipalityComponent } from './nomenclators-municipality/new-municipality/new-municipality.component';
import { UpdateMunicipalityComponent } from './nomenclators-municipality/update-municipality/update-municipality.component';
import {MunicipalityService} from './nomenclators-municipality/municipality.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


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
    ViewProvinceComponent,
    NomenclatorsMunicipalityComponent,
    ListMunicipalityComponent,
    ViewMunicipalityComponent,
    NewMunicipalityComponent,
    UpdateMunicipalityComponent,
  ],
    imports: [
        CommonModule,
        SystemNomenclatorsRoutingModule,
        CommonComponetModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
  providers: [
   CountryService,
    ProvinceService,
    MunicipalityService
  ]
})
export class SystemNomenclatorsModule { }
