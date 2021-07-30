import { Component, OnInit } from '@angular/core';
import {Admitions} from '../../aplications-admitions/admitions';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';



@Component({
  selector: 'app-report-admitions-open',
  templateUrl: './report-admitions-open.component.html',
  styleUrls: ['./report-admitions-open.component.css']
})
export class ReportAdmitionsOpenComponent implements OnInit {
  public lists: Admitions[] = [];
  public msgError = 'null';
  public loading = false;
  public comboIC: IsolationsCenter[] = [];

  constructor(
    private service: AdmitionsService,
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

    this.service.reportOpent( value, dateint, dateout)
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
