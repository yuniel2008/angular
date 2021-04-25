import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemNomenclatorsRoutingModule } from './system-nomenclators-routing.module';
import {SystemNomenclatorsComponent} from './system-nomenclators.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    SystemNomenclatorsComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    SystemNomenclatorsRoutingModule
  ]
})
export class SystemNomenclatorsModule { }
