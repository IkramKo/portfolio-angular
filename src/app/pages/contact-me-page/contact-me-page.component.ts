import { Component, OnInit } from '@angular/core';
import { SkillsIcons } from '@app/classes/skills-icons';
@Component({
  selector: 'app-contact-me-page',
  templateUrl: './contact-me-page.component.html',
  styleUrls: ['./contact-me-page.component.scss']
})
export class ContactMePageComponent implements OnInit {
  typeOfSkills: typeof SkillsIcons;

  constructor() { 
    this.typeOfSkills = SkillsIcons;
  }

  ngOnInit(): void {
  }

}
