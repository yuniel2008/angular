import { Component, OnInit } from '@angular/core';
import {faRetweet, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  public lists: Category[] = [];
  public msgError = 'null';
  public loading = false;
  public faRetweet = faRetweet;
  public faUserShield = faUserShield;

  constructor(
    private service: CategoryService
  ) {
    this.list();
  }

  ngOnInit(): void {
  }

  list(): void {

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

  onClosed(): void {
    this.msgError = 'null';
  }

}
