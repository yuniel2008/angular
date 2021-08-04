import {Component, Input, OnInit} from '@angular/core';
import {faFileExcel} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btn-export-excel',
  template: `
    <button title="Exportar a excel"  class="btn btn-light mb-2"><fa-icon [icon]="faFileExcel" size="lg"></fa-icon> </button>
  `
})
export class BtnExportExcelComponent implements OnInit {
  public faFileExcel = faFileExcel;

  constructor() { }

  ngOnInit(): void {
  }

}
