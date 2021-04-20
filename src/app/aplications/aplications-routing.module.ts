import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AplicationsComponent} from './aplications.component';

const routes: Routes = [
  {
    path: '',
    component: AplicationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationsRoutingModule { }
