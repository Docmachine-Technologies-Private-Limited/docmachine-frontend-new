import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPIPOSComponent } from './pipos.component';

describe('EditPIPOSComponent', () => {
  let component: EditPIPOSComponent;
  let fixture: ComponentFixture<EditPIPOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPIPOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPIPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
