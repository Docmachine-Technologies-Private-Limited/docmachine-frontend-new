import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomCarouselComponent } from './ng-custom-carousel.component';

describe('NgCustomCarouselComponent', () => {
  let component: NgCustomCarouselComponent;
  let fixture: ComponentFixture<NgCustomCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
