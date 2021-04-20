import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './common-views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./aplications/aplications.module').then(m => m.AplicationsModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'page_Notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page_Notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
