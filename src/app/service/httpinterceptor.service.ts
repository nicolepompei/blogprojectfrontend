import { HttpHandler, HttpInterceptor, HttpRequest, 
  HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginResponse } from '../login/login.response.payload';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  isTokenRefreshing = false;
  //a behavior subject can have a value, the new token from refresh token is assigned to this 
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public authService: AuthserviceService) { }
// in intercept method, recieve JWT through authService.getJetToken()
//if valid we add the token to the Authorization header which has a value according to
//the Bearer scheme
//if the token is invalid, request a new JWT by calling authservice.refreshToken()
  intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
          if(this.authService.getJwtToken()) {
            this.addToken(req, this.authService.getJwtToken());
          }

          return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse 
              && error.status === 403){
                return this.handleAuthErrors(req, next);
              } else{
                    return throwError(error);
              }
          }));
      }
      private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler){
        if(!this.isTokenRefreshing){
          this.isTokenRefreshing = true;
          this.refreshTokenSubject.next(null);

          return this.authService.refreshToken().pipe(
            switchMap((refreshTokenResponse: LoginResponse) => {
                this.isTokenRefreshing = false;

                this.refreshTokenSubject.next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken))
            })
          )
        }
      }
      private addToken(req: HttpRequest<any>, jwtToken: string){
        return req.clone({
          headers: req.headers.set('Authorization',
          'Bearer ' + jwtToken)
        });
      }
}
