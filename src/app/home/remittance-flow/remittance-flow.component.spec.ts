import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceFlowComponent } from './remittance-flow.component';

describe('RemittanceFlowComponent', () => {
  let component: RemittanceFlowComponent;
  let fixture: ComponentFixture<RemittanceFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemittanceFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
