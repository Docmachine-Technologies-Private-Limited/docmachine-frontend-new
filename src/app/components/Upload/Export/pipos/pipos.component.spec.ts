import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPOSComponent } from './pipos.component';

describe('PIPOSComponent', () => {
  let component: PIPOSComponent;
  let fixture: ComponentFixture<PIPOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PIPOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PIPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
