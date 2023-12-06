import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardRemittanceDisposalComponent } from './outward-remittance-disposal.component';

describe('OutwardRemittanceDisposalComponent', () => {
  let component: OutwardRemittanceDisposalComponent;
  let fixture: ComponentFixture<OutwardRemittanceDisposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutwardRemittanceDisposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutwardRemittanceDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
