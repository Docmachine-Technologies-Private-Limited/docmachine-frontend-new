import { TestBed } from '@angular/core/testing';

import { AdminMemberGuard } from './admin-member.guard';

describe('AdminMemberGuard', () => {
  let guard: AdminMemberGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminMemberGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
