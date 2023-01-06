import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  describe('without testbed', () => {
    beforeEach(() => {
      service = new CommonService(httpClientSpy);
    });
    it('should create the instance', () => {
      expect(service.getTestValue()).toBe('Hello');
    });
    it('should return the mocked value', () => {});
  });
  describe('with testbed', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CommonService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('getTestValue should return hello', () => {
      expect(service.getTestValue()).toEqual('Hello');
    });
  });
});
