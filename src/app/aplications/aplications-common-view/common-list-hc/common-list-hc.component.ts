import {Component, Input, OnInit} from '@angular/core';
import {Hc} from '../../aplications-hc/hc';
import {HcService} from '../../aplications-hc/hc.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TemplateAccessibilityTableScopeRule} from 'codelyzer';
import {TestHcService} from './test-hc.service';

@Component({
  selector: 'app-common-list-hc',
  templateUrl: './common-list-hc.component.html',
  styleUrls: ['./common-list-hc.component.css']
})
export class CommonListHcComponent implements OnInit {

  public lists: any[] = [];
  public msgError = 'null';
  public loading = false;
  public rout = '';
  public origen = '';

  constructor(
    private service: HcService,
    private servicetest: TestHcService,
    private router: Router,
    private  route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.origen = this.route.snapshot.params.origen;
    if (this.origen === 'admitions'){
      this.rout = '/admitions/new';
    } else {
      this.rout = '/test/new';
    }

    this.list('', '', '');
  }

  // tslint:disable-next-line:typedef
  list(
    nohc: string,
    name: string,
    ci: string
  ) {

    this.lists = [];
    if (this.origen === 'admitions'){
      this.service.list(nohc, name, ci)
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
    } else {
      this.servicetest.list(nohc, name, ci, '' , 'true')
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
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
