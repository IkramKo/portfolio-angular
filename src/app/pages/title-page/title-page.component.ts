import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  constructor(private readonly viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll() : void {
    this.viewPortScroller.scrollToAnchor('about-me-page');
  }
}
