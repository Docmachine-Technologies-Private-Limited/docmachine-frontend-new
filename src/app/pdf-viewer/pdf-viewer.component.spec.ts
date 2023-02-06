import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFVIEWERComponent } from './pdf-viewer.component';

describe('PDFVIEWERComponent', () => {
  let component: PDFVIEWERComponent;
  let fixture: ComponentFixture<PDFVIEWERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDFVIEWERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDFVIEWERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
