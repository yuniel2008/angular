import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'title-view',
  template: `<div class="d-flex  flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">{{titles}}</h1> <span class="pl-2">{{subtitle}}</span>
  </div>`
})
export class TitleViewComponent implements OnInit {
  @Input()
  titles: string;

  @Input()
  subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
