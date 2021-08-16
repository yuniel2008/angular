import { Component, OnInit } from '@angular/core';
import {Config} from '../../config';
import {
   faList, faPlus, faCogs, faDatabase, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../../security/security.service';

@Component({
  selector: 'app-system-template',
  templateUrl: './system-template.component.html',
  styleUrls: ['./system-template.component.css']
})
export class SystemTemplateComponent implements OnInit {
  public faCogs = faCogs;
  public faList = faList;
  public faPlus = faPlus;
  public faSign = faSignOutAlt;
  public faDatabase = faDatabase;
  public appName: string;
  public userLogin: string;
  public rolLogin: string;
  public rolNameLogin: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private securityService: SecurityService
  ) {
    this.appName = Config.systemName();
    this.userLogin = atob(localStorage.getItem(Config.userLogin()));
    this.rolLogin = atob(localStorage.getItem(Config.rol()));
    this.rolNameLogin = atob(localStorage.getItem(Config.rolName()));
  }

  ngOnInit(): void {
  }

  logout(): void {
   this.securityService.logout();
   this.goLogin();
  }

  goLogin(): void {
    const link = ['/security/system'];
    this.router.navigate(link);
  }

}
