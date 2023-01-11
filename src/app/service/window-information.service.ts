import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowInformationService {

  constructor() { }

  set_controller_of_width(fixed_width,id_or_className){
    var pixels = fixed_width;
    var win=this.WindowScreenInfo();
    var width =win['BODY_WIDTH'];
    var percentage = ( width - pixels );
    $(id_or_className).css('width',percentage+'px');
    $(window).resize(()=> {
      var winifo=this.WindowScreenInfo();
      var winWidth = winifo['BODY_WIDTH'];
      var percentage = ( winWidth - pixels );
      $(id_or_className).css('width',percentage+'px');
    });
  }

  set_width_grid(fixed_width,id_or_className){
    $('.dynamic_width_remove').remove();
    var win=this.WindowScreenInfo();
    var width =win['BODY_WIDTH'];
    $(`<style class="dynamic_width_remove">.dynamic_width{ grid-template-columns:auto calc(${width}px - ${fixed_width}px) !important;</style>`).appendTo("head");
    $(id_or_className).addClass('dynamic_width');
    $(window).resize(()=> {
      $('.dynamic_width_remove').remove();
      $(id_or_className).addClass('dynamic_width');
      var winifo=this.WindowScreenInfo();
      var winWidth = winifo['BODY_WIDTH'];
      $(`<style class="dynamic_width_remove">.dynamic_width{ grid-template-columns:auto calc(${winWidth}px - ${fixed_width}px) !important;</style>`).appendTo("head");
    });
  }
  getControllerProperties(id:any){
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
    var screenWidth = window.screen.width;
    return{
      BODY_HEIGHT:height,
      BODY_WIDTH:width,
      SCREEN_WIDTH:screenWidth,
      SCREEN_HEIGHT:screen.height,
      DOCUMENTS:$(id)
    }
  }
  WindowScreenInfo(){
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
    var screenWidth = window.screen.width;
    return{
      BODY_HEIGHT:height,
      BODY_WIDTH:width,
      SCREEN_WIDTH:screenWidth,
      SCREEN_HEIGHT:screen.height
    }
  }
}
