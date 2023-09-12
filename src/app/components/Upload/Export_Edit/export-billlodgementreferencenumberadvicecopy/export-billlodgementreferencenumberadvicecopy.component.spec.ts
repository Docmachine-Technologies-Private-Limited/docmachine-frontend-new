import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExportBilllodgementreferencenumberadvicecopyComponent } from './export-billlodgementreferencenumberadvicecopy.component';

describe('EditExportBilllodgementreferencenumberadvicecopyComponent', () => {
  let component: EditExportBilllodgementreferencenumberadvicecopyComponent;
  let fixture: ComponentFixture<EditExportBilllodgementreferencenumberadvicecopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExportBilllodgementreferencenumberadvicecopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExportBilllodgementreferencenumberadvicecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
