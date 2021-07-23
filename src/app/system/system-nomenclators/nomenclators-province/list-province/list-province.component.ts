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
    this.serviceCountry.list('')
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

  // tslint:disable-next-line:typedef
  list(value: string,
       country: string) {

    this.lists = [];

    this.service.list(value, country)
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
