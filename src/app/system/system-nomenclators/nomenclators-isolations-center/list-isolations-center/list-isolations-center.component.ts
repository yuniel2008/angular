import { Component, OnInit } from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {IsolationsCenter} from '../isolations-center';
import {IsolationsCenterService} from '../isolations-center.service';
import {Municipality} from '../../nomenclators-municipality/municipality';
import {MunicipalityService} from '../../nomenclators-municipality/municipality.service';


@Component({
  selector: 'app-list-isolace-center',
  templateUrl: './list-isolations-center.component.html',
  styleUrls: ['./list-isolations-center.component.css']
})
export class ListIsolationsCenterComponent implements OnInit {
  public lists: IsolationsCenter[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public comboMunicipality: Municipality[] = [];

  private length = 10;
  private start = 0;
  private total = 0;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: IsolationsCenterService,
    private serviceMunicipality: MunicipalityService,
  ) {
    this.list('', '', '');
    this.getComboMunicipality();
  }

  ngOnInit(): void {
  }

  getComboMunicipality(): void {
    this.serviceMunicipality.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboMunicipality = rt.data;
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
                          value: string,
                          type: string,
                          municipality: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(value, type, municipality);
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
  list(value: string,
       type: string,
       municipality: string) {

    this.lists = [];
    this.total = 0;

    this.service.list(value, type, municipality, this.start, this.length)
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

  onClosed(): void {
    this.msgError = 'null';
  }

}
