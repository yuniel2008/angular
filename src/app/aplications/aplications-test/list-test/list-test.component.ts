import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Test} from '../test';
import {Laboratory} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory';
import {TestService} from '../test.service';
import {LaboratoryService} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory.service';
import {Config} from '../../../config';


@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  public lists: Test[] = [];
  public msgError = 'null';
  public loading = false;
  public comboLAB: Laboratory[] = [];
  public faRetweet = faRetweet;

  public now = new Date();

  private length = 10;
  private start = 0;
  private total: number;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: TestService,
    private serviceLab: LaboratoryService,
  ) {
    this.list('', '', '',  '', 'null', 'null');
    this.getComboLAB();
  }

  ngOnInit(): void {
  }

  getComboLAB(): void {
    this.serviceLab.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboLAB = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          nohc: string,
                          name: string,
                          value: string,
                          // tslint:disable-next-line:variable-name
                          date_samples: string,
                          // tslint:disable-next-line:variable-name
                          status_test: string,
                          result: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(nohc, name, value, date_samples, status_test, result);
  }

  // metodo para mostrar el paginado
  showPaginate(): boolean {
    if (this.length >= this.total){
      return false;
    } else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  list(  nohc: string,
         name: string,
         value: string,
         // tslint:disable-next-line:variable-name
         date_samples: string,
         // tslint:disable-next-line:variable-name
         status_test: string,
         result: string
        ) {

    this.loading = false;
    this.lists = [];
    this.total = 0;

    this.service.list(nohc, name, value, date_samples, status_test, result, this.start, this.length)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.lists = rt.data;
            this.total = rt.total;
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

  isAutoriceWritter(): boolean {
    let result = false;
    if (atob(localStorage.getItem(Config.rol())) !== 'ROL_DESC') {
      result = true;
    }
    return  result;
  }

  onClosed(): void {
    this.msgError = 'null';
  }
}
