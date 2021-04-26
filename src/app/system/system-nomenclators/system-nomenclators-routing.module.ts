import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NomenclatorsCountryComponent} from './nomenclators-country/nomenclators-country.component';
import {ListCountryComponent} from './nomenclators-country/list-country/list-country.component';
import {NewCountryComponent} from './nomenclators-country/new-country/new-country.component';
import {UpdateCountryComponent} from './nomenclators-country/update-country/update-country.component';
import {ViewCountryComponent} from './nomenclators-country/view-country/view-country.component';
import {SystemNomenclatorsComponent} from './system-nomenclators.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNomenclatorsRoutingModule { }
