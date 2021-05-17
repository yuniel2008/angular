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
import {NomenclatorsCategoryComponent} from './nomenclators-category/nomenclators-category.component';
import {ListCategoryComponent} from './nomenclators-category/list-category/list-category.component';
import {NewCategoryComponent} from './nomenclators-category/new-category/new-category.component';
import {UpdateCategoryComponent} from './nomenclators-category/update-category/update-category.component';
import {ViewCategoryComponent} from './nomenclators-category/view-category/view-category.component';
import {NomenclatorsActivityComponent} from './nomenclators-activity/nomenclators-activity.component';
import {ListActivityComponent} from './nomenclators-activity/list-activity/list-activity.component';
import {NewActivityComponent} from './nomenclators-activity/new-activity/new-activity.component';
import {UpdateActivityComponent} from './nomenclators-activity/update-activity/update-activity.component';
import {ViewActivityComponent} from './nomenclators-activity/view-activity/view-activity.component';

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
        path: 'category',
        component: NomenclatorsCategoryComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListCategoryComponent
          },
          {
            path: 'new',
            component: NewCategoryComponent
          },
          {
            path: 'update/:id',
            component: UpdateCategoryComponent
          },
          {
            path: 'view/:id',
            component: ViewCategoryComponent
          }
        ]
      },
      {
        path: 'activity',
        component: NomenclatorsActivityComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListActivityComponent
          },
          {
            path: 'new',
            component: NewActivityComponent
          },
          {
            path: 'update/:id',
            component: UpdateActivityComponent
          },
          {
            path: 'view/:id',
            component: ViewActivityComponent
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
