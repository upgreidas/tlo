import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent implements OnInit {
  links = [
    {
      text: 'Link A',
      route: '/',
    },
    {
      text: 'Link B',
      route: '/',
    },
    {
      text: 'Link C',
      route: '/',
    },
    {
      text: 'Link D',
      route: '/',
    },
    {
      text: 'Link E',
      route: '/',
    },
    {
      text: 'Link F',
      route: '/',
    },
    {
      text: 'Link G',
      route: '/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
