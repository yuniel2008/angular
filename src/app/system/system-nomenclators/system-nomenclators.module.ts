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
import { NomenclatorsLaboratoryComponent } from './nomenclators-laboratory/nomenclators-laboratory.component';
import { NomenclatorsIsolationsCenterComponent } from './nomenclators-isolations-center/nomenclators-isolations-center.component';
import { ListLaboratoryComponent } from './nomenclators-laboratory/list-laboratory/list-laboratory.component';
import { NewLaboratoryComponent } from './nomenclators-laboratory/new-laboratory/new-laboratory.component';
import { UpdateLaboratoryComponent } from './nomenclators-laboratory/update-laboratory/update-laboratory.component';
import { ViewLaboratoryComponent } from './nomenclators-laboratory/view-laboratory/view-laboratory.component';
import {LaboratoryService} from './nomenclators-laboratory/laboratory.service';
import { ListIsolationsCenterComponent } from './nomenclators-isolations-center/list-isolations-center/list-isolations-center.component';
import { NewIsolationsCenterComponent } from './nomenclators-isolations-center/new-isolations-center/new-isolations-center.component';
import { UpdateIsolationsCenterComponent } from './nomenclators-isolations-center/update-isolations-center/update-isolations-center.component';
import { ViewIsolationsCenterComponent } from './nomenclators-isolations-center/view-isolations-center/view-isolations-center.component';
import {IsolationsCenterService} from './nomenclators-isolations-center/isolations-center.service';
import {AlertModule} from 'ngx-bootstrap/alert';


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
    NomenclatorsLaboratoryComponent,
    NomenclatorsIsolationsCenterComponent,
    ListLaboratoryComponent,
    NewLaboratoryComponent,
    UpdateLaboratoryComponent,
    ViewLaboratoryComponent,
    ListIsolationsCenterComponent,
    NewIsolationsCenterComponent,
    UpdateIsolationsCenterComponent,
    ViewIsolationsCenterComponent,
  ],
    imports: [
        CommonModule,
        SystemNomenclatorsRoutingModule,
        CommonComponetModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AlertModule,
    ],
  providers: [
   CountryService,
    ProvinceService,
    MunicipalityService,
    LaboratoryService,
    IsolationsCenterService
  ]
})
export class SystemNomenclatorsModule { }
