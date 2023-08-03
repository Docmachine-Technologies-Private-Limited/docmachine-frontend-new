import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBilllodgementreferencenumberadvicecopyComponent } from './import-billlodgementreferencenumberadvicecopy.component';

describe('ImportBilllodgementreferencenumberadvicecopyComponent', () => {
  let component: ImportBilllodgementreferencenumberadvicecopyComponent;
  let fixture: ComponentFixture<ImportBilllodgementreferencenumberadvicecopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBilllodgementreferencenumberadvicecopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBilllodgementreferencenumberadvicecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
