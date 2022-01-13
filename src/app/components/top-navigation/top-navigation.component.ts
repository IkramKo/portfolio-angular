import { Component, HostListener, OnInit } from '@angular/core';
import { Anchors } from '@app/classes/anchors';
import { ScrollingService } from '@app/services/scrolling/scrolling.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  initScreenHeight: number;
  typeOfAnchors: typeof Anchors;

  constructor(readonly scroller: ScrollingService) { 
    this.initScreenHeight = window.innerHeight;
    this.typeOfAnchors = Anchors;
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
}
