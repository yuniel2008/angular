import { Injectable } from '@angular/core';
import {Config} from '../config';

import { Router, CanActivate} from '@angular/router';


@Injectable()
export class AuthGuardAplications implements CanActivate {


  constructor(
    private router: Router
  ) {  }

  canActivate(): boolean {
    // tslint:disable-next-line:max-line-length
    if (
      (atob(localStorage.getItem(Config.isLogin())) === 'true')
      && (localStorage.getItem(Config.token()) != null )){
      return true;
    } else {
      this.router.navigate(['/security/system']);
      return false;
    }
  }
}
