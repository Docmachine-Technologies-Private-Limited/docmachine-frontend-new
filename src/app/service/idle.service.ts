import { Injectable } from "@angular/core";
import { fromEvent, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  public idle$: Subject<boolean> = new Subject();
  public wake$: Subject<boolean> = new Subject();

  isIdle = false;
  private idleAfterSeconds = 7200000;
  private countDown;

  constructor() {}

  callback(functioncall: any) {
    fromEvent(document, 'mousemove').subscribe(() => this.onInteraction(functioncall));
    fromEvent(document, 'touchstart').subscribe(() => this.onInteraction(functioncall));
    fromEvent(document, 'keydown').subscribe(() => this.onInteraction(functioncall));
  }
  onInteraction(functioncall:any) {
    if (this.isIdle) {
      this.isIdle = false;
      this.wake$.next(true);
    }

    clearTimeout(this.countDown);
    this.countDown = setTimeout(() => {
      this.isIdle = true;
      this.idle$.next(true);
      functioncall();
    }, this.idleAfterSeconds);
  }
}
