import { Component, OnInit } from '@angular/core';
import JSONProjects from '@assets/json/projects.json';

interface ProjectInfo {
  title: string,
  image: string,
  description: string,
  sourceCode: string,
  link: string
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {
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
