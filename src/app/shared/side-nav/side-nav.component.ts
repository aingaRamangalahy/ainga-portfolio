import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  menu = [
    { name: 'Home', url: '', icon: '' },
    { name: 'About me', url: '/about-me', icon: '' },
    { name: 'Resume', url: '/resume', icon: '' },
    { name: 'Resume', url: '/resume', icon: '' },
    { name: 'Skills', url: '/skills', icon: '' },
    { name: 'Contact', url: '/contact', icon: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
