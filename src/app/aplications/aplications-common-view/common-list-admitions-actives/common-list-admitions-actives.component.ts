import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Admitions} from '../../aplications-admitions/admitions';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';

@Component({
  selector: 'app-common-list-admitions-actives',
  templateUrl: './common-list-admitions-actives.component.html',
  styleUrls: ['./common-list-admitions-actives.component.css']
})
export class CommonListAdmitionsActivesComponent implements OnInit {
  public lists: Admitions[] = [];
  public msgError = 'null';
  public loading = false;
  public comboIC: IsolationsCenter[] = [];
  public faRetweet = faRetweet;

  constructor(
    private service: AdmitionsService,
    private serviceIC: IsolationsCenterService,
  ) {
    this.list('', '', '', 'true');
    this.getComboIC();
  }

  ngOnInit(): void {
  }

  getComboIC(): void {
    this.serviceIC.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboIC = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  // tslint:disable-next-line:typedef
  list( nohc: string,
        name: string,
        value: string,
        status: string) {

    this.loading = false;
    this.lists = [];

    this.service.list(nohc, name, value, status)
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