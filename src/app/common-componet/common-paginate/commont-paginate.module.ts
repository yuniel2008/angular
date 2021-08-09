import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPaginateComponent } from './list-paginate/list-paginate.component';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ListPaginateComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ListPaginateComponent],
})
export class CommontPaginateModule { }
