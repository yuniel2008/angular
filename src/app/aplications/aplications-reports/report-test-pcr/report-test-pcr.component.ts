import { Component, OnInit } from '@angular/core';
import {ReportTestPcr} from './report-test-pcr';
import {ReportTestPcrService} from './report-test-pcr.service';
import {LaboratoryService} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory.service';
import {Laboratory} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory';
import {ExcelService} from '../excel.service';

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
  public data: any[];

  constructor(
    private service: ReportTestPcrService,
    private serviceLab: LaboratoryService,
    private excelService: ExcelService
  ) {
    this.data = [];
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
            this.setData();
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

  setData(): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.lists.length ; i++){
      let status = 'Procesada';
      // @ts-ignore
      if (this.lists[i].status_test === '1'){
        status = 'En proceso';
      } else {
        if (this.lists[i].status_test === '3'){
          status = 'Inivida';
        }
      }

      let result = 'Pendinete';
      if (this.lists[i].status_test !== '1'){
        if (this.lists[i].result === false){
          result = 'Negativa';
        } else {
          result = 'Positiva';
        }
      }

      const obj  = [
        this.lists[i].hc.nohc,
        this.lists[i].hc.name,
        new Date(this.lists[i].date_samples).toLocaleDateString('es'),
        new Date(this.lists[i].result_date).toLocaleDateString('es'),
        this.lists[i].laboratory.value,
        status,
        result,
      ];
      this.data.push(obj);
    }
  }

  generateExcel(): void {

    const title = 'Reporte de pruebas PCR';
    const header = ['HC', 'Nombre paciente', 'Fecha envio', 'Fecha resultado', 'Laboratorio', 'Estado', 'Resultado'];
    const sheet = 'pcr';
    const withColum = [20, 40, 20, 20, 40, 20, 20];
    const fileName = 'Reporte de pruebas PCR';
    const mergeHeader = 'G2';
    const mergeSystem = 'G5';

    // console.log('called');
    this.excelService.generatePCRExcel(title, header, mergeHeader, mergeSystem, this.data, sheet, withColum, fileName);
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
