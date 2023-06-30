import { TestBed } from '@angular/core/testing';

import { CustomExpansionPanelService } from './custom-expansion-panel.service';

describe('CustomExpansionPanelService', () => {
  let service: CustomExpansionPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomExpansionPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
