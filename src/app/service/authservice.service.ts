import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { from, throwError } from 'rxjs';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable } from 'rxjs';
import { LoginRequestPayload } from '../login/login.request.payload';
import { LoginResponse } from '../login/login.response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName
  };

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) { }




  signup(signupRequestPayload: SignupRequestPayload): Observable<any>{
   return this.httpClient.post(`${API_URL}/api/auth/signup`, signupRequestPayload, { responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponse>(`${API_URL}/api/auth/signin`, loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        this.loggedIn.emit(true);
        this.username.emit(data.username);
        return true;
      }));
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>
    (`${API_URL}/auth/refresh/token`,
    this.refreshTokenPayload)
    .pipe(tap(response => {
      this.localStorage.clear('authenticationToken');
      this.localStorage.clear('expiresAt');

      this.localStorage.store('authenticationToken',
      response.authenticationToken);
      this.localStorage.store('expiresAt', response.expiresAt);
    }));
  }

  logout(){
    this.httpClient.post(`${API_URL}/api/auth/logout`, this.refreshTokenPayload,
    { responseType: 'text'})
    .subscribe(data => {
      console.log(data);
    }, error => {
      throwError(error);
    });
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  getRefreshToken(){
    return this.localStorage.retrieve('refreshToken');
  }

  getUserName(){
    return this.localStorage.retrieve('username');
  }

  getExpirationTIme(){
    return this.localStorage.retrieve('expiresAt');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

}
