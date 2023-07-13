import { TestBed } from '@angular/core/testing';

import { UploadServiceValidatorService } from './upload-service-validator.service';

describe('UploadServiceValidatorService', () => {
  let service: UploadServiceValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadServiceValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
