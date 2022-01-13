import { Component, OnInit } from '@angular/core';
import { SKILLS_LIST } from '@app/classes/skills';
@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  skillsList = SKILLS_LIST;

  constructor() { }
  ngOnInit(): void {
  }

}
