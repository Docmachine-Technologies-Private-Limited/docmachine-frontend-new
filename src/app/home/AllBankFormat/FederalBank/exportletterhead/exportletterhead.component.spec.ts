import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportletterheadComponent } from './exportletterhead.component';

describe('ExportletterheadComponent', () => {
  let component: ExportletterheadComponent;
  let fixture: ComponentFixture<ExportletterheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportletterheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportletterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
