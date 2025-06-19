import { Component, inject } from '@angular/core';
import { People } from '../../../core/interface/people';
import { ApiService } from '../../../core/service/api.service';
import { ImagePathPipe } from "../../../shared/pipes/image-path.pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [ImagePathPipe,RouterLink],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  people! : People[]
  _apiService = inject(ApiService)
  ngOnInit(): void {
    this.getPeople()
  }


  getPeople(){
    this._apiService.getPeople().subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.people =res.results;
          console.log(this.people)
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
