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

  private length = 10;
  private start = 0;
  private total: number;

  constructor(
    private service: UserService
  ) {
    this.list('', '');
  }

  ngOnInit(): void {
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          username: string,
                          fullname: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(username, fullname);
  }

  // metodo para mostrar el paginado
  showPaginate(): boolean {
    if (this.length >= this.total){
      return false;
    } else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  list(username: string,
       fullname: string) {

    this.lists = [];
    this.total = 0;
    this.service.list(username, fullname, this.start, this.length)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.lists = rt.data;
            this.total = rt.total;
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

  changeStatus(obj: User, username: string,
               fullname: string): void {
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
          this.list(username, fullname);

        }
      );
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
