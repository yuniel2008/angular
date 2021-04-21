import {Component, Input, OnInit} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-details',
  template: `
    <a class="btn btn-secondary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faEye" size="ms"></fa-icon> Detalle</a>`
})
export class BtnDetailsComponent implements OnInit {
  public faEye = faEye;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
