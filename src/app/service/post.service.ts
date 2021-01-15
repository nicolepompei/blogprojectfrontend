import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

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

}
