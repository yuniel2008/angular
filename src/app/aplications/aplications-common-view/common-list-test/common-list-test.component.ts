import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Test} from '../../aplications-test/test';
import {TestService} from '../../aplications-test/test.service';

@Component({
  selector: 'app-common-list-test',
  templateUrl: './common-list-test.component.html',
  styleUrls: ['./common-list-test.component.css']
})
export class CommonListTestComponent implements OnInit {
  public lists: Test[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;

  public now = new Date();
  @Input()
  nohc: string;

  constructor(
    private service: TestService
  ) {
  }

  ngOnInit(): void {
    this.list('', '', '',  '', 'null', 'null');
  }

  // tslint:disable-next-line:typedef
  list(  nohc: string,
         name: string,
         value: string,
         // tslint:disable-next-line:variable-name
         date_samples: string,
         // tslint:disable-next-line:variable-name
         status_test: string,
         result: string
  ) {

    this.loading = false;
    this.lists = [];
    nohc = this.nohc;

    this.service.list(nohc, name, value, date_samples, status_test, result)
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
