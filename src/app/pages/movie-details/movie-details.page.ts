import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(private activateRoute: ActivatedRoute,
              private movieSerivce: MovieService) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    console.log('id of movie is ' , id);
    this.movieSerivce.getDetails(id).subscribe( result => {
    console.log('data is ' , result);
    this.information = result;
   });
  }
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
