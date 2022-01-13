import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  constructor(private viewPortScroller: ViewportScroller) { }
  
  scroll(pageName: string) : void {
    this.viewPortScroller.scrollToAnchor(pageName);
  }
}
