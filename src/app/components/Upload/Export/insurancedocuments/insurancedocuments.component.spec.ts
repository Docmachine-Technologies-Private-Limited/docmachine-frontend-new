import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancedocumentsComponent } from './insurancedocuments.component';

describe('InsurancedocumentsComponent', () => {
  let component: InsurancedocumentsComponent;
  let fixture: ComponentFixture<InsurancedocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancedocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancedocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
