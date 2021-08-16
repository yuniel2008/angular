import { Injectable } from '@angular/core';
import {Config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Login} from './login';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {private url = Config.urlApiRes() ;
  private functionality = 'LOGING';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization':  ``,
    'functionality': 'LOGING'
  });

  constructor(
    private  http: HttpClient
  ) { }



  login(login: Login): Observable<any> {

    const options = {
        headers: this.headers
    };

    return this.http.post(`${this.url}/login`, login, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('login')))
      ;
  }

   recoveryPassword(email: string): Observable<any> {
    const options = {
      headers: this.headers
    };
    return this.http.post(`${this.url}/recover_password`, email, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('recovery')))
      ;
  }

  logout(): void {
    localStorage.removeItem(Config.userLogin());
    localStorage.removeItem(Config.token());
    localStorage.removeItem(Config.userLogin());
    localStorage.removeItem(Config.rol());
    localStorage.removeItem(Config.rolName());
    localStorage.removeItem(Config.isLogin());
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<T> => {

      let err = '';
      // TODO: send the error to remote logging infrastructure
      // log to console instead
      if ((error.status === 500) || (error.status === 401) || (error.status === 403)) {
        err = error.error.msg_error; console.error(err);
      } else {
        err = 'Falló la respuesta Http por un error desconocido';
      }

      result = {error: err};
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
