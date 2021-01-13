import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  headers = 'headers made with HttpHeaders';

  options = {
    responseType: "text"
};

  uploadImage(image): Observable<string>{
    console.log("uploading");
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post(`${API_URL}/image/uploadS3`, formData, {responseType: "text"});
  }

}
