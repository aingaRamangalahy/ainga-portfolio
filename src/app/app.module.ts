import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './pages/skills/skills.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationComponent } from './pages/resume/education/education.component';
import { ExperienceComponent } from './pages/resume/experience/experience.component';
import {CardModule} from 'primeng/card';
import {TimelineModule} from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';
import {ProgressBarModule} from 'primeng/progressbar';
const primes = [
  CardModule,
  TimelineModule,
  ChipModule,
  ProgressBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ...primes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
