import { Component, OnInit } from '@angular/core';
import {Hc} from '../hc';
import {HcService} from '../hc.service';

@Component({
  selector: 'app-list-hc',
  templateUrl: './list-hc.component.html',
  styleUrls: ['./list-hc.component.css']
})
export class ListHcComponent implements OnInit {
  public lists: Hc[] = [];
  public msgError = 'null';
  public loading = false;

  private length = 10;
  private start = 0;
  private total: number;

  constructor(
    private service: HcService
  ) {
    this.list('', '', '');
  }

  ngOnInit(): void {
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

    this.loading = false;
    this.lists = [];
    this.total = 0;

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
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
