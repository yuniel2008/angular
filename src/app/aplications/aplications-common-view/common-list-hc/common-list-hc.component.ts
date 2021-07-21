import {Component, Input, OnInit} from '@angular/core';
import {Hc} from '../../aplications-hc/hc';
import {HcService} from '../../aplications-hc/hc.service';

@Component({
  selector: 'app-common-list-hc',
  templateUrl: './common-list-hc.component.html',
  styleUrls: ['./common-list-hc.component.css']
})
export class CommonListHcComponent implements OnInit {

  public lists: Hc[] = [];
  public msgError = 'null';
  public loading = false;
  @Input()
  router: string;

  constructor(
    private service: HcService
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
