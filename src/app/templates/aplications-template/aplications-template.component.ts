import { Component, OnInit } from '@angular/core';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../../security/security.service';
import {Config} from '../../config';

@Component({
  selector: 'app-aplications-template',
  templateUrl: './aplications-template.component.html',
  styleUrls: ['./aplications-template.component.css']
})
export class AplicationsTemplateComponent implements OnInit {
  public faSign = faSignOutAlt;
  public appName: string;
  public userLogin: string;
  public rolLogin: string;
  public rolNameLogin: string;
  public copyrigth = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private securityService: SecurityService
  ) {
    this.copyrigth = Config.copyrigth();
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

  isAdmin(): boolean {
    let result = false;
    if (this.rolLogin === 'ROL_ADMIN') {
      result = true;
    }
    return  result;
  }
}
