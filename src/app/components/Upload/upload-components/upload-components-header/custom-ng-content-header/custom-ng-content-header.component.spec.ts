import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgContentHeaderComponent } from './custom-ng-content-header.component';

describe('CustomNgContentHeaderComponent', () => {
  let component: CustomNgContentHeaderComponent;
  let fixture: ComponentFixture<CustomNgContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNgContentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNgContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
