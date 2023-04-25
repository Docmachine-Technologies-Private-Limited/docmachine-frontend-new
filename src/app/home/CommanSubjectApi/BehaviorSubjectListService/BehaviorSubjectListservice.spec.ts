import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectListService } from './BehaviorSubjectList.service';

describe('BehaviorSubjectListService', () => {
  let service: BehaviorSubjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
