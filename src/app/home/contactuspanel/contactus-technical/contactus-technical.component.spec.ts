import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusTechnicalComponent } from './contactus-technical.component';

describe('ContactusTechnicalComponent', () => {
  let component: ContactusTechnicalComponent;
  let fixture: ComponentFixture<ContactusTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusTechnicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
