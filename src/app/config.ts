import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment as env } from '../environments/environment';

@Injectable({ providedIn: 'root'})
export class Config {

  /**
   * return token name
   */
  static token(): string {
    return `token` + this.systemName();
  }

  /**
   * return isLogin name
   */
  static isLogin(): string {
    return `isLogin` + this.systemName();
  }

  /**
   * return userLogin name
   */
  static userLogin(): string {
    return `userLogin` + this.systemName();
  }

  /**
   * return userLogin name
   */
  static rol(): string {
    return `userRol` + this.systemName();
  }

  /**
   * return system name
   */
  static systemName(): string {
    return `Covid`;
  }

  /**
   * return url apiRes
   */
  static urlApiRes(): string {
    return env.apiUrl;
  }

  /**
   * return headers
   */
  static  getheaders(functionality: string): HttpHeaders {
    const token = localStorage.getItem(Config.token());
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization':  `${token}`,
      'functionality': functionality
    });
    return headers;
  }

  /**
   * return copyrigth
   */
  static copyrigth(): string {
    const years =  new Date().getFullYear();
    if (years === 2021)
    {
      return 'División territorial Desoft Sancti Spirtus 2021';
    } else {
      return `División territorial Desoft Sancti Spirtus 2021-` + years;
    }
  }

}
