import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { PostRequestPayload } from '../createblogpost/post-request.payload';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {


  constructor(private httpClient: HttpClient,
    private authService: AuthserviceService) { }


  blogpostConnector(postRequest: PostRequestPayload): Observable<any> {
    console.log("sending to backend");
    let headers = new HttpHeaders();
    let token: string = this.authService.getJwtToken();
    console.log("token: " + token);
    headers = headers.set('Authorization', token);
    let response = this.httpClient.post(`${API_URL}/posts`, postRequest, { responseType: 'text'})
    response.subscribe(resp => console.log(resp));
    return response;
  }

}
