import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NomenclatorsCountryComponent} from './nomenclators-country/nomenclators-country.component';
import {ListCountryComponent} from './nomenclators-country/list-country/list-country.component';
import {NewCountryComponent} from './nomenclators-country/new-country/new-country.component';
import {UpdateCountryComponent} from './nomenclators-country/update-country/update-country.component';
import {ViewCountryComponent} from './nomenclators-country/view-country/view-country.component';
import {SystemNomenclatorsComponent} from './system-nomenclators.component';
import {NomenclatorsProvinceComponent} from './nomenclators-province/nomenclators-province.component';
import {ListProvinceComponent} from './nomenclators-province/list-province/list-province.component';
import {NewProvinceComponent} from './nomenclators-province/new-province/new-province.component';
import {UpdateProvinceComponent} from './nomenclators-province/update-province/update-province.component';
import {ViewProvinceComponent} from './nomenclators-province/view-province/view-province.component';
import {ListMunicipalityComponent} from './nomenclators-municipality/list-municipality/list-municipality.component';
import {NewMunicipalityComponent} from './nomenclators-municipality/new-municipality/new-municipality.component';
import {UpdateMunicipalityComponent} from './nomenclators-municipality/update-municipality/update-municipality.component';
import {ViewMunicipalityComponent} from './nomenclators-municipality/view-municipality/view-municipality.component';
import {NomenclatorsMunicipalityComponent} from './nomenclators-municipality/nomenclators-municipality.component';
import {NomenclatorsLaboratoryComponent} from './nomenclators-laboratory/nomenclators-laboratory.component';
import {ListLaboratoryComponent} from './nomenclators-laboratory/list-laboratory/list-laboratory.component';
import {NewLaboratoryComponent} from './nomenclators-laboratory/new-laboratory/new-laboratory.component';
import {UpdateLaboratoryComponent} from './nomenclators-laboratory/update-laboratory/update-laboratory.component';
import {ViewLaboratoryComponent} from './nomenclators-laboratory/view-laboratory/view-laboratory.component';


const routes: Routes = [
  {
    path: '',
    component: SystemNomenclatorsComponent,
    children: [
      {
        path: '',
        redirectTo: 'country',
        pathMatch: 'full'
      },
      {
        path: 'country',
        component: NomenclatorsCountryComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListCountryComponent
          },
          {
            path: 'new',
            component: NewCountryComponent
          },
          {
            path: 'update/:id',
            component: UpdateCountryComponent
          },
          {
            path: 'view/:id',
            component: ViewCountryComponent
          }
        ]
      },
      {
        path: 'province',
        component: NomenclatorsProvinceComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListProvinceComponent
          },
          {
            path: 'new',
            component: NewProvinceComponent
          },
          {
            path: 'update/:id',
            component: UpdateProvinceComponent
          },
          {
            path: 'view/:id',
            component: ViewProvinceComponent
          }
        ]
      },
      {
        path: 'municipality',
        component: NomenclatorsMunicipalityComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListMunicipalityComponent
          },
          {
            path: 'new',
            component: NewMunicipalityComponent
          },
          {
            path: 'update/:id',
            component: UpdateMunicipalityComponent
          },
          {
            path: 'view/:id',
            component: ViewMunicipalityComponent
          }
        ]
      },
      {
        path: 'laboratory',
        component: NomenclatorsLaboratoryComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListLaboratoryComponent
          },
          {
            path: 'new',
            component: NewLaboratoryComponent
          },
          {
            path: 'update/:id',
            component: UpdateLaboratoryComponent
          },
          {
            path: 'view/:id',
            component: ViewLaboratoryComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNomenclatorsRoutingModule { }
