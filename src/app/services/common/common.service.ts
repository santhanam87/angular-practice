import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  getTestValue = () => 'Hello';
  generateNumber = (numberRange: [number, number]) => {
    const diff = numberRange[1] - numberRange[0];
    return numberRange[0] + Math.floor(Math.random() * diff);
  };
  getTitles = () => this._httpClient.get('https://api.publicapis.org/entries');
  constructor(private _httpClient: HttpClient) {}
}
