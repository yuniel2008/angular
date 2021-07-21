import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hc} from '../hc';
import {HcService} from '../hc.service';

@Component({
  selector: 'app-view-hc',
  templateUrl: './view-hc.component.html',
  styleUrls: ['./view-hc.component.css']
})
export class ViewHcComponent implements OnInit {
  public obj: Hc = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: HcService,
    private router: Router,
    private  route: ActivatedRoute
  ) {}

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
            console.log(this.obj);
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
