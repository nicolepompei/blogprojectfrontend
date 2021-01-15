import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../app.constants";

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

}
