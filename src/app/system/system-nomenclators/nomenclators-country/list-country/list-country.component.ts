import { Component, OnInit } from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Country} from '../country';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {
  public lists: Country[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;

  private length = 10;
  private start = 0;
  private total = 0;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: CountryService
  ) {
    this.list('');
  }

  ngOnInit(): void {
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          value: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(value);
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
  list(value: string) {

    this.lists = [];
    this.total = 0;

    this.service.list(value, this.start, this.length)
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
