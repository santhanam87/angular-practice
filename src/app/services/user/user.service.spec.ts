import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CommonService } from '../common/common.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  // describe('without testbed', () => {
  //   it('regular approach', () => {
  //     service = new UserService(new CommonService(), new HttpClient());
  //     expect(service.getUserInfo()).toEqual({
  //       name: 'UserName',
  //       location: 'UserLocation',
  //       message: 'Hello',
  //     });
  //   });
  //   it('with fake service values', () => {
  //     const fakeCommonService = { getTestValue: () => 'FakeValue' };
  //     service = new UserService(fakeCommonService as CommonService);
  //     expect(service.getUserInfo()).withContext('some random message').toEqual({
  //       name: 'UserName',
  //       location: 'UserLocation',
  //       message: 'FakeValue',
  //     });
  //   });
  //   it('with jasmin spy object', () => {
  //     const getTestValueSpy = jasmine.createSpyObj('CommonService', [
  //       'getTestValue',
  //     ]);
  //     getTestValueSpy.getTestValue.and.returnValue('spy value...');
  //     service = new UserService(getTestValueSpy);
  //     service.getUserInfo();
  //     expect(service.getUserInfo()).toEqual({
  //       name: 'UserName',
  //       location: 'UserLocation',
  //       message: 'spy value...',
  //     });
  //   });
  // });
  describe('with testbed', () => {
    httpClientSpy = jasmine.createSpyObj('HTTPClient', ['get']);
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(UserService);
    });
  });
});
