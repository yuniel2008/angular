import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeadComponent } from './list-head/list-head.component';

import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonButtonModule} from '../common-button/common-button.module';

@NgModule({
  declarations: [ListHeadComponent],
  imports: [
    CommonModule, RouterModule, FontAwesomeModule, CommonButtonModule
  ],
  exports: [ListHeadComponent],
})
export class CommontListHeadModule { }
