import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Transfer} from '../transfer';
import {TransferService} from '../transfer.service';

@Component({
  selector: 'app-list-transfer',
  templateUrl: './list-transfer.component.html',
  styleUrls: ['./list-transfer.component.css']
})
export class ListTransferComponent implements OnInit {
  public lists: Transfer[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;

  private length = 10;
  private start = 0;
  private total: number;

  constructor(
    private service: TransferService,
  ) {
    this.list('', '');
  }

  ngOnInit(): void {
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          nohc: string,
                          name: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(nohc, name);
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
  list( nohc: string,
        name: string,
       ) {

    this.loading = false;
    this.lists = [];
    this.total = 0;

    this.service.list(nohc, name, this.start, this.length)
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
