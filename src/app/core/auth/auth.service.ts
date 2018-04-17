import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from '../log/logger.service';
import { Md5 } from 'ts-md5/dist/md5';



@Injectable()
export class AuthService {
  constructor(
     private http: HttpClient,
     private logger: LoggerService
  ) {
  }
  private isLogin = false;
  private currentUser = {
    username: '',
    password: '',
    sessionId: ''
  };

  // store the URL so we can redirect after logging in
  redirectUrl: string;


  checkLogin(): boolean {
    if ( localStorage.getItem('sessionId') !== '' &&  this.isLogin ) {
      return true;
    }
    return false;

  }

  getAuthorizationToken = () => {
    return localStorage.getItem('sessionId');
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      this.logger.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

