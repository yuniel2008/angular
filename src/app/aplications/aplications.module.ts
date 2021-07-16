import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationsRoutingModule } from './aplications-routing.module';
import { AplicationsComponent } from './aplications.component';
import {TemplatesModule} from '../templates/templates.module';


@NgModule({
  declarations: [
    AplicationsComponent
  ],
    imports: [
        CommonModule,
        AplicationsRoutingModule,
        TemplatesModule
    ]
})
export class AplicationsModule { }
