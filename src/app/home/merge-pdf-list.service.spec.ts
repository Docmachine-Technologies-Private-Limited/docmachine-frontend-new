import { TestBed } from '@angular/core/testing';

import { MergePdfListService } from './merge-pdf-list.service';

describe('MergePdfListService', () => {
  let service: MergePdfListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergePdfListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
