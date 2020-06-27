import { searchType, MovieService } from './../../services/movie.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: searchType = searchType.all;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    // this.results.subscribe(res => {
    //   console.log('my data is ', this.results);
    // });
  }

}
