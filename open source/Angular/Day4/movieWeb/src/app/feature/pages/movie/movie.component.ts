import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { ImagePathPipe } from "../../../shared/pipes/image-path.pipe";
import { Movie } from '../../../core/interface/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [ImagePathPipe,RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movies! : Movie[]
  _apiService = inject(ApiService)
  ngOnInit(): void {
    this.getMovies()
  }


  getMovies(){
    this._apiService.getMovies().subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.movies =res.results;
          console.log(this.movies)
        },
        error(err) {
            console.log(err)
        },
        complete() {
          console.log('completed')

        },
      }
    )
  }
}
