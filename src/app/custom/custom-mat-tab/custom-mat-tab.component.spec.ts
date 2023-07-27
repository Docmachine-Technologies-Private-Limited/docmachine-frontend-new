import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatTabComponent } from './custom-mat-tab.component';

describe('CustomMatTabComponent', () => {
  let component: CustomMatTabComponent;
  let fixture: ComponentFixture<CustomMatTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMatTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
