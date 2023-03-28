import { Component, OnInit, Input } from '@angular/core';

import {
  slideInLeftAnimation,
  slideInRightAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-customslider',
  templateUrl: './customslider.component.html',
  styleUrls: ['./customslider.component.scss'],
  animations: [
    slideInLeftAnimation({duration: 500}),
    slideInRightAnimation({duration: 500}),
    slideOutLeftAnimation({duration: 500}),
    slideOutRightAnimation({duration: 500}),
  ]
})
export class CustomsliderComponent implements OnInit {
  @Input() isIn = true;
  @Input() left = true;

  get right() {
    return !this.left;
  }

  get isOut() {
    return !this.isIn;
  }
  ngOnInit(): void {
    
  }
}
