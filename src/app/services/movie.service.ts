import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    private http: HttpClient
  ) { }
    searchData(title: string, type: searchType): Observable<any>{
      return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => {
        console.log('Raw data---', results);
        // tslint:disable-next-line: no-string-literal
        return results['Search'];
      })
      );

    }
    getDetails(id: string) {
      console.log('id is ---', id);
      return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
    }

}
