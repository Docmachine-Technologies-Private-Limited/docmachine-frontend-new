import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardRemittanceDisposalComponent } from './inward-remittance-disposal.component';

describe('InwardRemittanceDisposalComponent', () => {
  let component: InwardRemittanceDisposalComponent;
  let fixture: ComponentFixture<InwardRemittanceDisposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardRemittanceDisposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InwardRemittanceDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
