import {Component, Input, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-search',
  template: `
    <a class="btn btn-primary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faPlus" size="ms"></fa-icon> Nuevo</a>`
})
export class BtnSearchComponent implements OnInit {
  public faPlus = faPlus;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
