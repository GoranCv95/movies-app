import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  p: number = 1;
  itemPerPage: number = 20;
  totalMovies: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.retriveData();
  }

  retriveData(){
    this.moviesService.searchMovies(2).subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
      this.totalMovies = movies.length
    })
  }

}
