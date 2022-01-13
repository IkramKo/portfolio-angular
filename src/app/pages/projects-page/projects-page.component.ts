import { Component, OnInit } from '@angular/core';
import JSONProjects from '@assets/json/projects.json';
import { ProjectInfo
 } from '@app/classes/project-info';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projectsList : ProjectInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.createProjects();
  }

  private createProjects() : void {
    const projectsNbr: number = Object.keys(JSONProjects).length;

    for (let i = 0; i < projectsNbr; i++) {
      this.projectsList[i] = JSON.parse(JSON.stringify(JSONProjects[i]));
    }
  }
}
