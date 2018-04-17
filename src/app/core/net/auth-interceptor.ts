import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { mergeMap, catchError } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

/**
 * auth HTTP拦截器
 */

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  private loginPageUrl = '/login';
  constructor(
    private injector: Injector,
    private http: HttpClient,
    private authService: AuthService
  ) { }


  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    // 业务处理：一些通用操作
    switch (event.status) {
      case 200:
        // 业务层级错误处理，以下假如响应体的 `status` 若不为 `0` 表示业务级异常
        // 并显示 `error_message` 内容

        // const body: any = event instanceof HttpResponse && event.body;
        // if (body && body.status !== 0) {
        //     this.msg.error(body.error_message);
        //     // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
        //     // this.http.get('/').subscribe() 并不会触发
        //     return ErrorObservable.throw(event);
        // }
        break;
      case 401: // 未登录状态码
        this.goTo(this.loginPageUrl);
        break;
      case 403:
      case 404:
      case 500:
        this.goTo(`/${event.status}`);
        break;
    }
    return of(event);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('login')) {
      return next.handle(req);
    }
    // Get the auth token from the service.
    const authToken = this.authService.getAuthorizationToken();
    console.log(authToken);
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', authToken)
    // });
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err))
    );
  }
}

