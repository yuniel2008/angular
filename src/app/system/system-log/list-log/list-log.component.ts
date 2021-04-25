import { Component, OnInit } from '@angular/core';
import {Log} from '../log';
import {LogService} from '../log.service';
import {User} from '../../system-user/user';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements OnInit {

  public lists: Log[] = [];
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: LogService
  ) {
    this.list();
  }

  ngOnInit(): void {
  }


  list(): void {

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
