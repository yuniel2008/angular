import { Component, OnInit } from '@angular/core';
import {ReportTestPcr} from './report-test-pcr';
import {ReportTestPcrService} from './report-test-pcr.service';
import {LaboratoryService} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory.service';
import {Laboratory} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory';

@Component({
  selector: 'app-report-test-pcr',
  templateUrl: './report-test-pcr.component.html',
  styleUrls: ['./report-test-pcr.component.css']
})
export class ReportTestPcrComponent implements OnInit {

  public lists: ReportTestPcr[] = [];
  public msgError = 'null';
  public loading = false;
  public comboLab: Laboratory[] = [];
  public dateINT = '';
 // public dateNow = new Date();

  constructor(
    private service: ReportTestPcrService,
    private serviceLab: LaboratoryService,
  ) {
    this.dateINT = this.getDateNow();
    this.list( '', '', '', this.dateINT, this.dateINT);
    this.getComboLab();
  }

  ngOnInit(): void {
  }

  getDateNow(): string {
    const dateNow = new Date();
    let month = '';
    let day = '';
    if (dateNow.getDate() < 10){
      day = '0' + dateNow.getDate();
    } else {
      day = dateNow.getDate().toString();
    }

    const tempMonth = dateNow.getMonth() + 1;
    if (dateNow.getMonth() + 1 < 10){
      month = '0' + tempMonth;
    } else {
      month = tempMonth.toString();
    }

    const year = dateNow.getFullYear();
    return year + '-' + month + '-' + day;
  }

  getComboLab(): void {
    this.serviceLab.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboLab = rt.data;
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
    // tslint:disable-next-line:variable-name
    status_test: string,
    result: string,
    dateint: string,
    dateout: string
  ) {

    this.loading = false;
    this.lists = [];

    this.service.reportTest( value, status_test, result, dateint, dateout)
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
