import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories = [
    'filmek', 'kedvencek'
  ];

  constructor() { }

  ngOnInit() {
  }

}
