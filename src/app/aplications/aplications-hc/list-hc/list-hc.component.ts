import { Component, OnInit } from '@angular/core';
import {Hc} from '../hc';
import {HcService} from '../hc.service';

@Component({
  selector: 'app-list-hc',
  templateUrl: './list-hc.component.html',
  styleUrls: ['./list-hc.component.css']
})
export class ListHcComponent implements OnInit {
  public lists: Hc[] = [];
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: HcService
  ) {
    this.list('', '', '');
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  list(
    nohc: string,
    name: string,
    ci: string
  ) {

    this.loading = false;
    this.lists = [];

    this.service.list(nohc, name, ci)
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
