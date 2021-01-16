import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.constants';
import {PostRequestPayload} from '../createblogpost/post-request.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/posts');
  }

  getPostById(id): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/posts/' + id);
  }

  getAllByTag(tag): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/posts/tags/' + tag);
  }

  blogpostConnector(postRequest: PostRequestPayload): Observable<any> {
    console.log('sending to backend');
    return this.httpClient.post(`${API_URL}/posts`, postRequest, { responseType: 'text'});
    //response.subscribe(resp => console.log(resp));
    //for error catching (set response to the htis.httpClient call)
  }
}
