import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class StorageEncryptionDecryptionService {
  private _ls = new SecureLS({
    encodingType: 'aes',
    isCompression: false,
    encryptionSecret: 'secret'
  });
  constructor() {
  }

  set(key: any, value: any, expired: number = 0) {
    this._ls.set(key, value);
  }

  remove(key: string) {
    this._ls.remove(key);
  }

  get(key: string): any {
    return this._ls.get(key,false);
  }

  clear() {
    this._ls.removeAll();
  }
}
