import { Component, OnInit } from '@angular/core';
import {PcrAdmitions} from './pcr-admitions';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {PcrAdmitionsService} from './pcr-admitions.service';
import {ExcelService} from '../excel.service';

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
  public data: any[];

  constructor(
    private service: PcrAdmitionsService,
    private serviceIC: IsolationsCenterService,
    private excelService: ExcelService
  ) {
    this.data = [];
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
      // @ts-ignore
      const pcrArray: any[] = [];
      // @ts-ignore
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.lists[i].pcr.length; j++){
        let status = 'Procesada';
        // @ts-ignore
        if (this.lists[i].pcr[j].status_test === '1'){
          status = 'En proceso';
        } else {
          // @ts-ignore
          if (this.lists[i].pcr[j].status_test === '3'){
            status = 'Inivida';
          }
        }

        let result = 'Pendinete';
        // @ts-ignore
        if (this.lists[i].pcr[j].status_test !== '1'){
          // @ts-ignore
          if (this.lists[i].pcr[j].result === false){
            result = 'Negativa';
          } else {
            result = 'Positiva';
          }
        }

        const pcrObj = [
          // @ts-ignore
          new Date(this.lists[i].pcr[j].date_samples).toLocaleDateString('es'),
          // @ts-ignore
          new Date(this.lists[i].pcr[j].result_date).toLocaleDateString('es'),
          status,
          result,
          // @ts-ignore
          this.lists[i].pcr[j].laboratory.value
        ];

        pcrArray.push(pcrObj);
      }


      const obj  = [
        // @ts-ignore
        this.lists[i].admitions.hcs.nohc,
        // @ts-ignore
        this.lists[i].admitions.hcs.name,
        // @ts-ignore
        this.lists[i].admitions.hcs.ci,
        // @ts-ignore
        new Date(this.lists[i].admitions.entry).toLocaleDateString('es'),
        // @ts-ignore
        this.lists[i].admitions.isolation_center.value,
        pcrArray
      ];
      this.data.push(obj);
    }
  }

  generateExcel(): void {

    const title = 'Reporte de pcr por admisiones abiertas';
    const header = ['Fecha envio', 'Fecha resultado', 'Estado', 'Resultado', 'Laboratorio'];
    const sheet = 'pcr x admisiones';
    const withColum = [20, 40, 30, 30, 70];
    const fileName = 'Reporte de pcr por admisiones abiertas';
    const mergeHeader = 'E2';
    const mergeSystem = 'E5';

    // console.log('called');
    this.excelService.generatePCRAdmitionsExcel(title, header, mergeHeader, mergeSystem, this.data, sheet, withColum, fileName);
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
