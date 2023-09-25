import { TestBed } from '@angular/core/testing';

import { LEIRecordsService } from './leirecords.service';

describe('LEIRecordsService', () => {
  let service: LEIRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LEIRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
