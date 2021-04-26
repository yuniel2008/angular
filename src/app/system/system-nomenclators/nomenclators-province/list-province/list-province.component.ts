import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Province} from '../province';
import {ProvinceService} from '../province.service';

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
  public faUserShield = faUserShield;

  constructor(
    private service: ProvinceService
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
