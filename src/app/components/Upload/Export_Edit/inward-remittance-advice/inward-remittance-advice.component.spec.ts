import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInwardRemittanceAdviceComponent } from './inward-remittance-advice.component';

describe('EditInwardRemittanceAdviceComponent', () => {
  let component: EditInwardRemittanceAdviceComponent;
  let fixture: ComponentFixture<EditInwardRemittanceAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInwardRemittanceAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInwardRemittanceAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
