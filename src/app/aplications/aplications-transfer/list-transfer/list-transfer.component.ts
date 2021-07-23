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

  constructor(
    private service: TransferService,
  ) {
    this.list('', '');
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  list( nohc: string,
        name: string,
       ) {

    this.loading = false;
    this.lists = [];

    this.service.list(nohc, name)
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
