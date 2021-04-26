import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProvinceService} from '../province.service';
import {Province} from '../province';

@Component({
  selector: 'app-view-province',
  templateUrl: './view-province.component.html',
  styleUrls: ['./view-province.component.css']
})
export class ViewProvinceComponent implements OnInit {
  public obj: Province = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: ProvinceService,
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
