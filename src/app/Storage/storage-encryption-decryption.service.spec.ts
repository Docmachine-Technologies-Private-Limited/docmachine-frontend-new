import { TestBed } from '@angular/core/testing';

import { StorageEncryptionDecryptionService } from './storage-encryption-decryption.service';

describe('StorageEncryptionDecryptionService', () => {
  let service: StorageEncryptionDecryptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageEncryptionDecryptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
