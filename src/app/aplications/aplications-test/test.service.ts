import { Injectable } from '@angular/core';
import {Config} from '../../config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Test} from './test';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = Config.urlApiRes() + '/aplications/test';

  private functionality = 'APPTEST';

  constructor(
    private  http: HttpClient
  ) { }

  list(
    nohc: string,
    name: string,
    value: string,
    // tslint:disable-next-line:variable-name
    date_samples: string,
    // tslint:disable-next-line:variable-name
    status_test: string,
    result: string,
  ): Observable<any> {
    let params = new HttpParams();

    if (nohc){
      params = params.append('nohc', nohc);
    }

    if (name){
      params = params.append('name', name);
    }

    if ((value) && (value !== 'null')){
      params = params.append('value', value);
    }

    if (date_samples){
      params = params.append('date_samples', date_samples);
    }

    if ((status_test) && (status_test !== 'null')){
      params = params.append('status_test', status_test);
    }

    if ((result) && (result !== 'null')) {
      params = params.append('result', result);
    }

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.get(`${this.url}`, options)
      .pipe(map(r => r),
        catchError(this.handleError<any>('list')));
  }

  getByid(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.get(`${this.url}/byId`, options )
      .pipe( map(r => r),
        catchError(this.handleError<any>('getById')))
      ;
  }

  new(test: Test): Observable<any> {

    const options = {
      headers: Config.getheaders(this.functionality)
    };

    return this.http.post(`${this.url}`, test, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('insert')))
      ;
  }

  update(test: Test, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.put(`${this.url}`, test, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('update')))
      ;
  }

  closed(test: Test, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.put(`${this.url}/closed`, test, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('update')))
      ;
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
