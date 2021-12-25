import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() : void {
    this.drawer.toggle();
  }

}
