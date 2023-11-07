import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../../../environments/environment';

@Component({
  selector: 'template-main-page',
  templateUrl: './template-main-page.component.html',
  styleUrls: ['./template-main-page.component.scss']
})
export class TemplateMainPageComponent implements OnInit {
  @Input('text') TEXT:any='';
  @Input('visible') visible:boolean=true;
  @Input('NAME_OF_API_TYPE') NAME_OF_API_TYPE:boolean=true;
  API_URL: any = AppConfig?.environment;
  
  constructor() { }

  ngOnInit(): void {
    this.setTextAnimation(0.1, 6, 2, 'ease', '#ffffff', true);
  }
  setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }
}
