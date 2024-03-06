import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharatheximSubscriptionModuleComponent } from './bharathexim-subscription-module.component';

describe('BharatheximSubscriptionModuleComponent', () => {
  let component: BharatheximSubscriptionModuleComponent;
  let fixture: ComponentFixture<BharatheximSubscriptionModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BharatheximSubscriptionModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BharatheximSubscriptionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
