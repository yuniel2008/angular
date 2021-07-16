import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IsolationsCenter} from '../isolations-center';
import {IsolationsCenterService} from '../isolations-center.service';

@Component({
  selector: 'app-view-isolace-center',
  templateUrl: './view-isolations-center.component.html',
  styleUrls: ['./view-isolations-center.component.css']
})
export class ViewIsolationsCenterComponent implements OnInit {
  public obj: IsolationsCenter = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: IsolationsCenterService,
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
