import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationsRoutingModule } from './aplications-routing.module';
import { AplicationsComponent } from './aplications.component';


@NgModule({
  declarations: [
    AplicationsComponent
  ],
  imports: [
    CommonModule,
    AplicationsRoutingModule
  ]
})
export class AplicationsModule { }
