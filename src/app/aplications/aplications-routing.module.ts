import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AplicationsComponent} from './aplications.component';
import {AuthGuardSystem} from '../autgard/authSystem.guard';
import {AplicationsHomePageComponent} from './aplications-home-page/aplications-home-page.component';
import {AplicationsHcComponent} from './aplications-hc/aplications-hc.component';
import {ListHcComponent} from './aplications-hc/list-hc/list-hc.component';
import {NewHcComponent} from './aplications-hc/new-hc/new-hc.component';
import {UpdateHcComponent} from './aplications-hc/update-hc/update-hc.component';
import {ViewHcComponent} from './aplications-hc/view-hc/view-hc.component';
import {AplicationsAdmitionsComponent} from './aplications-admitions/aplications-admitions.component';
import {NewAdmitionsComponent} from './aplications-admitions/new-admitions/new-admitions.component';
import {ViewAdmitionsComponent} from './aplications-admitions/view-admitions/view-admitions.component';
import {UpdateAdmitionsComponent} from './aplications-admitions/update-admitions/update-admitions.component';
import {ListAdmitionsComponent} from './aplications-admitions/list-admitions/list-admitions.component';
import {CommonListHcComponent} from './aplications-common-view/common-list-hc/common-list-hc.component';
import {AplicationsTestComponent} from './aplications-test/aplications-test.component';
import {ListTestComponent} from './aplications-test/list-test/list-test.component';
import {NewTestComponent} from './aplications-test/new-test/new-test.component';
import {UpdateTestComponent} from './aplications-test/update-test/update-test.component';
import {ViewTestComponent} from './aplications-test/view-test/view-test.component';
import {ClosedTestComponent} from './aplications-test/closed-test/closed-test.component';
import {AplicationsTransferComponent} from './aplications-transfer/aplications-transfer.component';
import {ListTransferComponent} from './aplications-transfer/list-transfer/list-transfer.component';
import {NewTransferComponent} from './aplications-transfer/new-transfer/new-transfer.component';
import {ViewTransferComponent} from './aplications-transfer/view-transfer/view-transfer.component';
import {CommonListAdmitionsActivesComponent} from './aplications-common-view/common-list-admitions-actives/common-list-admitions-actives.component';
import {ReportDashboardComponent} from './aplications-reports/report-dashboard/report-dashboard.component';
import {ReportAdmitionsOpenComponent} from './aplications-reports/report-admitions-open/report-admitions-open.component';
import {ReportAdmitionsCloseComponent} from './aplications-reports/report-admitions-close/report-admitions-close.component';


const routes: Routes = [
  {
    path: '',
    component: AplicationsComponent,
    canActivate: [AuthGuardSystem],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: AplicationsHomePageComponent
      },
      {
        path: 'select/hc/:origen',
        component: CommonListHcComponent
      },
      {
        path: 'select/admitions',
        component: CommonListAdmitionsActivesComponent
      },
      {
        path: 'hc',
        component: AplicationsHcComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListHcComponent
          },
          {
            path: 'new',
            component: NewHcComponent
          },
          {
            path: 'update/:id',
            component: UpdateHcComponent
          },
          {
            path: 'view/:id',
            component: ViewHcComponent
          }
        ]
      },
      {
        path: 'admitions',
        component: AplicationsAdmitionsComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListAdmitionsComponent
          },
          {
            path: 'new/:idhc',
            component: NewAdmitionsComponent
          },
          {
            path: 'update/:id',
            component: UpdateAdmitionsComponent
          },
          {
            path: 'view/:id',
            component: ViewAdmitionsComponent
          }
        ]
      },
      {
        path: 'test',
        component: AplicationsTestComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListTestComponent
          },
          {
            path: 'new/:idhc',
            component: NewTestComponent
          },
          {
            path: 'update/:id',
            component: UpdateTestComponent
          },
          {
            path: 'closed/:id',
            component: ClosedTestComponent
          },
          {
            path: 'view/:id',
            component: ViewTestComponent
          }
        ]
      },
      {
        path: 'transfer',
        component: AplicationsTransferComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListTransferComponent
          },
          {
            path: 'new/:idad',
            component: NewTransferComponent
          },
          {
            path: 'view/:id',
            component: ViewTransferComponent
          }
        ]
      },
      {
        path: 'report',
        component: AplicationsTransferComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: ReportDashboardComponent
          },
          {
            path: 'admitions/open',
            component: ReportAdmitionsOpenComponent
          },
          {
            path: 'admitions/close',
            component: ReportAdmitionsCloseComponent
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationsRoutingModule { }
