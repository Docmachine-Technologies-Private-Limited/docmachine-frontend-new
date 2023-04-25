import { NgCustomTooltipsDirective } from './ng-custom-tooltips.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';
describe('NgCustomTooltipsDirective', () => {
  it('should create an instance', () => {
    const directive = new NgCustomTooltipsDirective({} as any);
    expect(directive).toBeTruthy();
  });
});
