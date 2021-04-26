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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNomenclatorsRoutingModule { }
