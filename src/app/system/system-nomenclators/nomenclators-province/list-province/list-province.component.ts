import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Province} from '../province';
import {ProvinceService} from '../province.service';
import {Country} from '../../nomenclators-country/country';
import {CountryService} from '../../nomenclators-country/country.service';

@Component({
  selector: 'app-list-province',
  templateUrl: './list-province.component.html',
  styleUrls: ['./list-province.component.css']
})
export class ListProvinceComponent implements OnInit {
  public lists: Province[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public comboCountry: Country[] = [];

  private length = 10;
  private start = 0;
  private total: number;

  constructor(
    private service: ProvinceService,
    private serviceCountry: CountryService,
  ) {
    this.list('', '');
    this.getComboContry();
  }

  ngOnInit(): void {
  }

  getComboContry(): void {
    this.serviceCountry.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboCountry = rt.data;
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
                          country: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(value, country);
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
       country: string) {

    this.lists = [];
    this.total = 0;

    this.service.list(value, country, this.start, this.length)
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
