import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public obj: User = null;
  public msgError = 'null';
  public loading = false;

  constructor(
    private service: UserService,
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
