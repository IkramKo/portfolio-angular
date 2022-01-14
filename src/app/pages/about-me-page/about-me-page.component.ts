import { Component, OnInit } from '@angular/core';
import { EducationInfo } from '@app/classes/education-info';
import { SKILLS_LIST } from '@app/classes/skills';
import JSONEducation from '@assets/json/education.json'
@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  skillsList = SKILLS_LIST;
  educationList: EducationInfo[] = [];

  constructor() { 
    this.fillEducationList();
  }

  ngOnInit(): void {
  }

  private fillEducationList() : void {
    const projectsNbr: number = Object.keys(JSONEducation).length;

    for (let i = 0; i < projectsNbr; i++) {
      this.educationList[i] = JSON.parse(JSON.stringify(JSONEducation[i]));
    }
  }
}
