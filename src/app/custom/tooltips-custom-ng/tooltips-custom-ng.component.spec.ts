import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsCustomNgComponent } from './tooltips-custom-ng.component';

describe('TooltipsCustomNgComponent', () => {
  let component: TooltipsCustomNgComponent;
  let fixture: ComponentFixture<TooltipsCustomNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipsCustomNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipsCustomNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
