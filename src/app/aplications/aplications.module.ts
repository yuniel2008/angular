import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationsRoutingModule } from './aplications-routing.module';
import { AplicationsComponent } from './aplications.component';
import {TemplatesModule} from '../templates/templates.module';
import { AplicationsHcComponent } from './aplications-hc/aplications-hc.component';
import { AplicationsHomePageComponent } from './aplications-home-page/aplications-home-page.component';

import {AuthGuardSystem} from '../autgard/authSystem.guard';
import { ListHcComponent } from './aplications-hc/list-hc/list-hc.component';
import { NewHcComponent } from './aplications-hc/new-hc/new-hc.component';
import { ViewHcComponent } from './aplications-hc/view-hc/view-hc.component';
import { UpdateHcComponent } from './aplications-hc/update-hc/update-hc.component';
import {HcService} from './aplications-hc/hc.service';
import {CommonComponetModule} from '../common-componet/common-componet.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MunicipalityService} from '../system/system-nomenclators/nomenclators-municipality/municipality.service';
import { AplicationsAdmitionsComponent } from './aplications-admitions/aplications-admitions.component';
import { ListAdmitionsComponent } from './aplications-admitions/list-admitions/list-admitions.component';
import { NewAdmitionsComponent } from './aplications-admitions/new-admitions/new-admitions.component';
import { UpdateAdmitionsComponent } from './aplications-admitions/update-admitions/update-admitions.component';
import { ViewAdmitionsComponent } from './aplications-admitions/view-admitions/view-admitions.component';
import {AdmitionsService} from './aplications-admitions/admitions.service';
import {IsolationsCenterService} from '../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {AlertModule} from 'ngx-bootstrap/alert';
import { CommonListHcComponent } from './aplications-common-view/common-list-hc/common-list-hc.component';
import { CommonListAdmitionsComponent } from './aplications-common-view/common-list-admitions/common-list-admitions.component';
import { CommonListTestComponent } from './aplications-common-view/common-list-test/common-list-test.component';
import { CommonListTransferComponent } from './aplications-common-view/common-list-transfer/common-list-transfer.component';
import {TestService} from './aplications-test/test.service';
import {AplicationsTestComponent} from './aplications-test/aplications-test.component';
import {ListTestComponent} from './aplications-test/list-test/list-test.component';
import {NewTestComponent} from './aplications-test/new-test/new-test.component';
import {UpdateTestComponent} from './aplications-test/update-test/update-test.component';
import {ViewTestComponent} from './aplications-test/view-test/view-test.component';
import {LaboratoryService} from '../system/system-nomenclators/nomenclators-laboratory/laboratory.service';
import { ClosedTestComponent } from './aplications-test/closed-test/closed-test.component';
import { AplicationsTransferComponent } from './aplications-transfer/aplications-transfer.component';
import { ListTransferComponent } from './aplications-transfer/list-transfer/list-transfer.component';
import { NewTransferComponent } from './aplications-transfer/new-transfer/new-transfer.component';
import { ViewTransferComponent } from './aplications-transfer/view-transfer/view-transfer.component';
import { CommonListAdmitionsActivesComponent } from './aplications-common-view/common-list-admitions-actives/common-list-admitions-actives.component';
import {TransferService} from './aplications-transfer/transfer.service';
import { AplicationsReportsComponent } from './aplications-reports/aplications-reports.component';
import { ReportDashboardComponent } from './aplications-reports/report-dashboard/report-dashboard.component';
import { ReportAdmitionsOpenComponent } from './aplications-reports/report-admitions-open/report-admitions-open.component';
import { ReportAdmitionsCloseComponent } from './aplications-reports/report-admitions-close/report-admitions-close.component';
import { ReportPueblasPcrAdmisionesComponent } from './aplications-reports/report-pueblas-pcr-admisiones/report-pueblas-pcr-admisiones.component';
import {PcrAdmitionsService} from './aplications-reports/report-pueblas-pcr-admisiones/pcr-admitions.service';


@NgModule({
  declarations: [
    AplicationsComponent,
    AplicationsHcComponent,
    AplicationsHomePageComponent,
    ListHcComponent,
    NewHcComponent,
    ViewHcComponent,
    UpdateHcComponent,
    AplicationsAdmitionsComponent,
    ListAdmitionsComponent,
    NewAdmitionsComponent,
    UpdateAdmitionsComponent,
    ViewAdmitionsComponent,
    CommonListHcComponent,
    CommonListAdmitionsComponent,
    CommonListTestComponent,
    CommonListTransferComponent,
    AplicationsTestComponent,
    ListTestComponent,
    NewTestComponent,
    UpdateTestComponent,
    ViewTestComponent,
    ClosedTestComponent,
    AplicationsTransferComponent,
    ListTransferComponent,
    NewTransferComponent,
    ViewTransferComponent,
    CommonListAdmitionsActivesComponent,
    AplicationsReportsComponent,
    ReportDashboardComponent,
    ReportAdmitionsOpenComponent,
    ReportAdmitionsCloseComponent,
    ReportPueblasPcrAdmisionesComponent
  ],
  imports: [
    CommonModule,
    AplicationsRoutingModule,
    TemplatesModule,
    CommonComponetModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AlertModule
  ],
  providers: [
    AuthGuardSystem,
    HcService,
    MunicipalityService,
    AdmitionsService,
    IsolationsCenterService,
    TestService,
    LaboratoryService,
    TransferService,
    PcrAdmitionsService
  ],
  })
export class AplicationsModule { }
