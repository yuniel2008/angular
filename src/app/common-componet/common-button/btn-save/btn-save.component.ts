import { Component, Input, OnInit } from '@angular/core';
import {faSave} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-save',
  template: `
    <button class="btn btn-success btn-sm text-white" [disabled]="disabled" >
    <fa-icon [icon]="faSave" size="ms"></fa-icon> Guardar</button>`
})
export class BtnSaveComponent implements OnInit {
  public faSave = faSave;

  @Input()
  disabled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
