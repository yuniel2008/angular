import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Admitions} from '../admitions';
import {AdmitionsService} from '../admitions.service';


@Component({
  selector: 'app-list-admitions',
  templateUrl: './list-admitions.component.html',
  styleUrls: ['./list-admitions.component.css']
})
export class ListAdmitionsComponent implements OnInit {
  public lists: Admitions[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  @Input()
  idhc: string;

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
