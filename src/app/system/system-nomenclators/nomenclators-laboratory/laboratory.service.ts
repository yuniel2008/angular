import { Injectable } from '@angular/core';
import {Config} from '../../../config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Laboratory} from './laboratory';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  private url = Config.urlApiRes() + '/nomenclator/laboratory';

  private functionality = 'NLABORATORY';

  constructor(
    private  http: HttpClient
  ) { }

  list(
    value: string,
    start: number,
    length: number
  ): Observable<any> {
    let params = new HttpParams();

    if (value){
      params = params.append('value', value);
    }

    params = params.append('start', start.toString());
    params = params.append('length', length.toString());

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.get(`${this.url}`, options)
      .pipe(map(r => r),
        catchError(this.handleError<any>('list')));
  }

  getCombo(): Observable<any> {

    const options = {
      headers: Config.getheaders(this.functionality),
    };

    return this.http.get(`${this.url}/getcombo`, options)
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

  new(laboratory: Laboratory): Observable<any> {

    const options = {
      headers: Config.getheaders(this.functionality)
    };

    return this.http.post(`${this.url}`, laboratory, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('insert')))
      ;
  }

  update(laboratory: Laboratory, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.put(`${this.url}`, laboratory, options)
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
