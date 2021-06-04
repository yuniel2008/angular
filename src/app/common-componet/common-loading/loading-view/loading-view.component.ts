import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading-view',
  template: `
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`
})
export class LoadingViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
