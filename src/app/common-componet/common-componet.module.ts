import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonTitleModule} from './common-title/common-title.module';
import {CommonLoadingModule} from './common-loading/common-loading.module';
import {CommonButtonModule} from './common-button/common-button.module';
import {CommonSwitchModule} from './common-switch/common-switch.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonTitleModule,
    CommonLoadingModule,
    CommonButtonModule,
    CommonSwitchModule

  ]
})
export class CommonComponetModule { }
