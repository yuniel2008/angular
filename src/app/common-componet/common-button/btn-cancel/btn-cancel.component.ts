import {Component, Input, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-cancel',
  template: `
    <a class="btn btn-secondary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faTimes" size="ms"></fa-icon> Cancelar</a>`
})
export class BtnCancelComponent implements OnInit {
  public faTimes = faTimes;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
