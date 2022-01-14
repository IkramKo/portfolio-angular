import { Component, Input, OnInit } from '@angular/core';
import { EducationInfo } from '@app/classes/education-info';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  @Input() education! : EducationInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
