import { Component, OnInit } from '@angular/core';
import {Action} from '../action';
import {ActionsService} from '../actions.service';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit {
  public lists: Action[] = [];
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: ActionsService
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
