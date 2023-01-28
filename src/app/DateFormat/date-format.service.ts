import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }
  removeAllSpaces(string: string){
    return string.replace(/ /g, "").toString();
  }
  removeAllUnderscore(string: string){
    return string.replace(/_/g, "").toString();
  }
  removeAllMinus(string: string){
    return string.replace(/_/g, "").toString();
  }
  DATE_FORMAT_CHANGE:any='';
  getNewString(dateString:any,type:any):any {
    var date = new Date(dateString.toString());
    if(type.toString()==("dd/mm/yyyy")){
      return `${date.getDate()<10?'0'+date.getDate():date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }else if(type.toString()==("mm/dd/yyyy")){
      return `${date.getMonth()+1}/${date.getDate()<10?'0'+date.getDate():date.getDate()}/${date.getFullYear()}`;
    }else{
      return `${date.getMonth()+1}/${date.getDate()<10?'0'+date.getDate():date.getDate()}/${date.getFullYear()}`;
    }
  }
  formatDate(date,format) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2){
        month = '0' + month;
    }
    if (day.length < 2){
      day = '0' + day;
    }
    return [year, month, day].join(format);
  }
  format_Date(date,format,type) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2){
        month = '0' + month;
    }
    if (day.length < 2){
      day = '0' + day;
    }
    if(type.toString()==("dd/mm/yyyy")){
      return [day, month, day].join(format);
    }else if(type.toString()==("mm/dd/yyyy")){
      return [month, day, year].join(format);
    }else{
      return [year, month, day].join(format);
    }
  }
}
