import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillUnderCollectionComponent } from './Bill-Under-Collection.component';

describe('NewBillUnderCollectionComponent', () => {
  let component: NewBillUnderCollectionComponent;
  let fixture: ComponentFixture<NewBillUnderCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBillUnderCollectionComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBillUnderCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
