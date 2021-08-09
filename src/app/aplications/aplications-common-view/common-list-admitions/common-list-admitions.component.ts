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

  @Input()
  nohc: string;

  constructor(
    private service: AdmitionsService
  ) {
  }

  ngOnInit(): void {
    this.list('', '', '', 'null');
  }

  // tslint:disable-next-line:typedef
  list(nohc: string,
       name: string,
       value: string,
       status: string) {

    this.lists = [];
    nohc = this.nohc;

    this.service.list(nohc, name, value, status, 0, null)
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
