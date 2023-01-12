import { TestBed } from '@angular/core/testing';

import { AprrovalPendingRejectTransactionsService } from './aprroval-pending-reject-transactions.service';

describe('AprrovalPendingRejectTransactionsService', () => {
  let service: AprrovalPendingRejectTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprrovalPendingRejectTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
