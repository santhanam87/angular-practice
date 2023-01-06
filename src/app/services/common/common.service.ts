import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  getTestValue = () => 'Hello';
  getTitles = () => this._httpClient.get('https://api.publicapis.org/entries');
  constructor(private _httpClient: HttpClient) {}
}
