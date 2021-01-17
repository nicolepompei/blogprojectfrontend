import { HttpHandler, HttpInterceptor, HttpRequest, 
  HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap, take, filter } from 'rxjs/operators';
import { LoginResponse } from '../login/login.response.payload';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  isTokenRefreshing = false;
  //a behavior subject can have a value, the new token from refresh token is assigned to this 
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthserviceService) { }
// in intercept method, recieve JWT through authService.getJetToken()
//if valid we add the token to the Authorization header which has a value according to
//the Bearer scheme
//if the token is invalid, request a new JWT by calling authservice.refreshToken()
  intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
          if(req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
          }
          const jwtToken = this.authService.getJwtToken();

          if(jwtToken){
            return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
              if(error instanceof HttpErrorResponse
                && error.status === 401){
                  return this.handleAuthErrors(req, next);
                } else {
                  return throwError(error);
                }
            }));
          }
          return next.handle(req)
      }
      
      private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        if(!this.isTokenRefreshing){
          this.isTokenRefreshing = true;
          this.refreshTokenSubject.next(null);

          return this.authService.refreshToken()
          .pipe(
            switchMap((refreshTokenResponse: LoginResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                .next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken))
            })
          )
        } else {
          return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap((res) => {
                  return next.handle(this.addToken(req, 
                    this.authService.getJwtToken()))
                })
          );
        }
      }
      private addToken(req: HttpRequest<any>, jwtToken: any){
        return req.clone({
          setHeaders: {
            Authorization: `Bearer ${jwtToken}`
          }
          // headers: req.headers.set('Authorization',
          // 'Bearer ' + jwtToken)
        });
      }
}
