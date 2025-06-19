import { Component, inject } from '@angular/core';
import { Tv } from '../../../core/interface/tv';
import { ApiService } from '../../../core/service/api.service';
import { ImagePathPipe } from "../../../shared/pipes/image-path.pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv',
  imports: [ImagePathPipe,RouterLink],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  tvs! : Tv[]
  _apiService = inject(ApiService)
  ngOnInit(): void {
    this.getPeople()
  }


  getPeople(){
    this._apiService.getTV().subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.tvs =res.results;
          console.log(this.tvs)
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
