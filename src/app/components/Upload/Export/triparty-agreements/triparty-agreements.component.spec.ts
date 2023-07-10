import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripartyAgreementsComponent } from './triparty-agreements.component';

describe('TripartyAgreementsComponent', () => {
  let component: TripartyAgreementsComponent;
  let fixture: ComponentFixture<TripartyAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripartyAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripartyAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
