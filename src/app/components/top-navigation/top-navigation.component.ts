import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll() : void {
    this.viewPortScroller.scrollToAnchor('title-page');
  }
}
