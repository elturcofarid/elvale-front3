import { TestBed } from '@angular/core/testing';

import { FiaoService } from './fiao.service';

describe('FiaoService', () => {
  let service: FiaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
