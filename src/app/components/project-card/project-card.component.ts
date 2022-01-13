import { Component, Input, OnInit } from '@angular/core';
import { ProjectInfo } from '@app/classes/project-info';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {
  @Input() project! : ProjectInfo;
  constructor() { }
  
  ngOnInit(): void {
    // this.project;
  }
}
