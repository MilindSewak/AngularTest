import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient: HttpClient) { }

  // sendGetRequest() {
  //   return this.httpClient.get(this.apiUrl);
  // }
}
