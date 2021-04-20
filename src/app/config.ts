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
   * return system name
   */
  static systemName(): string {
    return `LineaBase`;
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
   * return group of the system
   */
  static groupSistem(): any {
    const arrayGroup = [];
    arrayGroup.push({alias: 'G_ADMIN', name: 'Administrador', status: false});
    return arrayGroup;
  }

}
