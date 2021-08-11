import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Config} from '../../../config';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestHcService {
  private url = Config.urlApiRes() + '/aplications/admitions';

  private functionality = 'APPADMITIONS';

  constructor(
    private  http: HttpClient,
    private router: Router,
  ) { }

  list(
    nohc: string,
    name: string,
    ci: string,
    value: string,
    status: string,
    start: number,
    length: number
  ): Observable<any> {
    let params = new HttpParams();

    if (nohc){
      params = params.append('nohc', nohc);
    }

    if (name){
      params = params.append('name', name);
    }

    if (ci){
      params = params.append('ci', ci);
    }

    if (value){
      params = params.append('value', value);
    }

    if ((status) && (status !== 'null')) {
      params = params.append('status', status);
    }

    // @ts-ignore
    if ((length) && (length !== 'null')) {
      params = params.append('length', length.toString());
    }

    params = params.append('start', start.toString());

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.get(`${this.url}`, options)
      .pipe(map(r => r),
        catchError(this.handleError<any>('list')));
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
        if (err === 'Token inválido'){
          const link = ['/security/system'];
          this.router.navigate(link);
        }
      } else {
        err = 'Falló la respuesta Http por un error desconocido';
      }

      result = {error: err};
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
