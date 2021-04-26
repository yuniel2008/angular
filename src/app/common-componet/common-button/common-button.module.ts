import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCancelComponent } from './btn-cancel/btn-cancel.component';
import { BtnDetailsComponent } from './btn-details/btn-details.component';
import { BtnGobackComponent } from './btn-goback/btn-goback.component';
import { BtnNewComponent } from './btn-new/btn-new.component';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { BtnSearchComponent } from './btn-search/btn-search.component';
import { BtnUpdateComponent } from './btn-update/btn-update.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BtnCancelComponent,
    BtnDetailsComponent,
    BtnGobackComponent,
    BtnNewComponent,
    BtnSaveComponent,
    BtnSearchComponent,
    BtnUpdateComponent
  ],
  exports: [
    BtnCancelComponent,
    BtnDetailsComponent,
    BtnGobackComponent,
    BtnNewComponent,
    BtnSaveComponent,
    BtnSearchComponent,
    BtnUpdateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class CommonButtonModule { }