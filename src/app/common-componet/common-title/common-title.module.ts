import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleViewComponent } from './title-view/title-view.component';



@NgModule({
    declarations: [
        TitleViewComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
      TitleViewComponent
    ]
})
export class CommonTitleModule { }
