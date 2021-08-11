import { Component, OnInit } from '@angular/core';
import {Action} from '../action';
import {ActionsService} from '../actions.service';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit {
  public lists: Action[] = [];
  public msgError = 'null';
  public loading = false;

  private length = 10;
  private start = 0;
  private total: number;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: ActionsService
  ) {
    this.list();
  }

  ngOnInit(): void {
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          }
                         ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list();
  }

  // metodo para mostrar el paginado
  showPaginate(): boolean {
    if (this.length >= this.total){
      return false;
    } else {
      return true;
    }
  }

  list(): void {

    this.lists = [];
    this.total = 0;
    this.service.list(this.start, this.length)
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
