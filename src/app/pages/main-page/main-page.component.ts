import { LocationStrategy, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { 
  }

  ngOnInit(): void {
    this.viewPortScroller.scrollToAnchor('title-page');
  }
}
