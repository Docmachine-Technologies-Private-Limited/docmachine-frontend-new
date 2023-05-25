import { TestBed } from '@angular/core/testing';

import { BoeBillService } from './boe-bill.service';

describe('BoeBillService', () => {
  let service: BoeBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoeBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
