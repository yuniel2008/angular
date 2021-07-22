import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Test} from '../test';
import {Laboratory} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory';
import {TestService} from '../test.service';
import {LaboratoryService} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory.service';


@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  public lists: Test[] = [];
  public msgError = 'null';
  public loading = false;
  public comboLAB: Laboratory[] = [];
  public faRetweet = faRetweet;

  public now = new Date();

  constructor(
    private service: TestService,
    private serviceLab: LaboratoryService,
  ) {
    this.list('', '', '',  '', 'null', 'null');
    this.getComboLAB();
  }

  ngOnInit(): void {
  }

  getComboLAB(): void {
    this.serviceLab.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboLAB = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
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
