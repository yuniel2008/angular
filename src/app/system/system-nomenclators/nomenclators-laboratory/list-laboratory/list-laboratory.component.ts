import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Laboratory} from '../laboratory';
import {LaboratoryService} from '../laboratory.service';

@Component({
  selector: 'app-list-laboratory',
  templateUrl: './list-laboratory.component.html',
  styleUrls: ['./list-laboratory.component.css']
})
export class ListLaboratoryComponent implements OnInit {
  public lists: Laboratory[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public faUserShield = faUserShield;

  constructor(
    private service: LaboratoryService
  ) {
    this.list('');
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  list(value: string) {

    this.lists = [];

    this.service.list(value)
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
