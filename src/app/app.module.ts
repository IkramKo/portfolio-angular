import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@app/pages/app/app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@app/modules/material.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitlePageComponent,
    AboutMePageComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
    TopNavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
