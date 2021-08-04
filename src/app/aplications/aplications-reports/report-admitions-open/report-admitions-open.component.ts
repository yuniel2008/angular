import { Component, OnInit } from '@angular/core';
import {Admitions} from '../../aplications-admitions/admitions';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {ExcelService} from '../excel.service';



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
  public data: any[];

  constructor(
    private service: AdmitionsService,
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

    this.service.reportOpent( value, dateint, dateout)
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
      let status = 'Abierta';
      // @ts-ignore
      if (this.lists[i].status === false){
        status = 'Cerrada';
      }

      const obj  = [
        this.lists[i].hcs.nohc,
        this.lists[i].hcs.name,
        new Date(this.lists[i].entry).toLocaleDateString('es'),
        this.lists[i].isolation_center.value,
        status
      ];
      this.data.push(obj);
    }
  }

  generateExcel(): void {

    const title = 'Reporte de PCR por admisiones';
    const header = ['HC', 'Nombre paciente', 'Fecha entrada', 'Centro de aislamiento actual', 'Estado'];
    const sheet = 'admisiones';
    const withColum = [20, 40, 20, 40, 20];
    const fileName = 'Reporte de PCR por admisiones';
    const mergeHeader = 'E2';
    const mergeSystem = 'E5';

    // console.log('called');
    this.excelService.generateAdmitionsExcel(title, header, mergeHeader, mergeSystem, this.data, sheet, withColum, fileName);
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
