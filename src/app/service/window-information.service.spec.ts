import { TestBed } from '@angular/core/testing';

import { WindowInformationService } from './window-information.service';

describe('WindowInformationService', () => {
  let service: WindowInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
