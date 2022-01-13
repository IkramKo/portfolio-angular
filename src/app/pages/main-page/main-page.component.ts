import { Component, OnInit } from '@angular/core';
import { Anchors } from '@app/classes/anchors';
import { ScrollingService } from '@app/services/scrolling/scrolling.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private readonly scroller: ScrollingService) { 
  }

  ngOnInit(): void {
    this.scroller.scroll(Anchors.Title);
  }
}
