import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonSwitchRoundedComponent} from './common-switch-rounded/common-switch-rounded.component';



@NgModule({
  declarations: [
    CommonSwitchRoundedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonSwitchRoundedComponent
  ]
})
export class CommonSwitchModule { }
