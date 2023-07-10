import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterofCreditComponent } from './letterof-credit.component';

describe('LetterofCreditComponent', () => {
  let component: LetterofCreditComponent;
  let fixture: ComponentFixture<LetterofCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterofCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterofCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
