import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import JSONstarParticles from '@assets/json/star-particles.json';
declare let particlesJS: any;

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  constructor(private readonly viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.displayParticles();
  }

  scroll() : void {
    this.viewPortScroller.scrollToAnchor('about-me-page');
  }

  private displayParticles() : void {    
    particlesJS.load('particles-js', '../assets/json/edge-particles.json', () => { console.log('Star particles loaded.')});
  }
}
