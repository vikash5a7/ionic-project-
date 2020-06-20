import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
export enum searchType {
  all = '',
  movie = 'movie',
  series = 'series',
  apisode= 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'fcc59cb2';

  constructor(
    private http: HttpClientModule
  ) { }
    searchData() {
      
    }
    getDetails() {
    }

}
