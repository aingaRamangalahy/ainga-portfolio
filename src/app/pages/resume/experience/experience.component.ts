import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  events: any[];

  constructor() {}

  ngOnInit(): void {
    this.events = [
      {
        status: `MEAN Stack developer `,
        date: `June 2020 - Now :  W3D Madagascar`,
        icon: PrimeIcons.COG,
        color: '#2196F3',
        image: 'game-controller.jpg',
        description: `Build and maintain multimedia library web application.`,
        stack: ['Angular', "Node.JS", "Express", "MongoDB", "Git", "Bitbucket", "Gitlab"]
      },
      {
        status: `Internship as a web developer`,
        date: `July 2019 - January 2020:  Hellotana Madagascar`,
        icon: PrimeIcons.COG,
        color: '#2196F3',
        image: 'game-controller.jpg',
        description: `Build a reporting web app to monitor BPO agent production.
        Maintain internal software and website `,
        stack: ['PHP', "Jquery", "HTML", "CSS"]
      }
    ];
  }
}
