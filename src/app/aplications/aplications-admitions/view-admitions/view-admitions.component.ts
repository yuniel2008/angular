import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Admitions} from '../admitions';
import {AdmitionsService} from '../admitions.service';


@Component({
  selector: 'app-view-admitions',
  templateUrl: './view-admitions.component.html',
  styleUrls: ['./view-admitions.component.css']
})
export class ViewAdmitionsComponent implements OnInit {
  public obj: Admitions = null;
  public msgError = 'null';
  public loading = false;
  public id;

  constructor(
    private service: AdmitionsService,
    private router: Router,
    private  route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.id = this.route.snapshot.params.idhc;
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
