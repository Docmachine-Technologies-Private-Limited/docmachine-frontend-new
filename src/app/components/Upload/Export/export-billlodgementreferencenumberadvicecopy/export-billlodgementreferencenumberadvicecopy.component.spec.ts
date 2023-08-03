import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBilllodgementreferencenumberadvicecopyComponent } from './export-billlodgementreferencenumberadvicecopy.component';

describe('ExportBilllodgementreferencenumberadvicecopyComponent', () => {
  let component: ExportBilllodgementreferencenumberadvicecopyComponent;
  let fixture: ComponentFixture<ExportBilllodgementreferencenumberadvicecopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBilllodgementreferencenumberadvicecopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportBilllodgementreferencenumberadvicecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
