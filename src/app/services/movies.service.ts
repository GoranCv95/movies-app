import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=311cf05b974463f8d093c263a8b7c26e')
  }
}
