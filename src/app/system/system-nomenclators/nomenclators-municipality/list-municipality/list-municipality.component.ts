import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
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
  public faUserShield = faUserShield;
  public comboProvince: Province[] = [];

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

  // tslint:disable-next-line:typedef
  list(value: string,
       province: string) {

    this.lists = [];

    this.service.list(value, province)
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
