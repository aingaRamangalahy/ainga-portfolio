import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  events: any[];

  constructor() {}

  ngOnInit(): void {
    this.events = [
      {
        status: `Master degree in Computer Science `,
        date: `2018 - 2020 :  Ecole Nationale d' Informatique, Fianarantsoa`,
        icon: PrimeIcons.COG,
        color: '#2196F3',
        image: 'game-controller.jpg',
        description: `Software Engineering and Database Administration`
      },
      {
        status: `Bachelor degree in Computer Science`,
        date: `2015 - 2018 :  Ecole Nationale d' Informatique, Fianarantsoa`,
        icon: PrimeIcons.COG,
        color: '#2196F3',
        image: 'game-controller.jpg',
        description: `Computer Science / basics Programing languages`
      }
    ];
  }
}
