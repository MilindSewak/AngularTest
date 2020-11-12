import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  sendGetRequest(): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl);
  }
}
