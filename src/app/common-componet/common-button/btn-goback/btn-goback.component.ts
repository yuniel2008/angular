import {Component, Input, OnInit} from '@angular/core';
import {faBackward} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-goback',
  template: `
    <a role="button" class="btn btn-secondary btn-sm text-white" href="#" routerLink="{{router}}">
    <fa-icon [icon]="faBackward" size="ms"></fa-icon> Regresar</a>`
})
export class BtnGobackComponent implements OnInit {
  public faBackward = faBackward;

  @Input()
  router: string;
  constructor() { }

  ngOnInit(): void {
  }

}
