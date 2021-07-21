import {Component, Input, OnInit} from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-select',
  template: `
    <a class="btn btn-secondary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faCheck" size="ms"></fa-icon> Seleccionar</a>`
})
export class BtnSelectComponent implements OnInit {
  public faCheck = faCheck;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
