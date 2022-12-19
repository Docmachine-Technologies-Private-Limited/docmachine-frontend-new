import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDownloaderCompComponent } from './excel-downloader-comp.component';

describe('ExcelDownloaderCompComponent', () => {
  let component: ExcelDownloaderCompComponent;
  let fixture: ComponentFixture<ExcelDownloaderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelDownloaderCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelDownloaderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
