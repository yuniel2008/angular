import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemTemplateComponent } from './system-template/system-template.component';
import { AplicationsTemplateComponent } from './aplications-template/aplications-template.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    SystemTemplateComponent,
    AplicationsTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SystemTemplateComponent,
    AplicationsTemplateComponent
  ]
})
export class TemplatesModule { }
