import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomesticItem } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class DomesticItemService {
  getDomesticItems(): Observable<DomesticItem[]> {
    return this._httpClient.get<DomesticItem[]>(
      'http://localhost:8080/domesticItems'
    );
  }
  constructor(private _httpClient: HttpClient) {}
}
