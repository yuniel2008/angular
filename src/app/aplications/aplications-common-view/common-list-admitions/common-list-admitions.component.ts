import {Component, Input, OnInit} from '@angular/core';
import {Admitions} from '../../aplications-admitions/admitions';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';

@Component({
  selector: 'app-common-list-admitions',
  templateUrl: './common-list-admitions.component.html',
  styleUrls: ['./common-list-admitions.component.css']
})
export class CommonListAdmitionsComponent implements OnInit {
  public lists: Admitions[] = [];
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: AdmitionsService
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
