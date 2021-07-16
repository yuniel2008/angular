import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {IsolationsCenter} from '../isolations-center';
import {IsolationsCenterService} from '../isolations-center.service';


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
  public faUserShield = faUserShield;

  constructor(
    private service: IsolationsCenterService
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
