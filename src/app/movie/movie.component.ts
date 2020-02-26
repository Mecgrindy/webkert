import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../home/home.component';

@Component({
  selector: 'web-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
