import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldFederalBankExportletterheadComponent } from './exportoldletterhead.component';

describe('OldFederalBankExportletterheadComponent', () => {
  let component: OldFederalBankExportletterheadComponent;
  let fixture: ComponentFixture<OldFederalBankExportletterheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldFederalBankExportletterheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldFederalBankExportletterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
