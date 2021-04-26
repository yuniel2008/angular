import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
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
  public faUserShield = faUserShield;

  constructor(
    private service: CountryService
  ) {
    this.list();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  list() {

    this.lists = [];

    this.service.list()
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
