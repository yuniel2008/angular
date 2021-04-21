import {Component, Input, OnInit} from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-update',
  template: `
    <a class="btn btn-primary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faEdit" size="ms"></fa-icon> Actualizar</a>`
})
export class BtnUpdateComponent implements OnInit {
  public faEdit = faEdit;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
