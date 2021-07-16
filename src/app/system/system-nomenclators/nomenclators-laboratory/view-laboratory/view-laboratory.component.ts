import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Laboratory} from '../laboratory';
import {LaboratoryService} from '../laboratory.service';

@Component({
  selector: 'app-view-laboratory',
  templateUrl: './view-laboratory.component.html',
  styleUrls: ['./view-laboratory.component.css']
})
export class ViewLaboratoryComponent implements OnInit {
  public obj: Laboratory = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: LaboratoryService,
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
