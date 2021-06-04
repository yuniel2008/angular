import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import { RecoveryPasswodComponent } from './recovery-passwod/recovery-passwod.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    RecoveryPasswodComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AlertModule,
    ReactiveFormsModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class CommonViewsModule { }
