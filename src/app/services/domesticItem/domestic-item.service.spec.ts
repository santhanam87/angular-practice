import { TestBed } from '@angular/core/testing';

import { DomesticItemService } from './domestic-item.service';

describe('DomesticItemService', () => {
  let service: DomesticItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomesticItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
