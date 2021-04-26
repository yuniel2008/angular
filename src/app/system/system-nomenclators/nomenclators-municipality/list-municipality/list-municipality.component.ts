import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Municipality} from '../municipality';
import {MunicipalityService} from '../municipality.service';

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

  constructor(
    private service: MunicipalityService
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
