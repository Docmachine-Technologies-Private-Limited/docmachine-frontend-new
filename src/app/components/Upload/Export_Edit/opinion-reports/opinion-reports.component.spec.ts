import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpinionReportsComponent } from './opinion-reports.component';

describe('EditOpinionReportsComponent', () => {
  let component: EditOpinionReportsComponent;
  let fixture: ComponentFixture<EditOpinionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOpinionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOpinionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
