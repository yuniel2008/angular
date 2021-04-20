import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './common-views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule)
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
