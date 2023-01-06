import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserInfo = () => {
    const titles = this._commonService.getTestValue();
    return { name: 'UserName', location: 'UserLocation', titles };
  };
  getPublicApi = () =>
    this._httpClient.get('https://api.publicapis.org/entries');

  constructor(
    private _commonService: CommonService,
    private _httpClient: HttpClient
  ) {}
}
