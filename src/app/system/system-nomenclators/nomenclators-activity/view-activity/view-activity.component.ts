import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Activity} from '../activity';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.css']
})
export class ViewActivityComponent implements OnInit {
  public obj: Activity = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: ActivityService,
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
