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

  private length = 10;
  private start = 0;
  private total: number;

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

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          nohc: string,
                          name: string,
                          ci: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(nohc, name, ci);
  }

  // metodo para mostrar el paginado
  showPaginate(): boolean {
    if (this.length >= this.total){
      return false;
    } else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  list(
    nohc: string,
    name: string,
    ci: string
  ) {

    this.lists = [];
    this.total = 0;

    if (this.origen === 'admitions'){
      this.service.list(nohc, name, ci, this.start, this.length)
        .subscribe(
          rt => {
            if (rt.error) {
              this.msgError = rt.error;
            } else {
              this.lists = rt.data;
              this.total = rt.total;
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
      this.servicetest.list(nohc, name, ci, '' , 'true', this.start, this.length)
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
