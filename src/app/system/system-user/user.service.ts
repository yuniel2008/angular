import { Injectable } from '@angular/core';
import {Config} from '../../config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = Config.urlApiRes() + '/core/user';

  private functionality = 'USERS';

  constructor(
    private  http: HttpClient,
    private router: Router,
  ) { }

  list(username: string,
       fullname: string,
       start: number,
       length: number): Observable<any> {
    let params = new HttpParams();

    if (username){
      params = params.append('username', username);
    }

    if (fullname){
      params = params.append('fullname', fullname);
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

  listRoles(): Observable<any> {
    const options = {
      headers: Config.getheaders('ROLES'),
    };

    return this.http.get(`${Config.urlApiRes()}/core/roles`, options)
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

  new(user: User): Observable<any> {

    const options = {
      headers: Config.getheaders(this.functionality)
    };

    return this.http.post(`${this.url}`, user, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('insert')))
      ;
  }

  update(user: User, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.put(`${this.url}`, user, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('update')))
      ;
  }

  changePassword(user: User, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };
    return this.http.put(`${this.url}/password`, user, options)
      .pipe( map(r => r),
        catchError(this.handleError<any>('update')))
      ;
  }

  changeStatus(user: User, id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);

    const options = {
      headers: Config.getheaders(this.functionality),
      params
    };

    return this.http.put(`${this.url}/status`, user, options)
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
        if (err === 'Token inv??lido'){
          const link = ['/security/system'];
          this.router.navigate(link);
        }
      } else {
        err = 'Fall?? la respuesta Http por un error desconocido';
      }

      result = {error: err};
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
