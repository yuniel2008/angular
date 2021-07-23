import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Transfer} from '../transfer';
import {TransferService} from '../transfer.service';

@Component({
  selector: 'app-view-transfer',
  templateUrl: './view-transfer.component.html',
  styleUrls: ['./view-transfer.component.css']
})
export class ViewTransferComponent implements OnInit {

  public obj: Transfer = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: TransferService,
    private router: Router,
    private  route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (!id) { return; }

    this.getByid(id);
  }


  getByid( id: string): void {
    if (!id) {
      id = 'vacio';
    }

    this.loading = false;
    this.obj = null;

    this.service.getByid(id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.obj = rt.data;
            this.loading = true;
          }
        },
        er => {
          this.msgError = er;
          this.loading = true;

        },
        () => {

          console.log('ready');
        }
      );
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
