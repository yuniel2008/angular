import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-view',
  template: `
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`
})
export class LoadingViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
