import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalBankExportletterheadComponent } from './exportletterhead.component';

describe('FederalBankExportletterheadComponent', () => {
  let component: FederalBankExportletterheadComponent;
  let fixture: ComponentFixture<FederalBankExportletterheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederalBankExportletterheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederalBankExportletterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
