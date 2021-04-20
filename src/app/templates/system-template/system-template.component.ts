import { Component, OnInit } from '@angular/core';
import {Config} from '../../config';
import {
   faList, faPlus, faCogs, faDatabase
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-system-template',
  templateUrl: './system-template.component.html',
  styleUrls: ['./system-template.component.css']
})
export class SystemTemplateComponent implements OnInit {
  public faCogs = faCogs;
  public faList = faList;
  public faPlus = faPlus;
  public faDatabase = faDatabase;
  public appName: string;

  constructor() {
    this.appName = Config.systemName();
  }

  ngOnInit(): void {
  }

}
