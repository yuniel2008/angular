import { Component, OnInit } from '@angular/core';
import {PcrAdmitions} from './pcr-admitions';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {PcrAdmitionsService} from './pcr-admitions.service';

@Component({
  selector: 'app-report-pueblas-pcr-admisiones',
  templateUrl: './report-pueblas-pcr-admisiones.component.html',
  styleUrls: ['./report-pueblas-pcr-admisiones.component.css']
})
export class ReportPueblasPcrAdmisionesComponent implements OnInit {
  public lists: PcrAdmitions[] = [];
  public msgError = 'null';
  public loading = false;
  public comboIC: IsolationsCenter[] = [];

  constructor(
    private service: PcrAdmitionsService,
    private serviceIC: IsolationsCenterService,
  ) {
    this.list( '', '', '');
    this.getComboIC();
  }

  ngOnInit(): void {
  }

  getComboIC(): void {
    this.serviceIC.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboIC = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  // tslint:disable-next-line:typedef
  list(
    value: string,
    dateint: string,
    dateout: string
  ) {

    this.loading = false;
    this.lists = [];

    this.service.reportPCRAdmitions( value, dateint, dateout)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.lists = rt.data;
          }
          this.loading = true;
        },
        er => {
          this.msgError = er;
          this.loading = true;
        },
        () => console.log('ready')
      );
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
