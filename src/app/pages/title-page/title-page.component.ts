import { Component, OnInit } from '@angular/core';
import { Anchors } from '@app/classes/anchors';
import { ScrollingService } from '@app/services/scrolling/scrolling.service';
// import JSONstarParticles from '@assets/json/star-particles.json';
declare let particlesJS: any;

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  typeOfAnchors: typeof Anchors;
  
  constructor(readonly scroller: ScrollingService) {
    this.typeOfAnchors = Anchors;
  }
  
  ngOnInit(): void {
    this.displayParticles();
  }

  private displayParticles() : void {    
    particlesJS.load('particles-js', '../assets/json/edge-particles.json', () => { console.log('Star particles loaded.') });
  }
}
