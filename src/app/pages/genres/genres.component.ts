import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private moviesServcie: MoviesService) {}

  ngOnInit(): void {
    this.moviesServcie.getMoviesGenres().subscribe((genresData) => (this.genres = genresData));
  }
}
