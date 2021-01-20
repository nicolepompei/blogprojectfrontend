import { HttpHandler, HttpInterceptor, HttpRequest, 
  HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, take, filter } from 'rxjs/operators';
import { LoginResponse } from '../login/login.response.payload';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  isTokenRefreshing = false;
  
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthserviceService, 
    public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
          if(req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
          }
          const jwtToken = this.authService.getJwtToken();

          req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)});

            return next.handle(req).pipe(
              catchError((error) => {

                let handled: boolean = false;
                console.error(error);

                if(error instanceof HttpErrorResponse){
                  if(error.error instanceof ErrorEvent){
                    console.error("Error Event");
                  } else {
                    console.log(`error status : ${error.status}  ${error.statusText }`);
                    switch (error.status){
                      case 401:
                        this.router.navigateByUrl("/login");
                        console.log(`redirect to login`);
                        handled = true;
                        break;
                      case 403:
                        this.router.navigateByUrl("/login");
                        console.log(`redirect to login`);
                        handled = true;
                        break;
                      case 404:
                        this.router.navigateByUrl("");
                        console.log(`redirect to home`)
                        handled = true;
                        break;
                      case 500:
                        this.router.navigateByUrl("");
                        console.log(`redirect to home`)
                        handled = true;
                        break;
                    }
                  }
                }
                else {
                  console.error("Other Errors");
                }

                if (handled){
                  console.log('return back ');
                  return of(error);
                } else {
                  console.log(`throw error back to the subscriber`);
                  return throwError(error);
                }
              })
            )

            
          // if(jwtToken){
          //   return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
          //     if(error instanceof HttpErrorResponse
          //       && error.status === 403){
          //         return this.handleAuthErrors(req, next);
          //       } else {
          //         return throwError(error);
          //       }
          //   }));
          // }
          // return next.handle(req)
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
      private addToken(req: HttpRequest<any>, jwtToken: string){
        return req.clone({
          setHeaders: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
      }
}
