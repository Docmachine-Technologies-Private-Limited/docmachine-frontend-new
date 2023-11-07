import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuspanelComponent } from './contactuspanel.component';

describe('ContactuspanelComponent', () => {
  let component: ContactuspanelComponent;
  let fixture: ComponentFixture<ContactuspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactuspanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactuspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
