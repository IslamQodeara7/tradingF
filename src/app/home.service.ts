import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient:HttpClient) { }
  getHome1stSection():Observable<any>{
return this._httpClient.get(`https://tdawl.quickly-egypt.com/api/v1/Homepage/sec1.php`);
  }
}
