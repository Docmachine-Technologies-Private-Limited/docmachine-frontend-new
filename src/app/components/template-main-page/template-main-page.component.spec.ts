import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMainPageComponent } from './template-main-page.component';

describe('TemplateMainPageComponent', () => {
  let component: TemplateMainPageComponent;
  let fixture: ComponentFixture<TemplateMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
