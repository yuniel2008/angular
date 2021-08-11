import { Component, OnInit } from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Municipality} from '../municipality';
import {MunicipalityService} from '../municipality.service';
import {Country} from '../../nomenclators-country/country';
import {Province} from '../../nomenclators-province/province';
import {CountryService} from '../../nomenclators-country/country.service';
import {ProvinceService} from '../../nomenclators-province/province.service';

@Component({
  selector: 'app-list-municipality',
  templateUrl: './list-municipality.component.html',
  styleUrls: ['./list-municipality.component.css']
})
export class ListMunicipalityComponent implements OnInit {
  public lists: Municipality[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public comboProvince: Province[] = [];

  private length = 10;
  private start = 0;
  private total = 0;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: MunicipalityService,
    private serviceProvince: ProvinceService,
  ) {
    this.list('', '');
    this.getComboProvince();
  }

  ngOnInit(): void {
  }

  getComboProvince(): void {
    this.serviceProvince.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            console.log(rt.data);
            this.comboProvince = rt.data;
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
                          province: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(value, province);
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
       province: string) {

    this.lists = [];
    this.total = 0;

    this.service.list(value, province, this.start, this.length)
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
