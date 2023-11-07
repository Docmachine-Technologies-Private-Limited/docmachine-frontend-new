import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBIRMMatchOffComponent } from './sbirmmatch-off.component';

describe('SBIRMMatchOffComponent', () => {
  let component: SBIRMMatchOffComponent;
  let fixture: ComponentFixture<SBIRMMatchOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBIRMMatchOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBIRMMatchOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
