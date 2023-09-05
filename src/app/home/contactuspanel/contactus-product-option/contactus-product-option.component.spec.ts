import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusProductOptionComponent } from './contactus-product-option.component';

describe('ContactusProductOptionComponent', () => {
  let component: ContactusProductOptionComponent;
  let fixture: ComponentFixture<ContactusProductOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusProductOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
