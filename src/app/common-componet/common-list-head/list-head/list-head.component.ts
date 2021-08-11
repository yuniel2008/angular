import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faBackward} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-head',
  template: `
    <div class="clearfix pb-2">
      <div class="float-left align-text-bottom">
        <label class="font-weight-bold mr-2"> Total: </label><label> {{total}}</label>
      </div>

      <div class="float-right">
        <btn-goback *ngIf="navigate" router="{{router}}"></btn-goback>
      </div>
    </div>
    `
})
export class ListHeadComponent implements OnInit {

  @Input()
  total: number;
  @Input()
  router: string;
  @Input()
  navigate: boolean;

  constructor() {}

  ngOnInit(): void {
  }

}
