import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public lists: User[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public faUserShield = faUserShield;

  constructor(
    private service: UserService
  ) {
    this.list();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  list() {

    this.lists = [];

    this.service.list()
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

  changeStatus(obj: User): void {
    this.loading = false;
    if (obj.status === true) {
      obj.status = false;
    } else {
      obj.status = true;
    }

    const id = obj.id.toString();

    this.service.changeStatus(obj, id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          }
          this.loading = true;
        },
        er => {
          this.msgError = er;
          this.loading = true;
        },
        () => {
          console.log('ready');
          this.list();

        }
      );
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
