import { TestBed } from '@angular/core/testing';

import { ExportCommonDataService } from './export-common-data.service';

describe('ExportCommonDataService', () => {
  let service: ExportCommonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportCommonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
