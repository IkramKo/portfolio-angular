import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  // screen
  initScreenHeight: number;
  // currentScreenHeight: number;

  constructor(private viewPortScroller: ViewportScroller) { 
    this.initScreenHeight = window.innerHeight;
    // this.currentScreenHeight = window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const positionOpacityChange = 0.7 * this.initScreenHeight;
    let rootElement : HTMLElement = document.querySelector(':root') as HTMLElement;

    if(window.scrollY >= positionOpacityChange) {
      rootElement.style.setProperty('--top-nav-color', "rgb(10, 19, 20)");
    }
    if(window.scrollY <= positionOpacityChange) {
      rootElement.style.setProperty('--top-nav-color', "transparent");
    }
  }

  ngOnInit(): void {
  }

  scroll() : void {
    this.viewPortScroller.scrollToAnchor('title-page');
  }
}
