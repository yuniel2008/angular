import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingViewComponent } from './loading-view/loading-view.component';



@NgModule({
  declarations: [
    LoadingViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingViewComponent
  ]
})
export class CommonLoadingModule { }
