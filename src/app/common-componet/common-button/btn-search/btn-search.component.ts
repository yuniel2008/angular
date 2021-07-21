import {Component, Input, OnInit} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-search',
  template: `
    <a class="btn btn-primary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faSearch" size="ms"></fa-icon> Buscar</a>`
})
export class BtnSearchComponent implements OnInit {
  public faSearch = faSearch;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
