import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  categories = [
    'filmek', 'kedvencek'
  ];

  constructor() { }

  ngOnInit() {
  }

}
