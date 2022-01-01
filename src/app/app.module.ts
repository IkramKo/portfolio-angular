import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@app/pages/app/app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@app/modules/material.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { TitlePageComponent } from './pages/title-page/title-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    TitlePageComponent,
    AboutMePageComponent,
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
