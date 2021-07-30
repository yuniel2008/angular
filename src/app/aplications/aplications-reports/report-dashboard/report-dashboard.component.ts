import { Component, OnInit } from '@angular/core';

import {faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {

  public faList = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
