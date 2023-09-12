import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOutwardRemittanceAdviceComponent } from './import-inward-remittance-advice.component';

describe('ImportOutwardRemittanceAdviceComponent', () => {
  let component: ImportOutwardRemittanceAdviceComponent;
  let fixture: ComponentFixture<ImportOutwardRemittanceAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOutwardRemittanceAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOutwardRemittanceAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
